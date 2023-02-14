/*
? DESAFIO - Shopping Cart:

Você deve desenvolver um carrinho de compras funcional.
Funcionalidades que esperamos que você desenvolva:

x todo - inserção de novos produtos no carrinho
x todo - remoção de produtos já inseridos
x todo - alteração de quantidade de cada item 
x todo - cálculo do preço total dos itens inseridos

todo - FUNCIONALIDADE EXTRA: aplicação de cupom de desconto
*/

import { useEffect, useState } from 'react';

import { PageHeader } from './layout/PageHeader';
import { PageTitle } from './layout/PageTitle';
import { Summary } from './components/Summary/Summary';
import { TableRow } from './components/TableRow/TableRow';
import { Modal } from './components/Modal/Modal';

import { MyContext } from './contexts/mycontext';
import { apiCrud } from './services/api';

import './styles.scss';

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function App() {
  const [cart, setCart] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleOpenModal() {
    setIsOpenModal(true);
  }

  const productObject = {
    name: 'produto',
    category: 'categoria',
    price: randomNumber(90, 1200),
    amount: 1,
  };

  const fetchData = () => {
    apiCrud.get('/cart').then(
      response => setCart(response.data)
    );
  }

  const handleAddItem = () => {
    apiCrud.post('/cart', productObject).then(response => {
      fetchData();
    })
  }

  function handleRemoveItem(item) {
    apiCrud.delete(`/cart/${item._id}`).then(response => {
      fetchData();
    })
  }

  function handleUpdateItem(item, action) {
    let newAmount = item.amount;

    if (action === 'decrease') {
      if (newAmount === 1) {
        return;
      }
      newAmount -= 1;
    }

    if (action === 'increase') {
      newAmount += 1;
    }

    const newData = {...item, amount: newAmount};
    delete newData._id;

    apiCrud.put(`/cart/${item._id}`, newData).then(response => {
      console.log({ response });
      fetchData();
    })
  }

  const getTotal = () => {
    let sum = 0;

    for (let item of cart) {
      sum += item.price * item.amount;
    }

    return sum;
  }

  const cartTotal = getTotal();

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MyContext.Provider value={{
      cart,
      setCart,
      cartTotal,
      setIsOpenModal,
      handleRemoveItem,
      handleUpdateItem,
      handleOpenModal
    }}>
      {isOpenModal && (
        <Modal />
      )}
      <PageHeader />
      <main>
        <PageTitle data={'Seu carrinho'} />
        <div className='content'>
          <section>
            <button
              onClick={handleAddItem}
              style={{
                padding: '5px 10px',
                marginBottom: 15
              }}
            >
              Adicionar ao carrinho
            </button>
            <table>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
                  <th>Total</th>
                  <th>-</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(item => (
                  <TableRow
                    key={item._id}
                    data={item}
                  />
                ))}
                {cart.length === 0 && (
                  <tr>
                    <td
                      colSpan="5"
                      style={{ textAlign: 'center' }}
                    >
                      <strong>Carrinho de compras vazio</strong>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </section>
          <aside>
            <Summary />
          </aside>
        </div>
      </main>
    </MyContext.Provider>
  );
}
