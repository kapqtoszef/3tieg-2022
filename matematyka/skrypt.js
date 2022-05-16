function obejrz(){
    let a=parseInt(document.getElementById("jeden").value)
    let b=parseInt(document.getElementById("dwa").value)
    while(a!==b){
        if(a>b){
            a=a-b
        }
        else{
            b=b-a
        }
    }
    document.getElementById("euklidesWynik").value=a
}
function obejrz2(a,b){
    while(a!==b){
        if(a>b){
            a=a-b
        }
        else{
            b=b-a
        }
    }
    return a
}
function nww(){
    let a=parseInt(document.getElementById("jedenNWW").value)
    let b=parseInt(document.getElementById("dwaNWW").value)
    let x=a*b
    while(b!==0){
        let c=a%b
        a=b
        b=c
    }
        let NWD=a
        let wynik = x/NWD
        document.getElementById("nwwWynik").value=wynik
}