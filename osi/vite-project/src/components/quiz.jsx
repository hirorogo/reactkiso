import { useEffect, useState } from "react";
import "../quiz.css"

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
    const [seikaisuu, setSeikaisuu] = useState(0)

    const [mondaibangou, setMondaibangou] = useState(0)
    if (mondaibangou >= questions.length) {
        return (
            <>
                <h1>結果</h1>
                <div>正解数{seikaisuu}</div>
                <button onClick={() => {
                    console.log(mondaibangou)
                    setMondaibangou(0)
                    setSeikaisuu(0)

                }
                }>もう一回プレイする</button>
            </>

        )
    }
    const Nowquestion = questions[mondaibangou]



    function handleAnswer(choice) {
        if (choice === Nowquestion.answer) {
            console.log("正解")
            setSeikaisuu(prev => prev + 1)
        }
        else {
            console.log("ふせいかい")
        }
        setMondaibangou(prev => prev + 1)

    }

    return (
        <>

            <div>
                <div>問題番号:{Nowquestion.ID}</div>
                <div>問題文{Nowquestion.question}</div>
                <ul>
                    <div className="box">


                        {Nowquestion.choices.map((choice, idx) => (
                            <button className="a" key={idx} onClick={
                                () => handleAnswer(choice)
                            }>{choice}</button>

                        ))}
                    </div>


                </ul>


            </div>


            <h1>クイズページ</h1>
            <p>問題</p>
        </>
    )

}
export default Quiz
