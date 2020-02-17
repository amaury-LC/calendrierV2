<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="calendrier.css" rel="stylesheet">
    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="moncalendrierV2.js"></script>
    
    
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    

    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <title>Document</title>
</head>

<body>

    <div style="width : 100%">

        <div class="container" style="margin-top : 100px">

            <div class="row" >
                <!-- calendrier -->
                <div class="col l4 s12">

                    <div style="background : rgba(59,164,77,1);width : 100%;height : 50px">

                        <div style="display : flex; justify-content: center; align-items: center;width : 100%; height : 100%">

                            <span style="color: white;">Janvier</span>

                        </div>


                    </div>
                    <div id="headercalendar">
                        <span id="L" class="jour unselectable">L</span>
                        <span id="M" class="jour unselectable">M</span>
                        <span id="M1" class="jour unselectable">M</span>
                        <span id="j" class="jour unselectable">J</span>
                        <span id="V" class="jour unselectable">V</span>
                        <span id="S" class="jour unselectable">S</span>
                        <span id="D" class="jour unselectable">D</span>
                    </div>
                    <div id="calendarJ" style="display: flex;flex-wrap: wrap;margin-bottom : 50px" >
        




                    </div>

                </div>
                <!-- calendrier -->
                <div class="col l4 s12">

                    <div style="background :rgba(59,164,77,1);width : 100%;height : 50px">

                        <div style="display : flex; justify-content: center; align-items: center;width : 100%; height : 100%">

                            <span style="color: white;">Février</span>

                        </div>

                    </div>
                    <div id="headercalendar">
                        <span id="L" class="jour unselectable">L</span>
                        <span id="M" class="jour unselectable">M</span>
                        <span id="M1" class="jour unselectable">M</span>
                        <span id="j" class="jour unselectable">J</span>
                        <span id="V" class="jour unselectable">V</span>
                        <span id="S" class="jour unselectable">S</span>
                        <span id="D" class="jour unselectable">D</span>
                    </div>
                    <div id="calendarF" style="display: flex;flex-wrap: wrap;" >
        




                    </div>

                </div>
                <!-- calendrier -->
                <div class="col l4 s12">

                    <div style="background :rgba(59,164,77,1);width : 100%;height : 50px">

                        <div style="display : flex; justify-content: center; align-items: center;width : 100%; height : 100%">

                            <span style="color: white;">Mars</span>

                        </div>
                        

                    </div>
                    <div id="headercalendar">
                        <span id="L" class="jour unselectable">L</span>
                        <span id="M" class="jour unselectable">M</span>
                        <span id="M1" class="jour unselectable">M</span>
                        <span id="j" class="jour unselectable">J</span>
                        <span id="V" class="jour unselectable">V</span>
                        <span id="S" class="jour unselectable">S</span>
                        <span id="D" class="jour unselectable">D</span>
                    </div>
                    <div id="calendarM" style="display: flex;flex-wrap: wrap;margin-bottom : 50px" >
        




                    </div>

                </div>



            </div>
            <!-- fin row -->

            <div class="row" >
                <!-- calendrier -->
                <div class="col l4 s12">

                    <div style="background : rgba(59,164,77,1);width : 100%;height : 50px">

                        <div style="display : flex; justify-content: center; align-items: center;width : 100%; height : 100%">

                            <span style="color: white;">Avril</span>

                        </div>


                    </div>
                    <div id="headercalendar">
                        <span id="L" class="jour unselectable">L</span>
                        <span id="M" class="jour unselectable">M</span>
                        <span id="M1" class="jour unselectable">M</span>
                        <span id="j" class="jour unselectable">J</span>
                        <span id="V" class="jour unselectable">V</span>
                        <span id="S" class="jour unselectable">S</span>
                        <span id="D" class="jour unselectable">D</span>
                    </div>
                    <div id="calendarA" style="display: flex;flex-wrap: wrap;margin-bottom : 50px" >
        




                    </div>

                </div>
                <!-- calendrier -->
                <div class="col l4 s12">

                    <div style="background :rgba(59,164,77,1);width : 100%;height : 50px">

                        <div style="display : flex; justify-content: center; align-items: center;width : 100%; height : 100%">

                            <span style="color: white;">Mai</span>

                        </div>

                    </div>
                    <div id="headercalendar">
                        <span id="L" class="jour unselectable">L</span>
                        <span id="M" class="jour unselectable">M</span>
                        <span id="M1" class="jour unselectable">M</span>
                        <span id="j" class="jour unselectable">J</span>
                        <span id="V" class="jour unselectable">V</span>
                        <span id="S" class="jour unselectable">S</span>
                        <span id="D" class="jour unselectable">D</span>
                    </div>
                    <div id="calendarMA" style="display: flex;flex-wrap: wrap;margin-bottom : 50px" >
        




                    </div>

                </div>
                <!-- calendrier -->
                <div class="col l4 s12">

                    <div style="background :rgba(59,164,77,1);width : 100%;height : 50px">

                        <div style="display : flex; justify-content: center; align-items: center;width : 100%; height : 100%">

                            <span style="color: white;">Juin</span>

                        </div>
                        

                    </div>
                    <div id="headercalendar">
                        <span id="L" class="jour unselectable">L</span>
                        <span id="M" class="jour unselectable">M</span>
                        <span id="M1" class="jour unselectable">M</span>
                        <span id="j" class="jour unselectable">J</span>
                        <span id="V" class="jour unselectable">V</span>
                        <span id="S" class="jour unselectable">S</span>
                        <span id="D" class="jour unselectable">D</span>
                    </div>
                    <div id="calendarJU" style="display: flex;flex-wrap: wrap;margin-bottom : 50px" >
        




                    </div>

                </div>



            </div>

            <!-- FIN ROW2 -->

            <div class="row" >
                <!-- calendrier -->
                <div class="col l4 s12">

                    <div style="background : rgba(59,164,77,1);width : 100%;height : 50px">

                        <div style="display : flex; justify-content: center; align-items: center;width : 100%; height : 100%">

                            <span style="color: white;">Juillet</span>

                        </div>


                    </div>
                    <div id="headercalendar">
                        <span id="L" class="jour unselectable">L</span>
                        <span id="M" class="jour unselectable">M</span>
                        <span id="M1" class="jour unselectable">M</span>
                        <span id="j" class="jour unselectable">J</span>
                        <span id="V" class="jour unselectable">V</span>
                        <span id="S" class="jour unselectable">S</span>
                        <span id="D" class="jour unselectable">D</span>
                    </div>
                    <div id="calendarJUILLET" style="display: flex;flex-wrap: wrap;margin-bottom : 50px" >
        




                    </div>

                </div>
                <!-- calendrier -->
                <div class="col l4 s12">

                    <div style="background :rgba(59,164,77,1);width : 100%;height : 50px">

                        <div style="display : flex; justify-content: center; align-items: center;width : 100%; height : 100%">

                            <span style="color: white;">août</span>

                        </div>

                    </div>
                    <div id="headercalendar">
                        <span id="L" class="jour unselectable">L</span>
                        <span id="M" class="jour unselectable">M</span>
                        <span id="M1" class="jour unselectable">M</span>
                        <span id="j" class="jour unselectable">J</span>
                        <span id="V" class="jour unselectable">V</span>
                        <span id="S" class="jour unselectable">S</span>
                        <span id="D" class="jour unselectable">D</span>
                    </div>
                    <div id="calendarAOUT" style="display: flex;flex-wrap: wrap;margin-bottom : 50px" >
        




                    </div>

                </div>
                <!-- calendrier -->
                <div class="col l4 s12">

                    <div style="background :rgba(59,164,77,1);width : 100%;height : 50px">

                        <div style="display : flex; justify-content: center; align-items: center;width : 100%; height : 100%">

                            <span style="color: white;">septembre</span>

                        </div>
                        

                    </div>
                    <div id="headercalendar">
                        <span id="L" class="jour unselectable">L</span>
                        <span id="M" class="jour unselectable">M</span>
                        <span id="M1" class="jour unselectable">M</span>
                        <span id="j" class="jour unselectable">J</span>
                        <span id="V" class="jour unselectable">V</span>
                        <span id="S" class="jour unselectable">S</span>
                        <span id="D" class="jour unselectable">D</span>
                    </div>
                    <div id="calendarSEP" style="display: flex;flex-wrap: wrap;margin-bottom : 50px" >
        




                    </div>

                </div>



            </div>

            <!-- FIN ROW3 -->
            <div class="row" >
                <!-- calendrier -->
                <div class="col l4 s12">

                    <div style="background : rgba(59,164,77,1);width : 100%;height : 50px">

                        <div style="display : flex; justify-content: center; align-items: center;width : 100%; height : 100%">

                            <span style="color: white;">octobre</span>

                        </div>


                    </div>
                    <div id="headercalendar">
                        <span id="L" class="jour unselectable">L</span>
                        <span id="M" class="jour unselectable">M</span>
                        <span id="M1" class="jour unselectable">M</span>
                        <span id="j" class="jour unselectable">J</span>
                        <span id="V" class="jour unselectable">V</span>
                        <span id="S" class="jour unselectable">S</span>
                        <span id="D" class="jour unselectable">D</span>
                    </div>
                    <div id="calendarOC" style="display: flex;flex-wrap: wrap;margin-bottom : 50px" >
        




                    </div>

                </div>
                <!-- calendrier -->
                <div class="col l4 s12">

                    <div style="background :rgba(59,164,77,1);width : 100%;height : 50px">

                        <div style="display : flex; justify-content: center; align-items: center;width : 100%; height : 100%">

                            <span style="color: white;">novembre</span>

                        </div>

                    </div>
                    <div id="headercalendar">
                        <span id="L" class="jour unselectable">L</span>
                        <span id="M" class="jour unselectable">M</span>
                        <span id="M1" class="jour unselectable">M</span>
                        <span id="j" class="jour unselectable">J</span>
                        <span id="V" class="jour unselectable">V</span>
                        <span id="S" class="jour unselectable">S</span>
                        <span id="D" class="jour unselectable">D</span>
                    </div>
                    <div id="calendarNO" style="display: flex;flex-wrap: wrap;margin-bottom : 50px" >
        




                    </div>

                </div>
                <!-- calendrier -->
                <div class="col l4 s12">

                    <div style="background :rgba(59,164,77,1);width : 100%;height : 50px">

                        <div style="display : flex; justify-content: center; align-items: center;width : 100%; height : 100%">

                            <span style="color: white;">décembre</span>

                        </div>
                        

                    </div>
                    <div id="headercalendar">
                        <span id="L" class="jour unselectable">L</span>
                        <span id="M" class="jour unselectable">M</span>
                        <span id="M1" class="jour unselectable">M</span>
                        <span id="j" class="jour unselectable">J</span>
                        <span id="V" class="jour unselectable">V</span>
                        <span id="S" class="jour unselectable">S</span>
                        <span id="D" class="jour unselectable">D</span>
                    </div>
                    <div id="calendarDE" style="display: flex;flex-wrap: wrap;margin-bottom : 50px" >
        




                    </div>

                </div>



            </div>


        </div>


        <!-- fin premiere div -->
    </div>
    





    <script src="calendrier.js"></script>
</body>

</html>