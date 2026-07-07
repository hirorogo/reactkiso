import { useState } from "react";

function Quiz() {
    const questions = [
        {
            question: "React で状態を管理するために使うフックは？",
            choices: ["useState", "useEffect", "useMemo"],
            answer: "useState"
        },
        {
            question: "JSX とは何の略？",
            choices: ["JavaScript XML", "Java Syntax Extension", "JSON XML"],
            answer: "JavaScript XML"
        },
    ];
    const [current, setCurrent] = useState(0);
    const [after,setAfter] =useState(null)
    const [seikai,setSeikai] = useState(0)
    const [owari, setOwari] = useState(false);
    return (
        <>
        <h1>クイズページ</h1>

        <p>
            
        </p>
        </>
    )
}
export default Quiz
