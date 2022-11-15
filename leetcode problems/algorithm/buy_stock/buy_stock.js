/*

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a 
different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, 
return 0.




*/
var maxProfit = function(prices) {
    let buy_price = prices[0]; // used to compare value
    prices.forEach((price)=>{
        if (price < buy_price){
            buy_price = price
        }
    }) // search for best buying price
    
    let when_to_sell = prices.slice(prices.indexOf(buy_price), prices.length); // prices after buy stock
    let sell_price = when_to_sell[0];
    
    when_to_sell.forEach((price)=>{
        if (price > sell_price){
            sell_price = price;
        }
    }) // search for best selling price
    
    if (sell_price > buy_price){
        console.log(`Your profit is: $${sell_price - buy_price}`);
        return sell_price - buy_price;
    }else{
        return 0;
    }
};

maxProfit([23, 24, 20, 15, 22, 20]);
  