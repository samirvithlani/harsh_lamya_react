import React, { useMemo, useState } from "react";

export const UseMemo3 = () => {
  var gridSize = 5;
  var totalTiles = gridSize * gridSize; //16
  const [clickedTiles, setclickedTiles] = useState([])
//   var bombPos = Math.floor(Math.random()*totalTiles)
//   console.log(bombPos)

var bombPos = useMemo(()=>{
    return Math.floor(Math.random()*totalTiles)
},[])
console.log(bombPos)

  const handleClick = (index)=>{
    setclickedTiles([...clickedTiles,index])
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>FIND BOMB</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${gridSize}, 50px)`,
          gap: "10px",
          justifyContent: "center",
        }}
      >
        {Array.from({ length: totalTiles }).map((_, index) => {
          return (
            <div
            onClick={()=>{handleClick(index)}}
              style={{
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid black",
                backgroundColor: clickedTiles.includes(index) ? "#ddd" : "#fff",
                //backgroundColor:"#fff",
                cursor: "pointer",
              }}
            >💣</div>
          );
        })}
      </div>
    </div>
  );
};
