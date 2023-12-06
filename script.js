function updateHexClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
  
    const hexColor = `#${hours}${minutes}${seconds}`;
    document.body.style.backgroundColor = hexColor;
    document.body.textContent = hexColor;
  
    setTimeout(updateHexClock, 1000);
  }
  
  function changeColor(unit) {
    const colors = {
      hours: '#FF0000',
      minutes: '#00FF00',
      seconds: '#0000FF',
    };
  
    document.body.style.backgroundColor = colors[unit];
  }
  
  updateHexClock();
  