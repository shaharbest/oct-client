import { sortCategories } from "./constants";
import { useState } from "react";

export default function CatalogControls({ handleSearch, handleSort }) {
  const [inputVal, setInputVal] = useState('');
  
  const sortOptions = ['', ...sortCategories]
    .map(c => <option key={c} value={c}>
      {c}
    </option>);

  return <div className="catalog-board-controls">
    <input type="text" value={inputVal}
      onChange={e => setInputVal(e.target.value)} />
    <button onClick={() => handleSearch(inputVal)}>
      search
    </button>
    <select onChange={e => handleSort(e.target.value)}>
      {sortOptions}
    </select>
  </div>
}