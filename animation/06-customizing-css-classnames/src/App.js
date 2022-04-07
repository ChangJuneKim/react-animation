import React, { useState } from 'react';

import { Transition } from 'react-transition-group';

import './App.css';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showBlock, setShowBlock] = useState(false);

  const showModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className='App'>
      <h1>React Animations</h1>
      <button className='Button' type='button' onClick={() => setShowBlock(!showBlock)}>
        Toggle
      </button>
      <br />
      <Transition //
        in={showBlock}
        timeout={1000} // timeout이 지나야 dom에서 사라진다
        mountOnEnter
        unmountOnExit
        onEnter={() => console.log('onEnter')}
        onEntering={() => console.log('onEntering')}
        onEntered={() => console.log('onEntered')}
        onExit={() => console.log('onExit')}
        onExiting={() => console.log('onExiting')}
        onExited={() => console.log('onExited')}
      >
        {/* {state => <p>{state}</p>}  entering entered exiting exited*/}
        {state => (
          <div
            style={{
              backgroundColor: 'red',
              width: 100,
              height: 100,
              margin: 'auto',
              transition: 'opacity 1s ease-out',
              opacity: state === 'entered' ? 1 : 0,
            }}
          />
        )}
      </Transition>

      <Modal show={modalIsOpen} closed={closeModal} />

      {modalIsOpen ? <Backdrop show={modalIsOpen} /> : null}
      <button className='Button' type='button' onClick={showModal}>
        Open Modal
      </button>
      <h3>Animating Lists</h3>
      <List />
    </div>
  );
};

export default App;

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>React Animations</h1>
//         <Modal />
//         <Backdrop />
//         <button className="Button">Open Modal</button>
//         <h3>Animating Lists</h3>
//         <List />
//       </div>
//     );
//   }
// }
