import React from "react";
import type { ActionFunction, LoaderFunction } from "react-router-dom";

type RouteCommon = {
  loader?: LoaderFunction;
  action?: ActionFunction;
  ErrorBoundary?: React.ComponentType;
};

export type IRoute = RouteCommon & {
  path: string;
  Element: React.ComponentType;
};

export type Pages = {
  [key: string]: {
    default: React.ComponentType;
  } & RouteCommon;
};
