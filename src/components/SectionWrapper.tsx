import React from "react";

type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const SectionWrapper = ({ children, className = "" }: SectionWrapperProps) => {
  return <section className={`flex h-dvh ${className}`}>{children}</section>;
};

export default SectionWrapper;
