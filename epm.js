let etiquetaBoton=document.getElementById("boton")
etiquetaBoton.addEventListener("click",escuchar)
function escuchar(event){
    event.preventDefault()
    console.log("hizo click")

    let estrato=document.getElementById("estrato").value
    console.log(estrato)
    let valorDeuda=document.getElementById("valorDeuda").value
    console.log(valorDeuda)
    let cedula=document.getElementById("cedula").value
    console.log(cedula)
    let CorreoElectronico=document.getElementById("CorreoElectronico").value
    console.log(CorreoElectronico)
    


    let valor1=1
    let valor2=2
    let valor3=3
    let valor4=4
    let valor5=5
    let valor6=6

    let total=0
    let descuento=0

    if(estrato=="1"){
        descuento=0.4

        alert("el total de su compra es "+(total))
        total=valorDeuda-(valorDeuda*descuento)

    }
    else if(estrato=="2") {
        descuento=0.3
        total=valorDeuda-(valorDeuda*descuento)

        alert("el total de su compra es "+(total))

    }
    else if(estrato=="3") {
        descuento=0.2
        total=valorDeuda-(valorDeuda*descuento)

        alert("el total de su compra es "+(total))
    }
    else if(estrato=="4") {
        descuento=0
        total=valorDeuda-(valorDeuda*descuento)

        alert("el total de su compra es "+(total))
    }
    else if (estrato=="5") {
        descuento=0
        total=valorDeuda-(valorDeuda*descuento)

        alert("el total de su compra es "+(total))
    }
    else if (estrato=="6") {
        descuento=0
        total=valorDeuda-(valorDeuda*descuento)

        alert("el total de su compra es "+(total))

    }
}