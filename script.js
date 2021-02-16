function change() {
    document.getElementById('demo').innerHTML = 'Hello JavaScript!'
    var element = document.createElement('demo');
    element.textContent = "Hello, World";
    document.body.appendChild(element);
}


