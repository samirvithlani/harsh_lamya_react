import React from 'react'
import { useParams } from 'react-router-dom'

const teams = [
    {
      id: 1,
      name: "Mumbai Indians",
      captain: "Rohit Sharma",
      players: ["Suryakumar Yadav", "Jasprit Bumrah", "Ishan Kishan", "Tilak Varma"],
      owner: "Reliance Industries",
      trophies: 5
    },
    {
      id: 2,
      name: "Chennai Super Kings",
      captain: "MS Dhoni",
      players: ["Ruturaj Gaikwad", "Ravindra Jadeja", "Deepak Chahar", "Moeen Ali"],
      owner: "India Cements",
      trophies: 5
    },
    {
      id: 3,
      name: "Royal Challengers Bangalore",
      captain: "Faf du Plessis",
      players: ["Virat Kohli", "Glenn Maxwell", "Mohammed Siraj", "Dinesh Karthik"],
      owner: "United Spirits",
      trophies: 0
    },
    {
      id: 4,
      name: "Kolkata Knight Riders",
      captain: "Shreyas Iyer",
      players: ["Andre Russell", "Sunil Narine", "Nitish Rana", "Rinku Singh"],
      owner: "Shah Rukh Khan (Red Chillies Entertainment)",
      trophies: 2
    },
    {
      id: 5,
      name: "Delhi Capitals",
      captain: "Rishabh Pant",
      players: ["David Warner", "Axar Patel", "Prithvi Shaw", "Kuldeep Yadav"],
      owner: "GMR Group & JSW Group",
      trophies: 0
    },
    {
      id: 6,
      name: "Rajasthan Royals",
      captain: "Sanju Samson",
      players: ["Jos Buttler", "Yuzvendra Chahal", "Trent Boult", "Shimron Hetmyer"],
      owner: "Emerging Media",
      trophies: 1
    },
    {
      id: 7,
      name: "Sunrisers Hyderabad",
      captain: "Pat Cummins",
      players: ["Rahul Tripathi", "Aiden Markram", "Bhuvneshwar Kumar", "Umran Malik"],
      owner: "Sun TV Network",
      trophies: 1
    },
    {
      id: 8,
      name: "Lucknow Super Giants",
      captain: "KL Rahul",
      players: ["Marcus Stoinis", "Quinton de Kock", "Krunal Pandya", "Mark Wood"],
      owner: "RPSG Group",
      trophies: 0
    },
    {
      id: 9,
      name: "Gujarat Titans",
      captain: "Shubman Gill",
      players: ["Rashid Khan", "Sai Sudharsan", "Mohit Sharma", "Rahul Tewatia"],
      owner: "CVC Capital Partners",
      trophies: 1
    },
    {
      id: 10,
      name: "Punjab Kings",
      captain: "Shikhar Dhawan",
      players: ["Arshdeep Singh", "Liam Livingstone", "Sam Curran", "Kagiso Rabada"],
      owner: "Preity Zinta & Ness Wadia",
      trophies: 0
    }
  ];
  

  
  
  
export const TeamDetail = () => {
    //const { id } = useParams();
    const id = useParams().id;
    const team = teams.find((team)=>team.id == id)
  
    if (!team) {
      return (
        <div className="container py-5 text-center">
          <h2 className="text-danger">Team Not Found</h2>
        </div>
      );
    }
  
    return (
      <div className="container py-5">
        <div className="card shadow-lg rounded-4">
          <div className="card-body">
            <h2 className="card-title text-center text-primary fw-bold mb-4">{team.name}</h2>
            
            <ul className="list-group list-group-flush mb-3">
              <li className="list-group-item"><strong>Captain:</strong> {team.captain}</li>
              <li className="list-group-item"><strong>Owner:</strong> {team.owner}</li>
              <li className="list-group-item"><strong>Trophies Won:</strong> 🏆 {team.trophies}</li>
              <li className="list-group-item">
                <strong>Key Players:</strong>
                <ul className="mt-2">
                  {team.players.map((player, index) => (
                    <li key={index}>{player}</li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
