import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addNewStudent, removeCandidate } from '../../store/modules/user/actions';
import { GlobalState } from '../../store/modules/user/types'
import { NewCandidateModal } from '../NewCandidateModal';
import { Container } from './styles';

export const Candidates = () => {
  const [isNewCandidateModalOpen, setIsNewCandidateModal] = useState(false);
  
  const candidatesStored = useSelector((state:GlobalState) => state.candidates);

  const dispatch = useDispatch();
  
  const handleNewCandidateModalOpen = () => {
    setIsNewCandidateModal(true);
  }
  const handleNewCandidateModalClose = () => {
    setIsNewCandidateModal(false);
  }

  const handleAddStudent = (id: number) => {
    const student = candidatesStored.find(cadidate => cadidate.id === id);
    if (student) {
      dispatch(addNewStudent(student));
      toast.success('Aluno Matriculado')
    }
  }
  const handleRemoveCandidate = (id: number) => {

    dispatch(removeCandidate(id));
    toast.error('Aluno removido')
  }
  
  return (
    <Container>
      <header>

        <h2>Usuários cadastrados</h2>

        <button
          onClick={handleNewCandidateModalOpen}
        >
          Cadastrar novo
        </button>
      </header>

      <ul>
      {candidatesStored &&
        candidatesStored.map(candidate => 
            <li key={candidate.id}>
              <h2>{candidate.name}</h2>
              <div className="buttons-container">
                <button 
                  onClick={() => handleAddStudent(candidate.id)}
                >
                  Matricular
                </button>
                <button
                  className="remove-button"
                  onClick={() => handleRemoveCandidate(candidate.id)}
                >
                  Remover
                </button>
              </div>
            </li>
        )
      }
      </ul>

      <NewCandidateModal
        isOpen={isNewCandidateModalOpen}
        onRequestClose={handleNewCandidateModalClose}
      />
    </Container>
  )
}
