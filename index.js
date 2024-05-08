import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Rafael";
cliente1.cpf = 51867994836;

const cliente2 = new Cliente();
cliente2.nome = "Lari";
cliente2.cpf = 1112223344;

const contaCorrenteRafael = new ContaCorrente();
contaCorrenteRafael.agencia = 1001
contaCorrenteRafael.cliente = cliente1

contaCorrenteRafael.depositar(500)

const contaCorrenteLari = new ContaCorrente();
contaCorrenteLari.agencia = 1002
contaCorrenteLari.cliente = cliente2

contaCorrenteRafael.transferir(200, contaCorrenteLari)

console.log(contaCorrenteRafael, contaCorrenteLari)


