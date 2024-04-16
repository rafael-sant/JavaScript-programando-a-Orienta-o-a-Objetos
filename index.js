class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    _saldo = 0;

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor
            return valor;
        }

    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Rafael";
cliente1.cpf = 51867994836;
cliente1.agencia = 1001;
cliente1.saldo = 0;

const contaCorrenteRafael = new ContaCorrente();
contaCorrenteRafael.agencia = 1001

contaCorrenteRafael.depositar(100)
contaCorrenteRafael.depositar(100)
contaCorrenteRafael.depositar(-100)

const valorSacado = contaCorrenteRafael.sacar(50)

console.log(valorSacado)
console.log(contaCorrenteRafael)


