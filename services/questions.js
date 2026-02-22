import { getQuestionsOfTest  } from "@/querys/questions";

export const questionsBySection = async (test_id, section_id) => {
  try {
    const questions = await getQuestionsOfTest(test_id, section_id);
    return { questions };
  } catch (error) {
    console.error('Error fetching sections of test:', error);
    throw error;
  }
};