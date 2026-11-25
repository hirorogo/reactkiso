import { useEffect, useState } from "react"

function Nikki() {
    const [nikkiinfo, setNikkiinfo] = useState("")
    const [localInfo, setLocalInfo] = useState([])

    function setStorage() {
        if (nikkiinfo === "") return


        
        const newLocalinfo = [...localInfo, nikkiinfo]
        localStorage.setItem("text", JSON.stringify(newLocalinfo))
        setLocalInfo(newLocalinfo)
    }
    useEffect(() => {
        const a = JSON.parse(localStorage.getItem("text")) || []

        setLocalInfo(a)

    }, [])
    return (
        <>
            <h1>感情日記</h1>
            <p>気分</p>
            <input onChange={

                (e) => {
                    setNikkiinfo(e.target.value)
                }


            }
                value={nikkiinfo}

            />
            <button onClick={setStorage}></button>

            {
                localInfo.map((info) => {
                    return (<div>{info}</div>)

                })
            }
        </>
    )
} export default Nikki