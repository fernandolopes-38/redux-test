import { Provider } from 'react-redux';
import { store } from './store'

import { Home } from './components/Home';
import { AboutUS } from './components/AboutUS';

import './styles/global.css';

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <div className="container">
          <h1>Lista de candidatos</h1>
          <Home />
          <AboutUS />
        </div>
      </Provider>
    </>
  )
}
