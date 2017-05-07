/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function srDate() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function srCategory() {
    document.getElementById("myDropdown02").classList.toggle("show");
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function srCity() {
    document.getElementById("myDropdown03").classList.toggle("show");
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}


$(document).ready(function () {
    $('#filterOptions li a').click(function () {
        var ourClass = $(this).attr('class');
        $('#filterOptions li').removeClass('active');
        $(this).parent().addClass('active');

        if (ourClass == 'all') {
            $('#ourHolder').children().show();
        } else {
            $('#ourHolder').children('div:not(.' + ourClass + ')').hide();
            $('#ourHolder').children('div.' + ourClass).show();
        }

        return false;
    });
});
