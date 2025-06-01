import React, { useState } from "react";
import "./Sidebar.css";

const sidebarData = [
  {
    title: "SQUAD",
    icon: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab15999e303e7c202c28c_squad.svg",
    items: [
      {
        name: "Squad Join",
        description: "Create or join a squad",
        avatar: "+",
        type: "action",
      },
    ],
  },
  {
    title: "ONLINE",
    icon: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab159d334e32483dbbcbb_online.svg",
    items: [
      {
        name: "MaryJane",
        description: "Online",
        avatar: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab1585908791f051d4af4_home__friend-picture-MaryJane.png",
        status: "online",
      },
    ],
  },
  {
    title: "OFFLINE",
    icon: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab15904900760dbfa7f70_offline.svg",
    items: [
      {
        name: "420",
        description: "Last seen 2h ago",
        avatar: "https://cdn.prod.website-files.com/6013fff62154adaa4600f932/601ab1583424fd3ddf23a848_home__friend-picture-420.png",
        status: "offline",
      },
    ],
  },
];

const RightSideBar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`right-sidebar ${isHovered ? "expanded" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {sidebarData.map((section, idx) => (
        <div className="sidebar-section" key={idx}>
          <div className="section-header">
            <img src={section.icon} alt="icon" className="section-icon" />
            <span className="section-title">{section.title}</span>
          </div>
          <div className="section-items">
            {section.items.map((item, i) => (
              <div className="sidebar-item" key={i}>
                <div
                  className={`item-avatar ${
                    item.status === "online"
                      ? "online"
                      : item.status === "offline"
                      ? "offline"
                      : ""
                  }`}
                >
                  {item.avatar.startsWith("http") ? (
                    <img src={item.avatar} alt={item.name} />
                  ) : (
                    <span>{item.avatar}</span>
                  )}
                </div>
                <div className="item-text">
                  <div className="item-name">{item.name}</div>
                  <div className="item-description">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RightSideBar;
