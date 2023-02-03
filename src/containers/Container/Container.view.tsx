import React, { PropsWithChildren } from 'react';

import classes from './Container.module.scss';

type Props = { className?: string };

const ContainerView: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) => {
  return <div className={`${classes['container']} ${props.className || ''}`}>{props.children}</div>;
};

export default ContainerView;