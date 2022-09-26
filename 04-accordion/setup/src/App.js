import React, { useState } from 'react'
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions, setQuestions] =useState(data);
  return (
    <section>
      <div className='container'>
        <h3>Questions And Answer About Login</h3>
        <div className='info'>
          {data.map((question) => {
            return <SingleQuestion key={question.id} question={question} />
          })}
        </div>
      </div>
    </section>
  )
}

export default App;
