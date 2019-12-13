import React from "react";

export default function Checkbox({ checked, handleToggle }) {
  return (
    <div className='checkbox-wrapper'>
      <span>Character</span>
      <div>
        <input
          className="search-checkbox"
          checked={checked}
          type="checkbox"
          name="search-to"
          id="character"
          value="anime"
          onChange={handleToggle}
        />
        <label htmlFor="character" className="checkbox-lebel">
          <span className="toggle-btn" />
        </label>
      </div>
      <span>Anime</span>
    </div>
  );
}
