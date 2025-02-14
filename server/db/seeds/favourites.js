/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('favourites').del()
  await knex('favourites').insert([
    {
      brewdog_id: '113',
      name: 'Hello My Name Is Ingrid',
      created_at: '2022-02-06 05:00:01',
      brewed: true,
    },
    {
      brewdog_id: '137',
      name: 'Sink The Bismarck!',
      created_at: '1941-05-26 10:40:00',
      brewed: true,
    },
    {
      brewdog_id: '258',
      name: 'Paradox Rye',
      created_at: '2022-03-14 03:14:15',
      brewed: false,
    },
  ])
}
