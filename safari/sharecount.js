(function(e, a, g, h, f, c, b, d) {
    if (! (f = e.jQuery) || g > f.fn.jquery || h(f)) {
        c = a.createElement("script");
        c.type = "text/javascript";
        c.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + g + "/jquery.min.js";
        c.onload = c.onreadystatechange = function() {
            if (!b && (!(d = this.readyState) || d == "loaded" || d == "complete")) {
                h((f = e.jQuery).noConflict(1), b = 1);
                f(c).remove()
            }
        };
        a.documentElement.childNodes[0].appendChild(c)
    }
})(window, document, "1",
function($, L) { (function() {
        $(document).ready(function() {
            function m(d) {
                $.getJSON(o[i][0] + a + o[i][1],
                function(a) {
                    if (typeof a.stories != "undefined" && typeof a.stories[0] != "undefined") var e = +a.stories[0].diggs;
                    else if (typeof a[0] != "undefined") var e = +a[0].total_posts;
                    else if (typeof a.story != "undefined") var e = +a.story.url_count;
                    else if (typeof a.shares != "undefined") var e = +a.shares;
                    else var e = 0;
                    c[d] = c[d] + e,
                    b[d] = b[d] - 1,
                    b[d] <= 0 ? (l(d), clearTimeout(g[d])) : b[d] == o.length - 1 && k(d)
                })
            }
            function l(a) {
                $(d[a]).html(prepend + h(c[a]) + append)
            }
            function k(a) {
                function e() {
                    b[a] = b[a] + 1,
                    $(d[a]).html(prepend + h(c[a]) + "+" + append)
                }
                g[a] = setTimeout(e, failwait)
            }
            function h(a) {
                a >= 1e3 && (a >= 1e6 ? a = (a / 1e6).toFixed(2) + "M": a = (a / 1e3).toFixed(1) + "k");
                return a
            }
            var a = 0,
            b = [],
            c = [],
            d = $(sharecounter),
            e = $(sharelink),
            f = 0,
            g = [];
            f = e.length - 1;
            for (j = 0; j <= f; j++) {
                a = e[j];
                for (i = 0; i <= o.length - 1; i++) b[j] = o.length,
                c[j] = 0,
                g[j] = 1,
                m(j)
            }
        });
        var twitter = ["http://api.tweetmeme.com/url_info.jsonc?url="],
        facebook = ["http://graph.facebook.com/?id="],
        delicious = ["http://feeds.delicious.com/v2/json/urlinfo/data?url="],
        digg = ["http://services.digg.com/2.0/story.getInfo?links=", "&type=javascript&callback=?"];
        delicious[1] = facebook[1] = twitter[1] = "&callback=?";
        var sharecounter = ".sharecount",
        sharelink = ".shareme",
        failwait = 3E3,
        o = [twitter, facebook, digg, delicious],
        prepend = "",
        append = "";
        //OPTIONS START
        //OPTIONS END
    })();
})
//� 2011 Armin Cobo
//Sharecount.js is sold on codecanyon.net
