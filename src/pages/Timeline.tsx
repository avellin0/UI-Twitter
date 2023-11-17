import { Tweet } from '../components/Tweet'
import { Separator } from '../components/Separator.tsx'
import { Header } from '../components/Header.tsx'
import './Timeline.css'
import { FormEvent, useState,KeyboardEvent } from 'react'



export function Timeline(){
  const [newTweet , setNewTweet] = useState('');

  const [tweets, setTweets] = useState([
    'Meu primeiro tweet',
    'Estou gostando',
    'Abacate é muito bom!'
  ])

  function CreateNewTweet(event: FormEvent){
    event.preventDefault() 
    console.log(newTweet)

    setTweets([newTweet,...tweets])
    setNewTweet('')
  }

  
  function handleHotkeySubmit(event: KeyboardEvent){
    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
      setTweets([newTweet,...tweets])
      setNewTweet('')
    }
}


  return (
    
    <main className="timeline">
    <Header title='Tweet'/>     
  
  <form onSubmit={CreateNewTweet} className='new-tweet-form'>

    <label htmlFor="tweet">
      <img src="https://github.com/avellin0.png" alt="Davi Avelino"/>
      <textarea 
      id="tweet" 
      value={newTweet}
      placeholder="What's happening"
      onChange={(event) => {
        setNewTweet(event.target.value)
      }}
      onKeyDown={handleHotkeySubmit}
      >

      </textarea>
    </label>
    
    <button type="submit">Tweet</button>
  </form>

  <Separator/>

    {tweets.map(tweet => {
      return(
      <Tweet key={tweet} content={tweet} /> /*key server como um indentificar (PRIMARY KEY) de cada conteúdo do .map*/ 
      )
    })}

</main>
  )
}