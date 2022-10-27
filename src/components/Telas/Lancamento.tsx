import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

import {listarPessoas} from '../../store/actions/autenticacaoActions';
import {listarLancamentosAno} from '../../store/actions/lancamentoActions';

const Lancamento = props => {
  useEffect(() => {
    (async () => {
      const dataAtual = new Date();
      props.listarPessoas();
      props.listarLancamentosAno(dataAtual.getFullYear());
    })();
  });

  return (
    <View>
      <Text>Pessoas</Text>
      {props.pessoas.map(p => (
        <Text key={p.id}>{p.nome}</Text>
      ))}
      <Text>
        Lancamentos - {props.lancamentos.length}
      </Text>
      {props.lancamentos.map(l => (
        <Text key={l.id}>
          {l.valor.toString()} - {l.tipo} - {l.ano} - {l.mes}
        </Text>
      ))}
    </View>
  );
};

const mapStateToProps = state => ({
  pessoas: state.autenticacao.pessoas,
  lancamentos: state.lancamento.lancamentos,
});

export default connect(mapStateToProps, {
  listarPessoas,
  listarLancamentosAno,
})(Lancamento);
