"""배경별 환경음. 이음매 없이 반복되는 모노 루프(-1~1). 배경음악 아래에 아주 작게 깐다."""
import numpy as np
from synth import SR, RNG, lowpass, highpass

LEN = 16.0  # 초


def T(sec=LEN):
    return np.arange(int(sec * SR)) / SR


def noise(sec=LEN):
    return RNG.standard_normal(int(sec * SR))


def loop(x, fade=1.5):
    """끝 fade초를 앞쪽에 겹쳐 이음매를 없앤다"""
    n = int(fade * SR)
    head, body, tail = x[:n], x[n:-n], x[-n:]
    w = np.linspace(0, 1, n)
    return np.concatenate([head * w + tail * (1 - w), body])


def slow(t, period, lo=0.3, hi=1.0, phase=0.0):
    """루프 길이에 딱 맞게 도는 느린 흔들림"""
    k = max(1, round(LEN / period))
    return lo + (hi - lo) * (0.5 + 0.5 * np.sin(2 * np.pi * k * t / LEN + phase))


def sea():
    """밤 항구: 파도가 밀려왔다 빠지는 소리 + 낮은 바람"""
    t = T(LEN + 1.5)
    waves = lowpass(noise(LEN + 1.5), 700) * slow(t, 5.3, 0.15, 1.0) * 0.6
    wind = lowpass(highpass(noise(LEN + 1.5), 200), 1200) * slow(t, 8, 0.2, 0.5, 1.3) * 0.25
    return loop(waves + wind)


def rain():
    """비: 고르게 쏟아지는 빗소리 + 가끔 굵은 빗방울"""
    t = T(LEN + 1.5)
    hiss = lowpass(highpass(noise(LEN + 1.5), 1500), 7000) * 0.35
    drops = np.zeros_like(t)
    for s in RNG.uniform(0, LEN + 1.4, 160):
        i = int(s * SR); n = int(0.03 * SR)
        drops[i:i + n] += np.exp(-np.arange(n) / (0.006 * SR)) * RNG.uniform(0.2, 0.6)
    return loop(hiss + highpass(drops, 900) * 0.6)


def crowd():
    """라이브하우스·아케이드: 알아들을 수 없는 웅성거림"""
    t = T(LEN + 1.5)
    out = np.zeros_like(t)
    for _ in range(9):  # 사람 수만큼 말소리 덩어리
        f = RNG.uniform(250, 700)
        band = lowpass(highpass(noise(LEN + 1.5), f * 0.7), f * 1.6)
        syll = 0.5 + 0.5 * np.sign(np.sin(2 * np.pi * RNG.uniform(2.5, 4.5) * t + RNG.uniform(0, 6)))
        out += band * lowpass(syll, 8) * slow(t, RNG.uniform(3, 7), 0.2, 1.0, RNG.uniform(0, 6))
    return loop(out * 0.25)


def fire():
    """불탄 자리·화재 회상: 낮은 웅웅거림 + 타닥타닥"""
    t = T(LEN + 1.5)
    roar = lowpass(noise(LEN + 1.5), 300) * slow(t, 4, 0.4, 1.0) * 0.5
    crack = np.zeros_like(t)
    for s in RNG.uniform(0, LEN + 1.4, 220):
        i = int(s * SR); n = int(0.012 * SR)
        crack[i:i + n] += RNG.standard_normal(n) * np.exp(-np.arange(n) / (0.002 * SR)) * RNG.uniform(0.3, 1.0)
    return loop(roar + highpass(crack, 2000) * 0.5)


def hum():
    """취조실·사무실: 형광등 웅 소리 + 아주 작은 공조 소음"""
    t = T(LEN + 1.5)
    k = round(LEN * 120) / LEN  # 루프에 맞춘 120Hz 근처
    buzz = (np.sin(2 * np.pi * k * t) + 0.4 * np.sin(2 * np.pi * 2 * k * t) + 0.15 * np.sin(2 * np.pi * 3 * k * t)) * 0.08
    air = lowpass(noise(LEN + 1.5), 400) * 0.18
    return loop(buzz + air)


AMB = {'sea': sea, 'rain': rain, 'crowd': crowd, 'fire': fire, 'hum': hum}
