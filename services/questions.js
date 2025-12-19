import { getQuestionsOfTest } from '../modules/questions.js';

export const questionsTests = async (test_id) => {
  "use server";
  try {
    const questions = await getQuestionsOfTest(test_id);
    console.log("Respuestas", questions)
    return questions;
  } catch (error) {
    console.error('Error fetching questions:', error);
    throw error;
  }
}