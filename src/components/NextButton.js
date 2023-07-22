import React from 'react'

export default function NextButton({index, numQuestions,dispatch, answer}) {
    if(answer === null) return null;

    if(index < numQuestions - 1)
    return (
    <div>
        <button className='btn btn-ui' onClick={()=>dispatch({type:"nextQuestion"})} >Next</button>
    </div>
    )

     if(index === numQuestions - 1)
    return (
    <div>
        <button className='btn btn-ui' onClick={()=>dispatch({type:"finish"})} >Finish</button>
    </div>
  )

}
