import React, { PropsWithChildren } from 'react';
import SectionContainerView from './SectionContainer.view';

type Props = { className: string };

const SectionContainer: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) => {
  return <SectionContainerView className={props.className}>{props.children}</SectionContainerView>;
};

export default SectionContainer;