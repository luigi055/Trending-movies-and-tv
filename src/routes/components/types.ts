import React from "react";
import { RouteProps } from "react-router-dom";

export interface CustomRouteProps extends Omit<RouteProps, "component"> {
  component: React.ElementType;
}
