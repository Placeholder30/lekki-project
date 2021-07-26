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

function getUserDataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem("userData"));
  return !data ? {} : data;
}
function getCartFromLocalStorage() {
  const items = JSON.parse(localStorage.getItem("cart"));
  return !items ? [] : items;
}

export { getCartFromLocalStorage, getUserDataFromLocalStorage };

export default useLocalStorage;
