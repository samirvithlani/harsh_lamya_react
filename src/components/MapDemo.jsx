import React from "react";

export const MapDemo = () => {
  var employees = [
    {
      id: 1,
      name: "ram",
      age: 23,
      gender: "male",
    },
    {
      id: 2,
      name: "seeta",
      age: 22,
      gender: "female",
    },
    {
      id: 3,
      name: "ajay",
      age: 25,
      gender: "male",
    },
  ];

  return (
    <div>
      <h1>MAP DEMO</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>GENDER</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => {
            return (
              <tr>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td style={{backgroundColor:emp.age>23 && "yellow"}}>{emp.age}</td>
                {/* <td style={{color:emp.gender =="female"?"pink":"black"}}>{emp.gender}</td> */}
                <td style={{color:emp.gender =="female"&&"pink"}}>{emp.gender}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
