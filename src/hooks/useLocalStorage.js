import { useState } from "react"

function useLocalStorage(key, initialValue) {

    const [localStorageValue,setLocalStorageValue] = useState(()=>getLocalStorage(key,initialValue));

    const setValue = (value) => {
        const itemLocalStorage = value instanceof Function ? value(localStorageValue) : value;
        setLocalStorageValue(value);
        localStorage.setItem(key,JSON.stringify(itemLocalStorage))
        
    }
  
    return [localStorageValue,setValue];
}

function getLocalStorage(key,initialValue){

    const localStorageItem = localStorage.getItem(key);

    return localStorageItem ? JSON.parse(localStorageItem) : initialValue;

}

export default useLocalStorage
