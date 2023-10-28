import React, {useState} from 'react';
import "./Dashboard.css";
import Sidebar from './Sidebar';
import StockTable from './tables/StockTable';


function Dashboard() {


  const [selectedIndex, setSelectedIndex] = useState("1");

  const handleSelectedIndexChange = (newIndex) => {
    setSelectedIndex(newIndex);
  };

  return (
    <div className='main-container'>
      <div className='app-bar-container'></div>
      <Sidebar  indexCallback={handleSelectedIndexChange}/>
      <div className='content-container'>
        {selectedIndex === "1" && (<p>Dashboard</p>)}
        {selectedIndex === "2" && (<StockTable/>)}
      </div>
    </div>
  )
}

export default Dashboard