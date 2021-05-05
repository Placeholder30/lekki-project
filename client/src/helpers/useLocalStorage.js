import { useEffect } from "react";

function useLocalStorage(item, name) {
  useEffect(() => {
    const saveToLocalStorage = () => {
      const items = JSON.stringify(item);
      localStorage.setItem(name, items);
    };
    saveToLocalStorage();
  }, [item]);
}

export default useLocalStorage;
