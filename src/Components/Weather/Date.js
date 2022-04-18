import React from "react";

export default function Time() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  return (
    <div>
      <h2 style={{marginLeft:5,}} >{date}</h2>
    </div>
  );
}