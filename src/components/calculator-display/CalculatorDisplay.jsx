import Icon from "../icon/Icon";
import Text from "../text/Text";

function CalculatorDisplay({ operation, result }) {
  return (
    <div className="flex flex-col gap-2 bg-stone-800 [background-image:var(--gradient-calculator-display)] px-4 py-2 rounded-lg">
      <Text size={"small"} tone={"dark"} className={"text-right"}>
        {result && operation}
      </Text>
      <div id="result" className="flex justify-center items-center">
        <Icon name={"equal-line"} size={24} color="#6B6B6B" />
        <Text
          size={"large"}
          tone={"light"}
          as="h1"
          className={"grow text-right"}
        >
          {result || operation}
        </Text>
      </div>
    </div>
  );
}

export default CalculatorDisplay;
