import { useCounterHistory } from "../../contexts/CounterHistoryContext";
import Text from "../text/Text";

function CalculatorHistory() {
  const { storageKey, countHistory, setCountHistoryHandle } =
    useCounterHistory();

  return (
    <div
      id="calculation-history"
      className={`
          flex flex-col
          gap-4
          px-8 py-9
          rounded-2xl
          bg-stone-900
          w-[356px]
          shadow-card
          `}
    >
      <Text size={"medium"} tone={"light"} className={"text-left"}>
        Histórico de operações
      </Text>
      <div id="logs" className="flex flex-col gap-3">
        {countHistory.length > 0 ? (
          <ul className="flex flex-col gap-4">
            {countHistory.map((history, index) => (
              <p key={index} className="text-stone-400 text-left">
                {history}
              </p>
            ))}
          </ul>
        ) : (
          <p className="text-white/50 text-sm">Não há operações para mostrar</p>
        )}
      </div>
    </div>
  );
}

export default CalculatorHistory;
