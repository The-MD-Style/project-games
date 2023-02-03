import Table from '@/components/VTable/Table';
import React from 'react'

type Props = {
  currentTurn:string|null;
  turnHandler: () => string|null;
}

const PageView = (props: Props) => {
  return (
    <div className={"container"}>
      <Table func={props.turnHandler}></Table>
      {props.currentTurn}
    </div>
  );
}

export default PageView;
