import logo from './logo.svg';
import React from 'react'
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";
import HomeScreen from "./components/tuiter/HomeScreen/HomeScreen";
import ExploreScreen from "./components/tuiter/ExploreScreen/ExploreScreen";
import BookmarksScreen from "./components/tuiter/BookmarksScreen/BookmarksScreen";
import ListScreen from "./components/tuiter/ListScreen/ListScreen";
import MessageScreen from "./components/tuiter/MessageScreen/MessageScreen";
import MoreScreen from "./components/tuiter/MoreScreen/MoreScreen";
import NotificationScreen from "./components/tuiter/NotificationSreen/NotificationScreen";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
      <div className="container">
          <Routes>
              <Route path="/hello"
                     exact={true}
                     element={<HelloWorld/>}/>
              <Route path="/"
                     exact={true}
                     element={<Labs/>}/>
              <Route path="/tuiter"
                     exact={true}
                     element={<Tuiter/>}/>
              <Route path="/tuiter/home" element={<HomeScreen/>}/>
              <Route path="/tuiter/explore" element={<ExploreScreen/>}/>
              <Route path="/tuiter/notification" element={<NotificationScreen/>}/>
              <Route path="/tuiter/message" element={<MessageScreen/>}/>
              <Route path="/tuiter/bookmarks" element={<BookmarksScreen/>}/>
              <Route path="/tuiter/lists" element={<ListScreen/>}/>
              <Route path="/tuiter/more" element={<MoreScreen/>}/>
          </Routes>
      </div>
      </BrowserRouter>


  );
}

export default App;
