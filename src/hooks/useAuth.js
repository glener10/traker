import { api } from '../services/api';
import { useEffect, useState } from 'react-native';

const userAuth = () => {
  const [db, setDb] = useState({
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
  })
  //TODO: Definir tipagem para as áreas e users logados
  //const [userLogged, setUserLogged] = useState();
  //const [areas, setAreas] = useState(); 

  //api.get<>("/users")



  return { db };
}

export default userAuth;