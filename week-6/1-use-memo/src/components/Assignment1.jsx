import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [input, setInput] = useState(0);
    const [cnt, setcnt] = useState(0);
    // Your solution starts here
    const expensiveValue = useMemo(()=>{
        let fact = 1;
        for(let i=input; i>1; i--){
            fact*=i;
        }
        console.log("re-render!");
        return fact;
    },[input])

    // Your solution ends here

    return (
        <div>
            <button onClick={()=>{setcnt(cnt+1)}}>{cnt}</button>
            <input 
                type="number" 
                value={input} 
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <p>Calculated Value: {expensiveValue}</p>
        </div>
    );
}