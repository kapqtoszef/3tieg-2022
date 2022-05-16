var iloscZn=8
var iloscCyfr=0
var iloscMaleL=0
var iloscWolnychZn=0
var iloscDuzeL=0
var iloscZnSpec=0

function iloscZnakow(){
    iloscZn=document.getElementById("iloscZnakow").value
    ustawWolne()
}
function wybCyfr(){
    iloscCyfr=document.getElementById("iloscCyfr").value
    document.getElementById("wybCyfr").value=iloscCyfr
    ustawWolne()
}
function wybMaleL(){
    iloscMaleL=document.getElementById("iloscMaleL").value
    document.getElementById("wybMaleL").value=iloscMaleL
    ustawWolne()
}
function wybDuzeL(){
    iloscDuzeL=document.getElementById("iloscDuzeL").value
    document.getElementById("wybDuzeL").value=iloscDuzeL
    ustawWolne()
}
function wybZnSpec(){
    iloscZnSpec=document.getElementById("iloscZnSpec").value
    document.getElementById("wybZnSpec").value=iloscZnSpec
    ustawWolne()
}
function ustawWolne(){
    iloscWolnychZn=iloscZn-iloscCyfr-iloscMaleL-iloscDuzeL-iloscZnSpec

    //sprawdzanie czy nie mamy za duzo wybranych znakow
    if(iloscWolnychZn<0){
        reset();
        iloscWolnychZn=iloscZn;
        alert("Błedna ilość znaków za dużo wybranych. Zresetowno ustawienia")
    }
    document.getElementById("wynik").value=iloscWolnychZn
    document.getElementById("iloscCyfr").max=+iloscCyfr+ +iloscWolnychZn
    document.getElementById("iloscMaleL").max=+iloscMaleL+ +iloscWolnychZn
    document.getElementById("iloscDuzeL").max=+iloscDuzeL+ +iloscWolnychZn
    document.getElementById("iloscZnSpec").max=+iloscZnSpec+ +iloscWolnychZn
}
function generujHaslo(){
    let haslo='';
    const alfabetMale="abcdefghijklmnoprstuvwxyz";
    const alfabetDuze="ABCDEFGHIJKLMNOPRSTUVWXYZ"
    const alfabetCyfry="0123456789"
    const alfabetZnSpec="!@#$%^&*"

    //losowanie malych liter
    for(let i=0;i<iloscMaleL;i++){
        haslo+=alfabetMale.charAt(Math.floor(Math.random()*alfabetMale.length));
    }
    for(let i=0;i<iloscDuzeL;i++){
        haslo+=alfabetDuze[Math.floor(Math.random()*alfabetDuze.length)];
    }
    for(let i=0;i<iloscCyfr;i++){
        haslo+=Math.floor(Math.random()*10);
    }
    for(let i=0;i<iloscZnSpec;i++){
        haslo+=alfabetZnSpec.charAt(Math.floor(Math.random()*alfabetZnSpec.length));
    }
    //losowanie nie wybranych typow znakow
    for(let i=0;iloscWolnychZn;i++){
        haslo+=alfabetMale.charAt(Math.floor(Math.random()))
    }
    document.getElementById("test").value=haslo;
}
function zmianaKolejnosci(haslo){
    let wynik=haslo.split('');
    for(let i=0;i<wynik.length;i++){
        let los=Math.floor(Math.random()*wynik.length);
        let tmp=wynik[i];
        wynik[i]=wynik[los];
        wynik[los]=tmp;
    }
    haslo=wynik.join('');
    return haslo;
}
function reset(){
    iloscCyfr=0;
    document.getElementById("iloscCyfr").value=0;
    iloscDuzeL=0;
    document.getElementById("iloscDuzeL").value=0;
    iloscMaleL=0;
    document.getElementById("iloscMaleL").value=0;
    iloscZnSpec=0;
    document.getElementById("iloscZnSpec").value=0;
}