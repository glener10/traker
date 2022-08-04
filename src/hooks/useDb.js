import React from 'react';
import db from '../../db.json';

const useDb = () => {
  //TODO: Fazer get do json server
  //const [db2, setDb2] = React.useState([]);
  /* React.useEffect(() => {
    fetch("../../db.json", {
      headers: {
        Accept: "application/json"
      }
    }).then(res => {
      console.log(res);
      res.json();
    }).then(res => {
      console.log(res);
      setDb2(res.data);
    })
  }, []); */
  return db;
};

export default useDb;
