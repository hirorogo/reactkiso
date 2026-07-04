import './App.css'
import Card from './component/card'

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
      {cardData.map(props => (
       
          <Card

            id={props.id}
            name={props.name}
            tag={props.tag}
          ></Card>
        
      ))}
    </>
  )
}

  export default App
