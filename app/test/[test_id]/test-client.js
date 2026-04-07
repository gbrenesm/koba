'use client';

import { useState, useTransition } from 'react';
import QuestionSelection from "@/components/Question-TypeSelection";
import { getQuestionsBySection } from './actions';

export default function TestClient({ test, sections, testId, allQuestions }) {
  const initialQuestions = allQuestions.slice(0, 5);
  const totalBlocksQuestions = Math.ceil(allQuestions.length / 5);
  console.log("totalBlocksQuestions", totalBlocksQuestions)
  const [blockOfQuestions, setBlockOfQuestions] = useState(0);
  console.log("Numbert", (allQuestions.length / totalBlocksQuestions) * blockOfQuestions)
  const [questions, setQuestions] = useState(initialQuestions);
  const [isPending, startTransition] = useTransition();

  const changeBlock = async (newSectionNumber) => {
    startTransition(async () => {
      setBlockOfQuestions(newSectionNumber);
      const newQuestions = allQuestions.slice(newSectionNumber * 5, (newSectionNumber + 1) * 5);
      setQuestions(newQuestions);
    });
  };

  const nextBlock = () => {
    if (blockOfQuestions < totalBlocksQuestions) {
      changeBlock(blockOfQuestions + 1);
    }
  };

  const prevBlock = () => {
    if (blockOfQuestions > 0) {
      changeBlock(blockOfQuestions - 1);
    }
  };
  
  return (
    <div>
      <header>
        <h1>{test.title}</h1>
        <div className="progress-wrap">
          <span id="progress-text">
            Progreso
          </span>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              id="progress-fill"
              style={{ width: `${(allQuestions.length / totalBlocksQuestions) * blockOfQuestions + 1}%` }}
            />
          </div>
        </div>
      </header>

      <main>
        {sections[0].title && <h2>{sections[0].title}</h2>}
        <div className='instructions'>
          <h2>Instrucciones</h2>
          <div className="divider"></div>
          <p>{sections[0].instructions}</p>
        </div>
        
        {isPending ? (
          <p>Cargando preguntas...</p>
        ) : (
          <>
            <QuestionSelection
              key={blockOfQuestions}
              questions={questions}
              section={sections[0]}
              test_id={testId}
            />
            <div className="navigation-buttons">
              <button 
                onClick={prevBlock} 
                disabled={blockOfQuestions === 0 || isPending}
              >
                Anterior
              </button>
              <button 
                onClick={nextBlock} 
                disabled={blockOfQuestions === totalBlocksQuestions.length - 1 || isPending}
              >
                Siguiente
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}