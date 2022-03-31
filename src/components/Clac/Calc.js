import React, { useRef, useState } from "react";
import { numberComma } from "../../util/NumberComma";
import "./Clac.css";
const Calc = ({ record, setRecord }) => {
  const [inputData, setInputData] = useState("");
  const inputRef = useRef();
  const inputAnswerRef = useRef();

  let copyinputData = "";
  const onClickValue = (e) => {
    const value = e.target.dataset.value;
    if (value === "reset" || value === "enter" || value === "backspace") {
      copyinputData = inputData;
    } else {
      copyinputData = inputData + value;
    }

    if (value === "reset") {
      setInputData("");
      copyinputData = "";
      inputAnswerRef.current.value = "";
      inputRef.current.value = copyinputData;
    } else if (value === "enter") {
      let answer = 0;
      if (copyinputData.indexOf("/") !== -1) {
        const tmpArr = copyinputData.split("/");
        answer = Number(tmpArr[0]) / Number(tmpArr[1]);
        inputAnswerRef.current.value = answer;
      } else if (copyinputData.indexOf("+") !== -1) {
        const tmpArr = copyinputData.split("+");
        answer = Number(tmpArr[0]) + Number(tmpArr[1]);
        inputAnswerRef.current.value = answer;
      } else if (copyinputData.indexOf("-") !== -1) {
        const tmpArr = copyinputData.split("-");
        answer = Number(tmpArr[0]) - Number(tmpArr[1]);
        inputAnswerRef.current.value = answer;
      } else if (copyinputData.indexOf("%") !== -1) {
        const tmpArr = copyinputData.split("%");
        answer = Number(tmpArr[0]) % Number(tmpArr[1]);
        inputAnswerRef.current.value = answer;
      } else if (copyinputData.indexOf("*") !== -1) {
        const tmpArr = copyinputData.split("*");
        answer = Number(tmpArr[0]) * Number(tmpArr[1]);
        inputAnswerRef.current.value = numberComma(answer);
      }
      const tmpRecord = [...record];
      tmpRecord.push({ data: copyinputData, answer: answer });
      setRecord(tmpRecord);
    } else if (value === "backspace") {
      let tmpdata = copyinputData.substring(0, copyinputData.length - 1);
      setInputData(tmpdata);
      inputRef.current.value = tmpdata;
    } else {
      setInputData(inputData + value);
      inputRef.current.value = copyinputData;
    }
  };

  return (
    <div className="Calc-box">
      <div className="Calc-input-box">
        <input className="input-data" type="text" ref={inputRef} />
        <input className="input-answer" type="text" ref={inputAnswerRef} />
      </div>
      <table className="Calc-table">
        <thead>
          <tr>
            <td
              className="Calc-gray"
              data-value="reset"
              onClick={(e) => onClickValue(e)}
            >
              C
            </td>
            <td className="Calc-gray">
              <img
                data-value="%"
                onClick={(e) => onClickValue(e)}
                src="img/icon_percentage.png"
                alt="icon_percentage"
              />
            </td>
            <td className="Calc-gray">
              <img
                data-value="/"
                onClick={(e) => onClickValue(e)}
                src="img/icon_divide.png"
                alt="icon_divide"
              />
            </td>
            <td className="Calc-pink">
              <img
                data-value="*"
                onClick={(e) => onClickValue(e)}
                src="img/icon_mulitple.png"
                alt="icon_divide"
              />
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              className="Clac-normal"
              data-value={7}
              onClick={(e) => onClickValue(e)}
            >
              7
            </td>
            <td
              className="Clac-normal"
              data-value={8}
              onClick={(e) => onClickValue(e)}
            >
              8
            </td>
            <td
              className="Clac-normal"
              data-value={9}
              onClick={(e) => onClickValue(e)}
            >
              9
            </td>
            <td className="Calc-pink">
              <img
                data-value="-"
                onClick={(e) => onClickValue(e)}
                src="img/icon_minus.png"
                alt="icon_minus"
              />
            </td>
          </tr>
          <tr>
            <td
              className="Clac-normal"
              data-value={4}
              onClick={(e) => onClickValue(e)}
            >
              4
            </td>
            <td
              className="Clac-normal"
              data-value={5}
              onClick={(e) => onClickValue(e)}
            >
              5
            </td>
            <td
              className="Clac-normal"
              data-value={6}
              onClick={(e) => onClickValue(e)}
            >
              6
            </td>
            <td className="Calc-pink">
              <img
                data-value="+"
                onClick={(e) => onClickValue(e)}
                src="img/icon_add.png"
                alt="icon_add"
              />
            </td>
          </tr>
          <tr>
            <td
              className="Clac-normal"
              data-value={1}
              onClick={(e) => onClickValue(e)}
            >
              1
            </td>
            <td
              className="Clac-normal"
              data-value={2}
              onClick={(e) => onClickValue(e)}
            >
              2
            </td>
            <td
              className="Clac-normal"
              data-value={3}
              onClick={(e) => onClickValue(e)}
            >
              3
            </td>
            <td className="Clac-red" rowSpan="2">
              <img
                id="Calc-img-enter"
                data-value="enter"
                onClick={(e) => onClickValue(e)}
                src="img/icon_equal.png"
                alt="icon_equal"
              />
            </td>
          </tr>
          <tr>
            <td className="Calc-gray">
              <img
                data-value="backspace"
                onClick={(e) => onClickValue(e)}
                src="img/icon_cancle.png"
                alt="icon_cancle"
              />
            </td>
            <td
              className="Clac-normal"
              data-value={0}
              onClick={(e) => onClickValue(e)}
            >
              0
            </td>
            <td
              className="Clac-normal"
              data-value="."
              onClick={(e) => onClickValue(e)}
            >
              .
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calc;
