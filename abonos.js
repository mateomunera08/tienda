let etiquetaBoton=document.getElementById("boton")
etiquetaBoton.addEventListener("click",escuchar)
function escuchar(event){
    event.preventDefault()
    console.log("hizo click")
    let abonos=document.getElementById("abonos").value
    console.log(abonos)
    let nombres=document.getElementById("nombres").value
    console.log(nombres)
    let cedula=document.getElementById("cedula").value
    console.log(cedula)
    let correo=document.getElementById("correo").value
    console.log(correo)
    let cantidad=document.getElementById("cantidad").value
    console.log(cantidad)

    let valorSur=2000
    let valorNorte=2500
    let valorOriental=2500
    let valorOcidental=3000
    let valorVip=22000

    if(abonos=="Sur=2000"){

        alert("el total de su compra es "+(valorSur*cantidad))

    }else if(abonos=="Norte=2500") {

        alert("el total de su compra es "+(valorNorte*cantidad))

    }else if(abonos=="Oriental=2500") {

        alert("el total de su compra es "+(valorOriental*cantidad))
    }else if(abonos=="Ocidental=3000") {

        alert("el total de su compra es "+(valorOcidental*cantidad))
    }else if (abonos=="Vip=22000") {

        alert("el total de su compra es "+(valorVip*cantidad))
    }


}