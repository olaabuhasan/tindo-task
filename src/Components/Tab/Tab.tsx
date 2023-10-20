import React, { FC } from "react";
import { TabType } from "./Tab.type";
import "./Tab.css";
export const Tab: FC<TabType> = ({ id, isSelected, tabTitle, onClick }) => {
  return (
    <div
      className={`tab-item ${isSelected && "selected-tab"}`}
      onClick={onClick}
      id={id}
    >
      <p id={id}>{tabTitle}</p>
    </div>
  );
};
