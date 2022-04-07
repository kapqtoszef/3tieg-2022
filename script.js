//losowanie liczby
var wylosowanaLiczba=Math.floor(Math.random()*100)+1;
//wyswietlanie liczby
function wyborliczby(){
    var ilosc=document.getElementById("zakres").value;
    document.getElementById("wybranaliczba").value=ilosc;
     wylosowanaLiczba=Math.floor(Math.random()*ilosc)+1;
    iloscProb=0
}
//liczba prob
var iloscProb=0
function sprawdzLiczbe(){
    iloscProb++;
    dane=document.getElementById('liczba')
    if(dane.value == wylosowanaLiczba){
        alert("Wygrałeś ihona max pro wow!!!!!!!! "+iloscProb)
    }else if(dane.value<wylosowanaLiczba){
        alert("fest maala liczba ")
    }else{
        alert("masna liczba ")
    }
}