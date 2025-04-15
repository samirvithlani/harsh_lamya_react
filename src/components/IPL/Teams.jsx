import React from "react";
import { Link } from "react-router-dom";

const teams = [
  { id: 1, name: "Mumbai Indians" },
  { id: 2, name: "Chennai Super Kings" },
  { id: 3, name: "Royal Challengers Bangalore" },
  { id: 4, name: "Kolkata Knight Riders" },
  { id: 5, name: "Delhi Capitals" },
  { id: 6, name: "Rajasthan Royals" },
  { id: 7, name: "Sunrisers Hyderabad" },
  { id: 8, name: "Lucknow Super Giants" },
  { id: 9, name: "Gujarat Titans" },
  { id: 10, name: "Punjab Kings" },
];

export const Teams = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4 text-primary fw-bold">🏏 IPL Teams</h1>
      <div className="row g-4">
        {teams.map((team) => (
          <div className="col-md-4 col-lg-3">
            {/* <Link to="/teamdetail/"> */}
            {/* <Link to={`/teams/teamdetail/${team.id}`}> */}
            <Link to={`teamdetail/${team.id}`}>
              <div className="card h-100 shadow-sm border-0 rounded-4">
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">{team.name}</h5>
                  <p className="card-text text-muted">Team ID: {team.id}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
