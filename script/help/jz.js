function disableselect(e) {
    return false
}

function reEnable() {
    return true
}
file: //if IE4+
    document.onselectstart = new Function("return false")
file: //if NS6
    if (window.sidebar) {
        document.onmousedown = disableselect
        document.onclick = reEnable
    }