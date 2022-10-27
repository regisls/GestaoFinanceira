export default class Pessoa {
    #id: String
    #nome: String

    constructor(nome: String, email: String) {
        this.#nome = nome;
        this.#id = email;
    }

    static vazio() {
        return new Pessoa('', '')
    }

    get id() {
        return this.#id;
    }

    get nome() {
        return this.#nome
    }
}