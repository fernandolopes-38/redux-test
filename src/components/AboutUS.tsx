import { useSelector } from 'react-redux';

import { GlobalState } from '../store/modules/user/types';

import styles from '../styles/components/AboutUs.module.css';

export const AboutUS = () => {
  const users = useSelector((state: GlobalState) => state.users)

  return (
    <div className={styles.container}>
      <h1>Pessoas matriculadas</h1>
      <table className={styles.usersTable}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {users.map((user, index) => 
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
