import React from 'react'
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";
import HomeScreen from "./components/tuiter/HomeScreen";
import ExploreScreen from "./components/tuiter/ExploreScreen/ExploreScreen";
import ProfileScreen from "./components/tuiter/ProfileScreen";
import EditProfile from "./components/tuiter/ProfileScreen/EditProfile"
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
                  <Route path="/">
                      <Route path="labs" element={<Labs/>}/>
                      <Route index element={<HelloWorld/>}/>
                      <Route path="tuiter" element={<Tuiter/>}>
                          <Route index
                                 element={<HomeScreen/>}/>
                          <Route path="home"
                                 element={<HomeScreen/>}/>
                          <Route path="explore"
                                 element={<ExploreScreen/>}/>
                          <Route path="notification"
                                 element={<NotificationScreen/>}/>
                          <Route path="profile"
                                 element={<ProfileScreen/>}/>
                          <Route path="editProfile"
                                 element={<EditProfile/>}/>
                          <Route path="bookmarks"
                                 element={<BookmarksScreen/>}/>
                          <Route path="lists"
                                 element={<ListScreen/>}/>
                          <Route path="message"
                                 element={<MessageScreen/>}/>
                          <Route path="more"
                                 element={<MoreScreen/>}/>
                      </Route>
                  </Route>
              </Routes>
          </div>
      </BrowserRouter>

  );
}

export default App;
