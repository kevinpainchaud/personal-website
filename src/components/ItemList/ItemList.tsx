import React, { ReactNode } from "react";

import "./item-list.scss";

export const ItemList = ({ children }: { children: ReactNode }) => (
  <div className="item-list">{children}</div>
);
