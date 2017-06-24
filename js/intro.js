$(function ($) {
    $(window).ready(function () {
        // ANIMATION ARROW ECRAN ACCUEIL
        $(".home .menu-home li:first-child a").delay(480).addClass('active').queue(function () {
            $(".home .menu-home li:first-child a").removeClass('active');
            $(".home .menu-home li:nth-child(2) a").delay(480).addClass('active').queue(function () {
                $(".home .menu-home li:nth-child(2) a").removeClass('active');
                $(".home .menu-home li:last-child a").delay(480).addClass('active').queue(function () {
                    $(".home .menu-home li:last-child a").removeClass('active');
                    $(".home .menu-home li:first-child a").addClass('active');
                });
            });
        });

        // ANIMATION ARROW ECRAN2 MAP
        setTimeout(function () {
            $("#map ul > li:first-child").delay(1100).addClass('active').queue(function () {
                $("#map ul > li:first-child").removeClass('active');
                $("#map ul > li:nth-child(2)").delay(1300).addClass('active').queue(function () {
                    $("#map ul > li:nth-child(2)").removeClass('active');
                    $("#map ul > li:first-child").addClass('active');
                });
            });
        }, 9000);

        // ANIMATION ARROW ECRAN2 SPE
        setTimeout(function () {
            $(".etape_2_specialites section.spes ul > li:first-child").delay(1500).addClass('active').queue(function () {
                $(".etape_2_specialites section.spes ul > li:first-child").removeClass('active');
                $(".etape_2_specialites section.spes ul > li:nth-child(2)").delay(1500).addClass('active').queue(function () {
                    $(".etape_2_specialites section.spes ul > li:nth-child(2)").removeClass('active');
                    $(".etape_2_specialites section.spes ul > li:nth-child(3)").delay(1500).addClass('active').queue(function () {
                        $(".etape_2_specialites section.spes ul > li:nth-child(3)").removeClass('active');
                        $(".etape_2_specialites section.spes ul > li:first-child").addClass('active');
                    });
                });
            });
        }, 14000);
        // ANIMATION ARROW ECRAN2 LEVEL
        setTimeout(function () {
            $(".etape_2_levels section.levels .fleche-container-level:first-child .fleche-pixel-level").delay(650).addClass('active').queue(function () {
                $(".etape_2_levels section.levels .fleche-container-level:first-child .fleche-pixel-level").removeClass('active');
                $(".etape_2_levels section.levels .fleche-container-level:nth-child(2) .fleche-pixel-level").delay(350).addClass('active').queue(function () {
                    $(".etape_2_levels section.levels .fleche-container-level:nth-child(2) .fleche-pixel-level").removeClass('active');
                    $(".etape_2_levels section.levels .fleche-container-level:nth-child(3) .fleche-pixel-level").delay(550).addClass('active').queue(function () {
                        $(".etape_2_levels section.levels .fleche-container-level:nth-child(3) .fleche-pixel-level").removeClass('active');
                        $(".etape_2_levels section.levels .fleche-container-level:nth-child(2) .fleche-pixel-level").addClass('active');
                    });
                });
            });
        }, 23500);
    });
});