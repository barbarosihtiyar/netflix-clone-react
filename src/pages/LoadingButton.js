import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import "../sass/loading.css"

const LoadingButton = ({isLoading, label, onClick}) => {
  return (
    <button className="loading" disabled={isLoading} onClick={onClick}>
      <FaSpinner className="loading-image"/>
    </button>
  );
};

export default LoadingButton;