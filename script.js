//losowanie liczby
var wylosowanaliczba=Math.floor(Math.random()*100)+1;
//wyswietlanie liczby
function wyborLiczby(){
    var ilosc=document.getElementById("zakres").value;
    document.getElementById("wybranaLiczba").value=ilosc;
    wylosowanaliczba=Math.floor(Math.random()*ilosc)+1;
    iloscprob=0
}
//liczba prób
var iloscprob=0
function sprawdzLiczbe(){
    iloscprob++;
    dane=document.getElementById('liczba')
    if(dane.value==wylosowanaliczba){
        alert("Wygrałeś. Ilość prób to: "+iloscprob)
    }
    else if(dane.value<wylosowanaliczba){
        alert("Za mała liczba")
    }
    else{
        alert("Za duża liczba")
    }
}