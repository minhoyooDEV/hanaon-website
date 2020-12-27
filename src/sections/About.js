import React from 'react';
import sectionDesktopAbout from '../assets/contents/desktop-about.png';
import sectionMobileAbout from '../assets/sections/section-mobile-about.png';

export default () => (
  <section id="about">
    <div className="d-none d-md-block desktop-container">
      <img
        alt={'sectionMobileAbout'}
        src={sectionDesktopAbout}
        className="w-100"
      />
    </div>
    <div className="d-md-none p-0"  style={{ marginTop: 80 }}>
      <img
        alt={'sectionMobileAbout'}
        src={sectionMobileAbout}
        className="w-100"
      />
    </div>
  </section>
);
