import { useState } from "react";
import "./SearchBar.css";

export function SearchBar() {
  const [searchTerm] = useState();

  return (
    <div>
      <form>
        <label>
          Enter barcode value:
          <input
            type="text"
            class="search-bar"
            value={searchTerm}
            // onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
