window.onload = function () {
    const change = document.querySelector("#change");
    window.ondevicemotion = (ev) => {
        change.textContent = "move"
    }
}
