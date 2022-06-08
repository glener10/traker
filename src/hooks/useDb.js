import React from 'react';

const useDb = () => {
  const db = {
    users: [
      {
        username: "Fulano",
        password: "1234",
        codUser: "1",
        areas: [
          {
            codArea: "1"
          }
        ]
      }
    ],

    areas: [
      {
        codArea: "1",
        nomeArea: "Barragem",
        statusSensor: "ativo",
        coordenateX: "1.25151515151",
        coordenateY: "2.34123123123"
      }
    ]
  };

  return db;
}

export default useDb;