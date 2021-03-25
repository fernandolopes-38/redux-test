import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

import { api } from '../service/api';

import { User } from '../store/modules/user/types'
import { addNewUser } from '../store/modules/user/actions'
import styles from '../styles/components/Home.module.css';

export const Home = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    api.get('users').then(response => setUsers(response.data));
  }, []);

  const handleUsers = useCallback((user: User) => {
    dispatch(addNewUser(user))
  }, [dispatch])

  return (
    <div className={styles.usersContainer}>
      {users.map(user => 
        <div key={user.id} className={styles.userBox}>
          <p>
            <strong>Nome:</strong> {user.name}
          </p>
          <p>
            <strong>Idade:</strong> {user.age}
          </p>
          <button 
            type="button"
            onClick={() => handleUsers(user)}
          >
            Adicionar
          </button>
        </div>
      )}
    </div>
  )
}
