<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="calendar.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="moncalendrier.js"></script>
    <title>Calendrier</title>
</head>
<body>
    


<div id="calendrierformulaire">

    <div id="haut" >
        <div id="moins" onclick="calendrier.moins()" >
            <div id="moins1" >
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 240.823 240.823" style="enable-background:new 0 0 240.823 240.823;" xml:space="preserve">
                    <g>
                        <path id="Chevron_Right_1_" d="M183.189,111.816L74.892,3.555c-4.752-4.74-12.451-4.74-17.215,0c-4.752,4.74-4.752,12.439,0,17.179
		l99.707,99.671l-99.695,99.671c-4.752,4.74-4.752,12.439,0,17.191c4.752,4.74,12.463,4.74,17.215,0l108.297-108.261
		C187.881,124.315,187.881,116.495,183.189,111.816z" />

                </svg></div>

        </div>
        <span class="mois unselectable" style="color : white"></span>
        <span class="annee unselectable" style="color : white"></span>
        <div id="plus" onclick="calendrier.plus()" >
            <div id="plus1" >
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 240.823 240.823" style="enable-background:new 0 0 240.823 240.823;" xml:space="preserve">
                    <g>
                        <path id="Chevron_Right_1_" d="M183.189,111.816L74.892,3.555c-4.752-4.74-12.451-4.74-17.215,0c-4.752,4.74-4.752,12.439,0,17.179
		l99.707,99.671l-99.695,99.671c-4.752,4.74-4.752,12.439,0,17.191c4.752,4.74,12.463,4.74,17.215,0l108.297-108.261
		C187.881,124.315,187.881,116.495,183.189,111.816z" />

                </svg></div>
        </div>
    </div>
    <div id="headercalendar"  >
        <span id="L" class="jour unselectable">L</span>
        <span id="M" class="jour unselectable">M</span>
        <span id="M1" class="jour unselectable">M</span>
        <span id="j" class="jour unselectable">J</span>
        <span id="V" class="jour unselectable">V</span>
        <span id="S" class="jour unselectable">S</span>
        <span id="D" class="jour unselectable">D</span>
    </div>
    <div id="calendar" style="display: flex;flex-wrap: wrap;" >
        




    </div>

    <div onclick="envoyer()" style=" width : 1109px;display: flex;justify-content: center;align-items: center;"><div style="background : #3ba44d;width : 100px;height : 50px;display: flex;justify-content: center;align-items: center;"><span style="color : white;font-size: 1em;">Valider</span></div></div>


   


   </div>

<script>

var calendrier = new moncalendrier();

</script>



</body>
</html>