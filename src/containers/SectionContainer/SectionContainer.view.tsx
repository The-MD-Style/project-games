import React, { PropsWithChildren } from 'react';
import Container from '../Container/Container';

type Props = { className: string };

const SectionContainerView: React.FC<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) => {
  return (
    <section className={props.className}>
      <Container>{props.children}</Container>
    </section>
  );
};

export default SectionContainerView;