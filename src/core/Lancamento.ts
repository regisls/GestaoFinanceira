export default class Lancamento {
  #id: String;
  #tipo: String;
  #dataHora: Date;
  #valor: Number;
  #conta: String;
  #pessoa: String;
  #formaPagamento: String;
  #ano: Number;
  #mes: Number;

  constructor(
    tipo: String,
    dataHora: Date,
    valor: Number,
    conta: String,
    pessoa: String,
    formaPagamento: String,
    ano: Number,
    mes: Number,
    id: String = null,
  ) {
    this.#tipo = tipo;
    this.#dataHora = dataHora;
    this.#valor = valor;
    this.#conta = conta;
    this.#pessoa = pessoa;
    this.#formaPagamento = formaPagamento;
    this.#ano = ano;
    this.#mes = mes;
    this.#id = id;
  }

  static vazio() {
    return new Lancamento('', new Date(), 0, '', '', '', 0, 0);
  }

  get id() {
    return this.#id;
  }

  get tipo() {
    return this.#tipo;
  }

  get dataHora() {
    return this.#dataHora;
  }

  get valor() {
    return this.#valor;
  }

  get conta() {
    return this.#conta;
  }

  get pessoa() {
    return this.#pessoa;
  }

  get formaPagamento() {
    return this.#formaPagamento;
  }

  get ano() {
    return this.#ano;
  }

  get mes() {
    return this.#mes;
  }
}
