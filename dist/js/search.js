function filterItems(selector, s, ctrls) {
    
    function filterCity(li) {
        if (ctrls.city==null) return true;
        if (li.next().html().trim().toLowerCase()==ctrls.city) return true;
        return false;
    }
    
    $(selector).each(function(i,e) { 
        var li = $(e);
        var txt = li.html().toLowerCase();
        var filter = s.toLowerCase();
        var thumb = li.parents('div.col-md-3:first');
        if (txt.search(filter) > -1 && filterCity(li))
        {  thumb.css('display', '');
        } else thumb.css('display', 'none');
        
        // li.attr('data-filter',li.html().trim());        
    });

}


$(function () {


    function doSearch() {
        var ctrls = {city:null};
        
        var city = $('#bts-ex-5 .filter-item.selected');
        if (city.length>0) ctrls.city = city.html().trim().toLowerCase();
        
        var s = $('.do-search input').val();
        filterItems('.item-artist',s, ctrls);
        filterItems('.item-tour',s, ctrls);
    }

   // Add keywords for all filter values
    $('.list-to-filter li.filter-item').each(function(i,e){ 
        var li = $(e);
        li.attr('data-filter',li.html().trim());        
    }).click(function(e){
        doSearch();
    });
    
    
    $('.do-search .btn').click(doSearch);
    $('.do-search input').keyup(function(e){
        if (e.keyCode==13) doSearch();        
    });
    
});
