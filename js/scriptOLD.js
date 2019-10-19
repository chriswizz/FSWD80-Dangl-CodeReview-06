var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var arrayAll = [];
// super class locations
var Spot = /** @class */ (function () {
    function Spot(name, zipCode, address, img, createdDateTime, description) {
        this.name = name;
        this.zipCode = zipCode;
        this.address = address;
        this.img = img;
        this.createdDateTime = createdDateTime;
        this.description = description;
        this.type = "Point of Interest";
        arrayAll.push(this);
    }
    return Spot;
}());
// child class restaurants
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(name, zipCode, address, img, createdDateTime, description, homepage, tel) {
        var _this = _super.call(this, name, zipCode, address, img, createdDateTime, description) || this;
        _this.type = "Restaurant";
        _this.homepage = homepage;
        _this.tel = tel;
        return _this;
    }
    return Restaurant;
}(Spot));
// child class events
var Evnt = /** @class */ (function (_super) {
    __extends(Evnt, _super);
    function Evnt(name, zipCode, address, img, createdDateTime, description, homepage, eventDateTime, price) {
        var _this = _super.call(this, name, zipCode, address, img, createdDateTime, description) || this;
        _this.type = "Event";
        _this.homepage = homepage;
        _this.eventDateTime = eventDateTime;
        _this.price = price;
        return _this;
    }
    return Evnt;
}(Spot));
// descriptions
var stCharlesChurchDescr = "The Rektoratskirche St. Karl Borrom\u00E4us, commonly called the Karlskirche (English: St. Charles Church), is a baroque church located on the south side of Karlsplatz in Vienna, Austria. Widely considered the most outstanding baroque church in Vienna, as well as one of the city's greatest buildings, the church is dedicated to Saint Charles Borromeo, one of the great counter-reformers of the sixteenth century. Located on the edge of the Innere Stadt, approximately 200 meters outside the Ringstra\u00DFe, the church contains a dome in the form of an elongated ellipsoid.";
var zooViennaDescr = "Tiergarten Sch\u00F6nbrunn (literally, \"Sch\u00F6nbrunn Animal Garden\"), or \"Vienna Zoo\", is a zoo located on the grounds of the famous Sch\u00F6nbrunn Palace in Vienna, Austria. Founded as an imperial menagerie in 1752, it is the oldest continuously operating zoo in the world. Today, Tiergarten Sch\u00F6nbrunn is considered and regards itself as a scientifically administered zoo which sees its main purpose as a centre for species conservation and general nature conservation as well as in the fulfillment of the education mandate given to it by the legislation. The still preserved buildings of the baroque era, which have been complemented in the last years by elements of modern zoo architecture, still convey a good impression of the 18th century menagerie-buildings after the Versailles model.";
var lemonLeafDescr = "Das Thai Restaurant ,,Lemon Leaf\" hei\u00DFt Sie Herzlich Willkommen! Die thail\u00E4ndische Esskultur hat eine sehr lange Vorgeschichte und findet ihren Ursprung in China, Indien und Europa. Im Laufe der Jahrhunderte verschmolz diese zu der K\u00FCche, so wie wir sie heute kennen. In Thailand legt man sehr gro\u00DFen Wert auf die Gew\u00FCrze, damit die Gerichte eine Vielfalt an Geschmack anbieten. Und das ist auch der Grund weshalb Feinschmecker der ganzen Welt die thail\u00E4ndische K\u00FCche so sehr anpreisen. Die Frische und Vielfalt der Gew\u00FCrze machen unsere Gerichte zu einem besonderen Erlebnis. Seien Sie nicht sch\u00FCchtern bei den Bestellungen Ihrer Speisen und probieren Sie neue Gerichte aus. Auf Wunsch k\u00F6nnen wir die Speisen auch weniger scharf zubereiten, denn die Sch\u00E4rfe ist nicht das Wichtigste bei der Thai-K\u00FCche, so wie viele Leute glauben. Oft reicht nur ein bisschen Chili aus um die Speisen noch mehr an Geschmack zu heben. Probieren Sie ebenfalls unsere Nudelsuppen T\u00F6pfe, die mit feinsten Gew\u00FCrzen und einer geschmackreichen Suppe zusammengestellt werden. Das ,,Lemon Leaf\" Team w\u00FCnscht Ihnen nun einen Guten Appetit und beantwortet gerne Ihre Fragen zu den Speisen.";
var sixtaDescr = "Das Feingef\u00FChl zwischen kreativer K\u00FCche und einem traditionellen, \u201Cwienerischen\u201D Angebot bestimmt unsere K\u00FCche. Wir legen gr\u00F6\u00DFten Wert auf Produkt-qualit\u00E4t, Erzeugungsqualit\u00E4t und best-m\u00F6glichen Geschmack.Die wechselnde Karte nimmt R\u00FCcksicht auf saisonelle Besonderheiten und Schmankerln. Dazu servieren wir Ihnen gepflegte Weine und Getr\u00E4nke\u2026 bis zum kr\u00E4ftigen Espresso. Wir w\u00FCnschen Ihnen eine angnehme Zeit und guten Appetit. Online-Reservierungen sind bis 6 Personen m\u00F6glich. Ab 7 Personen und mehr bitte telefonisch oder per E-Mail reservieren! Vielen Dank! Online reservations for up to 6 people possible. 7 people and more please reserve by phone or e-mail. Thank you very much!";
var krisKristoffersonDescr = "Kristoffer Kristofferson (born June 22, 1936) is an American singer-songwriter and actor. Among his songwriting credits are the songs \"Me and Bobby McGee\", \"For the Good Times\", \"Sunday Mornin' Comin' Down\", and \"Help Me Make It Through the Night\", all of which were hits for other artists. Kristofferson composed his own songs and collaborated with Nashville songwriters such as Shel Silverstein. In 1985, Kristofferson joined fellow country artists Waylon Jennings, Willie Nelson and Johnny Cash in forming the country music supergroup The Highwaymen, and formed a key creative force in the Outlaw country music movement that eschewed the Nashville music machine in favor of independent songwriting and producing. In 2004, Kristofferson was inducted into the Country Music Hall of Fame. He is also known for his starring roles in Alice Doesn't Live Here Anymore, Heaven's Gate, Blade and A Star Is Born, the latter of which earned him a Golden Globe Award for Best Actor.";
var lennyKravitzDescr = "Leonard Albert Kravitz (born May 26, 1964) is an American singer, songwriter, actor, record producer, and multi-instrumentalist. His \"retro\" style incorporates elements of rock, blues, soul, R&B, funk, jazz, reggae, hard rock, psychedelic, pop, folk, and ballads. He won the Grammy Award for Best Male Rock Vocal Performance four years in a row from 1999 to 2002, breaking the record for most wins in that category as well as setting the record for most consecutive wins in one category by a male. He has been nominated for and won other awards, including American Music Awards, MTV Video Music Awards, Radio Music Awards, Brit Awards, and Blockbuster Entertainment Awards. He was also ranked number 93 on VH1's 100 Greatest Artists of Hard Rock. On December 1, 2011, Kravitz was made an Officer of the Ordre des Arts et des Lettres. He played Cinna in the Hunger Games film series.";
// location variables
var stCharlesChurch = new Spot("St. Charles Church", 1010, "Karlsplatz 1", "img/stCharlesChurch.jpg", "04.10.2019 12:45", stCharlesChurchDescr);
var zooVienna = new Spot("Zoo Vienna", 1130, "Maxingstraße 13b", "img/zooVienna.jpg", "01.10.2019 00:45", zooViennaDescr);
// restaurant variables
var lemonLeaf = new Restaurant("Lemon Leaf Thai Restaurant", 1050, "Kettenbrückengasse 19", "img/lemonLeaf.png", "03.10.2019 12:20", lemonLeafDescr, "lemonleaf.at", "+43 1 58 123 08");
var sixta = new Restaurant("Sixta", 1050, "Schönbrunner Straße 21", "img/sixta.png", "03.10.2019 20:15", sixtaDescr, "sixta-restaurant.at", "+43 1 58 528 56");
// event variables
var krisKristofferson = new Evnt("Kris Kristofferson", 1150, "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "img/krisKristofferson.jpg", "05.10.2019 10:00", krisKristoffersonDescr, "kriskristofferson.com", "Fr., 15.11.2019. 20:00", 58.50);
var lennyKravitz = new Evnt("Lenny Kravitz", 1150, "Wiener Stadthalle, Halle D, Roland Rainer Platz 1", "img/lennyKravitz.jpg", "05.10.2019 09:25", lennyKravitzDescr, "lennykravitz.com", "Sat, 09.12.2019 - 19:30", 47.80);
$(document).ready(function () {
    // create nav-link event listeners
    var navLinks = document.getElementsByClassName("nav-link");
    var _loop_1 = function (i) {
        var elem = navLinks[i];
        $(elem).on("click", function () {
            updateFilter($(elem).attr("value"));
            for (var j = 0; j < navLinks.length; j++) {
                $(navLinks[j]).removeClass("active");
            }
            $(elem).addClass("active");
        });
    };
    for (var i = 0; i < navLinks.length; i++) {
        _loop_1(i);
    }
    // create items
    function createItems() {
        $(".items").html("");
        for (var i = 0; i < arrayAll.length; i++) {
            $(".items").append("\n\n\t            <div class=\"card col-12 col-md-6 col-lg-4 p-4\" style=\"display: " + arrayAll[i].display + ";\">\n\t                <img class=\"d-none d-md-block\" src=\"" + arrayAll[i].img + "\" class=\"card-img-top\" alt=\"...\">\n\t                <div class=\"card-body p-2\">\n\t                    <h5 class=\"card-title py-2 mb-1 main-color font-size-17\">" + arrayAll[i].name + "<br><small>" + arrayAll[i].type + "</small></h5>\n\t                    <span class=\"text-muted\"><small>Created: " + arrayAll[i].createdDateTime + "</small></span>\n\t                    <p class=\"card-text my-3\">" + arrayAll[i].description + "</p>\n\t                    <ul id=\"item-" + i + "\" class=\"list-group list-group-flush\">\n\t                        <li class=\"list-group-item px-2\"><i class=\"fa fa-map-marker\"></i> " + arrayAll[i].address + ", " + arrayAll[i].zipCode + " Vienna</li>\n\t                    </ul>\n\t                    <div class=\"card-body\">\n\t                        <a href=\"#\" class=\"btn btn-outline-dark btn-sm\">Click for More</a>\n\t                    </div>\n\t                </div>\n\t            </div>\n\t\t\t");
            if (arrayAll[i].type == "Restaurant") {
                $("#item-" + i).append("\n\n\t\t\t\t\t<li class=\"list-group-item px-2\"><a href=\"http://www." + arrayAll[i].homepage + "\" title=\"\" target=\"_blank\">" + arrayAll[i].homepage + "</a></li>\n\t\t\t\t\t<li class=\"list-group-item px-2\">" + arrayAll[i].tel + "</li>\n\t\t\t\t");
            }
            else if (arrayAll[i].type == "Event") {
                $("#item-" + i).append("\n\n\t\t\t\t\t<li class=\"list-group-item px-2\"><a href=\"http://www." + arrayAll[i].homepage + "\" title=\"\" target=\"_blank\">" + arrayAll[i].homepage + "</a></li>\n\t\t\t\t\t<li class=\"list-group-item px-2\">" + arrayAll[i].eventDateTime + " | \u20AC " + arrayAll[i].price.toFixed(2) + "</li>\n\t\t\t\t");
            }
        }
    }
    createItems();
    // filter items
    function updateFilter(navLinkValue) {
        for (var _i = 0, arrayAll_1 = arrayAll; _i < arrayAll_1.length; _i++) {
            var item = arrayAll_1[_i];
            item.display = "none";
            switch (navLinkValue) {
                case "All":
                    item.display = "block";
                    break;
                case item.type:
                    item.display = "block";
                    break;
            }
        }
        createItems();
    }
    // sort items
    for (var i = 0; i < arrayAll.length; i++) {
        arrayAll[i].defaultIndex = i;
    }
    $(".select").on("click", function () {
        var select = $(this).val();
        arrayAll.sort(function (a, b) {
            switch (select) {
                case "ascending":
                    if (a.createdDateTime < b.createdDateTime) {
                        return -1;
                    }
                    else if (a.createdDateTime > b.createdDateTime) {
                        return 1;
                    }
                case "descending":
                    if (a.createdDateTime > b.createdDateTime) {
                        return -1;
                    }
                    else if (a.createdDateTime > b.createdDateTime) {
                        return 1;
                    }
                case "default":
                    return a.defaultIndex - b.defaultIndex;
            }
        });
        createItems();
    });
});
