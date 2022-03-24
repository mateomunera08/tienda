let etiquetaBoton=document.getElementById("boton")
etiquetaBoton.addEventListener("click",escuchar)
function escuchar(event){
    event.preventDefault()
    console.log("hizo click")
    let empanada=document.getElementById("empanada").value
    console.log(empanada)
    let nombre=document.getElementById("nombre").value
    console.log(nombre)
    let cedula=document.getElementById("cedula").value
    console.log(cedula)
    let correo=document.getElementById("correo").value
    console.log(correo)
    let cantidad=document.getElementById("cantidad").value
    console.log(cantidad)

    let valorCarne=2000
    let valorPollo=2500
    let valorMaicitos=2500
    let valorFitnes=3000
    let valorArgentina=2200

    if(empanada=="Carne=2000"){

        alert("el total de su compra es "+(valorCarne*cantidad))

    }else if(empanada=="Pollo=2500") {

        alert("el total de su compra es "+(valorPollo*cantidad))

    }else if(empanada=="Maicitos=2500") {

        alert("el total de su compra es "+(valorMaicitos*cantidad))
    }else if(empanada=="Fitnes=3000") {

        alert("el total de su compra es "+(valorFitnes*cantidad))
    }else if (empanada=="Argentina=2200") {

        alert("el total de su compra es "+(valorArgentina*cantidad))
    }


}

