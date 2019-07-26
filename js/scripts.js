function Order(size,toppings, number) {
    this.size = size;
    this.number = number;
    this.toppings = toppings;
}


$(document).ready(function () {

    
    $(".sizeToppings1").submit(function () {

        event.preventDefault();

        var inputSize = $("input:radio[name=size]:checked").val();
        var inputNumber = parseInt($("numberofpizzas").val());
        var inputToppings = $("input:radio[name=toppings]:checked").val();
        var newOrder = new Pizza(inputSize, inputToppings, inputNumber);
        
        alert(newOrder.size);

    });

});