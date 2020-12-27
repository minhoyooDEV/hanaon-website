import React from 'react';
import sectionDesktopDevices from '../assets/contents/desktop-devices.png';
import sectionMobileDevices from '../assets/sections/section-mobile-devices.png';

export default () => (
  <section id="devices">
    <div className="d-none d-md-block desktop-container">
      <img
        alt={'sectionDesktopDevices'}
        src={sectionDesktopDevices}
        className="w-100"
      />
    </div>
    <div className="d-md-none p-0"  style={{ marginTop: 80 }}>
      <img
        alt={'sectionMobileDevices'}
        src={sectionMobileDevices}
        className="w-100"
      />
    </div>
  </section>
);
