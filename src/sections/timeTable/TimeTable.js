import { Col, Container, Row } from 'react-bootstrap';
import { KAKAO_ADDRESS, TALK_ADDRESS } from '../../constants';

import React from 'react';
import sectionDesktopEtc01 from '../../assets/contents/desktop-etc-01.png';
import sectionDesktopEtc02 from '../../assets/contents/desktop-etc-02.png';
import sectionDesktopEtc0301 from '../../assets/contents/desktop-etc-0301.png';
import sectionDesktopEtc0302 from '../../assets/contents/desktop-etc-0302.png';
import sectionDesktopEtc0303 from '../../assets/contents/desktop-etc-0303.png';
import sectionDesktopEtc04 from '../../assets/contents/desktop-etc-04.png';
import sectionMobileTimetableSub01 from '../../assets/sections/section-mobile-timetable-sub01.png';
import sectionMobileTimetableSub02 from '../../assets/sections/section-mobile-timetable-sub02.png';
import sectionMobileTimetableSub0301 from '../../assets/sections/section-mobile-timetable-sub0301.png';
import sectionMobileTimetableSub0302 from '../../assets/sections/section-mobile-timetable-sub0302.png';
import sectionMobileTimetableSub0303 from '../../assets/sections/section-mobile-timetable-sub0303.png';
import sectionMobileTimetableSub0304 from '../../assets/sections/section-mobile-timetable-sub0304.png';
import sectionMobileTimetableSub04 from '../../assets/sections/section-mobile-timetable-sub04.png';

export default () => (
  <section id="time-table-con">
    <div className="d-none d-md-block desktop-container">
      <div className="position-relative">
        <img
          alt={'sectionDesktopEtc01'}
          src={sectionDesktopEtc01}
          className="w-100"
        />
        <div
          id={'timeTable'}
          className="position-absolute"
          style={{ top: -50 }}
        ></div>
      </div>

      <img
        id={'timeTable'}
        alt={'sectionDesktopEtc02'}
        src={sectionDesktopEtc02}
        className="w-100"
      />
      <div className="text-left position-relative">
        <img
          id={'call'}
          alt={'sectionDesktopEtc0301'}
          src={sectionDesktopEtc0301}
          style={{ width: '40%' }}
          onClick={() => window.open('tel:0518177181')}
        />
        <img
          alt="sectionDesktopEtc0302"
          src={sectionDesktopEtc0302}
          style={{ width: '20%', cursor: 'pointer' }}
          onClick={() => window.open(KAKAO_ADDRESS)}
        />
        &nbsp;
        <img
          alt="sectionDesktopEtc0303"
          src={sectionDesktopEtc0303}
          style={{ width: '15%', cursor: 'pointer' }}
          onClick={() => window.open(TALK_ADDRESS)}
        />
      </div>
      <img
        id={'map'}
        alt={'sectionDesktopEtc04'}
        src={sectionDesktopEtc04}
        className="w-100"
      />
    </div>
    <Container
      className="d-md-none p-0"
      style={{ marginTop: 80, marginBottom: 80 }}
    >
      <Row noGutters>
        <Col xs={12}>
          <div className="position-relative">
            <img
              alt={'sectionMobileTimetableSub01'}
              src={sectionMobileTimetableSub01}
              className="w-100"
            />
            <div
              id={'timeTableM'}
              className="position-absolute"
              style={{ top: -50 }}
            ></div>
          </div>

          <img
            id={'callM'}
            alt={'sectionMobileTimetableSub02'}
            src={sectionMobileTimetableSub02}
            className="w-100"
          />
          <img
            alt={'sectionMobileTimetableSub0301'}
            src={sectionMobileTimetableSub0301}
            className="w-100"
          />
          <a href="tel:0518177181">
            <img
              alt={'sectionMobileTimetableSub0302'}
              src={sectionMobileTimetableSub0302}
              className="w-100"
            />
          </a>
        </Col>
        <Col xs={12}>
          <div style={{ width: '12%', display: 'inline-block' }}></div>
          <img
            alt={'sectionMobileTimetableSub0303'}
            src={sectionMobileTimetableSub0303}
            style={{ width: '44%' }}
            onClick={() => window.open(KAKAO_ADDRESS)}
          />
          <img
            alt={'sectionMobileTimetableSub0304'}
            src={sectionMobileTimetableSub0304}
            style={{ width: '32%' }}
            onClick={() => window.open(TALK_ADDRESS)}
          />
          <div style={{ width: '12%', display: 'inline-block' }}></div>
        </Col>
        <Col xs={12}>
          <div className="position-relative">
            <img
              alt={'sectionMobileTimetableSub04'}
              src={sectionMobileTimetableSub04}
              className="w-100"
            />
            <div
              id={'mapM'}
              className="position-absolute"
              style={{ top: -50 }}
            ></div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);
