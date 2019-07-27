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
    } else {
        alert("please fill the size and number of pizzas you want toppings are optional!")
    }
}

Order.prototype.toppingsprice = function (toppings) {
    if (toppings == "mushrooms" || toppings == "peperoni") {
        return addPrice = 60;
    } else if (toppings == "sausage" || toppings == "bacon") {
        return addPrice = 80;
    } else if (toppings == "onions") {
        return addPrice = 40;
    }
}

function resetFields() {
    $(this).prevAll('input').val(function () {
        switch (this.type) {
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


    $("form#sizeToppings1").last().submit(function (event) {

        event.preventDefault();
        var inputtype = $("#pizzatype").val();
        var inputSize = $("input:radio[name=size]:checked").val();
        var inputNumber = parseInt($("input#numberofpizzas").val());
        var inputToppings = $("input:radio[name=toppings]:checked").val();
        var newOrder = new Order(inputtype, inputSize, inputToppings, inputNumber);

        var price = newOrder.pricing(inputtype, inputSize);
        var toppingsPrice = newOrder.toppingsprice(inputToppings);
        var totalprice = (price + toppingsPrice) * newOrder.number;

        $("ol#orders").append("<li> <span id='appendedorders'>" + newOrder.type + "  " +totalprice + "Ksh"+ "</span></li>")

        $("#appendedorders").last().click(function () {
            $(".cart").show();
            $("#pizzaorderd").text(newOrder.type);
            $("#sizeorderd").text(newOrder.size);
            $("#toppingsorderd").text(newOrder.toppings);
            $("#numberorderd").text(newOrder.number);
            $("#totalamount").text(totalprice + "KSH");
        });
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

    $("form#sizeToppings2").last().submit(function (event) {

        event.preventDefault();
        var inputtype = $("#pizzatype2").val();
        var inputSize = $("input:radio[name=size2]:checked").val();
        var inputNumber = parseInt($("input#numberofpizzas2").val());
        var inputToppings = $("input:radio[name=toppings2]:checked").val();

        var newOrder = new Order(inputtype, inputSize, inputToppings, inputNumber);

        var price = newOrder.pricing(inputtype, inputSize);
        var toppingsPrice = newOrder.toppingsprice(inputToppings);
        var totalprice = (price + toppingsPrice) * newOrder.number;

        $("ol#orders").append("<li> <span id='appendedorders2'>" + newOrder.type + "  " +totalprice + "Ksh" + "</span></li>")

        $("#appendedorders2").last().click(function () {
            $(".cart").show();
            $("#pizzaorderd").text(newOrder.type);
            $("#sizeorderd").text(newOrder.size);
            $("#toppingsorderd").text(newOrder.toppings);
            $("#numberorderd").text(newOrder.number);
            $("#totalamount").text(totalprice + "KSH");
        });

        resetFields();

    });

    $("form#sizeToppings3").last().submit(function (event) {

        event.preventDefault();
        var inputtype = $("#pizzatype3").val();
        var inputSize = $("input:radio[name=size3]:checked").val();
        var inputNumber = parseInt($("input#numberofpizzas3").val());
        var inputToppings = $("input:radio[name=toppings3]:checked").val();

        var newOrder = new Order(inputtype, inputSize, inputToppings, inputNumber);

        var price = newOrder.pricing(inputtype, inputSize);
        var toppingsPrice = newOrder.toppingsprice(inputToppings);
        var totalprice = (price + toppingsPrice) * newOrder.number;

        $("ol#orders").append("<li> <span id='appendedorders3'>" + newOrder.type + "  " +totalprice + "Ksh" + "</span></li>")

        $("#appendedorders3").last().click(function () {
            $(".cart").show();
            $("#pizzaorderd").text(newOrder.type);
            $("#sizeorderd").text(newOrder.size);
            $("#toppingsorderd").text(newOrder.toppings);
            $("#numberorderd").text(newOrder.number);
            $("#totalamount").text(totalprice + "KSH");
        });
        resetFields();

    });



});