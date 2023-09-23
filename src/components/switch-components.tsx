import { FC, ReactNode } from 'react';

interface SwitchComponentsProps {
  currentNode: ReactNode;
  pendingNode: ReactNode;
  condition: boolean;
}

const SwitchComponents: FC<SwitchComponentsProps> = (props) => {
  const { currentNode, pendingNode, condition } = props;
  return condition ? <>{pendingNode}</> : <>{currentNode}</>;
};

export { SwitchComponents };
