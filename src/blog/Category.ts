export const allCategories = ["Computer", "Music", "Misc"] as const;

export type Category = typeof allCategories[number];
