'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Nota', [{
     titulo: 'First Note',
     content: 'Content of first note'
     }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Nota', null, {});
  }
};
