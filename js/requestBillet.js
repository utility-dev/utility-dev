/*
  Jquery Validation using jqBootstrapValidation
   example is taken from jqBootstrapValidation docs 
  */
 
function testa() {
	
			var data =[]
            var villeDepart = $("div.w3ls-requestAVForm input#planeInputDepart").val();
			var VilleArrive = $("div.w3ls-requestAVForm input#planeInputArrive").val();
			var datepickerDepart = $("div.w3ls-requestAVForm input#datepicker").val();
			var datepickerArrive = $("div.w3ls-requestAVForm input#datepicker1").val();
			var departAsTab = datepickerDepart.split("/");
			var arriveAsTab = datepickerArrive.split("/");
			var depart = "".concat(departAsTab[2],"-", departAsTab[0], "-",  departAsTab[1]);
			var arrive = "".concat(arriveAsTab[2],"-", arriveAsTab[0], "-",  arriveAsTab[1]);
			var type = "Avion";
            // Check for white space in code for Success/Fail message
            
            $.ajax({
                url: "https://tsoumbou.pythonanywhere.com/api/request/".concat(villeDepart,"/",VilleArrive,"/",depart,"/",arrive,"/",type),
                dataType: "json",
                cache: false,
                success: function(d) {
					data = d
					console.log("retrieve bille successfully");

                },
                error: function() {
                    console.log("cannot retrieve bille ");
                    
                },
            });
			
			//prefixes of implementation that we want to test
         window.indexedDB = window.indexedDB || window.mozIndexedDB || 
         window.webkitIndexedDB || window.msIndexedDB;
         
         //prefixes of window.IDB objects
         window.IDBTransaction = window.IDBTransaction || 
         window.webkitIDBTransaction || window.msIDBTransaction;
         window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || 
         window.msIDBKeyRange
         
         if (!window.indexedDB) {
            window.alert("Your browser doesn't support a stable version of IndexedDB.")
         }
         
         var db;
         var request = window.indexedDB.open("requestBillet", 1);
         
         request.onerror = function(event) {
            console.log("error: ");
         };
         
         request.onsuccess = function(event) {
            db = request.result;
            console.log("success: "+ db);
			var objectStore = db.transaction(["requestBillet"], "readwrite").objectStore("requestBillet");
			objectStore.clear;
			objectStore.add({ id: "00-03", name: "Kenny", age: 19, email: "kenny@planet.org" });
			console.log(data)
            for (var i in data) {
               objectStore.put(data[i]);
            }
         };
         
         request.onupgradeneeded = function(event) {
            var db = event.target.result;
            var objectStore = db.createObjectStore("requestBillet");
            objectStore.clear();
            for (var i in data) {
               objectStore.add(data[i]);
            }
         }
			
        

    
}


var countries = [
      	"Libreville",
	"Port-Gentil",
	"Mouila",
	"Lambaréné",
	"Franceville",
	"Oyem",
	"Lebamba",
	"Bongolo",
	"Bitam",
	"Mayumba",
	"Paris",
	"Koulamoutou",
	"Mouanda",
	"Bitam",
	"Makokou",
	"Ntoum",
	"Kango",
	"Tchibanga",
	"Tsogni",
	"Gamba",
	"Mounana",
	"Okondja",
	"Ndendé",
	"Booué",
	"Fougamou",
	"Ndjolé",
	"Lastourville",
	"Mitzic",
	"Mékambo",
	"Lékoni",
	"Mimongo",
	"Minvoul",
	"Mbigou",
	"Medouneu",
	"Omboué",
	"Cocobeach",
        "Omboué",
	"Abou Dabi",
	"Abuja",
	"Accra",
	"Achgabat",
	"Addis-Abeba",
	"Alger",
	"Alofi",
	"Amman",
	"Amsterdam",
	"Andorre-la-Vieille",
	"Ankara",
	"Antananarivo",
	"Apia",
	"Asmara",
	"Asuncion",
	"Athènes",
	"Avarua",
	"Bagdad",
	"Bakou",
	"Bamako",
	"Bandar Seri Begawan",
	"Bangkok",
	"Bangui",
	"Banjul",
	"Basseterre",
	"Belgrade",
	"Belmopan",
	"Berlin",
	"Berne (capitale de facto)3",
	"Beyrouth",
	"Bichkek",
	"Bissau",
	"Bloemfontein (capitale judiciaire)4",
	"Bogota",
	"Brasilia",
	"Bratislava",
	"Brazzaville",
	"Bridgetown",
	"Bruxelles",
	"Bucarest",
	"Budapest",
	"Buenos Aires",
	"Le Caire",
	"Canberra",
	"Le Cap (capitale législative)4",
	"Caracas",
	"Castries",
	"Chisinau",
	"Sri Jayawardenapura Kotte (administrative et législative)5",
	"Conakry",
	"Copenhague",
	"Dakar",
	"Damas",
	"Delap-Uliga-Darrit (Majuro)6",
	"Dacca",
	"Dili",
	"Djibouti",
	"Djoubanote 1",
	"Dodoma",
	"Doha",
	"Douchanbé",
	"Dublin",
	"Erevan",
	"Freetown",
	"Funafuti (Vaiaku)7",
	"Gaborone",
	"Georgetown",
	"Gitega",
	"Guatemala",
	"Hanoï",
	"Harare",
	"La Havane",
	"Helsinki",
	"Honiara",
	"Islamabad",
	"Jakarta",
	"Jérusalem (contesté au profit de Tel-aviv)note 2",
	"Ramallah (capitale proclamée : Jérusalem-est)note 3",
	"Kaboul",
	"Kampala",
	"Katmandou",
	"Khartoum",
	"Kiev",
	"Kigali",
	"Kingston",
	"Kingstown",
	"Kinshasa",
	"Melekeok24",
	"Koweït",
	"Kuala Lumpur25",
	"Lilongwe",
	"Lima",
	"Lisbonne",
	"Ljubljana",
	"Lomé",
	"Londres",
	"Luanda",
	"Lusaka",
	"Luxembourg",
	"Madrid",
	"Malabo",
	"Malé",
	"Managua",
	"Manama",
	"Manille",
	"Maputo",
	"Mascate",
	"Maseru",
	"Mbabane",
	"Mexico",
	"Minsk",
	"Mogadiscio (Muqdisho26)",
	"Monaco",
	"Monrovia",
	"Montevideo",
	"Moroni",
	"Moscou",
	"Nairobi",
	"Nassau",
	"Naypyidaw 27",
	"N'Djaména",
	"New Delhi",
	"Niamey",
	"Nicosie",
	"Nouakchott",
	"Noursoultan28",
	"Nuku alofa",
	"Oslo",
	"Ottawa",
	"Ouagadougou",
	"Oulan-Bator",
	"Palikir",
	"Panama",
	"Paramaribo",
	"Paris",
	"La Paz (gouvernement et ambassades)29",
	"Pékin",
	"Phnom Penh",
	"Podgorica",
	"Port Moresby",
	"Port-au-Prince",
	"Port-d'Espagne",
	"Port-Louis",
	"Porto-Novo (administrative)30",
	"Port-Vila",
	"Prague",
	"Praia",
	"Pretoria (capitale administrative)4",
	"Putrajaya (capitale administrative)25",
	"Pyongyang",
	"Quito",
	"Rabat",
	"Ramallah (capitale de facto)note 3",
	"Reykjavik",
	"Riga",
	"Riyad",
	"Rome",
	"Roseau",
	"Saint John's",
	"Saint-Domingue",
	"Saint-Georges",
	"Saint-Marin",
	"San José",
	"San Salvador",
	"Sanaa",
	"Santiago",
	"São Tomé",
	"Sarajevo",
	"Séoul",
	"Singapour",
	"Skopje",
	"Sofia",
	"Stockholm",
	"Sucre (constitutionnelle)29",
	"Suva",
	"Tachkent",
	"Tallinn",
	"Tarawa-Sud31",
	"Tbilissi",
	"Tegucigalpa",
	"Téhéran",
	"Thimphou",
	"Tirana",
	"Tokyo",
	"Tripoli",
	"Tunis",
	"Vaduz",
	"La Valette",
	"Varsovie",
	"Cité du Vatican",
	"Victoria",
	"Vienne",
	"Vientiane",
	"Vilnius",
	"Washington D.C.",
	"Wellington",
	"Windhoek",
	"Yamoussoukro32",
	"Yaoundé",
	"Yaren",
	"Zagreb"
    ];
