'use client';

import { useState, useTransition } from 'react';
import QuestionSelection from "@/components/Question-TypeSelection";
import { getQuestionsBySection } from './actions';

export default function TestClient({ test, sections, testId, initialQuestions }) {
  const [sectionNumber, setSectionNumber] = useState(0);
  const [questions, setQuestions] = useState(initialQuestions);
  const [isPending, startTransition] = useTransition();

  const changeSection = async (newSectionNumber) => {
    startTransition(async () => {
      setSectionNumber(newSectionNumber);
      const newQuestions = await getQuestionsBySection(
        testId, 
        sections[newSectionNumber].id
      );
      setQuestions(newQuestions);
    });
  };

  const nextSection = () => {
    if (sectionNumber < sections.length - 1) {
      changeSection(sectionNumber + 1);
    }
  };

  const prevSection = () => {
    if (sectionNumber > 0) {
      changeSection(sectionNumber - 1);
    }
  };
  
  return (
    <div>
      <header>
        <h1>{test.title}</h1>
        <div className="progress-wrap">
          <span id="progress-text">
            Sección {sectionNumber + 1} / {sections.length}
          </span>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              id="progress-fill"
              style={{ width: `${((sectionNumber + 1) / sections.length) * 100}%` }}
            />
          </div>
        </div>
      </header>

      <main>
        {sections[sectionNumber].title && <h2>{sections[sectionNumber].title}</h2>}
        <div className='instructions'>
          <h2>Instrucciones</h2>
          <div className="divider"></div>
          <p>{sections[sectionNumber].instructions}</p>
        </div>
        
        {isPending ? (
          <p>Cargando preguntas...</p>
        ) : (
          <>
            <QuestionSelection
              key={sectionNumber}
              questions={questions}
              section={sections[sectionNumber]}
              test_id={testId}
            />
            <div className="navigation-buttons">
              <button 
                onClick={prevSection} 
                disabled={sectionNumber === 0 || isPending}
              >
                Anterior
              </button>
              <button 
                onClick={nextSection} 
                disabled={sectionNumber === sections.length - 1 || isPending}
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