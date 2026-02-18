'use server';
import { addNewResponses } from '../querys/responses.js';

export const createNewResponses = async (formData, section) => {
  console.log("Llegó a la server action");
  const data = Object.fromEntries(formData);
  await proccessResponsesForSelection(data, section);
  return true;
};

const proccessResponsesForSelection = async (data, section) => {
  // console.log("Procesando datos:", data, section);
  // await addNewResponses(data, section);
  
  const count = Object.values(section.count) || {};
  // console.log("Count ==>", count);
  const totalCount = count.reduce((acc, curr) => {
    const operation = curr.Questions
    console.log("Operation:", operation, data);
    return {};
  }, {});
    
  const dataToSend = {
    tests_id: section.tests_id,
    section_id: section.id
  }
};
