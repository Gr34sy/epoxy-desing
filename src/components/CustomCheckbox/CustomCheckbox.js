
export function Checkbox({ checked, action, label, name }) {
  function changeHandler(e) {
    if (typeof action === "function") {
      action(e.target.checked);
    }
  }

  return (
    <div className="checkbox-container">
      <input
        className="custom-checkbox"
        type="checkbox"
        value={checked}
        onChange={changeHandler}
        name={name}
        id={name}
      />
      {label && <label htmlFor={name}>{label}</label>}
    </div>
  );
}
