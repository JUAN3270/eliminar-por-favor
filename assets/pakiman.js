class Pakiman
{
constructor(n, v, a)
 {
    this.imagen = new Image();
    this.nombre = n;
    this.vida = v;
    this.ataque = a;

    this.imagen.src = imagenes[this.nombre];
 }
 hablar()
 {
     alert(this.nombre);
 }
 mostrar()
 {
     var nuevaDiv = document.createElement('div');

     var divCabecera = document.createElement('h2')
      divCabecera.innerHTML = this.nombre + '<br>KI';

      divCabecera.setAttribute("class","cabeceraCajas")
    var saltoLinea = document.createElement('br')
     nuevaDiv.appendChild(this.imagen);
     nuevaDiv.appendChild(saltoLinea);
     nuevaDiv.appendChild(divCabecera);
     document.body.appendChild(nuevaDiv);
 

     var coleccion = {
       'Vida': this.vida,
       'Ataque': this.ataque
     };

    
     var tabla = document.createElement('table');
     var tbody = document.createElement('tbody');

    for (var stat in coleccion)
    {
     var filaTexto = '<tr><td>'+stat+' </tr></td><tr><td> '+coleccion[stat]+' </tr></td>';
    var fila = document.createElement('tr');
    fila.innerHTML = filaTexto;
      tbody.appendChild(fila);
    };


    tabla.appendChild(tbody);
    nuevaDiv.appendChild(tabla);
 }
}
;


