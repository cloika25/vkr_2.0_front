import React, { PropsWithChildren } from 'react';

type ContainerProps = {
  className?: string;
  flex?: '1' | 'none' | 'initial' | 'auto';
  direction?: 'col' | 'col-reverse' | 'row' | 'row-reverse';
}

export const Container: React.FC<PropsWithChildren<ContainerProps>> = ({
  children, className, flex, direction,
}) => {
  let styles = 'flex ';

  if (flex) {
    styles += `flex-${flex} `;
  }

  if (direction) {
    styles += `flex-${direction} `;
  }

  if (className) {
    styles += className;
  }

  return (
    <div className={styles}>
      {children}
    </div>
  );
};

export const Row: React.FC<PropsWithChildren<ContainerProps>> = (props) => (
  <Container
    direction="row"
    flex="1"
    {...props}
  />
);

export const Col: React.FC<PropsWithChildren<ContainerProps>> = (props) => (
  <Container
    direction="col"
    flex="1"
    {...props}
  />
);
