import { getQuestionsOfTest  } from "@/querys/questions";

export const questionsBySection = async (section_id) => {
  try {
    const questions = await getQuestionsOfTest(section_id);
    return { questions };
  } catch (error) {
    console.error('Error fetching sections of test:', error);
    throw error;
  }
};