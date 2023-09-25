var fl = 0;
function resize(){

    if(fl === 0){
        $( "#card1" ).animate({
        width: "1200px",
        height: "600px"
        }, 300, function() {
        // Animation complete.
        updateMapSize();
        });
        $( "#card3" ).animate({
        width: "0px",
        height: "200px",
        opacity:0
        }, 300);
        $( "#card4" ).animate({
        width: "0px",
        height: "200px",
        opacity:0

        }, 300);
        fl =1;
    }
    else{
        $( "#card1" ).animate({
        width: "400px",
        height: "200px"
        }, 300, function() {
        // Animation complete.
        updateMapSize();

        });
        $( "#card3" ).animate({
        width: "400px",
        height: "200px",
        opacity:1
        }, 300);
        $( "#card4" ).animate({
        width: "400px",
        height: "200px",
        opacity:1

        }, 300);
        
        fl = 0;
    }

}
  