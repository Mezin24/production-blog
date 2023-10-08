type Mods = Record<string, boolean | string>;

export const classNames = (
  cls: string,
  mods: Mods,
  additionalClasses: string[],
): string => [
  cls,
  ...additionalClasses.filter(Boolean),
  ...Object.entries(mods)
    .filter(([_, value]) => Boolean(value))
    .map(([cls]) => cls),
].join(' ');
