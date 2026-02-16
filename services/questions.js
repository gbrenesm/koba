import { getQuestionsOfTest } from '../modules/questions.js';
import { getTestById } from '../modules/tests.js';

export const questionsTests = async (test_id) => {
  "use server";
  try {
    const test = await getTestById(test_id);
    const questions = await getQuestionsOfTest(test_id);
    return { test, questions };
  } catch (error) {
    console.error('Error fetching questions:', error);
    throw error;
  }
}