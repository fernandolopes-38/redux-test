import { createStore } from 'redux';

import { AllUser } from './modules/user/reducer';

export const store = createStore(AllUser);
