
burgerMenu: function () {
    //materialize function for burger menu in the navbar
    $('.sidenav').sidenav();
};
selectOptions: function () {
    $('select').formSelect();
};
selectBirthDate: function () {
    //trouvé sur https://codepen.io/dakila/pen/GxbxGB
    var currYear = (new Date()).getFullYear();
    $('.datebirthpicker').datepicker({
        defaultDate: currYear - 18,
        format: "dd mmm yyyy",
        yearRange: [1930, currYear - 18],
        i18n: {
            months: ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jui", "Aoû", "Sep", "Oct", "Nov", "Déc"],
            monthsShort: ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jui", "Aoû", "Sep", "Oct", "Nov", "Déc"],
            weekdays: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
            weekdaysShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
            weekdaysAbbrev: ["D", "L", "M", "M", "J", "V", "S"]
        }
    })
};
selectGameDate() {
    var currYear = (new Date()).getFullYear();
    $('.dategamepicker').datepicker({
        yearRange: [currYear, currYear + 1],
        format: "dd mmm yyyy",
        i18n: {
            months: ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jui", "Aoû", "Sep", "Oct", "Nov", "Déc"],
            monthsShort: ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jui", "Aoû", "Sep", "Oct", "Nov", "Déc"],
            weekdays: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
            weekdaysShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
            weekdaysAbbrev: ["D", "L", "M", "M", "J", "V", "S"]
        }
    });
};
selectTime: function () {
    $('.timepicker').timepicker();
};
carouselSlider: function () {
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });
};
