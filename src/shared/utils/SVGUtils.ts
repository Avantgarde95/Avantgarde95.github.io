export const usedSVGNames = new Set<string>();

export function createSVGID(name: string) {
  return `icon-${name}`;
}
