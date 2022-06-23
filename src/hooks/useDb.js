import React from 'react';

const useDb = () => {
  //TODO: Fazer get do json server
  const db = {
    users: [
      {
        username: 'vinicius',
        password: '123456',
        codUser: '1',
        admin: false,
        areas: ['1', '2'],
      },
      {
        username: 'supervinicius',
        password: '123456',
        codUser: '2',
        admin: true,
        areas: [],
      },
      {
        username: 'a',
        password: 'a',
        codUser: '3',
        admin: true,
        areas: ['1', '2'],
      },
    ],

    areas: [
      {
        codArea: '1',
        nomeArea: 'Unipampa',
        tamanho: '1.8',
        largura: '120',
        comprimento: '150',
        culturaAtual: 'Soja',
        statusSensor: 'ativo',
        coordenateX: '-29.78952352049523',
        coordenateY: '-55.76859685519926',
        img: 'end/lavoura1',
        sensor: {
          pragas: [
            {
              nome: 'Antracnose',
              alerta: '3',
              dataDeteccao: '10/06/2022',
            },
            {
              nome: 'Antracnose',
              alerta: '1',
              dataDeteccao: '10/06/2022',
            },
          ],
          doencas: [
            {
              nome: 'Antracnose',
              alerta: '3',
              dataDeteccao: '10/06/2022',
            },
            {
              nome: 'Antracnose',
              alerta: '2',
              dataDeteccao: '10/06/2022',
            },
          ],
        },
      },

      {
        codArea: '2',
        nomeArea: 'ASD',
        tamanho: '1.8',
        largura: '120',
        comprimento: '150',
        culturaAtual: 'Trigo',
        statusSensor: 'ativo',
        coordenateX: '-29.78952352049523',
        coordenateY: '-55.76859685519926',
        img: 'end/lavoura1',
        sensor: {
          pragas: [
            {
              nome: 'Antracnose',
              alerta: '3',
              dataDeteccao: '10/06/2022',
            },
            {
              nome: 'Antracnose',
              alerta: '1',
              dataDeteccao: '10/06/2022',
            },
          ],
          doencas: [
            {
              nome: 'Antracnose',
              alerta: '3',
              dataDeteccao: '10/06/2022',
            },
            {
              nome: 'Antracnose',
              alerta: '2',
              dataDeteccao: '10/06/2022',
            },
          ],
        },
      },
    ],
  };

  return db;
};

export default useDb;
