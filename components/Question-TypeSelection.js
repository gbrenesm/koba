import '../styles/question-selection.component.css';

export default function QuestionSelection ({section}) {
  
  const options = Object.entries(section.responses).map(([key, value]) => (
    <div key={key} className='individual-option'>
      <label>
        { value && <p className='value'>{ value }</p>}
        <input type="radio" name="opcion" value={key} required />
        {key}
      </label>
    </div>
    )) 
  
  return (
    <>
      {section.title && <h2>{section.title}</h2>}
      <div className='instructions'>
        <h2>Instrucciones</h2>
        <div className="divider"></div>
        <p>{section.instructions}</p>
      </div>
      <form key="section.title">
        { Object.entries(section.questions).map(([key, value]) => (
            <div className="question-card" key={key}>
              <p className='question-header'>
                <span className='question-number'>{key}.</span>
                <span className='question-text'>{String(value)}</span>
              </p>
              <div className="rating-row">
                {Object.entries(section.responses).map(([optKey, optValue], index) => (
                  <div className='individual-option'>
                    <input
                      type="radio"
                      id={`q${key}-${optKey}`}
                      name={`question-${key}`}
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
          )) }
      </form>
      </>
  );
}
