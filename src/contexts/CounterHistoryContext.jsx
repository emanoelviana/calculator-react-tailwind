import { createContext, useContext, useEffect, useState } from "react";

const CounterHistoryContext = createContext();

export function useCounterHistory() {
  return useContext(CounterHistoryContext);
}

export function CounterHistoryProvider({ children }) {
  const [countHistory, setCountHistory] = useState([]);
  const storageKey = "operations";

  const setCountHistoryHandle = (count) => {
    setCountHistory((prevValue) => {
      const updatedHistory = [...prevValue, count];
      localStorage.setItem(storageKey, JSON.stringify(updatedHistory));
      return updatedHistory;
    });
  };

  useEffect(() => {
    const savedOperations = localStorage.getItem(storageKey);
    setCountHistory(JSON.parse(savedOperations || "[]"));
  }, []);

  const value = {
    countHistory,
    setCountHistoryHandle,
    storageKey,
  };

  return (
    <CounterHistoryContext.Provider value={value}>
      {children}
    </CounterHistoryContext.Provider>
  );
}
