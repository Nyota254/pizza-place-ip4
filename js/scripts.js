//Buisness logic
function Order(type, size, toppings, number) {
    this.type = type;
    this.size = size;
    this.number = number;
    this.toppings = toppings;
}

Order.prototype.pricing = function (type, size) {


    if (type == "CRISPY-CRUST-PIZZA" && size == "small") {
        return price = 200;
    } else if (type == "CRISPY-CRUST-PIZZA" && size == "medium") {
        return price = 300;
    } else if (type == "CRISPY-CRUST-PIZZA" && size == "large") {
        return price = 400;
    } else if (type == "STUFFED-PIZZA" && size == "small") {
        return price = 300;
    } else if (type == "STUFFED-PIZZA" && size == "medium") {
        return price = 400;
    } else if (type == "STUFFED-PIZZA" && size == "large") {
        return price = 500;
    } else if (type == "GLUTTEN-FREE-PIZZA" && size == "small") {
        return price = 400;
    } else if (type == "GLUTTEN-FREE-PIZZA" && size == "medium") {
        return price = 500;
    } else if (type == "GLUTTEN-FREE-PIZZA" && size == "large") {
        return price = 600;
    // } else if (type == "CRISPY-CRUST-PIZZA" && size == "small" && toppings == "mushrooms" || toppings == "peperoni") {
    //     return price = 260;
    // } else if (type == "CRISPY-CRUST-PIZZA" && size == "small" && toppings == "sausage" || toppings == "bacon") {
    //     return price = 280;
    // } else if (type == "CRISPY-CRUST-PIZZA" && size == "small" && toppings == "onions") {
    //     return price = 240;
    // } else if (type == "CRISPY-CRUST-PIZZA" && size == "medium" && toppings == "mushrooms" || toppings == "peperoni") {
    //     return price = 360;
    // } else if (type == "CRISPY-CRUST-PIZZA" && size == "medium" && toppings == "sausage" || toppings == "bacon") {
    //     return price = 380;
    // } else if (type == "CRISPY-CRUST-PIZZA" && size == "medium" && toppings == "onions") {
    //     return price = 340;
    // } else if (type == "CRISPY-CRUST-PIZZA" && size == "large" && toppings == "mushrooms" || toppings == "peperoni") {
    //     return price = 460;
    // } else if (type == "CRISPY-CRUST-PIZZA" && size == "large" && toppings == "sausage" || toppings == "bacon") {
    //     return price = 480;
    // } else if (type == "CRISPY-CRUST-PIZZA" && size == "large" && toppings == "onions") {
    //     return price = 440;
    // } else if (type == "STUFFED-PIZZA" && size == "small" && toppings == "sausage" || toppings == "bacon") {
    //     return price = 360;
    // } else if (type == "STUFFED-PIZZA" && size == "small" && toppings == "mushrooms" || toppings == "peperoni") {
    //     return price = 380;
    // } else if (type == "STUFFED-PIZZA" && size == "small" && toppings == "onions") {
    //     return price = 340;
    // } else if (type == "STUFFED-PIZZA" && size == "medium" && toppings == "sausage" || toppings == "bacon") {
    //     return price = 460;
    // } else if (type == "STUFFED-PIZZA" && size == "medium" && toppings == "mushrooms" || toppings == "peperoni") {
    //     return price = 480;
    // } else if (type == "STUFFED-PIZZA" && size == "medium" && toppings == "onions") {
    //     return price = 440;
    // } else if (type == "STUFFED-PIZZA" && size == "large" && toppings == "sausage" || toppings == "bacon") {
    //     return price = 560;
    // } else if (type == "STUFFED-PIZZA" && size == "large" && toppings == "mushrooms" || toppings == "peperoni") {
    //     return price = 580;
    // } else if (type == "STUFFED-PIZZA" && size == "large" && toppings == "onions") {
    //     return price = 540;
    // } else if (type == "GLUTTEN-FREE-PIZZA" && size == "small" && toppings == "sausage" || toppings == "bacon") {
    //     return price = 460;
    // } else if (type == "GLUTTEN-FREE-PIZZA" && size == "small" && toppings == "mushrooms" || toppings == "peperoni") {
    //     return price = 480;
    // } else if (type == "GLUTTEN-FREE-PIZZA" && size == "small" && toppings == "onions") {
    //     return price = 440;
    // } else if (type == "GLUTTEN-FREE-PIZZA" && size == "medium" && toppings == "sausage" || toppings == "bacon") {
    //     return price = 560;
    // } else if (type == "GLUTTEN-FREE-PIZZA" && size == "medium" && toppings == "mushrooms" || toppings == "peperoni") {
    //     return price = 580;
    // } else if (type == "GLUTTEN-FREE-PIZZA" && size == "medium" && toppings == "onions") {
    //     return price = 540;
    // } else if (type == "GLUTTEN-FREE-PIZZA" && size == "large" && toppings == "sausage" || toppings == "bacon") {
    //     return price = 660;
    // } else if (type == "GLUTTEN-FREE-PIZZA" && size == "large" && toppings == "mushrooms" || toppings == "peperoni") {
    //     return price = 680;
    // } else if (type == "GLUTTEN-FREE-PIZZA" && size == "large" && toppings == "onions") {
    //     return price = 640;
    } else {
        alert("please fill the size and number of pizzas you want toppings are optional!")
    }
}

var totalprice =
   function(price, toppings, number) {if (toppings == NaN){
        return price * number;
    } else{
        return (price + toppings) * number;
    }
};


Order.prototype.toppingsprice = function(toppings){
    if(toppings == "mushrooms" || toppings == "peperoni"){
        return addPrice = 60;
    } else if(toppings == "sausage" || toppings == "bacon"){
        return addPrice = 80;
    } else if (toppings == "onions"){
        return addPrice = 40;
    }
}

function resetFields() {
    // $("input#pizzaorderd").val("");
    // $("input#sizeorderd").val("");
    // $("input#toppingsorderd").val("");
    // $("input#numberorderd").val("");
    // $("#sizeToppings1").find('input:number').val('');
    // $("#sizeToppings1").find('input:radio').removeAttr('checked').removeAttr('selected');
        $(this).prevAll('input').val(function(){
            switch (this.type){
                case 'text':
                    return this.defaultValue;
                case 'checkbox':
                case 'radio':
                    this.checked = this.defaultChecked;
            }
        });

    
}



//Front-end logic
$(document).ready(function () {


    $("form#sizeToppings1").submit(function (event) {

        event.preventDefault();
        var inputtype = $("#pizzatype").val();
        var inputSize = $("input:radio[name=size]:checked").val();
        var inputNumber = parseInt($("input#numberofpizzas").val());
        var inputToppings = $("input:radio[name=toppings]:checked").val();
        var newOrder = new Order(inputtype, inputSize, inputToppings, inputNumber);

        var price = newOrder.pricing(inputtype, inputSize);
        var toppingsPrice = newOrder.toppingsprice(inputToppings);
        // var totalprice = (price + toppingsPrice) * newOrder.number
        // var totalprice = newOrder.toppingsOptional(toppingsPrice); 
        totalprice(price, toppingsPrice,inputNumber);



        $("#pizzaorderd").text(newOrder.type);
        $("#sizeorderd").text(newOrder.size);
        $("#toppingsorderd").text(newOrder.toppings);
        $("#numberorderd").text(newOrder.number);
        $("#totalamount").text(totalprice + "KSH");

        resetFields();

    });

    $("button#Delivery").click(function () {
        confirm("An additional cost of 200Ksh will be incured do you wish to proceed");
        prompt("Please enter your location");
        alert("Thank you your order will be Deliverd soon");
    });

    $("button#shop-collection").click(function () {
        alert("Thank you for choosing us as your pizza place please come again");
    });

    $("form#sizeToppings2").submit(function (event) {

        event.preventDefault();
        var inputtype = $("#pizzatype2").val();
        var inputSize = $("input:radio[name=size]:checked").val();
        var inputNumber = parseInt($("input#numberofpizzas").val());
        var inputToppings = $("input:radio[name=toppings]:checked").val();

        var newOrder = new Order(inputtype, inputSize, inputToppings, inputNumber);

        var price = newOrder.pricing(inputtype, inputSize, inputToppings);
        var totalprice = price * newOrder.number

        $("#pizzaorderd").text(newOrder.type);
        $("#sizeorderd").text(newOrder.size);
        $("#toppingsorderd").text(newOrder.toppings);
        $("#numberorderd").text(newOrder.number);
        $("#totalamount").text(totalprice + "KSH");

        resetFields();

    });

    $("form#sizeToppings3").submit(function (event) {

        event.preventDefault();
        var inputtype = $("#pizzatype3").val();
        var inputSize = $("input:radio[name=size]:checked").val();
        var inputNumber = parseInt($("input#numberofpizzas").val());
        var inputToppings = $("input:radio[name=toppings]:checked").val();

        var newOrder = new Order(inputtype, inputSize, inputToppings, inputNumber);

        var price = newOrder.pricing(inputtype, inputSize, inputToppings);
        var totalprice = price * newOrder.number

        $("#pizzaorderd").text(newOrder.type);
        $("#sizeorderd").text(newOrder.size);
        $("#toppingsorderd").text(newOrder.toppings);
        $("#numberorderd").text(newOrder.number);
        $("#totalamount").text(totalprice + "KSH");

        resetFields();

    });



});