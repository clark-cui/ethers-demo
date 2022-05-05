import { useState } from "react";
import MetaMusk from "./components/MetaMusk";
import Rpc from "./components/Rpc";
import Contract from "./components/Contract";
import Transaction from "./components/Transaction";
function App() {
  return (
    <div className="App">
      <MetaMusk />
      <Rpc />
      <Contract />
      <Transaction />
    </div>
  );
}

export default App;
