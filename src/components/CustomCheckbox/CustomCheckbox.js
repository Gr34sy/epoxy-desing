import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
export function Checkbox({ initialState, action, label, name }) {
  const [checked, setChecked] = useState(initialState);

  function changeHandler(e) {
    setChecked((prev) => !prev);
  }

  return (
    <div className="checkbox-container">
      <input
        className={"custom-checkbox"}
        type="checkbox"
        value={checked}
        onChange={changeHandler}
        name={name}
        id={name}
      />
      {/* {checked && <FontAwesomeIcon icon={faCheckCircle} />} */}
      {label && <label htmlFor={name}>{label}</label>}
    </div>
  );
}
