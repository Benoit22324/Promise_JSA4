export const getAddressFromCoords = (coords) => {
    return fetch(`https://api-adresse.data.gouv.fr/reverse/?lat=${coords.latitude}&lon=${coords.longitude}`)
        .then(result => result.json())
        .then(address => address.features[0].properties.label);
}