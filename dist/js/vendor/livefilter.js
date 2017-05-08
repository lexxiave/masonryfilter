/*! ========================================================================
 * Live Filter: livefilter.js v2.0.0
 * ========================================================================
 * Copyright 2015, Salvatore Di Salvo (disalvo-infographiste[dot].be)
 * ======================================================================== */
(function(d) {
    var b = function(f, e) {
        this.$element = d(f);
        this.options = d.extend({}, this.defaults(), e);
        this.structure = d.extend({}, this.parts());
        this.keywords = null ;
        this.init()
    }
    ;
    b.VERSION = "2.0.0";
    b.DEFAULTS = {
        clearbtn: false,
        autocomplete: false,
        hint: "placeholder",
        arrowKeys: false,
        matches: false,
        caseSensitive: false,
        minLength: 1,
        wrapInput: true
    };
    b.prototype.parts = function() {
        return {
            $input: d(".live-search", this.$element),
            $filter: d(".list-to-filter", this.$element),
            $clear: d(".filter-clear", this.$element),
            $no_results: d(".no-search-results", this.$element),
            $items: d(".filter-item", this.$element),
            $matches: d(".matches", this.$element)
        }
    }
    ;
    b.prototype.defaults = function() {
        return {
            clearbtn: this.$element.attr("data-clear") || b.DEFAULTS.clearbtn,
            autocomplete: this.$element.attr("data-autocomplete") || b.DEFAULTS.autocomplete,
            hint: this.$element.attr("data-hint") || b.DEFAULTS.hint,
            arrowKeys: this.$element.attr("data-keys") || b.DEFAULTS.arrowKeys,
            matches: this.$element.attr("data-matches") || b.DEFAULTS.arrowKeys,
            caseSensitive: b.DEFAULTS.caseSensitive,
            minLength: b.DEFAULTS.minLength,
            wrapInput: b.DEFAULTS.wrapInput
        }
    }
    ;
    b.prototype.getKeywords = function() {
        var e = [];
        this.structure.$items.each(function(f) {
            if (!d(this).hasClass("disabled")) {
                var t = d(this).attr("data-filter");
                if (t!=undefined) e = e.concat(d(this).attr("data-filter").split("|"))
            }
        });
        return e
    }
    ;
    b.prototype.init = function() {
        var e = this;
        if (e.options.autocomplete) {
            e.initAC()
        }
        if (e.options.clearbtn) {
            e.structure.$clear.click(function(f) {
                f.preventDefault();
                e.clear()
            })
        }
        e.structure.$input.on("keyup", function() {
            var f = d(this).val().toLowerCase();
            if (e.options.clearbtn) {
                e.structure.$clear.toggleClass("hide", !f).prev("span").toggle(!f)
            }
            e.structure.$no_results.hide();
            e.searchAndFilter(f)
        });
        e.structure.$input.val("").trigger("input").trigger("keyup");
        if (e.structure.$clear && e.options.clearbtn) {
            e.structure.$clear.addClass("hide").prev("span").show()
        }
        if (e.structure.$no_results) {
            e.structure.$no_results.hide()
        }
    }
    ;
    b.prototype.initAC = function() {
        var e = this;
        e.keywords = e.getKeywords();
        if (e.keywords != undefined && e.keywords != null ) {
            e.structure.$input.tabcomplete(e.keywords, {
                hint: e.options.hint,
                arrowKeys: e.options.arrowKeys,
                caseSensitive: e.options.caseSensitive,
                minLength: e.options.minLength,
                wrapInput: e.options.wrapInput
            });
            if (e.options.matches) {
                e.structure.$input.on("match", function(g, f) {
                    e.structure.$matches.css("opacity", (f == 0 ? 0 : 1)).find("span").html(f)
                }).on("blur", function() {
                    e.structure.$matches.css("opacity", 0)
                })
            }
        } else {
            console.log("no keywords defined!")
        }
    }
    ;
    b.prototype.searchAndFilter = function(g) {
        var f = this
          , e = 0;
        if (!g) {
            this.structure.$items.each(function() {
                if (!d(this).hasClass("disabled")) {
                    d(this).show()
                }
            })
        } else {
            this.structure.$items.each(function() {
                if (!d(this).hasClass("disabled")) {
                    var i = d(this).attr("data-filter").split("|");
                    var h = f.inFilter(g, i);
                    if (h) {
                        e++
                    }
                    d(this).toggle(!!h)
                }
            })
        }
        if (e == 0 && g.length != 0) {
            this.structure.$no_results.find("span").text(g);
            this.structure.$no_results.show()
        } else {
            this.structure.$no_results.hide()
        }
    }
    ;
    b.prototype.clear = function() {
        this.structure.$input.val("").trigger("input").trigger("keyup");
        this.structure.$clear.addClass("hide")
    }
    ;
    b.prototype.inFilter = function(h, g) {
        for (var f = 0; f < g.length; f++) {
            var e = g[f].toLowerCase();
            if (e.match(h)) {
                return true
            }
        }
        return false
    }
    ;
    function c(e) {
        return this.each(function() {
            var h = d(this);
            var g = h.data("liveFilter");
            var f = typeof e == "object" && e;
            if (!g) {
                h.data("liveFilter", (g = new b(this,f)))
            }
            if (typeof e == "string" && g[e]) {
                g[e]()
            }
        })
    }
    var a = d.fn.liveFilter;
    d.fn.liveFilter = c;
    d.fn.liveFilter.Constructor = b;
    d.fn.toggle.noConflict = function() {
        d.fn.liveFilter = a;
        return this
    }
    ;
    d(function() {
        d(".livefilter").liveFilter()
    })
}(jQuery));
