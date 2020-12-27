import React from 'react';
import sectionDesktopMembers from '../assets/contents/desktop-members.png';
import sectionMobileMember01 from '../assets/sections/section-mobile-member01.png';
import sectionMobileMember02 from '../assets/sections/section-mobile-member02.png';

export default () => (
  <section id="members">
    <div className="d-none d-md-block desktop-container">
      <img
        alt={'sectionDesktopMembers'}
        src={sectionDesktopMembers}
        className="w-100"
      />
    </div>
    <div className="d-md-none p-0" style={{ marginTop: 80 }}>
      <img
        alt={'sectionMobileMember01'}
        src={sectionMobileMember01}
        className="w-100"
      />
      <img
        alt={'sectionMobileMember02'}
        src={sectionMobileMember02}
        className="w-100"
      />
    </div>
  </section>
);
