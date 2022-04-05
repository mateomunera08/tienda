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
    let valorWowboxduo=42000
    let valorMegafamiliar=52000
    let valorBigboxpop=22000
    let valorDoblePizzaMediana=46000

    

    if(comidas=="Fristodonte=20000"){
        
        alert("el total de su compra es de"+(valorFristodonte*cantidad))

    }else if(comidas=="Frisburrito=25000"){

        alert("el total de su compra es de"+(valorFrisburrito*cantidad))
        
    }else if(comidas=="Frisnack=19000"){

        alert("el total de su compra es de"+(valorFrisnack*cantidad))

    }else if(comidas=="Frisbychuleta=30000"){
        
        alert("el total de su compra es de"+(valorFrisbychuleta*cantidad))

    }else if(comidas=="Wowboxduo=42000"){
        
        alert("el total de su compra es de"+(valorWowboxduo*cantidad))
        
    }else if(comidas=="Megafamiliar=52000"){
        
        alert("el total de su compra es de"+(valorMegafamiliar*cantidad))
        
    }else if(comidas=="Bigboxpop=22000"){
        
        alert("el total de su compra es de"+(valorBigboxpop*cantidad))
        
    }else if(comidas=="Doblepizzamediana=46000"){
        
        alert("el total de su compra es de"+(valorDoblePizzaMediana*cantidad))
        
    }



}