import React, { useState } from "react";

const Tab = (props) => {
  const [activeTab, setActiveTab] = useState(props.defaultActiveTab);

  const handleClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
      <div className="tab-header">
        {props.tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-item ${activeTab === index ? "active" : ""}`}
            onClick={() => handleClick(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className="tab-content">{props.tabs[activeTab].content}</div>
    </div>
  );
};

export default Tab;
