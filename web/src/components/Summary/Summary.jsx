import { useContext, useState } from 'react';

import { MyContext } from '../../contexts/mycontext';
import { fetchAddressFromZipCode } from '../../services/zipCode';

export const Summary = () => {
  const [zipCode, setZipCode] = useState('');
  const [address, setAddress] = useState(null);
  const [shippingCost, setShippingCost] = useState(0);
  const { cartTotal, handleOpenModal } = useContext(MyContext);

  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const address = await fetchAddressFromZipCode(zipCode);
    setAddress(address);
    setShippingCost(calculateShippingCost(address));
  }

  const calculateShippingCost = (address) => {
    return console.log(address);
  }

  return (
    <>
      <div className='box'>
        <header>Resumo da compra</header>
        <div className='info'>
          <div>
            <span>Sub-total</span>
            <span>R$ {cartTotal}</span>
          </div>
          <form onSubmit={handleSubmit}>
            <label>Código postal:
              <input
                type="text"
                value={zipCode}
                onChange={handleZipCodeChange}
              />
            </label>
            <button type="submit">Calcular frete</button>
            {address && (
              <p>Custo do frete: ${shippingCost}</p>
            )}
          </form>
          {/* <div>
            <button onClick={handleOpenModal}>
              Adicionar cupom de desconto
              <i className='bx bx-right-arrow-alt'></i>
            </button>
          </div> */}
        </div>
        <footer>
          <span>Total</span>
          <span>R$ {cartTotal}</span>
        </footer>
      </div>
      <button onClick={() => {}}>
        Finalizar Compra
        </button>
    </>
  );
};
