import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({question}) => {
  const [show, setShow] = useState(false)
  const {title, info } = question
  const unHide = () =>{
    if (show){
    setShow(false)
    }
    else{
    setShow(true)
    }
  }
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button onClick={unHide} className='btn'>
          {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p>{show ? info : null}</p>
    </article>
  )
};

export default Question;
