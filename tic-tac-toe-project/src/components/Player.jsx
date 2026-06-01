import { useState } from "react";

export default function Player({initialName, symbol}) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing ] = useState(false);

    function handleEdit () {
        setIsEditing(prev => !prev);
    }

    function handleChange (e) {
        setPlayerName(e.target.value);
    }

    let editPlayerHTML = <span className="player-name">{playerName}</span>;

    if (isEditing) {
        editPlayerHTML = <input type="text" required value={playerName} onChange={handleChange}></input>;
    }
  return (
    <li>
      <span className="player">
        {editPlayerHTML}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
