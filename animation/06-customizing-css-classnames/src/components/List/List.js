import React, { useState } from 'react';

import './List.css';

const List = () => {
  const [items, setItems] = useState([1, 2, 3]);

  const addItemHandler = () => {
    setItems(prevState => prevState.concat(prevState.length + 1));
  };

  const removeItemHandler = selIndex => {
    setItems(prevState => prevState.filter((item, index) => index !== selIndex));
  };

  const listItems = items.map((item, index) => (
    <li key={index} className='ListItem' onClick={() => removeItemHandler(index)}>
      {item}
    </li>
  ));

  return (
    <div>
      <button className='Button' onClick={addItemHandler}>
        Add Item
      </button>
      <p>Click Item to Remove.</p>
      <ul className='List'>{listItems}</ul>
    </div>
  );
};
export default List;

// class List extends Component {
//     state = {
//         items: [1, 2, 3]
//     }

//     addItemHandler = () => {
//         this.setState((prevState) => {
//             return {
//                 items: prevState.items.concat(prevState.items.length + 1)
//             };
//         });
//     }

//     removeItemHandler = (selIndex) => {
//         this.setState((prevState) => {
//             return {
//                 items: prevState.items.filter((item, index) => index !== selIndex)
//             };
//         });
//     }

//     render () {
//         const listItems = this.state.items.map( (item, index) => (
//             <li
//                 key={index}
//                 className="ListItem"
//                 onClick={() => this.removeItemHandler(index)}>{item}</li>
//         ) );

//         return (
//             <div>
//                 <button className="Button" onClick={this.addItemHandler}>Add Item</button>
//                 <p>Click Item to Remove.</p>
//                 <ul className="List">
//                     {listItems}
//                 </ul>
//             </div>
//         );
//     }
// }

// export default List;
