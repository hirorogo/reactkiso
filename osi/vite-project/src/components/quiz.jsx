import { useEffect, useState } from "react";

function Quiz() {
    const questions = [
        {
            ID: 1,
            question: "React で状態を管理するために使うフックは？",
            choices: ["useState", "useEffect", "useMemo"],
            answer: "useState"
        },
        {
            ID: 2,
            question: "JSX とは何の略？",
            choices: ["JavaScript XML", "Java Syntax Extension", "JSON XML"],
            answer: "JavaScript XML"
        },
    ];
    const [mondaibangou, setMondaibangou] = useState(0)
    const Nowquestion = questions[mondaibangou]

    return (
        <>
            {(
                <>
                    <div>問題番号:{Nowquestion.ID}</div>
                    <div>問題文{Nowquestion.question}</div>
                    <ul>

                        {Nowquestion.choices.map((choice,idx) => (
                            <li>{choice}</li>
                    ))}
                    </ul>
                    <div>問題番号:{Nowquestion.answer}</div>
                </>
            )}
            <h1>クイズページ</h1>
            <p>問題</p>
        </>
    )
    
}
export default Quiz
