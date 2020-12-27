import React from 'react';
// import sectionDesktopFooter from '../assets/sections/section-desktop-footer.png';
import sectionDesktopFooter from '../assets/contents/desktop-footer.png';
import sectionMobileFooter from '../assets/sections/section-mobile-footer.png';

export default () => (
  <section id="footer" style={{ background: '#3c3c3c' }}>
   <div className="d-none d-md-block desktop-container">
      <img
        alt={'sectionDesktopFooter'}
        src={sectionDesktopFooter}
        className="w-100"
      />
    </div>
    <div className="d-md-none p-0">
      <img
        alt={'sectionMobileFooter'}
        src={sectionMobileFooter}
        className="w-100"
      />
    </div>
  </section>
);
