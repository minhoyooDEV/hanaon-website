import React, { useState } from 'react';

import { Modal } from 'react-bootstrap';
import imgPopup from '../assets/popup/popup-201912.png';

export default function Popup() {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  return (
    <>
      <Modal
        show={isOpenPopup}
        onHide={() => setIsOpenPopup(false)}
        animation={false}
        backdrop="static"
        centered
      >
        <Modal.Body
          bsPrefix="modal-body-padding-0"
        >
          <div style={{ position: 'relative' }}>
            <img alt={'imgPopup'} src={imgPopup} className="w-100" />
            <div
              style={{
                position: 'absolute',
                width: '10%',
                height: '10%',
                display: 'inline-block',
                right: '0',
                top: '0',
                cursor: 'pointer'
              }}
              onClick={() => setIsOpenPopup(false)}
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
