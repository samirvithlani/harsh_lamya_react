import React from 'react';
import iplBanner from "../../assets/images/IPL_BANNER.jpeg";

export const IPL = () => {
  return (
    <div className="container py-4">
      {/* Heading */}
      <div className="text-center mb-4">
        <h1 className="display-4 text-primary fw-bold">🏏 Indian Premier League (IPL)</h1>
        <p className="lead text-muted">Experience the thrill of cricket with IPL updates, teams, and more!</p>
      </div>

      {/* Banner */}
      <div className="text-center">
        <img
          src={iplBanner}
          alt="IPL Banner"
          className="img-fluid rounded shadow-lg"
          style={{ maxHeight: '450px', objectFit: 'cover' }}
        />
      </div>
    </div>
  );
};
