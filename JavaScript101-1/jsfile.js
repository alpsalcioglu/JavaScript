function submitName() {
    var name = document.getElementById('name-input').value;
    if (name) {
        document.getElementById('welcome-section').style.display = 'none';
        document.getElementById('clock-section').style.display = 'block';
        document.getElementById('greeting-message').innerText = `Merhaba, ${name}!`;
        updateClock();
        setInterval(updateClock, 1000); // Saati her saniye günceller
    }
}

function updateClock() {
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');
    var day = now.toLocaleDateString('tr-TR', { weekday: 'long' });
    var date = now.toLocaleDateString('tr-TR');

    document.getElementById('clock').innerText = `${hours}:${minutes}:${seconds}`;
    document.getElementById('date').innerText = `${day}, ${date}`;
}
