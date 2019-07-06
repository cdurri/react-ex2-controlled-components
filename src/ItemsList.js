import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const ItemsList = props => (
  <div className='items-list'>
    <p className="items">Items</p>
    <ol className="item-list">
      {props.items.map((item, index) => <Item key={index} item={item} /> )}
    </ol>
  </div>
)

ItemsList.propTypes = {
  items: PropTypes.array.isRequired
};

export default ItemsList;