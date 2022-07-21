import { createContext, useState } from "@elf-framework/sapa";

export const MyContext = createContext();

export function MyContextProvider({ value, content }) {
  const initState = {
    value,
    setValue,
  };

  function setValue(value) {
    setState({ ...state, value });
  }

  const [state, setState] = useState(initState);

  return <MyContext.Provider value={state}>{content}</MyContext.Provider>;
}
