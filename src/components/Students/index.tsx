import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { removeStudent } from '../../store/modules/user/actions';
import { GlobalState } from '../../store/modules/user/types';
import { Container } from './styles';

export const Students = () => {
  const studentsStored = useSelector((state:GlobalState) => state.students);
  
  const dispatch = useDispatch();

  const handleRemoveStudent = (id: number) => {

    dispatch(removeStudent(id));
    toast.error('Aluno removido')
  }

  return (
    <Container>
      <h1>Alunos matriculados</h1>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Email</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {studentsStored &&
            studentsStored.map(student => 
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.email}</td>
                <td>
                  <button
                    onClick={() => handleRemoveStudent(student.id)}
                  >
                    Remover
                  </button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>

    </Container>
  )
}
