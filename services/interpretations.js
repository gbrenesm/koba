import { getSectionsForTest } from "@/querys/sections";
import { getResponsesForInterpretation } from "@/querys/responses";
import { addInterpretationForTest } from "@/querys/interpretations";

export const createInterpretations = async (client_id, test_id, session_id) => {
  let totalByCounstruct
  let averageByConstruct
  let completeResponsesToInsert
  try {
    const sections = await getSectionsForTest(test_id);
    const responses = await getResponsesForInterpretation(client_id, session_id);
    
    if (!responses || responses.length === 0) {
      throw new Error("No responses found for the given client and test.");
    }
    
    if (sections && sections.length === 1) {
      const uniqueSection = sections[0]
      if (uniqueSection.count_type === 'likert') {
        const allPosibleResponses = Object.keys(uniqueSection.responses);
        const lastResponse = allPosibleResponses[allPosibleResponses.length - 1];

        totalByCounstruct = responses.reduce((acc, response) => {
          const construct = response.construct_id;

          let value = parseInt(response.response[0]);

          if (!acc[construct]) {
            acc[construct] = { total: 0, count: 0};
          }

          if (response.notes && response.notes === 'inverso') {
            value = lastResponse - value;
          }
          acc[construct].total += value;
          acc[construct].count += 1;
          
          return acc;
        }, {});

        if (uniqueSection.notes && uniqueSection.notes[0] === 'promedio-constructo') {
          averageByConstruct = Object.entries(totalByCounstruct).reduce((acc, [construct, { total, count }]) => {
            acc[construct] = total / count;
            return acc;
          }, {});
        }
      }
      const responsesToProcess = averageByConstruct ? averageByConstruct : totalByCounstruct;
      
      completeResponsesToInsert = Object.entries(responsesToProcess).map(([construct, value]) => ({
        construct_id: construct,
        session_id,
        client_id,
        test_id,
        interpretation_total: `${value}`
      }));
    }
    
  } catch (error) {
    console.error(error);
  }
  
  try {
    const insert = await addInterpretationForTest({ data: completeResponsesToInsert });
    console.log("Interpretation created successfully", insert);
  } catch (error) {
    console.error(error);
  }
};
