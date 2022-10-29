import {
  LISTAR_LANCAMENTOS_ANO_SUCESSO,
  LISTAR_LANCAMENTOS_ANO_ERRO,
  MODIFICAR_ANO_REFERENCIA,
} from '../types';

const initialState = {
  loadingLancamentos: false,
  erroLancamentos: '',
  anoReferencia: 2022,
  lancamentos: [],
};

const lancamentoReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODIFICAR_ANO_REFERENCIA:
      return {
        ...state,
        anoReferencia: action.payload,
      };
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
