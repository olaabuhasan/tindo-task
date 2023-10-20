import { ReactNode } from "react";

export type TabType = {
  id: string | undefined;
  isSelected: boolean;
  tabTitle: string;
  onClick: (e: any) => void;
};
