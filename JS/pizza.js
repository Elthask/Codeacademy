let orderCount = 0;

const takeOrder = (topping, crustType) => {
  orderCount++
  
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
};

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');
console.log(getSubTotal(orderCount));
