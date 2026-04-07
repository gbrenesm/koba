import { createTest, getTestById, getAllPublicTests } from '../querys/tests.js';

export const newTest = async (formData) => {
  "use server";

  const title = formData.get('title');
  const year = formData.get('year');
  const construct = formData.get('construct');
  
  
  if (!user_id) {
    throw new Error('User ID is missing');
  }
  
  if (!title){
    return "Por favor ingresar un título";
  }
  
  try {
    const test = await createTest(authors, title, editor, place, year, other_data, license_type, construct, user_id);
    return test;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to create test', error.message);
  }
};


export const getTest = async (id) => {
  try {
    const test = await getTestById(id);
    return test;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to get test', error.message);
  }
};

export const getPublicTests = async () => {
  try {
    const tests = await getAllPublicTests();
    return tests;
  } catch (error) {
    console.log(error);
    throw new Error('Faild to get public tests', error.message);
  }
};
