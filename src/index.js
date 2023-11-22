import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import { RouterProvider, createHashRouter } from '@vkontakte/vk-mini-apps-router'

import {ConfigProvider,AdaptivityProvider,AppRoot } from '@vkontakte/vkui';
import App from "./App";
import './index.css'
//AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol,
const router=createHashRouter([
  {
    path:'/',
    panel:'home',
    view:'defaultView'
  },
  {
    path:'/PlaceInfo',
    panel:'placesinfo',
    view:'defaultView'
  },
  {
    path:'/addPlace',
    panel:'addPlace',
    view:'defaultView'
  },
  {
    path:'/userProfile',
    panel:'userProfile',
    view:'defaultView'
  },
  {
    path:'/editPlace',
    panel:'editPlace',
    view:'defaultView'
  },
  {
    path:'/quest',
    panel:'quest',
    view:'defaultView'
  },
  {
    path:'/map',
    panel:'map',
    view:'defaultView'
  },
])


// Init VK Mini App
bridge.send("VKWebAppInit");

ReactDOM.render(
  <ConfigProvider>
    <AdaptivityProvider>
      <AppRoot>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </AppRoot>
    </AdaptivityProvider>
  </ConfigProvider>
  , document.getElementById("root"));


if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => { }); //runtime download
}

//git remote add origin https://github.com/new0903/vk-place-midis.git

//npm i @ckeditor/ckeditor5-build-classic
//npm i @ckeditor/ckeditor5-react
//npm i @vkontakte/vk-mini-apps-router
//npm i html-react-parser
//npm i @vkontakte/vk-mini-apps-router
//npm i axios