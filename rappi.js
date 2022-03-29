let etiquetaBoton=document.getElementById("boton")
etiquetaBoton.addEventListener("click",escuchar)
function escuchar(event){
    event.preventDefault()
    console.log("hizo click")
    let comidas=document.getElementById("comidas").value
    console.log(comidas)
    let cantidad=document.getElementById("cantidad").value
    console.log(cantidad)
    let Direccion=document.getElementById("Direccion").value
    console.log(Direccion)
    let CorreoElectronico=document.getElementById("correoelectronico").value
    console.log(CorreoElectronico)
    

    let valorFristodonte=20000
    let valorFrisburrito=25000
    let valorFrisnack=19000
    let valorFrisbychuleta=30000
    let valorwowBox=42000
    let valorMegaFamiliar=52000
    let valorBigBoxPop=22000
    let valorDoblePizzaMediana=46000

    

    if(comidas=="Fristodonte=20000"){
        
        alert("el total de su compra es de"+(valorFristodonte*cantidad))

    }else if(comidas=="frisburrito=25000"){

        alert("el total de su compra es de"+(valorFrisburrito*cantidad))
        
    }else if(comidas=="frisnack=19000"){

        alert("el total de su compra es de"+(valorFrisnack*cantidad))

    }else if(comidas=="Frisbychuleta=30000"){
        
        alert("el total de su compra es de"+(valorFrisbychuleta*cantidad))

    }else if(comidas=="wowBox=42000"){
        
        alert("el total de su compra es de"+(valorwowBox*cantidad))
        
    }else if(comidas=="MegaFamiliar=52000"){
        
        alert("el total de su compra es de"+(valorMegaFamiliar*cantidad))
        
    }else if(comidas=="BigBoxPop=22000"){
        
        alert("el total de su compra es de"+(valorBigBoxPop*cantidad))
        
    }else if(comidas=="BigBoxPop=22000"){
        
        alert("el total de su compra es de"+(valorBigBoxPop*cantidad))
        
    }else if(comidas=="Doblepizzamediana=46000"){
        
        alert("el total de su compra es de"+(valorDoblePizzaMediana*cantidad))
        
    }



}