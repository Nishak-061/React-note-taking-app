import React, { useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import MainContent from '../maincontent/MainContent'
import './Layout.css';

function Layout() {
  const [selectedGroup, setSelectedGroup] = useState(null);

  const handleGroupSelected = (group) => {
    setSelectedGroup(group);
  }

  const handleBack = () => {
    setSelectedGroup(null);
    document.querySelector(".sidebar-container").classList.remove("hide");
    document.querySelector(".main-container").classList.remove("show");
  };

  return (
    <div className='layout-container'>
        <div className='navbar'>     
          <Sidebar onGroupSelect={handleGroupSelected} />
      <MainContent selectedGroup={selectedGroup} onBack={handleBack}/>
      
      
    </div>
    </div>
    
  )
}

export default Layout
