function somar(){
    var x = document.getElementById("iptX").value;
    var y = document.getElementById("iptY").value;
    var spnRes  = document.getElementById("spnRes");

    if (x=="" || y==""){
    spnRes.innerHTML = "Entre com os numeros";
    return;
    }

    //bttsomar.disabled = true;
    //bttlimpar.disabled = false;

    var x = parseInt(iptX.value);
    var y = parseInt(iptY.value);

    var z = x + y;

    var spnRes = document.getElementById("spnRes");

    spnRes.innerHTML = "Soma: "+z;

    var bx = document.getElementById("bxRes");

    if(z % 2 == 0){
       
        bx.style.background = "pink";
    }
    else{
        bx.style.background = "blue";
    }
}

function mudarLargura(){
    var lar = document.getElementById("iptLargura").value;
    console.log(lar);
    var bx = document.getElementById("bxRes");
    bx.style.width = lar+"px";
}

function mudarAltura(){
    var alt = document.getElementById("iptAltura").value;
    console.log(alt);
    var bx = document.getElementById("bxRes");
    bx.style.height = alt+"px";
}

function limpar(){
    var x = document.getElementById("iptX").value;
    var y = document.getElementById("iptY").value;
    var bx = document.getElementById("bxRes");
}

