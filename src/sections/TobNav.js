import React, { useState } from 'react';

import { Modal } from 'react-bootstrap';
import logoHorizontal from '../assets/logo-horizontal.png';
import logoVertical from '../assets/logo-vertical.png';
import popupCall from '../assets/popup/popup_call.png';

export default () => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  return (
    <>
      <section
        id="navbar"
        style={{
          background: 'rgba(13, 13, 13, 0.9)',
          borderBottom: '1px solid rgba(224,224,244,0.2)',
          position: 'fixed',
          zIndex: 100
        }}
      >
        <div className="d-none d-md-block" style={{ width: '100vw' }}>
          <div className="desktop-container" style={{ height: 100 }}>
            <img
              alt="logoHorizontal"
              src={logoHorizontal}
              style={{
                width: 210,
                position: 'relative',
                left: 0,
                marginTop: 30,
                marginBottom: 30,
                float: 'left'
              }}
            />
            <div
              style={{
                marginTop: 30,
                float: 'right',
                marginBottom: 30
              }}
            >
              <a
                className="nav-a"
                href="#timeTable"
                style={{ marginRight: 50 }}
              >
                진료시간
              </a>
              <a
                className="nav-a"
                href=""
                onClick={e => {
                  e.preventDefault();
                  setIsOpenPopup(true);
                }}
                style={{ marginRight: 50 }}
              >
                예약 ·상담문의
              </a>
              <a className="nav-a" href="#map">
                오시는 길
              </a>
            </div>
          </div>
        </div>
        <div className="d-md-none" style={{ width: '100vw' }}>
          <div className="desktop-container" style={{ height: 80 }}>
            <img
              alt="logoVertical"
              src={logoVertical}
              style={{
                width: 70,
                position: 'relative',
                left: 0,
                marginTop: 18,
                marginBottom: 18,
                // lineHeight: '30px',
                float: 'left'
              }}
            />
            <div
              style={{
                marginTop: 24,
                float: 'right',
                marginBottom: 24,
                lineHeight: '30px'
              }}
            >
              <a
                className="nav-a-m"
                href="#timeTableM"
                style={{ marginRight: 12 }}
              >
                진료시간
              </a>
              <a
                className="nav-a-m"
                href="tel:0518177181"
                style={{ marginRight: 12 }}
              >
                예약 ·상담문의
              </a>
              <a className="nav-a-m" href="#mapM">
                오시는 길
              </a>
            </div>
          </div>
        </div>
      </section>

      <Modal
        show={isOpenPopup}
        onHide={() => setIsOpenPopup(false)}
        animation={false}
        backdrop={'static'}
        centered
      >
        <Modal.Body
          bsPrefix="modal-body-padding-0"
          // onClick={() => setIsOpenPopup(false)}
        >
          <div style={{ position: 'relative' }}>
            <img alt={'popupCall'} src={popupCall} className="w-100" />
            <div
              style={{
                display: 'inline-block',
                position: 'absolute',
                width: '13%',
                height: '18%',
                right: 0,
                top: 0,
                cursor: 'pointer'
              }}
              onClick={() => setIsOpenPopup(false)}
            />
            <div
              style={{
                position: 'absolute',
                width: '20%',
                height: '13%',
                display: 'inline-block',
                left: '40%',
                top: '83%',
                cursor: 'pointer'
              }}
              onClick={() => setIsOpenPopup(false)}
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
