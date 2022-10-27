import {
  MODIFICAR_USUARIO,
  MODIFICAR_SENHA,
  LISTAR_USUARIOS_SUCESSO,
  LISTAR_USUARIOS_ERRO,
} from '../types';

const initialState = {
  usuario: 'regisls@gmail.com',
  senha: '',
  nome: 'Regis L. Sebastiani',
  loadingLogin: false,
  erroLogin: '',
  pessoas: [],
};

const autenticacaoReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODIFICAR_USUARIO:
      return {
        ...state,
        usuario: action.payload,
        erroLogin: '',
      };
    case MODIFICAR_SENHA:
      return {
        ...state,
        senha: action.payload,
        erroLogin: '',
      };
    case LISTAR_USUARIOS_SUCESSO:
      return {
        ...state,
        pessoas: action.payload,
      };
    case LISTAR_USUARIOS_ERRO:
      return {
        ...state,
        pessoas: [],
      };
    default:
      return state;
  }
};

export default autenticacaoReducer;
