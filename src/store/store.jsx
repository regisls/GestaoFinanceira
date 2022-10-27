import {configureStore} from '@reduxjs/toolkit';

import autenticacaoReducer from './reducers/autenticacaoReducer';
import lancamentoReducer from './reducers/lancamentoReducer';

const rootReducer = {
  autenticacao: autenticacaoReducer,
  lancamento: lancamentoReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

export default store;
