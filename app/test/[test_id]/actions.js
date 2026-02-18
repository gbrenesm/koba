'use server';

import { questionsBySection } from '@/services/questions';

export async function getQuestionsBySection(testId, sectionId) {
  return await questionsBySection(testId, sectionId);
}