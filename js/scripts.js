function Order(size,toppings, number) {
    this.size = size;
    this.number = number;
    this.toppings = toppings;
}


$(document).ready(function () {

    
    $("form#sizeToppings1").submit(function (event) {

        event.preventDefault();

        var inputSize = $("input:radio[name=size]:checked").val();
        var inputNumber = parseInt($("input#numberofpizzas").val());
        var inputToppings = $("input:radio[name=toppings]:checked").val();
        var newOrder = new Order(inputSize, inputToppings, inputNumber);
        
        $("#sizeorderd").text(newOrder.size);


    });

});