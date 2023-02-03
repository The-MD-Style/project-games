import React from 'react';
import classes from './Header.module.scss'


type Props = {}

const HeaderView = (props: Props) => {
  return (
    <div className={classes['container']}>Header</div>
  )
}

export default HeaderView;