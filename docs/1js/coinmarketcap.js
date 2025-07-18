function initCoinMarket() {
  !(function (e) {
    var a = {};
    function n(t) {
      if (a[t]) return a[t].exports;
      var o = (a[t] = { i: t, l: !1, exports: {} });
      return e[t].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    (n.m = e),
      (n.c = a),
      (n.d = function (e, a, t) {
        n.o(e, a) || Object.defineProperty(e, a, { enumerable: !0, get: t });
      }),
      (n.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.t = function (e, a) {
        if ((1 & a && (e = n(e)), 8 & a)) return e;
        if (4 & a && "object" == typeof e && e && e.__esModule) return e;
        var t = Object.create(null);
        if (
          (n.r(t),
          Object.defineProperty(t, "default", { enumerable: !0, value: e }),
          2 & a && "string" != typeof e)
        )
          for (var o in e)
            n.d(
              t,
              o,
              function (a) {
                return e[a];
              }.bind(null, o)
            );
        return t;
      }),
      (n.n = function (e) {
        var a =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(a, "a", a), a;
      }),
      (n.o = function (e, a) {
        return Object.prototype.hasOwnProperty.call(e, a);
      }),
      (n.p = ""),
      n((n.s = 37));
  })({
    1: function (e, a, n) {
      "use strict";
      a.a = {
        usd: {
          id: 2781,
          name: "United States Dollar",
          symbol: "usd",
          token: "$",
          space: "",
        },
        all: {
          id: 3526,
          name: "Albanian Lek",
          symbol: "all",
          token: "L",
          space: "",
        },
        dzd: {
          id: 3537,
          name: "Algerian Dinar",
          symbol: "dzd",
          token: "Ø¯.Ø¬",
          space: "",
        },
        ars: {
          id: 2821,
          name: "Argentine Peso",
          symbol: "ars",
          token: "$",
          space: "",
        },
        amd: {
          id: 3527,
          name: "Armenian Dram",
          symbol: "amd",
          token: "Ö",
          space: "",
        },
        aud: {
          id: 2782,
          name: "Australian Dollar",
          symbol: "aud",
          token: "$",
          space: "",
        },
        azn: {
          id: 3528,
          name: "Azerbaijani Manat",
          symbol: "azn",
          token: "â‚¼",
          space: "",
        },
        bhd: {
          id: 3531,
          name: "Bahraini Dinar",
          symbol: "bhd",
          token: ".Ø¯.Ø¨",
          space: "",
        },
        bdt: {
          id: 3530,
          name: "Bangladeshi Taka",
          symbol: "bdt",
          token: "à§³",
          space: "",
        },
        byn: {
          id: 3533,
          name: "Belarusian Ruble",
          symbol: "byn",
          token: "Br",
          space: "",
        },
        bmd: {
          id: 3532,
          name: "Bermudan Dollar",
          symbol: "bmd",
          token: "$",
          space: "",
        },
        bob: {
          id: 2832,
          name: "Bolivian Boliviano",
          symbol: "bob",
          token: "Bs.",
          space: "",
        },
        bam: {
          id: 3529,
          name: "Bosnia-Herzegovina Convertible Mark",
          symbol: "bam",
          token: "KM",
          space: "",
        },
        brl: {
          id: 2783,
          name: "Brazilian Real",
          symbol: "brl",
          token: "R$",
          space: "",
        },
        bgn: {
          id: 2814,
          name: "Bulgarian Lev",
          symbol: "bgn",
          token: "Ð»Ð²",
          space: "",
        },
        khr: {
          id: 3549,
          name: "Cambodian Riel",
          symbol: "khr",
          token: "áŸ›",
          space: "",
        },
        cad: {
          id: 2784,
          name: "Canadian Dollar",
          symbol: "cad",
          token: "$",
          space: "",
        },
        clp: {
          id: 2786,
          name: "Chilean Peso",
          symbol: "clp",
          token: "$",
          space: "",
        },
        cny: {
          id: 2787,
          name: "Chinese Yuan",
          symbol: "cny",
          token: "Â¥",
          space: "",
        },
        cop: {
          id: 2820,
          name: "Colombian Peso",
          symbol: "cop",
          token: "$",
          space: "",
        },
        crc: {
          id: 3534,
          name: "Costa Rican ColÃ³n",
          symbol: "crc",
          token: "â‚¡",
          space: "",
        },
        hrk: {
          id: 2815,
          name: "Croatian Kuna",
          symbol: "hrk",
          token: "kn",
          space: "",
        },
        cup: {
          id: 3535,
          name: "Cuban Peso",
          symbol: "cup",
          token: "$",
          space: "",
        },
        czk: {
          id: 2788,
          name: "Czech Koruna",
          symbol: "czk",
          token: "KÄ",
          space: "",
        },
        dkk: {
          id: 2789,
          name: "Danish Krone",
          symbol: "dkk",
          token: "kr",
          space: ". ",
        },
        dop: {
          id: 3536,
          name: "Dominican Peso",
          symbol: "dop",
          token: "$",
          space: "",
        },
        egp: {
          id: 3538,
          name: "Egyptian Pound",
          symbol: "egp",
          token: "Â£",
          space: "",
        },
        eur: { id: 2790, name: "Euro", symbol: "eur", token: "â‚¬", space: "" },
        gel: {
          id: 3539,
          name: "Georgian Lari",
          symbol: "gel",
          token: "â‚¾",
          space: "",
        },
        ghs: {
          id: 3540,
          name: "Ghanaian Cedi",
          symbol: "ghs",
          token: "â‚µ",
          space: "",
        },
        gtq: {
          id: 3541,
          name: "Guatemalan Quetzal",
          symbol: "gtq",
          token: "Q",
          space: "",
        },
        hnl: {
          id: 3542,
          name: "Honduran Lempira",
          symbol: "hnl",
          token: "L",
          space: "",
        },
        hkd: {
          id: 2792,
          name: "Hong Kong Dollar",
          symbol: "hkd",
          token: "$",
          space: "",
        },
        huf: {
          id: 2793,
          name: "Hungarian Forint",
          symbol: "huf",
          token: "Ft",
          space: " ",
        },
        isk: {
          id: 2818,
          name: "Icelandic KrÃ³na",
          symbol: "isk",
          token: "kr",
          space: "",
        },
        inr: {
          id: 2796,
          name: "Indian Rupee",
          symbol: "inr",
          token: "â‚¹",
          space: "",
        },
        idr: {
          id: 2794,
          name: "Indonesian Rupiah",
          symbol: "idr",
          token: "Rp",
          space: " ",
        },
        irr: {
          id: 3544,
          name: "Iranian Rial",
          symbol: "irr",
          token: "ï·¼",
          space: "",
        },
        iqd: {
          id: 3543,
          name: "Iraqi Dinar",
          symbol: "iqd",
          token: "Ø¹.Ø¯",
          space: "",
        },
        ils: {
          id: 2795,
          name: "Israeli New Shekel",
          symbol: "ils",
          token: "â‚ª",
          space: "",
        },
        jmd: {
          id: 3545,
          name: "Jamaican Dollar",
          symbol: "jmd",
          token: "$",
          space: "",
        },
        jpy: {
          id: 2797,
          name: "Japanese Yen",
          symbol: "jpy",
          token: "Â¥",
          space: "",
        },
        jod: {
          id: 3546,
          name: "Jordanian Dinar",
          symbol: "jod",
          token: "Ø¯.Ø§",
          space: "",
        },
        kzt: {
          id: 3551,
          name: "Kazakhstani Tenge",
          symbol: "kzt",
          token: "â‚¸",
          space: "",
        },
        kes: {
          id: 3547,
          name: "Kenyan Shilling",
          symbol: "kes",
          token: "Sh",
          space: "",
        },
        kwd: {
          id: 3550,
          name: "Kuwaiti Dinar",
          symbol: "kwd",
          token: "Ø¯.Ùƒ",
          space: "",
        },
        kgs: {
          id: 3548,
          name: "Kyrgystani Som",
          symbol: "kgs",
          token: "Ñ",
          space: "",
        },
        lbp: {
          id: 3552,
          name: "Lebanese Pound",
          symbol: "lbp",
          token: "Ù„.Ù„",
          space: "",
        },
        mkd: {
          id: 3556,
          name: "Macedonian Denar",
          symbol: "mkd",
          token: "Ð´ÐµÐ½",
          space: "",
        },
        myr: {
          id: 2800,
          name: "Malaysian Ringgit",
          symbol: "myr",
          token: "RM",
          space: "",
        },
        mur: {
          id: 2816,
          name: "Mauritian Rupee",
          symbol: "mur",
          token: "â‚¨",
          space: "",
        },
        mxn: {
          id: 2799,
          name: "Mexican Peso",
          symbol: "mxn",
          token: "$",
          space: "",
        },
        mdl: {
          id: 3555,
          name: "Moldovan Leu",
          symbol: "mdl",
          token: "L",
          space: "",
        },
        mnt: {
          id: 3558,
          name: "Mongolian Tugrik",
          symbol: "mnt",
          token: "â‚®",
          space: "",
        },
        mad: {
          id: 3554,
          name: "Moroccan Dirham",
          symbol: "mad",
          token: "Ø¯.Ù….",
          space: "",
        },
        mmk: {
          id: 3557,
          name: "Myanma Kyat",
          symbol: "mmk",
          token: "Ks",
          space: "",
        },
        nad: {
          id: 3559,
          name: "Namibian Dollar",
          symbol: "nad",
          token: "$",
          space: "",
        },
        npr: {
          id: 3561,
          name: "Nepalese Rupee",
          symbol: "npr",
          token: "â‚¨",
          space: "",
        },
        twd: {
          id: 2811,
          name: "New Taiwan Dollar",
          symbol: "twd",
          token: "NT$",
          space: "",
        },
        nzd: {
          id: 2802,
          name: "New Zealand Dollar",
          symbol: "nzd",
          token: "$",
          space: "",
        },
        nio: {
          id: 3560,
          name: "Nicaraguan CÃ³rdoba",
          symbol: "nio",
          token: "C$",
          space: "",
        },
        ngn: {
          id: 2819,
          name: "Nigerian Naira",
          symbol: "ngn",
          token: "â‚¦",
          space: "",
        },
        nok: {
          id: 2801,
          name: "Norwegian Krone",
          symbol: "nok",
          token: "kr",
          space: " ",
        },
        omr: {
          id: 3562,
          name: "Omani Rial",
          symbol: "omr",
          token: "Ø±.Ø¹.",
          space: "",
        },
        pkr: {
          id: 2804,
          name: "Pakistani Rupee",
          symbol: "pkr",
          token: "â‚¨",
          space: " ",
        },
        pab: {
          id: 3563,
          name: "Panamanian Balboa",
          symbol: "pab",
          token: "B/.",
          space: "",
        },
        pen: {
          id: 2822,
          name: "Peruvian Sol",
          symbol: "pen",
          token: "S/.",
          space: "",
        },
        php: {
          id: 2803,
          name: "Philippine Peso",
          symbol: "php",
          token: "â‚±",
          space: "",
        },
        pln: {
          id: 2805,
          name: "Polish ZÅ‚oty",
          symbol: "pln",
          token: "zÅ‚",
          space: "",
        },
        gbp: {
          id: 2791,
          name: "Pound Sterling",
          symbol: "gbp",
          token: "Â£",
          space: "",
        },
        qar: {
          id: 3564,
          name: "Qatari Rial",
          symbol: "qar",
          token: "Ø±.Ù‚",
          space: "",
        },
        ron: {
          id: 2817,
          name: "Romanian Leu",
          symbol: "ron",
          token: "lei",
          space: "",
        },
        rub: {
          id: 2806,
          name: "Russian Ruble",
          symbol: "rub",
          token: "â‚½",
          space: "",
        },
        sar: {
          id: 3566,
          name: "Saudi Riyal",
          symbol: "sar",
          token: "Ø±.Ø³",
          space: "",
        },
        rsd: {
          id: 3565,
          name: "Serbian Dinar",
          symbol: "rsd",
          token: "Ð´Ð¸Ð½.",
          space: "",
        },
        sgd: {
          id: 2808,
          name: "Singapore Dollar",
          symbol: "sgd",
          token: "S$",
          space: "",
        },
        zar: {
          id: 2812,
          name: "South African Rand",
          symbol: "zar",
          token: "R",
          space: " ",
        },
        krw: {
          id: 2798,
          name: "South Korean Won",
          symbol: "krw",
          token: "â‚©",
          space: "",
        },
        ssp: {
          id: 3567,
          name: "South Sudanese Pound",
          symbol: "ssp",
          token: "Â£",
          space: "",
        },
        ves: {
          id: 3573,
          name: "Sovereign Bolivar",
          symbol: "ves",
          token: "Bs.",
          space: "",
        },
        lkr: {
          id: 3553,
          name: "Sri Lankan Rupee",
          symbol: "lkr",
          token: "Rs",
          space: "",
        },
        sek: {
          id: 2807,
          name: "Swedish Krona",
          symbol: "sek",
          token: "kr",
          space: " ",
        },
        chf: {
          id: 2785,
          name: "Swiss Franc",
          symbol: "chf",
          token: "Fr",
          space: ". ",
        },
        thb: {
          id: 2809,
          name: "Thai Baht",
          symbol: "thb",
          token: "à¸¿",
          space: "",
        },
        ttd: {
          id: 3569,
          name: "Trinidad and Tobago Dollar",
          symbol: "ttd",
          token: "$",
          space: "",
        },
        tnd: {
          id: 3568,
          name: "Tunisian Dinar",
          symbol: "tnd",
          token: "Ø¯.Øª",
          space: "",
        },
        try: {
          id: 2810,
          name: "Turkish Lira",
          symbol: "try",
          token: "â‚º",
          space: "",
        },
        ugx: {
          id: 3570,
          name: "Ugandan Shilling",
          symbol: "ugx",
          token: "Sh",
          space: "",
        },
        uah: {
          id: 2824,
          name: "Ukrainian Hryvnia",
          symbol: "uah",
          token: "â‚´",
          space: "",
        },
        aed: {
          id: 2813,
          name: "United Arab Emirates Dirham",
          symbol: "aed",
          token: "Ø¯.Ø¥",
          space: "",
        },
        uyu: {
          id: 3571,
          name: "Uruguayan Peso",
          symbol: "uyu",
          token: "$",
          space: "",
        },
        uzs: {
          id: 3572,
          name: "Uzbekistan Som",
          symbol: "uzs",
          token: "so'm",
          space: "",
        },
        vnd: {
          id: 2823,
          name: "Vietnamese Dong",
          symbol: "vnd",
          token: "â‚«",
          space: "",
        },
      };
    },
    36: function (e, a) {
      function n(a) {
        return (
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? (e.exports = n =
                function (e) {
                  return typeof e;
                })
            : (e.exports = n =
                function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          n(a)
        );
      }
      e.exports = n;
    },
    37: function (e, a, n) {
      "use strict";
      n.r(a);
      var t = n(36),
        o = n.n(t),
        i = n(1);
      !(function () {
        var e;
        if (void 0 === window.jQuery || "1.11.1" !== window.jQuery.fn.jquery) {
          var a = document.createElement("script");
          a.setAttribute("type", "text/javascript"),
            a.setAttribute(
              "src",
              "https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"
            ),
            a.readyState
              ? (a.onreadystatechange = function () {
                  ("complete" != this.readyState &&
                    "loaded" != this.readyState) ||
                    n();
                })
              : (a.onload = n),
            (
              document.getElementsByTagName("head")[0] ||
              document.documentElement
            ).appendChild(a);
        } else (e = window.jQuery), s();
        function n() {
          (e = window.jQuery.noConflict(!0)), s();
        }
        function t(e) {
          var a = " " + document.cookie,
            n = " " + e + "=",
            t = null,
            o = 0,
            i = 0;
          return (
            a.length > 0 &&
              -1 != (o = a.indexOf(n)) &&
              ((o += n.length),
              -1 == (i = a.indexOf(";", o)) && (i = a.length),
              (t = unescape(a.substring(o, i)))),
            t
          );
        }
        function s() {
          var a,
            n,
            s =
              ((a = t("_locale") || void 0),
              (n = !(
                "object" !=
                  ("undefined" == typeof Intl ? "undefined" : o()(Intl)) ||
                !Intl ||
                "function" != typeof Intl.NumberFormat
              )),
              {
                toLocaleString: function (e, t) {
                  var o = Number(e);
                  if (isNaN(o)) return e;
                  var i,
                    s = t && t.minDecimalPlaces,
                    r = t && t.maxDecimalPlaces;
                  return void 0 === s || void 0 === r
                    ? ((i = o), n ? i.toLocaleString(a) : i.toLocaleString())
                    : (function (e, t, o) {
                        return n
                          ? e.toLocaleString(a, {
                              minimumFractionDigits: t,
                              maximumFractionDigits: o,
                            })
                          : e.toFixed(o);
                      })(o, s, r);
                },
              });
          function r(e, a) {
            var n = a;
            a = Math.pow(10, a);
            for (var t = ["K", "M", "B", "T"], o = t.length - 1; o >= 0; o--) {
              var i = Math.pow(10, 3 * (o + 1));
              if (i <= e) {
                1e3 == (e = Math.round((e * a) / i) / a) &&
                  o < t.length - 1 &&
                  ((e = 1), o++),
                  (e = s.toLocaleString(Number(e), {
                    minDecimalPlaces: n,
                    maxDecimalPlaces: n,
                  })),
                  (e += " " + t[o]);
                break;
              }
            }
            return e;
          }
          function l(e, a) {
            return "BTC" == a
              ? (function (e) {
                  e =
                    e >= 1e3
                      ? s.toLocaleString(Math.round(e))
                      : e >= 1
                      ? s.toLocaleString(e, {
                          minDecimalPlaces: 8,
                          maxDecimalPlaces: 8,
                        })
                      : e < 1e-8
                      ? Number(e).toExponential(4)
                      : s.toLocaleString(e, {
                          minDecimalPlaces: 8,
                          maxDecimalPlaces: 8,
                        });
                  return e;
                })(e)
              : (function (e) {
                  e =
                    e >= 1
                      ? e >= 1e5
                        ? s.toLocaleString(Math.round(e))
                        : s.toLocaleString(e, {
                            minDecimalPlaces: 2,
                            maxDecimalPlaces: 2,
                          })
                      : e < 1e-6
                      ? Number(e).toExponential(2)
                      : s.toLocaleString(e, {
                          minDecimalPlaces: 6,
                          maxDecimalPlaces: 6,
                        });
                  return e;
                })(e);
          }
          function m(e, a, n) {
            var t = a,
              o = {
                btc: "à¸¿",
                usd: "$",
                eur: "â‚¬",
                cny: "Â¥",
                gbp: "Â£",
                cad: "$",
                rub: "<img src='/static/img/fiat/ruble.gif'/>",
                hkd: "$",
                jpy: "Â¥",
                aud: "$",
                brl: "R$",
                inr: "â‚¹",
                krw: "â‚©",
                mxn: "$",
                idr: "Rp",
                chf: "Fr",
              };
            return (
              e.toLowerCase() in o && (t = o[e.toLowerCase()] + t),
              n &&
                (t =
                  t +
                  ' <span style="font-size:12px">' +
                  e.toUpperCase() +
                  "</span>"),
              t
            );
          }
          function c(
            e,
            a,
            n,
            t,
            o,
            i,
            c,
            d,
            p,
            u,
            b,
            y,
            k,
            g,
            h,
            f,
            v,
            x,
            w,
            S
          ) {
            var D = w
                ? "https://s2.coinmarketcap.com/static/img/coins/64x64/" +
                  w +
                  ".png"
                : "https://files.coinmarketcap.com/static/widget/coins_legacy/64x64/" +
                  e +
                  ".png",
              z = "#009e73";
            u < 0 && (z = "#d94040"),
              (u = s.toLocaleString(u, {
                minDecimalPlaces: 2,
                maxDecimalPlaces: 2,
              }));
            var C = g ? "(" + t + ")" : "",
              P = c ? l(c, o) : "?",
              L = u ? '<span style="color:' + z + '">(' + u + "%)" : "",
              j = b ? r(b, 2) : "?",
              _ = y ? r(y, 2) : "?",
              R =
                "zh" == S
                  ? "ç”±CoinMarketCapè£å¹¸å‘ˆçŽ°"
                  : "Powered by CoinMarketCap",
              M = "";
            d
              ? (M =
                  '<br><span style="font-size: 14px; color: rgba(var(--primary-rgb), 0.5)">' +
                  (p ? l(p, d) : "?") +
                  " " +
                  d +
                  " </span>")
              : (M = "");
            var $ =
                "utm_medium=widget&utm_campaign=cmcwidget&utm_source=" +
                location.hostname +
                "&utm_content=" +
                e,
              B =
                '      <div class="overflow-hidden" style="border:3px solid var(--background);border-radius: 1.5rem;font-family: \'Helvetica Neue\',Helvetica,Arial,sans-serif;min-width:285px;">        <div style="display:flex;padding:12px 0px;background-color:var(--background)">          <div style="width:33%;display: flex;justify-content: center;align-items: center;"><img style="width:46px;height:46px;" src="' +
                D +
                '"></div>          <div style="width:67%;border: none;text-align:left;line-height:1.4">              <span style="font-size: 18px;" class="text-white">' +
                "" +
                a +
                " " +
                C +
                '</span> <br>              <span style="font-size: 16px;">                <span style="font-size: 20px; font-weight: 500;">' +
                P +
                '</span>                <span style="font-size: 14px; font-weight: 500;">' +
                o +
                '</span>                <span style="margin-left:6px; font-weight: 500;">' +
                L +
                "</span>                " +
                M +
                "              </span>          </div>      </div>";
            return (
              (B += (function (e, a, n, t, o, i, s, r, l) {
                var c = 0,
                  d = 0,
                  p = "",
                  u = "",
                  b = "",
                  y = "zh" == l ? "äº¤æ˜“é‡ï¼ˆ24å°æ—¶ï¼‰" : "VOLUME";
                if ((e && c++, a && c++, n && c++, 0 == c)) return "";
                if (
                  (1 == c && (d = 100),
                  2 == c && (d = 49.8),
                  3 == c && (d = 33),
                  e)
                ) {
                  var k = 0;
                  (n || a) && (k = 1),
                    (p =
                      '                  <div style="text-align:center;float:left;width:' +
                      d +
                      "%;font-size:12px;padding:12px 0;border-right:" +
                      3 +
                      'px solid var(--background);line-height:1em;">                      ' +
                      ("zh" == l ? "æŽ’å" : "RANK") +
                      '                      <br><br>                      <span style="font-size: 18px; " class="text-white">' +
                      i +
                      "</span>                  </div>");
                }
                n &&
                  ((k = 0),
                  a && (k = 1),
                  (u =
                    '                  <div style="text-align:center;float:left;width:' +
                    d +
                    "%;font-size:12px;padding:12px 0 16px 0;border-right:" +
                    3 +
                    'px solid var(--background);line-height:1em;">                      ' +
                    ("zh" == l ? "å¸‚å€¼" : "MARKET CAP") +
                    "                      <br><br>            <span class='text-white'>       " +
                    m(o, s, t) +
                    "</span>   </span>                  </div>"));
                a &&
                  (b =
                    '                  <div style="text-align:center;float:left;width:' +
                    d +
                    '%;font-size:12px;padding:12px 0 16px 0;line-height:1em;">                      ' +
                    y +
                    '                      <br><br>                      <span style="font-size: 16px; " class="text-white">' +
                    m(o, r, t) +
                    "</span>                  </div>");
                return (
                  '<div style="border-top: 2px solid var(--background);clear:both;">' +
                  p +
                  u +
                  b +
                  "</div>"
                );
              })(h, f, v, x, i, k, j, _, S)),
              (B +=
                '  <div style="border-top: 2px solid var(--background);text-align:center;clear:both;font-size:12px;font-style:italic;padding:8px 0; background-color:var(--background);"> ' +
                " </div></div>")
            );
          }
          e(document).ready(function (e) {
            var a = Object.values(i.a);
            a.push({
              name: "Bitcoin",
              token: "BTC",
              space: " ",
              id: 1,
              symbol: "BTC",
            }),
              e(".coinmarketcap-currency-widget").each(function () {
                var n = e(this).attr("data-currency"),
                  t = e(this).data("currencyid"),
                  o = e(this).attr("data-base").toUpperCase(),
                  i = a.find(function (e) {
                    return e.symbol.toUpperCase() === o;
                  }).id,
                  s = e(this).attr("data-secondary");
                s =
                  "BTC" == (s = s ? s.toUpperCase() : null) || "USD" == s
                    ? s
                    : null;
                var r = a.find(function (e) {
                    return e.symbol.toUpperCase() === s;
                  }),
                  l = void 0 !== r ? r.id : null,
                  m = e(this).attr("data-stats");
                m = (m = m ? m.toUpperCase() : null) == o ? o : "USD";
                var d = a.find(function (e) {
                    return e.symbol.toUpperCase() === m;
                  }).id,
                  p = e(this).data("language");
                p = p || "en-us";
                var u,
                  b = !1 !== e(this).data("ticker"),
                  y = !1 !== e(this).data("rank"),
                  k = !1 !== e(this).data("marketcap"),
                  g = !1 !== e(this).data("volume"),
                  h = !1 !== e(this).data("statsticker"),
                  f = this;
                (u = t
                  ? "https://3rdparty-apis.coinmarketcap.com/v1/cryptocurrency/widget?id=" +
                    t +
                    "&convert_id=1,2781," +
                    i
                  : "https://widgets.coinmarketcap.com/v1/ticker/" +
                    n +
                    "/?ref=widget&convert_id=" +
                    i),
                  e.get({
                    url: u,
                    success: function (a) {
                      if (
                        ((a = a.length ? a[0] : a.data),
                        n || (n = a[t].name.toLowerCase()),
                        t)
                      )
                        var r = a[t],
                          u = parseFloat(r.quote[i].price),
                          v = s && parseFloat(r.quote[l].price),
                          x = parseInt(r.quote[d].market_cap),
                          w = parseInt(r.quote[d].volume_24h),
                          S = parseFloat(r.quote[i].percent_change_24h),
                          D = a[t].name,
                          z = a[t].symbol,
                          C = a[t].cmc_rank;
                      else {
                        var P = "price_" + o.toLowerCase(),
                          L = s ? "price_" + s.toLowerCase() : null,
                          j = "market_cap_" + m.toLowerCase(),
                          _ = "24h_volume_" + m.toLowerCase();
                        (u = parseFloat(a[P])),
                          (v = L ? parseFloat(a[L]) : null),
                          (x = parseInt(a[j])),
                          (w = parseInt(a[_])),
                          (S = Number(a.percent_change_24h)),
                          (D = a.name),
                          (z = a.symbol),
                          (C = a.rank);
                      }
                      var R = a[t].slug,
                        M = c(
                          n,
                          D,
                          R,
                          z,
                          o,
                          m,
                          u,
                          s,
                          v,
                          S,
                          x,
                          w,
                          C,
                          b,
                          y,
                          g,
                          k,
                          h,
                          t,
                          p
                        );
                      e(f).html(M),
                        e(f)
                          .find("a")
                          .css({ "text-decoration": "none", color: "#1070e0" });
                    },
                  });
              });
          });
        }
      })();
    },
  });
}
