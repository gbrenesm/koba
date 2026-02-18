'use client';

import '../styles/question-selection.component.css';
import { createNewResponses } from '../services/responses.js';



export default function QuestionSelection ({questions, section}) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    await createNewResponses(formData, section);
  };
  
  console.log(questions)
  return (
    <>
    <form key={section.title} onSubmit={handleSubmit}>
      {Object.entries(questions).map(([key, value], index) => (
        <>
          {index <= 5 &&
            <div className="question-card" key={key}>
              <p className='question-header'>
                <span className='question-number'>{key}.</span>
                <span className='question-text'>{String(value)}</span>
              </p>
              <div className="rating-row">
                {Object.entries(section.responses).map(([optKey, optValue]) => (
                  <div className='individual-option' key={optKey}>
                    <input
                      type="radio"
                      id={`q${key}-${optKey}`}
                      name={`¶${key}`}
                      value={optKey}
                      required
                    />
                    <label htmlFor={`q${key}-${optKey}`}>
                      {optKey}
                      {optValue && <p className='value'>{optValue}</p>}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          }
        </>
      ))}
      <button
        type="submit"
        className="btn-submit"
      >
        Enviar datos
      </button>
    </form>
    </>
  );
}