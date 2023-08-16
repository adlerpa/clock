function updateClock() {
    const clockElement = document.getElementById("clock");
    const now = new Date();
    const timeString = now.getHours().toString().padStart(2, '0') + ':' + 
                       now.getMinutes().toString().padStart(2, '0') + ':' + 
                       now.getSeconds().toString().padStart(2, '0');
    clockElement.textContent = timeString;
}

setInterval(updateClock, 1000);
