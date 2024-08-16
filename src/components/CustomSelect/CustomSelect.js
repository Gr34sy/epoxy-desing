export function Select({ action }) {
  function actionHandler(e) {
    if (typeof action === "function") {
      action(e.target.value);
    }
  }

  return (
    <div className="custom-select">
      <select onChange={actionHandler}>
        <option value="newest">Od Najnowszych</option>
        <option value="oldest">Od Najstarszych</option>
        <option value="price-asc">Cena od najniższej</option>
        <option value="price-desc">Cena od najwyższej</option>
      </select>
      <span className="custom-arrow"></span>
    </div>
  );
}
