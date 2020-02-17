
var calendrier = new moncalendrier('2020-01',"J");
var calendrier1 = new moncalendrier('2020-02',"F");
var calendrier2 = new moncalendrier('2020-03',"M");
var calendrier3 = new moncalendrier('2020-04',"A");
var calendrier4 = new moncalendrier('2020-05',"MA");
var calendrier5 = new moncalendrier('2020-06',"JU");
var calendrier6 = new moncalendrier('2020-07',"JUILLET");
var calendrier7 = new moncalendrier('2020-08',"AOUT");
var calendrier8 = new moncalendrier('2020-09',"SEP");
var calendrier9 = new moncalendrier('2020-10',"OC");
var calendrier10 = new moncalendrier('2020-11',"NO");
var calendrier11 = new moncalendrier('2020-12',"DE");

var tabcalendrier = [calendrier,calendrier1,calendrier2,calendrier3,calendrier4,calendrier5,calendrier6,calendrier7,calendrier8,calendrier9,calendrier10,calendrier11];


function click2(){

    console.log(calendrier.datesave);

     var tab = [];

    for (let index = 0; index < 12; index++) {
        var tab1 = tabcalendrier[index].datesave;
        
         for (let i = 0; i < tab1.lenght; i++) {
            
          tab.push(tab1[i])  ;  
            
       }
        
     }

    // console.log(tab);

    
}