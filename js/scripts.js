function Order(type,size,toppings, number) {
    this.type = type;
    this.size = size;
    this.number = number;
    this.toppings = toppings;
}

Order.prototype.pricing = function (){
    
    
    if (inputtype == CRISPY-CRUST-PIZZA && inputSize == small) {
        return price == 200;
    } else if (inputtype == CRISPY-CRUST-PIZZA && inputSize == medium){
        return price == 300;
    } else if (inputtype == CRISPY-CRUST-PIZZA && inputSize == large){
        return price == 400;
    } else if(inputtype == STUFFED-PIZZA && inputSize == small) {
        return price == 300; 
    } else if(inputtype == STUFFED-PIZZA && inputSize == medium) {
        return price == 400; 
    } else if(inputtype == STUFFED-PIZZA && inputSize == large) {
        return price == 500; 
    } else if(inputtype == GLUTTEN-FREE-PIZZA && inputSize == small){
        return price == 400;
    } else if(inputtype == GLUTTEN-FREE-PIZZA && inputSize == medium){
        return price == 500;
    } else if(inputtype == GLUTTEN-FREE-PIZZA && inputSize == large){
        return price == 600;
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
        
        $("#pizzaorderd").text(newOrder.type);
        $("#sizeorderd").text(newOrder.size);
        $("#toppingsorderd").text(newOrder.toppings);
        $("#numberorderd").text(newOrder.number);

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