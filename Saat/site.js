function saatiGoster(){
    let zaman = new Date();
    let divsaat = document.getElementById('saat');
    divsaat.textContent = zaman.toLocaleTimeString("fr");
}

saatiGoster();

// her 1000ms de bir bu metodu çalistir.
// bu fonksiyonda parametre olarak fonksiyon aliyor (Callback)
setInterval(saatiGoster, 1000);