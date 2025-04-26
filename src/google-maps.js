let mapPromise;

export function initGoogleMaps(apiKey, mapElementId) {
    if (!mapPromise) {
        mapPromise = new Promise((resolve) => {
            window.initMap = () => {
                resolve(google.maps);
            };

            const script = document.createElement("script");
            script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
            script.async = true;
            script.defer = true;
            document.head.appendChild(script);
        });
    }
    return mapPromise.then((maps) => {
        return new maps.Map(document.getElementById(mapElementId), {
            center: { lat: 10.774, lng: 106.708 }, // Initial default
            zoom: 12,
        });
    });
}
