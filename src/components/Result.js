import React from "react";
import { numberComma } from "../util/NumberComma";
import "./Result.css";
const Result = ({ record }) => {
  console.log(record[0]);
  return (
    <div className="Result-box">
      {record.map((item, index) => {
        return (
          <div className="Result-row-box" key={index}>
            <div className="Result-data">{item.data}</div>
            <div className="Result-answer">{numberComma(item.answer)}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Result;
