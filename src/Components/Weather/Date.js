import React from "react";
import moment from "moment";
export default function Time() {
  let myDate;
  myDate = moment().format("llll"); // Mon, Apr 18, 2022 5:56 PM
  return (
    <div>
      <h2 style={{ marginLeft: 5 }}>{myDate}</h2>
    </div>
  );
}
