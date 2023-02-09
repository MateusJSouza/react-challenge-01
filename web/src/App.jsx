/*
? DESAFIO - Shopping Cart:

Você deve desenvolver um carrinho de compras funcional.
Funcionalidades que esperamos que você desenvolva:

todo - inserção de novos produtos no carrinho
todo - remoção de produtos já inseridos
todo - alteração de quantidade de cada item 
todo - cálculo do preço total dos itens inseridos

todo - FUNCIONALIDADE EXTRA: aplicação de cupom de desconto
*/

import { useEffect, useState } from 'react';

import { PageHeader } from './layout/PageHeader';
import { PageTitle } from './layout/PageTitle';
import { Summary } from './components/Summary';
import { TableRow } from './components/TableRow';

import './styles.scss';
import { api } from './services/api';

export function App() {
  const [cart, setCart] = useState([]);

  const fetchData = () => {
    api.get('/cart', productObject).then(
      response => setCart(response.data)
    );
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <PageHeader />
      <main>
        <PageTitle data={'Seu carrinho'} />
        <div className='content'>
          <section>
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
                <TableRow />
              </tbody>
            </table>
          </section>
          <aside>
            <Summary />
          </aside>
        </div>
      </main>
    </>
  );
}
