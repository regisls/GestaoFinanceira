import React, {useEffect} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';

import {listarPessoas} from '../../store/actions/autenticacaoActions';
import mesExtenso from '../NomeMes';
import Card from '../Shared/Card';
import {
  listarLancamentosAno,
  modificarAnoReferencia,
} from '../../store/actions/lancamentoActions';

var result = [];

const Lancamento = props => {
  const agruparDados = () => {
    result = [];
    props.lancamentos.forEach(lacto => {
      if (!result[lacto.mes]) {
        result[lacto.mes] = {
          mes: lacto.mes,
          despesas: lacto.tipo === 'D' ? +lacto.valor : 0,
          receitas: lacto.tipo === 'C' ? +lacto.valor : 0,
        };
      } else {
        result[lacto.mes] = {
          mes: lacto.mes,
          despesas:
            result[lacto.mes].despesas +
            (lacto.tipo === 'D' ? +lacto.valor : 0),
          receitas:
            result[lacto.mes].receitas +
            (lacto.tipo === 'C' ? +lacto.valor : 0),
        };
      }
    });
    renderItens();
  };

  const renderItens = () => (
    <View>
      {result.map((l, i) => (
        <Card key={i}>
          <Text key={l.mes} style={styles.textBlack}>
            {mesExtenso(+l.mes)}.
          </Text>
          <Text key={`${l.mes}-R`} style={styles.textRed}>
            R$ {l.receitas.toFixed(2)}
          </Text>
          <Text key={`${l.mes}-D`} style={styles.textBlue}>
            R$ {l.despesas.toFixed(2)}
          </Text>
        </Card>
      ))}
    </View>
  );

  useEffect(() => {
    props.listarLancamentosAno(props.anoReferencia);
    agruparDados();
  }, [result.length]);

  return <View>{renderItens()}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#bbbbbb',
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    padding: 10,
    fontSize: 15,
    flexDirection: 'row',
    fustifyContent: 'space-between',
  },
  textRed: {
    color: '#ff0000',
    alignSelf: 'flex-end',
    flex: 1,
  },
  textBlue: {
    color: '#00ff00',
    alignSelf: 'flex-end',
    flex: 1,
  },
  textBlack: {
    color: '#000000',
    alignSelf: 'flex-start',
    flex: 1,
  },
});

const mapStateToProps = state => ({
  pessoas: state.autenticacao.pessoas,
  lancamentos: state.lancamento.lancamentos,
  anoReferencia: state.lancamento.anoReferencia,
});

export default connect(mapStateToProps, {
  listarPessoas,
  listarLancamentosAno,
  modificarAnoReferencia,
})(Lancamento);
