import React from 'react';
// import sectionDesktopSubject from '../assets/sections/section-desktop-subject.png';
import sectionDesktopSubjects from '../assets/contents/desktop-subjects.png';
import sectionMobileSubject from '../assets/sections/section-mobile-subject.png';

export default () => (
  <section id="subjects">
    <div className="d-none d-md-block desktop-container">
      <img
        alt={'sectionDesktopSubjects'}
        src={sectionDesktopSubjects}
        className="w-100"
      />
    </div>
    <div className="d-md-none p-0"  style={{ marginTop: 80 }}>
      <img
        alt={'sectionMobileSubject'}
        src={sectionMobileSubject}
        className="w-100"
      />
    </div>
  </section>
);
