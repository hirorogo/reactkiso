import { useState } from "react"

function Nikki() {
    const [nikkiinfo, setNikkiinfo] = useState("")
    const [localInfo,setLocalinfo] =useState("")
    function setStorage() {
        localStrage.setItem("text", JSON.stringify(nikkiinfo))
    }
    return (
        <>
            <h1>感情日記</h1>
            <p>気分</p>
            <input onChange={

                (e) => {
                    setNikkiinfo(e.target.value)
                    setStorage()
                }


            }
                value={nikkiinfo}
            >
                
                <p>1言コメント</p>
            </input>
        </>
    )
} export default Nikki