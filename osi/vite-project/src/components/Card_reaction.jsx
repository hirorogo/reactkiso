import { useState } from "react"

function Cardreaction() {
    const [good, setGood] = useState(0)
    const [sugoi, setSugoi] = useState(0)
    const [fun, setFun] = useState(0)

    function goodPlus() {
        setGood(good+1)
    }
    function sugoiPlus() {
        setSugoi(sugoi + 1)
    }
    function funPlus() {
        setFun(fun + 1)
    }
    return (
        <>
            <button type="button" onClick={goodPlus}>{good}</button>
            <button type="button" onClick={sugoiPlus}>{sugoi}</button>
            <button type="button" onClick={funPlus}>{fun}</button>
        </>
    )

}
export default Cardreaction