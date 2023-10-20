import React, { FC, Fragment, useState } from "react";
import { TabsType } from "./Tabs.type";
import { tabs } from "./util";
import { Tab } from "../Tab/Tab";
import "./Tabs.css";
import { ContentSection } from "../ContentSection";
export const Tabs: FC<TabsType> = ({}) => {
  const [currentTab, setCurrentTab] = useState("1");
  const handleTabClick = (e: any) => {
    setCurrentTab(e.target.id);
  };
  return (
    <Fragment>
      <div className="tabs-menu">
        {tabs?.map((item) => (
          <Tab
            key={item?.id}
            id={item?.id}
            isSelected={currentTab === item?.id}
            tabTitle={item?.tabTitle}
            onClick={handleTabClick}
          />
        ))}
      </div>
      <div>
        {tabs?.map((item) => (
          <ContentSection
            key={item?.id}
            id={item?.id}
            isSelected={currentTab === item?.id}
            title={item?.title}
            content={item.content}
          />
        ))}
      </div>
    </Fragment>
  );
};
