import React from "react";
import "../assets/css/loader.css"

export const Loader = () => {
  return (
    <div className="loader-container">
    <div class="loader">
      <div class="cell d-0"></div>
      <div class="cell d-1"></div>
      <div class="cell d-2"></div>

      <div class="cell d-1"></div>
      <div class="cell d-2"></div>

      <div class="cell d-2"></div>
      <div class="cell d-3"></div>

      <div class="cell d-3"></div>
      <div class="cell d-4"></div>
    </div>
    </div>
  );
};
