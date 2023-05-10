import React from "react";

const Select = (option, value) => {
  <select className="form__item form__item_select" defaultValue="0">
    <option value={value} disabled selected>
      {option}
    </option>
  </select>;
};

export default Select;
