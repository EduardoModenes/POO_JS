// * Criando classe
class ContaBancaria {
    // * Definindo atributos
    // * Podemos criar atributos fora do construtor, principalmente privados.
    // * O privado tem um cerquilha/hashtag/sustenido/jogo da velha/4 mais/tralha (#) antes do nome do atributo.
    // ^ Atributos privados só podem ser acessados DENTRO DA CLASSE

    #saldo;

    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }

    // * métodos usando este atributo PRIVADO
    checarSaldo() {
        console.log(`Esta conta possui: R$ ${this.#saldo}`);
    }

    // * valor = parãmetro
    // * Isso quer dizer que ao depositar deverá ser informado o valor que será adicionado
    depositar(valor) {
        // ^ Se o valor passado é positivo
        if (valor > 0) {
            console.log(`Depósito de R$ ${valor} realizado!`)
            // * += adiciona/acrescentar
            // * += Ele (o valor Á esqueda) + (o valor da direita)
            // * igual a = saldo = saldo + valor
            this.#saldo += valor;
        }
        else {
            console.log("Depósito inválido!")
            console.log("O valor para depósito deve ser positivo");
        }
    }

    sacar(valor) {
        if (valor > 0) {
            // * Checando se resultado do saque não passa do 0 (Não fica negativo)
            let sobrou = this.#saldo - valor;
            if (sobrou >= 0) {
                console.log(`Saque de R$ ${valor} realizado!`);
                this.#saldo = sobrou;
            } else {
                console.log(`A conta só tem ${this.#saldo} e você quer sacar ${valor} `);
                this.#saldo = sobrou;
            }
        }
        else {
            console.log("Depósito inválido!")
            console.log("O valor para depósito deve ser positivo");
        }
    }
}

//* Instanciando um novo objeto = Criando uma conta bancária
// * const contaPeach = declarar o objeto
// * new ContaBancaria() = instanciar
// * á partir da instanciação, ele executa o método construtor, monta o objeto

const contaPeach = new ContaBancaria(1190);


// * Atributos privados não são visíveis FORA DA CLASS

//todo: console.log(`A conta da peach tem: ${contaPeach.#saldo}`);

// * Ao invés de exibir aqui fora, organizamos em um método que faz a mesma coisa (Mais organizado)

contaPeach.checarSaldo();

// * Input - pedir pro usuario digitar
let depositoInformado = Number(prompt("Quanto quer depositar?"));

// * pegamos o que o usuario digitou e deposita
contaPeach.depositar(depositoInformado);

// * checando saldo
contaPeach.checarSaldo();


contaPeach.depositar(500);
contaPeach.checarSaldo();

// * usando o método sacar

contaPeach.sacar(200);
contaPeach.sacar(50);
contaPeach.checarSaldo();

contaPeach.sacar(200000000000);