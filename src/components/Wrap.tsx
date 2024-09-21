import { ReactNode } from "react";

const Wrap = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return <div className="px-6 mx-auto container">{children}</div>;
};

export default Wrap;
