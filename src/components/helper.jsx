// Helper functions for the Weather App

// Converts wind direction in degrees to a compass direction (e.g., N, NE, E, etc.)
export const getWindDirection = (deg) => {

    if (deg > 337.5 || deg <= 22.5) return 'N';
    if (deg > 22.5 && deg <= 67.5) return 'NE';
    if (deg > 67.5 && deg <= 112.5) return 'E';
    if (deg > 112.5 && deg <= 157.5) return 'SE';
    if (deg > 157.5 && deg <= 202.5) return 'S';
    if (deg > 202.5 && deg <= 247.5) return 'SW';
    if (deg > 247.5 && deg <= 292.5) return 'W';
    if (deg > 292.5 && deg <= 337.5) return 'NW';
};

//checks and return humidity levels
export const getHumidityValue = (humidity) => {
    if (humidity < 30) return 'Low';
    if (humidity < 60) return 'Moderate';
    return 'High';
};

// converts visibility from meters to kilometers and formats it as a string with one decimal place.
export const getVisibilityValue = (visibility) => {
    const km = visibility / 1000;
    return `${km.toFixed(1)} km`;
};

// Converts temperature from Celsius to Fahrenheit if the unit is 'F', otherwise returns the temperature in Celsius. The result is formatted to one decimal place.
export const convertTemperature = (temp, unit) => {
    if (unit === 'F') {
        return (temp * 9 / 5 + 32).toFixed(1);
    }
    return temp.toFixed(1);
};


export const convertWindSpeed = (speed) => {
    const kmh = speed * 3.6;
    return `${kmh.toFixed(1)} km/h`;
};