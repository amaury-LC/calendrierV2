
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

    calendrier(mois, annee,moislettre) {
        var nbjour = this.getNbJoursMois(mois, annee) + 1;
        var nbjour1 = 0;
        
    
        
    
    
    
    
    
    
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
    
            var datejour = "dateDu" + dateannee + "-" + datejourmois + "-" + jour2;
    
            html += '<div onclick="calendrier.click1(\'' + datejour + '\')"  style="background : white;width: 14%;height : 40px;display:flex;justify-content: center;align-items: center;"><div class="valide" id="' + datejour + '" ><span style="color : black">' + i + '</span></div></div><br>';
        }
    
        $("#calendar"+moislettre).html(html);
    
        for (var e = 0; e < this.datesave.length; e++) {
    
            $("#" + this.datesave[e]).css("background", "#3ba44d");
          
    
    
        }
    
        // console.log(html);
    }

    






}