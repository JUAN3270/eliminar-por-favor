var imagenes = [];

imagenes["Goku"] = "Goku.png";
imagenes["Vegueta"] = "Vegueta.png";
imagenes["Gohan"] = "Gohan.png";
imagenes["Majimbu"] = "Majimbu.png";
imagenes["Picolo"] = "Picolo.png";
imagenes["Freezer"] = "Freezer.png";
imagenes["Cell"] = "Cell.png";
imagenes["Bills"] = "Bills.png";
imagenes["Broly"] = "Broly.png";


var coleccion = [];

coleccion.push(new Pakiman("Goku", 200, 150));
coleccion.push(new Pakiman("Vegueta", 160, 80));
coleccion.push(new Pakiman("Gohan", 130, 70));
coleccion.push(new Pakiman("Majimbu", 220, 90));
coleccion.push(new Pakiman("Freezer", 130, 70));
coleccion.push(new Pakiman("Cell", 80, 60));
coleccion.push(new Pakiman("Bills", 220, 140));
coleccion.push(new Pakiman("Broly", 280, 190));
coleccion.push(new Pakiman("Picolo", 70, 50));





for(var pakin of coleccion)
{
pakin.mostrar();
}













