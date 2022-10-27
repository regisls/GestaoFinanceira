import {
  LISTAR_LANCAMENTOS_ANO_SUCESSO,
  LISTAR_LANCAMENTOS_ANO_ERRO,
} from '../types';

const initialState = {
  loadingLancamentos: false,
  erroLancamentos: '',
  lancamentos: [],
};

const lancamentoReducer = (state = initialState, action) => {
  switch (action.type) {
    case LISTAR_LANCAMENTOS_ANO_SUCESSO:
      return {
        ...state,
        lancamentos: action.payload,
      };
    case LISTAR_LANCAMENTOS_ANO_ERRO:
      return {
        ...state,
        lancamentos: [],
      };
    default:
      return state;
  }
};

export default lancamentoReducer;
