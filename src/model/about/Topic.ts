export const topics = ['Job', 'Hobbies', 'Contacts'] as const;

/**
 * Topic of each question.
 */
export type Topic = typeof topics[number];
