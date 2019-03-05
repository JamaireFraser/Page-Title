$("button").click(function() {
    var userInput =$("#name").val();
    var userInput2 =$(".Class2").val();
    var userInput3 =$(".class2").val();
    var userInput4 =$(".class3").val();

    
    var age=parseInt(userInput2);

    
    $(".message").append(userInput2);
});
