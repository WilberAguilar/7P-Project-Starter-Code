$("button").click(function() {
    let variable1 = $(".a").val();
    let variable2 = $(".b").val();
    let variable3 = $(".c").val();
    
    let variable4= variable3 * 7;
    
    $(".fortune-display").append(variable1+" will play "+ variable4 + " hours of  your favorite games");
    console.log(variable1, variable2, variable3, );
});