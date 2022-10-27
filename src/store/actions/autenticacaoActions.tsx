import PessoaCollection from '../../db/PessoaCollection';
import PessoaRepositorie from '../../core/Repositories/PessoaRepositorie';

import {LISTAR_USUARIOS_ERRO, LISTAR_USUARIOS_SUCESSO} from '../types';

export const listarPessoas = () => {
  return dispatch => {
    const repositorie: PessoaRepositorie = new PessoaCollection();
    repositorie
      .getAll()
      .then(response => listarPessoasSucesso(response, dispatch))
      .catch(error => listarPessoasErro(error, dispatch));
  };
};

export const listarPessoasSucesso = (response, dispatch) => {
  dispatch({
    type: LISTAR_USUARIOS_SUCESSO,
    payload: response,
  });
};

export const listarPessoasErro = (error, dispatch) => {
  console.log(error);

  dispatch({
    type: LISTAR_USUARIOS_ERRO,
    payload: error,
  });
};
