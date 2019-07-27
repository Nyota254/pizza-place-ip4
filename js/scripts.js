function Order(type,size,toppings, number) {
    this.type = type;
    this.size = size;
    this.number = number;
    this.toppings = toppings;
}

Order.prototype.pricing = function (type, size,toppings){
    
    
    if (type == "CRISPY-CRUST-PIZZA" && size == "small") {
        return price = 200;
    } else if (type == "CRISPY-CRUST-PIZZA" && size == "medium"){
        return price = 300;
    } else if (type == "CRISPY-CRUST-PIZZA" && size == "large"){
        return price = 400;
    } else if(type == "STUFFED-PIZZA" && size == "small") {
        return price = 300; 
    } else if(type == "STUFFED-PIZZA" && size == "medium") {
        return price = 400; 
    } else if(type == "STUFFED-PIZZA" && size == "large") {
        return price = 500; 
    } else if(type == "GLUTTEN-FREE-PIZZA" && size == "small"){
        return price = 400;
    } else if(type == "GLUTTEN-FREE-PIZZA" && size == "medium"){
        return price = 500;
    } else if(type == "GLUTTEN-FREE-PIZZA" && size == "large"){
        return price = 600;
    }  else if (type == "CRISPY-CRUST-PIZZA" && size == "small" && toppings == "mushrooms" || toppings == "peperoni"){
        return price = 360;
    } else if (type == "CRISPY-CRUST-PIZZA" && size == "small" && toppings == "sausage" || toppings == "bacon"){
        return price = 380;
    } else if (type == "CRISPY-CRUST-PIZZA" && size == "small" && toppings == "onions"){
        return price = 340;
    } else if(type == "STUFFED-PIZZA" && size == "small" && toppings == "sausage" || toppings == "bacon") {
        return price = 360; 
    } else if(type == "STUFFED-PIZZA" && size == "small" && toppings == "mushrooms" || toppings == "peperoni") {
        return price = 380; 
    } else if(type == "STUFFED-PIZZA" && size == "small" && toppings == "onions") {
        return price = 340; 
    } 
}




$(document).ready(function () {

    
    $("form#sizeToppings1").submit(function (event) {

        event.preventDefault();
        var inputtype = $("#pizzatype").val();
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
        $("#totalamount").text(totalprice);

    });

    $("button#Delivery").click(function(){
        prompt("Please enter your location");
        alert("Thank you your order will be Deliverd soon");
    });

    $("button#shop-collection").click(function(){
        alert("Thank you for choosing us as your pizza place please come again");
    });

    $("form#sizeToppings2").submit(function (event) {

        event.preventDefault();
        var inputtype = $("#pizzatype2").val();
        var inputSize = $("input:radio[name=size]:checked").val();
        var inputNumber = parseInt($("input#numberofpizzas").val());
        var inputToppings = $("input:radio[name=toppings]:checked").val();
        var newOrder = new Order(inputtype, inputSize, inputToppings, inputNumber);
        
        $("#pizzaorderd").text(newOrder.type);
        $("#sizeorderd").text(newOrder.size);
        $("#toppingsorderd").text(newOrder.toppings);
        $("#numberorderd").text(newOrder.number);

    });  
    
    $("form#sizeToppings3").submit(function (event) {

        event.preventDefault();
        var inputtype = $("#pizzatype3").val();
        var inputSize = $("input:radio[name=size]:checked").val();
        var inputNumber = parseInt($("input#numberofpizzas").val());
        var inputToppings = $("input:radio[name=toppings]:checked").val();
        var newOrder = new Order(inputtype, inputSize, inputToppings, inputNumber);
        
        $("#pizzaorderd").text(newOrder.type);
        $("#sizeorderd").text(newOrder.size);
        $("#toppingsorderd").text(newOrder.toppings);
        $("#numberorderd").text(newOrder.number);
    });

    

});