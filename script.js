function level1() {
	document.getElementById('text').innerHTML ='Je bent geland op de planeet. Verderop zie je een treinspoor';	
	document.body.style.background="url('img/lvl1.jpg')";
	document.body.style.backgroundSize='cover';
	document.getElementById('knop1').style.display="none";
	document.getElementById('knop2a').style.display="block";
	document.getElementById('knop2b').style.display="block";

	console.log("Level 1!")
}

function beneden() {
	document.getElementById('text').innerHTML ='Hier is niks te vinden.';
	document.body.style.background="url('img/beneden.jpg')";
	document.body.style.backgroundSize='cover';
	document.getElementById('knop1').style.display="none";
	document.getElementById('knop2a').style.display="block";
	document.getElementById('knop2b').style.display="none";
	document.getElementById('knop3').style.display="none";
}

function level2() {
	document.getElementById('text').innerHTML ='Je bent aangekomen bij het kamp van een oude bekende. Ga langs om te praten';	
	document.body.style.background="url('img/lvl2.jpg')";
	document.body.style.backgroundSize='cover';
	document.getElementById('knop1').style.display="none";
	document.getElementById('knop2a').style.display="none";
	document.getElementById('knop2b').style.display="none";
	document.getElementById('knop3').style.display="none";

	console.log("Level 2!")
}

function level3() {
	document.getElementByID('text').innerHTML ='Na een goed gesprek met Commander Snaaf leer je dat het voorwerp waar je naar zoekt '
}