import React, { useState } from "react";
import Image from "../../images/image.png";
import { IoIosLock } from "react-icons/io";
import "./MainContent.css";
import MessengerBox from "../messengerbox/MessengerBox";

function MainContent({ selectedGroup, onBack }) {
  const [notes, setNotes] = useState(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || {};
    return savedNotes;
  });
  

  const handleAddNotes = (note) => {
    if (selectedGroup) {
      const formatTime = (date) => {
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        const strMinutes = minutes < 10 ? '0' + minutes : minutes;
        return `${hours}:${strMinutes} ${ampm}`;
      };

      const formatDate = (date) => {
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
      };
  
      const updatedNotes = {
        ...notes,
        [selectedGroup.name]: [
          ...(notes[selectedGroup.name] || []),
          {
            note,
            time: formatTime(new Date()),
            date: formatDate(new Date()),
          },
        ],
      };
  
      console.log("Updated notes:", updatedNotes); // Debug log
      setNotes(updatedNotes);
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
    }
  };
  

 
  return (
    <div className="main-container">
      {selectedGroup ? (
        <div className="main-content-item">
          <div className="main-content-navbar">
            <div className="main-content-arrow" onClick={onBack}>🡠</div>
            <div
              className="main-content-group-abbreviation"
              style={{ backgroundColor: selectedGroup.color }}
            >
              {selectedGroup.abbreviation}
            </div>
            <div className="main-content-group-name">{selectedGroup.name}</div>
          </div>
          <div className="main-content-list">
            {(notes[selectedGroup.name] || []).map((note, index) => (
              <div key={index} className="main-content-notes-item">
                <div className="main-content-date-time">
                <div className="main-content-note-times">{note.time}</div>
                <div className="main-content-note-date" >{note.date}</div>
                </div>   
                <div className="main-content-notes-div">
                <div className="main-content-notes">{note.note}</div>
                </div>       
              </div>
            ))}
          </div>
          <div className="student-paragraph">
            <MessengerBox onAddNote={handleAddNotes} />
          </div>
        </div>
      ) : (
        <div className="main-image-container">
          <img className="image" src={Image} alt="background-Scene" />
          <div className="description">
            <h2 className="heading-description">Pocket Notes</h2>
            <p className="para-description">
              Send and receive messages without keeping your phone online.
              <br />
              Use Pocket Notes on up to 4 linked devices and 1 mobile phone
            </p>
          </div>
          <div className="encryption">
            <IoIosLock />
            end-to-end encrypted
          </div>
        </div>
      )}
    </div>
  );
}

export default MainContent;


