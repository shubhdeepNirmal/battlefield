import React from "react";
import "./ModuleData.css";
import { useState, useEffect } from "react";
const ModuleData =()=>{
   
    const [tableData, setTableData] = useState({
       serverstats: [],
        settings: [],
        advanced: [],
        rules: [],
   });

  useEffect(() => {
  fetch("https://battlefieldbackend.onrender.com/api/data-json")
  .then((res) => {
    if (!res.ok) throw new Error("Network response was not ok");
    return res.json();
  })
  .then((json) => setTableData(json))
  .catch((error) => console.error("Error fetching data:", error));

}, []);



    return(



    <div className="server-info-container">
        <div className="server-info header">
            <h2 className="Server-title">!RC3-BASEMAPS</h2>
             <div className="server-tags">
                <span>Conquest</span>
                <span>-</span>
                <span>Lancang Dam</span>
                <span>Custom</span>
                <span>-</span>
                <span>64 Hz</span>
             </div>
         <p className="server-description">
            Server protected by The K-50 AntiCheat. Vip !Rules, Questions, Request, Appeal, Visit us: www.epg.gg | Discord <br />
          https://discord.gg/3r5Nk4d
         </p>

         <div className="server-buttons">
             <button className="server-button">Join Server</button>
                <button className="server-button">Sepctate</button>
                <button className="server-button"> Join as Commander</button>
                <button className="server-button">★ 13672</button>
           </div>

        </div>

        <div className="server-info-stats">
  <div className="server-stats-row">
    {tableData.serverstats.map((item, index) => (
      <div key={index} className="server-stat-box">
        <span className="stat-label">{item.label}</span>
        <span className="stat-value">{item.value}</span>
      </div>
    ))}
  </div>
</div>


     <div className="server-tables">
        <div className="server-table">
          <h3>Settings</h3>
         {tableData.settings.map((item, index) => (
  <div key={index} className="server-table-row">
    <span className="server-row-label">{item.label}</span>
    <span className="server-row-value">{item.value}</span>
  </div>
))}
        </div>

        <div className="server-table">
          <h3>Advanced</h3>
          {tableData.advanced.map((item, index) => (
  <div key={index} className="server-table-row">
    <span className="server-row-label">{item.label}</span>
    <span className="server-row-value">{item.value}</span>
  </div>
))}
        </div>

        <div className="server-table">
          <h3>Rules</h3>
          {tableData.rules.map((item, index) => (
  <div key={index} className="server-table-row">
    <span className="server-row-label">{item.label}</span>
    <span className="server-row-value">{item.value}</span>
  </div>
))}
        </div>

      </div>

    </div>
    );
};

export default ModuleData;

