"""1장 배경음악 7곡. 음표는 마디 단위 문자열로 쓴다.

멜로디 표기: 'a:1.5 f:.5 e d' → 음이름(소문자), #/b 반음, ^ 옥타브 위, _ 아래, ':길이'(박, 기본 1), '-' 쉼표.
화음 표기: [('Dm9', 4), ...] 마디 안에서 (화음, 박 수).
"""
from synth import (Track, chord, root, mel, epiano, bell, bass, pluck_bass, brass, lead, flute, pad, strings,
                   pulse, square, harp, glock)


def melody(tr, bus, inst, bar, bars, octave=5, vel=0.7, legato=0.95):
    beat = bar * tr.bpb
    for spec in bars:
        for tok in spec.split():
            name, _, d = tok.partition(':')
            d = float(d) if d else 1.0
            if name != '-':
                tr.note(bus, inst, beat, d * legato, mel(name, octave)[0], vel)
            beat += d


def chords_per_bar(prog):
    """['Dm9', ('Gm7 C'), ...] → 마디별 [(화음, 시작박, 박수)]"""
    out = []
    for item in prog:
        names = item.split()
        n = len(names)
        out.append([(c, i * 4 / n, 4 / n) for i, c in enumerate(names)])
    return out


def arp(tr, bus, inst, prog, pattern, step=0.5, octave=4, vel=0.5, start_bar=0, dur=None):
    """화음을 pattern(화음 음의 순번, 7 이상은 옥타브 위) 순서로 쪼개 친다."""
    for b, bar in enumerate(chords_per_bar(prog)):
        for name, at, beats in bar:
            notes = chord(name, octave)
            k = 0
            t = 0.0
            while t < beats - 1e-6:
                idx = pattern[k % len(pattern)]
                n = notes[idx % len(notes)] + 12 * (idx // len(notes))
                tr.note(bus, inst, (start_bar + b) * 4 + at + t, dur or step * 1.6, n, vel * (1.0 if k % 4 == 0 else 0.8))
                t += step
                k += 1


def block(tr, bus, inst, prog, hits, octave=4, vel=0.5, start_bar=0, top=None):
    """화음을 정해진 박(hits=[(박, 길이), ...])에 한꺼번에 친다."""
    for b, bar in enumerate(chords_per_bar(prog)):
        for name, at, beats in bar:
            notes = chord(name, octave)
            if top:
                notes = notes[:top]
            for h, d in hits:
                if at <= h < at + beats:
                    for n in notes:
                        tr.note(bus, inst, (start_bar + b) * 4 + h, d, n, vel)


def basses(tr, bus, inst, prog, pattern, octave=2, vel=0.8, start_bar=0):
    """pattern: [(박, 길이, 반음 이동)] 를 화음마다 반복"""
    for b, bar in enumerate(chords_per_bar(prog)):
        for name, at, beats in bar:
            r = root(name, octave)
            for h, d, iv in pattern:
                if h < beats:
                    tr.note(bus, inst, (start_bar + b) * 4 + at + h, d, r + iv, vel)


def walking(tr, bus, inst, prog, octave=2, vel=0.75, start_bar=0):
    """재즈 워킹 베이스: 근음 - 3/5도 - 다음 근음으로 반음 접근"""
    bars = chords_per_bar(prog)
    flat = [(b, at, beats, name) for b, bar in enumerate(bars) for name, at, beats in bar]
    for i, (b, at, beats, name) in enumerate(flat):
        r = root(name, octave)
        tones = chord(name, octave)
        nxt = root(flat[(i + 1) % len(flat)][3], octave)
        line = [r, tones[2] if len(tones) > 2 else r + 7, tones[1] + (12 if tones[1] < r else 0), nxt + (1 if nxt < r else -1)]
        for k in range(int(beats)):
            n = line[k] if beats >= 4 else ([r, nxt + (1 if nxt < r else -1)][k] if k < 2 else r)
            tr.note(bus, inst, (start_bar + b) * 4 + at + k, 0.9, n, vel * (1 if k == 0 else 0.85))


def drums(tr, bus, pattern, bars, start_bar=0, vel=0.8):
    """pattern: {'kick': [박...], 'snare': [...]} 한 마디 분량"""
    for b in range(bars):
        for kind, beats in pattern.items():
            for x in beats:
                v = x[1] if isinstance(x, tuple) else vel
                at = x[0] if isinstance(x, tuple) else x
                tr.drum(bus, kind, (start_bar + b) * 4 + at, v)


# ---------- 1. 타이틀: 밤 항구 ----------

def title():
    tr = Track(76, 16)
    prog = ['Dm9', 'Bbmaj7', 'Gm7', 'A7sus4 A7', 'Dm9', 'Bbmaj7', 'Gm7 C', 'Fmaj7 A7'] * 2
    tr.bus('ep', -0.25, 0.55, 0.35); tr.bus('pad', 0.0, 0.22, 0.5); tr.bus('bass', 0, 0.6, 0.12)
    tr.bus('bell', 0.3, 0.38, 0.45); tr.bus('fl', 0.15, 0.5, 0.4); tr.bus('dr', 0.1, 0.35, 0.2)
    arp(tr, 'ep', epiano, prog, [0, 2, 4, 1, 3, 2, 4, 1], step=0.5, octave=4, vel=0.45)
    block(tr, 'pad', pad, prog, [(0, 3.9), (2, 1.9)], octave=3, vel=0.5, top=3)
    basses(tr, 'bass', bass, prog, [(0, 3.5, 0), (2, 1.8, 0)], vel=0.7)
    melody(tr, 'bell', bell, 0, ['a:1.5 f:.5 e d', 'f:1.5 d:.5 c d', 'bb a g f', 'e:2 c#:1 a_', 'a:1.5 f:.5 e d',
                                  'f g a c^', 'bb:1.5 a:.5 g e', 'f:2 e:2'], vel=0.6)
    melody(tr, 'fl', flute, 8, ['d^:2 c^ a', 'bb:1.5 a:.5 f:2', 'g a bb d^', 'c#^:3 a', 'd^:1.5 e^:.5 f^ e^',
                                 'd^:2 c^ bb', 'a g e c', 'd:3 -'], vel=0.55)
    drums(tr, 'dr', {'shaker': [0.5, 1.5, 2.5, 3.5, (1.75, 0.4), (3.75, 0.4)], 'rim': [(3, 0.4)]}, 8, start_bar=8, vel=0.5)
    return tr


# ---------- 2. 사무실: 느긋한 재즈 ----------

def office():
    tr = Track(92, 16, swing=0.34)
    prog = ['Fmaj7', 'Em7 A7', 'Dm7', 'G7', 'Gm7', 'C7', 'Fmaj7', 'Gm7 C7',
            'Fmaj7', 'Em7 A7', 'Dm7', 'G7', 'Gm7', 'C7', 'Gm7 C7', 'Fmaj7 C7']
    tr.bus('ep', -0.3, 0.5, 0.25); tr.bus('bass', 0.05, 0.75, 0.08); tr.bus('dr', 0.2, 0.5, 0.15)
    tr.bus('lead', 0.25, 0.4, 0.3); tr.bus('vib', 0.25, 0.42, 0.35)
    block(tr, 'ep', epiano, prog, [(0, 1.2), (1.5, 0.4), (3, 0.7)], octave=4, vel=0.42)
    walking(tr, 'bass', pluck_bass, prog, vel=0.8)
    drums(tr, 'dr', {'brush': [1, 3], 'hat': [(0, 0.5), (1, 0.6), (1.5, 0.35), (2, 0.5), (3, 0.6), (3.5, 0.35)],
                     'kick': [(0, 0.35), (2.5, 0.25)]}, 16)
    melody(tr, 'lead', flute, 0, ['-:1 a:.5 c^:.5 e^:1.5 d^:.5', 'c^ a g:1.5 e:.5', 'f:.5 a:.5 c^ d^:1.5 c^:.5',
                                   'b a:.5 g:.5 f:2', '-:1 bb:.5 d^:.5 f^:1.5 e^:.5', 'd^ bb g e', 'f:1.5 g:.5 a:2',
                                   '-:2 g:.5 a:.5 bb:.5 b:.5'], vel=0.55)
    melody(tr, 'vib', glock, 8, ['c^:.5 a:.5 f:.5 a:.5 c^ e^', 'd^ b:.5 g:.5 c#^ a', 'f^:1.5 e^:.5 d^ a',
                                  'b:.5 d^:.5 f^:.5 e^:.5 d^:2', 'bb d^ f^ e^', 'e^:.5 d^:.5 c^:.5 bb:.5 g:2',
                                  'a bb b c^', 'a:3 -'], octave=5, vel=0.5)
    return tr


# ---------- 3. 탐색: 밤의 맨션 ----------

def explore():
    tr = Track(100, 16)
    prog = ['Am', 'Am/G', 'Fmaj7', 'E7', 'Am', 'Am/G', 'Dm7', 'E7sus4 E7',
            'Fmaj7', 'G', 'Em7', 'Am', 'Fmaj7', 'G', 'Bm7b5', 'E7']
    tr.bus('arp', -0.45, 0.32, 0.3); tr.bus('echo', 0.45, 0.18, 0.4); tr.bus('bass', 0, 0.7, 0.1)
    tr.bus('dr', 0, 0.42, 0.15); tr.bus('bell', 0.2, 0.42, 0.45); tr.bus('fl', -0.1, 0.42, 0.4); tr.bus('pad', 0, 0.16, 0.5)
    pat = [0, 1, 2, 4, 2, 1, 0, 1]
    arp(tr, 'arp', pulse, prog, pat, step=0.25, octave=4, vel=0.45, dur=0.2)
    arp(tr, 'echo', pulse, prog, pat, step=0.25, octave=4, vel=0.35, dur=0.2, start_bar=0)
    # 메아리 버스는 3/16박 늦게: 신호를 밀어 넣는다
    e = tr.buses['echo']['sig']
    sh = int(tr.t(0.75) * 44100)
    tr.buses['echo']['sig'] = __import__('numpy').concatenate([__import__('numpy').zeros(sh), e[:-sh]])
    basses(tr, 'bass', pluck_bass, prog, [(0, 0.45, 0), (0.5, 0.4, 12), (1.5, 0.45, 0), (2, 0.4, 0), (2.5, 0.4, 12), (3.5, 0.4, 7)], vel=0.75)
    drums(tr, 'dr', {'kick': [0, 2.5], 'rim': [(1, 0.5), (3, 0.6)], 'hat': [(x / 2, 0.35 + 0.2 * (x % 2)) for x in range(8)]}, 16)
    block(tr, 'pad', pad, prog, [(0, 3.9)], octave=3, vel=0.45, top=3)
    melody(tr, 'fl', flute, 0, ['-:4', '-:4', 'c^:2 b a', 'g#:4', '-:4', '-:4', 'f a d^:2', 'b:2 g#:2'], vel=0.5)
    melody(tr, 'bell', bell, 8, ['a c^ e^:2', 'd^ b g:2', 'g b d^ e^', 'c^:3 -', 'a c^ f^:1.5 e^:.5', 'd^:2 b d^',
                                  'c^ b a f', 'g#:2 b e'], vel=0.55)
    return tr


# ---------- 4. 심문: 증언 ----------

def trial():
    tr = Track(138, 32)
    intro = ['Cm', 'Cm', 'Ab', 'Bb']
    A = ['Cm', 'Cm', 'Ab', 'Bb', 'Cm', 'Cm', 'Fm', 'G7']
    B = ['Ab', 'Bb', 'Gm', 'Cm', 'Fm', 'Gm', 'Ab', 'G7']
    prog = intro + A + B + A + intro
    tr.bus('bass', 0, 0.8, 0.08); tr.bus('stab', -0.2, 0.42, 0.25); tr.bus('dr', 0, 0.4, 0.12)
    tr.bus('lead', 0.15, 0.5, 0.3); tr.bus('str', -0.1, 0.3, 0.45); tr.bus('timp', 0, 0.55, 0.3)
    basses(tr, 'bass', bass, prog, [(x / 2, 0.42, 12 if x % 2 else 0) for x in range(8)], vel=0.75)
    block(tr, 'stab', brass, prog, [(0, 0.3), (1.5, 0.3), (3, 0.2), (3.5, 0.3)], octave=4, vel=0.55)
    drums(tr, 'dr', {'kick': [0, 1.5, 2, (3.5, 0.6)], 'snare': [1, 3], 'hat': [(x / 2, 0.3 + 0.15 * (x % 2 == 0)) for x in range(8)]}, 28, start_bar=4)
    drums(tr, 'dr', {'kick': [0, 2], 'hat': [1, 3]}, 4, start_bar=0, vel=0.6)
    for b in (0, 2, 28, 30):
        tr.drum('timp', 'timp', b * 4, 0.9)
    for b in (4, 12, 20):
        tr.drum('dr', 'cym', b * 4, 0.7)
    a_mel = ['g:1.5 g:.5 eb^ d^', 'c^:2 - g', 'ab c^ eb^:1.5 d^:.5', 'd^ bb f:2', 'g:1.5 g:.5 eb^ f^',
             'g^:2 f^ eb^', 'ab^ g^ f^ eb^', 'd^:2 b:2']
    melody(tr, 'lead', lead, 4, a_mel, vel=0.6)
    melody(tr, 'lead', lead, 20, a_mel, vel=0.62)
    melody(tr, 'str', strings, 12, ['c^:2 eb^:2', 'd^:2 f^:2', 'd^:2 g^:2', 'eb^:3 -', 'f^ ab^ g^ f^', 'g^ bb^ g^ f^',
                                     'eb^ f^ g^ ab^', 'g^:2 f^ d^'], vel=0.6)
    block(tr, 'str', strings, B, [(0, 3.9)], octave=3, vel=0.35, start_bar=12, top=3)
    return tr


# ---------- 5. 긴장: 생각 중(퍼즐) ----------

def tension():
    tr = Track(92, 16)
    prog = ['Em9', 'Cmaj7', 'Am9', 'B7sus4', 'Em9', 'Cmaj7', 'Am7 D', 'Bsus4 B7'] * 2
    tr.bus('ost', 0.3, 0.3, 0.4); tr.bus('pad', -0.2, 0.25, 0.55); tr.bus('bass', 0, 0.6, 0.1)
    tr.bus('tick', -0.4, 0.4, 0.1); tr.bus('ep', -0.1, 0.5, 0.35)
    ost = mel('e b_ g b_ f# b_ g b_')
    for b in range(16):
        for k, n in enumerate(ost):
            tr.note('ost', glock, b * 4 + k * 0.5, 0.4, n, 0.35 if k % 2 else 0.5)
    block(tr, 'pad', pad, prog, [(0, 3.95)], octave=3, vel=0.55, top=4)
    basses(tr, 'bass', bass, prog, [(0, 0.5, 0), (1, 0.4, 0), (2, 0.5, 0), (3, 0.4, 0)], vel=0.55)
    drums(tr, 'tick', {'tick': [(x / 2, 0.6 if x % 2 == 0 else 0.35) for x in range(8)], 'kick': [(0, 0.35)]}, 16)
    melody(tr, 'ep', epiano, 8, ['b:2 a g', 'e:2 g b', 'c^:1.5 b:.5 a:2', 'f#:4', 'g a b d^', 'e^:2 d^ b', 'c^ b a f#', 'd#:3 -'],
           octave=5, vel=0.6)
    return tr


# ---------- 6. 진실: 감정 ----------

def truth():
    tr = Track(70, 16)
    prog = ['Abmaj7', 'Bb', 'Gm7', 'Cm', 'Abmaj7', 'Bb', 'Eb', 'Eb',
            'Abmaj7', 'Bb', 'Gm7', 'Cm', 'Fm7', 'Gm7', 'Abmaj7', 'Bbsus4 Bb']
    tr.bus('ep', -0.25, 0.5, 0.4); tr.bus('str', 0.2, 0.28, 0.55); tr.bus('bass', 0, 0.55, 0.15)
    tr.bus('mel', 0.05, 0.55, 0.45); tr.bus('bell', 0.35, 0.25, 0.5)
    arp(tr, 'ep', epiano, prog, [0, 2, 4, 1, 2, 4, 1, 2], step=0.5, octave=4, vel=0.42)
    block(tr, 'str', strings, prog, [(0, 3.95)], octave=3, vel=0.5, top=3)
    basses(tr, 'bass', bass, prog, [(0, 3.8, 0)], vel=0.65)
    melody(tr, 'mel', strings, 0, ['eb^:1.5 f^:.5 g^:2', 'f^:1.5 eb^:.5 d^:2', 'bb d^ g^:1.5 f^:.5', 'eb^:3 d^:.5 c^:.5',
                                    'c^ eb^ ab^:1.5 g^:.5', 'f^:2 d^ bb', 'g^:4', '-:2 bb:.5 c^:.5 d^'], vel=0.62)
    melody(tr, 'mel', strings, 8, ['eb^:1.5 f^:.5 g^ ab^', 'bb^:1.5 ab^:.5 g^ f^', 'g^ f^ d^ bb', 'c^:2 eb^ g^',
                                    'ab^:2 g^ f^', 'g^:2 f^ d^', 'eb^:2 c^ eb^', 'f^:2 d^:2'], vel=0.66)
    melody(tr, 'bell', glock, 8, ['g^:4', 'f^:4', 'd^:4', 'eb^:4', 'c^:4', 'd^:4', 'eb^:4', 'd^:4'], octave=5, vel=0.4)
    return tr


# ---------- 7. 에필로그: 카페 「여백」 ----------

def epilogue():
    tr = Track(84, 16, swing=0.22)
    prog = ['Bbmaj7', 'Gm7', 'Cm7', 'F7', 'Dm7', 'G7', 'Cm7', 'F7',
            'Ebmaj7', 'Ebm6', 'Dm7', 'G7', 'Cm7', 'F7', 'Bbmaj7', 'Cm7 F7']
    tr.bus('ep', -0.3, 0.5, 0.3); tr.bus('bass', 0, 0.7, 0.1); tr.bus('dr', 0.2, 0.4, 0.15); tr.bus('fl', 0.2, 0.5, 0.38)
    tr.bus('harp', -0.15, 0.3, 0.4)
    block(tr, 'ep', epiano, prog, [(0, 1.5), (2.5, 1.2)], octave=4, vel=0.42)
    walking(tr, 'bass', pluck_bass, prog, vel=0.7)
    drums(tr, 'dr', {'brush': [1, 3, (2.5, 0.4)], 'hat': [(0, 0.35), (2, 0.35)], 'kick': [(0, 0.3)]}, 16)
    melody(tr, 'fl', flute, 0, ['d^:1.5 c^:.5 bb f', 'g bb d^:2', 'eb^:1.5 d^:.5 c^ g', 'a:2 - f', 'a c^ f^:1.5 e^:.5',
                                 'd^:2 b:2', 'c^ eb^ g^ f^', 'eb^:3 -', 'd^:1.5 eb^:.5 g^:2', 'gb^:2 eb^ c^',
                                 'f^:1.5 e^:.5 d^ a', 'b:2 d^ f^', 'eb^:1.5 d^:.5 c^ bb', 'a c^ eb^ a', 'bb:3 -', '-:2 f:.5 g:.5 a'], vel=0.55)
    arp(tr, 'harp', harp, ['Bbmaj7', 'Gm7', 'Cm7', 'F7'] * 4, [0, 1, 2, 3], step=1, octave=5, vel=0.25)
    return tr


SONGS = {'title': title, 'office': office, 'explore': explore, 'trial': trial, 'tension': tension, 'truth': truth,
         'epilogue': epilogue}
