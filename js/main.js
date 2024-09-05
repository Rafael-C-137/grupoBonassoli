let ul = document.querySelector('nav .ul');

function openMenu() {
    ul.classList.add('open');
}

function closeMenu() {
    ul.classList.remove('open');
}

$(document).ready(function () {
    $('#toggleButton').click(function () {
        $('#mapFrame').toggle();
    });
});