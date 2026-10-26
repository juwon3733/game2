"""GPT가 준 컷을 게임 컷 규칙(회색 단계 + 시점 포인트 색 하나, 순서 디더링, 4배 도트)으로 맞춘다.

사용: python3 tools/dither-cut.py <입력.png> <출력.png> --accent c9961a [--levels 4]
  --levels 4 : 1장 초기 컷(회색 4단계)과 맞출 때. 기본 8.
입력은 1536x1024(또는 비율이 같은 아무 크기). 출력은 384x256 도트를 4배로 키운 1536x1024.
"""
import argparse

import numpy as np
from PIL import Image

BAYER = np.array([[0, 8, 2, 10], [12, 4, 14, 6], [3, 11, 1, 9], [15, 7, 13, 5]]) / 16.0


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('src'); ap.add_argument('dst')
    ap.add_argument('--accent', required=True, help='포인트 색 hex (예: c9961a)')
    ap.add_argument('--levels', type=int, default=8)
    a = ap.parse_args()
    acc = np.array([int(a.accent[i:i + 2], 16) for i in (0, 2, 4)], float)
    im = Image.open(a.src).convert('RGB').resize((384, 256), Image.BOX)
    px = np.asarray(im, float)
    # 포인트 색에 가까운(채도 있는 같은 색상) 칸은 포인트 색으로
    is_acc = np.abs(px - acc).sum(-1) < 90
    lum = px @ [0.299, 0.587, 0.114] / 255 * (a.levels - 1)
    h, w = lum.shape
    th = np.tile(BAYER, (h // 4 + 1, w // 4 + 1))[:h, :w]
    q = np.where(lum - np.floor(lum) > th, np.ceil(lum), np.floor(lum)).clip(0, a.levels - 1)
    grey = (q / (a.levels - 1) * 255).round()
    out = np.stack([grey] * 3, -1)
    out[is_acc] = acc
    Image.fromarray(out.astype(np.uint8)).resize((1536, 1024), Image.NEAREST).save(a.dst)


if __name__ == '__main__':
    main()
