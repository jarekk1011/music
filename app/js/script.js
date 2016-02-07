var fiolet=$(".fiolet-line");
var fioletLine=$(".fiolet-line__visability");
var fioletImg=$("img");
TweenMax.from(fiolet,1,{
  height:"0px",
  ease:Power1.easeInOut})
        ;
TweenMax.from(fioletLine,1,{
              "border-radius":"0px"
      })
        .delay(0.8);
TweenMax.from(fiolet,1,{width:"8px"})
        .delay(0.8);
TweenMax.from(fioletImg,1,{opacity:"0"})
        .delay(2);
        
