/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */


function srDate() {
    $('.dropdown-content').removeClass('show');
    document.getElementById("myDropdown").classList.toggle("show");
}


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

function srCategory() {
    $('.dropdown-content').removeClass('show');
    document.getElementById("myDropdown02").classList.toggle("show");
}


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function srCity() {
    $('.dropdown-content').removeClass('show');
    document.getElementById("myDropdown03").classList.toggle("show");
}


// Non working function
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
        
    $('#filterOptions li a').click(function (e) {
        
        // Filter code
        var ourClass = $(this).attr('class');
        $('#filterOptions li').removeClass('active');
        $(this).parent().addClass('active');

        if (ourClass == 'all') {
            $('#ourHolder').children().show();
        } else {
            $('#ourHolder').children('div:not(.' + ourClass + ')').hide();
            $('#ourHolder').children('div.' + ourClass).show();
        }
        
        // hide menu
        $(e.target).parents('.dropdown-content:first').removeClass('show');
        
        // change label
        var span = $(e.target).parents('.selectpicker:first').find('button span:first');
        span.html($(e.target).html()).addClass('text').removeClass('placeholder');
        
        return false;
    });
    
    // Search in dropdown
    $('.dropdown-content input').keyup(function(e){
        var ed = $(e.target);
        var v = ed.val().toLowerCase().trim();
        ed.parents('ul:first').find('li > a').each(function(i, e) {
            if ($(e).hasClass('all')) return;
            var li = $(e).parents('li:first');
            if (v=='') {
                li.css('display','');
            } else  if (e.innerHTML.toLowerCase().search(v) > -1 )
            {   li.css('display','');
            } else  li.css('display','none');            
        });
        if (v=='')  ed.parents('ul:first').find('li.divider').css('display','');
        else ed.parents('ul:first').find('li.divider').css('display','none');
    });
});
