import React from "react";
import { useState } from "react";
import Button from "../button/Button";
import Select from "../select/Select";
import "./Form.css";

const selectArrayA = [
  {
    value: "0",
    text: "Выбери башню",
  },
  {
    value: "1",
    text: "Башня А",
  },
  {
    value: "2",
    text: "Башня Б",
  },
];

const Form = () => {
  const [selectA, setSelectA] = useState("");
  const [selectB, setSelectB] = useState("");
  const [selectC, setSelectC] = useState("");
  const [textArea, setTextArea] = useState("");
  const [date, setDate] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      selectA,
      selectB,
      selectC,
      textArea,
      date,
    };
    let json = JSON.stringify(data);
    console.log(json);
    // console.log("submit", {
    //   selectA,
    //   selectB,
    //   selectC,
    //   textArea,
    //   date,
    // });
  };

  const textAreaHandleChange = (e) => {
    setTextArea(e.target.value);
    console.log(textArea);
  };

  const dateHandleChange = (e) => {
    setDate(e.target.value);
  };

  const selectAHandleChange = (e) => {
    setSelectA(e.target.value);
  };

  const selectBHandleChange = (e) => {
    setSelectB(e.target.value);
  };

  const selectCHandleChange = (e) => {
    setSelectC(e.target.value);
  };

  const buttonHandler = () => {
    setSelectA("Выбери башню");
    setSelectB("");
    setSelectC("");
    setDate("");
    setTextArea("");
  };

  return (
    <div className="container">
      <form className="form" onSubmit={submitHandler}>
        <select
          className="form__item form__item_select"
          defaultValue="0"
          onChange={selectAHandleChange}
        >
          <option value="0" disabled selected>
            Выбери башню
          </option>
          <option value="Башня А">Башня А</option>
          <option value="Башня Б">Башня Б</option>
        </select>
        <select
          className="form__item form__item_select"
          defaultValue="0"
          onChange={selectBHandleChange}
        >
          <option value="0" disabled selected>
            Выбери этаж
          </option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
        </select>
        <select
          className="form__item form__item_select"
          defaultValue="0"
          onChange={selectCHandleChange}
        >
          <option value="0" disabled selected>
            Выбери номер переговорки
          </option>
          <option value="Переговорка 1">Переговорка №1</option>
          <option value="Переговорка 2">Переговорка №2</option>
          <option value="Переговорка 3">Переговорка №3</option>
          <option value="Переговорка 4">Переговорка №4</option>
          <option value="Переговорка 5">Переговорка №5</option>
          <option value="Переговорка 6">Переговорка №6</option>
          <option value="Переговорка 7">Переговорка №7</option>
          <option value="Переговорка 8">Переговорка №8</option>
          <option value="Переговорка 9">Переговорка №9</option>
          <option value="Переговорка 10">Переговорка №10</option>
        </select>
        <input
          type="date"
          className="form__item"
          value={date}
          onChange={dateHandleChange}
        />
        <textarea
          className="form__item"
          value={textArea}
          onChange={textAreaHandleChange}
          placeholder="Оставь комментарий, пожалуйста"
        />
        <div className="buttons__container">
          <button className="button" type="submit">
            Отправить
          </button>
          <button className="button" type="reset" onClick={buttonHandler}>
            Очистить
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
