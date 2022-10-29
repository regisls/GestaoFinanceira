import LancamentoCollection from '../../db/LancamentoCollection';
import LancamentoRepositorie from '../../core/Repositories/LancamentoRepositorie';

import {
  LISTAR_LANCAMENTOS_ANO_SUCESSO,
  LISTAR_LANCAMENTOS_ANO_ERRO,
  MODIFICAR_ANO_REFERENCIA,
} from '../types';

export const listarLancamentosAno = (year: Number) => {
  return dispatch => {
    const repositorie: LancamentoRepositorie = new LancamentoCollection();
    repositorie
      .getByYear(year)
      .then(response => listarLancamentosSucesso(response, dispatch))
      .catch(error => listarLancamentosErro(error, dispatch));
  };
};

export const listarLancamentosSucesso = (response, dispatch) => {
  dispatch({
    type: LISTAR_LANCAMENTOS_ANO_SUCESSO,
    payload: response,
  });
};

export const listarLancamentosErro = (error, dispatch) => {
  console.log(error);

  dispatch({
    type: LISTAR_LANCAMENTOS_ANO_ERRO,
    payload: error,
  });
};

export const modificarAnoReferencia = (ano: Number, dispatch) => {
  dispatch({
    type: MODIFICAR_ANO_REFERENCIA,
    payload: ano,
  });
};
