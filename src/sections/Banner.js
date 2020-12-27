import React from "react";
import sectionDesktopBanner from "../assets/contents/desktop-banner.png";
import sectionMobileBanner from "../assets/contents/mobile-banner.png";

export default () => (
  <section id="banner">
    <div style={{ background: "rgb(12,12,12)" }}>
      <div className="d-none d-md-block desktop-container">
        <img
          alt={"sectionDesktopBanner"}
          src={sectionDesktopBanner}
          className="w-100"
        />
      </div>
      <div className="d-md-none">
        <img
          alt={"sectionMobileBanner"}
          src={sectionMobileBanner}
          className="w-100 mt-4"
        />
      </div>
    </div>
  </section>
);
