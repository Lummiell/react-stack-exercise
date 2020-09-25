import React, { useState } from "react";
import "./App.css";

function App() {
  const [stackA, setStackA] = useState<string[]>([]);
  const [stackB, setStackB] = useState<string[]>([]);
  const [stackC, setStackC] = useState<string[]>([]);
  const [pushText, setPushText] = useState<string>("");
  const [popText, setPopText] = useState<string>("");
  function alertInvalid() {
    alert("Código inválido!");
  }
  function alertCannotStack() {
    alert("Impossível empilhar!");
  }
  function alertCannotPop() {
    alert("Impossivel desempilhar!");
  }
  function handlePush() {
    if (
      stackA.includes(pushText) ||
      stackB.includes(pushText) ||
      stackC.includes(pushText)
    ) {
      alertInvalid();
      return;
    }
    let smaller = stackA;
    let setSmaller = setStackA;
    if (stackB.length < smaller.length) {
      smaller = stackB;
      setSmaller = setStackB;
    }
    if (stackC.length < smaller.length) {
      smaller = stackC;
      setSmaller = setStackC;
    }
    if (smaller.length === 4) {
      alertCannotStack();
      return;
    }
    setSmaller([pushText, ...smaller]);
  }
  function handlePop() {
    const emptyStacks =
      stackA.length === 0 && stackB.length === 0 && stackC.length === 0;
    if (emptyStacks) {
      alertCannotPop();
      return;
    }
    const idStacked =
      stackA.includes(popText) ||
      stackB.includes(popText) ||
      stackC.includes(popText);
    if (!idStacked) {
      alertInvalid();
      return;
    }
    if(stackA[0]===popText){
      stackA.shift();
      setStackA([...stackA])
      return;
    }
    if(stackB[0]===popText){
      stackB.shift();
      setStackB([...stackB])
      return;
    }
    if(stackC[0]===popText){
      stackC.shift();
      setStackC([...stackC])
      return;
    }
    alertCannotPop();
  }
  return (
    <div className="App">
      <p>Empresa de logística</p>
      <p>Pilhas:</p>
      <div className="stacks">
        <ul>
          {stackA.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>

        <ul>
          {stackB.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>

        <ul>
          {stackC.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
      <div className='stackManagement'>

      
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handlePush();
        }}
      >
        <input
          type="text"
          value={pushText}
          onChange={(e) => {
            setPushText(e.target.value);
          }}
        />
        <button>Empilhar</button>
      </form>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handlePop();
        }}
      >
        <input
          type="text"
          value={popText}
          onChange={(e) => {
            setPopText(e.target.value);
          }}
        />
        <button>Desempilhar</button>
      </form>
      </div>
    </div>
  );
}

export default App;
