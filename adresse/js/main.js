// Import
import { getAddressFromCoords } from "./addressApi.js";
import { getPosition } from "./geolocation.js";
import { waitFor } from "./utils.js";

// Variables
const btn = document.getElementById('géo_btn');
const paragraph = document.getElementById('address');
const errorMsg = document.getElementById('errorMsg');

btn.addEventListener('click', () => {
    getPosition()
        .then(coords => getAddressFromCoords(coords))
        .then(address => {
            paragraph.textContent = address;
        })
        .catch(error => {
            showError(error);

            waitFor(3).then(() => {
                hideError(); 
            });
        });
});

const showError = (error) => {
    errorMsg.textContent = error.message;
    errorMsg.classList.remove('hidden');
}
const hideError = () => {
    errorMsg.classList.add('hidden');
}