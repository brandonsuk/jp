fetch("https://ipapi.co/json/")
    .then(response => response.json())
    .then(data => {
      const countryCode = data.country_code;
      console.log(data)
    const region = document.querySelector('.region')
    region.innerHTML = data.city+" "+data.country
    const city = document.querySelector('.city')
    city.innerHTML= data.city
    const image = document.querySelector('.country-image')
    image.src =`https://flagcdn.com/w20/${data.country.toLowerCase()}.png`
    })
    .catch(error => {
      console.error("Error fetching IP geolocation:", error);
    });
    function startCountdown(durationInSeconds) {
        const countdownElement = document.getElementById('countdown');
    
        let remainingTime = durationInSeconds;
    
        function updateCountdown() {
            const hours = Math.floor(remainingTime / 3600);
            const minutes = Math.floor((remainingTime % 3600) / 60);
            const seconds = remainingTime % 60;
    
            const formattedTime = `${hours}h ${minutes}m ${seconds}s`;
    
            countdownElement.textContent = formattedTime;
    
            if (remainingTime <= 0) {
                clearInterval(timer);
                countdownElement.textContent = '0h 0m 0s';
            } else {
                remainingTime--;
            }
        }
    
        updateCountdown();
    
        const timer = setInterval(updateCountdown, 1000);
    }
    
startCountdown(1170);

var currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 3);

// Get the components of the future date
var futureMonth = currentDate.toLocaleString('en-US', { month: 'short' });
var futureDay = currentDate.getDate();

// Format the future date as a string
var formattedFutureDate = futureMonth + ' ' + (futureDay < 10 ? '0' : '') + futureDay;

var dateElement = document.querySelector('.date')
dateElement.innerText = formattedFutureDate 