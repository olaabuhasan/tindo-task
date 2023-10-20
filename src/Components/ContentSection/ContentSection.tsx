import React, { FC, Fragment } from "react";
import { ContentSectionType } from "./ContentSection.type";
import "./ContentSection.css";
export const ContentSection: FC<ContentSectionType> = ({
  id,
  content,
  title,
  isSelected,
}) => {
  return (
    <div className="content-div" id={id}>
      {isSelected && (
        <Fragment>
          <p className="title">{title}</p>
          <div className="content">{content}</div>
        </Fragment>
      )}
    </div>
  );
};
