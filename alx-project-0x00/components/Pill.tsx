import React from "react";

interface PillProps {
  title: string;
}

const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <div className="bg-[#f1f1f1] px-3 py-1 rounded-full text-sm font-medium">
      {title}
    </div>
  );
};

export default Pill;
