import React, { useState } from "react";
import "./Popup.css";

function PopUp({ onClose, onCreate }) {
  const [groupName, setGroupName] = useState("");
  const [color, setColor] = useState("#B38BFA");
  const colors = [
    "#B38BFA",
    "#FF79F2",
    "#43E6FC",
    "#F19576",
    "#0047FF",
    "#6691FF",
  ];

  const getAbbreviation = (name) => {
    return name
      .split(" ")
      .map((word) => word[0].toUpperCase())
      .join("");
  };

  const handleCreate = () => {
    if (groupName) {
      const abbreviation = getAbbreviation(groupName);
      onCreate(groupName, color, abbreviation);
      setGroupName("");
      setColor("#B38BFA");
      onClose();
      console.log(groupName, color);
    }
  };
  const handleClickOutside = (event) => {
    if (event.target.className === "popup-black-transparent") {
      onClose();
    }
  };

  const handlePopupClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="popup-black-transparent" onClick={handleClickOutside}>
      <div className="popup-container" onClick={handlePopupClick}>
        <div className="popup-heading">
          <h3 className="popup-headthird">Create New Notes group</h3>
        </div>
        <div className="popup-group-name">
          <label>Group Name</label>
          <input
            type="text"
            className="group-text"
            placeholder="Enter your group name...."
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
        </div>
        <div className="popup-colour">
          <p className="popup-para">Choose colour</p>
          <div className="color-option">
            {colors.map((optionColor, index) => (
              <div
                key={index}
                className="options"
                style={{ backgroundColor: optionColor }}
                onClick={() => setColor(optionColor)}
              ></div>
            ))}
          </div>
        </div>
        <div className="popup-button">
          <button className="popup-create" onClick={handleCreate}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
