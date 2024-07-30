import React from "react";

interface SectionProps {
  children: React.ReactNode;
  bgColor: string;
  textColor: string;
  id: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  bgColor,
  textColor,
  id,
}) => {
  return (
    <section
      id={id}
      className={`${bgColor} ${textColor} min-h-screen flex items-center justify-center`}
    >
      <div className="container mx-auto p-2">{children}</div>
    </section>
  );
};

export default Section;
