import Pessoa from '../Pessoa';

export default interface PessoaRepositorie {
  // salvar(pessoa: Pessoa): Promise<Pessoa>;
  // excluir(pessoa: Pessoa): Promise<void>;
  getAll(): Promise<Pessoa[]>;
  // get(email: String): Promise<Pessoa>;
}
