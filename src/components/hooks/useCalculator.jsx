import { useState } from "react";
import { useCounterHistory } from "../../contexts/CounterHistoryContext";

export function useCalculator() {
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");
  const { countHistory, setCountHistoryHandle } = useCounterHistory();

  const doOperation = (input) => {
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
  };

  return {
    operation,
    result,
    doOperation,
  };
}
