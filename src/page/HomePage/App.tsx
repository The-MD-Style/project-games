import React, { useEffect, useState } from "react";
import "../HomePage/App.scss";
import Table from "../../components/VTable/Table";

function App() {
  const [currentTurn, setCurrentTurn] = useState<string | null>(
    localStorage.getItem("nextTurn")
  );

  const turnHandler = (): string | null => {
    const value = localStorage.getItem("nextTurn");

    if (value === "X") {
      localStorage.setItem("nextTurn", "0");
    } else if (value === "0") {
      localStorage.setItem("nextTurn", "X");
    }

    setCurrentTurn(localStorage.getItem("nextTurn"));
    return currentTurn;
  };

  useEffect(() => {
    const currentTurnStorage = localStorage.getItem("nextTurn");
    if (!currentTurnStorage) {
      localStorage.setItem("nextTurn", "X");
      setCurrentTurn(localStorage.getItem("nextTurn"));
    }
  }, [currentTurn]);

  return (
    <div className={"container"}>
      <Table func={turnHandler}></Table>
      {currentTurn}
    </div>
  );
}

export default App;
