import {database} from './config';
import firestore, {
  doc,
  where,
  query,
  getDocs,
  getDoc,
  collection,
} from 'firebase/firestore';

import Pessoa from '../core/Pessoa';
import PessoaRepositorie from '../core/Repositories/PessoaRepositorie';

export default class PessoaCollection implements PessoaRepositorie {
  #conversor = {
    toFirestore(pessoa: Pessoa) {
      return {
        Nome: pessoa.nome,
      };
    },

    fromFirestore(
      snapshot: firestore.QueryDocumentSnapshot,
      options: firestore.SnapshotOptions,
    ): Pessoa {
      const dados = snapshot?.data(options);
      return new Pessoa(dados.Nome, snapshot.id);
    },
  };

  #pessoaCollection = collection(database, 'Pessoa').withConverter(
    this.#conversor,
  );

  async getAll(): Promise<Pessoa[]> {
    const pessoaRef = this.#pessoaCollection;
    const pessoaSnapshot = await getDocs(pessoaRef);
    const pessoaList = pessoaSnapshot.docs.map(p => p.data()) ?? [];

    return pessoaList;
  }
}
