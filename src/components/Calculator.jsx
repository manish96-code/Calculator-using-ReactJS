import { useState } from "react";
import { num } from "./number";

const Calculator = () => {

    const [input, setInput] = useState("");

    const handleClick = (value) => {
      if(value == "C"){
        setInput("");
        return;
      }
      else if(value == "="){
        const result = eval(input);
        setInput(result);
        return;
      }
      else if(value == "⌫"){
        setInput((prev) => prev.slice(0, -1));
        return;
      }

      setInput((prev) => prev + value)
    }

  return (
    <div className="bg-white border border-slate-300 p-6 rounded-2xl w-3/12 shadow-md mx-auto">
      {/* Display */}
      <input
        type="text"
        value={input}
        readOnly
        className="border border-slate-400 p-3 rounded-lg w-full text-right text-xl font-semibold tracking-wide"
        placeholder="0"
      />

      {/* Buttons */}
      <div className="grid grid-cols-4 gap-3 mt-6">
        {
            num.map((item) => (
                <button onClick={() => handleClick(item.no)} key={item.id} className={`py-3 rounded-xl font-semibold ${["+", "-", "*", "/", "="].includes(item.no)? "bg-orange-400 text-white" : item.no === "C" ? "bg-green-600 text-white" : "bg-gray-200"}`}>{item.no}</button>
            ))
        }
      </div>
    </div>
  )
}

export default Calculator;
