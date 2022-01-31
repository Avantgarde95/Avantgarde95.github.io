/**
 * Programming languages used in the projects.
 */
export type ProgrammingLanguage = string;

/**
 * Information of each (GitHub) project.
 */
export interface Project {
    name: string;
    description: string;
    repositoryURL: string;
    imageURL: string;
    languageMap: Record<ProgrammingLanguage, number>;
}
