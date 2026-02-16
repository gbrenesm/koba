import '../../../styles/test.page.css';

import { notFound } from "next/navigation";
import { questionsTests } from "@/services/questions";

import QuestionSelection from "@/components/Question-TypeSelection";

const checkTypeOfQuestion = (questions) => {
  const sectionsType = [];
  for (let section of questions) {
    sectionsType.push(section.questions_type)
  }
  
  return sectionsType;
};


export default async function AnswerTestPage({ params }) {
  const { test_id } = await params;
  // 1. Obtener los datos del test y las preguntas
  const { test, questions } = await questionsTests(test_id);
  
  if (!test) notFound();
  
  // 2. Checar, sección por sección el tipo de pregunta
  
  const sectionsNumber = questions.length;
  const sectionsType = checkTypeOfQuestion(questions);

  return (
    <div>
      <header>
        <h1>{test.title}</h1>
        <div className="progress-wrap">
          <span id="progress-text">0 / 6</span>
          <div className="progress-bar"><div className="progress-fill" id="progress-fill"></div></div>
        </div>
      </header>
      <main> 
        {questions.map((question, index) => {
          if(sectionsType[index] === 'selection') {
            return <QuestionSelection key={question.id} section={question} />
          }
        }
        )}
      </main>
    </div>
  );
}
