import React from "react";

export const Loading = () => {
  return (
    <div className="loading">
      <div class="lds-default">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className="loading__caption">Ładowanie...</p>
    </div>
  );
};
