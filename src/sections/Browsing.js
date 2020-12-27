import React from 'react';
import sectionDesktopBrowsing from '../assets/contents/desktop-browsing.png';
import sectionMobileBrowsing from '../assets/sections/section-mobile-browsing.png';

export default () => (
  <section id="inside-browsing">
    <div className="d-none d-md-block desktop-container">
      <img
        alt={'sectionDesktopBrowsing'}
        src={sectionDesktopBrowsing}
        className="w-100"
      />
    </div>
    <div className="d-md-none p-0" style={{ marginTop: 80 }}>
      <img
        alt={'sectionMobileBrowsing'}
        src={sectionMobileBrowsing}
        className="w-100"
      />
    </div>
  </section>
);
