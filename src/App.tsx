import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Modal from 'react-modal';

import { store } from './store'
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle } from './styles/global';
import { Container } from './styles/App';
import { Candidates } from './components/Candidates';
import { Students } from './components/Students';

Modal.setAppElement("#root");

export const App = () => {
  return (
    <Container>
      <Provider store={store}>
        <Candidates />
        <Students />
      </Provider>
      <GlobalStyle />
      <ToastContainer />
    </Container>
  )
}
