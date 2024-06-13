import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

const MarginContainerWrapper = ({ children }: ContainerProps) => {
  return <div className="ml-44 mr-44">{children}</div>;
};

export default MarginContainerWrapper;
