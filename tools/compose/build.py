"""곡과 효과음을 렌더링해 web/assets/audio/에 쓴다.

사용: python3 tools/compose/build.py [곡이름...]   (이름을 안 주면 전부)
필요: numpy, ffmpeg(libmp3lame)
"""
import os
import subprocess
import sys
import wave

import numpy as np

sys.path.insert(0, os.path.dirname(__file__))
from synth import SR, lowpass  # noqa: E402
from songs import SONGS  # noqa: E402
from sfx import SFX  # noqa: E402
from ambience import AMB  # noqa: E402

OUT = os.path.join(os.path.dirname(__file__), '..', '..', 'web', 'assets', 'audio')


def write_wav(path, x, sr=SR, channels=1):
    x = np.clip(x, -1, 1)
    data = (x * 32767).astype('<i2').tobytes()
    with wave.open(path, 'wb') as w:
        w.setnchannels(channels)
        w.setsampwidth(2)
        w.setframerate(sr)
        w.writeframes(data)


def main(names):
    os.makedirs(OUT, exist_ok=True)
    want = set(names)
    for name, fn in SONGS.items():
        if want and name not in want:
            continue
        print('곡', name, end=' ', flush=True)
        y = fn().render()
        tmp = os.path.join(OUT, f'_{name}.wav')
        write_wav(tmp, y, channels=2)
        mp3 = os.path.join(OUT, f'bgm_{name}.mp3')
        subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', tmp, '-codec:a', 'libmp3lame', '-b:a', '128k', mp3], check=True)
        os.remove(tmp)
        print(f'{len(y) / SR:.1f}s', f'{os.path.getsize(mp3) // 1024}KB')
    for name, fn in SFX.items():
        if want and name not in want:
            continue
        y = fn()
        peak = np.max(np.abs(y)) or 1
        y = y / peak * 0.9
        # 끝의 거의 무음인 꼬리는 자른다
        loud = np.nonzero(np.abs(y) > 0.003)[0]
        y = y[: (loud[-1] + int(0.02 * SR)) if len(loud) else len(y)]
        # 22kHz 모노로 줄여 용량을 아낀다
        y22 = lowpass(y, 10000)[::2]
        write_wav(os.path.join(OUT, f'sfx_{name}.wav'), y22, sr=SR // 2)
    print('효과음', len(SFX), '개')
    for name, fn in AMB.items():
        if want and f'amb_{name}' not in want:
            continue
        y = fn()
        y = y / (np.max(np.abs(y)) or 1) * 0.8
        tmp = os.path.join(OUT, f'_amb_{name}.wav')
        write_wav(tmp, lowpass(y, 9000)[::2], sr=SR // 2)
        mp3 = os.path.join(OUT, f'amb_{name}.mp3')
        subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', tmp, '-codec:a', 'libmp3lame', '-b:a', '64k', mp3], check=True)
        os.remove(tmp)
        print('환경음', name, f'{os.path.getsize(mp3) // 1024}KB')


if __name__ == '__main__':
    main(sys.argv[1:])
