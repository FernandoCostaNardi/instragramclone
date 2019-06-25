import React, { Component } from "react";
import { YellowBox } from "react-native";

import Routes from "./routes";

YellowBox.ignoreWarnings(["Unrecognized WebSocket"]);

export default function app() {
  return <Routes />;
}
