import Table from '@/components/VTable/Table';
import SectionContainer from '@/containers/SectionContainer/SectionContainer';
import classes from './page.module.scss'
import React from 'react'

type Props = {
  currentTurn: string | null;
  turnHandler: () => string | null;
};

const PageView = (props: Props) => {
  return (
    <SectionContainer className={classes['container']}>
      <div className={classes['currentTurn']}>
        <p>{props.currentTurn}</p>
      </div>
      <div className={classes['gameTable']}>
        <p>X</p>
        <Table func={props.turnHandler}></Table>
        <p>O</p>
      </div>
      <button type={'button'}>RESET</button>
    </SectionContainer>
  );
};

export default PageView;
