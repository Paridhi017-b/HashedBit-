import React, { useState } from "react";

const Calculator = () => {
    
    const [a, setA] = useState('')
    const [b, setB] = useState('');
    const [result, setResult] = useState(null);

    const addfn = () => {
        setResult(a + b)
    }

    const subfn = () => {
        setResult(a - b)
    }

    const mulfn = () => {
        setResult(a * b)
    }

    const divfn = () => {
        if (b !== 0) {
            setResult(a / b);
        } else {
            setResult("Cannot divide by zero");
        }
    }
    

    return (
        <div class='container'>
            <h1> React calculator</h1>


            a= <input type="number" value={a} onChange={(e) => setA(Number(e.target.value)) } />
            <br></br>
            b= <input type="number" value={b}  onChange={(e) => setB(Number(e.target.value)) }/>
            <br></br>

            <button onClick={addfn}> Addition</button>
            <button onClick={subfn}> Subtraction</button>
            <button onClick={mulfn}> Multiplication</button>
            <button onClick={divfn}> Division</button>

            <div> Output : {result}</div>
            <br></br>

        </div>
    )
}

export default Calculator;