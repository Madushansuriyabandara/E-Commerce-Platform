import React, { useState } from "react";
import "./Sidebar.css";
import ActionButton from "../../components/ActionButton";

function Sidebar({indexCallback}) {
  const [selectedIndex, setSelected] = useState("1");

  function changeSelected(selected) {
    indexCallback(selected);
    setSelected(selected);
  }

  return (
    <div className="sidebar-container">
      <ActionButton
        buttonText={"Dashboard"}
        outlinedMode={selectedIndex !== "1"}
        isSelected={selectedIndex === "1"}
        height="5vh"
        width="80%"
        onTap={() => {
          changeSelected("1");
        }}
      />
      <ActionButton
        buttonText={"Stock"}
        outlinedMode={selectedIndex !== "2"}
        isSelected={selectedIndex === "2"}
        height="5vh"
        width="80%"
        onTap={() => {
          changeSelected("2");
        }}
      />
      <ActionButton
        buttonText={"Customers"}
        outlinedMode={selectedIndex !== "3"}
        isSelected={selectedIndex === "3"}
        height="5vh"
        width="80%"
        onTap={() => {
          changeSelected("3");
        }}
      />
      <ActionButton
        buttonText={"Orders"}
        outlinedMode={selectedIndex !== "4"}
        isSelected={selectedIndex === "4"}
        height="5vh"
        width="80%"
        onTap={() => {
          changeSelected("4");
        }}
      />
      <ActionButton
        buttonText={"Delivery"}
        outlinedMode={selectedIndex !== "5"}
        isSelected={selectedIndex === "5"}
        height="5vh"
        width="80%"
        onTap={() => {
          changeSelected("5");
        }}
      />
      <ActionButton
        buttonText={"Reports"}
        outlinedMode={selectedIndex !== "6"}
        isSelected={selectedIndex === "6"}
        height="5vh"
        width="80%"
        onTap={() => {
          changeSelected("6");
        }}
      />
      <ActionButton
        buttonText={"Settings"}
        outlinedMode={selectedIndex !== "7"}
        isSelected={selectedIndex === "7"}
        height="5vh"
        width="80%"
        onTap={() => {
          changeSelected("7");
        }}
      />
      {/* <ActionButton buttonText={"Hello"} outlinedMode={true} height="5vh" width="80%"/>
      <ActionButton buttonText={"Hello"} outlinedMode={true} height="5vh" width="80%"/> */}
    </div>
  );
}

export default Sidebar;
