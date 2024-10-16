class Veiculo {
    constructor(marca, modelo, cor){
        this.marca = marca
        this.modelo = modelo
        this.cor = cor
    }

    // * método
    mostrarInformacoes(){
        document.write(`<h3>Veículo: ${this.marca}-${this.modelo} | cor ${this.cor}</h3> <br>`);
    }
}

// * HERANÇA - PROGRAMAÇÃO ORIENTADA Á OBJETOS
// * Extends - Extende de (É uma extensão de ...) ou é um tipo de ...
// * Herança entre duas classes, faz com que a filha herde atributos e métodos
// * É utilizado quando há diferença de informação, mas há similaridades
// ^ No caso CARRO e MOTO SÂO VEÌCULOS e assim aproveitamos para herdar infformações em comum entre veículos e nos filhos separados o que é exclusivo de carro e moto

class Carro extends Veiculo{
    // * Para definir atributos em filhos precisamos colocar no construtor TODOS OS ATRIBUTOS DO PAI + OS EXCLUSIVOS DO FILHO
    constructor(marca, modelo, cor, ano, cambio){
        // * Não vamos construir o veículo aqui, apenas o carro 
        // * Então vamos chamar o constructor() do pai VEÍCULO
        // ^ Super representa a classe pai VEÍCULO, estamos pedindo para ele contruir o veículo LÁ na classe VEÍCULO, pois o código de construir está nele. 
        super(marca, modelo, cor);
        // * Agora vamos montar a parte do carro
        this.ano = ano;
        this.cambio = cambio;
    }
    // * SOBREESCREVENDO / Editando o método que tem no pai VEICULO
    // * Pois o carro tem mais informações á mostrar;
    mostrarInformacoes(){
        // * SUPER == Pai
        // * Estamos editando o método, mas queremos que ele execute que ele já era antes, no pai. Então pedimos para ele executar a versão do pai mostrando marca, modelo e cor
        super.mostrarInformacoes();
        // ^ Abaixo vamos colocar o que é novo no carro.
        document.write(`<h3 style="color:green;"> Ano: ${this.ano} Cambio: ${this.cambio} </h3> <br>`) 
    }
}

class Moto extends Veiculo{
    
    constructor(marca, modelo, cor, tipo){
        // * Chamando constructor do Veiculo
        super(marca, modelo, cor);
        this.tipo = tipo
    }
    // * Sobrescrevendo o método
    mostrarInformacoes(){
        // ^ Pdeindo para executar o que já tinha no método antes
        super.mostrarInformacoes();
        document.write(`<h3 style="color:green;"> Tipo: ${this.tipo} </h3> <br>`) 
        
    }
}

const ford = new Carro("FORD", "KA", "Cinza", "2019", "Manual");

const ram = new Carro("RAM", "2500", "Perto" ,"2021", "Automatico");

// * Usando os métodos herdados

ford.mostrarInformacoes();
ram.mostrarInformacoes();

const xre = new Moto("Honda", "XRE 190", "Cinza", "adventure")
const r2500 = new Moto("BMW", "R 1250 GS", "Preto", "Esportiva")

xre.mostrarInformacoes();
r2500.mostrarInformacoes();