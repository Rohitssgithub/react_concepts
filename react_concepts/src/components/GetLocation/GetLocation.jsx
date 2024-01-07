import React from 'react';

function GetLocation() {
    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            alert('Geolocation is not supported by your browser.');
        }
    };

    const showPosition = (position) => {
        const { latitude, longitude } = position.coords;
        alert(`Latitude: ${latitude}, Longitude: ${longitude}`);
        // You can use the latitude and longitude to do something with the user's location.
    };

    const showError = (error) => {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert('User denied the request for geolocation. You can enable location access in your browser settings.');
                break;
            case error.POSITION_UNAVAILABLE:
                alert('Location information is unavailable.');
                break;
            case error.TIMEOUT:
                alert('The request to get user location timed out.');
                break;
            case error.UNKNOWN_ERROR:
                alert('An unknown error occurred.');
                break;
            default:
                alert('An error occurred.');
                break;
        }
    };

    return (
        <div>
            <button onClick={getLocation}>Get My Location</button>
        </div>
    );
}

export default GetLocation;
