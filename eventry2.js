quantity = [200, 300, 240, 150, 100]
quantity1.value = quantity[0]
quantity2.value = quantity[1]
quantity3.value = quantity[2]
quantity4.value = quantity[3]
quantity5.value = quantity[4]
function calc1() {

	if (parseInt(order1.value) <= parseInt(quantity1.value)) {

		amount1.value = parseInt(price1.value) * parseInt(order1.value);
		_order1 = order1.value ? order1.value : 0
		quantity1.value = parseInt(quantity[0]) - _order1

	} else if (parseInt(order1.value) > parseInt(quantity1.value)) {
		amount1.value = 'out of order';
	}
	else{
		amount1.value = 0
		_order1 = order1.value ? order1.value : 0
		quantity1.value = parseInt(quantity[0]) - _order1
	}
}
function calc2() {

	if (parseInt(order2.value) <= parseInt(quantity2.value)) {

		amount2.value = parseInt(price2.value) * parseInt(order2.value);
		_order2 = order2.value ? order2.value : 0
		quantity2.value = parseInt(quantity[1]) - _order2

	} else if (parseInt(order2.value) > parseInt(quantity2.value)) {
		amount2.value = 'out of order';
	}
	else{
		amount2.value = 0
		_order2 = order2.value ? order1.value : 0
		quantity2.value = parseInt(quantity[0]) - _order2
	}
}
function calc3() {
	
	if (parseInt(order3.value) <= parseInt(quantity3.value)) {

		amount3.value = parseInt(price3.value) * parseInt(order3.value);
		_order3 = order3.value ? order3.value : 0
		quantity3.value = parseInt(quantity[2]) - _order3

	} else if (parseInt(order3.value) > parseInt(quantity3.value)) {
		amount3.value = 'out of order';
	}
	else{
		amount3.value = 0
		_order3 = order3.value ? order3.value : 0
		quantity3.value = parseInt(quantity[2]) - _order3
	}
}
function calc4() {
	
	if (parseInt(order4.value) <= parseInt(quantity4.value)) {

		amount4.value = parseInt(price4.value) * parseInt(order4.value);
		_order4 = order4.value ? order4.value : 0
		quantity4.value = parseInt(quantity[3]) - _order4

	} else if (parseInt(order4.value) > parseInt(quantity4.value)) {
		amount4.value = 'out of order';
	}
	else{
		amount4.value = 0
		_order4 = order4.value ? order4.value : 0
		quantity4.value = parseInt(quantity[3]) - _order4
	}
}
function calc5() {
	
	if (parseInt(order5.value) <= parseInt(quantity5.value)) {

		amount5.value = parseInt(price5.value) * parseInt(order5.value);
		_order5 = order5.value ? order5.value : 0
		quantity5.value = parseInt(quantity[4]) - _order5

	} else if (parseInt(order5.value) > parseInt(quantity5.value)) {
		amount5.value = 'out of order';
	}
	else{
		amount5.value = 0
		_order5 = order5.value ? order5.value : 0
		quantity5.value = parseInt(quantity[4]) - _order5
	}
}
function total() {

	if (amount1.value) { 
		_amount1 = amount1.value;
	} else { 
		_amount1 = 0;
	}
	var _amount2 = amount2.value ? amount2.value : 0;
	var _amount3 = amount3.value ? amount3.value : 0;
	var _amount4 = amount4.value ? amount4.value : 0;
	var _amount5 = amount5.value ? amount5.value : 0;
	result.value = parseInt(_amount1) + parseInt(_amount2) + parseInt(_amount3) + parseInt(_amount4) + parseInt(_amount5);
	// alert(result.value);
	// result.value = parseInt(amount1.value);
}