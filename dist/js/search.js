function filterItems(selector, s) {
    $(selector).each(function(i,e){ 
        var li = $(e);
        var txt = li.html().toLowerCase();
        var filter = s.toLowerCase();
        var thumb = li.parents('div.col-md-3:first');
        if (txt.search(filter) > -1)
        {  thumb.css('display', '');
        } else thumb.css('display', 'none');
        
        // li.attr('data-filter',li.html().trim());        
    });
}


$(function () {
   // Add keywords for all filter values
    $('.list-to-filter li.filter-item').each(function(i,e){ 
        var li = $(e);
        li.attr('data-filter',li.html().trim());        
    }).click(function(e){
        console.log(e.target.innerHTML);
    });
    
    function doSearch() {
        var s = $('.do-search input').val();
        filterItems('.item-artist',s);
        filterItems('.item-tour',s);
    }
    
    $('.do-search .btn').click(doSearch);
    $('.do-search input').keyup(function(e){
        if (e.keyCode==13) doSearch();        
    });
    
});
