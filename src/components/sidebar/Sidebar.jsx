import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import PopUp from "../popup/PopUp";

function Sidebar({ onGroupSelect }) {
  const [popup, setPopup] = useState(false);
  const [groups, setGroups] = useState([]);

  const handlePopup = () => {
    setPopup(!popup);
  };

  const handleClose = () => {
    setPopup(false);
  };

  const handleCreate = (groupName, color, abbreviation) => {
    const newGroup = { name: groupName, color, abbreviation };
    const updatedGroups = [...groups, newGroup];
    setGroups(updatedGroups);
    localStorage.setItem("groups", JSON.stringify(updatedGroups));
  };

  useEffect(() => {
    const savedGroups = JSON.parse(localStorage.getItem("groups")) || [];
    setGroups(savedGroups);
  }, []);

  return (
    <div className="sidebar-container">
      <div className="heading">
        <h2 className="sidebar-heading">Pocket Notes</h2>
      </div>

      <div className="plus-button" onClick={handlePopup}>
        <p className="plus-sign">+</p>
        <p className="create-group">Create Notes group</p>
      </div>
      {popup && <PopUp onClose={handleClose} onCreate={handleCreate} />}

      <div className="group-lists">
        {groups.map((group, index) => (
          <div
            key={index}
            className="group-items"
            style={{ backgroundColor: group.color }}
            onClick={() => onGroupSelect(group)}
          >
            <div className="group-abbreviation">{group.abbreviation}</div>
            <div className="group-name">{group.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
