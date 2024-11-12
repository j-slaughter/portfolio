import './style.css';

function component() {
    const element = document.createElement('div');
    element.innerHTML = "Box";

    return element;
}

document.body.appendChild(component());