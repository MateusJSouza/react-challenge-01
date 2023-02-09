const db = require('../../database');

class ProductsRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.query(`
      SELECT * FROM products
      ORDER BY products.name ${direction}
    `);

    return rows;
  }

  async create({
    name,
    category,
    price,
    amount,
  }) {
    const [row] = await db.query(`
      INSERT INTO products(name, category, price, amount)
      VALUES($1, $2, $3, $4)
      RETURNING *
    `, [name, category, price, amount]);

    return row;
  }

  async update(id, {
    name,
    category,
    price,
    amount,
  }) {
    const [row] = await db.query(`
      UPDATE products
      SET name = $1, category = $2, price = $3, amount = $4
      WHERE id = $5
      RETURNING *
    `, [name, category, price, amount, id]);

    return row;
  }

  async delete(id) {
    const deleteOp = await db.query(`
      DELETE FROM products WHERE id = $1;
    `, [id]);

    return deleteOp;
  }
}

module.exports = new ProductsRepository();
