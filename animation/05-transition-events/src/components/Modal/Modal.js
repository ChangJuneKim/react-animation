import React from 'react';
import { Transition } from 'react-transition-group';

import './Modal.css';

const animationTiming = {
  // entering과 exiting 시간을 다르게 해줄수도 있다. enter과 exit으로 해줘야함
  enter: 400,
  exit: 1000,
};

const modal = ({ show, closed }) => {
  return (
    <Transition //
      in={show}
      // timeout={300} // css에서 0.4s 해놓으면 0.3초 지나고 unmount 돼버린다
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
    >
      {state => {
        const cssClasses = ['Modal', state === 'entering' ? 'ModalOpen' : state === 'exiting' ? 'ModalClosed' : null];
        return (
          <div className={cssClasses.join(' ')}>
            <h1>A Modal</h1>
            <button className='Button' onClick={closed}>
              Dismiss
            </button>
          </div>
        );
      }}
    </Transition>
  );
};

export default modal;
