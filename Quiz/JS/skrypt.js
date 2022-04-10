alert("witaj na teście z javascripta")
var dane=prompt("Podaj swoje imię i nazwisko");
alert("Test z Javascript rozwiązuje "+ dane)
function sprawdz()
{
    var punkty=0;   
    //Pytanie 1
    if(document.getElementById('b').checked){
        punkty=punkty+1;
    }
    else
    {
        punkty=punkty-1
        alert("Zła odpowiedz");
    }
    //Pytanie 2
    if(document.pytanie2.wstaw1.value == "128")
    {
        punkty=punkty+1;
    }
    //pytanie 3
    //sprawdzamy po elemencie formularza
    if (document.forms[2].elements[0].checked){
        punkty=punkty+1}
    //Pytanie 4
    if((document.getElementById('a4').checked) && (document.getElementById('c4').checked) && (document.getElementById('d4').checked)){
        punkty=punkty+1
    }
    //Pytanie 5
    if(document.pytanie5.Cars.value =="Toyota"){
        punkty=punkty+1
    }
    alert("Masz punktów: "+punkty)
    
}