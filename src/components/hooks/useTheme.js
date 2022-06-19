import { useState, useEffect } from "react";

export default function (key, initialState) {
  const [ state, setState ] = useState (() => {
    const storage = localStorage.getItem(key);

    if (storage) {
      return JSON.parse(storage)
    } else{
      return initialState;
    }
  })

  useEffect (() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state]) //pode causar muitos poblemas se nao tiver o a wait no seu useEfect
  return [state, setState]
}