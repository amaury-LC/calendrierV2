
class moncalendrier {

    constructor(madate,moislettre) {


        this.d = new Date(madate);
        this.annee = this.d.getFullYear();
        this.mois = this.d.getUTCMonth();
        this.jourday = this.d.getDay();
        this.numjour = this.d.getUTCDate();

        


        this.moistableau = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
        this.jourtableau = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
        this.datesave = [];

        $(".mois").html("<p>" + this.moistableau[this.mois] + "</p>");
        $(".annee").html("<p>" + this.annee + "</p>");

        this.calendrier(this.mois, this.annee,moislettre);
        //alert(this.mois);
        //alert(this.annee);
    }

 

    // moins() {

    //     this.d.setUTCMonth(this.d.getUTCMonth() - 1);

    //     this.annee = this.d.getFullYear();
    //     this.mois = this.d.getUTCMonth();

    //     var nbjour = this.getNbJoursMois(this.mois, this.annee)



    //     $(".mois").html("<p>" + this.moistableau[this.mois] + "</p>");
    //     $(".annee").html("<p>" + this.annee + "</p>");
    //     this.calendrier(this.mois, this.annee);



    // }

    getNbJoursMois() {
        var lgMois = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if ((this.annee % 4 == 0 && this.annee % 100 != 0) || this.annee % 400 == 0) lgMois[1] += 1;
        return lgMois[this.mois]; // 0 < mois <11
    }

    // plus() {

    //     this.d.setUTCMonth(this.d.getUTCMonth() + 1);

    //     this.annee = this.d.getFullYear();
    //     this.mois = this.d.getUTCMonth();

    //     var nbjour = this.getNbJoursMois(this.mois, this.annee);



    //     $(".mois").html("<p>" + this.moistableau[this.mois] + "</p>");
    //     $(".annee").html("<p>" + this.annee + "</p>");
    //     this.calendrier(this.mois, this.annee);
    // }

    jour(mois,annee) {

        var jourdate = new Date(annee, mois, 1);
    
        // alert(jourtableau[jourdate.getDay()]);
    
        return jourdate.getDay();
    
    
    
    }

    envoyer(){

        $.post( "envoyer.php", { datesave: this.datesave} );
    
       
    }

    click1(id) {

        if(this.datesave.length == 0){
    
            $("#" + id).css("background", "#3ba44d");
            this.datesave.push(id);
            console.log(this.datesave);
    
        
        }
        else{
    
            var existepas=true;
    
            for(var i = 0; i < this.datesave.length; i++){
    
                if(this.datesave[i] == id){
    
                    $("#" + id).css("background", "white");
    
    
                    this.datesave.splice(i,1);
    
                    existepas = false;
                }
            }
    
            if(existepas){
    
                $("#" + id).css("background", "#3ba44d");
                this.datesave.push(id);
    
            }
        }
    
    
    
    }

    // Retourne la numéro de la semaine courante
	 getWeekNumber(jour,mois,annee) {
        let d = new Date(annee+"-"+mois+"-"+jour);
        
		let DoW = d.getDay();
		d.setDate(d.getDate() - (DoW + 6) % 7 + 3); // Nearest Thu
		let ms = d.valueOf(); // GMT
		d.setMonth(0);
        d.setDate(4); // Thu in Week 1
        console.log(Math.round((ms - d.valueOf()) / (7 * 864e5)) + 1);
		return Math.round((ms - d.valueOf()) / (7 * 864e5)) + 1;
	}

    calendrier(mois, annee,moislettre) {
        var nbjour = this.getNbJoursMois(mois, annee) + 1;
        var nbjour1 = 0;
        
        var lundi1 = "";
        var lundi2 = "white";
        var background1 = "";
        
    
    
    
    
    
    
        nbjour1 = this.jour(mois,annee);
    
        var nbjour2 = 0;
    
        if (nbjour1 == 0) {
    
            nbjour2 = 6;
        }
        else {
    
            nbjour2 = nbjour1 - 1;
        }
    
        var html = "";
    
        for (let index = 0; index < nbjour2; index++) {
    
            html += '<div style="background : white;width: 14%;height : 40px;"></div><br>'
        }


    
    
    
        for (var i = 1; i < nbjour; i++) {
    
            var datejourmois = this.d.getUTCMonth() + 1;
            var dateannee = this.d.getUTCFullYear();
            var jour2 = "";

         
    
            if(datejourmois < 10){
    
                datejourmois = "0"+datejourmois;
    
            }
            else{
                datejourmois = datejourmois;
            }
    
         
         
            if(i < 10){
    
                 jour2 = "0"+i;
            }
            else{
                 jour2 = i;
            }

            var lundi = this.getWeekNumber(i,this.d.getUTCMonth()+1,this.d.getUTCFullYear());
            var backgroundjour = "";
            
            // if(lundi != lundi1){

            //     lundi1 = lundi;
            //     if(lundi2 == "white"){
            //         background1 = "rgba(16,202,19,.4)";
            //         backgroundjour = background1;
            //         lundi2 = "vert";
            //     }
            //     else{

            //         background1 = "white";
            //         backgroundjour = background1;
            //         lundi2 = "white";

            //     }


            // }
            // else {

            //     backgroundjour = background1;


            // }
            if(lundi == 1){
                backgroundjour = "#10CA13";
                backgroundjour = "rgba(16,202,19,.4)";
            }
            else if(lundi == 2){

                backgroundjour = "white";

            }
            else if(lundi == 3){

                backgroundjour = "rgba(16,202,19,.4)";

            }
            else if(lundi == 4){

                backgroundjour = "white";

            }
            else if(lundi == 5){

                backgroundjour = "rgba(16,202,19,.4)";

            }
            else if(lundi == 6){

                backgroundjour = "white";

            }
            else if(lundi == 7){

                backgroundjour = "rgba(16,202,19,.4)";

            }
            else if(lundi == 8){

                backgroundjour = "white";

            }
            else if(lundi == 9){

                backgroundjour = "rgba(16,202,19,.4)";

            }
            else if(lundi == 10){

                backgroundjour = "white";

            }
            else if(lundi == 11){

                backgroundjour = "rgba(16,202,19,.4)";

            }
            else if(lundi == 12){

                backgroundjour = "white";

            }
            else if(lundi == 13){

                backgroundjour = "rgba(16,202,19,.4)";

            }
            else if(lundi == 14){

                backgroundjour = "white";

            }
            else if(lundi == 15){

                backgroundjour = "rgba(16,202,19,.4)";

            }
            else if(lundi == 16){

                backgroundjour = "white";

            }
            else if(lundi == 17){

                backgroundjour = "rgba(16,202,19,.4)";

            }
            else if(lundi == 18){

                backgroundjour = "white";

            }
            else if(lundi == 19){

                backgroundjour = "rgba(16,202,19,.4)";

            }
            else if(lundi == 20){

                backgroundjour = "white";

            }else if(lundi == 21){

                backgroundjour = "rgba(16,202,19,.4)";

            }
            else if(lundi == 22){

                backgroundjour = "white";

            }
            else if(lundi == 23){

                backgroundjour = "rgba(16,202,19,.4)";

            }
            else if(lundi == 24){

                backgroundjour = "white";

            }
            else if(lundi == 25){

                backgroundjour = "rgba(16,202,19,.4)";

            }
            else if(lundi == 26){

                backgroundjour = "white";

            }
            else if(lundi == 27){

                backgroundjour = "rgba(16,202,19,.4)";

            }
            else if(lundi == 28){

                backgroundjour = "white";

            }
            else if(lundi == 29){

                backgroundjour = "rgba(16,202,19,.4)";

            }
            else if(lundi == 30 ){

                backgroundjour = "white";

            }
            else if(lundi == 31){

                backgroundjour = "rgba(16,202,19,.4)";

            }
            else if(lundi == 32){

                backgroundjour = "white";

            }
            else if(lundi == 33){

                backgroundjour = "rgba(16,202,19,.4)";

            }
            else if(lundi == 34){

                backgroundjour = "white";

            }
            else if(lundi == 35){

                backgroundjour = "rgba(16,202,19,.4)";

            }
            else if(lundi == 36){

                backgroundjour = "white";

            }
            else if(lundi == 37){

                backgroundjour = "rgba(16,202,19,.4)";

            }
            else if(lundi == 38){

                backgroundjour = "white";

            }
            else if(lundi == 39){

                backgroundjour = "rgba(16,202,19,.4)";

            }
            else if(lundi == 40){

                backgroundjour = "white";

            }
            else if(lundi == 41){

                backgroundjour = "rgba(16,202,19,.4)";

            }
            else if(lundi == 42){

                backgroundjour = "white";

            }
            else if(lundi == 43){

                backgroundjour = "rgba(16,202,19,.4)";

            }
            else if(lundi == 44){

                backgroundjour = "white";

            }
            else if(lundi == 45){

                backgroundjour = "rgba(16,202,19,.4)";

            }
            else if(lundi == 46){

                backgroundjour = "white";

            }
            else if(lundi == 47){

                backgroundjour = "rgba(16,202,19,.4)";

            }
            else if(lundi == 48){

                backgroundjour = "white";

            }
            else if(lundi == 49){

                backgroundjour = "rgba(16,202,19,.4)";

            }
            else if(lundi == 50){

                backgroundjour = "white";

            }
            else if(lundi == 51){

                backgroundjour = "rgba(16,202,19,.4)";

            }
            else if(lundi == 52){

                backgroundjour = "white";

            }
            else if(lundi == 53){

                backgroundjour = "rgba(16,202,19,.4)";

            }
           


           



            

            
    
            var datejour = "dateDu" + dateannee + "-" + datejourmois + "-" + jour2;
    
            html += '<div  onclick="calendrier.click1(\'' + datejour + '\')"  style="background : '+backgroundjour+';width: 14%;height : 40px;display:flex;justify-content: center;align-items: center;"><div class="valide" id="' + datejour + '" ><span style="color : black">' + i + '</span></div></div><br>';
        }
    
        $("#calendar"+moislettre).html(html);
    
        for (var e = 0; e < this.datesave.length; e++) {
    
            $("#" + this.datesave[e]).css("background", "#3ba44d");
          
    
    
        }
    
        // console.log(html);
    }

    






}