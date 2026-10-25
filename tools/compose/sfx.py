"""효과음. 모두 짧은 모노 신호(-1~1)."""
import numpy as np
from synth import SR, RNG, fm, bell, glock, square, lowpass, highpass, hz, kick, reverb, timpani


def T(sec):
    return np.arange(int(sec * SR)) / SR


def cat(*xs):
    return np.concatenate(xs)


def mix(*xs):
    n = max(len(x) for x in xs)
    out = np.zeros(n)
    for x in xs:
        out[: len(x)] += x
    return out


def at(x, sec, total=None):
    pad = np.zeros(int(sec * SR))
    y = cat(pad, x)
    if total:
        y = np.pad(y, (0, max(0, int(total * SR) - len(y))))
    return y


def verb(x, sec=0.8, mix_=0.25):
    st = np.stack([x, x], axis=1)
    return reverb(st, sec, mix=mix_)[:, 0]


def noise(sec):
    return RNG.standard_normal(int(sec * SR))


def blip():
    t = T(0.035)
    return np.where((hz(76) * t) % 1 < 0.5, 1.0, -1.0) * np.exp(-t / 0.012) * 0.35


def nxt():
    return glock(84, 0.05, 0.4)[: int(0.25 * SR)]


def select():
    return verb(mix(square(79, 0.05, 0.5), at(square(86, 0.07, 0.5), 0.055)), 0.5, 0.2)


def cancel():
    return mix(square(79, 0.05, 0.4), at(square(72, 0.08, 0.4), 0.055))


def cut():
    t = T(0.9)
    sweep = highpass(noise(0.9), 3000) * np.exp(-t / 0.25) * np.clip(t / 0.05, 0, 1) * 0.25
    chime = mix(bell(84, 0.4, 0.5), at(bell(88, 0.4, 0.45), 0.08), at(bell(91, 0.6, 0.45), 0.16))
    return verb(mix(sweep, chime), 1.6, 0.35)


def objection():
    t = T(1.0)
    boom = kick(1.2)
    burst = highpass(noise(0.6), 800) * np.exp(-T(0.6) / 0.12) * 0.6
    stab = mix(*[fm(n, 0.35, 0.6, ratio=1, index=3, idecay=0.2, a=0.005, d=0.3, s=0.6, r=0.15, fb=0.5) for n in (60, 63, 67, 72)])
    return verb(mix(boom, burst, at(stab, 0.03)), 1.2, 0.25)


def wrong():
    t = T(0.35)
    f = 220 - 90 * t / 0.35
    y = np.where((np.cumsum(f) / SR) % 1 < 0.5, 1.0, -1.0) * np.exp(-t / 0.2)
    y2 = np.where((np.cumsum(f * 1.06) / SR) % 1 < 0.5, 1.0, -1.0) * np.exp(-t / 0.2)
    return lowpass((y + y2) * 0.3, 3000)


def correct():
    return verb(mix(bell(79, 0.3, 0.5), at(bell(84, 0.5, 0.55), 0.1), at(bell(91, 0.7, 0.4), 0.2)), 1.2, 0.3)


def press():
    t = T(0.25)
    scratch = highpass(noise(0.25), 2500) * (0.5 + 0.5 * np.sin(2 * np.pi * 28 * t)) * np.exp(-t / 0.1) * 0.35
    return mix(scratch, at(square(84, 0.04, 0.3), 0.12))


def page():
    t = T(0.45)
    env = np.sin(np.pi * np.clip(t / 0.45, 0, 1)) ** 1.5
    y = lowpass(highpass(noise(0.45), 600), 5000) * env * 0.45
    return verb(y, 0.4, 0.15)


def place():
    t = T(0.15)
    return (lowpass(noise(0.15), 900) * np.exp(-t / 0.03) * 0.6 + np.sin(2 * np.pi * 180 * t) * np.exp(-t / 0.04) * 0.5)


def step():
    t = T(0.09)
    return lowpass(noise(0.09), 1400) * np.exp(-t / 0.018) * 0.5


def chime():
    # 초인종 띵-동
    return verb(mix(fm(83, 0.5, 0.6, ratio=1, index=0.6, idecay=0.3, a=0.002, d=1.2, s=0, r=0.6),
                    at(fm(79, 0.8, 0.6, ratio=1, index=0.6, idecay=0.3, a=0.002, d=1.4, s=0, r=0.8), 0.45)), 1.0, 0.3)


def thud():
    # 화단에 떨어지는 둔탁한 쿵
    t = T(1.2)
    body = np.sin(2 * np.pi * np.cumsum(38 + 60 * np.exp(-t / 0.05)) / SR) * np.exp(-t / 0.3)
    dirt = lowpass(noise(1.2), 500) * np.exp(-t / 0.12) * 0.7
    return verb(mix(body * 1.2, dirt), 1.6, 0.3)


def door():
    t = T(0.7)
    creak_f = 320 + 80 * np.sin(2 * np.pi * 3 * t)
    creak = np.sign(np.sin(2 * np.pi * np.cumsum(creak_f) / SR)) * (np.sin(2 * np.pi * 37 * t) > 0.6) * 0.12 * np.exp(-t / 0.4)
    click = at(lowpass(noise(0.05), 2500) * np.exp(-T(0.05) / 0.008) * 0.8, 0.55)
    return verb(mix(lowpass(creak, 2500), click), 0.8, 0.2)


def ghost():
    # 거꾸로 감기는 반짝임
    x = verb(mix(glock(88, 0.3, 0.5), at(glock(95, 0.3, 0.4), 0.07), at(glock(91, 0.4, 0.4), 0.15)), 1.8, 0.6)
    y = x[::-1].copy()
    t = np.arange(len(y)) / SR
    return y * np.clip(t / 0.3, 0, 1)


def phone():
    t = T(0.2)
    buzz = np.sin(2 * np.pi * 160 * t) * (0.5 + 0.5 * np.sign(np.sin(2 * np.pi * 50 * t))) * 0.5
    return cat(buzz, np.zeros(int(0.12 * SR)), buzz)


def banner():
    t = T(0.7)
    env = np.sin(np.pi * np.clip(t / 0.7, 0, 1)) ** 2
    y = lowpass(highpass(noise(0.7), 300), 2500) * env * 0.4
    return verb(y, 0.9, 0.2)


def save():
    return verb(mix(glock(84, 0.2, 0.4), at(glock(91, 0.3, 0.35), 0.09)), 0.8, 0.3)


SFX = {'blip': blip, 'next': nxt, 'select': select, 'cancel': cancel, 'cut': cut, 'objection': objection, 'wrong': wrong,
       'correct': correct, 'press': press, 'page': page, 'place': place, 'step': step, 'chime': chime, 'thud': thud,
       'door': door, 'ghost': ghost, 'phone': phone, 'banner': banner, 'save': save}
