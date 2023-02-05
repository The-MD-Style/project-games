// "use client";
import React, { useEffect, useState } from "react";

import PageView from "./page.view";

type Props = {};

const Page = (props: Props) => {
  // const [currentTurn, setCurrentTurn] = useState<string | null>(
  //   localStorage.getItem("checkersTurn")
  // );

  // const turnHandler = (): string | null => {
  //   const value = localStorage.getItem("checkersTurn");

  //   if (value === "black") {
  //     localStorage.setItem("checkersTurn", "white");
  //   } else if (value === "white") {
  //     localStorage.setItem("checkersTurn", "black");
  //   }

  //   setCurrentTurn(localStorage.getItem("checkersTurn"));
  //   return currentTurn;
  // };

  // useEffect(() => {
  //   const currentTurnStorage = localStorage.getItem("checkersTurn");
  //   if (!currentTurnStorage) {
  //     localStorage.setItem("checkersTurn", "white");
  //     setCurrentTurn(localStorage.getItem("checkersTurn"));
  //   }
  // }, [currentTurn]);

  return <PageView></PageView>;
};

export default Page;
