/*
jQWidgets v9.0.0 (2020-Jan)
Copyright (c) 2011-2020 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

(function(b) {
    var a = (function() {
        var c = {},
            u, q, j, l, g, h, o, p;

        function d(C, B, x, A, y, v, w) {
            var z = this;
            if (!z) {
                z = window.jqx
            }
            z.hierarchy = y;
            z.exportFormat = v;
            z.filename = w;
            C.beginFile(w);
            n(C);
            k(C);
            C.endFile(w);
            return C.getFile()
        }

        function n(z) {
            var x = true;
            b.each(q, function() {
                if (this.hidden) {
                    x = false;
                    return false
                }
            });
            z.beginHeader(x);
            var w = 0;
            for (var v in q) {
                if (q[v].columnsDataFields) {
                    v = q[v].columnsDataFields[w].displayfield
                }
                var y = m(v, q[v]);
                z.appendHeaderCell(q[v], v, y, x, w);
                w++
            }
            z.endHeader(x)
        }

        function k(y) {
            var x = this;
            if (!x) {
                x = window.jqx
            }
            y.beginBody();
            if (x.hierarchy) {
                var w = function(A) {
                    for (var z = 0; z < A.length; z += 1) {
                        if (A[z] !== undefined) {
                            y.hierarchy = true;
                            y.beginRow(A[z].level);
                            e(y, A[z], z, true);
                            if (A[z].records) {
                                y.beginRows(A[z].level);
                                w(A[z].records);
                                y.endRows(A[z].level)
                            }
                            y.endRow(A[z].level)
                        }
                    }
                };
                w(u);
                y.endBody();
                return
            }
            for (var v = 0; v < u.length; v += 1) {
                if (u[v] !== undefined) {
                    e(y, u[v], v)
                }
            }
            y.endBody()
        }

        function e(x, A, y, D) {
            var C = this;
            if (!C) {
                C = window.jqx
            }
            var w;
            if (D != true) {
                x.beginRow()
            }
            var B = 0;
            for (var z in q) {
                if (q[z].columnsDataFields) {
                    z = q[z].columnsDataFields[B].displayfield
                }
                w = s(y, z);
                if (w) {
                    if (w.level != undefined) {
                        if (w.index - 1 > A.level && w.index - 1 < w.maxLevel) {
                            B++;
                            continue
                        }
                    }
                    if (w.maxLevel != undefined) {
                        if (w.index - 1 == w.maxLevel) {
                            w = b.extend({}, w);
                            w.merge = w.maxLevel - A.level - 1
                        }
                    }
                }
                if (A.level != undefined && A.label != undefined) {
                    if (C.exportFormat === "xml" || C.exportFormat === "json") {
                        var v = {};
                        v.text = "group";
                        x.appendBodyCell(A.label, v, w, A, B, "group");
                        break
                    }
                }
                if (A.hasOwnProperty(z)) {
                    x.appendBodyCell(A[z], q[z], w, A, B)
                } else {
                    x.appendBodyCell("", q[z], w, A, B)
                }
                B++
            }
            if (D != true) {
                x.endRow()
            }
        }

        function m(w, x) {
            if (x.style) {
                return j[x.style]
            }
            var v = t();
            if (v.length > 0) {
                return v[0].style
            }
            return null
        }

        function t() {
            if (!g) {
                g = new Array();
                b.each(j, function(v, w) {
                    g[g.length] = {
                        name: v,
                        style: w
                    }
                })
            }
            return g
        }

        function s(A, z) {
            var B = q[z];
            if (B) {
                if (B.customCellStyles) {
                    var x = B.customCellStyles[A];
                    if (x) {
                        return j[x]
                    }
                }
                if (B.cellStyle) {
                    if (B.cellAltStyle) {
                        var w = A % 2;
                        if (w == 0) {
                            return j[B.cellStyle]
                        }
                        return j[B.cellAltStyle]
                    }
                    return j[B.cellStyle]
                } else {
                    var v = t();
                    if (v.length > 0) {
                        var w = A % (v.length - 1);
                        var y = v[w + 1].style;
                        return y
                    }
                }
            }
            return null
        }

        function r(y, w, x) {
            var v = document.createElement("input");
            v.name = w;
            v.value = y;
            v.type = "hidden";
            x.appendChild(v);
            return v
        }

        function f(x, v, w) {
            var y = document.createElement("textarea");
            y.name = v;
            y.value = x;
            w.appendChild(y);
            return y
        }

        function i(w, z, y, v, A) {
            var x = document.createElement("form");
            r(w, "filename", x);
            r(z, "format", x);
            f(y, "content", x);
            if (v == undefined || v == "") {
                if (window && window.location.toString().indexOf("jqwidgets.com") >= 0) {
                    v = "https://jqwidgets.com/export_server/dataexport.php"
                } else {
                    v = "http://jquerygrid.net/export_server/dataexport.php"
                }
            }
            x.action = v;
            x.method = "post";
            if (A) {
                x.acceptCharset = A
            }
            document.body.appendChild(x);
            return x
        }
        l = function(A, y, x, w, z, v) {
            if (!(this instanceof a)) {
                return new a(A, y, x, z, v)
            }
            u = A;
            q = y;
            j = x;
            this.exportTo = function(K, H, G, B) {
                K = K.toString().toLowerCase();
                var D = c[K];
                if (typeof D === "undefined") {
                    throw "You can't export to " + K + " format."
                }
                if (K === "pdf" && B == undefined) {
                    var M = this.exportTo(K, H, K, "pdf");
                    if (!b.jqx.pdfExport) {
                        b.jqx.pdfExport = {
                            orientation: "portrait",
                            paperSize: "a4"
                        }
                    }
                    var L = new pdfDataExport(b.jqx.pdfExport.orientation, "pt", b.jqx.pdfExport.paperSize);
                    L.cellInitialize();
                    var J = b(M).find("th");
                    var I = b(M).find("tr");
                    var N = 0;
                    L.setFontSize(13 * 72 / 96);
                    var F = 595;
                    switch (b.jqx.pdfExport.paperSize) {
                        case "legal":
                            var F = 612;
                            if (b.jqx.pdfExport.orientation !== "portrait") {
                                F = 1008
                            }
                            break;
                        case "letter":
                            var F = 612;
                            if (b.jqx.pdfExport.orientation !== "portrait") {
                                F = 792
                            }
                            break;
                        case "a3":
                            var F = 841;
                            if (b.jqx.pdfExport.orientation !== "portrait") {
                                F = 1190
                            }
                            break;
                        case "a4":
                            var F = 595;
                            if (b.jqx.pdfExport.orientation !== "portrait") {
                                F = 842
                            }
                            break;
                        case "a5":
                            var F = 420;
                            if (b.jqx.pdfExport.orientation !== "portrait") {
                                F = 595
                            }
                            break
                    }
                    F -= 20;
                    var E = 0;
                    var C = [];
                    b.each(J, function(O) {
                        var P = parseInt(this.style.width);
                        if (isNaN(P)) {
                            P = 25
                        }
                        var Q = P * 72 / 96;
                        C[O] = Q;
                        E += Q
                    });
                    if (J.length === 0) {
                        b.each(I[0].cells, function(O) {
                            var P = parseInt(this.style.width);
                            if (isNaN(P)) {
                                P = F / I[0].cells.length
                            }
                            var Q = P * 72 / 96;
                            C[O] = Q;
                            E += Q
                        })
                    }
                    if (E > F) {
                        b.each(C, function(O) {
                            C[O] = (C[O] / E) * 100;
                            C[O] = C[O] * F / 100
                        })
                    }
                    b.each(J, function(P) {
                        var T = C[P];
                        var S = 25 * 72 / 96;
                        var R = L.getTextDimensions(b(this).html());
                        var Q = b(this).html();
                        if (R.w + 3 > T) {
                            var O = L.splitTextToSize(Q, T - 3);
                            var U = O[0];
                            if (U.length > 3) {
                                Q = U.substring(0, U.length - 3) + "..."
                            } else {
                                Q = U.substring(0, 1) + "..."
                            }
                            var O = L.splitTextToSize(Q, T - 3);
                            var U = O[0];
                            if (U != Q) {
                                Q = U
                            }
                        }
                        L.cell(10, 10, T, S, Q, N)
                    });
                    N++;
                    b.each(I, function(V) {
                        if (V === 0) {
                            return true
                        }
                        var P = b(this).children();
                        var Q = P.length > J.length && J.length > 0;
                        if (Q) {
                            var Y = P.length - J.length;
                            var Z = "";
                            var X = C[0];
                            var U = 25 * 72 / 96;
                            for (var R = 0; R <= Y; R++) {
                                var O = P[R].innerHTML;
                                if (O === "+" || O === "-") {
                                    O = O + " "
                                }
                                if (O === "&nbsp;") {
                                    O = "   "
                                }
                                Z += O
                            }
                            var T = L.getTextDimensions(Z);
                            if (T.w + 3 > X) {
                                var W = L.splitTextToSize(Z, X - 3);
                                var S = W[0];
                                if (S.length > 3) {
                                    Z = S.substring(0, S.length - 3) + "..."
                                } else {
                                    Z = S.substring(0, 1) + "..."
                                }
                                var W = L.splitTextToSize(Z, X - 3);
                                var S = W[0];
                                if (S != Z) {
                                    Z = S
                                }
                            }
                            L.cell(10, 10, X, U, Z, N);
                            for (var R = Y + 1; R < P.length; R++) {
                                var V = R - Y;
                                var X = C[V];
                                var U = 25 * 72 / 96;
                                var Z = b(P[R]).html();
                                var T = L.getTextDimensions(b(P[R]).html());
                                if (T.w + 3 > X) {
                                    var W = L.splitTextToSize(Z, X - 3);
                                    var S = W[0];
                                    if (S.length > 3) {
                                        Z = S.substring(0, S.length - 3) + "..."
                                    } else {
                                        Z = S.substring(0, 1) + "..."
                                    }
                                    var W = L.splitTextToSize(Z, X - 3);
                                    var S = W[0];
                                    if (S != Z) {
                                        Z = S
                                    }
                                }
                                L.cell(10, 10, X, U, Z, N)
                            }
                            N++;
                            return true
                        }
                        b.each(P, function(ab) {
                            var af = C[ab];
                            var ae = 25 * 72 / 96;
                            var ad = b(this).html();
                            var ac = L.getTextDimensions(b(this).html());
                            if (ac.w + 3 > af) {
                                var aa = L.splitTextToSize(ad, af - 3);
                                var ag = aa[0];
                                if (ag.length > 3) {
                                    ad = ag.substring(0, ag.length - 3) + "..."
                                } else {
                                    ad = ag.substring(0, 1) + "..."
                                }
                                var aa = L.splitTextToSize(ad, af - 3);
                                var ag = aa[0];
                                if (ag != ad) {
                                    ad = ag
                                }
                            }
                            L.cell(10, 10, af, ae, ad, N)
                        });
                        N++
                    });
                    if (b.jqx.browser.msie && b.jqx.browser.version < 10) {
                        throw new Error("PDF export requires a browser with HTML5 support");
                        return
                    }
                    return L
                }
                return d(D, u, q, j, H, G, B)
            };
            this.exportToFile = function(L, B, O, F, I) {
                if (L === "pdf") {
                    var N = this.exportTo(L, I, L, B);
                    if (!b.jqx.pdfExport) {
                        b.jqx.pdfExport = {
                            orientation: "portrait",
                            paperSize: "a4"
                        }
                    }
                    var M = new pdfDataExport(b.jqx.pdfExport.orientation, "pt", b.jqx.pdfExport.paperSize);
                    if (F == "utf-8" || F == "UTF-8") {
                        M.setFont("courier", "normal")
                    }
                    M.cellInitialize();
                    var K = b(N).find("th");
                    var J = b(N).find("tr");
                    var P = 0;
                    M.setFontSize(13 * 72 / 96);
                    var G = 595;
                    switch (b.jqx.pdfExport.paperSize) {
                        case "legal":
                            var G = 612;
                            if (b.jqx.pdfExport.orientation !== "portrait") {
                                G = 1008
                            }
                            break;
                        case "letter":
                            var G = 612;
                            if (b.jqx.pdfExport.orientation !== "portrait") {
                                G = 792
                            }
                            break;
                        case "a3":
                            var G = 841;
                            if (b.jqx.pdfExport.orientation !== "portrait") {
                                G = 1190
                            }
                            break;
                        case "a4":
                            var G = 595;
                            if (b.jqx.pdfExport.orientation !== "portrait") {
                                G = 842
                            }
                            break;
                        case "a5":
                            var G = 420;
                            if (b.jqx.pdfExport.orientation !== "portrait") {
                                G = 595
                            }
                            break
                    }
                    G -= 20;
                    var E = 0;
                    var C = [];
                    b.each(K, function(Q) {
                        var R = parseInt(this.style.width);
                        if (isNaN(R)) {
                            R = 25
                        }
                        var S = R * 72 / 96;
                        C[Q] = S;
                        E += S
                    });
                    if (K.length === 0) {
                        b.each(J[0].cells, function(Q) {
                            var R = parseInt(this.style.width);
                            if (isNaN(R)) {
                                R = G / J[0].cells.length
                            }
                            var S = R * 72 / 96;
                            C[Q] = S;
                            E += S
                        })
                    }
                    if (E > G) {
                        b.each(C, function(Q) {
                            C[Q] = (C[Q] / E) * 100;
                            C[Q] = C[Q] * G / 100
                        })
                    }
                    b.each(K, function(R) {
                        var V = C[R];
                        var U = 25 * 72 / 96;
                        var T = M.getTextDimensions(b(this).html());
                        var S = b(this).html();
                        if (T.w + 3 > V) {
                            var Q = M.splitTextToSize(S, V - 3);
                            var W = Q[0];
                            if (W.length > 3) {
                                S = W.substring(0, W.length - 3) + "..."
                            } else {
                                S = W.substring(0, 1) + "..."
                            }
                            var Q = M.splitTextToSize(S, V - 3);
                            var W = Q[0];
                            if (W != S) {
                                S = W
                            }
                        }
                        M.cell(10, 10, V, U, S, P)
                    });
                    P++;
                    b.each(J, function(X) {
                        if (X === 0) {
                            return true
                        }
                        var R = b(this).children();
                        var S = R.length > K.length && K.length > 0;
                        if (S) {
                            var aa = R.length - K.length;
                            var ab = "";
                            var Z = C[0];
                            var W = 25 * 72 / 96;
                            for (var T = 0; T <= aa; T++) {
                                var Q = R[T].innerHTML;
                                if (Q === "+" || Q === "-") {
                                    Q = Q + " "
                                }
                                if (Q === "&nbsp;") {
                                    Q = "   "
                                }
                                ab += Q
                            }
                            var V = M.getTextDimensions(ab);
                            if (V.w + 3 > Z) {
                                var Y = M.splitTextToSize(ab, Z - 3);
                                var U = Y[0];
                                if (U.length > 3) {
                                    ab = U.substring(0, U.length - 3) + "..."
                                } else {
                                    ab = U.substring(0, 1) + "..."
                                }
                                var Y = M.splitTextToSize(ab, Z - 3);
                                var U = Y[0];
                                if (U != ab) {
                                    ab = U
                                }
                            }
                            M.cell(10, 10, Z, W, ab, P);
                            for (var T = aa + 1; T < R.length; T++) {
                                var X = T - aa;
                                var Z = C[X];
                                var W = 25 * 72 / 96;
                                var ab = b(R[T]).html();
                                if (ab === "&nbsp;") {
                                    ab = "   "
                                }
                                var V = M.getTextDimensions(b(R[T]).html());
                                if (V.w + 3 > Z) {
                                    var Y = M.splitTextToSize(ab, Z - 3);
                                    var U = Y[0];
                                    if (U.length > 3) {
                                        ab = U.substring(0, U.length - 3) + "..."
                                    } else {
                                        ab = U.substring(0, 1) + "..."
                                    }
                                    var Y = M.splitTextToSize(ab, Z - 3);
                                    var U = Y[0];
                                    if (U != ab) {
                                        ab = U
                                    }
                                }
                                M.cell(10, 10, Z, W, ab, P)
                            }
                            P++;
                            return true
                        }
                        b.each(R, function(ad) {
                            var ah = C[ad];
                            var ag = 25 * 72 / 96;
                            var af = b(this).html();
                            if (af === "&nbsp;") {
                                af = "   "
                            }
                            var ae = M.getTextDimensions(b(this).html());
                            if (ae.w + 3 > ah) {
                                var ac = M.splitTextToSize(af, ah - 3);
                                var ai = ac[0];
                                if (ai.length > 3) {
                                    af = ai.substring(0, ai.length - 3) + "..."
                                } else {
                                    af = ai.substring(0, 1) + "..."
                                }
                                var ac = M.splitTextToSize(af, ah - 3);
                                var ai = ac[0];
                                if (ai != af) {
                                    af = ai
                                }
                            }
                            M.cell(10, 10, ah, ag, af, P)
                        });
                        P++
                    });
                    if (b.jqx.browser.msie && b.jqx.browser.version < 10) {
                        throw new Error("PDF export requires a browser with HTML5 support");
                        return
                    }
                    M.save(B + ".pdf");
                    return
                }
                var H = this.exportTo(L, I, L, B),
                    D = i(B, L, H, O, F);
                D.submit();
                document.body.removeChild(D)
            };
            this.exportToLocalFile = function(F, C, D, B) {
                var E = this.exportTo(F, D, B);
                document.location.href = "data:application/octet-stream;filename=" + C + "," + encodeURIComponent(E)
            }
        };
        l.extend = function(v, w) {
            if (w instanceof b.jqx.dataAdapter.DataExportModuleBase) {
                c[v] = w
            } else {
                throw "The module " + v + " is not instance of DataExportModuleBase."
            }
        };
        return l
    }());
    b.jqx.dataAdapter.ArrayExporter = a
})(jqxBaseFramework);
(function(b) {
    var a = function() {
        this.formatData = function(f, e, c, h) {
            if (e === "date") {
                var d = "";
                if (typeof f === "string") {
                    d = b.jqx.dataFormat.tryparsedate(f);
                    f = d
                }
                if (f === "" || f === null) {
                    return ""
                }
                d = b.jqx.dataFormat.formatdate(f, c, h);
                if ((d && d.toString() == "NaN") || d == null) {
                    return ""
                }
                f = d
            } else {
                if (e === "number" || e === "float" || e === "int" || e == "integer") {
                    if (f === "" || f === null) {
                        return ""
                    }
                    if (!isNaN(new Number(f))) {
                        var g = b.jqx.dataFormat.formatnumber(f, c, h);
                        if (g.toString() == "NaN") {
                            return ""
                        } else {
                            f = g
                        }
                    }
                } else {
                    f = f
                }
            }
            if (f === null) {
                return ""
            }
            return f
        };
        this.getFormat = function(f) {
            var c = f ? f.formatString : "";
            var e = f ? f.localization : "";
            var d = "string";
            d = f ? f.type : "string";
            if (d == "number" || d == "float") {
                if (!c) {
                    c = "f2"
                }
            }
            if (d == "int" || d == "integer") {
                if (!c) {
                    c = "n0"
                }
            }
            if (d == "date") {
                if (!c) {
                    c = "d"
                }
            }
            return {
                type: d,
                formatString: c,
                localization: e
            }
        };
        this.beginFile = function() {
            throw "Not implemented!"
        };
        this.beginHeader = function() {
            throw "Not implemented!"
        };
        this.appendHeaderCell = function() {
            throw "Not implemented!"
        };
        this.endHeader = function() {
            throw "Not implemented!"
        };
        this.beginBody = function() {
            throw "Not implemented!"
        };
        this.beginRow = function() {
            throw "Not implemented!"
        };
        this.beginRows = function() {
            throw "Not implemented!"
        };
        this.endRows = function() {
            throw "Not implemented!"
        };
        this.appendBodyCell = function() {
            throw "Not implemented!"
        };
        this.endRow = function() {
            throw "Not implemented!"
        };
        this.endBody = function() {
            throw "Not implemented!"
        };
        this.endFile = function() {
            throw "Not implemented!"
        };
        this.getFile = function() {
            throw "Not implemented!"
        }
    };
    b.jqx.dataAdapter.DataExportModuleBase = a
})(jqxBaseFramework);
(function(d) {
    var c = function(j) {
        var e, h, g;
        var l = 0;
        var i = this;
        this.beginFile = function() {
            e = ""
        };
        this.beginHeader = function() {};
        this.appendHeaderCell = function(q, r, p, m, n) {
            if (p) {
                if (p.level != undefined) {
                    if (n < p.maxLevel) {
                        return
                    } else {
                        if (n === p.maxLevel) {
                            if (m) {
                                k(q.text)
                            }
                            for (var o = 0; o < p.maxLevel; o++) {
                                k("")
                            }
                            return
                        }
                    }
                }
            }
            g = m;
            if (m) {
                k(q.text)
            }
        };
        this.endHeader = function() {
            this.endRow()
        };
        this.beginBody = function() {
            l = 0
        };
        this.beginRow = function() {
            if ((l > 0) || (l == 0 && g)) {
                e += "\n"
            }
            l++
        };
        this.appendBodyCell = function(q, m, p, r, n) {
            if (p) {
                if (p.maxLevel != undefined) {
                    if (n === p.maxLevel) {
                        k(q, m);
                        for (var o = 0; o < p.maxLevel - r.level - 1; o++) {
                            k("", m)
                        }
                        return
                    }
                }
            }
            k(q, m)
        };
        this.endRow = function() {
            e = e.substring(0, e.length - 1)
        };
        this.endBody = function() {};
        this.endFile = function() {};
        this.getFile = function() {
            return e
        };

        function f(m, o) {
            if (o) {
                var n = i.getFormat(o);
                m = i.formatData(m, n.type, n.formatString, n.localization)
            }
            m = '"' + m + '"';
            return m
        }

        function k(m, n) {
            m = f(m, n);
            e += m + j
        }
    };
    c.prototype = new d.jqx.dataAdapter.DataExportModuleBase();
    var a = function() {};
    a.prototype = new c(",");
    var b = function() {};
    b.prototype = new c("\t");
    d.jqx.dataAdapter.ArrayExporter.extend("csv", new a());
    d.jqx.dataAdapter.ArrayExporter.extend("tsv", new b())
})(jqxBaseFramework);
(function(d) {
    var a = function() {
        var i = false;
        var g;
        var h;
        var j = 0;
        this.setPDF = function() {
            i = true
        };
        this.beginFile = function(k) {
            if (i || k == undefined) {
                g = '<table style="empty-cells: show;" cellspacing="0" cellpadding="2">'
            } else {
                g = '<html>\n\t<head>\n\t\t<title></title>\n\t\t<meta http-equiv=Content-type content="text/html; charset=UTF-8">\n\t</head>\n\t<body>\n\t\t<table style="empty-cells: show;" cellspacing="0" cellpadding="2">'
            }
        };
        this.beginHeader = function() {
            if (i) {
                g += "\n\t<thead><tr>"
            } else {
                g += "\n\t\t\t<thead>"
            }
        };
        this.appendHeaderCell = function(m, n, l, k) {
            h = k;
            if (!k) {
                return
            }
            if (i) {
                g += '\n\t\t\t\t<th style="' + f(l) + '">' + m.text + "</th>"
            } else {
                if (l.disabled) {
                    return
                }
                if (l.merge) {
                    if (m.width) {
                        g += "\n\t\t\t\t<th colspan=" + (1 + l.merge) + ' style="width: ' + m.width + "px; " + f(l) + '">' + m.text + "</th>"
                    } else {
                        g += "\n\t\t\t\t<th colspan=" + (1 + l.merge) + ' style="' + f(l) + '">' + m.text + "</th>"
                    }
                } else {
                    if (m.width) {
                        g += '\n\t\t\t\t<th style="width: ' + m.width + "px; " + f(l) + '">' + m.text + "</th>"
                    } else {
                        g += '\n\t\t\t\t<th style="' + f(l) + '">' + m.text + "</th>"
                    }
                }
            }
        };
        this.endHeader = function() {
            if (i) {
                g += "\n\t</tr></thead>"
            } else {
                g += "\n\t\t\t</thead>"
            }
        };
        this.beginBody = function() {
            if (i) {
                g += "\n\t<tbody>"
            } else {
                g += "\n\t\t\t<tbody>"
            }
            j = 0
        };
        this.beginRow = function() {
            if (i) {
                g += "\n\t<tr>"
            } else {
                g += "\n\t\t\t\t<tr>"
            }
            j++
        };
        this.appendBodyCell = function(l, n, k) {
            var m = this.getFormat(n);
            if (l === "") {
                l = "&nbsp;"
            }
            if (i) {
                if (j == 1 && !h) {
                    g += '\n\t\t\t\t\t<td style="' + f(k) + ' border-top-width: 1px;">' + this.formatData(l, m.type, m.formatString, m.localization) + "</td>"
                } else {
                    g += '\n\t\t\t\t\t<td style="' + f(k) + '">' + this.formatData(l, m.type, m.formatString, m.localization) + "</td>"
                }
            } else {
                if (k.merge) {
                    if (j == 1 && !h) {
                        g += "\n\t\t\t\t\t<td colspan=" + (1 + k.merge) + ' style="' + f(k) + ' border-top-width: 1px;">' + this.formatData(l, m.type, m.formatString, m.localization) + "</td>"
                    } else {
                        g += "\n\t\t\t\t\t<td colspan=" + (1 + k.merge) + ' style="' + f(k) + '">' + this.formatData(l, m.type, m.formatString, m.localization) + "</td>"
                    }
                } else {
                    if (j == 1 && !h) {
                        g += '\n\t\t\t\t\t<td style="' + f(k) + ' border-top-width: 1px;">' + this.formatData(l, m.type, m.formatString, m.localization) + "</td>"
                    } else {
                        g += '\n\t\t\t\t\t<td style="' + f(k) + '">' + this.formatData(l, m.type, m.formatString, m.localization) + "</td>"
                    }
                }
            }
        };
        this.endRow = function() {
            if (i) {
                g += "\n\t</tr>"
            } else {
                g += "\n\t\t\t\t</tr>"
            }
        };
        this.endBody = function() {
            if (i) {
                g += "\n\t</tbody>"
            } else {
                g += "\n\t\t\t</tbody>"
            }
        };
        this.endFile = function(k) {
            if (i || k == undefined) {
                g += "\n</table>"
            } else {
                g += "\n\t\t</table>\n\t</body>\n</html>\n"
            }
        };
        this.getFile = function() {
            return g
        };

        function f(m) {
            var k = "";
            for (var l in m) {
                if (m.hasOwnProperty(l)) {
                    if (i && l == "font-size") {
                        m[l] = "100%"
                    }
                    k += l + ":" + m[l] + ";"
                }
            }
            return k
        }
    };
    a.prototype = new d.jqx.dataAdapter.DataExportModuleBase();
    var e = function() {};
    e.prototype = new a();
    var c = function() {};
    c.prototype = new a();
    var b = new c();
    d.jqx.dataAdapter.ArrayExporter.extend("html", new e());
    d.jqx.dataAdapter.ArrayExporter.extend("pdf", b)
})(jqxBaseFramework);
(function(b) {
    var a = function() {
        var h, l, d, i, c, j, m = {
            style: "",
            stylesMap: {
                font: {
                    color: "Color",
                    "font-family": "FontName",
                    "font-style": "Italic",
                    "font-weight": "Bold"
                },
                interior: {
                    "background-color": "Color",
                    background: "Color"
                },
                alignment: {
                    left: "Left",
                    center: "Center",
                    right: "Right"
                }
            },
            startStyle: function(p) {
                this.style += '\n\t\t<Style ss:ID="' + p + '" ss:Name="' + p + '">'
            },
            buildAlignment: function(q) {
                if (q["text-align"]) {
                    var r = this.stylesMap.alignment[q["text-align"]];
                    if (!r) {
                        r = "Left"
                    }
                    var p = '\n\t\t\t<Alignment ss:Vertical="Bottom" ss:Horizontal="' + r + '"/>';
                    this.style += p
                }
            },
            buildBorder: function(s) {
                if (s["border-color"]) {
                    var r = "\n\t\t\t<Borders>";
                    var u = '\n\t\t\t\t<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="' + s["border-color"] + '"/>';
                    var p = '\n\t\t\t\t<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="' + s["border-color"] + '"/>';
                    var q = '\n\t\t\t\t<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="' + s["border-color"] + '"/>';
                    var t = '\n\t\t\t\t<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="' + s["border-color"] + '"/>';
                    r += u;
                    r += p;
                    r += q;
                    r += t;
                    r += "\n\t\t\t</Borders>";
                    this.style += r
                }
            },
            buildFont: function(q) {
                var r = this.stylesMap.font,
                    p = "\n\t\t\t<Font ";
                for (var s in r) {
                    if (typeof q[s] !== "undefined") {
                        if (s === "font-style" && q[s].toString().toLowerCase() === "italic") {
                            p += 'ss:Italic="1" '
                        } else {
                            if (s === "font-weight" && q[s].toString().toLowerCase() === "bold") {
                                p += 'ss:Bold="1" '
                            } else {
                                if (s === "color") {
                                    p += "ss:" + r[s] + '="' + q[s] + '" '
                                }
                            }
                        }
                    }
                }
                p += "/>";
                this.style += p
            },
            buildInterior: function(q) {
                var r = this.stylesMap.interior,
                    t = "\n\t\t\t<Interior ";
                var p = false;
                for (var s in r) {
                    if (typeof q[s] !== "undefined") {
                        t += "ss:" + r[s] + '="' + q[s] + '" ';
                        p = true
                    }
                }
                if (p) {
                    t += 'ss:Pattern="Solid"'
                }
                t += "/>";
                this.style += t
            },
            buildFormat: function(q) {
                if (q.dataType == "number" || q.dataType == "float" || q.dataType == "int" || q.dataType == "integer") {
                    var p = q.formatString;
                    if (p == "" || p.indexOf("n") != -1 || p.indexOf("N") != -1) {
                        this.style += '\n\t\t\t<NumberFormat ss:Format="0"/>'
                    } else {
                        if (p == "f" || p == "F" || p == "D" || p.indexOf("d") != -1) {
                            this.style += '\n\t\t\t<NumberFormat ss:Format="#,##0.00_);[Red](#,##0.00)"/>'
                        } else {
                            if (p.indexOf("p") != -1 || p.indexOf("P") != -1) {
                                this.style += '\n\t\t\t<NumberFormat ss:Format="Percent"/>'
                            } else {
                                if (p.indexOf("c") != -1 || p.indexOf("C") != -1) {
                                    if (q.currencysymbol && parseInt(q.currencysymbol.charCodeAt(0)) == 8364) {
                                        this.style += '\n\t\t\t<NumberFormat ss:Format="Euro Currency"/>'
                                    } else {
                                        this.style += '\n\t\t\t<NumberFormat ss:Format="Currency"/>'
                                    }
                                }
                            }
                        }
                    }
                } else {
                    if (q.dataType == "date") {
                        this.style += '\n\t\t\t<NumberFormat ss:Format="Short Date"/>'
                    }
                }
            },
            closeStyle: function() {
                this.style += "\n\t\t</Style>"
            },
            toString: function() {
                var p = this.style;
                this.style = "";
                return p
            }
        };
        this.beginFile = function() {
            c = {};
            j = 0;
            h = '<?xml version="1.0"?>\n\t<?mso-application progid="Excel.Sheet"?> \n\t<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" \n\txmlns:o="urn:schemas-microsoft-com:office:office" \n\txmlns:x="urn:schemas-microsoft-com:office:excel" \n\txmlns:ss="urn:schemas-microsoft-com:office:spreadsheet" \n\txmlns:html="http://www.w3.org/TR/REC-html40"> \n\t<DocumentProperties xmlns="urn:schemas-microsoft-com:office:office"> \n\t<Version>12.00</Version> \n\t</DocumentProperties> \n\t<ExcelWorkbook xmlns="urn:schemas-microsoft-com:office:excel"> \n\t<WindowHeight>8130</WindowHeight> \n\t<WindowWidth>15135</WindowWidth> \n\t<WindowTopX>120</WindowTopX> \n\t<WindowTopY>45</WindowTopY> \n\t<ProtectStructure>False</ProtectStructure> \n\t<ProtectWindows>False</ProtectWindows> \n\t</ExcelWorkbook> \n\t<Styles>'
        };
        this.beginHeader = function() {
            l = '\n\t<Worksheet ss:Name="Sheet1">\n\t\t<Table>';
            d = [];
            i = []
        };
        this.appendHeaderCell = function(r, s, q) {
            var p = r.width != undefined ? r.width : r.text.length * 10;
            l += '\n\t\t\t<Column ss:Width="' + p + '"/>';
            d.push(r);
            i.push(q)
        };
        this.endHeader = function(p) {
            if (p) {
                this.beginRow();
                for (var q = 0; q < d.length; q += 1) {
                    if (i[q].disabled) {
                        continue
                    }
                    g.call(this, d[q]["text"], null, i[q])
                }
                this.endRow()
            }
        };
        this.beginBody = function() {};
        this.beginRow = function(q) {
            if (q != undefined) {
                l += "\n\t\t\t";
                for (var p = 0; p < q; p++) {
                    l += "\t"
                }
                l += "<Row>";
                return
            }
            l += "\n\t\t\t<Row>"
        };
        this.beginRows = function(p) {
            l += "\n\t\t\t\t<Rows>"
        };
        this.appendBodyCell = function(r, p, q, s) {
            g.call(this, r, p, q, s)
        };
        this.endRow = function(q) {
            if (q != undefined) {
                l += "\n\t\t\t";
                for (var p = 0; p < q; p++) {
                    l += "\t"
                }
                l += "</Row>";
                return
            }
            l += "\n\t\t\t</Row>"
        };
        this.endRows = function(q) {
            if (q != undefined) {
                l += "\n\t\t\t";
                for (var p = 0; p < q; p++) {
                    l += "\t"
                }
                l += "</Rows>";
                return
            }
        };
        this.endBody = function() {
            l += "\n\t\t</Table>"
        };
        this.endFile = function() {
            l += "\n\t</Worksheet>\n</Workbook>";
            h += "\n\t</Styles>"
        };
        this.getFile = function() {
            return h + l
        };

        function g(t, w, s, v) {
            var r = "String";
            var u = this.getFormat(w);
            if (t != null && t.toString().substring(0, 3) == "_AG") {
                t = t.toString().substring(3);
                r = "String"
            } else {
                if (u.type == "date") {
                    var q = t;
                    t = this.formatData(t, u.type, u.formatString, u.localization);
                    if (t === null || t === "") {
                        t = "";
                        r = "String"
                    } else {
                        t = q.toISOString();
                        r = "DateTime"
                    }
                }
                if (u.type == "string") {
                    if (t === null || t === undefined) {
                        t = ""
                    } else {
                        if (t.toString().indexOf("&") >= 0) {
                            t = t.toString().replace(/&/g, "&amp;")
                        }
                        if (t.toString().indexOf(">") >= 0) {
                            t = t.toString().replace(/>/g, "&gt;")
                        }
                        if (t.toString().indexOf("<") >= 0) {
                            t = t.toString().replace(/</g, "&lt;")
                        }
                        if (t.toString().indexOf('"') >= 0) {
                            t = t.toString().replace(/"/g, "&quot;")
                        }
                        if (t.toString().indexOf("'") >= 0) {
                            t = t.toString().replace(/'/g, "&apos;")
                        }
                    }
                }
                if (s.dataType == "number" || s.dataType == "float" || s.dataType == "int" || s.dataType == "integer") {
                    r = "Number";
                    t = parseFloat(t);
                    if (t === null || isNaN(t) || t === "") {
                        t = "";
                        r = "String"
                    }
                    if (t && r != "String" && t != "") {
                        if (w && w.formatString && w.formatString.indexOf("p") >= 0) {
                            t = t / 100
                        }
                    }
                    s.currencysymbol = w.localization.currencysymbol
                }
            }
            var p = f(s);
            if (s.merge) {
                l += '\n\t\t\t\t<Cell ss:MergeAcross="' + s.merge + '" ss:StyleID="' + p + '"><Data ss:Type="' + r + '">' + t + "</Data></Cell>"
            } else {
                l += '\n\t\t\t\t<Cell ss:StyleID="' + p + '"><Data ss:Type="' + r + '">' + t + "</Data></Cell>"
            }
        }

        function n() {
            j += 1;
            return "xls-style-" + j
        }

        function k(q) {
            for (var p in c) {
                if (o(q, c[p]) && o(c[p], q)) {
                    return p
                }
            }
            return undefined
        }

        function o(t, q) {
            var s = true;
            for (var r in t) {
                if (t[r] !== q[r]) {
                    s = false
                }
            }
            return s
        }

        function e(q, p) {
            m.startStyle(q);
            m.buildAlignment(p);
            m.buildBorder(p);
            m.buildFont(p);
            m.buildInterior(p);
            m.buildFormat(p);
            m.closeStyle();
            h += m.toString()
        }

        function f(p) {
            if (!p) {
                return ""
            }
            var q = k(p);
            if (typeof q === "undefined") {
                q = n();
                c[q] = p;
                e(q, p)
            }
            return q
        }
    };
    a.prototype = new b.jqx.dataAdapter.DataExportModuleBase();
    b.jqx.dataAdapter.ArrayExporter.extend("xls", new a())
})(jqxBaseFramework);
(function(b) {
    var a = function() {
        var e, c, d;
        this.beginFile = function() {
            e = '<?xml version="1.0" encoding="UTF-8" ?>';
            e += "\n<table>"
        };
        this.beginHeader = function() {
            c = []
        };
        this.appendHeaderCell = function(f, g) {
            c.push(g)
        };
        this.endHeader = function() {};
        this.beginBody = function(g, f) {};
        this.beginRow = function(h) {
            var g = this;
            if (!g) {
                g = window.jqx
            }
            if (h != undefined) {
                if (g.hierarchy) {
                    e += "\n\t";
                    for (var f = 0; f < h; f++) {
                        e += "\t\t"
                    }
                    e += "<row>";
                    d = 0;
                    return
                }
            }
            e += "\n\t<row>";
            d = 0
        };
        this.beginRows = function(g) {
            if (g != undefined) {
                e += "\n\t\t";
                for (var f = 0; f < g; f++) {
                    e += "\t\t"
                }
                e += "<rows>";
                d = 0;
                return
            }
            e += "\n\t\t<rows>"
        };
        this.appendBodyCell = function(h, n, f, o, j, m) {
            var k = this;
            if (!k) {
                k = window.jqx
            }
            var l = this.getFormat(n);
            h = this.formatData(h, l.type, l.formatString, l.localization);
            if (l.type == "string") {
                if (h.toString().indexOf("&") >= 0) {
                    h = h.toString().replace(/&/g, "&amp;")
                }
                if (h.toString().indexOf(">") >= 0) {
                    h = h.toString().replace(/>/g, "&gt;")
                }
                if (h.toString().indexOf("<") >= 0) {
                    h = h.toString().replace(/</g, "&lt;")
                }
                if (h.toString().indexOf('"') >= 0) {
                    h = h.toString().replace(/"/g, "&quot;")
                }
                if (h.toString().indexOf("'") >= 0) {
                    h = h.toString().replace(/'/g, "&apos;")
                }
            }
            if (o.level != undefined) {
                if (k.hierarchy) {
                    e += "\n\t\t";
                    for (var g = 0; g < o.level; g++) {
                        e += "\t\t"
                    }
                    if (m === undefined) {
                        e += "<" + c[d] + ">" + h + "</" + c[d] + ">"
                    } else {
                        e += "<" + m + ">" + h + "</" + m + ">"
                    }
                } else {
                    if (m != undefined) {
                        e += "\n\t\t<" + m + ">" + h + "</" + m + ">"
                    } else {
                        e += "\n\t\t<" + c[d] + ">" + h + "</" + c[d] + ">"
                    }
                }
            } else {
                e += "\n\t\t<" + c[d] + ">" + h + "</" + c[d] + ">"
            }
            d++
        };
        this.endRow = function(h) {
            var g = this;
            if (!g) {
                g = window.jqx
            }
            if (h != undefined) {
                if (g.hierarchy) {
                    e += "\n\t";
                    for (var f = 0; f < h; f++) {
                        e += "\t\t"
                    }
                    e += "</row>";
                    d = 0;
                    return
                }
            }
            e += "\n\t</row>";
            d = 0
        };
        this.endRows = function(g) {
            if (g != undefined) {
                e += "\n\t\t";
                for (var f = 0; f < g; f++) {
                    e += "\t\t"
                }
                e += "</rows>";
                d = 0;
                return
            }
            e += "\n\t\t</rows>"
        };
        this.endBody = function() {};
        this.endFile = function() {
            e += "\n</table>"
        };
        this.getFile = function() {
            return e
        }
    };
    a.prototype = new b.jqx.dataAdapter.DataExportModuleBase();
    b.jqx.dataAdapter.ArrayExporter.extend("xml", new a())
})(jqxBaseFramework);
(function(d) {
    var j = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        l = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        };

    function a(n) {
        return '"' + n.replace(j, function(o) {
            var p = l[o];
            return typeof p === "string" ? p : "\\u" + ("0000" + o.charCodeAt(0).toString(16)).slice(-4)
        }) + '"'
    }

    function b(o) {
        return o < 10 ? "0" + o : o
    }

    function e(o) {
        var n;
        if (isFinite(o.valueOf())) {
            n = o.getUTCFullYear() + "-" + b(o.getUTCMonth() + 1) + "-" + b(o.getUTCDate()) + "T" + b(o.getUTCHours()) + ":" + b(o.getUTCMinutes()) + ":" + b(o.getUTCSeconds()) + 'Z"'
        } else {
            n = "null"
        }
        return n
    }

    function g(q) {
        var n = q.length,
            o = [],
            p;
        for (p = 0; p < n; p++) {
            o.push(h(p, q) || "null")
        }
        return "[" + o.join(",") + "]"
    }

    function m(q) {
        var o = [],
            p, n;
        for (p in q) {
            if (Object.prototype.hasOwnProperty.call(q, p)) {
                n = h(p, q);
                if (n) {
                    o.push(a(p) + ":" + n)
                }
            }
        }
        return "{" + o.join(",") + "}"
    }

    function i(n) {
        switch (Object.prototype.toString.call(n)) {
            case "[object Date]":
                return e(n);
            case "[object Array]":
                return g(n)
        }
        return m(n)
    }

    function k(o, n) {
        switch (n) {
            case "string":
                return a(o);
            case "number":
            case "float":
            case "integer":
            case "int":
                return isFinite(o) ? o : "null";
            case "boolean":
                return o
        }
        return "null"
    }

    function h(o, n) {
        var q = n[o],
            p = typeof q;
        if (q && typeof q === "object" && typeof q.toJSON === "function") {
            q = q.toJSON(o);
            p = typeof q
        }
        if (/(number|float|int|integer|string|boolean)/.test(p) || (!q && p === "object")) {
            return k(q, p)
        } else {
            return i(q)
        }
    }

    function f(n) {
        if (window.JSON && typeof window.JSON.stringify === "function") {
            return window.JSON.stringify(n)
        }
        return h("", {
            "": n
        })
    }
    var c = function() {
        var q = this;
        this.prepareData = function(t, v) {
            if (v) {
                var u = q.getFormat(v);
                t = q.formatData(t, u.type, u.formatString, u.localization)
            }
            return t
        };
        var n, p, r, o = [],
            s = 0;
        this.beginFile = function() {
            p = []
        };
        this.beginHeader = function() {};
        this.appendHeaderCell = function(t) {};
        this.endHeader = function() {};
        this.beginBody = function(u, t) {};
        this.beginRow = function() {
            var t = this;
            if (!t) {
                t = window.jqx
            }
            if (t.hierarchy || window.jqx.hierarchy) {
                o[s] = {}
            } else {
                r = {}
            }
        };
        this.beginRows = function() {
            o[s].rows = [];
            s++;
            o[s] = {}
        };
        this.endRows = function() {
            s--
        };
        this.appendBodyCell = function(v, t) {
            var u = this;
            if (!u) {
                u = window.jqx
            }
            var w = this.prepareData(v, t);
            if (u.hierarchy || window.jqx.hierarchy) {
                o[s][t.text] = w
            } else {
                r[t.text] = w
            }
        };
        this.endRow = function() {
            var t = this;
            if (!t) {
                t = window.jqx
            }
            if (t.hierarchy || window.jqx.hierarchy) {
                if (s == 0) {
                    p.push(o[s])
                } else {
                    o[s - 1].rows.push(o[s])
                }
            } else {
                p.push(r)
            }
        };
        this.endBody = function() {};
        this.endFile = function() {
            n = f(p)
        };
        this.getFile = function() {
            return n
        }
    };
    c.prototype = new d.jqx.dataAdapter.DataExportModuleBase();
    d.jqx.dataAdapter.ArrayExporter.extend("json", new c())
})(jqxBaseFramework);
var pdfDataExport = window.jqxPdfDataExport = (function() {
    if (typeof btoa === "undefined") {
        window.btoa = function(m) {
            var h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                s = h.split(""),
                g, f, e, q, p, o, n, t, l = 0,
                u = 0,
                k = "",
                j = [],
                d;
            do {
                g = m.charCodeAt(l++);
                f = m.charCodeAt(l++);
                e = m.charCodeAt(l++);
                t = g << 16 | f << 8 | e;
                q = t >> 18 & 63;
                p = t >> 12 & 63;
                o = t >> 6 & 63;
                n = t & 63;
                j[u++] = s[q] + s[p] + s[o] + s[n]
            } while (l < m.length);
            k = j.join("");
            d = m.length % 3;
            return (d ? k.slice(0, d - 3) : k) + "===".slice(d || 3)
        }
    }
    if (typeof atob === "undefined") {
        window.atob = function(l) {
            var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                f, e, d, p, o, n, m, q, k = 0,
                r = 0,
                h = "",
                j = [];
            if (!l) {
                return l
            }
            l += "";
            do {
                p = g.indexOf(l.charAt(k++));
                o = g.indexOf(l.charAt(k++));
                n = g.indexOf(l.charAt(k++));
                m = g.indexOf(l.charAt(k++));
                q = p << 18 | o << 12 | n << 6 | m;
                f = q >> 16 & 255;
                e = q >> 8 & 255;
                d = q & 255;
                if (n === 64) {
                    j[r++] = String.fromCharCode(f)
                } else {
                    if (m === 64) {
                        j[r++] = String.fromCharCode(f, e)
                    } else {
                        j[r++] = String.fromCharCode(f, e, d)
                    }
                }
            } while (k < l.length);
            h = j.join("");
            return h
        }
    }
    var c = typeof Object.keys === "function" ? function(d) {
            return Object.keys(d).length
        } : function(d) {
            var f = 0,
                g;
            for (g in d) {
                if (d.hasOwnProperty(g)) {
                    f++
                }
            }
            return f
        },
        a = function(d) {
            this.topics = {};
            this.context = d;
            this.publish = function(h, m) {
                if (this.topics[h]) {
                    var j = this.topics[h],
                        o = [],
                        n, g, e, f, k = function() {};
                    m = Array.prototype.slice.call(arguments, 1);
                    for (g = 0, e = j.length; g < e; g++) {
                        f = j[g];
                        n = f[0];
                        if (f[1]) {
                            f[0] = k;
                            o.push(g)
                        }
                        n.apply(this.context, m)
                    }
                    for (g = 0, e = o.length; g < e; g++) {
                        j.splice(o[g], 1)
                    }
                }
            };
            this.subscribe = function(e, g, f) {
                if (!this.topics[e]) {
                    this.topics[e] = [
                        [g, f]
                    ]
                } else {
                    this.topics[e].push([g, f])
                }
                return {
                    topic: e,
                    callback: g
                }
            };
            this.unsubscribe = function(h) {
                if (this.topics[h.topic]) {
                    var f = this.topics[h.topic],
                        g, e;
                    for (g = 0, e = f.length; g < e; g++) {
                        if (f[g][0] === h.callback) {
                            f.splice(g, 1)
                        }
                    }
                }
            }
        };

    function b(E, ae, M, V) {
        if (typeof E === "undefined") {
            E = "p"
        } else {
            E = E.toString().toLowerCase()
        }
        if (typeof ae === "undefined") {
            ae = "mm"
        }
        if (typeof M === "undefined") {
            M = "a4"
        }
        if (typeof V === "undefined" && typeof zpipe === "undefined") {
            V = false
        }
        var at = M.toString().toLowerCase(),
            ao = "0.9.0rc2",
            t = [],
            F = 0,
            av = V,
            U = "1.3",
            N = {
                a3: [841.89, 1190.55],
                a4: [595.28, 841.89],
                a5: [420.94, 595.28],
                letter: [612, 792],
                legal: [612, 1008]
            },
            ad = "0 g",
            H = "0 G",
            g = 0,
            f = [],
            n = 2,
            v = false,
            D = [],
            ai = {},
            Q = {},
            aj = 16,
            d, z = 0.200025,
            B, C, ak, O = {
                title: "",
                subject: "",
                author: "",
                keywords: "",
                creator: ""
            },
            R = 0,
            T = 0,
            P = {},
            G = new a(P),
            af, aq, p = function(i) {
                return i.toFixed(2)
            },
            o = function(i) {
                return i.toFixed(3)
            },
            A = function(i) {
                var k = (i).toFixed(0);
                if (i < 10) {
                    return "0" + k
                } else {
                    return k
                }
            },
            r = function(i) {
                var k = (i).toFixed(0);
                if (k.length < 10) {
                    return new Array(11 - k.length).join("0") + k
                } else {
                    return k
                }
            },
            ab = function(i) {
                if (v) {
                    f[g].push(i)
                } else {
                    t.push(i);
                    F += i.length + 1
                }
            },
            w = function() {
                n++;
                D[n] = F;
                ab(n + " 0 obj");
                return n
            },
            K = function(i) {
                ab("stream");
                ab(i);
                ab("endstream")
            },
            am, S, ap, al, aa = function() {
                am = C * ak;
                S = B * ak;
                var aB, aA, k, aw, ax, az, ay;
                for (aB = 1; aB <= g; aB++) {
                    w();
                    ab("<</Type /Page");
                    ab("/Parent 1 0 R");
                    ab("/Resources 2 0 R");
                    ab("/Contents " + (n + 1) + " 0 R>>");
                    ab("endobj");
                    aA = f[aB].join("\n");
                    w();
                    if (av) {
                        k = [];
                        for (ax = 0; ax < aA.length; ++ax) {
                            k[ax] = aA.charCodeAt(ax)
                        }
                        ay = adler32cs.from(aA);
                        az = new Deflater(6);
                        az.append(new Uint8Array(k));
                        aA = az.flush();
                        k = [new Uint8Array([120, 156]), new Uint8Array(aA), new Uint8Array([ay & 255, (ay >> 8) & 255, (ay >> 16) & 255, (ay >> 24) & 255])];
                        aA = "";
                        for (ax in k) {
                            if (k.hasOwnProperty(ax)) {
                                aA += String.fromCharCode.apply(null, k[ax])
                            }
                        }
                        ab("<</Length " + aA.length + " /Filter [/FlateDecode]>>")
                    } else {
                        ab("<</Length " + aA.length + ">>")
                    }
                    K(aA);
                    ab("endobj")
                }
                D[1] = F;
                ab("1 0 obj");
                ab("<</Type /Pages");
                ap = "/Kids [";
                for (ax = 0; ax < g; ax++) {
                    ap += (3 + 2 * ax) + " 0 R "
                }
                ab(ap + "]");
                ab("/Count " + g);
                ab("/MediaBox [0 0 " + p(am) + " " + p(S) + "]");
                ab(">>");
                ab("endobj")
            },
            X = function(i) {
                i.objectNumber = w();
                ab("<</BaseFont/" + i.PostScriptName + "/Type/Font");
                if (typeof i.encoding === "string") {
                    ab("/Encoding/" + i.encoding)
                }
                ab("/Subtype/Type1>>");
                ab("endobj")
            },
            J = function() {
                var i;
                for (i in ai) {
                    if (ai.hasOwnProperty(i)) {
                        X(ai[i])
                    }
                }
            },
            L = function() {
                G.publish("putXobjectDict")
            },
            x = function() {
                ab("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]");
                ab("/Font <<");
                var i;
                for (i in ai) {
                    if (ai.hasOwnProperty(i)) {
                        ab("/" + i + " " + ai[i].objectNumber + " 0 R")
                    }
                }
                ab(">>");
                ab("/XObject <<");
                L();
                ab(">>")
            },
            h = function() {
                J();
                G.publish("putResources");
                D[2] = F;
                ab("2 0 obj");
                ab("<<");
                x();
                ab(">>");
                ab("endobj");
                G.publish("postPutResources")
            },
            m = function(aw, k, ax) {
                var i;
                if (Q[k] === i) {
                    Q[k] = {}
                }
                Q[k][ax] = aw
            },
            au = {},
            u = function(i, ax, az, aw) {
                var ay = "F" + (c(ai) + 1).toString(10),
                    k = ai[ay] = {
                        id: ay,
                        PostScriptName: i,
                        fontName: ax,
                        fontStyle: az,
                        encoding: aw,
                        metadata: {}
                    };
                m(ay, ax, az);
                G.publish("addFont", k);
                return ay
            },
            e = function() {
                var k = "helvetica",
                    aG = "times",
                    aI = "courier",
                    aF = "normal",
                    aE = "bold",
                    aD = "italic",
                    aH = "bolditalic",
                    ax = "StandardEncoding",
                    aA = [
                        ["Helvetica", k, aF],
                        ["Helvetica-Bold", k, aE],
                        ["Helvetica-Oblique", k, aD],
                        ["Helvetica-BoldOblique", k, aH],
                        ["Courier", aI, aF],
                        ["Courier-Bold", aI, aE],
                        ["Courier-Oblique", aI, aD],
                        ["Courier-BoldOblique", aI, aH],
                        ["Times-Roman", aG, aF],
                        ["Times-Bold", aG, aE],
                        ["Times-Italic", aG, aD],
                        ["Times-BoldItalic", aG, aH]
                    ],
                    aC, ay, aB, az;
                for (aC = 0, ay = aA.length; aC < ay; aC++) {
                    var aw = ax;
                    aB = u(aA[aC][0], aA[aC][1], aA[aC][2], aw);
                    az = aA[aC][0].split("-");
                    m(aB, az[0], az[1] || "")
                }
                G.publish("addFonts", {
                    fonts: ai,
                    dictionary: Q
                })
            },
            s = function(aG, ax) {
                var aC, aA, az, ay, aE, aD, aw, aF, k, aB;
                if (ax === az) {
                    ax = {}
                }
                ay = ax.sourceEncoding ? ay : "Unicode";
                aD = ax.outputEncoding;
                if ((ax.autoencode || aD) && ai[d].metadata && ai[d].metadata[ay] && ai[d].metadata[ay].encoding) {
                    aE = ai[d].metadata[ay].encoding;
                    if (!aD && ai[d].encoding) {
                        aD = ai[d].encoding
                    }
                    if (!aD && aE.codePages) {
                        aD = aE.codePages[0]
                    }
                    if (typeof aD === "string") {
                        aD = aE[aD]
                    }
                    if (aD) {
                        aF = false;
                        aw = [];
                        for (aC = 0, aA = aG.length; aC < aA; aC++) {
                            k = aD[aG.charCodeAt(aC)];
                            if (k) {
                                aw.push(String.fromCharCode(k))
                            } else {
                                aw.push(aG[aC])
                            }
                            if (aw[aC].charCodeAt(0) >> 8) {
                                aF = true
                            }
                        }
                        aG = aw.join("")
                    }
                }
                aC = aG.length;
                while (aF === az && aC !== 0) {
                    if (aG.charCodeAt(aC - 1) >> 8) {
                        aF = true
                    }
                    aC--
                }
                if (!aF) {
                    return aG
                } else {
                    aw = ax.noBOM ? [] : [254, 255];
                    for (aC = 0, aA = aG.length; aC < aA; aC++) {
                        k = aG.charCodeAt(aC);
                        aB = k >> 8;
                        if (aB >> 8) {
                            throw new Error("Character at position " + aC.toString(10) + " of string '" + aG + "' exceeds 16bits. Cannot be encoded into UCS-2 BE")
                        }
                        aw.push(aB);
                        aw.push(k - (aB << 8))
                    }
                    return String.fromCharCode.apply(az, aw)
                }
            },
            Z = function(k, i) {
                return s(k, i).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)")
            },
            Y = function() {
                ab("/Producer (pdfDataExport " + ao + ")");
                if (O.title) {
                    ab("/Title (" + Z(O.title) + ")")
                }
                if (O.subject) {
                    ab("/Subject (" + Z(O.subject) + ")")
                }
                if (O.author) {
                    ab("/Author (" + Z(O.author) + ")")
                }
                if (O.keywords) {
                    ab("/Keywords (" + Z(O.keywords) + ")")
                }
                if (O.creator) {
                    ab("/Creator (" + Z(O.creator) + ")")
                }
                var i = new Date();
                ab("/CreationDate (D:" + [i.getFullYear(), A(i.getMonth() + 1), A(i.getDate()), A(i.getHours()), A(i.getMinutes()), A(i.getSeconds())].join("") + ")")
            },
            W = function() {
                ab("/Type /Catalog");
                ab("/Pages 1 0 R");
                ab("/OpenAction [3 0 R /FitH null]");
                ab("/PageLayout /OneColumn");
                G.publish("putCatalog")
            },
            l = function() {
                ab("/Size " + (n + 1));
                ab("/Root " + n + " 0 R");
                ab("/Info " + (n - 1) + " 0 R")
            },
            ar = function() {
                g++;
                v = true;
                f[g] = []
            },
            ah = function() {
                ar();
                ab(p(z * ak) + " w");
                ab(H);
                if (R !== 0) {
                    ab(R.toString(10) + " J")
                }
                if (T !== 0) {
                    ab(T.toString(10) + " j")
                }
                G.publish("addPage", {
                    pageNumber: g
                })
            },
            y = function(aw, ay) {
                var i, k;
                if (aw === k) {
                    aw = ai[d].fontName
                }
                if (ay === k) {
                    ay = ai[d].fontStyle
                }
                try {
                    i = Q[aw][ay]
                } catch (ax) {
                    i = k
                }
                if (!i) {
                    throw new Error("Unable to look up font label for font '" + aw + "', '" + ay + "'. Refer to getFontList() for available fonts.")
                }
                return i
            },
            q = function() {
                v = false;
                t = [];
                D = [];
                ab("%PDF-" + U);
                aa();
                h();
                w();
                ab("<<");
                Y();
                ab(">>");
                ab("endobj");
                w();
                ab("<<");
                W();
                ab(">>");
                ab("endobj");
                var aw = F,
                    k;
                ab("xref");
                ab("0 " + (n + 1));
                ab("0000000000 65535 f ");
                for (k = 1; k <= n; k++) {
                    ab(r(D[k]) + " 00000 n ")
                }
                ab("trailer");
                ab("<<");
                l();
                ab(">>");
                ab("startxref");
                ab(aw);
                ab("%%EOF");
                v = true;
                return t.join("\n")
            },
            ac = function(i) {
                var k = "S";
                if (i === "F") {
                    k = "f"
                } else {
                    if (i === "FD" || i === "DF") {
                        k = "B"
                    }
                }
                return k
            },
            I = function(az, aw) {
                var ay, aB, aA, aC, ax, k;
                switch (az) {
                    case ay:
                        return q();
                    case "save":
                        if (navigator.getUserMedia) {
                            if (window.URL === undefined) {
                                return P.output("dataurlnewwindow")
                            } else {
                                if (window.URL.createObjectURL === undefined) {
                                    return P.output("dataurlnewwindow")
                                }
                            }
                        }
                        aB = q();
                        aA = aB.length;
                        aC = new Uint8Array(new ArrayBuffer(aA));
                        for (ax = 0; ax < aA; ax++) {
                            aC[ax] = aB.charCodeAt(ax)
                        }
                        k = new Blob([aC], {
                            type: "application/pdf"
                        });
                        saveAs(k, aw);
                        break;
                    case "datauristring":
                    case "dataurlstring":
                        return "data:application/pdf;base64," + btoa(q());
                    case "datauri":
                    case "dataurl":
                        document.location.href = "data:application/pdf;base64," + btoa(q());
                        break;
                    case "dataurlnewwindow":
                        window.open("data:application/pdf;base64," + btoa(q()));
                        break;
                    default:
                        throw new Error('Output type "' + az + '" is not supported.')
                }
            };
        if (ae === "pt") {
            ak = 1
        } else {
            if (ae === "mm") {
                ak = 72 / 25.4
            } else {
                if (ae === "cm") {
                    ak = 72 / 2.54
                } else {
                    if (ae === "in") {
                        ak = 72
                    } else {
                        throw ("Invalid unit: " + ae)
                    }
                }
            }
        }
        if (N.hasOwnProperty(at)) {
            B = N[at][1] / ak;
            C = N[at][0] / ak
        } else {
            try {
                B = M[1];
                C = M[0]
            } catch (an) {
                throw ("Invalid format: " + M)
            }
        }
        if (E === "p" || E === "portrait") {
            E = "p";
            if (C > B) {
                af = C;
                C = B;
                B = af
            }
        } else {
            if (E === "l" || E === "landscape") {
                E = "l";
                if (B > C) {
                    af = C;
                    C = B;
                    B = af
                }
            } else {
                throw ("Invalid orientation: " + E)
            }
        }
        P.internal = {
            pdfEscape: Z,
            getStyle: ac,
            getFont: function() {
                return ai[y.apply(P, arguments)]
            },
            getFontSize: function() {
                return aj
            },
            btoa: btoa,
            write: function(i, ax, aw, k) {
                ab(arguments.length === 1 ? i : Array.prototype.join.call(arguments, " "))
            },
            getCoordinateString: function(i) {
                return p(i * ak)
            },
            getVerticalCoordinateString: function(i) {
                return p((B - i) * ak)
            },
            collections: {},
            newObject: w,
            putStream: K,
            events: G,
            scaleFactor: ak,
            pageSize: {
                width: C,
                height: B
            },
            output: function(k, i) {
                return I(k, i)
            }
        };
        P.addPage = function() {
            ah();
            return this
        };
        var ag = ["", "0", "00", "000", "0000"];
        var j = function(aA, aw) {
            var ax = ["FEFF"];
            for (var az = 0, k = aA.length, ay; az < k; ++az) {
                ay = aA.charCodeAt(az).toString(16).toUpperCase();
                ax.push(ag[4 - ay.length], ay)
            }
            return ax.join("")
        };
        P.text16 = function(aF, aE, aC, aw) {
            var ax, aA, az, aD, k, aB, ay;
            if (typeof aF === "number") {
                aA = aC;
                az = aF;
                aD = aE;
                aF = aA;
                aE = az;
                aC = aD
            }
            if (typeof aF === "string" && aF.match(/[\n\r]/)) {
                aF = aF.split(/\r\n|\r|\n/g)
            }
            if (typeof aw === "undefined") {
                aw = {
                    noBOM: true,
                    autoencode: true
                }
            } else {
                if (aw.noBOM === ax) {
                    aw.noBOM = true
                }
                if (aw.autoencode === ax) {
                    aw.autoencode = true
                }
            }
            aw.autoencode = false;
            if (typeof aF === "string") {
                aB = j(aF, aw)
            } else {
                if (aF instanceof Array) {
                    k = aF.concat();
                    for (ay = k.length - 1; ay !== -1; ay--) {
                        k[ay] = j(k[ay], aw)
                    }
                    aB = k.join("> Tj\nT* <")
                } else {
                    throw new Error('Type of text must be string or Array. "' + aF + '" is not recognized.')
                }
            }
            ab("BT\n/" + d + " " + aj + " Tf\n" + aj + " TL\n" + ad + "\n" + p(aE * ak) + " " + p((B - aC) * ak) + " Td\n<" + aB + "> Tj\nET");
            return this
        };
        P.text = function(aF, aE, aC, aw) {
            var ax, aA, az, aD, k, aB, ay;
            if (typeof aF === "number") {
                aA = aC;
                az = aF;
                aD = aE;
                aF = aA;
                aE = az;
                aC = aD
            }
            if (typeof aF === "string" && aF.match(/[\n\r]/)) {
                aF = aF.split(/\r\n|\r|\n/g)
            }
            if (typeof aw === "undefined") {
                aw = {
                    noBOM: true,
                    autoencode: true
                }
            } else {
                if (aw.noBOM === ax) {
                    aw.noBOM = true
                }
                if (aw.autoencode === ax) {
                    aw.autoencode = true
                }
            }
            if (typeof aF === "string") {
                aB = Z(aF, aw)
            } else {
                if (aF instanceof Array) {
                    k = aF.concat();
                    for (ay = k.length - 1; ay !== -1; ay--) {
                        k[ay] = Z(k[ay], aw)
                    }
                    aB = k.join(") Tj\nT* (")
                } else {
                    throw new Error('Type of text must be string or Array. "' + aF + '" is not recognized.')
                }
            }
            ab("BT\n/" + d + " " + aj + " Tf\n" + aj + " TL\n" + ad + "\n" + p(aE * ak) + " " + p((B - aC) * ak) + " Td\n(" + aB + ") Tj\nET");
            return this
        };
        P.line = function(k, ax, i, aw) {
            ab(p(k * ak) + " " + p((B - ax) * ak) + " m " + p(i * ak) + " " + p((B - aw) * ak) + " l S");
            return this
        };
        P.lines = function(k, aF, aE, aO, aK) {
            var ay, aM, aC, aD, aB, aA, aI, aG, aN, aL, az, aJ, ax, aH, aw;
            if (typeof k === "number") {
                aM = aE;
                aC = k;
                aD = aF;
                k = aM;
                aF = aC;
                aE = aD
            }
            aK = ac(aK);
            aO = aO === ay ? [1, 1] : aO;
            ab(o(aF * ak) + " " + o((B - aE) * ak) + " m ");
            aB = aO[0];
            aA = aO[1];
            aG = k.length;
            aH = aF;
            aw = aE;
            for (aI = 0; aI < aG; aI++) {
                aN = k[aI];
                if (aN.length === 2) {
                    aH = aN[0] * aB + aH;
                    aw = aN[1] * aA + aw;
                    ab(o(aH * ak) + " " + o((B - aw) * ak) + " l")
                } else {
                    aL = aN[0] * aB + aH;
                    az = aN[1] * aA + aw;
                    aJ = aN[2] * aB + aH;
                    ax = aN[3] * aA + aw;
                    aH = aN[4] * aB + aH;
                    aw = aN[5] * aA + aw;
                    ab(o(aL * ak) + " " + o((B - az) * ak) + " " + o(aJ * ak) + " " + o((B - ax) * ak) + " " + o(aH * ak) + " " + o((B - aw) * ak) + " c")
                }
            }
            ab(aK);
            return this
        };
        P.rect = function(i, az, k, ax, aw) {
            var ay = ac(aw);
            ab([p(i * ak), p((B - az) * ak), p(k * ak), p(-ax * ak), "re", ay].join(" "));
            return this
        };
        P.triangle = function(ax, aA, k, ay, i, aw, az) {
            this.lines([
                [k - ax, ay - aA],
                [i - k, aw - ay],
                [ax - i, aA - aw]
            ], ax, aA, [1, 1], az);
            return this
        };
        P.roundedRect = function(k, aB, aw, ay, aA, az, ax) {
            var i = 4 / 3 * (Math.SQRT2 - 1);
            this.lines([
                [(aw - 2 * aA), 0],
                [(aA * i), 0, aA, az - (az * i), aA, az],
                [0, (ay - 2 * az)],
                [0, (az * i), -(aA * i), az, -aA, az],
                [(-aw + 2 * aA), 0],
                [-(aA * i), 0, -aA, -(az * i), -aA, -az],
                [0, (-ay + 2 * az)],
                [0, -(az * i), (aA * i), -az, aA, -az]
            ], k + aA, aB, [1, 1], ax);
            return this
        };
        P.ellipse = function(i, aB, az, ay, k) {
            var aA = ac(k),
                ax = 4 / 3 * (Math.SQRT2 - 1) * az,
                aw = 4 / 3 * (Math.SQRT2 - 1) * ay;
            ab([p((i + az) * ak), p((B - aB) * ak), "m", p((i + az) * ak), p((B - (aB - aw)) * ak), p((i + ax) * ak), p((B - (aB - ay)) * ak), p(i * ak), p((B - (aB - ay)) * ak), "c"].join(" "));
            ab([p((i - ax) * ak), p((B - (aB - ay)) * ak), p((i - az) * ak), p((B - (aB - aw)) * ak), p((i - az) * ak), p((B - aB) * ak), "c"].join(" "));
            ab([p((i - az) * ak), p((B - (aB + aw)) * ak), p((i - ax) * ak), p((B - (aB + ay)) * ak), p(i * ak), p((B - (aB + ay)) * ak), "c"].join(" "));
            ab([p((i + ax) * ak), p((B - (aB + ay)) * ak), p((i + az) * ak), p((B - (aB + aw)) * ak), p((i + az) * ak), p((B - aB) * ak), "c", aA].join(" "));
            return this
        };
        P.circle = function(i, ax, aw, k) {
            return this.ellipse(i, ax, aw, aw, k)
        };
        P.setProperties = function(i) {
            var k;
            for (k in O) {
                if (O.hasOwnProperty(k) && i[k]) {
                    O[k] = i[k]
                }
            }
            return this
        };
        P.setFontSize = function(i) {
            aj = i;
            return this
        };
        P.setFont = function(i, k) {
            d = y(i, k);
            return this
        };
        P.setFontStyle = P.setFontType = function(k) {
            var i;
            d = y(i, k);
            return this
        };
        P.getFontList = function() {
            var aw = {},
                k, ax, i;
            for (k in Q) {
                if (Q.hasOwnProperty(k)) {
                    aw[k] = i = [];
                    for (ax in Q[k]) {
                        if (Q[k].hasOwnProperty(ax)) {
                            i.push(ax)
                        }
                    }
                }
            }
            return aw
        };
        P.setLineWidth = function(i) {
            ab((i * ak).toFixed(2) + " w");
            return this
        };
        P.setDrawColor = function(ay, ax, aw, i) {
            var k;
            if (ax === undefined || (i === undefined && ay === ax === aw)) {
                if (typeof ay === "string") {
                    k = ay + " G"
                } else {
                    k = p(ay / 255) + " G"
                }
            } else {
                if (i === undefined) {
                    if (typeof ay === "string") {
                        k = [ay, ax, aw, "RG"].join(" ")
                    } else {
                        k = [p(ay / 255), p(ax / 255), p(aw / 255), "RG"].join(" ")
                    }
                } else {
                    if (typeof ay === "string") {
                        k = [ay, ax, aw, i, "K"].join(" ")
                    } else {
                        k = [p(ay), p(ax), p(aw), p(i), "K"].join(" ")
                    }
                }
            }
            ab(k);
            return this
        };
        P.setFillColor = function(ay, ax, aw, i) {
            var k;
            if (ax === undefined || (i === undefined && ay === ax === aw)) {
                if (typeof ay === "string") {
                    k = ay + " g"
                } else {
                    k = p(ay / 255) + " g"
                }
            } else {
                if (i === undefined) {
                    if (typeof ay === "string") {
                        k = [ay, ax, aw, "rg"].join(" ")
                    } else {
                        k = [p(ay / 255), p(ax / 255), p(aw / 255), "rg"].join(" ")
                    }
                } else {
                    if (typeof ay === "string") {
                        k = [ay, ax, aw, i, "k"].join(" ")
                    } else {
                        k = [p(ay), p(ax), p(aw), p(i), "k"].join(" ")
                    }
                }
            }
            ab(k);
            return this
        };
        P.setTextColor = function(aw, k, i) {
            if ((aw === 0 && k === 0 && i === 0) || (typeof k === "undefined")) {
                ad = o(aw / 255) + " g"
            } else {
                ad = [o(aw / 255), o(k / 255), o(i / 255), "rg"].join(" ")
            }
            return this
        };
        P.CapJoinStyles = {
            0: 0,
            butt: 0,
            but: 0,
            bevel: 0,
            1: 1,
            round: 1,
            rounded: 1,
            circle: 1,
            2: 2,
            projecting: 2,
            project: 2,
            square: 2,
            milter: 2
        };
        P.setLineCap = function(i) {
            var k = this.CapJoinStyles[i];
            if (k === undefined) {
                throw new Error("Line cap style of '" + i + "' is not recognized. See or extend .CapJoinStyles property for valid styles")
            }
            R = k;
            ab(k.toString(10) + " J");
            return this
        };
        P.setLineJoin = function(i) {
            var k = this.CapJoinStyles[i];
            if (k === undefined) {
                throw new Error("Line join style of '" + i + "' is not recognized. See or extend .CapJoinStyles property for valid styles")
            }
            T = k;
            ab(k.toString(10) + " j");
            return this
        };
        P.output = I;
        P.save = function(i) {
            P.output("save", i)
        };
        for (aq in b.API) {
            if (b.API.hasOwnProperty(aq)) {
                if (aq === "events" && b.API.events.length) {
                    (function(ax, az) {
                        var ay, aw, k;
                        for (k = az.length - 1; k !== -1; k--) {
                            ay = az[k][0];
                            aw = az[k][1];
                            ax.subscribe.apply(ax, [ay].concat(typeof aw === "function" ? [aw] : aw))
                        }
                    }(G, b.API.events))
                } else {
                    P[aq] = b.API[aq]
                }
            }
        }
        e();
        d = "F1";
        ah();
        G.publish("initialized");
        return P
    }
    b.API = {
        events: []
    };
    return b
}());
(function(i) {
    var b = 0,
        m = 0,
        a, o, h, c = {
            x: undefined,
            y: undefined,
            w: undefined,
            h: undefined,
            ln: undefined
        },
        f = 1,
        e = false,
        d = function(p, t, q, r, s) {
            c = {
                x: p,
                y: t,
                w: q,
                h: r,
                ln: s
            }
        },
        k = function() {
            return c
        },
        j = function(p) {
            b = p
        },
        l = function() {
            return b
        },
        n = function(p) {
            m = p
        },
        g = function(p) {
            return m
        };
    i.getTextDimensions = function(p) {
        a = this.internal.getFont().fontName;
        o = this.internal.getFontSize();
        h = this.internal.getFont().fontStyle;
        var s = 0.264583 * 72 / 25.4,
            q, r;
        r = document.createElement("font");
        r.id = "pdfDataExportCell";
        r.style.fontStyle = h;
        r.style.fontName = a;
        r.style.fontSize = o + "pt";
        r.innerHTML = p;
        document.body.appendChild(r);
        q = {
            w: (r.offsetWidth + 1) * s,
            h: (r.offsetHeight + 1) * s
        };
        document.body.removeChild(r);
        return q
    };
    i.cellAddPage = function() {
        this.addPage();
        d(undefined, undefined, undefined, undefined, undefined);
        e = true;
        f += 1;
        n(1)
    };
    i.cellInitialize = function() {
        b = 0;
        c = {
            x: undefined,
            y: undefined,
            w: undefined,
            h: undefined,
            ln: undefined
        };
        f = 1;
        e = false;
        n(0)
    };
    i.cell = function(z, v, A, s, p, u) {
        this.lnMod = this.lnMod === undefined ? 0 : this.lnMod;
        if (this.printingHeaderRow !== true && this.lnMod !== 0) {
            u = u + this.lnMod
        }
        if ((((u * s) + v + (s * 2)) / f) >= this.internal.pageSize.height && f === 1 && !e) {
            this.cellAddPage();
            if (this.printHeaders && this.tableHeaderRow) {
                this.printHeaderRow(u);
                this.lnMod += 1;
                u += 1
            }
            if (l() === 0) {
                j(Math.round((this.internal.pageSize.height - (s * 2)) / s))
            }
        } else {
            if (e && k().ln !== u && g() === l()) {
                this.cellAddPage();
                if (this.printHeaders && this.tableHeaderRow) {
                    this.printHeaderRow(u);
                    this.lnMod += 1;
                    u += 1
                }
            }
        }
        var B = k(),
            r = this.getTextDimensions(p),
            t = 1;
        if (B.x !== undefined && B.ln === u) {
            z = B.x + B.w
        }
        if (B.y !== undefined && B.y === v) {
            v = B.y
        }
        if (B.h !== undefined && B.h === s) {
            s = B.h
        }
        if (B.ln !== undefined && B.ln === u) {
            u = B.ln;
            t = 0
        }
        if (e) {
            v = s * (g() + t)
        } else {
            v = (v + (s * Math.abs(l() * f - u - l())))
        }
        this.rect(z, v, A, s);
        var q = /[а-яА-ЯЁё]/.test(p);
        if (q) {
            this.text16(p, z + 3, v + s - 3)
        } else {
            this.text(p, z + 3, v + s - 3)
        }
        n(g() + t);
        d(z, v, A, s, u);
        return this
    };
    i.getKeys = (typeof Object.keys === "function") ? function(p) {
        if (!p) {
            return []
        }
        return Object.keys(p)
    } : function(p) {
        var q = [],
            r;
        for (r in p) {
            if (p.hasOwnProperty(r)) {
                q.push(r)
            }
        }
        return q
    };
    i.arrayMax = function(u, t) {
        var p = u[0],
            q, s, r;
        for (q = 0, s = u.length; q < s; q += 1) {
            r = u[q];
            if (t) {
                if (t(p, r) === -1) {
                    p = r
                }
            } else {
                if (r > p) {
                    p = r
                }
            }
        }
        return p
    };
    i.table = function(J, r, I) {
        var v = [],
            p = [],
            D, z, B, x, E, y, G = {},
            A = {},
            u, s, H = [],
            C, F = [],
            t, q, w;
        this.lnMod = 0;
        if (I) {
            z = I.autoSize || false;
            B = this.printHeaders = I.printHeaders || true;
            x = I.autoStretch || true
        }
        if (!J) {
            throw "No data for PDF table"
        }
        if (r === undefined || (r === null)) {
            v = this.getKeys(J[0])
        } else {
            if (r[0] && (typeof r[0] !== "string")) {
                for (E = 0, y = r.length; E < y; E += 1) {
                    D = r[E];
                    v.push(D.name);
                    p.push(D.prompt)
                }
            } else {
                v = r
            }
        }
        if (I.autoSize) {
            w = function(K) {
                return K[D]
            };
            for (E = 0, y = v.length; E < y; E += 1) {
                D = v[E];
                G[D] = J.map(w);
                H.push(this.getTextDimensions(p[E] || D).w);
                s = G[D];
                for (C = 0, y = s.length; C < y; C += 1) {
                    u = s[C];
                    H.push(this.getTextDimensions(u).w)
                }
                A[D] = i.arrayMax(H)
            }
        }
        if (I.printHeaders) {
            for (E = 0, y = v.length; E < y; E += 1) {
                D = v[E];
                F.push([10, 10, A[D], 25, String(p.length ? p[E] : D)])
            }
            this.setTableHeaderRow(F);
            this.printHeaderRow(1)
        }
        for (E = 0, y = J.length; E < y; E += 1) {
            t = J[E];
            for (C = 0, q = v.length; C < q; C += 1) {
                D = v[C];
                this.cell(10, 10, A[D], 25, String(t[D]), E + 2)
            }
        }
        return this
    };
    i.setTableHeaderRow = function(p) {
        this.tableHeaderRow = p
    };
    i.printHeaderRow = function(p) {
        if (!this.tableHeaderRow) {
            throw "Property tableHeaderRow does not exist."
        }
        var q, s, r, t;
        this.printingHeaderRow = true;
        for (r = 0, t = this.tableHeaderRow.length; r < t; r += 1) {
            q = this.tableHeaderRow[r];
            s = [].concat(q);
            this.cell.apply(this, s.concat(p))
        }
        this.printingHeaderRow = false
    }
}(pdfDataExport.API));
(function(c) {
    var b = c.getCharWidthsArray = function(s, u) {
        if (!u) {
            u = {}
        }
        var h = u.widths ? u.widths : this.internal.getFont().metadata.Unicode.widths,
            r = h.fof ? h.fof : 1,
            n = u.kerning ? u.kerning : this.internal.getFont().metadata.Unicode.kerning,
            p = n.fof ? n.fof : 1;
        var m, j, o, k, q = 0,
            t = h[0] || r,
            g = [];
        for (m = 0, j = s.length; m < j; m++) {
            o = s.charCodeAt(m);
            g.push((h[o] || t) / r + (n[o] && n[o][q] || 0) / p);
            q = o
        }
        return g
    };
    var e = function(j) {
        var h = j.length,
            g = 0;
        while (h) {
            h--;
            g += j[h]
        }
        return g
    };
    var a = c.getStringUnitWidth = function(h, g) {
        return e(b.call(this, h, g))
    };
    var d = function(g, n, h, j) {
        var q = [];
        var m = 0,
            k = g.length,
            p = 0;
        while (m !== k && p + n[m] < h) {
            p += n[m];
            m++
        }
        q.push(g.slice(0, m));
        var o = m;
        p = 0;
        while (m !== k) {
            if (p + n[m] > j) {
                q.push(g.slice(o, m));
                p = 0;
                o = m
            }
            p += n[m];
            m++
        }
        if (o !== m) {
            q.push(g.slice(o, m))
        }
        return q
    };
    var f = function(s, k, v) {
        if (!v) {
            v = {}
        }
        var t = b(" ", v)[0];
        var r = s.split(" ");
        var w = [],
            x = [w],
            h = v.textIndent || 0,
            u = 0,
            p = 0,
            g, q;
        var o, m, n;
        for (o = 0, m = r.length; o < m; o++) {
            g = r[o];
            q = b(g, v);
            p = e(q);
            if (h + u + p > k) {
                if (p > k) {
                    n = d(g, q, k - (h + u), k);
                    w.push(n.shift());
                    w = [n.pop()];
                    while (n.length) {
                        x.push([n.shift()])
                    }
                    p = e(q.slice(g.length - w[0].length))
                } else {
                    w = [g]
                }
                x.push(w);
                h = p;
                u = t
            } else {
                w.push(g);
                h += u + p;
                u = t
            }
        }
        var j = [];
        for (o = 0, m = x.length; o < m; o++) {
            j.push(x[o].join(" "))
        }
        return j
    };
    c.splitTextToSize = function(q, m, r) {
        if (!r) {
            r = {}
        }
        var h = r.fontSize || this.internal.getFontSize(),
            g = (function(l) {
                var t = {
                        0: 1
                    },
                    i = {};
                if (!l.widths || !l.kerning) {
                    var u = this.internal.getFont(l.fontName, l.fontStyle),
                        s = "Unicode";
                    if (u.metadata[s]) {
                        return {
                            widths: u.metadata[s].widths || t,
                            kerning: u.metadata[s].kerning || i
                        }
                    }
                } else {
                    return {
                        widths: l.widths,
                        kerning: l.kerning
                    }
                }
                return {
                    widths: t,
                    kerning: i
                }
            }).call(this, r);
        var p;
        if (q.match(/[\n\r]/)) {
            p = q.split(/\r\n|\r|\n/g)
        } else {
            p = [q]
        }
        var j = 1 * this.internal.scaleFactor * m / h;
        g.textIndent = r.textIndent ? r.textIndent * 1 * this.internal.scaleFactor / h : 0;
        var o, n, k = [];
        for (o = 0, n = p.length; o < n; o++) {
            k = k.concat(f(p[o], j, g))
        }
        return k
    }
})(pdfDataExport.API);
(function(c) {
    var d = "addImage_";
    var f = function(m) {
            var l, h;
            if (!m.charCodeAt(0) === 255 || !m.charCodeAt(1) === 216 || !m.charCodeAt(2) === 255 || !m.charCodeAt(3) === 224 || !m.charCodeAt(6) === "J".charCodeAt(0) || !m.charCodeAt(7) === "F".charCodeAt(0) || !m.charCodeAt(8) === "I".charCodeAt(0) || !m.charCodeAt(9) === "F".charCodeAt(0) || !m.charCodeAt(10) === 0) {
                throw new Error("getJpegSize requires a binary jpeg file")
            }
            var j = m.charCodeAt(4) * 256 + m.charCodeAt(5);
            var k = 4,
                g = m.length;
            while (k < g) {
                k += j;
                if (m.charCodeAt(k) !== 255) {
                    throw new Error("getJpegSize could not find the size of the image")
                }
                if (m.charCodeAt(k + 1) === 192) {
                    h = m.charCodeAt(k + 5) * 256 + m.charCodeAt(k + 6);
                    l = m.charCodeAt(k + 7) * 256 + m.charCodeAt(k + 8);
                    return [l, h]
                } else {
                    k += 2;
                    j = m.charCodeAt(k) * 256 + m.charCodeAt(k + 1)
                }
            }
        },
        b = function(g) {
            var m = this.internal.newObject(),
                h = this.internal.write,
                l = this.internal.putStream;
            g.n = m;
            h("<</Type /XObject");
            h("/Subtype /Image");
            h("/Width " + g.w);
            h("/Height " + g.h);
            if (g.cs === "Indexed") {
                h("/ColorSpace [/Indexed /DeviceRGB " + (g.pal.length / 3 - 1) + " " + (m + 1) + " 0 R]")
            } else {
                h("/ColorSpace /" + g.cs);
                if (g.cs === "DeviceCMYK") {
                    h("/Decode [1 0 1 0 1 0 1 0]")
                }
            }
            h("/BitsPerComponent " + g.bpc);
            if ("f" in g) {
                h("/Filter /" + g.f)
            }
            if ("dp" in g) {
                h("/DecodeParms <<" + g.dp + ">>")
            }
            if ("trns" in g && g.trns.constructor == Array) {
                var k = "";
                for (var j = 0; j < g.trns.length; j++) {
                    k += (g[k][j] + " " + g.trns[j] + " ");
                    h("/Mask [" + k + "]")
                }
            }
            if ("smask" in g) {
                h("/SMask " + (m + 1) + " 0 R")
            }
            h("/Length " + g.data.length + ">>");
            l(g.data);
            h("endobj")
        },
        e = function() {
            var g = this.internal.collections[d + "images"];
            for (var h in g) {
                b.call(this, g[h])
            }
        },
        a = function() {
            var g = this.internal.collections[d + "images"],
                h = this.internal.write,
                k;
            for (var j in g) {
                k = g[j];
                h("/I" + k.i, k.n, "0", "R")
            }
        };
    c.addImage = function(g, s, q, p, t, l) {
        if (typeof g === "object" && g.nodeType === 1) {
            var j = document.createElement("canvas");
            j.width = g.clientWidth;
            j.height = g.clientHeight;
            var u = j.getContext("2d");
            if (!u) {
                throw ("addImage requires canvas to be supported by browser.")
            }
            u.drawImage(g, 0, 0, j.width, j.height);
            g = j.toDataURL("image/jpeg");
            s = "JPEG"
        }
        if (s.toUpperCase() !== "JPEG") {
            throw new Error("addImage currently only supports format 'JPEG', not '" + s + "'")
        }
        var i, n = this.internal.collections[d + "images"],
            m = this.internal.getCoordinateString,
            o = this.internal.getVerticalCoordinateString;
        if (g.substring(0, 23) === "data:image/jpeg;base64,") {
            g = atob(g.replace("data:image/jpeg;base64,", ""))
        }
        if (n) {
            i = Object.keys ? Object.keys(n).length : (function(w) {
                var h = 0;
                for (var v in w) {
                    if (w.hasOwnProperty(v)) {
                        h++
                    }
                }
                return h
            })(n)
        } else {
            i = 0;
            this.internal.collections[d + "images"] = n = {};
            this.internal.events.subscribe("putResources", e);
            this.internal.events.subscribe("putXobjectDict", a)
        }
        var r = f(g);
        var k = {
            w: r[0],
            h: r[1],
            cs: "DeviceRGB",
            bpc: 8,
            f: "DCTDecode",
            i: i,
            data: g
        };
        n[i] = k;
        if (!t && !l) {
            t = -96;
            l = -96
        }
        if (t < 0) {
            t = (-1) * k.w * 72 / t / this.internal.scaleFactor
        }
        if (l < 0) {
            l = (-1) * k.h * 72 / l / this.internal.scaleFactor
        }
        if (t === 0) {
            t = l * k.w / k.h
        }
        if (l === 0) {
            l = t * k.h / k.w
        }
        this.internal.write("q", m(t), "0 0", m(l), m(q), o(p + l), "cm /I" + k.i, "Do Q");
        return this
    }
})(pdfDataExport.API);
(function(a) {
    var e = function(q) {
        var w = "0123456789abcdef",
            o = "klmnopqrstuvwxyz",
            h = {};
        for (var r = 0; r < o.length; r++) {
            h[o[r]] = w[r]
        }
        var p, m = {},
            n = 1,
            t, k = m,
            g = [],
            s, l = "",
            u = "",
            v, j = q.length - 1,
            f;
        r = 1;
        while (r != j) {
            f = q[r];
            r += 1;
            if (f == "'") {
                if (t) {
                    v = t.join("");
                    t = p
                } else {
                    t = []
                }
            } else {
                if (t) {
                    t.push(f)
                } else {
                    if (f == "{") {
                        g.push([k, v]);
                        k = {};
                        v = p
                    } else {
                        if (f == "}") {
                            s = g.pop();
                            s[0][s[1]] = k;
                            v = p;
                            k = s[0]
                        } else {
                            if (f == "-") {
                                n = -1
                            } else {
                                if (v === p) {
                                    if (h.hasOwnProperty(f)) {
                                        l += h[f];
                                        v = parseInt(l, 16) * n;
                                        n = +1;
                                        l = ""
                                    } else {
                                        l += f
                                    }
                                } else {
                                    if (h.hasOwnProperty(f)) {
                                        u += h[f];
                                        k[v] = parseInt(u, 16) * n;
                                        n = +1;
                                        v = p;
                                        u = ""
                                    } else {
                                        u += f
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return m
    };
    var d = {
            codePages: ["WinAnsiEncoding"],
            WinAnsiEncoding: e("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")
        },
        c = {
            Unicode: {
                Courier: d,
                "Courier-Bold": d,
                "Courier-BoldOblique": d,
                "Courier-Oblique": d,
                Helvetica: d,
                "Helvetica-Bold": d,
                "Helvetica-BoldOblique": d,
                "Helvetica-Oblique": d,
                "Times-Roman": d,
                "Times-Bold": d,
                "Times-BoldItalic": d,
                "Times-Italic": d
            }
        },
        b = {
            Unicode: {
                "Courier-Oblique": e("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
                "Times-BoldItalic": e("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),
                "Helvetica-Bold": e("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
                Courier: e("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
                "Courier-BoldOblique": e("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
                "Times-Bold": e("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"),
                Helvetica: e("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),
                "Helvetica-BoldOblique": e("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
                "Courier-Bold": e("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
                "Times-Italic": e("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),
                "Times-Roman": e("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),
                "Helvetica-Oblique": e("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")
            }
        };
    a.events.push(["addFonts", function(i) {
        var f, g, h, k, j = "Unicode",
            l;
        for (g in i.fonts) {
            if (i.fonts.hasOwnProperty(g)) {
                f = i.fonts[g];
                h = b[j][f.PostScriptName];
                if (h) {
                    if (f.metadata[j]) {
                        k = f.metadata[j]
                    } else {
                        k = f.metadata[j] = {}
                    }
                    k.widths = h.widths;
                    k.kerning = h.kerning
                }
                l = c[j][f.PostScriptName];
                if (l) {
                    if (f.metadata[j]) {
                        k = f.metadata[j]
                    } else {
                        k = f.metadata[j] = {}
                    }
                    k.encoding = l;
                    if (l.codePages && l.codePages.length) {
                        f.encoding = l.codePages[0]
                    }
                }
            }
        }
    }])
})(pdfDataExport.API);
var saveAs = window.jqxSaveAs = saveAs || (navigator.msSaveBlob && navigator.msSaveBlob.bind(navigator)) || (function(h) {
    var r = h.document,
        l = function() {
            return h.URL || h.webkitURL || h
        },
        e = h.URL || h.webkitURL || h,
        n = $("<a></a>")[0],
        g = "download" in n,
        j = function(t) {
            var s = r.createEvent("MouseEvents");
            s.initMouseEvent("click", true, false, h, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            return t.dispatchEvent(s)
        },
        o = h.webkitRequestFileSystem,
        p = h.requestFileSystem || o || h.mozRequestFileSystem,
        m = function(s) {
            (h.setImmediate || h.setTimeout)(function() {
                throw s
            }, 0)
        },
        c = "application/octet-stream",
        k = 0,
        b = [],
        i = function() {
            var t = b.length;
            while (t--) {
                var s = b[t];
                if (typeof s === "string") {
                    e.revokeObjectURL(s)
                } else {
                    s.remove()
                }
            }
            b.length = 0
        },
        q = function(t, s, w) {
            s = [].concat(s);
            var v = s.length;
            while (v--) {
                var x = t["on" + s[v]];
                if (typeof x === "function") {
                    try {
                        x.call(t, w || t)
                    } catch (u) {
                        m(u)
                    }
                }
            }
        },
        f = function(t, u) {
            var v = this,
                B = t.type,
                E = false,
                x, w, s = function() {
                    var F = l().createObjectURL(t);
                    b.push(F);
                    return F
                },
                A = function() {
                    q(v, "writestart progress write writeend".split(" "))
                },
                D = function() {
                    if (E || !x) {
                        x = s(t)
                    }
                    if (w) {
                        w.location.href = x
                    }
                    v.readyState = v.DONE;
                    A()
                },
                z = function(F) {
                    return function() {
                        if (v.readyState !== v.DONE) {
                            return F.apply(this, arguments)
                        }
                    }
                },
                y = {
                    create: true,
                    exclusive: false
                },
                C;
            v.readyState = v.INIT;
            if (!u) {
                u = "download"
            }
            if (g) {
                x = s(t);
                n.href = x;
                n.download = u;
                if (j(n)) {
                    v.readyState = v.DONE;
                    A();
                    return
                }
            }
            if (h.chrome && B && B !== c) {
                C = t.slice || t.webkitSlice;
                t = C.call(t, 0, t.size, c);
                E = true
            }
            if (o && u !== "download") {
                u += ".download"
            }
            if (B === c || o) {
                w = h
            } else {
                w = h.open()
            }
            if (!p) {
                D();
                return
            }
            k += t.size;
            p(h.TEMPORARY, k, z(function(F) {
                F.root.getDirectory("saved", y, z(function(G) {
                    var H = function() {
                        G.getFile(u, y, z(function(I) {
                            I.createWriter(z(function(J) {
                                J.onwriteend = function(K) {
                                    w.location.href = I.toURL();
                                    b.push(I);
                                    v.readyState = v.DONE;
                                    q(v, "writeend", K)
                                };
                                J.onerror = function() {
                                    var K = J.error;
                                    if (K.code !== K.ABORT_ERR) {
                                        D()
                                    }
                                };
                                "writestart progress write abort".split(" ").forEach(function(K) {
                                    J["on" + K] = v["on" + K]
                                });
                                J.write(t);
                                v.abort = function() {
                                    J.abort();
                                    v.readyState = v.DONE
                                };
                                v.readyState = v.WRITING
                            }), D)
                        }), D)
                    };
                    G.getFile(u, {
                        create: false
                    }, z(function(I) {
                        I.remove();
                        H()
                    }), z(function(I) {
                        if (I.code === I.NOT_FOUND_ERR) {
                            H()
                        } else {
                            D()
                        }
                    }))
                }), D)
            }), D)
        },
        d = f.prototype,
        a = function(s, t) {
            return new f(s, t)
        };
    d.abort = function() {
        var s = this;
        s.readyState = s.DONE;
        q(s, "abort")
    };
    d.readyState = d.INIT = 0;
    d.WRITING = 1;
    d.DONE = 2;
    d.error = d.onwritestart = d.onprogress = d.onwrite = d.onabort = d.onerror = d.onwriteend = null;
    if (h.addEventListener) {
        h.addEventListener("unload", i, false)
    }
    return a
}(self));
(function(a) {
    var b = "pdfDataExport IE Below 9 Shim plugin";
    a.output = function(e, d) {
        return this.internal.output(e, d);
        var c = "Output.pdf";
        switch (e) {
            case "datauristring":
            case "dataurlstring":
            case "datauri":
            case "dataurl":
            case "dataurlnewwindow":
                if (console) {
                    console.log(b + ": Data URIs are not supported on IE6-9.")
                }
                break;
            case "save":
                c = d;
                break
        }
    }
})(pdfDataExport.API);