export type RGB = [number, number, number];

export const differenceColor = (color: RGB, level: number) => {
  const bias = 16 - level > 0 ? 16 - level : 1;
  return color.map((channel) => {
    if (Math.trunc(Math.random() + 0.5)) {
      return channel + bias > 255 ? channel + bias : channel - bias;
    } else {
      return channel - bias < 0 ? channel - bias : channel + bias;
    }
  }) as RGB;
};
