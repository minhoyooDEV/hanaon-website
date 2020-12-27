import {
  BLOG_ADDRESS,
  KAKAO_ADDRESS,
  NAVER_BOOKING_ADDRESS,
  TALK_ADDRESS
} from '../constants';
import { CollapseBtn, CollapseMobileBtn, FloatingBtn } from '../components';
import React, { useState } from 'react';

import floatingBlog from '../assets/floating/floating-blog.png';
import floatingClose from '../assets/floating/floating-close.png';
import floatingDesktopTop from '../assets/floating/floating-desktop-top.png';
import floatingMBlog from '../assets/floating/floating-m-blog.png';
import floatingMNaver from '../assets/floating/floating-m-naver.png';
import floatingMPlus from '../assets/floating/floating-m-plus.png';
import floatingMTalk from '../assets/floating/floating-m-talk.png';
import floatingMore from '../assets/floating/floating-more.png';
import floatingNaver from '../assets/floating/floating-naver.png';
import floatingPlus from '../assets/floating/floating-plus.png';
import floatingTalk from '../assets/floating/floating-talk.png';
import floatingTop from '../assets/floating/floating-top.png';

const OpenMenu = ({ isOpen, onClick }) =>
  isOpen ? (
    <FloatingBtn alt={'floatingClose'} src={floatingClose} onClick={onClick} />
  ) : (
    <FloatingBtn alt={'floatingMore'} src={floatingMore} onClick={onClick} />
  );

const MenuList = ({ isOpen }) =>
  isOpen ? (
    <div className="d-flex flex-column align-items-end">
      <CollapseMobileBtn
        alt={'menuReserve'}
        src={floatingMNaver}
        title="네이버 예약"
        onClick={() => window.open(NAVER_BOOKING_ADDRESS, '_blank;')}
      />
      <CollapseMobileBtn
        alt={'floatingBlog'}
        src={floatingMBlog}
        title="블로그"
        onClick={() => window.open(BLOG_ADDRESS, '_blank;')}
      />
      <CollapseMobileBtn
        alt={'floatingTalk'}
        src={floatingMTalk}
        title="네이버 톡톡"
        onClick={() => window.open(TALK_ADDRESS, '_blank;')}
      />
      <CollapseMobileBtn
        alt={'floatingPlus'}
        src={floatingMPlus}
        title="플러스 친구"
        onClick={() => window.open(KAKAO_ADDRESS, '_blank;')}
      />
    </div>
  ) : (
    <FloatingBtn src={floatingTop} onClick={() => window.scrollTo(0, 0)} />
  );

export default function FloatingMenu() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <>
      <div className="d-md-none">
        {isOpenMenu && (
          <div
            className="position-fixed bg-black h-100 w-100"
            style={{
              top: 0,
              left: 0,
              background: 'rgba(0,0,0,0.3)',
              zIndex: 490
            }}
          />
        )}
      </div>
      <div
        className="position-fixed"
        style={{
          zIndex: 500,
          bottom: 20,
          right: 20,
          textAlign: 'right'
        }}
      >
        <div className="d-none d-md-block">
          <div className="d-flex flex-column">
            <CollapseBtn
              alt={'floatingTalk'}
              className="mb-2"
              src={floatingNaver}
              title={'네이버예약'}
              url={NAVER_BOOKING_ADDRESS}
            />
            <CollapseBtn
              alt={'floatingBlog'}
              className="mb-2"
              src={floatingBlog}
              title={'블로그'}
              url={BLOG_ADDRESS}
            />
            <CollapseBtn
              alt={'floatingTalk'}
              className="mb-2"
              src={floatingTalk}
              title={'네이버톡톡'}
              url={TALK_ADDRESS}
            />
            <CollapseBtn
              alt={'floatingPlus'}
              className="mb-2"
              src={floatingPlus}
              title={'플러스친구'}
              url={KAKAO_ADDRESS}
            />
            <FloatingBtn
              src={floatingDesktopTop}
              onClick={() => window.scrollTo(0, 0)}
              style={{
                background: '#d4b8a0'
              }}
            />
          </div>
        </div>

        <div className="d-md-none">
          <MenuList isOpen={isOpenMenu} />
          <OpenMenu
            isOpen={isOpenMenu}
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          />
        </div>
      </div>
    </>
  );
}
