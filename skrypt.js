function euklides(){
    let a=parseInt(document.getElementById("liczbaA").value);
    let b=parseInt(document.getElementById("liczbaB").value);
while(a!==b){
    if(a>b){
        a=a-b;
    }else{
        b=b-a;
    }
}
document.getElementById("euklidesWynik").value=a;
}