$(function ($) {
    $(window).ready(function () {

        // ANIMATION cadenas PROGRESS BAR
        $(".fleche-container:first-child .fleche-pixel .cadenas").delay(5000).addClass('deverouille').queue(function () {
            $(".fleche-container:nth-child(2) .fleche-pixel .cadenas").delay(19000).addClass('deverouille').queue(function () {
                $(".fleche-container:nth-child(3) .fleche-pixel .cadenas").delay(19000).addClass('deverouille').queue(function () {
                    $(".fleche-container:nth-child(4) .fleche-pixel .cadenas").delay(8000).addClass('deverouille').queue(function () {
                        $(".fleche-container:last-child .fleche-pixel .cadenas").delay(8000).addClass('deverouille').queue(function () {
                        });
                    });
                });
            });
        });
        // ANIMATION TEXTE LEVEL PROGRESS BAR
        $(".fleche-container:first-child .fleche-pixel h2").delay(3000).addClass('level').queue(function () {
            $(".fleche-container:nth-child(2) .fleche-pixel h2").delay(19000).addClass('level').queue(function () {
                $(".fleche-container:nth-child(3) .fleche-pixel h2").delay(19000).addClass('level').queue(function () {
                    $(".fleche-container:nth-child(4) .fleche-pixel h2").delay(8000).addClass('level').queue(function () {
                        $(".fleche-container:last-child .fleche-pixel h2").delay(8000).addClass('level').queue(function () {
                        });
                    });
                });
            });
        });

        // VISIBILITE SCENE 1
        // setTimeout(function(){
        //     $(".scene1").addClass('.activeScene');
        // }, 21150);

        // VISIBILITE SCENE 1 (A MODIFIER)
        setTimeout(function () {
            $(".scene1").addClass('activeScene');
            $(".progressBar").addClass('activeScene');
        }, 2000);
        // VISIBILITE SCENE 2 (A MODIFIER)
        setTimeout(function () {
            $(".scene2").addClass('activeScene');
            $(".ProgressBar").addClass('activeScene');
        }, 20000);
        // VISIBILITE SCENE 3 (A MODIFIER)
        setTimeout(function () {
            $(".scene3").addClass('activeScene');
            $(".ProgressBar").addClass('activeScene');
        }, 39000);
        setTimeout(function () {
            $(".scene4").addClass('activeScene');
            $(".ProgressBar").addClass('activeScene');
        }, 66000);


        // ANIMATION ETOILES

        // Affichage du texte en grand situé dans les etoiles

        function textPulse() {
            console.log("function text");
            $(".textAnimate").addClass('active');
            var textAnimate = $(".star.speed > span").html();
            $(".textAnimate > h3").append(textAnimate);
            $(".star.speed > span").css("display", "none");
        };

        // Lancement des animations sur les étoiles dans le décor 1
        setTimeout(function () {

            // ajout animation départ étoile vers le haut etoile 1
            $("#html").addClass('speed').delay(1000).queue(function () {
                // Affichage de la matière concernée etoile 1
                textPulse();
                $("#html").removeClass('speed');

                setTimeout(function () {
                    //Suppression du texte etoile 1 pour pouvoir le réinjecté plus tard
                    $(".textAnimate h3").empty();
                    //Supression du fond de l'affichage du texte au pulse etoile 1
                    $(".textAnimate").removeClass('active');

                    // ajout animation départ étoile vers le haut etoile 2
                    $("#java").addClass('speed').delay(1000).queue(function () {

                        // Affichage de la matière concernée etoile 2
                        textPulse();
                        $("#java").removeClass('speed');
                        setTimeout(function () {
                            //Suppression du texte etoile 2 pour pouvoir le réinjecté plus tard
                            $(".textAnimate h3").empty();
                            $(".textAnimate").removeClass('active');

                            // ajout animation départ étoile vers le haut etoile 3
                            $("#php").addClass('speed').delay(1000).queue(function () {

                                // Affichage de la matière concernée etoile 3
                                textPulse();
                                $("#php").removeClass('speed');
                            });
                        }, 1300);
                    });
                }, 3300);
            });
        }, 9000);

        // Lancement des animations sur les étoiles dans le DECOR 2
        setTimeout(function () {

            $(".textAnimate h3").empty();
            $(".textAnimate").removeClass('active');

            // ajout animation départ étoile vers le haut etoile 1
            $("#cyber").addClass('speed').delay(1000).queue(function () {

                // Affichage de la matière concernée etoile 1
                textPulse();
                $("#cyber").removeClass('speed');

                /*setTimeout(function () {

                    //Suppression du texte etoile 1 pour pouvoir le réinjecté plus tard
                    $(".textAnimate h3").empty();

                    //Supression du fond de l'affichage du texte au pulse etoile 1
                    $(".textAnimate").removeClass('active');

                    // ajout animation départ étoile vers le haut etoile 2
                    $("#data").addClass('speed').delay(1000).queue(function () {

                        // Affichage de la matière concernée etoile 2
                        textPulse();
                        $("#data").removeClass('speed');

                        setTimeout(function () {

                            $(".textAnimate h3").empty();
                            $(".textAnimate").removeClass('active');

                            // ajout animation départ étoile vers le haut etoile 3
                            $("#proj").addClass('speed').delay(1000).queue(function () {

                                // Affichage de la matière concernée etoile 3
                                textPulse();
                                $("#proj").removeClass('speed');
                            });
                        }, 1300);
                    });
                }, 3300);*/
            });
        }, 32000);

        // Lancement des animations sur les étoiles dans le DECOR 3
        setTimeout(function () {

            $(".textAnimate h3").empty();
            $(".textAnimate").removeClass('active');

            // ajout animation départ étoile vers le haut etoile 1
            $("#ent").addClass('speed').delay(1000).queue(function () {
                // Affichage de la matière concernée etoile 1
                textPulse();
                $("#ent").removeClass('speed');

                setTimeout(function () {
                    //Suppression du texte etoile 1 pour pouvoir le réinjecté plus tard
                    $(".textAnimate h3").empty();
                    //Supression du fond de l'affichage du texte au pulse etoile 1
                    $(".textAnimate").removeClass('active');

                    // ajout animation départ étoile vers le haut etoile 2
                    $("#strat").addClass('speed').delay(1000).queue(function () {

                        // Affichage de la matière concernée etoile 2
                        textPulse();
                        $("#strat").removeClass('speed');
                    });
                }, 3100);
            });
        }, 46800);


        // ANIMATION COUPE ET DIPLOME
        setTimeout(function () {
            $(".coupe-content").css("display","block");
            setTimeout(function () {
                $(".coupe, .diplome").addClass('speedC');
            }, 6000);
            setTimeout(function () {
                $(".coupe").addClass('opacityCoupe');
            }, 8000);
            setTimeout(function () {
                $(".diplome").addClass('opacityDiplome');
            }, 9000);
            setTimeout(function () {
                $(".diplome").addClass('opacityDiplome2');
            }, 13000);
        }, 69500)

    });
});