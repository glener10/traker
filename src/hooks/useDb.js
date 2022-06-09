import React from 'react';

const useDb = () => {
  //TODO: Fazer get do json server
  const db = {
    users: [
      {
        username: 'Vinicius',
        password: '123456',
        codUser: '1',
        admin: false,
        areas: ['1', '2'],
      },
      {
        username: 'Super Vinicius',
        password: '123456',
        codUser: '2',
        admin: true,
        areas: [],
      },
    ],

    areas: [
      {
        codArea: '1',
        nomeArea: 'Unipampa',
        statusSensor: 'ativo',
        coordenateX: '-29.78952352049523',
        coordenateY: '-55.76859685519926',
      },
      {
        codArea: '2',
        nomeArea: 'Clube atletico 7 de Setembro',
        statusSensor: 'desativado',
        coordenateX: '-29.785412256064387',
        coordenateY: '-55.77947971083362',
      },
    ],
  };

  return db;
};

export default useDb;
