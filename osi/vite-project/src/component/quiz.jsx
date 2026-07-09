import { useState } from "react";

function Quiz() {
    const questions = [
        {
            ID:1,
            question: "React で状態を管理するために使うフックは？",
            choices: ["useState", "useEffect", "useMemo"],
            answer: "useState"
        },
        {
            ID:2,
            question: "JSX とは何の略？",
            choices: ["JavaScript XML", "Java Syntax Extension", "JSON XML"],
            answer: "JavaScript XML"
        },
    ];
    const [mondaibangou,setMondaibangou]=useState(0)
    
    const nowquestion =questions[mondaibangou]

    return (
        <>
        <h1>クイズページ</h1>
        <p>問題{nowquestion.question}</p>
        <p>
        
        </p>
        </>
    )
}
export default Quiz
