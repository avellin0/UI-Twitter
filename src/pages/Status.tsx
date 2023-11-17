import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css'
import { PaperPlaneRight } from "phosphor-react"

export function Status(){

  const [newAnswer , setNewAnswer] = useState('');

  const [Answers, setAnswer] = useState([
    'Meu primeiro tweet',
    ])

  function CreateNewAnswer(event: FormEvent){
    event.preventDefault() 
    console.log(newAnswer)

    setAnswer([newAnswer,...Answers])
    setNewAnswer('')
  }

  function handleHotkeySubmit(event: KeyboardEvent){
      if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
        setAnswer([newAnswer,...Answers])
        setNewAnswer('')
      }
  }
 

  return (
    <main className="Status">
      
      <Header title='Tweet'/>       

      <Tweet content="Meu Primeiro tweet"/>
  
  <Separator/>

      <form onSubmit={CreateNewAnswer} className='answer-tweet-form'>
        
        <label htmlFor="tweet">
         <img src="https://github.com/avellin0.png" alt="Davi Avelino"/>
         
         <textarea 
         id="tweet" 
         placeholder="Tweet your answer!"
         value={newAnswer}
         onKeyDown={handleHotkeySubmit}
         onChange= {(event) => { setNewAnswer(event.target.value) }}
         ></textarea>

        </label>

        <button type="submit">
        <PaperPlaneRight/>
         <span>Answer</span>
        </button>
      </form>


    {Answers.map(answer => {
      return(
      <Tweet key={answer} content={answer} /> 
      )})} 
      
 
</main>
  )
}