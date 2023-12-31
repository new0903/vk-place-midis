import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";
import './index.css'
// Init VK Mini App
bridge.send("VKWebAppInit");

ReactDOM.render(<App />, document.getElementById("root"));


if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}

//git remote add origin https://github.com/new0903/vk-place-midis.git