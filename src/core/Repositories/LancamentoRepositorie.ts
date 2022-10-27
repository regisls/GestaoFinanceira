import Lancamento from '../Lancamento';

export default interface PessoaRepositorie {
  getByYear(year: Number): Promise<Lancamento[]>;
}
