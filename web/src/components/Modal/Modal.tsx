import React, { useContext } from 'react';

import { X } from 'phosphor-react';

import { MyContext } from '../../contexts/mycontext';

import './styles.scss';

export const Modal = () => {
  const { setIsOpenModal } = useContext(MyContext);

  function onClose() {
    setIsOpenModal(false);
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose}>
          <X size={20} color="#000000" weight="fill" />
        </button>
        
      </div>
    </div>
  );
}