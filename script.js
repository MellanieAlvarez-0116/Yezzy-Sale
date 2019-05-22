var selection=[];
var price=[];

$(".addButton").click(function(){
    var iteminput=$(".YezzySale").val();
    var Priceinput=parseInt( $(".YezzyPrice").val());
    selection.push(iteminput);
    price.push(Priceinput);
    var Total=0;
    price.forEach(function(Item) {
    Total=Total+Item;
});
   console.log(Total);
});