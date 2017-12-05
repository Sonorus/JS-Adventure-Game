var Keystone1 = false;
var Keystone2 = false;
var Keystone3 = false;

function level1() {
	document.getElementById('text').innerHTML ='Je bent geland op de planeet. Verderop zie je een treinspoor';	
	document.body.style.background="url('img/lvl1.jpg')";
	document.body.style.backgroundSize='cover';
	document.getElementById('knop1').style.display="none";
	document.getElementById('knop2a').style.display="block";
	document.getElementById('knop2b').style.display="block";
	document.getElementById('keystone1').style.display="none";
	document.getElementById('keystone2').style.display="none";
	document.getElementById('keystone3').style.display="none";

	console.log("Level 1!")
}

function beneden() {
	document.getElementById('text').innerHTML ='Hier lijkt niks te halen. Kijk nog een keer goed om je heen.';
	document.body.style.background="url('img/beneden.jpg')";
	document.body.style.backgroundSize='cover';
	document.getElementById('knop1').style.display="none";
	document.getElementById('knop2a').style.display="block";
	document.getElementById('knop2b').style.display="none";
	document.getElementById('knop3').style.display="none";
	document.getElementById('spark').innerHTML = "<img src='img/spark.png' alt='Spark' />";
	document.getElementById('spark').style.display="block";
	document.getElementById('keystone1').style.display="none";
	document.getElementById('keystone2').style.display="none";
	document.getElementById('keystone3').style.display="none";

		document.getElementById('spark').onclick = function(){
			document.getElementById('spark').style.display="none";
			document.getElementById('keystone1').innerHTML = "<img src='img/key1.png' alt='Keystone 1' />";
			document.getElementById('keystone1').style.display="block";

			console.log("Je hebt iets ontdekt")
		}

		document.getElementById('keystone1').onclick = function(){
			document.getElementById('keystone1').style.display="none";
			alert("Je hebt de eerste Keystone!")
			Keystone1 = true;
			console.log("Je hebt de 1e keystone!")
		}
}



function level2() {
	document.getElementById('text').innerHTML ='Je bent aangekomen bij het kamp van een oude bekende. Ga langs om te praten';	
	document.body.style.background="url('img/lvl2.jpg')";
	document.body.style.backgroundSize='cover';
	document.getElementById('knop1').style.display="none";
	document.getElementById('knop2a').style.display="none";
	document.getElementById('knop2b').style.display="none";
	document.getElementById('knop3').style.display="block";

	console.log("Level 2!")
}

function level3() {
	document.getElementById('text').innerHTML ='Bij aankomst vertelt Commander Snaaf dat ze net zijn aangevallen. Het kamp is verwoest en alle members zijn vermoord. Hij heeft de steen waar de vijand voor kwam geheim gehouden en geeft het mee.';	
	document.body.style.background="url('img/lvl3.jpg')";
	document.body.style.backgroundSize='cover';
	document.getElementById('knop1').style.display="none";
	document.getElementById('knop2a').style.display="none";
	document.getElementById('knop2b').style.display="none";
	document.getElementById('knop3').style.display="none";
	document.getElementById('knop4').style.display="block";
	document.getElementById('keystone2').innerHTML = "<img src='img/key2.png' alt='Keystone 2' />";
	document.getElementById('keystone2').style.display="block";

		document.getElementById('keystone2').onclick = function(){
			document.getElementById('keystone2').style.display="none";
			alert("Je hebt de tweede Keystone!")
			Keystone2 = true;
			console.log("Je hebt de 2e keystone")
		}

	console.log("Level 3!")
}

function level4() {
	document.getElementById('text').innerHTML ='Welke kant ga je op?';	
	document.body.style.background="url('img/lvl4.jpg')";
	document.body.style.backgroundSize='cover';
	document.getElementById('knop1').style.display="none";
	document.getElementById('knop2a').style.display="none";
	document.getElementById('knop2b').style.display="none";
	document.getElementById('knop3').style.display="none";
	document.getElementById('knop4').style.display="none";
	document.getElementById('knop5a').style.display="block";
	document.getElementById('knop5b').style.display="none";
	document.getElementById('knop6a').style.display="block";
	document.getElementById('keystone2').style.display="none";

	console.log("Level 4!")
}

function level5() {
	document.getElementById('text').innerHTML ='Je bent richting het westen gegaan. Je komt aan in bij een grot. Het voelt duister en koud.'
	document.body.style.background="url('img/west.jpg')";
	document.body.style.backgroundSize='cover';
	document.getElementById('knop1').style.display="none";
	document.getElementById('knop2a').style.display="none";
	document.getElementById('knop2b').style.display="none";
	document.getElementById('knop3').style.display="none";
	document.getElementById('knop4').style.display="none";
	document.getElementById('knop5a').style.display="none";
	document.getElementById('knop5b').style.display="block";
	document.getElementById('knop5c').style.display="none";
	document.getElementById('knop5d').style.display="none";
	document.getElementById('knop6').style.display="none";
	document.getElementById('keystone2').style.display="none";
}

function lvl5boss() {
	document.getElementById('text').innerHTML ='Je treft de boze Hutt Anreb aan! Je kunt niet ontkomen en gaat het gevecht aan.'
	document.body.style.background="url('img/west2a.jpg')";
	document.body.style.backgroundSize='cover';
	document.getElementById('knop1').style.display="none";
	document.getElementById('knop2a').style.display="none";
	document.getElementById('knop2b').style.display="none";
	document.getElementById('knop3').style.display="none";
	document.getElementById('knop4').style.display="none";
	document.getElementById('knop5a').style.display="none";
	document.getElementById('knop5b').style.display="none";
	document.getElementById('knop5c').style.display="block";
	document.getElementById('knop5d').style.display="block";
	document.getElementById('knop6').style.display="none";
	document.getElementById('keystone2').style.display="none";
}

function anrebwin() {
	document.getElementById('text').innerHTML ='Je hebt Anreb gedood! Bij het verslaan van de woeste Anreb heb je de kracht van het portaal erbij gekregen.'
	document.body.style.background="url('img/enrabdead.jpg')";
	document.body.style.backgroundSize='cover';
	document.getElementById('knop1').style.display="none";
	document.getElementById('knop2a').style.display="none";
	document.getElementById('knop2b').style.display="none";
	document.getElementById('knop3').style.display="none";
	document.getElementById('knop4').style.display="none";
	document.getElementById('knop5a').style.display="none";
	document.getElementById('knop5b').style.display="none";
	document.getElementById('knop5c').style.display="none";
	document.getElementById('knop5d').style.display="none";
	document.getElementById('knop5e').style.display="block";
	document.getElementById('knop6').style.display="none";
	document.getElementById('keystone2').style.display="none";
}

function anrebfail() {
	document.getElementById('text').innerHTML ='Je hebt gefaald, je bent dood. Druk op F5 om opnieuw te beginnen'
	document.body.style.background="url('img/dood.jpg')";
	document.body.style.backgroundSize='cover';
	document.getElementById('knop1').style.display="none";
	document.getElementById('knop2a').style.display="none";
	document.getElementById('knop2b').style.display="none";
	document.getElementById('knop3').style.display="none";
	document.getElementById('knop4').style.display="none";
	document.getElementById('knop5a').style.display="none";
	document.getElementById('knop5b').style.display="none";
	document.getElementById('knop5c').style.display="none";
	document.getElementById('knop5d').style.display="none";
	document.getElementById('knop5e').style.display="none";
	document.getElementById('knop6').style.display="none";
	document.getElementById('keystone2').style.display="none";
}

function level6a() {
	document.getElementById('text').innerHTML ='Je komt aan bij een portaal wat nog niet geopend is. Keer later terug om verder te gaan'
	document.body.style.background="url('img/zuid.jpg')";
	document.body.style.backgroundSize='cover';
	document.getElementById('knop1').style.display="none";
	document.getElementById('knop2a').style.display="none";
	document.getElementById('knop2b').style.display="none";
	document.getElementById('knop3').style.display="none";
	document.getElementById('knop4').style.display="none";
	document.getElementById('knop5a').style.display="none";
	document.getElementById('knop5b').style.display="none";
	document.getElementById('knop5c').style.display="none";
	document.getElementById('knop5c').style.display="none";
	document.getElementById('knop6a').style.display="none";
	document.getElementById('keystone2').style.display="none";
}

function level6b() {
	document.getElementById('text').innerHTML ='Het portaal is geopend.'
	document.body.style.background="url('img/zuid.jpg')";
	document.body.style.backgroundSize='cover';
	document.getElementById('knop1').style.display="none";
	document.getElementById('knop2a').style.display="none";
	document.getElementById('knop2b').style.display="none";
	document.getElementById('knop3').style.display="none";
	document.getElementById('knop4').style.display="none";
	document.getElementById('knop5a').style.display="none";
	document.getElementById('knop5b').style.display="none";
	document.getElementById('knop5c').style.display="none";
	document.getElementById('knop5d').style.display="none";
	document.getElementById('knop5e').style.display="none";
	document.getElementById('knop6a').style.display="none";
	document.getElementById('keystone2').style.display="none";
}

