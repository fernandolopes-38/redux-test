import { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Modal from 'react-modal';

import { addNewCandidate } from '../../store/modules/user/actions';

import closeImg from '../../assets/close.svg';

import { Container } from './styles'

interface NewCandidateModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewCandidateModal: React.FC<NewCandidateModalProps> = ({ isOpen, onRequestClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const newUser = {
      id: Math.floor(Math.random() * 10000000),
      name,
      email, 
      age
    }

    dispatch(addNewCandidate(newUser));
    toast.success('Novo aluno cadastrado');
    
    onRequestClose();
    setName('');
    setEmail('');
    setAge('');
  }

  const handleAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (Number(event.target.value) > 0)
      setAge(String(event.target.value))
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
    >
      <button 
        type="button" 
        onClick={onRequestClose}
        className='react-modal-close'
      >
        <img src={closeImg} alt="Fechar modal"/>
      </button>

      <Container onSubmit={handleSubmit}>
        <h2>Cadastrar novo candidato</h2>

        <input 
          type="text" 
          placeholder="Nome"
          value={name}
          onChange={e => setName(e.target.value)} 
          required
        />
        <input 
          type="email" 
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input 
          type="number"
          min={1}
          placeholder="Idade"
          value={age}
          onChange={handleAgeChange}
          required
        />
        <button 
          type="submit"
        >
          Cadastrar
        </button>
      </Container>
    </Modal>
  )
}
