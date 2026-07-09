import './App.css'
import Card from './component/card'
import Cardreaction from './component/Card_reaction'
import Timer from './component/timer'
import Quiz from './component/quiz'
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
    <Timer></Timer>
    </>
  )
}

  export default App
