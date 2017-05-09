function filterItems(selector, s, ctrls) {
    /*
    function filterCity(li, thumb) {
        if (ctrls.city==null) return true;
        if (li.next().html().trim().toLowerCase()==ctrls.city) return true;
        return false;
    }
    
    function filterCategory(li, thumb)
    {
    }
    */
    
    $(selector).each(function(i,e) { 
        var li = $(e);
        var txt = li.html().toLowerCase();
        var filter = s.toLowerCase();
        var thumb = li.parents('div.col-md-3:first');
        if (txt.search(filter) > -1 // && filterCity(li, thumb))
        {  thumb.css('display', '');
        } else thumb.css('display', 'none');
    });

}


$(function () {


    function doSearch() {
        var ctrls = {city:null, category:null};
        
        var city = $('#bts-ex-5 .filter-item.selected');
        if (city.length>0) ctrls.city = city.html().trim().toLowerCase();
        if (city.attr('data-value')=='all') ctrls.city=null;
        
        var category = $('#bts-ex-1 li.selected');
        if (category.length>0) ctrls.category = category.attr('data-value');
        if (ctrls.category=='all') ctrls.category=null;
        
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
