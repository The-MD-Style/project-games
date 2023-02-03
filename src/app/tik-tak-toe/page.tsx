"use client"
import React, { useEffect, useState } from 'react'

import styles from './page.module.scss'
import PageView from './page.view'

type Props = {}

const Page = (props: Props) => {
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
    <PageView currentTurn={currentTurn} turnHandler={turnHandler}></PageView>
  )
}

export default Page;