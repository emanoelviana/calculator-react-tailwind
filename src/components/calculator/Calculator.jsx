import Button from "../button/Button";
import CalculatorDisplay from "../calculator-display/CalculatorDisplay";
import CalculatorHistory from "../calculator-history/CalculatorHistory";
import { buttons } from "../../content/calculatorButtons";
import { useCalculator } from "../hooks/useCalculator";

function Calculator() {
  const { operation, result, doOperation } = useCalculator();

  function handleInputClick(input) {
    doOperation(input);
  }

  return (
    <section
      className={`
      grid grid-rows-[auto_auto] lg:grid-cols-[auto_auto]
      gap-6 py-6 md:py-0
      `}
    >
      <div
        id="calculator"
        className={`
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
