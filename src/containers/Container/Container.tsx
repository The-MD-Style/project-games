import React, { PropsWithChildren } from 'react';
import ContainerView from './Container.view';

type Props = { className?: string };

const Container: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) => {
  return <ContainerView className={props.className}>{props.children}</ContainerView>;
};

export default Container;