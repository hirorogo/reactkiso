import Cardreaction from "./Card_reaction"

function Card(data) {
    return (
        <>
            <h1>{data.id}</h1>
            <p>card name {data.namme}</p>
            <p>{data.name}</p>
            <Cardreaction></Cardreaction>
        </>
    )
}

export default Card