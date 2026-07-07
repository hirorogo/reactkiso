import { useEffect, useState } from "react";
function Timer() {
    const [secound, setSecound] = useState(0)
    useEffect(

        () => {
            setInterval(() => {
                 setSecound(secound + 1)
            }, 1000)
        }, [secound]
    )

    return (
        <>
            <h1>タイマーコンポーネント</h1>
            <p>秒！！！{secound}</p>
        </>
    )
}
export default Timer