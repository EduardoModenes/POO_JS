// * Criando classe cliente

class Cliente{
    // * Definindo atributos

    // ^ Para definir atributos no JS, orecisamos chamar o método construtor.
    // ^ Este método/função irá 'construir' o objeto na hora de sua chamada

    constructor(nome, dataNascimento, profissao, genero){
        // * Os parâmetros asima, recebem as informações
        // ^ AGORA  vamos salvá-las
        // & this = ESTEOBJETO (uma forma de não confundir os dois nomes)
        // * onomeDele = nomePassado

        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.profissao = profissao;
        this.genero = genero;

    }

    // * MÉTODOS

    apresentar(){
        console.log(`Boa noite eu sou ${this.nome}
        e sou um ${this.profissao}
        e nasci em ${this.dataNascimento}`);
    }
}

// * Criando Objetos = (Variávei do tipo da Classr)

const cliente1 = new Cliente('Eduardo Modenes', '1789a.d-13-32', 'Astronomia', 'Macho');

const cliente2 = new Cliente('Maira', '2005-10-31', 'Arqueóloga', 'Feminino');

// * Mostrando atributos de objetos
console.log(`O nome é ${cliente2.nome}`);

// * Chamar um método
// * é igual chamar função, porém tem o objeto atrás 
cliente1.apresentar();