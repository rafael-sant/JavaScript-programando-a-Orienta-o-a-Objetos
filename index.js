import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Rafael", 51867994836);
const cliente2 = new Cliente("Lari", 1112223344);

const contaCorrenteRafael = new ContaCorrente(cliente1, 1001);

contaCorrenteRafael.depositar(500)

const contaCorrenteLari = new ContaCorrente(cliente2, 1002);

contaCorrenteRafael.transferir(200, contaCorrenteLari)
console.log(ContaCorrente.numeroDeContas)
console.log(contaCorrenteRafael, contaCorrenteLari)


