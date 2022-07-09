import Rectangle1 from "@easylogic/rectangle-1";
import * as React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return <Rectangle1 color="yellow" />;
};

const container = document.getElementById("app");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
