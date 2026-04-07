'use client';

import '../styles/question-selection.component.css';
import { createNewResponsesService } from '../services/responses.js';

export default function QuestionSelection ({ questions, section, test_id }) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    await createNewResponsesService(formData, section, test_id);
  };

  return (
    <form key={section.title} onSubmit={handleSubmit}>
      {questions.map((question, index) => (
        <div className="question-card" key={question.id}>
          <p className='question-header'>
            <span className='question-number'>{question.question_number}.</span>
            <span className='question-text'>{question.question}</span>
          </p>
          <div className="rating-row">
            {Object.entries(section.responses).map(([optKey, optValue]) => (
              <div className='individual-option' key={optKey}>
                <input
                  type="radio"
                  id={`q${question.id}-${optKey}`}
                  name={`${question.id}`}
                  value={optKey}
                  required
                />
                <label htmlFor={`q${question.id}-${optKey}`}>
                  {optKey}
                </label>
                {optValue && <p className='value'>{optValue}</p>}
              </div>
            ))}
          </div>
        </div>
      ))}
      <button type="submit" className="btn-submit">
        Enviar datos
      </button>
    </form>
  );
}