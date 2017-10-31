'use strict';
var name;
var lastName;
var tel;
var adres;


$(".przycisk-dodaj").click (function(){
	var name = $(".dodajImie").val();
	console.log(name);
	var lastName = $(".dodajNazwisko").val();
	console.log(lastName);
	var tel = $(".dodajTelefon").val();
	console.log(tel);
	var adres = $(".dodajAdres").val();
	console.log(adres);
	
});

$(".przycisk-zapisz").click (function(){
	var name = $(".dodajImie").val();
	console.log(name);
	var lastName = $(".dodajNazwisko").val();
	console.log(lastName);
	var tel = $(".dodajTelefon").val();
	console.log(tel);
	var adres = $(".dodajAdres").val();
	console.log(adres);
	
});

 var addContact = $(".add").click (function(){
	$(".okienka").show();
	$("#okienko-dodawania").show();
	console.log("add");
});
 var editContact = $(".edit").click (function(){
	$(".okienka").show();
	$("#okienko-edytowania").show();
	console.log("edit");
});

