import React from "react";

export const SearchParams = () => {
  return (
    <div>
      <select>
        <option value="newest">Od Najnowszych</option>
        <option value="oldest">Od Najstarszych</option>
        <option value="price-asc">Cena od najniższej</option>
        <option value="price-desc">Cena od najwyższek</option>
      </select>
    </div>
  );
};
