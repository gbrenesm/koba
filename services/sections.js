import { getTestById } from '../querys/tests.js';
import { getSectionsForTest } from '../querys/sections.js';

export const sectionsTest = async (test_id) => {
  try {
    const test = await getTestById(test_id);
    if (!test) {
      throw new Error('Test not found with id: ' + test_id);
    }
    const sections = await getSectionsForTest(test_id);
    return { test, sections };
  } catch (error) {
    console.error('Error fetching sections of test:', error);
    throw error;
  }
};