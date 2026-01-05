import Button from "../button/Button";
import CalculatorDisplay from "../calculator-display/CalculatorDisplay";
import CalculatorHistory from "../calculator-history/CalculatorHistory";
import { buttons } from "../../content/calculatorButtons";
import { useState } from "react";
import { useCounterHistory } from "../../contexts/CounterHistoryContext";

function Calculator() {
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");
  const { countHistory, setCountHistoryHandle } = useCounterHistory();

  function handleInputClick(input) {
    if (input === "C") {
      setOperation("");
      setResult();
      return;
    }

    if (input === "CE") {
      setResult("");
      setOperation(operation.slice(0, -1));
      return;
    }

    if (input === "=") {
      const operationResult = eval(operation.replace(/,/g, "."));
      const parseResult = operationResult.toString()?.replace(/\./g, ",");
      setResult(parseResult);
      setCountHistoryHandle(`${operation} = ${parseResult}`);
      return;
    }

    if (result) {
      setOperation(isNaN(input) ? `${result}${input}` : input);
      setResult("");
      return;
    }

    if (input === "," && !operation.endsWith(",")) {
      setOperation(`${operation},`);
      return;
    }

    setOperation(`${operation}${input}`);
  }

  return (
    <section
      className={`
      w-max
      grid grid-cols-[auto_auto]
      gap-6 py-6 md:py-0
      place-items-center
      `}
    >
      <div
        id="calculator"
        className={`
          w-max
          flex flex-col
          gap-4 
          px-8 pb-8 py-14
          rounded-2xl
          shadow-card
          bg-stone-900
          `}
      >
        <CalculatorDisplay operation={operation || 0} result={result || 0} />
        {buttons.map((row, index) => (
          <div key={index} className="flex gap-3">
            {row.map((button, index) => (
              <Button
                key={index}
                size={button.size}
                color={button.color}
                onClick={() => handleInputClick(button.input)}
              >
                {button.input}
              </Button>
            ))}
          </div>
        ))}
      </div>
      <CalculatorHistory />
    </section>
  );
}

export default Calculator;
