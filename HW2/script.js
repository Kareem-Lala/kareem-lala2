
function updateTime() {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const date = now.toDateString();
    
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
    dateElement.textContent = date;
}

setInterval(updateTime, 1000);
updateTime();
