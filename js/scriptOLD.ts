declare var $;

var arrayAll = [];

// super class locations
class Spot {
	public type: string = "Point of Interest";
	constructor(public name: string, public zipCode: number, public address: string, public img: string, public createdDateTime: string, public description: string) {
		arrayAll.push(this);
	}
}

// child class restaurants
class Restaurant extends Spot {
	public type: string = "Restaurant";
	public homepage: string;
	public tel: string;

	constructor(name: string, zipCode: number, address: string, img: string, createdDateTime: string, description: string, homepage: string, tel: string) {
		super(name, zipCode, address, img, createdDateTime, description);
		this.homepage = homepage;
		this.tel = tel;
	}
}

// child class events
class Evnt extends Spot {
	public type: string = "Event";
	public homepage: string;
	public eventDateTime: string;
	public price: number;

	constructor(name: string, zipCode: number, address: string, img: string, createdDateTime: string, description: string, homepage: string, eventDateTime: string, price: number) {
		super(name, zipCode, address, img, createdDateTime, description);
		this.homepage = homepage;
		this.eventDateTime = eventDateTime;
		this.price = price;
	}
}

// descriptions
var stCharlesChurchDescr = `The Rektoratskirche St. Karl Borromäus, commonly called the Karlskirche (English: St. Charles Church), is a baroque church located on the south side of Karlsplatz in Vienna, Austria. Widely considered the most outstanding baroque church in Vienna, as well as one of the city's greatest buildings, the church is dedicated to Saint Charles Borromeo, one of the great counter-reformers of the sixteenth century. Located on the edge of the Innere Stadt, approximately 200 meters outside the Ringstraße, the church contains a dome in the form of an elongated ellipsoid.`;
var zooViennaDescr = `Tiergarten Schönbrunn (literally, "Schönbrunn Animal Garden"), or "Vienna Zoo", is a zoo located on the grounds of the famous Schönbrunn Palace in Vienna, Austria. Founded as an imperial menagerie in 1752, it is the oldest continuously operating zoo in the world. Today, Tiergarten Schönbrunn is considered and regards itself as a scientifically administered zoo which sees its main purpose as a centre for species conservation and general nature conservation as well as in the fulfillment of the education mandate given to it by the legislation. The still preserved buildings of the baroque era, which have been complemented in the last years by elements of modern zoo architecture, still convey a good impression of the 18th century menagerie-buildings after the Versailles model.`;

var lemonLeafDescr = `Das Thai Restaurant ,,Lemon Leaf" heißt Sie Herzlich Willkommen! Die thailändische Esskultur hat eine sehr lange Vorgeschichte und findet ihren Ursprung in China, Indien und Europa. Im Laufe der Jahrhunderte verschmolz diese zu der Küche, so wie wir sie heute kennen. In Thailand legt man sehr großen Wert auf die Gewürze, damit die Gerichte eine Vielfalt an Geschmack anbieten. Und das ist auch der Grund weshalb Feinschmecker der ganzen Welt die thailändische Küche so sehr anpreisen. Die Frische und Vielfalt der Gewürze machen unsere Gerichte zu einem besonderen Erlebnis. Seien Sie nicht schüchtern bei den Bestellungen Ihrer Speisen und probieren Sie neue Gerichte aus. Auf Wunsch können wir die Speisen auch weniger scharf zubereiten, denn die Schärfe ist nicht das Wichtigste bei der Thai-Küche, so wie viele Leute glauben. Oft reicht nur ein bisschen Chili aus um die Speisen noch mehr an Geschmack zu heben. Probieren Sie ebenfalls unsere Nudelsuppen Töpfe, die mit feinsten Gewürzen und einer geschmackreichen Suppe zusammengestellt werden. Das ,,Lemon Leaf" Team wünscht Ihnen nun einen Guten Appetit und beantwortet gerne Ihre Fragen zu den Speisen.`;
var sixtaDescr = `Das Feingefühl zwischen kreativer Küche und einem traditionellen, “wienerischen” Angebot bestimmt unsere Küche. Wir legen größten Wert auf Produkt-qualität, Erzeugungsqualität und best-möglichen Geschmack.Die wechselnde Karte nimmt Rücksicht auf saisonelle Besonderheiten und Schmankerln. Dazu servieren wir Ihnen gepflegte Weine und Getränke… bis zum kräftigen Espresso. Wir wünschen Ihnen eine angnehme Zeit und guten Appetit. Online-Reservierungen sind bis 6 Personen möglich. Ab 7 Personen und mehr bitte telefonisch oder per E-Mail reservieren! Vielen Dank! Online reservations for up to 6 people possible. 7 people and more please reserve by phone or e-mail. Thank you very much!`;

var krisKristoffersonDescr = `Kristoffer Kristofferson (born June 22, 1936) is an American singer-songwriter and actor. Among his songwriting credits are the songs "Me and Bobby McGee", "For the Good Times", "Sunday Mornin' Comin' Down", and "Help Me Make It Through the Night", all of which were hits for other artists. Kristofferson composed his own songs and collaborated with Nashville songwriters such as Shel Silverstein. In 1985, Kristofferson joined fellow country artists Waylon Jennings, Willie Nelson and Johnny Cash in forming the country music supergroup The Highwaymen, and formed a key creative force in the Outlaw country music movement that eschewed the Nashville music machine in favor of independent songwriting and producing. In 2004, Kristofferson was inducted into the Country Music Hall of Fame. He is also known for his starring roles in Alice Doesn't Live Here Anymore, Heaven's Gate, Blade and A Star Is Born, the latter of which earned him a Golden Globe Award for Best Actor.`;
var lennyKravitzDescr = `Leonard Albert Kravitz (born May 26, 1964) is an American singer, songwriter, actor, record producer, and multi-instrumentalist. His "retro" style incorporates elements of rock, blues, soul, R&B, funk, jazz, reggae, hard rock, psychedelic, pop, folk, and ballads. He won the Grammy Award for Best Male Rock Vocal Performance four years in a row from 1999 to 2002, breaking the record for most wins in that category as well as setting the record for most consecutive wins in one category by a male. He has been nominated for and won other awards, including American Music Awards, MTV Video Music Awards, Radio Music Awards, Brit Awards, and Blockbuster Entertainment Awards. He was also ranked number 93 on VH1's 100 Greatest Artists of Hard Rock. On December 1, 2011, Kravitz was made an Officer of the Ordre des Arts et des Lettres. He played Cinna in the Hunger Games film series.`;

// location variables
var stCharlesChurch = new Spot("St. Charles Church", 1010, "Karlsplatz 1", "img/stCharlesChurch.jpg", "04.10.2019 12:45", stCharlesChurchDescr);
var zooVienna = new Spot("Zoo Vienna", 1130, "Maxingstraße 13b", "img/zooVienna.jpg", "01.10.2019 00:45", zooViennaDescr);

// restaurant variables
var lemonLeaf = new Restaurant("Lemon Leaf Thai Restaurant", 1050, "Kettenbrückengasse 19", "img/lemonLeaf.png", "03.10.2019 12:20", lemonLeafDescr, "lemonleaf.at", "+43 1 58 123 08");
var sixta = new Restaurant("Sixta", 1050, "Schönbrunner Straße 21", "img/sixta.png", "03.10.2019 20:15", sixtaDescr, "sixta-restaurant.at", "+43 1 58 528 56");

// event variables
var krisKristofferson = new Evnt("Kris Kristofferson", 1150, "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "img/krisKristofferson.jpg", "05.10.2019 10:00", krisKristoffersonDescr, "kriskristofferson.com", "Fr., 15.11.2019. 20:00", 58.50);
var lennyKravitz = new Evnt("Lenny Kravitz", 1150, "Wiener Stadthalle, Halle D, Roland Rainer Platz 1", "img/lennyKravitz.jpg", "05.10.2019 09:25", lennyKravitzDescr, "lennykravitz.com", "Sat, 09.12.2019 - 19:30", 47.80);

$(document).ready(function() {

	// create nav-link event listeners
	var navLinks = document.getElementsByClassName("nav-link");
	for (let i = 0; i < navLinks.length; i++) {
		let elem = navLinks[i];
		$(elem).on("click", () => {
            updateFilter($(elem).attr("value"));
            for (let j = 0; j < navLinks.length; j++) {
				$(navLinks[j]).removeClass("active");
            }
			$(elem).addClass("active");
        });
	}

	// create items
	function createItems() {
		$(".items").html("");
		for (let i = 0; i < arrayAll.length; i++) {
			$(".items").append(`

	            <div class="card col-12 col-md-6 col-lg-4 p-4" style="display: ${arrayAll[i].display};">
	                <img class="d-none d-md-block" src="${arrayAll[i].img}" class="card-img-top" alt="...">
	                <div class="card-body p-2">
	                    <h5 class="card-title py-2 mb-1 main-color font-size-17">${arrayAll[i].name}<br><small>${arrayAll[i].type}</small></h5>
	                    <span class="text-muted"><small>Created: ${arrayAll[i].createdDateTime}</small></span>
	                    <p class="card-text my-3">${arrayAll[i].description}</p>
	                    <ul id="item-${i}" class="list-group list-group-flush">
	                        <li class="list-group-item px-2"><i class="fa fa-map-marker"></i> ${arrayAll[i].address}, ${arrayAll[i].zipCode} Vienna</li>
	                    </ul>
	                    <div class="card-body">
	                        <a href="#" class="btn btn-outline-dark btn-sm">Click for More</a>
	                    </div>
	                </div>
	            </div>
			`);
			if (arrayAll[i].type == "Restaurant") {
				$(`#item-${i}`).append(`

					<li class="list-group-item px-2"><a href="http://www.${arrayAll[i].homepage}" title="" target="_blank">${arrayAll[i].homepage}</a></li>
					<li class="list-group-item px-2">${arrayAll[i].tel}</li>
				`);
			} else if (arrayAll[i].type == "Event") {
				$(`#item-${i}`).append(`

					<li class="list-group-item px-2"><a href="http://www.${arrayAll[i].homepage}" title="" target="_blank">${arrayAll[i].homepage}</a></li>
					<li class="list-group-item px-2">${arrayAll[i].eventDateTime} | € ${arrayAll[i].price.toFixed(2)}</li>
				`);
			}
		}
	}
	createItems();

	// filter items
	function updateFilter(navLinkValue) {
		for (let item of arrayAll) {
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
	for (let i = 0; i < arrayAll.length; i++) {
		arrayAll[i].defaultIndex = i;
	}
	$(".select").on("click", function() {
		var select = $(this).val();
		arrayAll.sort((a, b) => {
			switch(select) {
				case "ascending":
					if (a.createdDateTime < b.createdDateTime) {
    					return -1;
  					} else if (a.createdDateTime > b.createdDateTime) {
  						return 1;
					}
				case "descending":
					if (a.createdDateTime > b.createdDateTime) {
    					return -1;
  					} else if (a.createdDateTime > b.createdDateTime) {
  						return 1;
					}
				case "default":
					return a.defaultIndex - b.defaultIndex
			}
		});
		createItems();
	});
});
