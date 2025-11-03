const lat = 42.731;
    const lon = -84.483;

    fetch(`https://api.weather.gov/points/${lat},${lon}`)
      .then(resp => resp.json())
      .then(data => {
        const hourlyUrl = data.properties.forecastHourly;
        return fetch(hourlyUrl);
      })
      .then(resp => resp.json())
      .then(hourlyData => {
        // For example, show the next 5 hours
        const periods = hourlyData.properties.periods.slice(0,5);
        const lines = periods.map(p => 
          `${p.startTime} → ${p.temperature}°${p.temperatureUnit}, ${p.shortForecast}`
        );
        document.getElementById('output').textContent = lines.join("\n");
      })
      .catch(err => {
        document.getElementById('output').textContent = "Error: " + err;
      });