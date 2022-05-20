import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <div>
      <button className='className="btn btn-primary rounded-md uppercase text-white px-4 py-2 font-bold bg-gradient-to-r from-secondary to-primary'>
        {children}
      </button>
    </div>
  );
};

export default PrimaryButton;
