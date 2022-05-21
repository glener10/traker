import {useState, useCallback} from 'react';
import {UserService} from '../services/';
import {useEffect} from 'react/cjs/react.production.min';

export const useUser = () => {
  //const [user, setUser] = useState<IUser[]>();
  const [users, setUsers] = useState();

  const getAllUsers = useCallback(async () => {
    const {status, data} = await UserService.getAllUsers();

    if (status != 200) throw new Error();

    setUsers(data);
  }, []);

  return {
    users,
    getAllUsers,
  };
};
