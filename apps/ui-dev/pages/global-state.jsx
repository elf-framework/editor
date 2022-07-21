import {
  createContext,
  start,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "@elf-framework/sapa";
// import { Tab, TabItem, View } from "@elf-framework/ui";
// import { View } from "@elf-framework/ui";
import "@elf-framework/ui/style.css";

import { MyContext, MyContextProvider } from "./context";
import Sample from "./Sample";

function App() {
  const myContextValue = useContext(MyContext);
  const [value, setValue] = useState(1);
  const [value2, setValue2] = useState(10);
  const [value3, dispatch] = useReducer((s, action) => {
    switch (action) {
      case "INCREMENT":
        return s + 1;
      case "DECREMENT":
        return s - 1;
      case "RESET":
        return 0;
      default:
        return s;
    }
  }, /*initial value*/ 0);
  const lastValue = useMemo(() => value + value2, [value, value2]);

  this.useSubscribeSelf("yellow", () => {
    dispatch("INCREMENT");
  });

  return (
    <MyContextProvider value={value3}>
      <div>
        <MyContext.Consumer>
          {(state) => {
            return (
              <button onClick={() => state.setValue(state.value + 20)}>
                {state.value + 100}
              </button>
            );
          }}
        </MyContext.Consumer>

        <MyContextProvider value={2000}>
          <div>
            <MyContext.Consumer>
              {(state) => {
                return (
                  <button
                    type="button"
                    onClick={() => {
                      state.setValue(state.value + 1);
                    }}
                  >
                    {value} {lastValue} {state.value}
                  </button>
                );
              }}
            </MyContext.Consumer>
            <button type="button" onClick={() => setValue2(value2 + 10)}>
              Button 2 {value2}
            </button>

            {value2 > 50 ? "" : <Sample onClick="yellow" />}
          </div>
        </MyContextProvider>
      </div>
    </MyContextProvider>
  );
}

start(App);
