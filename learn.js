const TAX_RATE = 0.08;//税率
const ACCESSORY_PRICE = 9.99;//配件的价格
const amount = 99.99;//商品价格
var budget_amount = prompt('请输入预算：');//预算
var amount = 0;
// var bank_balance = 10000;//银行账户余额


function calculateFinalPurchaseAmount(amt) {
    amt = amt + amt * TAX_RATE;
    return amt;
}

amount = calculateFinalPurchaseAmount(amount) + ACCESSORY_PRICE;//计算税费后的价格
console.log("税后价格是：$" + amount.toFixed(2));

var n = 1;
while (amount * n < bank_amount) {
  console.log("我可以再买:" + n + "个商品及其配件.");
  n += 1;
  bank_amount -= amount;
}


