import "./App.scss";
import "./custom.scss";

import About from "./sections/About";
import Banner from "./sections/Banner";
import Browsing from "./sections/Browsing";
import Devices from "./sections/Devices";
import FloatingMenu from "./sections/FloatingMenu";
import Footer from "./sections/Footer";
import Members from "./sections/Members";
import Popup from "./sections/Popup";
import React from "react";
import Subject from "./sections/Subject";
import TimeTable from "./sections/timeTable/TimeTable";
import TopNav from "./sections/TobNav";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Banner />
      <About />
      <Browsing />
      <Members />
      <Subject />
      <Devices />
      <TimeTable />
      <Footer />
      <FloatingMenu />
      <Popup />
    </div>
  );
}

export default App;
