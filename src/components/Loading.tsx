import React from "react";
import { FaSpinner } from "react-icons/fa6";

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <FaSpinner className=" animate-spin text-primary text-4xl" />
    </div>
  );
};

export default Loading;
