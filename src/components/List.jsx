import React from 'react';
import {shape, number, string, bool, func, arrayOf} from 'prop-types';
import Item from './Item.jsx';

const List = ({items, toggle, remove}) => (
  <ul className="list-group">
    {items.map((item, i) => (
      <Item key={i} item={item} toggle={toggle} remove={remove}/>
    ))}
  </ul>
);

List.propTypes = {
  items: arrayOf(shape({
    id: number,
    name: string,
    completed: bool
  })),
  toggle: func.isRequired,
  remove: func.isRequired
}

export default List;
