import {database} from './config';
import firestore, {
  doc,
  where,
  query,
  getDocs,
  getDoc,
  collection,
} from 'firebase/firestore';

import Lancamento from '../core/Lancamento';
import LancamentoRepositorie from '../core/Repositories/LancamentoRepositorie';

export default class LancamentoCollection implements LancamentoRepositorie {
  #conversor = {
    toFirestore(lacto: Lancamento) {
      return {
        Conta: lacto.conta,
        Tipo: lacto.tipo,
        DataHora: lacto.dataHora,
        Valor: lacto.valor,
        Pessoa: lacto.pessoa,
        FormaPagamento: lacto.formaPagamento,
        Ano: lacto.dataHora.getFullYear(),
        Mes: lacto.dataHora.getMonth() + 1,
      };
    },

    fromFirestore(
      snapshot: firestore.QueryDocumentSnapshot,
      options: firestore.SnapshotOptions,
    ): Lancamento {
      const dados = snapshot?.data(options);
      return new Lancamento(
        dados.Tipo,
        dados.DataHora,
        dados.Valor,
        dados.Conta,
        dados.Pessoa,
        dados.FormaPagamento,
        dados.Ano,
        dados.Mes,
        snapshot.id,
      );
    },
  };

  #lancamentoCollection = collection(database, 'Lancamento').withConverter(
    this.#conversor,
  );

  async getByYear(year: Number): Promise<Lancamento[]> {
    const lancamentoRef = this.#lancamentoCollection;
    const consulta = query(lancamentoRef, where('Ano', '==', year));
    const lancamentoSnapshot = await getDocs(consulta);
    const lancamentoList = lancamentoSnapshot.docs.map(p => p.data()) ?? [];

    return lancamentoList;
  }
}
