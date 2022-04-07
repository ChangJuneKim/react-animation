import React from 'react';
import { CSSTransition } from 'react-transition-group';

import './Modal.css';

const animationTiming = {
  // entering과 exiting 시간을 다르게 해줄수도 있다. enter과 exit으로 해줘야함
  enter: 400,
  exit: 1000,
};

const modal = ({ show, closed }) => {
  return (
    <CSSTransition //
      in={show}
      // timeout={300} // css에서 0.4s 해놓으면 0.3초 지나고 unmount 돼버린다
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      // classNames='fade-slide'
      classNames={{
        enter: '',
        enterActive: 'ModalOpen',
        exit: '',
        exitActive: 'ModalClosed',
        // appear:,
        // appearActive,
      }}
    >
      <div className='Modal'>
        <h1>A Modal</h1>
        <button className='Button' onClick={closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default modal;
