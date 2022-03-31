import React, { useState } from "react";
import Calc from "./Clac/Calc";
import Footer from "./common/Footer";
import Header from "./common/Header";
import Result from "./Result";

const Root = () => {
  const [record, setRecord] = useState([]);
  const [onOff, setonOff] = useState(true);
  return (
    <div>
      <Header onOff={onOff} />
      {onOff ? (
        <Calc record={record} setRecord={setRecord} />
      ) : (
        <Result record={record} />
      )}
      <Footer setonOff={setonOff} onOff={onOff} />
    </div>
  );
};

export default Root;
