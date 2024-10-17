export const getPosition = () => {
    return new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition(
            position => res(position.coords),
            err => rej(err),
            {enableHighAccuracy: true}
        );
    })
}