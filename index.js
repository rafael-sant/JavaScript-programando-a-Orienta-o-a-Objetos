class Cliente { 
    nome;
    cpf;
    agencia;
    saldo;
    rg;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Rafael";
cliente1.cpf = 51867994836;
cliente1.agencia = 1001;
cliente1.saldo = 0;
cliente1.rg = 112233456;

cliente2.nome = "Alice";
cliente2.cpf = 112223344;
cliente2.agencia = 1001;
cliente2.saldo = 0;
cliente2.rg = 123456890;

console.log(cliente1, cliente2)