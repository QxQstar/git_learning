window.onload = function () {
    var  handle = document.getElementById('handle');

    if(handle) {
        handle.onclick = function () {
            var inner = document.getElementById('inner');
            if(inner) {
                inner.innerText = 'hello bella'
            }
        }
    }
}