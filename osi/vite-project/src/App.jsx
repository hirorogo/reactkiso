import './App.css'
import Card from './components/card'
import Cardreaction from './components/Card_reaction'
import Timer from './components/timer'
import Quiz from './components/quiz'
function App() {
  const cardData = [
    {
      id: 1,
      name: "aa",
      tag: 1
    },
    {
      id: 2,
      name: "bb",
      tag: 2
    },
    {
      id: 3,
      name: "cc",
      tag: 3
    },
  ]

  return (
    <>
    <Quiz></Quiz>
      {cardData.map(props => (
       
          <Card

            id={props.id}
            name={props.name}
            tag={props.tag}
          
          >
          </Card>
        
      ))}
    </>
  )
}

  export default App
