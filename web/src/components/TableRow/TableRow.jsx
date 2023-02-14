import React, { useContext } from 'react';
import { MyContext } from '../../contexts/mycontext';

export const TableRow = ({ data }) => {
  const { handleUpdateItem, handleRemoveItem } = useContext(MyContext);

  return (
    <tr>
      <td>
        <div className='product'>
          <img src='https://picsum.photos/100/120' alt='' />
          <div className='info'>
            <div className='name'>{data.name}</div>
            <div className='category'>{data.category}</div>
          </div>
        </div>
      </td>
      <td>R$ {data.price}</td>
      <td>
        <div className='qty'>
          <button
            onClick={() => {
              handleUpdateItem(data, 'decrease')
            }}
          >
            <i className='bx bx-minus'></i>
          </button>
          <span>{data.amount}</span>
          <button
            onClick={() => {
              handleUpdateItem(data, 'increase');
            }}
          >
            <i className='bx bx-plus'></i>
          </button>
        </div>
      </td>
      <td>R$ {data.price * data.amount}</td>
      <td>
        <button
          className='remove'
          onClick={() => {
            handleRemoveItem(data);
          }}
        >
          <i className='bx bx-x'></i>
        </button>
      </td>
    </tr>
  );
};
