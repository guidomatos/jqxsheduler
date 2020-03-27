/*
jQWidgets v9.0.0 (2020-Jan)
Copyright (c) 2011-2020 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

(function(a) {
    if (!a.jqx.scheduler) {
        a.jqx.scheduler = {}
    }
    a.jqx.scheduler.utilities = {
        weekDays: {
            Sunday: 0,
            Monday: 1,
            Tuesday: 2,
            Wednesday: 3,
            Thursday: 4,
            Friday: 5,
            Saturday: 6
        },
        guid: function() {
            function b() {
                return Math.floor((1 + Math.random()) * 65536).toString(16).substring(1)
            }
            return b() + b()
        },
        areWeekDaysIncluded: function(d, c) {
            var b = false;
            a.each(d, function(e, f) {
                if (f === c) {
                    b = true;
                    return false
                }
            });
            return b
        },
        getStartOfDay: function(c) {
            var b = new a.jqx.date(c.year(), c.month(), c.day(), 0, 0, 0);
            b.timeZone = c.timeZone;
            return b
        },
        getEndOfDay: function(c) {
            var b = new a.jqx.date(c.year(), c.month(), c.day(), 23, 59, 59);
            b.timeZone = c.timeZone;
            return b
        },
        getDaysCount: function(d, c) {
            var b = 1;
            while (d < c) {
                if (d.day() != c.day()) {
                    b++
                }
                d = d.addDays(1)
            }
            return b
        },
        getStartOfWeek: function(e, g) {
            var c = e.dayOfWeek();
            var b = g.firstDay;
            if (c < b) {
                c += 7
            }
            var d = c - b;
            var f = e.addDays(-d);
            return f.date()
        },
        getEndOfWeek: function(d, f, c) {
            var e = this;
            var g = 7;
            var b = e.getStartOfWeek(d, f, c);
            return b.addDays(g)
        },
        getEndOfMonth: function(d, e) {
            var c = d.daysInMonth();
            var b = new a.jqx.date(d.year(), d.month(), c, 23, 59, 59);
            b.timeZone = d.timeZone;
            return b
        },
        rangeIntersection: function(i, h, f, e) {
            var g = i.valueOf();
            var d = f.valueOf();
            var c = h.valueOf();
            var b = e.valueOf();
            if (d >= g && d < c) {
                return true
            }
            if (d < g && b > g) {
                return true
            }
            if (g == d || c == b) {
                return true
            }
            if (g < d) {
                if (c > d && c < b) {
                    return true
                }
                if (c > b) {
                    return true
                }
            } else {
                if (b > g && b < c) {
                    return true
                }
                if (b > c) {
                    return true
                }
            }
            return false
        },
        rangeContains: function(e, d, c, b) {
            return (e <= c && b <= d)
        },
        monthDays: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        msPerDay: 1000 * 60 * 60 * 24,
        maxYear: 9999,
        ORDINAL_BASE: new Date(1970, 0, 1),
        getYearDay: function(b) {
            var c = new Date(b.getFullYear(), b.getMonth(), b.getDate());
            return Math.ceil((c - new Date(b.getFullYear(), 0, 1)) / a.jqx.scheduler.utilities.msPerDay) + 1
        },
        isLeapYear: function(b) {
            if (b instanceof Date) {
                b = b.getFullYear()
            }
            return ((b % 4 === 0) && (b % 100 !== 0)) || (b % 400 === 0)
        },
        tzOffset: function(b) {
            return b.getTimezoneOffset() * 60 * 1000
        },
        monthRange: function(c, d) {
            var b = new Date(c, d, 1);
            return [a.jqx.scheduler.utilities.getWeekday(b), a.jqx.scheduler.utilities.getMonthDays(b)]
        },
        getMonthDays: function(b) {
            var c = b.getMonth();
            return c == 1 && a.jqx.scheduler.utilities.isLeapYear(b) ? 29 : a.jqx.scheduler.utilities.monthDays[c]
        },
        getWeekday: function(b) {
            var c = [6, 0, 1, 2, 3, 4, 5];
            return c[b.getDay()]
        },
        combine: function(b, c) {
            c = c || b;
            return new Date(b.getFullYear(), b.getMonth(), b.getDate(), c.getHours(), c.getMinutes(), c.getSeconds())
        },
        sort: function(b) {
            b.sort(function(d, c) {
                return d.getTime() - c.getTime()
            })
        },
        timeToUntilString: function(e) {
            var c = new Date(e);
            var b, f = [c.getUTCFullYear(), c.getUTCMonth() + 1, c.getUTCDate(), "T", c.getUTCHours(), c.getUTCMinutes(), c.getUTCSeconds(), "Z"];
            for (var d = 0; d < f.length; d++) {
                b = f[d];
                if (!/[TZ]/.test(b) && b < 10) {
                    f[d] = "0" + String(b)
                }
            }
            return f.join("")
        },
        untilStringToDate: function(d) {
            var b = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z)?$/;
            var c = b.exec(d);
            if (!c) {
                throw new Error("Invalid UNTIL value: " + d)
            }
            return new Date(Date.UTC(c[1], c[2] - 1, c[3], c[5] || 0, c[6] || 0, c[7] || 0))
        },
        Time: function(b, e, c) {
            this.hour = b;
            this.minute = e;
            this.second = c;
            this.that = this;
            var d = this;
            this.getHours = function() {
                return d.hour
            };
            this.getMinutes = function() {
                return d.minute
            }, this.getSeconds = function() {
                return d.second
            }, this.getTime = function() {
                return ((d.hour * 60 * 60) + (d.minute * 60) + d.second) * 1000
            }
        }
    };
    a.jqx.scheduler.appointment = function() {
        var c = this;
        c.from = new a.jqx.date();
        c.to = new a.jqx.date().addHours(1);
        c.subject = "";
        c.description = "";
        c.location = "";
        c.tooltip = "";
        c.hidden = false;
        c.resourceId = null;
        c.id = "";
        c.background = null;
        c.color = null;
        c.borderColor = null;
        c.status = "busy";
        c.style = null;
        c.exceptions = new Array();
        c.exceptionDates = new Array();
        c.recurrencePattern = null;
        c.recurrenceException = new Array();
        c.occurrenceEnumerator = null;
        c.rootAppointment = null;
        c.hiddenByResourceId = false;
        c.draggable = true;
        c.resizable = true;
        c.recurrentAppointment = false;
        c.allDay = false;
        c.readOnly = false;
        c.showStatus = true;
        c.timeZone = null;
        c.scheduler = null;
        c.elements = new Array();
        c.appointmentObject = true;
        c.duration = function() {
            var e = c.to - c.from;
            var f = e * 10000;
            return new a.jqx.timeSpan(f)
        };
        c.toJSON = function(h) {
            var e = function(l) {
                var k = "";
                while (l.length > 75) {
                    k += l.substr(0, 75) + "\n";
                    l = " " + l.substr(75)
                }
                k += l;
                return k
            };
            var g = function(k) {
                return (k < 10 ? "0" : "") + k
            };
            var j = function(l, k) {
                return (!l ? "" : (!k ? "" + l.getFullYear() + "-" + g(l.getMonth() + 1) + "-" + g(l.getDate()) + "T" + g(l.getHours()) + ":" + g(l.getMinutes()) + ":" + g(l.getSeconds()) + "Z" : "" + l.getUTCFullYear() + "-" + g(l.getUTCMonth() + 1) + "-" + g(l.getUTCDate()) + "T" + g(l.getUTCHours()) + ":" + g(l.getUTCMinutes()) + ":" + g(l.getUTCSeconds()) + "Z"))
            };
            var f = function() {
                var k = "";
                for (var l = 0; l < c.recurrenceException.length; l++) {
                    k += c.recurrenceException[l].toString();
                    if (l < c.recurrenceException.length - 1) {
                        k += ","
                    }
                }
                return k
            };
            var i = {};
            i.id = c.id;
            i.from = j(c.from.toDate(), h);
            i.to = j(c.to.toDate(), h);
            i.subject = c.subject;
            i.status = c.status;
            i.location = c.location;
            i.description = c.description;
            i.title = c.title;
            i.resourceId = c.resourceId;
            if (c.recurrencePattern) {
                i.recurrencePattern = c.recurrencePattern.toString()
            } else {
                i.recurrencePattern = ""
            }
            if (c.recurrenceException && c.recurrenceException.length > 0) {
                i.recurrenceException = f()
            } else {
                i.recurrenceException = ""
            }
            i.dtstamp = j(new Date(), h);
            return JSON.stringify(i)
        };
        c.toString = function(i) {
            var f = function(l) {
                var k = "";
                while (l.length > 75) {
                    k += l.substr(0, 75) + "\n";
                    l = " " + l.substr(75)
                }
                k += l;
                return k
            };
            var h = function(k) {
                return (k < 10 ? "0" : "") + k
            };
            var j = function(l, k) {
                return (!l ? "" : (k ? "" + l.getFullYear() + h(l.getMonth() + 1) + h(l.getDate()) + "T" + h(l.getHours()) + h(l.getMinutes()) + h(l.getSeconds()) : "" + l.getUTCFullYear() + h(l.getUTCMonth() + 1) + h(l.getUTCDate()) + "T" + h(l.getUTCHours()) + h(l.getUTCMinutes()) + h(l.getUTCSeconds()) + "Z"))
            };
            var g = function() {
                var k = "";
                for (var l = 0; l < c.recurrenceException.length; l++) {
                    k += j(c.recurrenceException[l].toDate(), i);
                    if (l < c.recurrenceException.length - 1) {
                        k += ","
                    }
                }
                return k
            };
            var e = c.status;
            if (!e) {
                e = "CONFIRMED"
            }
            if (e.toLowerCase() == "busy") {
                e = "CONFIRMED"
            }
            if (e.toLowerCase() == "tentative") {
                e = "TENTATIVE"
            }
            if (e.toLowerCase() == "free") {
                e = "CANCELLED"
            }
            if (e.toLowerCase() == "outOfOffice") {
                e = "CANCELLED"
            }
            return "BEGIN:VEVENT\nUID:" + c.id + "\nDTSTAMP:" + j(new Date(), i) + "\n" + f("TITLE:" + c.subject) + "\nDTSTART:" + j(c.from.toDate(), i) + "\nDTEND:" + j(c.to.toDate(), i) + "\n" + (c.recurrencePattern ? "RRULE:" + c.recurrencePattern.toString() + "\n" : "") + (c.recurrenceException && c.recurrenceException.length > 0 ? "EXDATE:" + g() + "\n" : "") + (c.subject ? f("SUMMARY:" + c.subject) + "\n" : "") + "TRANSP:OPAQUE\n" + (c.status ? f("STATUS:" + e) + "\n" : "") + (c.description ? f("DESCRIPTION:" + c.description) + "\n" : "") + (c.location ? f("LOCATION:" + c.location) + "\n" : "") + "END:VEVENT"
        };
        c.range = function() {
            if (!c.allDay) {
                return {
                    from: c.from,
                    to: c.to
                }
            } else {
                return {
                    from: a.jqx.scheduler.utilities.getStartOfDay(c.from),
                    to: a.jqx.scheduler.utilities.getEndOfDay(c.to)
                }
            }
        };
        c.clearRecurrence = function() {
            if (c.recurrencePattern) {
                c.exceptions = new Array();
                c.exceptionDates = new Array();
                c.recurrencePattern = null;
                c.recurrenceException = new Array();
                c.hidden = false
            }
        };
        c.isAllDayAppointment = function() {
            return this.duration().days() >= 1 || this.allDay
        };
        c.cloneAppointmentAttributes = function(e) {
            e.subject = c.subject;
            e.description = c.description;
            e.location = c.location;
            e.tooltip = c.tooltip;
            e.resourceId = c.resourceId;
            e.category = c.category;
            e.status = c.status;
            e.rootAppointment = c;
            e.color = c.color;
            e.borderColor = c.borderColor;
            e.background = c.background;
            e.hidden = c.hidden;
            e.timezone = c.timeZone;
            e.style = c.style;
            e.hiddenByResourceId = c.hiddenByResourceId
        };
        c.createOccurrence = function(g) {
            if (g == null) {
                return null
            }
            var f = new a.jqx.scheduler.appointment();
            f.allDay = c.allDay;
            var e = c.duration();
            if (c.allDay) {
                e = new a.jqx.timeSpan(10000 * (c.to - c.from))
            }
            f.from = g;
            f.to = g.add(e);
            f.occurrenceFrom = g.clone();
            f.subject = c.subject;
            f.description = c.description;
            f.location = c.location;
            f.tooltip = c.tooltip;
            f.resourceId = c.resourceId;
            f.category = c.category;
            f.status = c.status;
            f.rootAppointment = c;
            f.color = c.color;
            f.draggable = c.draggable;
            f.resizable = c.resizable;
            f.borderColor = c.borderColor;
            f.background = c.background;
            f.recurrentAppointment = true;
            f.timeZone = c.timeZone;
            f.style = c.style;
            f.hiddenByResourceId = c.hiddenByResourceId;
            f.boundAppointment = c.boundAppointment;
            if (c.hiddenByResourceId) {
                f.hidden = true
            }
            f.id = c.id + "." + a.jqx.scheduler.utilities.guid();
            c.hidden = true;
            c.occurrenceIndex++;
            return f
        };
        c.clone = function() {
            var e = new a.jqx.scheduler.appointment();
            e.allDay = c.allDay;
            e.from = c.from.clone();
            e.to = c.to.clone();
            e.subject = c.subject;
            e.description = c.description;
            e.location = c.location;
            e.tooltip = c.tooltip;
            e.resourceId = c.resourceId;
            e.category = c.category;
            e.status = c.status;
            e.color = c.color;
            e.borderColor = c.borderColor;
            e.background = c.background;
            e.style = c.style;
            e.timeZone = c.timeZone;
            e.hiddenByResourceId = c.hiddenByResourceId;
            if (c.hiddenByResourceId) {
                e.hidden = true
            }
            e.id = c.id + "." + a.jqx.scheduler.utilities.guid();
            return e
        };
        c.isRecurrentAppointment = function() {
            return c.recurrentAppointment || c.recurrencePattern != null
        };
        c.anyExceptions = function() {
            return c.exceptions != null && c.exceptions.length > 0
        };
        c.anyOccurrences = function() {
            return c.occurrenceEnumerator != null && c.occurrenceEnumerator.getNextAppointment()
        };
        c.isException = function() {
            var g = c.rootAppointment || this;
            if (!g.recurrenceException) {
                return false
            }
            for (var f = 0; f < g.recurrenceException.length; f++) {
                var e = g.recurrenceException[f];
                if (c.occurrenceFrom && e.equals(c.occurrenceFrom)) {
                    return true
                }
            }
            return false
        };
        c.getOccurrences = function(h, g) {
            c.occurrenceIndex = 0;
            var f = h !== null ? h : c.from;
            var e = new a.jqx.scheduler.recurrentAppointmentsList(c, c.calendar, f, g, c.scheduler);
            c.occurrences = e.list;
            return e.list
        };
        if (arguments.length === 1) {
            if (a.type(arguments[0]) == "object") {
                for (var b in arguments[0]) {
                    var d = arguments[0][b];
                    if (this[b] !== undefined) {
                        this[b] = d
                    }
                }
            } else {
                c.from = arguments[0];
                c.to = new a.jqx.date(c.from).addHours(1)
            }
        } else {
            if (arguments.length === 2) {
                c.from = arguments[0];
                c.to = arguments[1]
            } else {
                if (arguments.length === 3) {
                    c.from = arguments[0];
                    c.to = arguments[1];
                    c.subject = arguments[2]
                } else {
                    if (arguments.length === 3) {
                        c.from = arguments[0];
                        c.to = arguments[1];
                        c.subject = arguments[2];
                        c.description = arguments[3]
                    }
                }
            }
        }
        if (c.recurrencePattern != null) {
            c.recurrencePattern.setFrom(c.from)
        }
    };
    a.jqx.scheduler.recurrentAppointmentsList = function() {
        var b = this;
        b.recurrentAppointment = null;
        b.currentTime = null;
        b.calendar = a.jqx.scheduler.calendar;
        b.from = new a.jqx.date(0);
        b.to = new a.jqx.date(9999, 12, 31);
        b.foundItems = 0;
        b.list = new Array();
        b.scheduler = null;
        b.getOccurrences = function(c, e, d) {
            if (c == undefined) {
                return b.list
            }
            return new a.jqx.scheduler.recurrentAppointmentsList(c, b.calendar, e, d).list
        };
        b.current = function() {
            return b.recurrentAppointment.createOccurrence(b.currentTime)
        };
        b.fillList = function() {
            b.currentTime = null;
            b.foundItems = 0;
            b.list = new Array();
            var c = b.recurrentAppointment.recurrencePattern;
            c.step = 0;
            c.current = 0;
            c.currentYearDay = 0;
            if (c == null) {
                return false
            }
            while (b.getNextAppointment(c)) {
                var d = b.current();
                if (d) {
                    b.list.push(d)
                }
            }
        };
        b.getNextAppointment = function(h) {
            if (b.recurrentAppointment == null) {
                return false
            }
            var d = 4294967295;
            var j = this.scheduler._views[this.scheduler._view].type;
            var l = this.scheduler._views[this.scheduler._view];
            var f = 0;
            switch (h.freq) {
                case "weekly":
                    f = 7;
                    break;
                case "monthly":
                    f = 31;
                    break;
                case "yearly":
                    f = 365;
                    break
            }
            for (var e = 0; e < d; e++) {
                var k = h.getNewOccurenceDate();
                if (!k) {
                    continue
                }
                h.currentTime = k;
                if ((h.to < k && h.to.addDays(f) >= k) || (b.to < k && b.to.addDays(f) >= k)) {
                    b.currentTime = null;
                    return true
                }
                if (a.jqx.scheduler.utilities.getEndOfDay(h.to).addDays(f) < k || a.jqx.scheduler.utilities.getEndOfDay(b.to).addDays(f) < k) {
                    b.currentTime = null;
                    return false
                }
                var g = true;
                g = b.getCanSetTime(h, k, g);
                if (h.canCreateNewOccurence(k, b.calendar)) {
                    var c = true;
                    if (false === l.showWeekends) {
                        if (k.dayOfWeek() == 6 || k.dayOfWeek() == 0) {
                            c = false
                        }
                    }
                    if (c) {
                        b.foundItems++
                    }
                }
                if (!g) {
                    continue
                }
                b.currentTime = k;
                if (b.foundItems > h.count) {
                    return false
                }
                return true
            }
            return false
        };
        b.getCanSetTime = function(c, e, d) {
            if (!c.canCreateNewOccurence(e, b.calendar)) {
                d = false
            }
            if (e < b.from && e.add(b.recurrentAppointment.duration()) <= b.from) {
                d = false
            }
            if (b.to <= e) {
                d = false
            }
            return d
        };
        b.isException = function(f, c, g) {
            var e = b.recurrentAppointment.exceptions;
            for (var d = 0; d < e.length; d++) {
                if (g.isDateInExceptionAppointment(f, c, e[d])) {
                    if (-1 === g.newExceptions.indexOf(e[d])) {
                        return true
                    }
                }
            }
            return false
        };
        if (arguments && arguments.length > 0) {
            b.recurrentAppointment = arguments[0];
            if (arguments[1]) {
                b.calendar = arguments[1]
            }
            if (arguments[2]) {
                b.from = arguments[2]
            }
            if (arguments[3]) {
                b.to = arguments[3]
            }
            if (arguments[4]) {
                b.scheduler = arguments[4]
            }
            if (arguments[2] === undefined) {
                b.from = new a.jqx.date(0);
                b.to = new a.jqx.date(9999, 12, 31)
            }
            if (b.scheduler && b.scheduler.localization) {
                b.calendar.firstDay = b.scheduler.localization.firstDay
            }
            b.fillList()
        }
        return b
    };
    a.jqx.scheduler.recurrencePattern = function() {
        var c = this;
        var b = {
            from: new a.jqx.date(0),
            to: new a.jqx.date(9999, 12, 31),
            count: 1000,
            interval: 1,
            exceptions: new Array(),
            newExceptions: new Array(),
            month: 1,
            day: 1,
            current: 0,
            currentYearDay: 0,
            step: 0,
            days: [],
            bynweekday: [],
            isEveryWeekDay: true,
            timeZone: null,
            weekDays: {
                Sunday: 0,
                Monday: 1,
                Tuesday: 2,
                Wednesday: 3,
                Thursday: 4,
                Friday: 5,
                Saturday: 6
            },
            freq: "daily",
            bymonth: null,
            bymonthday: null,
            byyearday: null,
            byweekno: null,
            byweekday: null
        };
        a.extend(true, c, b);
        c.getNewOccurenceDate = function() {
            var o = function(n, C) {
                var k = 0,
                    D = [];
                if (n instanceof Array) {
                    for (; k < C; k++) {
                        D[k] = [].concat(n)
                    }
                } else {
                    for (; k < C; k++) {
                        D[k] = n
                    }
                }
                return D
            };
            var d = function(k, i) {
                var n = k % i;
                return (n * i < 0) ? n + i : n
            };
            var v = function(D, k) {
                if (arguments.length === 1) {
                    k = D;
                    D = 0
                }
                var n = [];
                for (var C = D; C < k; C++) {
                    n.push(C)
                }
                return n
            };
            var u = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366];
            var l = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
            var r = c.from.year();
            var j = [6, 0, 1, 2, 3, 4, 5];
            var q = function(i) {
                c.yearlen = i % 4 == 0 && (i % 100 != 0 || i % 400 == 0) ? 366 : 365;
                c.nextyearlen = (1 + i) % 4 == 0 && ((1 + i) % 100 != 0 || (1 + i) % 400 == 0) ? 366 : 365;
                var k = new Date(i, 0, 1);
                var C = j[new Date(i, 0, 1).getDay()];
                var n = (function() {
                    for (var D = [], E = 0; E < 55; E++) {
                        D = D.concat(v(7))
                    }
                    return D
                }());
                if (c.yearlen == 365) {
                    c.wdaymask = n.slice(C);
                    c.mrange = [].concat(l)
                } else {
                    c.wdaymask = n.slice(C);
                    c.mrange = [].concat(u)
                }
            };
            q(r);
            switch (c.freq) {
                case "daily":
                default:
                    var g = c.from.add(new a.jqx.timeSpan(c.step * c.interval, 0, 0, 0));
                    c.step++;
                    return g;
                case "weekly":
                    if (c.byweekday) {
                        var g = new a.jqx.date(c.from, c.timeZone);
                        var t = j[c.from.dayOfWeek()];
                        g = g.addDays(7 * (c.step));
                        g = g.addDays(c.byweekday[c.current]);
                        g = g.addDays(-t);
                        if (g < c.from) {
                            g = null
                        }
                        c.current++;
                        if (undefined == c.byweekday[c.current]) {
                            c.current = 0;
                            c.step++
                        }
                    }
                    return g;
                case "monthly":
                    if (c.bynweekday.length > 0) {
                        var g = new a.jqx.date(c.from.year(), c.from.month(), 1, c.from.hour(), c.from.minute(), c.from.second());
                        g.timeZone = c.timeZone;
                        g = g.addMonths(c.step * c.interval);
                        q(g.year());
                        var B = g.month();
                        var f = [c.mrange.slice(B - 1, B + 1)][0];
                        var h = f[0];
                        var m = f[1];
                        m -= 1;
                        c.nwdaymask = o(0, c.yearlen);
                        c.step++;
                        for (var y = 0; y < c.bynweekday.length; y++) {
                            var s = c.bynweekday[y][0],
                                x = c.bynweekday[y][1];
                            if (x < 0) {
                                z = m + (x + 1) * 7;
                                z -= d(c.wdaymask[z] - s, 7)
                            } else {
                                z = h + (x - 1) * 7;
                                z += d(7 - c.wdaymask[z] + s, 7)
                            }
                            if (h <= z && z <= m) {
                                c.nwdaymask[z] = 1
                            }
                        }
                        var w = z + 1;
                        var A = w - h;
                        var g = new a.jqx.date(c.from.year(), c.from.month(), A, c.from.hour(), c.from.minute(), c.from.second());
                        g.timeZone = c.timeZone;
                        g = g.addMonths((c.step - 1) * c.interval)
                    } else {
                        if (c.bymonthday.length > 0) {
                            var g = new a.jqx.date(c.from.year(), c.from.month(), c.bymonthday[c.current], c.from.hour(), c.from.minute(), c.from.second());
                            g.timeZone = c.timeZone;
                            g = g.addMonths(c.step * c.interval);
                            c.current++;
                            if (!c.bymonthday[c.current]) {
                                c.current = 0;
                                c.step++
                            }
                        } else {
                            var g = new a.jqx.date(c.from.year(), c.from.month(), c.day, c.from.hour(), c.from.minute(), c.from.second());
                            g.timeZone = c.timeZone;
                            g = g.addMonths(c.step * c.interval);
                            c.step++
                        }
                    }
                    return g;
                case "yearly":
                    if (c.bymonth && c.bymonth.length > 0) {
                        if (c.bynweekday.length > 0) {
                            var g = new a.jqx.date(c.from.year(), c.bymonth[c.current], 1, c.from.hour(), c.from.minute(), c.from.second());
                            g.timeZone = c.timeZone;
                            g = g.addYears(c.step * c.interval);
                            q(g.year());
                            var B = g.month();
                            var f = [c.mrange.slice(B - 1, B + 1)][0];
                            var h = f[0];
                            var m = f[1];
                            m -= 1;
                            c.nwdaymask = o(0, c.yearlen);
                            for (var y = 0; y < c.bynweekday.length; y++) {
                                var s = c.bynweekday[y][0],
                                    x = c.bynweekday[y][1];
                                if (x < 0) {
                                    z = m + (x + 1) * 7;
                                    z -= d(c.wdaymask[z] - s, 7)
                                } else {
                                    z = h + (x - 1) * 7;
                                    z += d(7 - c.wdaymask[z] + s, 7)
                                }
                                if (h <= z && z <= m) {
                                    c.nwdaymask[z] = 1
                                }
                            }
                            var w = z + 1;
                            var A = w - h;
                            g = new a.jqx.date(g.year(), c.bymonth[c.current], A, c.from.hour(), c.from.minute(), c.from.second());
                            g.timeZone = c.timeZone;
                            c.step++
                        } else {
                            if (c.byyearday && c.byyearday.length > 0) {
                                var g = new a.jqx.date(c.from.year(), c.bymonth[c.current], c.byyearday[c.currentYearDay], c.from.hour(), c.from.minute(), c.from.second());
                                g.timeZone = c.timeZone;
                                g = g.addYears(c.step * c.interval);
                                c.currentYearDay++;
                                if (!c.byyearday[c.currentYearDay]) {
                                    c.currentYearDay = 0;
                                    c.current++;
                                    if (!c.bymonth[c.current]) {
                                        c.current = 0;
                                        c.step++
                                    }
                                }
                            } else {
                                var g = new a.jqx.date(c.from.year(), c.bymonth[c.current], c.from.day(), c.from.hour(), c.from.minute(), c.from.second());
                                g.timeZone = c.timeZone;
                                g = g.addYears(c.step * c.interval);
                                c.current++;
                                if (!c.bymonth[c.current]) {
                                    c.current = 0;
                                    c.step++
                                }
                            }
                        }
                    } else {
                        if (c.byyearday && c.byyearday.length > 0) {
                            var g = new a.jqx.date(c.from.year(), c.from.month(), c.byyearday[c.current], c.from.hour(), c.from.minute(), c.from.second());
                            g.timeZone = c.timeZone;
                            g = g.addYears(c.step * c.interval);
                            c.current++;
                            if (!c.byyearday[c.current]) {
                                c.current = 0;
                                c.step++
                            }
                        } else {
                            if (c.byweekno != null) {
                                var p = function(n, k) {
                                    var i = 1;
                                    var C = new a.jqx.date(k.year(), 1, 1, k.hour(), k.minute(), k.second());
                                    C.timeZone = c.timeZone;
                                    while (i != n) {
                                        C = C.addDays(7);
                                        i++;
                                        if (i > 53) {
                                            break
                                        }
                                    }
                                    while (a.jqx.scheduler.utilities.getWeekday(C.toDate()) != c.wkst) {
                                        C = C.addDays(1)
                                    }
                                    return C
                                };
                                var g = c.from.addYears(c.step * c.interval);
                                g = p(c.byweekno[c.current], g);
                                if (c.byweekday) {
                                    var e = g;
                                    for (var z = 0; z < 7; z++) {
                                        if (j[e.dayOfWeek()] === c.byweekday[c.currentYearDay]) {
                                            break
                                        }
                                        e = e.addDays(1)
                                    }
                                    g = e;
                                    c.currentYearDay++;
                                    if (!c.byweekday[c.currentYearDay]) {
                                        c.currentYearDay = 0;
                                        c.current++;
                                        if (!c.byweekno[c.current]) {
                                            c.current = 0;
                                            c.step++
                                        }
                                    }
                                } else {
                                    c.current++;
                                    if (!c.byweekno[c.current]) {
                                        c.current = 0;
                                        c.step++
                                    }
                                }
                            } else {
                                var g = new a.jqx.date(c.from.year(), c.month, c.day, c.from.hour(), c.from.minute(), c.from.second());
                                g.timeZone = c.timeZone;
                                g = g.addYears(c.step * c.interval);
                                c.step++
                            }
                        }
                    }
                    return g
            }
        };
        c.isDateInExceptionAppointment = function(d, e, f) {
            switch (c.freq) {
                case "daily":
                case "weekly":
                default:
                    return d.year() == f.from.year() && d.dayOfYear() == f.from.dayOfYear()
            }
        };
        c.createNewPattern = function() {
            if (c.ical) {
                var d = new a.jqx.scheduler.recurrencePattern(c.ical);
                return d
            } else {
                var d = new a.jqx.scheduler.recurrencePattern();
                d.from = c.from;
                d.to = c.to;
                d.count = c.count;
                d.interval = c.interval;
                d.exceptions = c.exceptions;
                d.newExceptions = c.newExceptions;
                d.weekDays = c.weekDays;
                d.isEveryWeekDay = c.isEveryWeekDay;
                d.month = c.month;
                d.day = c.day;
                d.current = c.current;
                d.currentYearDay = c.currentYearDay;
                d.step = c.step;
                d.days = c.days;
                d.bynweekday = c.bynweekday;
                d.bymonth = c.bymonth;
                d.bymonthday = c.bymonthday;
                d.byyearday = c.byyearday;
                d.byweekno = c.byweekno;
                d.byweekday = c.byweekday;
                d.freq = d.freq;
                d.timeZone = d.timeZone;
                return d
            }
        };
        c.equals = function(e) {
            var d = c.from == e.from && c.to == e.to && c.count === e.count && c.interval === e.interval && c.day === e.day && c.month === e.month;
            return d
        };
        c.isDayOfWeekIncluded = function(e) {
            var d = e.dayOfWeek();
            return a.jqx.scheduler.utilities.areWeekDaysIncluded(c.weekDays, d)
        };
        c.getWeekIndexFromDate = function(g, f) {
            var e = f.firstDay;
            var h = a.jqx.scheduler.utilities.getStartOfWeek(c.from, f, e);
            var d = new a.jqx.timeSpan(g.subtract(h));
            return parseInt(d.days() / 7)
        };
        c.canCreateNewOccurence = function(e, g) {
            var d = e.toDate();
            switch (c.freq) {
                case "daily":
                default:
                    if (c.bymonth) {
                        if (c.bymonth.indexOf(e.month()) == -1) {
                            return false
                        }
                    }
                    if (c.isEveryWeekDay) {
                        if (!c.isDayOfWeekIncluded(e, g)) {
                            return false
                        } else {
                            return true
                        }
                    } else {
                        return true
                    }
                    break;
                case "weekly":
                    var f = c.getWeekIndexFromDate(e, g);
                    if (c.bymonth) {
                        if (c.bymonth.indexOf(e.month()) == -1) {
                            return false
                        }
                    }
                    if ((f % c.interval) != 0) {
                        return false
                    }
                    if (c.weekDays == {}) {
                        var h = e;
                        if (c.from.dayOfWeek() != h.dayOfWeek()) {
                            return false
                        }
                    } else {
                        if (!c.isDayOfWeekIncluded(e, g)) {
                            return false
                        }
                    }
                    break;
                case "monthly":
                case "yearly":
                    if (c.bymonth) {
                        if (c.bymonth.indexOf(e.month()) == -1) {
                            return false
                        }
                    }
                    if (e < c.from) {
                        return false
                    }
                    break
            }
            return true
        };
        c.toString = function() {
            var d = {};
            d.dtstart = this.from.toDate();
            d.until = this.to ? this.to.toDate() : null;
            d.count = this.count;
            var e = {};
            e.YEARLY = 0;
            e.MONTHLY = 1;
            e.WEEKLY = 2;
            e.DAILY = 3;
            e.HOURLY = 4;
            e.MINUTELY = 5;
            e.SECONDLY = 6;
            d.freq = e[this.freq.toUpperCase()];
            if (d.freq == "YEARLY") {
                d.bymonth = this.bymonth ? this.bymonth : new Array().push(this.month)
            }
            d.byweekday = new Array();
            var g = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
            a.each(this.weekDays, function() {
                var h = this;
                h--;
                if (h < 0) {
                    h = 6
                }
                d.byweekday.push(h)
            });
            if (this.byyearday != undefined) {
                d.byyearday = this.byyearday
            }
            if (this.byweekno != undefined) {
                d.byweekno = this.byweekno
            }
            d.bymonthday = this.bymonthday;
            d.wkst = g[this.wkst];
            d.interval = this.interval;
            var f = new a.jqx.ICalRule(d);
            return f.toString()
        };
        c.init = function(j) {
            var d = new a.jqx.ICalRule(c.ical, j);
            var f = d.options;
            c.from = f.dtstart ? new a.jqx.date(f.dtstart, c.timeZone) : c.from;
            c.count = f.count != undefined ? f.count : c.count;
            c.freq = d.FREQUENCIES[f.freq].toLowerCase();
            c.interval = f.interval != undefined ? f.interval : c.interval;
            c.to = f.until ? new a.jqx.date(f.until, c.timeZone) : c.to;
            c.wkst = f.wkst;
            c.bymonth = f.bymonth;
            if (c.bymonth && c.bymonth.length > 0) {
                c.month = c.bymonth[0]
            } else {
                c.month = c.from.month()
            }
            c.day = c.from.day();
            if (f.byweekday != undefined) {
                var h = {
                    Sunday: 0,
                    Monday: 1,
                    Tuesday: 2,
                    Wednesday: 3,
                    Thursday: 4,
                    Friday: 5,
                    Saturday: 6
                };
                c.weekDays = {};
                for (var g = 0; g < f.byweekday.length; g++) {
                    var e = f.byweekday[g];
                    switch (e) {
                        case 0:
                            c.weekDays.Monday = 1;
                            break;
                        case 1:
                            c.weekDays.Tuesday = 2;
                            break;
                        case 2:
                            c.weekDays.Wednesday = 3;
                            break;
                        case 3:
                            c.weekDays.Thursday = 4;
                            break;
                        case 4:
                            c.weekDays.Friday = 5;
                            break;
                        case 5:
                            c.weekDays.Saturday = 6;
                            break;
                        case 6:
                            c.weekDays.Sunday = 0;
                            break
                    }
                }
                c.byweekday = f.byweekday
            }
            c.byweekno = f.byweekno;
            if (f.bynweekday) {
                c.bynweekday = f.bynweekday
            }
            if (f.bymonthday != undefined) {
                c.bymonthday = f.bymonthday.sort();
                if (c.bymonthday[0]) {
                    c.day = c.bymonthday[0]
                }
            }
            if (f.byyearday != undefined) {
                c.day = f.byyearday[0];
                c.byyearday = f.byyearday.sort()
            }
            return f
        };
        c.setFrom = function(d) {
            c.from = d.clone();
            if (c.ical) {
                c.init(d)
            }
        };
        if (arguments.length == 1) {
            c.ical = arguments[0];
            c.init()
        }
        return c
    };
    a.jqx.scheduler.calendar = {
        "/": "/",
        ":": ":",
        firstDay: 0,
        days: {
            names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            namesAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            namesShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
        },
        months: {
            names: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
            namesAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""]
        },
        AM: ["AM", "am", "AM"],
        PM: ["PM", "pm", "PM"],
        eras: [{
            name: "A.D.",
            start: null,
            offset: 0
        }],
        twoDigitYearMax: 2029,
        patterns: {
            d: "M/d/yyyy",
            D: "dddd, MMMM dd, yyyy",
            t: "h:mm tt",
            T: "h:mm:ss tt",
            f: "dddd, MMMM dd, yyyy h:mm tt",
            F: "dddd, MMMM dd, yyyy h:mm:ss tt",
            M: "MMMM dd",
            Y: "yyyy MMMM",
            S: "yyyy\u0027-\u0027MM\u0027-\u0027dd\u0027T\u0027HH\u0027:\u0027mm\u0027:\u0027ss",
            ISO: "yyyy-MM-dd hh:mm:ss",
            ISO2: "yyyy-MM-dd HH:mm:ss",
            d1: "dd.MM.yyyy",
            d2: "dd-MM-yyyy",
            zone1: "yyyy-MM-ddTHH:mm:ss-HH:mm",
            zone2: "yyyy-MM-ddTHH:mm:ss+HH:mm",
            custom: "yyyy-MM-ddTHH:mm:ss.fff",
            custom2: "yyyy-MM-dd HH:mm:ss.fff"
        },
        percentsymbol: "%",
        currencysymbol: "$",
        currencysymbolposition: "before",
        decimalseparator: ".",
        thousandsseparator: ","
    };
    a.jqx.ICalRule = function(u, n) {
        var D = this;
        var m = function(R, j) {
            if (arguments.length === 1) {
                j = R;
                R = 0
            }
            var k = [];
            for (var v = R; v < j; v++) {
                k.push(v)
            }
            return k
        };
        var A = function(k, v) {
            var j = 0,
                R = [];
            if (k instanceof Array) {
                for (; j < v; j++) {
                    R[j] = [].concat(k)
                }
            } else {
                for (; j < v; j++) {
                    R[j] = k
                }
            }
            return R
        };
        var C = function(i) {
            return (i instanceof Array && i.length == 0) ? false : Boolean(i)
        };
        var B = function(i, j) {
            return i.indexOf(j) != -1
        };
        var G = [].concat(A(1, 31), A(2, 28), A(3, 31), A(4, 30), A(5, 31), A(6, 30), A(7, 31), A(8, 31), A(9, 30), A(10, 31), A(11, 30), A(12, 31), A(1, 7));
        var s = [].concat(A(1, 31), A(2, 29), A(3, 31), A(4, 30), A(5, 31), A(6, 30), A(7, 31), A(8, 31), A(9, 30), A(10, 31), A(11, 30), A(12, 31), A(1, 7));
        var h = m(1, 29),
            g = m(1, 30),
            P = m(1, 31),
            O = m(1, 32);
        var J = [].concat(O, g, O, P, O, P, O, O, P, O, P, O, O.slice(0, 7));
        var b = [].concat(O, h, O, P, O, P, O, O, P, O, P, O, O.slice(0, 7));
        h = m(-28, 0);
        g = m(-29, 0);
        P = m(-30, 0);
        O = m(-31, 0);
        var K = [].concat(O, g, O, P, O, P, O, O, P, O, P, O, O.slice(0, 7));
        var e = [].concat(O, h, O, P, O, P, O, O, P, O, P, O, O.slice(0, 7));
        var c = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366];
        var z = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
        var q = (function() {
            for (var j = [], k = 0; k < 55; k++) {
                j = j.concat(m(7))
            }
            return j
        }());
        var f = function(j, k) {
            var i = this;
            if (k === 0) {
                throw new Error("Can't create weekday with n == 0")
            }
            this.weekday = j;
            this.n = k;
            this.nth = function(v) {
                return i.n == v ? i : new f(i.weekday, v)
            };
            this.equals = function(v) {
                return i.weekday == v.weekday && i.n == v.n
            };
            this.toString = function() {
                var v = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"][i.weekday];
                if (this.n) {
                    v = (i.n > 0 ? "+" : "") + String(i.n) + v
                }
                return v
            };
            this.getJsWeekday = function() {
                return i.weekday == 6 ? 0 : i.weekday + 1
            }
        };
        this.FREQUENCIES = ["YEARLY", "MONTHLY", "WEEKLY", "DAILY", "HOURLY", "MINUTELY", "SECONDLY"];
        this.YEARLY = 0;
        this.MONTHLY = 1;
        this.WEEKLY = 2;
        this.DAILY = 3;
        this.HOURLY = 4;
        this.MINUTELY = 5;
        this.SECONDLY = 6;
        this.MO = new f(0);
        this.TU = new f(1);
        this.WE = new f(2);
        this.TH = new f(3);
        this.FR = new f(4);
        this.SA = new f(5);
        this.SU = new f(6);
        var d = {
            freq: null,
            dtstart: null,
            interval: 1,
            wkst: D.MO,
            count: null,
            until: null,
            bysetpos: null,
            bymonth: null,
            bymonthday: null,
            byyearday: null,
            byweekno: null,
            byweekday: null,
            byhour: null,
            byminute: null,
            bysecond: null,
            byeaster: null
        };
        this._string = null;
        this.toString = function() {
            var aa = this.origOptions;
            var Y, Z, V, W, U, k = [];
            Z = Object.keys(aa);
            V = Object.keys(d);
            for (var R = 0; R < Z.length; R++) {
                if (!B(V, Z[R])) {
                    continue
                }
                Y = Z[R].toUpperCase();
                W = aa[Z[R]];
                U = [];
                if (W === null || W instanceof Array && !W.length) {
                    continue;
                }
                switch (Y) {
                    case "FREQ":
                        W = D.FREQUENCIES[aa.freq];
                        break;
                    case "WKST":
                        if (!W) W = 0;
                        W = W.toString();
                        break;
                    case "BYWEEKDAY":
                        Y = "BYDAY";
                        if (!(W instanceof Array)) W = [W];
                        for (var T, v = 0; v < W.length; v++) {
                            T = W[v];
                            if (T instanceof f) {} else {
                                if (T instanceof Array) T = new f(T[0], T[1]);
                                else T = new f(T);
                            }
                            U[v] = T.toString();
                        }
                        W = U;
                        break;
                    case "DTSTART":
                    case "UNTIL":
                        W = a.jqx.scheduler.utilities.timeToUntilString(W);
                        break;
                    default:
                        if (W instanceof Array) {
                            for (var v = 0; v < W.length; v++) {
                                U[v] = String(W[v]);
                            }
                            W = U;
                        } else {
                            W = String(W);
                        }
                }
                k.push([Y, W]);
            }
            var X = [];
            for (var R = 0; R < k.length; R++) {
                var S = k[R];
                X.push(S[0] + "=" + S[1].toString());
            }
            return X.join(";");
        };
        this.parseString = function(v) {
            v = v.replace(/^\s+|\s+$/, "");
            if (!v.length) return null;
            var S, R, X, W, T, Y = v.split(";"),
                aa = {};
            for (S = 0; S < Y.length; S++) {
                T = Y[S].split("=");
                X = T[0];
                W = T[1];
                if (X == "") continue;
                switch (X) {
                    case "COUNT":
                    case "INTERVAL":
                    case "BYSETPOS":
                    case "BYMONTH":
                    case "BYMONTHDAY":
                    case "BYYEARDAY":
                    case "BYWEEKNO":
                    case "BYHOUR":
                    case "BYMINUTE":
                    case "BYSECOND":
                        if (W.indexOf(",") != -1) {
                            W = W.split(",");
                            for (R = 0; R < W.length; R++) {
                                if (/^[+-]?\d+$/.test(W[R])) W[R] = Number(W[R]);
                            }
                        } else {
                            if (/^[+-]?\d+$/.test(W)) W = Number(W);
                        }
                        X = X.toLowerCase();
                        aa[X] = W;
                        break;
                    case "BYDAY":
                        var k, U, V, Z = W.split(",");
                        aa.byweekday = [];
                        for (R = 0; R < Z.length; R++) {
                            V = Z[R];
                            if (V.length == 2) {
                                U = D[V];
                                aa.byweekday.push(U);
                            } else {
                                V = V.match(/^([+-]?\d)([A-Z]{2})$/);
                                k = Number(V[1]);
                                U = V[2];
                                U = D[U].weekday;
                                aa.byweekday.push(new f(U, k));
                            }
                        }
                        break;
                    case "FREQ":
                        aa.freq = D[W];
                        break;
                    case "WKST":
                        aa.wkst = D[W];
                        break;
                    case "DTSTART":
                        aa.dtstart = a.jqx.scheduler.utilities.untilStringToDate(W);
                        break;
                    case "UNTIL":
                        aa.until = a.jqx.scheduler.utilities.untilStringToDate(W);
                        break;
                    case "BYEASTER":
                        aa.byeaster = Number(W);
                        break;
                    default:
                        throw new Error("Unknown ICalRule property '" + X + "'");
                }
            }
            D.options = aa;
            return aa;
        };
        if (a.type(u) === "string") this.options = this.parseString(u)
        else this.options = u || {}
        var u = this.options;
        if (!Array.prototype.forEach) {
            Array.prototype.forEach = function(V, j) {
                var R, v;
                if (this == null) throw new TypeError(" this is null or not defined");
                var U = Object(this);
                var i = U.length >>> 0;
                if (typeof V !== "function") throw new TypeError(V + " is not a function");
                if (arguments.length > 1) R = j;
                v = 0;
                while (v < i) {
                    var S;
                    if (v in U) {
                        S = U[v];
                        V.call(R, S, v, U);
                    }
                    v++;
                }
            }
        }
        if (!Object.keys) {
            Object.keys = (function() {
                var k = Object.prototype.hasOwnProperty,
                    v = !({
                        toString: null
                    }).propertyIsEnumerable("toString"),
                    j = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                    i = j.length;
                return function(T) {
                    if (typeof T !== "object" && (typeof T !== "function" || T === null)) {
                        throw new TypeError("Object.keys called on non-object");
                    }
                    var R = [],
                        U, S;
                    for (U in T) {
                        if (k.call(T, U)) R.push(U);
                    }
                    if (v) {
                        for (S = 0; S < i; S++) {
                            if (k.call(T, j[S])) R.push(j[S]);
                        }
                    }
                    return R;
                }
            }())
        }
        this.origOptions = {};
        var E = [],
            w = Object.keys(this.options),
            p = Object.keys(d);
        w.forEach(function(i) {
            this.origOptions[i] = this.options[i];
            if (!B(p, i)) E.push(i)
        }, this);
        if (E.length) throw new Error("Invalid options: " + E.join(", "));
        if (!D.FREQUENCIES[this.options.freq] && u.byeaster === null) throw new Error("Invalid Frequency: " + String(u.freq));
        p.forEach(function(i) {
            if (!B(w, i)) u[i] = d[i];
        });
        var x = this.options;
        if (x.byeaster !== null) x.freq = this.YEARLY;
        if (!x.dtstart) {
            x.dtstart = new Date();
            x.dtstart.setMilliseconds(0);
        }
        if (n) x.dtstart = n.toDate();
        if (x.wkst === null) {
            x.wkst = this.MO.weekday
        } else {
            if (typeof x.wkst == "number") {} else {
                if (x.wkst == null) x.wkst = this.MO.weekday
                else x.wkst = x.wkst.weekday
            }
        }
        if (x.bysetpos !== null) {
            if (typeof x.bysetpos == "number") x.bysetpos = [x.bysetpos]
            for (var N = 0; N < x.bysetpos.length; N++) {
                var H = x.bysetpos[N];
                if (H == 0 || !(-366 <= H && H <= 366)) {
                    throw new Error("bysetpos debe estar entre 1 y 366, o entre -366 y -1")
                }
            }
        }
        if (!(C(x.byweekno) || C(x.byyearday) || C(x.bymonthday) || x.byweekday !== null || x.byeaster !== null)) {
            switch (x.freq) {
                case this.YEARLY:
                    if (!x.bymonth) x.bymonth = x.dtstart.getMonth() + 1
                    x.bymonthday = x.dtstart.getDate();
                    break;
                case this.MONTHLY:
                    x.bymonthday = x.dtstart.getDate();
                    break;
                case this.WEEKLY:
                    x.byweekday = a.jqx.scheduler.utilities.getWeekday(x.dtstart);
                    break;
            }
        }
        if (x.bymonth !== null && !(x.bymonth instanceof Array)) x.bymonth = [x.bymonth];
        if (x.byyearday !== null && !(x.byyearday instanceof Array)) x.byyearday = [x.byyearday];
        if (x.bymonthday === null) {
            x.bymonthday = [];
            x.bynmonthday = [];
        } else {
            if (x.bymonthday instanceof Array) {
                var Q = [],
                    I = [];
                for (N = 0; N < x.bymonthday.length; N++) {
                    var H = x.bymonthday[N];
                    if (H > 0) {
                        Q.push(H)
                    } else {
                        if (H < 0) I.push(H);
                    }
                }
                x.bymonthday = Q;
                x.bynmonthday = I;
            } else {
                if (x.bymonthday < 0) {
                    x.bynmonthday = [x.bymonthday];
                    x.bymonthday = [];
                } else {
                    x.bynmonthday = [];
                    x.bymonthday = [x.bymonthday];
                }
            }
        }
        if (x.byweekno !== null && !(x.byweekno instanceof Array)) {
            x.byweekno = [x.byweekno];
        }
        if (x.byweekday === null) {
            x.bynweekday = null;
        } else {
            if (typeof x.byweekday == "number") {
                x.byweekday = [x.byweekday];
                x.bynweekday = null;
            } else {
                if (x.byweekday instanceof f) {
                    if (!x.byweekday.n || x.freq > this.MONTHLY) {
                        x.byweekday = [x.byweekday.weekday];
                        x.bynweekday = null;
                    } else {
                        x.bynweekday = [
                            [x.byweekday.weekday, x.byweekday.n]
                        ];
                        x.byweekday = null;
                    }
                } else {
                    var r = [],
                        F = [];
                    for (N = 0; N < x.byweekday.length; N++) {
                        var o = x.byweekday[N];
                        if (typeof o == "number") {
                            r.push(o);
                        } else {
                            if (!o.n || x.freq > this.MONTHLY) r.push(o.weekday);
                            else F.push([o.weekday, o.n]);
                        }
                    }
                    x.byweekday = C(r) ? r : null;
                    x.bynweekday = C(F) ? F : null;
                }
            }
        }
        if (x.byhour === null) {
            x.byhour = (x.freq < this.HOURLY) ? [x.dtstart.getHours()] : null;
        } else {
            if (typeof x.byhour == "number") x.byhour = [x.byhour];
        }
        if (x.byminute === null) {
            x.byminute = (x.freq < this.MINUTELY) ? [x.dtstart.getMinutes()] : null;
        } else {
            if (typeof x.byminute == "number") x.byminute = [x.byminute];
        }
        if (x.bysecond === null) {
            x.bysecond = (x.freq < this.SECONDLY) ? [x.dtstart.getSeconds()] : null;
        } else {
            if (typeof x.bysecond == "number") x.bysecond = [x.bysecond];
        }
        if (x.freq >= this.HOURLY) {
            this.timeset = null;
        } else {
            this.timeset = [];
            if (x.byhour) {
                for (N = 0; N < x.byhour.length; N++) {
                    var t = x.byhour[N];
                    for (var M = 0; M < x.byminute.length; M++) {
                        var l = x.byminute[M];
                        for (var L = 0; L < x.bysecond.length; L++) {
                            var y = x.bysecond[L];
                            this.timeset.push(new a.jqx.scheduler.utilities.Time(t, l, y));
                        }
                    }
                }
            }
            a.jqx.scheduler.utilities.sort(this.timeset);
        }
        return this;
    }
})(jqxBaseFramework);

(function(a) {
    a.extend(a.jqx._jqxScheduler.prototype, {
        _getexportcolor: function(l) {
            var f = l;
            if (l == "transparent") f = "#FFFFFF";
            if (!f || !f.toString()) f = "#FFFFFF";
            if (f.toString().indexOf("rgb") != -1) {
                var i = f.split(",");
                if (f.toString().indexOf("rgba") != -1) {
                    var d = parseInt(i[0].substring(5));
                    var h = parseInt(i[1]);
                    var j = parseInt(i[2]);
                    var k = parseInt(i[3].substring(1, 4));
                    var m = {
                        r: d,
                        g: h,
                        b: j
                    };
                    var e = this._rgbToHex(m);
                    if (d == 0 && h == 0 && j == 0 && k == 0)
                        return "#ffffff";
                    return "#" + e;
                }
                var d = parseInt(i[0].substring(4));
                var h = parseInt(i[1]);
                var j = parseInt(i[2].substring(1, 4));
                var m = {
                    r: d,
                    g: h,
                    b: j
                };
                var e = this._rgbToHex(m);
                return "#" + e;
            } else {
                if (f.toString().indexOf("#") != -1) {
                    if (f.toString().length == 4) {
                        var c = f.toString().substring(1, 4);
                        f += c;
                    }
                }
            }
            return f;
        },
        _rgbToHex: function(b) {
            return this._intToHex(b.r) + this._intToHex(b.g) + this._intToHex(b.b);
        },
        _intToHex: function(c) {
            var b = (parseInt(c).toString(16));
            if (b.length == 1) b = ("0" + b);
            return b.toUpperCase();
        },
        exportData: function(w) {
            var q = this;
            if (!a.jqx.dataAdapter.ArrayExporter)
                throw "jqxScheduler: Missing reference to jqxdata.export.js!";
            var y = this.exportSettings.serverURL;
            var g = this.exportSettings.characterSet;
            var C = this.exportSettings.fileName;
            var H = this.exportSettings.ICSXWRCALNAME;
            var s = this.exportSettings.ICSXWRCALDESC;
            if (C === undefined) C = "jqxScheduler";
            var q = this;
            if (w == "ical" || w == "ics") {
                if (q._resources.length > 1 && C && q.resourcesInMultipleICSFiles) {
                    var t = this.getAppointments();
                    for (var E = 0; E < q._resources.length; E++) {
                        var c = q._resources[E];
                        var v = new Array();
                        for (var D = 0; D < t.length; D++) {
                            var k = t[D];
                            if (k.resourceId == c) v.push(k);
                        }
                        var I = "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:jqxScheduler\nMETHOD:PUBLISH\n";
                        if (H) I += "X-WR-CALNAME:" + H + "\n";
                        if (s) I += "X-WR-CALDESC:" + s + "\n";
                        for (var B = 0; B < v.length; B++) {
                            I += v[B].jqxAppointment.toString();
                            if (B < v.length - 1) I += "\n";
                        }
                        I += "\nEND:VCALENDAR";
                        var h = I.length;
                        var p = new Uint8Array(new ArrayBuffer(h));
                        for (var B = 0; B < h; B++) p[B] = I.charCodeAt(B);
                        var b = new Blob([p], {
                            type: "application/calendar"
                        });
                        var d;
                        if (d) {
                            d(b, C + "_" + c + ".ics");
                        } else {
                            if (window.jqxSaveAs) window.jqxSaveAs(b, C + "_" + c + ".ics");
                        }
                    }
                } else {
                    var t = this.getAppointments();
                    var I = "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:jqxScheduler\nMETHOD:PUBLISH\n";
                    for (var E = 0; E < t.length; E++) {
                        I += t[E].jqxAppointment.toString();
                        if (E < t.length - 1) I += "\n";
                    }
                    I += "\nEND:VCALENDAR";
                    var h = I.length;
                    var p = new Uint8Array(new ArrayBuffer(h));
                    for (E = 0; E < h; E++) p[E] = I.charCodeAt(E);
                    var b = new Blob([p], {
                        type: "application/calendar"
                    });
                    if (!C) return I;
                    if (d) {
                        d(b, C + ".ics");
                    } else {
                        if (window.jqxSaveAs) window.jqxSaveAs(b, C + ".ics");
                    }
                }
                return;
            }
            var t = this.getDataAppointments();
            var A = new Array();
            var F = {};
            var r = {};
            var n = this.host.find(".jqx-grid-cell:first");
            n.removeClass(this.toThemeProperty("jqx-grid-cell-selected"));
            n.removeClass(this.toThemeProperty("jqx-fill-state-pressed"));
            n.removeClass(this.toThemeProperty("jqx-grid-cell-hover"));
            n.removeClass(this.toThemeProperty("jqx-fill-state-hover"));
            var l = "cell";
            var f = 1;
            var G = "column";
            var e = 1;
            var z = a(this.columns.records[0].element);
            var o = 0;
            a.each(this.appointmentDataFields, function(j, m) {
                F[m] = {};
                F[m].text = m;
                F[m].width = 100;
                F[m].formatString = "";
                F[m].localization = q.schedulerLocalization;
                if (j == "from" || j == "to") {
                    F[m].type = "date";
                    F[m].formatString = q.exportSettings.dateTimeFormatString
                } else {
                    F[m].type = "string"
                }
                F[m].cellsAlign = "left";
                A.push(F[m]);
                l = "cell" + f;
                G = "column" + e;
                if (w == "html" || w == "xls" || w == "pdf") {
                    var i = function(J, R, Q, K, P, M, L, N, O) {
                        r[J] = {};
                        if (R == undefined) {
                            return
                        }
                        r[J]["font-size"] = R.css("font-size");
                        r[J]["font-weight"] = R.css("font-weight");
                        r[J]["font-style"] = R.css("font-style");
                        r[J]["background-color"] = q._getexportcolor(R.css("background-color"));
                        r[J]["color"] = q._getexportcolor(R.css("color"));
                        r[J]["border-color"] = q._getexportcolor(R.css("border-top-color"));
                        if (Q) {
                            r[J]["text-align"] = "left"
                        } else {
                            r[J]["text-align"] = "left";
                            r[J]["formatString"] = "";
                            r[J]["dataType"] = "string";
                            if (L == "from" || L == "to") {
                                r[J]["dataType"] = "date";
                                r[J]["formatString"] = q.exportSettings.dateTimeFormatString
                            }
                        }
                        if (w == "html" || w == "pdf") {
                            r[J]["border-top-width"] = R.css("border-top-width");
                            r[J]["border-left-width"] = R.css("border-left-width");
                            r[J]["border-right-width"] = R.css("border-right-width");
                            r[J]["border-bottom-width"] = R.css("border-bottom-width");
                            r[J]["border-top-style"] = R.css("border-top-style");
                            r[J]["border-left-style"] = R.css("border-left-style");
                            r[J]["border-right-style"] = R.css("border-right-style");
                            r[J]["border-bottom-style"] = R.css("border-bottom-style");
                            if (Q) {
                                if (o == 0) {
                                    r[J]["border-left-width"] = R.css("border-right-width")
                                }
                                r[J]["border-top-width"] = R.css("border-right-width");
                                r[J]["border-bottom-width"] = R.css("border-bottom-width")
                            } else {
                                if (o == 0) {
                                    r[J]["border-left-width"] = "1px"
                                }
                                r[J]["border-right-width"] = "1px"
                            }
                        }
                        if (Q) {
                            F[m].style = J
                        }
                        F[m].cellStyle = J
                    };
                    i(G, z, true, false, this, q, j);
                    e++;
                    i(l, n, false, false, this, q, j);
                    f++
                }
                o++
            });
            var x = a.jqx.dataAdapter.ArrayExporter(t, F, r, y);
            if (C == null) {
                this._renderrows();
                var u = x.exportTo(w);
                setTimeout(function() {
                    q.exporting = false
                }, 50);
                return u
            } else {
                x.exportToFile(w, C, y, g)
            }
            this._renderrows();
            setTimeout(function() {
                q.exporting = false
            }, 50)
        },
        shadeColor: function(b, g) {
            var h = parseInt(b.slice(1), 16),
                c = g < 0 ? 0 : 255,
                i = g < 0 ? g * -1 : g,
                e = h >> 16,
                d = h >> 8 & 255,
                j = h & 255;
            return "#" + (16777216 + (Math.round((c - e) * i) + e) * 65536 + (Math.round((c - d) * i) + d) * 256 + (Math.round((c - j) * i) + j)).toString(16).slice(1)
        },
        hexToRgba: function(c, e) {
            var b = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);
            var d = function() {
                var f = a.jqx.browser.msie && a.jqx.browser.version < 10;
                if (this.alpha == undefined || f) {
                    return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
                }
                if (this.alpha > 1) {
                    this.alpha = 1;
                } else {
                    if (this.alpha < 0) this.alpha = 0;
                }
                return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.alpha + ")";
            };
            if (e == undefined) {
                return b ? {
                    r: parseInt(b[1], 16),
                    g: parseInt(b[2], 16),
                    b: parseInt(b[3], 16),
                    toString: d
                } : null;
            }
            if (e > 1) {
                e = 1;
            } else {
                if (e < 0) e = 0;
            }
            return b ? {
                r: parseInt(b[1], 16),
                g: parseInt(b[2], 16),
                b: parseInt(b[3], 16),
                alpha: e,
                toString: d
            } : null;
        },
        getAppointmentColors: function(f) {
            var e = "";
            var d = "";
            var c = "";
            e = this.hexToRgba(f, this.appointmentOpacity).toString();
            d = f;
            var b = function(h) {
                var g = 105;
                var i = (h.r * 0.299) + (h.g * 0.587) + (h.b * 0.114);
                var j = (255 - i < g) ? "Black" : "White";
                return j;
            };
            c = b(this.hexToRgba(f, 0.7));
            return {
                background: e,
                color: c,
                border: d
            };
        },
        getColors: function(g) {
            if (g == -1) g = 0;
            var c = "";
            var e = "";
            var f = "";
            var i = this.resources ? this.resources.colorScheme : null;
            if (!i) i = "scheme01";
            var b = new Array();
            for (var d = 0; d < this.colorSchemes.length; d++) {
                if (this.colorSchemes[d].name == i) {
                    b = this.colorSchemes[d].colors;
                    break;
                }
            }
            while (g > b.length - 1) {
                var j = parseInt(i.substring(6));
                if (j >= 27) j = 0;
                b = b.concat(this.colorSchemes[j].colors);
                j++;
            }
            c = b[g];
            c = this.hexToRgba(b[g], this.appointmentOpacity).toString();
            e = b[g];
            var h = function(l) {
                var k = 105;
                var m = (l.r * 0.299) + (l.g * 0.587) + (l.b * 0.114);
                var n = (255 - m < k) ? "Black" : "White";
                return n;
            };
            f = h(this.hexToRgba(b[g], 0.7));
            return {
                background: c,
                color: f,
                border: e
            };
        },
        getAppointments: function() {
            var d = this.uiappointments;
            var b = new Array();
            for (var c = 0; c < d.length; c++) {
                var e = d[c].boundAppointment;
                e.toString = e.jqxAppointment.toString;
                b.push(e);
            }
            return b;
        },
        getDataAppointments: function() {
            var d = this.uiappointments;
            var b = new Array();
            for (var c = 0; c < d.length; c++) {
                var f = d[c].boundAppointment;
                var e = {};
                a.each(this.appointmentDataFields, function(h, i) {
                    e[i] = f[h];
                    if (h == "from" || h == "to") {
                        if ("date" != a.type(f[h])) e[i] = f[h].toDate();
                    }
                    if (h == "recurrencePattern") {
                        if (f[h]) e[i] = f[h].toString();
                    }
                    if (h == "recurrenceException") {
                        if (f[h]) {
                            e[i] = "";
                            for (var g = 0; g < f[h].length; g++) {
                                e[i] += f[h][g].toString();
                                if (g < f[h].length - 1) e[i] += ",";
                            }
                        }
                    }
                    try {
                        if (JSON) {
                            e.toString = function() {
                                return JSON.stringify(e);
                            }
                        }
                    } catch (k) {}
                });
                b.push(e);
            }
            return b;
        },
        _refreshColumns: function() {
            this._initializeColumns();
            this.columnsheader = this.columnsheader || a('<div style="overflow: hidden;"></div>');
            this.columnsheader.children().remove();
            var b = this.columnsHeight;
            b = this._preparecolumnGroups();
            this.columnsheader.height(b);
            this._rendercolumnheaders();
        },
        _refreshColumnTitles: function() {
            var p = this._views[this._view].type;
            var o = this._views[this._view];
            var l = this;
            var d = new Array();
            if (l.columns.records[0].timeColumn) {
                d.push({});
            }
            if (o.timeRuler && o.timeRuler.timeZones) {
                for (var v = 0; v < o.timeRuler.timeZones.length; v++)
                    d.push({});
            }
            var q = function(A, G, I) {
                var B = "halfHour";
                if (o.timeRuler && o.timeRuler.scale)
                    B = o.timeRuler.scale;
                
                var K = 24;
                var z = 0;
                var J = 23;
                if (o.timeRuler) {
                    if (o.timeRuler.scaleStartHour != undefined)
                        var z = parseInt(o.timeRuler.scaleStartHour);
                    if (o.timeRuler.scaleEndHour != undefined)
                        var J = parseInt(o.timeRuler.scaleEndHour);
                    if (z < 0) z = 0;
                    if (J < 0) J = 23;
                    if (z > 23) z = 0;
                    if (J > 23) J = 23;
                    K = J - z + 1;
                }
                var D = 60;
                var H = 2;
                if (B) {
                    switch (B) {
                        case "sixtyMinutes":
                        case "hour":
                            H = 1;
                            break;
                        case "thirdyMinutes":
                        case "halfHour":
                            H = 2;
                            break;
                        case "fifteenMinutes":
                        case "quarterHour":
                            H = 4;
                            break;
                        case "tenMinutes":
                            H = 6;
                            break;
                        case "fiveMinutes":
                            H = 12;
                            break;
                    }
                }
                var M = new Array();
                var L = "auto";
                if (o.timeRuler && o.timeRuler.formatString)
                    L = o.timeRuler.formatString;
                var y = z;
                var E = K;
                var j = A.addHours(y);
                if (l.rtl) var j = A.addHours(J);
                for (var F = 0; F < E; F++) {
                    var x = j.toDate();
                    if (L === "auto") {
                        if ((x.getHours() == 0 && x.getMinutes() == 0) || (x.getHours() == 12 && x.getMinutes() == 0)) {
                            var C = "hh tt";
                        } else {
                            var C = "hh:mm";
                        }
                    } else {
                        if (a.isFunction(L)) var C = L(x);
                        else C = L;
                    }
                    if (a.jqx.dataFormat.isDate(x)) x = a.jqx.dataFormat.formatdate(x, C, l.schedulerLocalization);
                    if (!l.rtl) j = j.addMinutes(D);
                    else j = j.addMinutes(-D);
                    d.push({});
                    l.columns.records[d.length - 1].text = x;
                }
            };
            var k = this.tableColumns;
            for (var t = 0; t < this.tableColumns; t++) {
                switch (p) {
                    case "dayView":
                        var g = this.getViewStart();
                        if (false === o.showWeekends) {
                            if (g.dayOfWeek() === 0 || g.dayOfWeek() === 6)
                                g = g.addDays(1);
                            if (g.dayOfWeek() === 0 || g.dayOfWeek() === 6)
                                g = g.addDays(1);
                        }
                        d.push({});
                        this.columns.records[d.length - 1].text = this._getDayName(g.dayOfWeek());
                        break;
                    case "weekView":
                    case "monthView":
                        for (var v = 0; v < 7; v++) {
                            var u = this.schedulerLocalization.firstDay + v;
                            if (false === o.showWeekends) {
                                if (v === 0 || v === 6) continue;
                            }
                            d.push({});
                            if (l.rtl) u = 6 - u;
                            this.columns.records[d.length - 1].text = this._getDayName(u);
                        }
                        break;
                    case "timelineDayView":
                        var f = l._resources[t] ? l._resources[t] : "Resource" + t;
                        q(l.getViewStart(), f);
                        break;
                    case "timelineWeekView":
                        for (var v = 0; v < 7; v++) {
                            var u = this.schedulerLocalization.firstDay + v;
                            if (false === o.showWeekends) {
                                if (v === 0 || v === 6) continue;
                            }
                            if (l.rtl) u = 6 - u;
                            q(l.getViewStart().addDays(v), this._getDayName(u));
                        }
                        break;
                    case "timelineMonthView":
                        var n = l.getViewStart();
                        var w = "auto";
                        if (o.timeRuler && o.timeRuler.formatString)
                            w = o.timeRuler.formatString;
                        
                        for (var v = 0; v < 41; v++) {
                            var u = n.dayOfWeek();
                            if (false === o.showWeekends) {
                                if (u === 0 || u === 6) continue;
                            }
                            if (l.rtl) u = 6 - u;
                            var r = n.toDate();
                            if (w === "auto") {
                                var c = "dd";
                                r = n.toDate();
                                if (r.getDate() === 1) c = "MMM dd";
                            } else {
                                if (a.isFunction(w)) var c = w(r);
                                else c = w;
                            }
                            if (a.jqx.dataFormat.isDate(r)) r = a.jqx.dataFormat.formatdate(r, c, l.schedulerLocalization);
                            n = n.addDays(1);
                            d.push({});
                            l.columns.records[d.length - 1].text = r;
                        }
                        break;
                }
            }
            var h = l.columnsHeight;
            var b = function(j, x) {
                var i = l.columnGroupslevel * l.columnsHeight;
                i = i - (x.level * l.columnsHeight);
                return i;
            };
            var s = 0;
            for (var v = 0; v < this.columns.records.length; v++) {
                var e = this.columns.records[v];
                if (e.timeColumn) continue;
                
                if (l.columnGroups) {
                    if (l.columnGroups.length) h = b(e.datafield, e);
                }
                var m = e.renderer != null ? e.renderer(e.text, e.align, h) : l._rendercolumnheader(e.text, e.align, h, e);
                if (m == null) m = l._rendercolumnheader(e.text, e.align, h, l);
                if (e.renderer != null) m = a(m);
                a(e.element).html(m);
            }
        },
        _editDialogLabel: function() {
            if (this.theme) return "jqx-scheduler-edit-dialog-label jqx-scheduler-edit-dialog-label-" + this.theme;
            return "jqx-scheduler-edit-dialog-label";
        },
        _editDialogField: function() {
            if (this.theme) return "jqx-scheduler-edit-dialog-field jqx-scheduler-edit-dialog-field-" + this.theme;
            return "jqx-scheduler-edit-dialog-field";
        },
        initRepeatPanels: function(p, i, c) {
            var h = this;
            var b = a("<div></div>");
            i.append(b);
            var j = a("<div class='" + h._editDialogLabel() + "'>" + h.schedulerLocalization.editDialogRepeatString + "</div>").appendTo(b);
            var l = a("<div class='" + h._editDialogField() + "'></div>").appendTo(b);
            var k = a("<div></div>").appendTo(l);
            var r = a("<div></div>");
            i.append(r);
            var m = a("<div></div>");
            r.append(m);
            var o = function(H, A) {
                var u = a("<div></div>").appendTo(H);
                var E = a("<div class='" + h._editDialogLabel() + "'>" + h.schedulerLocalization.editDialogRepeatEndString + "</div>").appendTo(u);
                var D = a("<div class='" + h._editDialogField() + "'></div>").appendTo(u);
                var G = a("<div style='top: 3px; position:relative; float:left;'><span style='margin-left:2px;'>" + h.schedulerLocalization.editDialogRepeatNeverString + "</span></div>").appendTo(D);
                G.jqxRadioButton({
                    rtl: h.rtl,
                    groupName: "end" + A,
                    theme: h.theme,
                    width: 200,
                    checked: true
                });
                h.editDialogFields[A].repeatEndNever = G;
                h.editDialogFields[A].repeatEndNeverLabel = E;
                var z = a("<div class='" + h._editDialogLabel() + "'></div>").appendTo(u);
                var y = a("<div class='" + h._editDialogField() + "'></div>").appendTo(u);
                var F = a("<div style='top: 3px;  position:relative;  float:left;'><span style='margin-left:2px;'>" + h.schedulerLocalization.editDialogRepeatAfterString + "</span></div>").appendTo(y);
                F.jqxRadioButton({
                    rtl: h.rtl,
                    groupName: "end" + A,
                    theme: h.theme,
                    width: 60,
                    checked: false
                });
                var B = a("<div style='margin-left: 3px; float:left;'></div>").appendTo(y);
                B.jqxNumberInput({
                    rtl: h.rtl,
                    decimal: 10,
                    min: 1,
                    inputMode: "simple",
                    width: 50,
                    spinButtons: true,
                    decimalDigits: 0,
                    theme: h.theme
                });
                var v = a("<div style='float: left; top: 3px;  margin-left: 5px; line-height:25px;'>" + h.schedulerLocalization.editDialogRepeatOccurrencesString + "</div>").appendTo(y);
                h.editDialogFields[A].repeatEndAfter = F;
                h.editDialogFields[A].repeatEndAfterValue = B;
                h.editDialogFields[A].repeatEndAfterLabel = z;
                var x = a("<div class='" + h._editDialogLabel() + "'></div>").appendTo(u);
                var w = a("<div class='" + h._editDialogField() + "'></div>").appendTo(u);
                var t = a("<div style='top: 3px; position:relative; float:left;'><span style='margin-left:2px;'>" + h.schedulerLocalization.editDialogRepeatOnString + "</span></div>").appendTo(w);
                t.jqxRadioButton({
                    rtl: h.rtl,
                    groupName: "end" + A,
                    theme: h.theme,
                    width: 60,
                    checked: false
                });
                var C = a("<div style='margin-left: 3px; float:left;'></div>").appendTo(w);
                C.jqxDateTimeInput({
                    dropDownWidth: 220,
                    dropDownHeight: 220,
                    rtl: h.rtl,
                    localization: h._getDateTimeInputLocalization(),
                    firstDayOfWeek: h.schedulerLocalization.firstDay,
                    todayString: h.schedulerLocalization.todayString,
                    clearString: h.schedulerLocalization.clearString,
                    value: c,
                    formatString: h.editDialogDateFormatString,
                    width: 150,
                    theme: h.theme
                });
                var s = C.jqxDateTimeInput("getInstance");
                h.editDialogFields[A].repeatEndOn = t;
                h.editDialogFields[A].repeatEndOnValue = C;
                h.editDialogFields[A].repeatEndOnLabel = x;
                return u;
            };
            m.detach();
            h.editDialogFields.repeatEndPanel = {};
            h.editDialogFields.repeatEndPanelContainer = m;
            o(m, "repeatEndPanel");
            var q = function() {
                var z = a("<div style='visibility: hidden;'></div>").appendTo(a(document.body));
                var ad = a("<div class='" + h._editDialogLabel() + "'>" + h.schedulerLocalization.editDialogRepeatEveryString + "</div>").appendTo(z);
                var ay = a("<div class='" + h._editDialogField() + "'></div>").appendTo(z);
                var am = a("<div style='float:left;'></div>").appendTo(ay);
                am.jqxNumberInput({
                    rtl: h.rtl,
                    decimal: 1,
                    min: 1,
                    inputMode: "simple",
                    width: 50,
                    spinButtons: true,
                    decimalDigits: 0,
                    theme: h.theme
                });
                var V = a("<div style='float: left; margin-left: 5px; line-height:25px;'>" + h.schedulerLocalization.editDialogRepeatEveryDayString + "</div>").appendTo(ay);
                h.editDialogFields.daily = {};
                h.editDialogFields.daily.repeatDayInterval = am;
                h.editDialogFields.daily.repeatDayLabel = ad;
                h.editDialogFields.daily.panel = z;
                z.detach();
                h.editDialogFields.weekly = {};
                var E = a("<div style='visibility: hidden;'></div>").appendTo(a(document.body));
                var ag = a("<div class='" + h._editDialogLabel() + "'>" + h.schedulerLocalization.editDialogRepeatEveryString + "</div>").appendTo(E);
                var t = a("<div class='" + h._editDialogField() + "'></div>").appendTo(E);
                var at = a("<div style='float:left;'></div>").appendTo(t);
                at.jqxNumberInput({
                    rtl: h.rtl,
                    decimal: 1,
                    min: 1,
                    inputMode: "simple",
                    width: 50,
                    spinButtons: true,
                    decimalDigits: 0,
                    theme: h.theme
                });
                var W = a("<div style='float: left; margin-left: 5px; line-height:25px;'>" + h.schedulerLocalization.editDialogRepeatEveryWeekString + "</div>").appendTo(t);
                h.editDialogFields.weekly.repeatWeekInterval = at;
                h.editDialogFields.weekly.repeatWeekIntervalLabel = ag;
                var F = a("<div class='" + h._editDialogLabel() + "'>" + h.schedulerLocalization.editDialogRepeatOnString + "</div>").appendTo(E);
                var Z = a("<div class='" + h._editDialogField() + "'></div>").appendTo(E);
                var T = a("<div style='float:left;'></div>").appendTo(Z);
                h.editDialogFields.weekly.repeatDaysLabel = F;
                h.editDialogFields.weekly.repeatDays = new Array();
                for (var aw = 0; aw < 7; aw++) {
                    var P = h._getDayName(aw, "firstTwoLetters");
                    var B = a("<div style='position:relative; top: 6px; float:left;'><span style='margin-left:2px;'>" + P + "</span></div>");
                    T.append(B);
                    var Y = aw == 1 ? true : false;
                    B.jqxCheckBox({
                        rtl: h.rtl,
                        checked: Y,
                        width: 50,
                        theme: h.theme
                    });
                    h.editDialogFields.weekly.repeatDays.push(B);
                }
                h.editDialogFields.weekly.panel = E;
                E.detach();
                h.editDialogFields.monthly = {};
                var U = a("<div style='visibility: hidden;'></div>").appendTo(a(document.body));
                var av = a("<div class='" + h._editDialogLabel() + "'>" + h.schedulerLocalization.editDialogRepeatEveryString + "</div>").appendTo(U);
                var M = a("<div class='" + h._editDialogField() + "'></div>").appendTo(U);
                var A = a("<div style='float:left;'></div>").appendTo(M);
                A.jqxNumberInput({
                    rtl: h.rtl,
                    decimal: 1,
                    min: 1,
                    inputMode: "simple",
                    width: 50,
                    spinButtons: true,
                    decimalDigits: 0,
                    theme: h.theme
                });
                var ai = a("<div style='float: left; margin-left: 5px; line-height:25px;'>" + h.schedulerLocalization.editDialogRepeatEveryMonthString + "</div>").appendTo(M);
                h.editDialogFields.monthly.repeatMonth = A;
                h.editDialogFields.monthly.repeatMonthLabel = av;
                var an = a("<div class='" + h._editDialogLabel() + "'>" + h.schedulerLocalization.editDialogRepeatOnString + "</div>").appendTo(U);
                var H = a("<div class='" + h._editDialogField() + "'></div>").appendTo(U);
                var x = a("<div style='float:left;'></div>").appendTo(H);
                var al = a("<div style='position:relative; top: 6px; float:left;'><span style='margin-left:2px;'>" + h.schedulerLocalization.editDialogRepeatEveryMonthDayString + "</span></div>").appendTo(x);
                al.jqxRadioButton({
                    rtl: h.rtl,
                    groupName: "month",
                    width: 60,
                    checked: true,
                    theme: h.theme
                });
                var ao = a("<div style='float:left;'></div>").appendTo(x);
                ao.jqxNumberInput({
                    rtl: h.rtl,
                    decimal: 1,
                    min: 1,
                    inputMode: "simple",
                    width: 50,
                    spinButtons: true,
                    decimalDigits: 0,
                    theme: h.theme
                });
                h.editDialogFields.monthly.repeatMonthDay = ao;
                h.editDialogFields.monthly.repeatMonthDayBool = al;
                h.editDialogFields.monthly.repeatMonthDayLabel = an;
                var O = a("<div class='" + h._editDialogLabel() + "'></div>").appendTo(U);
                var aj = a("<div class='" + h._editDialogField() + "'></div>").appendTo(U);
                var aa = a("<div style='float:left;'></div>").appendTo(aj);
                var G = a("<div style='position:relative; top: 6px; float:left;'><span style='margin-left:2px;'></span></div>").appendTo(aa);
                G.jqxRadioButton({
                    groupName: "month",
                    width: 25,
                    checked: false,
                    theme: h.theme
                });
                var L = a("<div style='float:left;'></div>").appendTo(aa);
                var Q = new Array();
                Q.push(h.schedulerLocalization.editDialogRepeatFirstString);
                Q.push(h.schedulerLocalization.editDialogRepeatSecondString);
                Q.push(h.schedulerLocalization.editDialogRepeatThirdString);
                Q.push(h.schedulerLocalization.editDialogRepeatFourthString);
                Q.push(h.schedulerLocalization.editDialogRepeatLastString);
                L.jqxDropDownList({
                    height: 27,
                    dropDownWidth: 150,
                    selectedIndex: 0,
                    source: Q,
                    autoDropDownHeight: true,
                    width: "auto",
                    theme: h.theme
                });
                var S = a("<div style='margin-left: 5px; float:left;'></div>").appendTo(aa);
                var ac = new Array();
                for (var aw = 0; aw < 7; aw++) {
                    var P = h._getDayName(aw);
                    ac.push(P)
                }
                S.jqxDropDownList({
                    height: 27,
                    rtl: h.rtl,
                    dropDownWidth: 150,
                    autoDropDownHeight: true,
                    selectedIndex: 1,
                    source: ac,
                    width: "auto",
                    theme: h.theme
                });
                h.editDialogFields.monthly.repeatDayOfWeekBool = G;
                h.editDialogFields.monthly.repeatDayOfWeek = S;
                h.editDialogFields.monthly.repeatDayOfWeekLabel = O;
                h.editDialogFields.monthly.repeatDayOfWeekType = L;
                h.editDialogFields.monthly.panel = U;
                U.detach();
                h.editDialogFields.yearly = {};
                var aq = a("<div style='visibility: hidden;'></div>").appendTo(a(document.body));
                var R = a("<div class='" + h._editDialogLabel() + "'>" + h.schedulerLocalization.editDialogRepeatEveryString + "</div>").appendTo(aq);
                var ak = a("<div class='" + h._editDialogField() + "'></div>").appendTo(aq);
                var ab = a("<div style='float:left;'></div>").appendTo(ak);
                ab.jqxNumberInput({
                    decimal: 1,
                    min: 1,
                    inputMode: "simple",
                    width: 50,
                    spinButtons: true,
                    decimalDigits: 0,
                    theme: h.theme
                });
                var D = a("<div style='float: left; margin-left: 5px; line-height:25px;'>" + h.schedulerLocalization.editDialogRepeatEveryYearString + "</div>").appendTo(ak);
                h.editDialogFields.yearly.repeatYear = ab;
                h.editDialogFields.yearly.repeatYearLabel = R;
                var N = a("<div class='" + h._editDialogLabel() + "'>" + h.schedulerLocalization.editDialogRepeatOnString + "</div>").appendTo(aq);
                var ah = a("<div class='" + h._editDialogField() + "'></div>").appendTo(aq);
                var X = a("<div style='float:left;'></div>").appendTo(ah);
                var af = a("<div style='position:relative; top: 6px; float:left;'></span></div>").appendTo(X);
                af.jqxRadioButton({
                    rtl: h.rtl,
                    groupName: "year",
                    width: 25,
                    checked: true,
                    theme: h.theme
                });
                h.editDialogFields.yearly.repeatYearBool = af;
                h.editDialogFields.yearly.repeatYearBoolLabel = N;
                var v = a("<div style='float:left;'></div>").appendTo(X);
                var ap = new Array();
                for (var aw = 0; aw < 12; aw++) {
                    var ax = h.schedulerLocalization.months.names[aw];
                    ap.push(ax)
                }
                v.jqxDropDownList({
                    height: 27,
                    selectedIndex: 0,
                    dropDownWidth: 150,
                    width: "auto",
                    source: ap,
                    theme: h.theme
                });
                h.editDialogFields.yearly.repeatYearMonth = v;
                var y = a("<div style='margin-left: 5px; float:left;'></div>").appendTo(X);
                y.jqxNumberInput({
                    height: 25,
                    decimal: 1,
                    min: 1,
                    inputMode: "simple",
                    width: 50,
                    spinButtons: true,
                    decimalDigits: 0,
                    theme: h.theme
                });
                h.editDialogFields.yearly.repeatYearDay = y;
                var ae = a("<div class='" + h._editDialogLabel() + "'></div>").appendTo(aq);
                var s = a("<div class='" + h._editDialogField() + "'></div>").appendTo(aq);
                var ar = a("<div style='float:left;'></div>").appendTo(s);
                var C = a("<div style='position:relative; top: 6px; float:left;'><span style='margin-left:2px;'></span></div>").appendTo(ar);
                C.jqxRadioButton({
                    rtl: h.rtl,
                    groupName: "year",
                    width: 25,
                    checked: false,
                    theme: h.theme
                });
                var au = a("<div style='float:left;'></div>").appendTo(ar);
                h.editDialogFields.yearly.repeatDayOfWeekBool = C;
                h.editDialogFields.yearly.repeatDayOfWeekType = au;
                h.editDialogFields.yearly.repeatDayOfWeekLabel = ae;
                var K = new Array();
                K.push(h.schedulerLocalization.editDialogRepeatFirstString);
                K.push(h.schedulerLocalization.editDialogRepeatSecondString);
                K.push(h.schedulerLocalization.editDialogRepeatThirdString);
                K.push(h.schedulerLocalization.editDialogRepeatFourthString);
                K.push(h.schedulerLocalization.editDialogRepeatLastString);
                au.jqxDropDownList({
                    height: 27,
                    dropDownWidth: 150,
                    selectedIndex: 0,
                    source: K,
                    autoDropDownHeight: true,
                    width: "auto",
                    theme: h.theme
                });
                var I = a("<div style='margin-left: 5px; float:left;'></div>").appendTo(ar);
                h.editDialogFields.yearly.repeatDayOfWeek = I;
                var u = new Array();
                for (var aw = 0; aw < 7; aw++) {
                    var P = h._getDayName(aw);
                    u.push(P)
                }
                I.jqxDropDownList({
                    height: 27,
                    rtl: h.rtl,
                    dropDownWidth: 150,
                    selectedIndex: 1,
                    autoDropDownHeight: true,
                    source: u,
                    width: "auto",
                    theme: h.theme
                });
                var ap = new Array();
                var J = a("<div style='line-height:25px; height: 25px; margin-left: 5px; float:left;'>" + h.schedulerLocalization.editDialogRepeatOfString + "</div>").appendTo(ar);
                var w = a("<div style='margin-left: 5px; float:left;'></div>").appendTo(ar);
                for (var aw = 0; aw < 12; aw++) {
                    var ax = h.schedulerLocalization.months.names[aw];
                    ap.push(ax)
                }
                h.editDialogFields.yearly.repeatDayOfWeekMonth = w;
                w.jqxDropDownList({
                    height: 27,
                    rtl: h.rtl,
                    dropDownWidth: 150,
                    selectedIndex: 0,
                    source: ap,
                    width: "auto",
                    theme: h.theme
                });
                h.editDialogFields.yearly.panel = aq;
                aq.detach()
            };
            if (h.editAppointment && h.editAppointment.rootAppointment) {
                q()
            } else {
                q()
            }
            var g = a("<div></div>");
            i.append(g);
            var f = a("<div class='" + h._editDialogLabel() + "'>" + h.schedulerLocalization.editDialogExceptionsString + "</div>").appendTo(g);
            var e = a("<div class='" + h._editDialogField() + "'></div>").appendTo(g);
            var d = a("<div style='position:relative; top:2px;'>" + h.schedulerLocalization.editDialogResetExceptionsString + "</div>").appendTo(e);
            d.jqxCheckBox({
                width: "100%",
                theme: h.theme
            });
            g.hide();
            h.editDialogFields.resetExceptions = d;
            h.editDialogFields.resetExceptionsLabel = f;
            h.editDialogFields.resetExceptionsContainer = g;
            var n = new Array();
            n.push(h.schedulerLocalization.editDialogRepeatNeverString);
            n.push(h.schedulerLocalization.editDialogRepeatDailyString);
            n.push(h.schedulerLocalization.editDialogRepeatWeeklyString);
            n.push(h.schedulerLocalization.editDialogRepeatMonthlyString);
            n.push(h.schedulerLocalization.editDialogRepeatYearlyString);
            k.jqxDropDownList({
                rtl: h.rtl,
                height: 27,
                width: "100%",
                autoDropDownHeight: true,
                theme: h.theme,
                source: n,
                selectedIndex: 0
            });
            h.editDialogFields.repeat = k;
            h.editDialogFields.repeatLabel = j;
            h.editDialogFields.repeatContainer = b;
            h.editDialogFields.repeatPanel = r;
            this.addHandler(k, "change", function(u) {
                var t = u.args.item.index;
                var s = function() {
                    r.children().detach();
                    switch (t) {
                        case 0:
                            break;
                        case 1:
                            h.editDialogFields.daily.panel.css("visibility", "visible");
                            r.append(h.editDialogFields.daily.panel);
                            break;
                        case 2:
                            h.editDialogFields.weekly.panel.css("visibility", "visible");
                            r.append(h.editDialogFields.weekly.panel);
                            break;
                        case 3:
                            h.editDialogFields.monthly.panel.css("visibility", "visible");
                            r.append(h.editDialogFields.monthly.panel);
                            break;
                        case 4:
                            h.editDialogFields.yearly.panel.css("visibility", "visible");
                            r.append(h.editDialogFields.yearly.panel);
                            break;
                    }
                    r.append(m);
                    if (t == 0) h.editDialogFields.repeatEndPanelContainer.hide();
                    else h.editDialogFields.repeatEndPanelContainer.show();

                    if (!h.isTouchDevice()) {
                        p.jqxWindow({
                            height: 150
                        });
                        p.jqxWindow({
                            height: i[0].scrollHeight + 40
                        });
                    }
                }()
            })
        },
        _initMenu: function() {
            var c = this;
            if (this.host.jqxMenu) {
                if (this.menu) {
                    if (this._hasOpenedMenu) return;
                    this.removeHandler(this.menu, "keydown");
                    this.removeHandler(this.menu, "closed");
                    this.removeHandler(this.menu, "itemclick");
                    this.menu.jqxMenu("destroy");
                    this.menu.removeData();
                    this.menu.remove();
                }
                this.menuitemsarray = new Array();
                this.menu = a('<div id="menu.jqxscheduler' + this.element.id + '" style="white-space: nowrap; z-index: 9999999999999;"></div>');
                this.host.append(this.menu);
                this.addHandler(a(window), "orientationchange.jqxscheduler" + this.element.id, function() {
                    c.menu.jqxMenu("close");
                    c._hasOpenedMenu = false;
                });
                this.addHandler(a(window), "orientationchanged.jqxscheduler" + this.element.id, function() {
                    c.menu.jqxMenu("close");
                    c._hasOpenedMenu = false;
                });
                this.removeHandler(this.menu, "keydown");
                this.addHandler(this.menu, "keydown", function(e) {
                    if (e.keyCode == 27) {
                        c.menu.jqxMenu("close");
                        c._hasOpenedMenu = false;
                        c.focus();
                    }
                });
                this.addHandler(this.menu, "open", function(e) {
                    if (c.contextMenuOpen)
                        c.contextMenuOpen(c.menu, c.selectedJQXAppointment ? c.selectedJQXAppointment.boundAppointment : null, e);
                    c._raiseEvent("contextMenuOpen", {
                        menu: c.menu,
                        appointment: c.selectedJQXAppointment ? c.selectedJQXAppointment.boundAppointment : null
                    });
                    c._removeFeedbackAndStopResize();
                });
                this.addHandler(this.menu, "close", function(e) {
                    if (c.contextMenuClose)
                        c.contextMenuClose(c.menu, c.selectedJQXAppointment ? c.selectedJQXAppointment.boundAppointment : null, e);
                    c._hasOpenedMenu = false;
                    if (document.activeElement && document.activeElement.className.indexOf("jqx-menu") >= 0 && !c.menuOpening)
                        c.focus();
                    c._raiseEvent("contextMenuClose", {
                        menu: c.menu,
                        appointment: c.selectedJQXAppointment ? c.selectedJQXAppointment.boundAppointment : null
                    })
                });
                this.addHandler(this.host, "contextmenu", function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                });
                this.addHandler(this.menu, "itemclick", function(h) {
                    var g = c.menu.jqxMenu("getItem", h.args.id);
                    c._raiseEvent("contextMenuItemClick", {
                        item: g,
                        menu: c.menu,
                        appointment: c.selectedJQXAppointment ? c.selectedJQXAppointment.boundAppointment : null
                    });
                    if (c.contextMenuItemClick) {
                        var f = c.contextMenuItemClick(c.menu, c.selectedJQXAppointment ? c.selectedJQXAppointment.boundAppointment : null, h);
                        if (f == true) {
                            if (new Date() - c.renderedTime > 500) c._renderrows();
                            c.menu.jqxMenu("close");
                            c._hasOpenedMenu = false;
                            return;
                        }
                    }
                    if (g.id == "createAppointment") {
                        c._initDialog();
                        c._openDialog();
                        if (h.args.clickType == "keyboard") {
                            c.menu.jqxMenu("close");
                            c._hasOpenedMenu = false;
                        }
                    } else {
                        if (g.id == "editAppointment") {
                            var e = c.getJQXAppointmentByElement(c.selectedAppointment);
                            if (!e.readOnly) {
                                var f = c._initDialog(e);
                                if (f !== false) c._openDialog();
                            }
                            if (h.args.clickType == "keyboard") {
                                c.menu.jqxMenu("close");
                                c._hasOpenedMenu = false;
                            }
                        } else {
                            if (h.args.clickType == "keyboard") {
                                c.menu.jqxMenu("close");
                                c._hasOpenedMenu = false;
                            }
                            return true;
                        }
                    }
                });
                var d = new Array();
                d.push({
                    label: this.schedulerLocalization.contextMenuEditAppointmentString,
                    id: "editAppointment"
                });
                d.push({
                    label: this.schedulerLocalization.contextMenuCreateAppointmentString,
                    id: "createAppointment"
                });
                var b = {
                    rtl: this.rtl,
                    keyboardNavigation: true,
                    source: d,
                    popupZIndex: 999999,
                    autoOpenPopup: false,
                    mode: "popup",
                    theme: this.theme,
                    animationShowDuration: 0,
                    animationHideDuration: 0,
                    animationShowDelay: 0
                };
                if (c.contextMenuCreate) c.contextMenuCreate(c.menu, b);
                
                c._raiseEvent("contextMenuCreate", {
                    menu: c.menu,
                    settings: b
                });
                this.menu.jqxMenu(b);
            }
        },

        _initDialog: function(b, c) {

            var m = this;
            var k = null;
            if (b && b.isRecurrentAppointment() && !m.editRecurrenceDialog.jqxWindow("isOpen")) {
                var l = m.host.coord();
                var o = l.top + m.host.height() / 2 - m.editRecurrenceDialog.height() / 2;
                var g = l.left + m.host.width() / 2 - m.editRecurrenceDialog.width() / 2;
                m.editRecurrenceDialog.find("button:first").focus();
                setTimeout(function() {
                    m.editRecurrenceDialog.find("button:first").focus()
                }, 25);
                m.editRecurrenceDialog.jqxWindow("move", g, o);
                m.editRecurrenceDialog.jqxWindow("open");
                m.editSeries = function(i) {
                    if (i) {
                        m._initDialog(b.rootAppointment);
                        m._openDialog();
                    } else {
                        m._initDialog(b);
                        m._openDialog();
                    }
                };
                m.overlay.show();
                m.overlay.width(m.host.width());
                m.overlay.height(m.host.height());
                var l = m.host.coord();
                m.overlay.offset(l);
                if (!m._editDialog) m._initDialog();
                return false;
            }
            m.editAppointment = b;
            if (!b) {
                k = m.getSelection();
                if (!k) {
                    m.focus();
                    if (!m.focusedCell) {
                        m._updateFocusedCell()
                    }
                    if (m.focusedCell) {
                        m.focusedCell.setAttribute("data-selected", "true");
                        m._lastSelectedCell = m.focusedCell;
                        m._updateCellsSelection(m.focusedCell);
                        k = m.getSelection()
                    }
                }
            }
            if (k || b) {
                var d = k ? k.from : b.from;
                var h = k ? k.to : b.to;
                var n = m.getSelectedCells();
                if (n.length > 0) {
                    var f = n[n.length - 1].getAttribute("data-end-date");
                    if (f) h = a.jqx.scheduler.utilities.getEndOfDay(h);
                }
                m._editStart = d;
                m._editEnd = h;
            }
            if (m.editDialogFields && m.editDialogFields.resourceContainer && m._resources.length > 0) {
                var e = new Array();
                for (var j = 0; j < m._resources.length; j++) e.push(m._resources[j]);
                
                var r = true;
                if (e.length > 10) r = false;
                
                m.editDialogFields.resource.jqxDropDownList({
                    source: e,
                    selectedIndex: 0,
                    autoDropDownHeight: r
                });
                if (!b) m.editDialogFields.resource.val(k.resourceId);
                
            }
            if (m.editDialogFields && m.editDialogFields.repeatContainer) {
                if (b && b.rootAppointment) {
                    m.editDialogFields.repeatContainer.hide();
                    m.editDialogFields.repeatPanel.hide();
                } else {
                    m.editDialogFields.repeatContainer.show();
                    m.editDialogFields.repeatPanel.show();
                }
            }

            //#region "Inicialización de Diseño y Eventos de Modal"
            if (m._editDialog == null) {
                console.log('ok 1.0: Inicialización de Diseño y Eventos de Modal');
                m._editDialog = null;
                // Título
                var p = b == null ? m.schedulerLocalization.editDialogCreateTitleString : m.schedulerLocalization.editDialogTitleString;
                // Modal
                var q = a("<div><div>" + p + "</div><div id='dialog" + this.element.id + "'></div></div>");
                a(q).jqxWindow({
                    rtl: m.rtl,
                    autoFocus: false,
                    autoOpen: false,
                    animationType: "none",
                    theme: m.theme,
                    width: 540,
                    maxHeight: 800,
                    minHeight: 110,
                    resizable: false,
                    initContent: function() {
                        m.editDialogFields = {};
                        if (d == null && h == null && m._editStart && m._editEnd) {
                            d = m._editStart;
                            h = m._editEnd;
                        }
                        q.jqxWindow("setTitle", p);

                        var H = a(q.children()[1]);

                        //#region "Actividad"
                        var A = a("<div></div>");
                        H.append(A);
                        var C = a("<div class='" + m._editDialogLabel() + "'>" + m.schedulerLocalization.editDialogSubjectString + "</div>").appendTo(A);
                        var ad = a("<div class='" + m._editDialogField() + "'></div>").appendTo(A);
                        var U = a("<input type='text'/>").appendTo(ad);
                        U.jqxInput({
                            height: 25,
                            rtl: m.rtl,
                            width: "100%",
                            theme: m.theme
                        });
                        U.css("box-sizing", "border-box");
                        m.editDialogFields.subject = U;
                        m.editDialogFields.subjectLabel = C;
                        m.editDialogFields.subjectContainer = A;
                        //#endregion

                        //#region "Ubicación"
                        var P = a("<div></div>");
                        H.append(P);
                        var z = a("<div class='" + m._editDialogLabel() + "'>" + m.schedulerLocalization.editDialogLocationString + "</div>").appendTo(P);
                        var Z = a("<div class='" + m._editDialogField() + "'></div>").appendTo(P);
                        var T = a("<input type='text'/>").appendTo(Z);
                        T.jqxInput({
                            height: 25,
                            rtl: m.rtl,
                            width: "100%",
                            theme: m.theme
                        });
                        T.css("box-sizing", "border-box");
                        m.editDialogFields.location = T;
                        m.editDialogFields.locationLabel = z;
                        m.editDialogFields.locationContainer = P;
                        //#endregion

                        //#region "Vigencia Desde"
                        var L = a("<div></div>");
                        H.append(L);
                        var X = a("<div class='" + m._editDialogLabel() + "'>" + m.schedulerLocalization.editDialogFromString + "</div>").appendTo(L);
                        var av = a("<div class='" + m._editDialogField() + "'></div>").appendTo(L);
                        var aq = a("<div></div>").appendTo(av);
                        var V = null;
                        if (!d) {
                            var ay = new Date();
                            ay.setHours(9, 0, 0);
                            V = ay;
                            d = new a.jqx.date(ay)
                        } else {
                            V = d.toDate()
                        }
                        aq.jqxDateTimeInput({
                            height: 27,
                            dropDownWidth: 220,
                            dropDownHeight: 220,
                            rtl: m.rtl,
                            localization: m._getDateTimeInputLocalization(),
                            firstDayOfWeek: m.schedulerLocalization.firstDay,
                            todayString: m.schedulerLocalization.todayString,
                            clearString: m.schedulerLocalization.clearString,
                            value: V,
                            formatString: m.editDialogDateTimeFormatString,
                            width: "100%",
                            showTimeButton: true,
                            theme: m.theme
                        });
                        m.editDialogFields.from = aq;
                        m.editDialogFields.fromLabel = X;
                        m.editDialogFields.fromContainer = L;
                        //#endregion

                        //#region "Vigencia Hasta"
                        var aC = a("<div></div>");
                        H.append(aC);
                        var y = a("<div class='" + m._editDialogLabel() + "'>" + m.schedulerLocalization.editDialogToString + "</div>").appendTo(aC);
                        var Y = a("<div class='" + m._editDialogField() + "'></div>").appendTo(aC);
                        var S = a("<div></div>").appendTo(Y);
                        var x = null;
                        if (!h) {
                            var ay = new Date();
                            ay.setHours(10, 0, 0);
                            x = ay;
                            h = new a.jqx.date(ay)
                        } else {
                            x = h.toDate()
                        }
                        S.jqxDateTimeInput({
                            height: 27,
                            dropDownWidth: 220,
                            dropDownHeight: 220,
                            rtl: m.rtl,
                            localization: m._getDateTimeInputLocalization(),
                            firstDayOfWeek: m.schedulerLocalization.firstDay,
                            todayString: m.schedulerLocalization.todayString,
                            clearString: m.schedulerLocalization.clearString,
                            value: x,
                            formatString: m.editDialogDateTimeFormatString,
                            width: "100%",
                            showTimeButton: true,
                            theme: m.theme
                        });
                        m.editDialogFields.to = S;
                        m.editDialogFields.toLabel = y;
                        m.editDialogFields.toContainer = aC;
                        //#endregion

                        //#region "Vigencia Desde - change"
                        m._changeFromUser = true;
                        m.addHandler(aq, "change", function(aH) {
                            if (!m._changeFromUser) {
                                return
                            }
                            var aF = aH.args;
                            var aK = aH.args.oldValue;
                            var aJ = S.val("date");
                            var aE = new a.jqx.date(aJ) - new a.jqx.date(aK);
                            if (aE > 0) {
                                var aG = aE * 10000;
                                var aI = a.jqx.timeSpan(aG);
                                var i = new a.jqx.date(aH.args.newValue).add(aI);
                                S.val(i.toDate())
                            }
                        });
                        //#endregion

                        //#region "Vigencia Hasta - change"
                        m.addHandler(S, "change", function(aE) {
                            if (!m._changeFromUser) {
                                return
                            }
                            // var i = aE.args;
                            var aG = aE.args.oldValue;
                            var aF = S.val("date");
                            if (aq.val("date") >= aF) {
                                S.val(aG)
                            }
                        });
                        //#endregion

                        //#region "Todo el Día"
                        var t = a("<div></div>");
                        H.append(t);
                        var R = a("<div class='" + m._editDialogLabel() + "'>" + m.schedulerLocalization.editDialogAllDayString + "</div>").appendTo(t);
                        var ar = a("<div class='" + m._editDialogField() + "'></div>").appendTo(t);
                        var ai = a("<div style='top: 8px; position:relative;'></div>").appendTo(ar);
                        ai.jqxCheckBox({
                            rtl: m.rtl,
                            width: 25,
                            theme: m.theme
                        });
                        m.editDialogFields.allDay = ai;
                        m.editDialogFields.allDayLabel = R;
                        m.editDialogFields.allDayContainer = t;
                        m.addHandler(t, "change", function(i) {
                            if (i.args.checked) {
                                S.jqxDateTimeInput({
                                    showTimeButton: false,
                                    formatString: m.editDialogDateFormatString
                                });
                                aq.jqxDateTimeInput({
                                    showTimeButton: false,
                                    formatString: m.editDialogDateFormatString
                                })
                            } else {
                                S.jqxDateTimeInput({
                                    showTimeButton: true,
                                    formatString: m.editDialogDateTimeFormatString
                                });
                                aq.jqxDateTimeInput({
                                    showTimeButton: true,
                                    formatString: m.editDialogDateTimeFormatString
                                })
                            }
                        });
                        if (a.jqx.scheduler.utilities.getStartOfDay(d).equals(d) && a.jqx.scheduler.utilities.getEndOfDay(h).equals(h)) {
                            m.editDialogFields.allDay.val(true)
                        }
                        if (m._views[m._view].type.indexOf("month") >= 0 || (d && d.equals(h)) || (h && h.equals(a.jqx.scheduler.utilities.getEndOfDay(h)) && d && d.equals(a.jqx.scheduler.utilities.getStartOfDay(d)))) {
                            m.editDialogFields.allDay.val(true)
                        }
                        //#endregion

                        //#region "Zona horaria"
                        var w = a("<div></div>");
                        H.append(w);
                        var W = a("<div class='" + m._editDialogLabel() + "'>" + m.schedulerLocalization.editDialogTimeZoneString + "</div>").appendTo(w);
                        var at = a("<div class='" + m._editDialogField() + "'></div>").appendTo(w);
                        var ao = a("<div></div>").appendTo(at);
                        var u = new Array();
                        u.push({
                            displayName: m.schedulerLocalization.editDialogSelectTimeZoneString,
                            id: null
                        });
                        u = u.concat(m.timeZones);
                        for (var aw = 0; aw < u.length; aw++) {
                            var au = u[aw];
                            var G = au.displayName.indexOf(")");
                            if (G >= 0) {
                                var af = au.displayName.substring(2 + G)
                            } else {
                                var af = au.displayName
                            }
                            au.searchName = af
                        }
                        ao.jqxDropDownList({
                            height: 27,
                            rtl: m.rtl,
                            placeHolder: m.schedulerLocalization.editDialogSelectTimeZoneString,
                            width: "100%",
                            theme: m.theme,
                            searchMember: "searchName",
                            source: u,
                            displayMember: "displayName",
                            valueMember: "id"
                        });
                        m.editDialogFields.timeZone = ao;
                        m.editDialogFields.timeZoneLabel = W;
                        m.editDialogFields.timeZoneContainer = w;
                        //#endregion

                        m.initRepeatPanels(q, H, h.toDate());
                        if (m.editDialogFields && m.editDialogFields.repeatContainer) {
                            if (m.editAppointment && m.editAppointment.rootAppointment) {
                                m.editDialogFields.repeatContainer.hide();
                                m.editDialogFields.repeatPanel.hide()
                            } else {
                                m.editDialogFields.repeatContainer.show();
                                m.editDialogFields.repeatPanel.show()
                            }
                        }

                        //#region "Descripción"
                        var K = a("<div></div>");
                        H.append(K);
                        var aA = a("<div class='" + m._editDialogLabel() + "'>" + m.schedulerLocalization.editDialogDescriptionString + "</div>").appendTo(K);
                        var O = a("<div class='" + m._editDialogField() + "'></div>").appendTo(K);
                        var D = a("<textarea type='text' resizable='off' style='position:relative; top: 3px; padding:3px;'></textarea>").appendTo(O);
                        D.jqxInput({
                            rtl: m.rtl,
                            height: 40,
                            width: "100%",
                            theme: m.theme
                        });
                        D.css("box-sizing", "border-box");
                        m.editDialogFields.description = D;
                        m.editDialogFields.descriptionLabel = aA;
                        m.editDialogFields.descriptionContainer = K;
                        //#endregion

                        //#region "Color"
                        var ac = a("<div></div>");
                        H.append(ac);
                        var aD = a("<div class='" + m._editDialogLabel() + "'>" + m.schedulerLocalization.editDialogColorString + "</div>").appendTo(ac);
                        var Q = a("<div class='" + m._editDialogField() + "'></div>").appendTo(ac);
                        var F = a("<div></div>").appendTo(Q);
                        var I = function(aE) {
                            if (aE == -1) {
                                return ""
                            }
                            var i = m.colors[aE];
                            var aF = "";
                            var aF = "";
                            aF += "<div style='margin-top: 1px; float: left; border-radius: 3px; width: 96%; height: 20px; border: none; background:" + i + "; margin-left: 2%;'></div>";
                            return aF
                        };
                        var an = function(aG, aE) {
                            if (aE < 0) {
                                aG.css("top", "4px");
                                aG.css("position", "relative");
                                return aG[0].outerHTML
                            }
                            var i = m.colors[aE];
                            var aF = "";
                            aF += "<div style='margin-top: 2px; float: left; border-radius: 3px; width: 96%; height: 20px; border: none; background:" + i + "; margin-left: 2%;'></div>";
                            return aF
                        };
                        F.jqxDropDownList({
                            height: 27,
                            rtl: m.rtl,
                            selectedIndex: -1,
                            placeHolder: m.schedulerLocalization.editDialogColorPlaceHolderString,
                            selectionRenderer: an,
                            renderer: I,
                            source: m.colors,
                            width: "100%",
                            theme: m.theme
                        });
                        m.editDialogFields.color = F;
                        m.editDialogFields.colorLabel = aD;
                        m.editDialogFields.colorContainer = ac;
                        //#endregion

                        //#region "Estado"
                        var ah = a("<div></div>");
                        H.append(ah);
                        var az = a("<div class='" + m._editDialogLabel() + "'>" + m.schedulerLocalization.editDialogStatusString + "</div>").appendTo(ah);
                        var N = a("<div class='" + m._editDialogField() + "'></div>").appendTo(ah);
                        var B = a("<div></div>").appendTo(N);
                        B.jqxDropDownList({
                            height: 27,
                            rtl: m.rtl,
                            selectedIndex: 2,
                            autoDropDownHeight: true,
                            source: m.schedulerLocalization.editDialogStatuses,
                            width: "100%",
                            theme: m.theme
                        });
                        m.editDialogFields.status = B;
                        m.editDialogFields.statusLabel = az;
                        m.editDialogFields.statusContainer = ah;
                        //#endregion
                        
                        //#region "Propietario"
                        var ag = a("<div></div>");
                        H.append(ag);
                        var M = a("<div class='" + m._editDialogLabel() + "'>" + m.schedulerLocalization.editDialogResourceIdString + "</div>").appendTo(ag);
                        var am = a("<div class='" + m._editDialogField() + "'></div>").appendTo(ag);
                        var ab = a("<div></div>").appendTo(am);
                        var E = new Array();

                        for (var aw = 0; aw < m._resources.length; aw++)
                            E.push(m._resources[aw]);

                        var v = true;
                        if (E.length > 10) v = false;
                        
                        ab.jqxDropDownList({
                            height: 27,
                            rtl: m.rtl,
                            source: E,
                            selectedIndex: 0,
                            autoDropDownHeight: v,
                            width: "100%",
                            theme: m.theme
                        });
                        m.editDialogFields.resource = ab;
                        m.editDialogFields.resourceLabel = M;
                        m.editDialogFields.resourceContainer = ag;
                        if (E.length == 0) ag.hide();
                        if (!b && k) m.editDialogFields.resource.val(k.resourceId);
                        //#endregion

                        //#region "Botones de Acción"
                        var ae = a("<div></div>");
                        H.append(ae);
                        var al = a("<div style='width:100%;' class='" + m._editDialogField() + "'></div>").appendTo(ae);
                        var ap = a("<button style='margin-left: 5px; float:right;'>" + m.schedulerLocalization.editDialogCancelString + "</button>").appendTo(al);
                        var aj = a("<button style='margin-left: 5px; float:right;'>" + m.schedulerLocalization.editDialogDeleteString + "</button>").appendTo(al);
                        var ak = a("<button style='display: none; margin-left: 5px; float:right;'>" + m.schedulerLocalization.editDialogRepeatDeleteSeriesString + "</button>").appendTo(al);
                        var J = a("<button style='display: none; margin-left: 5px; float:right;'>" + m.schedulerLocalization.editDialogRepeatDeleteString + "</button>").appendTo(al);
                        var aa = a("<button style='margin-left: 5px; float:right;'>" + m.schedulerLocalization.editDialogSaveString + "</button>").appendTo(al);
                        var aB = a("<button style='display: none; margin-left: 5px; float:right;'>" + m.schedulerLocalization.editDialogRepeatSaveSeriesString + "</button>").appendTo(al);
                        var s = a("<button style='display: none; margin-left: 5px; float:right;'>" + m.schedulerLocalization.editDialogRepeatSaveString + "</button>").appendTo(al);
                        var ax = 25;
                        if (m.isTouchDevice()) { ax = null }
                        aj.jqxButton({ rtl: m.rtl, theme: m.theme });
                        ak.jqxButton({ rtl: m.rtl, theme: m.theme });
                        J.jqxButton({ rtl: m.rtl, theme: m.theme });
                        aa.jqxButton({ rtl: m.rtl, theme: m.theme });
                        ap.jqxButton({ rtl: m.rtl, theme: m.theme });
                        aB.jqxButton({ rtl: m.rtl, theme: m.theme });
                        s.jqxButton({ rtl: m.rtl, theme: m.theme });
                        aB.hide();
                        s.hide();
                        m.editDialogFields.saveOccurrenceButton = s;
                        m.editDialogFields.saveSeriesButton = aB;
                        m.editDialogFields.saveButton = aa;
                        m.editDialogFields.cancelButton = ap;
                        m.editDialogFields.deleteButton = aj;
                        m.editDialogFields.deleteSeriesButton = ak;
                        m.editDialogFields.deleteExceptionsButton = J;
                        m.editDialogFields.buttons = al;
                        
                        // Eliminar Actividad
                        m.addHandler(aj, "click", function() {
                            q.jqxWindow("close");
                            m.overlay.hide();
                            m._deleteAppointment(m.editAppointment);
                        });

                        // Cancelar Actividad
                        m.addHandler(ap, "click", function() {
                            q.jqxWindow("close");
                            m.overlay.hide();
                        });

                        //#region "Grabar Actividad Repetida"
                        /*
                        m.addHandler(s, "click", function() {
                            if (!m.editAppointment.isException()) {
                                if (m.editAppointment.rootAppointment != null) {
                                    m.editAppointment.rootAppointment.exceptions.push(m.editAppointment);
                                    m.editAppointment.rootAppointment.recurrenceException.push(m.editAppointment.occurrenceFrom);
                                } else {
                                    m.editAppointment.exceptions.push(m.editAppointment);
                                    m.editAppointment.recurrenceException.push(m.editAppointment.occurrenceFrom);
                                }
                            } else {
                                var aG = m.editAppointment.rootAppointment ? m.editAppointment.rootAppointment.exceptions : m.editAppointment.exceptions;
                                for (var aF = 0; aF < aG.length; aF++) {
                                    if (aG[aF].occurrenceFrom.equals(m.editAppointment.occurrenceFrom)) {
                                        aG[aF] = m.editAppointment;
                                        break;
                                    }
                                }
                            }
                            var aE = m._setAppointmentPropertiesFromDialog(m.editAppointment, "occurrence");
                            if (!aE) return;
                            
                            m.changedAppointments[m.editAppointment.id] = {
                                type: "Update",
                                appointment: m.editAppointment.boundAppointment
                            };
                            m._raiseEvent("appointmentChange", {
                                appointment: m.editAppointment.boundAppointment
                            });
                            m._renderrows();
                            q.jqxWindow("close");
                            m.overlay.hide();
                        });
                        */
                        //#endregion

                        //#region "Grabar Actividad Serie Repetida"
                        /*
                        m.addHandler(aB, "click", function() {
                            var aE = m.editAppointment;
                            if (aE.rootAppointment) aE = aE.rootAppointment;
                            
                            var i = m._setAppointmentPropertiesFromDialog(aE, "series");
                            if (!i) return;
                            m.changedAppointments[aE.id] = {
                                type: "Update",
                                appointment: aE.boundAppointment
                            };
                            m._raiseEvent("appointmentChange", {
                                appointment: aE.boundAppointment
                            });
                            m._renderrows();
                            q.jqxWindow("close");
                            m.overlay.hide();
                        });
                        */
                        //#endregion

                        //#region "Grabar/Actualizar Actividad"
                        m.addHandler(aa, "click", function() {
                            console.log('ok 4.0: Grabar/Actualizar Actividad');
                            var i = true;
                            //Grabar
                            if (m.editAppointment == null) {
                                var aE = new a.jqx.scheduler.appointment();
                                i = m._setAppointmentPropertiesFromDialog(aE, "none");
                                if (i) m.addAppointment(aE);
                            } else {
                                //Actualizar
                                if (m.editAppointment.rootAppointment) {
                                    s.trigger("click");
                                    i = false;
                                } else {
                                    if (m.editAppointment.isRecurrentAppointment()) {
                                        aB.trigger("click");
                                        i = false;
                                    } else {
                                        i = m._setAppointmentPropertiesFromDialog(m.editAppointment, "none");
                                        if (i) {
                                            m.changedAppointments[m.editAppointment.id] = {
                                                type: "Update",
                                                appointment: m.editAppointment ? m.editAppointment.boundAppointment : null
                                            };
                                            m._raiseEvent("appointmentChange", {
                                                appointment: m.editAppointment.boundAppointment
                                            });
                                            m._renderrows(); // Pintar datos actualizados
                                        }
                                    }
                                }
                            }
                            if (i) {
                                q.jqxWindow("close");
                                m.overlay.hide();
                            }
                        });
                        //#endregion

                        // Cerrar Modal
                        m.addHandler(q, "close", function(i) {
                            m.overlay.hide();
                            m.focus();
                            if (m.editDialogClose) {
                                m.editDialogClose(q, m.editDialogFields, m.editAppointment ? m.editAppointment.boundAppointment : null);
                            }
                            m._raiseEvent("editDialogClose", {
                                dialog: q,
                                fields: m.editDialogFields,
                                appointment: m.editAppointment ? m.editAppointment.boundAppointment : null
                            })
                        });
                        //#endregion

                        if (m.editDialogCreate) m.editDialogCreate(q, m.editDialogFields, m.editAppointment);
                        
                        m._raiseEvent("editDialogCreate", {
                            dialog: q,
                            fields: m.editDialogFields,
                            appointment: m.editAppointment ? m.editAppointment.boundAppointment : null
                        });

                        q.jqxWindow({
                            height: H[0].scrollHeight + 40
                        })

                    }
                });
                m._editDialog = q;
            }
            //#endregion

            if (!m.dialogOpenings) m.dialogOpenings = 0;
            
            //#region "Abrir Modal - Crear/Editar"
            m.removeHandler(m._editDialog, "open");
            m.addHandler(m._editDialog, "open", function(t) {

                console.log('ok 2.0 : Abrir Modal - Crear/Editar');

                if (m.editDialogOpen && m.editDialogFields) {
                    var i = m.editDialogOpen(q, m.editDialogFields, m.editAppointment ? m.editAppointment.boundAppointment : null);
                    if (i == true) return;
                }
                if (m.rtl) {
                    m._editDialog.find(".jqx-scheduler-edit-dialog-label").addClass(m.toThemeProperty("jqx-scheduler-edit-dialog-label-rtl"));
                    m._editDialog.find(".jqx-scheduler-edit-dialog-field").addClass(m.toThemeProperty("jqx-scheduler-edit-dialog-field-rtl"));
                    m.editDialogFields.saveOccurrenceButton.css("float", "left");
                    m.editDialogFields.saveSeriesButton.css("float", "left");
                    m.editDialogFields.saveButton.css("float", "left");
                    m.editDialogFields.cancelButton.css("float", "left");
                    m.editDialogFields.deleteButton.css("float", "left");
                    m.editDialogFields.deleteSeriesButton.css("float", "left");
                    m.editDialogFields.deleteExceptionsButton.css("float", "left");
                    m.editDialogFields.buttons.css("width", "auto");
                    m.editDialogFields.allDay.css("float", "right");
                }
                setTimeout(function() {
                    var v = m.editAppointment ? m.editAppointment.boundAppointment : null;
                    if (m.editAppointment && m.editAppointment.rootAppointment) v = m.editAppointment.rootAppointment.boundAppointment;
                    
                    m._raiseEvent("editDialogOpen", {
                        dialog: m._editDialog,
                        fields: m.editDialogFields,
                        appointment: v
                    })
                });
                var s = function() {
                    setTimeout(function() {
                        if (!c) {
                            m.editDialogFields.subject.focus();
                            m.editDialogFields.subject.select();
                        } else {
                            m.editDialogFields.deleteButton.focus();
                        }
                    }, 1)
                };
                var u = m.editAppointment == null ? m.schedulerLocalization.editDialogCreateTitleString : m.schedulerLocalization.editDialogTitleString;
                m._editDialog.jqxWindow({ title: u });

                // Si el Modal no está abierto y se va a crear una actividad
                if (0 == m.dialogOpenings && !b) {
                    m.dialogOpenings++;
                    if (!m.isTouchDevice()) {
                        m._editDialog.jqxWindow({
                            height: 150
                        });
                        m._editDialog.jqxWindow({
                            height: a(m._editDialog.children())[1].scrollHeight + 40
                        });
                    }
                    m.editDialogFields.deleteButton.hide();
                    s();
                    return;
                }
                if (m.editDialogFields) {

                    //#region "Limpiar Datos"
                    m.editDialogFields.subject.val("");
                    m.editDialogFields.location.val("");
                    s();
                    m.editDialogFields.resetExceptions.val(false);
                    m.editDialogFields.description.val("");
                    if (!b) m.editDialogFields.deleteButton.hide();
                    //#endregion
                    
                    if (b) {
                        //#region "Setear Valores para Edición"
                        m.dialogOpenings++;
                        m.editDialogFields.deleteButton.show();
                        m.editDialogFields.subject.val(b.subject);
                        m.editDialogFields.location.val(b.location);
                        m.editDialogFields.description.val(b.description);
                        m.editDialogFields.timeZone.val(b.timeZone);
                        if (m.colors.indexOf(b.borderColor) >= 0) m.editDialogFields.color.val(b.borderColor);
                        else m.editDialogFields.color.jqxDropDownList("clearSelection");
                        m.editDialogFields.allDay.val(b.allDay);
                        m.editDialogFields.resource.val(b.resourceId);
                        m.editDialogFields.status.val(b.status);
                        if (b.timeZone) {
                            b.from = b.from.toTimeZone(b.timeZone);
                            b.to = b.to.toTimeZone(b.timeZone);
                        }
                        d = b.from;
                        h = b.to;
                        if (a.jqx.scheduler.utilities.getStartOfDay(d).equals(d) && a.jqx.scheduler.utilities.getEndOfDay(h).equals(h))
                            m.editDialogFields.allDay.val(true);
                        m._setAppointmentPropertiesToDialog(b, d, h, k ? k.resourceId : null);
                        //#endregion

                    } else {
                        m.editDialogFields.saveButton.show();
                        m._setAppointmentPropertiesToDialog(null, d, h, k ? k.resourceId : null);
                    }

                    // Si Fecha de Vigencia tiene valores
                    if (d && h) {
                        m._changeFromUser = false;
                        m.editDialogFields.from.val(d.toDate());
                        m.editDialogFields.to.val(h.toDate());
                        m._changeFromUser = true;
                    }
                    if (!m.isTouchDevice()) {
                        m._editDialog.jqxWindow({
                            height: 150
                        });
                        m._editDialog.jqxWindow({
                            height: a(m._editDialog.children())[1].scrollHeight + 40
                        });
                    }
                }
            });
            //#endregion

            //#region "Manipular Modal por Teclado"
            m.removeHandler(m._editDialog, "keydown");
            m.addHandler(m._editDialog, "keydown", function(s) {
                if (m.editDialogKeyDown) {
                    var i = m.editDialogKeyDown(q, m.editDialogFields, m.editAppointment, s);
                    if (i != undefined) return i;
                }
                // Presionar tecla Enter
                if (s.keyCode == 13) {
                    if (a(document.activeElement).ischildof(m._editDialog)) {
                        if (document.activeElement.nodeName.toLowerCase() == "button") return true;
                        if (b) {
                            if (b.isException() || b.rootAppointment) {
                                m.editDialogFields.saveOccurrenceButton.trigger("click");
                            } else {
                                if (b.isRecurrentAppointment()) m.editDialogFields.saveSeriesButton.trigger("click");
                                else m.editDialogFields.saveButton.trigger("click");
                            }
                        } else {
                            m.editDialogFields.saveButton.trigger("click");
                        }
                    }
                } else {
                    // Presionar tecla Escape
                    if (s.keyCode == 27) {
                        m.editDialogFields.cancelButton.trigger("click");
                    }
                }
            });
            //#endregion

        },
        openMenu: function(e, c) {
            var d = this;
            if (!d.menu) d._initMenu();
            var b = d._views[d._view].type;
            if (d.contextMenu && d.menu) {
                if (!d.selectedAppointment) d.menu.jqxMenu("hideItem", "editAppointment");
                else d.menu.jqxMenu("showItem", "editAppointment");
                
                if (arguments.length < 2) {
                    if (d.selectedAppointment) {
                        var f = d.selectedAppointment.coord();
                        e = f.left;
                        c = f.top;
                    } else {
                        if (d.focusedCell) var f = a(d.focusedCell).coord();
                    }
                    e = f.left;
                    c = f.top;
                }
                d.menu.jqxMenu("open", e, c);
                d._hasOpenedMenu = true;
            }
        },
        closeMenu: function() {
            var b = this;
            if (b.contextMenu && b.menu) {
                setTimeout(function() {
                    b.menu.jqxMenu("close");
                });
            }
        },
        closeDialog: function() {
            var b = this;
            b._editDialog.jqxWindow("close");
        },
        openDialog: function(d, e) {
            var f = this;
            // var c = f._views[f._view].type;
            if (f.selectedJQXAppointment) {
                var b = f._initDialog(f.selectedJQXAppointment);
                if (b !== false) f._openDialog(d, e);
            } else {
                if (f.getSelection() == null) {
                    f.focus();
                    f.focusedCell.setAttribute("data-selected", "true");
                    f._lastSelectedCell = f.focusedCell;
                    f._updateCellsSelection(f.focusedCell);
                }
                f._initDialog();
                f._openDialog(d, e);
            }
        },
        _openDialog: function(d, c) {
            var f = this;
            // var j = f._views[f._view].type;
            if (!f.editDialog) return;
            var e = f.host.coord();
            f.overlay.show();
            f.overlay.css("z-index", 9999999);
            f.overlay.width(f.host.width());
            f.overlay.height(f.host.height());
            f.overlay.offset(e);
            var g = f.isTouchDevice();
            if (g) {
                f._editDialog.jqxWindow("move", e.left, e.top);
                f._editDialog.jqxWindow({
                    draggable: false,
                    maxWidth: f.host.width(),
                    maxHeight: f.host.height()
                });
                f._editDialog.jqxWindow({
                    width: f.host.width(),
                    height: f.host.height()
                });
                f._editDialog.jqxWindow("open");
                f._editDialog.jqxWindow("move", e.left, e.top);
            } else {
                if (d != undefined && c != undefined) {
                    f._editDialog.jqxWindow("move", d, c);
                    f._editDialog.jqxWindow("open");
                } else {
                    var i = f._editDialog.height();
                    if (i < 400) i = 400;
                    var h = e.top + f.host.height() / 2 - i / 2;
                    var b = e.left + f.host.width() / 2 - f._editDialog.width() / 2;
                    f._editDialog.jqxWindow("move", b, h);
                    f._editDialog.jqxWindow("open");
                }
            }
            setTimeout(function() {
                f.overlay.css("z-index", 999)
            }, 50)
        },

        //#region "Mostrar Datos en Calendario al Grabar/Actualizar Actividad"
        _setAppointmentPropertiesFromDialog: function(c, d) {

            console.log('ok 3.0: Mostrar Datos Grabados en Calendario');

            var e = this;
            var b = function(n) {
                var x = e._views[e._view].type;
                // var u = e._views[e._view];
                var A = e.editDialogFields.from.val("date");
                var h = e.editDialogFields.to.val("date");
                if (A > h) {
                    e.editDialogFields.from.jqxDateTimeInput("focus");
                    return false;
                }
                if (A == h) {
                    if (x.indexOf("month") >= 0) return true;
                    return false;
                }
                n.resourceId = e.editDialogFields.resource.val();
                if (e.editDialogFields.resourceContainer.css("display") == "none") n.resourceId = "";
                n.description = e.editDialogFields.description.val();
                n.allDay = e.editDialogFields.allDay.val();
                n.status = e.editDialogFields.status.val();
                n.location = e.editDialogFields.location.val();
                n.timeZone = e.editDialogFields.timeZone.val();
                if (n.timeZone == "" && e.timeZone != "") n.timeZone = e.timeZone;
                n.from = new a.jqx.date(A, n.timeZone);
                n.to = new a.jqx.date(h, n.timeZone);
                if (e.timeZone) {
                    n.from = n.from.toTimeZone(e.timeZone);
                    n.to = n.to.toTimeZone(e.timeZone);
                } else {
                    n.from = n.from.toTimeZone(null);
                    n.to = n.to.toTimeZone(null);
                }
                if (n.allDay) {
                    n.from = a.jqx.scheduler.utilities.getStartOfDay(n.from);
                    n.to = a.jqx.scheduler.utilities.getEndOfDay(n.to);
                }
                if (e.editDialogFields.color.val()) {
                    var v = e.getAppointmentColors(e.editDialogFields.color.val());
                    n.color = v.color;
                    n.background = v.background;
                    n.borderColor = v.border;
                }
                n.subject = e.editDialogFields.subject.val();
                var f = e.editDialogFields.repeat.jqxDropDownList("selectedIndex");
                var r = new a.jqx.scheduler.recurrencePattern();
                var j = e.editDialogFields.repeatEndPanel;
                r.timeZone = e.timeZone;
                r.from = n.from.clone();
                if (d == "occurrence")
                    if (n.rootAppointment)
                        r.from = n.rootAppointment.from.clone();
                if (e.editDialogFields.resetExceptions.val()) {
                    n.exceptions = new Array();
                    n.recurrenceException = new Array();
                }
                if (j.repeatEndNever.val()) {
                    r.count = 1000;
                    r.to = new a.jqx.date(9999, 12, 31);
                } else {
                    if (j.repeatEndAfter.val()) {
                        r.count = j.repeatEndAfterValue.val();
                        r.to = new a.jqx.date(9999, 12, 31);
                    } else {
                        if (j.repeatEndOn.val()) {
                            r.count = 1000;
                            var h = new a.jqx.date(j.repeatEndOnValue.jqxDateTimeInput("getDate"), e.timeZone);
                            r.to = h;
                        }
                    }
                }
                switch (f) {
                    case 0:
                    default:
                        n.clearRecurrence();
                        break;
                    case 1:
                        var k = e.editDialogFields.daily;
                        var F = k.repeatDayInterval.val();
                        r.interval = F;
                        r.freq = "daily";
                        break;
                    case 2:
                        var w = e.editDialogFields.weekly;
                        var F = w.repeatWeekInterval.val();
                        var q = [{ Sunday: 0 }, { Monday: 1 }, { Tuesday: 2 }, { Wednesday: 3 }, { Thursday: 4 }, { Friday: 5 }, { Saturday: 6 }];
                        var p = w.repeatDays;
                        var o = new Array();
                        r.weekDays = {};
                        for (var C = 0; C < 7; C++) {
                            var B = p[C].val();
                            if (B) {
                                if (C == 0) o.push(6);
                                else o.push(C - 1);
                                a.extend(r.weekDays, q[C]);
                            }
                        }
                        r.freq = "weekly";
                        r.byweekday = o;
                        r.interval = F;
                        break;
                    case 3:
                        var D = e.editDialogFields.monthly;
                        var F = D.repeatMonth.val();
                        if (D.repeatMonthDayBool.val()) {
                            r.day = D.repeatMonthDay.val();
                            r.bymonthday = new Array();
                            r.bymonthday.push(r.day);
                        } else {
                            var y = D.repeatDayOfWeek.jqxDropDownList("selectedIndex");
                            var s = new Array();
                            if (y == 0) y = 6;
                            else y--;
                            var l = D.repeatDayOfWeekType.jqxDropDownList("selectedIndex");
                            var E = "";
                            switch (l) {
                                case 0:
                                    E = 1; break;
                                case 1:
                                    E = 2; break;
                                case 2:
                                    E = 3; break;
                                case 3:
                                    E = 4; break;
                                case 4:
                                    E = -1; break;
                            }
                            s.push([y, E]);
                            r.bynweekday = s;
                        }
                        r.freq = "monthly";
                        r.interval = F;
                        break;
                    case 4:
                        var G = e.editDialogFields.yearly;
                        var F = G.repeatYear.val();
                        if (G.repeatYearBool.val()) {
                            r.day = G.repeatYearDay.val();
                            r.month = G.repeatYearMonth.jqxDropDownList("selectedIndex");
                            r.bymonth = new Array();
                            r.bymonth.push(1 + r.month);
                            r.byyearday = new Array();
                            r.byyearday.push(r.day);
                        } else {
                            r.month = G.repeatDayOfWeekMonth.jqxDropDownList("selectedIndex");
                            r.bymonth = new Array();
                            r.bymonth.push(1 + r.month);
                            var y = G.repeatDayOfWeek.jqxDropDownList("selectedIndex");
                            var s = new Array();
                            if (y == 0) y = 6;
                            else y--;
                            var l = G.repeatDayOfWeekType.jqxDropDownList("selectedIndex");
                            var E = "";
                            switch (l) {
                                case 0:
                                    E = 1; break;
                                case 1:
                                    E = 2; break;
                                case 2:
                                    E = 3; break;
                                case 3:
                                    E = 4; break;
                                case 4:
                                    E = -1; break;
                            }
                            s.push([y, E]);
                            r.bynweekday = s;
                        }
                        r.freq = "yearly";
                        r.interval = F;
                        break;
                }
                if (n.rootAppointment) {
                    n.rootAppointment.recurrencePattern = r;
                } else {
                    if (f > 0) n.recurrencePattern = r;
                }
                var m = {};
                var t = {};
                for (var H in e.appointmentDataFields) {
                    var g = e.appointmentDataFields[H];
                    var z = n[H];
                    m[H] = z;
                    if (H == "from" || H == "to") z = z.toDate();
                    t[g] = z;
                }
                m.originalData = t;
                m.jqxAppointment = n;
                n.boundAppointment = m;
                return true;
            }(c);
            return b;
        },
        //#endregion

        //#region "Establecer Propiedades de Calendario seleccionado en Modal"
        _setAppointmentPropertiesToDialog: function(e, h, d, g) {

            console.log('ok 2.1: Establecer Propiedades de Calendario seleccionado en Modal')

            var f = this;
            var c = function() {
                var p = f.editDialogFields.repeatEndPanel;
                p.repeatEndNever.jqxRadioButton({
                    checked: true
                });
                p.repeatEndAfter.jqxRadioButton({
                    checked: false
                });
                p.repeatEndAfterValue.val(1);
                p.repeatEndOnValue.val(l);
                var l = d.toDate();
                if (f.editDialogFields.daily) {
                    var j = f.editDialogFields.daily;
                    j.repeatDayInterval.val(1);
                }
                if (f.editDialogFields.weekly) {
                    var o = f.editDialogFields.weekly;
                    for (var m = 0; m < o.repeatDays.length; m++) {
                        if (m == 1) {
                            o.repeatDays[m].jqxCheckBox({
                                checked: true
                            });
                        } else {
                            o.repeatDays[m].jqxCheckBox({
                                checked: false
                            });
                        }
                    }
                    o.repeatWeekInterval.val(1);
                }
                if (f.editDialogFields.monthly) {
                    var n = f.editDialogFields.monthly;
                    n.repeatDayOfWeek.jqxDropDownList("selectIndex", 1);
                    n.repeatDayOfWeekBool.jqxRadioButton({
                        checked: false
                    });
                    n.repeatDayOfWeekType.jqxDropDownList("selectIndex", 0);
                    n.repeatMonthDayBool.jqxRadioButton({
                        checked: true
                    });
                    n.repeatMonthDay.val(1);
                    n.repeatMonth.val(1);
                }
                if (f.editDialogFields.yearly) {
                    var k = f.editDialogFields.yearly;
                    k.repeatDayOfWeekMonth.jqxDropDownList("selectIndex", 0);
                    k.repeatDayOfWeekBool.jqxRadioButton({
                        checked: false
                    });
                    k.repeatDayOfWeekType.jqxDropDownList("selectIndex", 0);
                    k.repeatDayOfWeek.jqxDropDownList("selectIndex", 1);
                    k.repeatYear.val(1);
                    k.repeatYearMonth.jqxDropDownList("selectIndex", 0);
                    k.repeatYearDay.val(1);
                    k.repeatYearBool.val(true);
                }
            };
            c();
            if (e && e.isRecurrentAppointment()) {
                if (!e.rootAppointment) f.editDialogFields.resetExceptionsContainer.show();
                else f.editDialogFields.resetExceptionsContainer.hide();
            } else {
                if (e) {
                    f.editDialogFields.resetExceptionsContainer.hide();
                    f.editDialogFields.repeat.jqxDropDownList("selectIndex", 0);
                }
            }
            if (!e) {
                f.editDialogFields.timeZone.jqxDropDownList("clearSelection");
                if (!g) f.editDialogFields.resource.jqxDropDownList("selectIndex", 0);
                else f.editDialogFields.resource.val(g);
                f.editDialogFields.allDay.val(false);
                if (f._views[f._view].type.indexOf("month") >= 0 || (h && h.equals(d)) || (d && d.equals(a.jqx.scheduler.utilities.getEndOfDay(d)) && h && h.equals(a.jqx.scheduler.utilities.getStartOfDay(h)))) {
                    f.editDialogFields.allDay.val(true);
                }
                f.editDialogFields.color.jqxDropDownList("clearSelection");
                f.editDialogFields.description.val("");
                f.editDialogFields.subject.val("");
                f.editDialogFields.repeat.jqxDropDownList("selectIndex", 0);
                return;
            }
            var b = function(j) {
                var r = j.recurrencePattern;
                if (j.rootAppointment) var r = j.rootAppointment.recurrencePattern;
                if (r == null) return;
                var k = r.freq;
                var p = 0;
                if (k == "daily") p = 1;
                if (k == "weekly") p = 2;
                if (k == "monthly") p = 3;
                if (k == "yearly") p = 4;
                var n = f.editDialogFields.repeatEndPanel;
                if (r.count != 1000) {
                    n.repeatEndNever.jqxRadioButton({
                        checked: false
                    });
                    n.repeatEndAfter.jqxRadioButton({
                        checked: true
                    });
                    n.repeatEndAfterValue.val(r.count);
                } else {
                    if (r.to.year() != 9999) {
                        n.repeatEndOn.jqxRadioButton({
                            checked: true
                        });
                        n.repeatEndOnValue.val(r.to.toDate());
                    } else {
                        n.repeatEndNever.jqxRadioButton({
                            checked: true
                        });
                    }
                }
                f.editDialogFields.repeat.jqxDropDownList("selectIndex", p);
                switch (p) {
                    case 1:
                        var l = r.interval;
                        var q = f.editDialogFields.daily;
                        q.repeatDayInterval.val(l);
                        break;
                    case 2:
                        var l = r.interval;
                        var z = f.editDialogFields.weekly;
                        z.repeatWeekInterval.val(l);
                        var y = r.byweekday;
                        for (var o = 0; o < 7; o++) {
                            var w = z.repeatDays[o];
                            w.val(false);
                        }
                        for (var o = 0; o < y.length; o++) {
                            var w = y[o];
                            if (w == 6) z.repeatDays[0].val(true);
                            else z.repeatDays[w + 1].val(true);
                        }
                        break;
                    case 3:
                        var u = f.editDialogFields.monthly;
                        u.repeatMonth.val(r.interval);
                        if (r.bymonthday && r.bymonthday.length > 0) {
                            u.repeatMonthDayBool.jqxRadioButton({
                                checked: true
                            });
                            u.repeatMonthDay.val(r.day);
                        } else {
                            u.repeatDayOfWeekBool.jqxRadioButton({
                                checked: true
                            });
                            var s = r.bynweekday;
                            var m = s[0][0];
                            m++;
                            if (m == 7) m = 0;
                            u.repeatDayOfWeek.jqxDropDownList("selectIndex", m);
                            var x = s[0][1];
                            var v = "";
                            switch (x) {
                                case 1:
                                    v = 0;
                                    break;
                                case 2:
                                    v = 1;
                                    break;
                                case 3:
                                    v = 2;
                                    break;
                                case 4:
                                    v = 3;
                                    break;
                                case -1:
                                    v = 4;
                                    break;
                            }
                            u.repeatDayOfWeekType.jqxDropDownList("selectIndex", v);
                        }
                        break;
                    case 4:
                        var t = f.editDialogFields.yearly;
                        if (r.byyearday && r.byyearday.length > 0) {
                            t.repeatYearDay.val(r.byyearday[0]);
                            t.repeatYearBool.val(true);
                        }
                        if (r.bymonth && r.bymonth.length > 0) {
                            t.repeatYearMonth.jqxDropDownList("selectIndex", r.bymonth[0] - 1);
                            t.repeatYearBool.val(true);
                        }
                        if (!r.byyearday || (r.byyearday && r.byyearday.length == 0)) {
                            t.repeatDayOfWeekMonth.jqxDropDownList("selectIndex", r.bymonth[0] - 1);
                            t.repeatDayOfWeekBool.jqxRadioButton({
                                checked: true
                            });
                            var s = r.bynweekday;
                            var m = s[0][0];
                            m++;
                            if (m == 7) m = 0;
                            t.repeatDayOfWeek.jqxDropDownList("selectIndex", m);
                            var x = s[0][1];
                            var v = "";
                            switch (x) {
                                case 1:
                                    v = 0;
                                    break;
                                case 2:
                                    v = 1;
                                    break;
                                case 3:
                                    v = 2;
                                    break;
                                case 4:
                                    v = 3;
                                    break;
                                case -1:
                                    v = 4;
                                    break;
                            }
                            t.repeatDayOfWeekType.jqxDropDownList("selectIndex", v);
                        }
                        break;
                }
            };
            b(e);
        }
        //#endregion
    });
    a.jqx.scheduler.column = function(b, c) {
        this.owner = b;
        this.datafield = null;
        this.displayfield = null;
        this.text = "";
        this.sortable = true;
        this.editable = true;
        this.hidden = false;
        this.hideable = true;
        this.groupable = true;
        this.renderer = null;
        this.cellsRenderer = null;
        this.columntype = null;
        this.cellsFormat = "";
        this.align = "center";
        this.cellsalign = "center";
        this.width = "auto";
        this.minwidth = 60;
        this.maxwidth = "auto";
        this.pinned = false;
        this.visibleindex = -1;
        this.filterable = true;
        this.filter = null;
        this.resizable = true;
        this.draggable = true;
        this.initeditor = null;
        this.createeditor = null;
        this.destroyeditor = null;
        this.geteditorvalue = null;
        this.autoCellHeight = true;
        this.validation = null;
        this.classname = "";
        this.cellclassname = "";
        this.rendered = null;
        this.exportable = true;
        this.nullable = true;
        this.columngroup = null;
        this.columntype = "textbox";
        this.getcolumnproperties = function() {
            return {
                nullable: this.nullable,
                sortable: this.sortable,
                hidden: this.hidden,
                groupable: this.groupable,
                width: this.width,
                align: this.align,
                editable: this.editable,
                minwidth: this.minwidth,
                maxwidth: this.maxwidth,
                resizable: this.resizable,
                datafield: this.datafield,
                text: this.text,
                exportable: this.exportable,
                cellsalign: this.cellsalign,
                pinned: this.pinned,
                cellsFormat: this.cellsFormat,
                columntype: this.columntype,
                classname: this.classname,
                cellclassname: this.cellclassname,
                menu: this.menu
            }
        }, this.setproperty = function(d, e) {
            if (this[d]) {
                var f = this[d];
                this[d] = e;
                this.owner._columnPropertyChanged(this, d, e, f);
            } else {
                if (this[d.toLowerCase()]) {
                    var f = this[d.toLowerCase()];
                    this[d.toLowerCase()] = e;
                    this.owner._columnPropertyChanged(this, d.toLowerCase(), e, f);
                }
            }
        };
        this._initfields = function(e) {
            if (e != null) {
                var d = this;
                if (a.jqx.hasProperty(e, "dataField")) this.datafield = a.jqx.get(e, "dataField");
                if (a.jqx.hasProperty(e, "displayField")) this.displayfield = a.jqx.get(e, "displayField");
                else this.displayfield = this.datafield;
                if (a.jqx.hasProperty(e, "columnType")) this.columntype = a.jqx.get(e, "columnType");
                if (a.jqx.hasProperty(e, "validation")) this.validation = a.jqx.get(e, "validation");
                if (a.jqx.hasProperty(e, "autoCellHeight")) this.autoCellHeight = a.jqx.get(e, "autoCellHeight");
                if (a.jqx.hasProperty(e, "text")) this.text = a.jqx.get(e, "text");
                else this.text = this.displayfield;
                if (a.jqx.hasProperty(e, "sortable")) this.sortable = a.jqx.get(e, "sortable");
                if (a.jqx.hasProperty(e, "hidden")) this.hidden = a.jqx.get(e, "hidden");
                if (a.jqx.hasProperty(e, "groupable")) this.groupable = a.jqx.get(e, "groupable");
                if (a.jqx.hasProperty(e, "renderer")) this.renderer = a.jqx.get(e, "renderer");
                if (a.jqx.hasProperty(e, "align")) this.align = a.jqx.get(e, "align");
                if (a.jqx.hasProperty(e, "cellsAlign")) this.cellsalign = a.jqx.get(e, "cellsAlign");
                if (a.jqx.hasProperty(e, "cellsFormat")) this.cellsFormat = a.jqx.get(e, "cellsFormat");
                if (a.jqx.hasProperty(e, "width")) this.width = a.jqx.get(e, "width");
                if (a.jqx.hasProperty(e, "minWidth")) this.minwidth = a.jqx.get(e, "minWidth");
                if (a.jqx.hasProperty(e, "maxWidth")) this.maxwidth = a.jqx.get(e, "maxWidth");
                if (a.jqx.hasProperty(e, "cellsRenderer")) this.cellsRenderer = a.jqx.get(e, "cellsRenderer");
                if (a.jqx.hasProperty(e, "columnType")) this.columntype = a.jqx.get(e, "columnType");
                if (a.jqx.hasProperty(e, "pinned")) this.pinned = a.jqx.get(e, "pinned");
                if (a.jqx.hasProperty(e, "filterable")) this.filterable = a.jqx.get(e, "filterable");
                if (a.jqx.hasProperty(e, "filter")) this.filter = a.jqx.get(e, "filter");
                if (a.jqx.hasProperty(e, "resizable")) this.resizable = a.jqx.get(e, "resizable");
                if (a.jqx.hasProperty(e, "draggable")) this.draggable = a.jqx.get(e, "draggable");
                if (a.jqx.hasProperty(e, "editable")) this.editable = a.jqx.get(e, "editable");
                if (a.jqx.hasProperty(e, "initEditor")) this.initeditor = a.jqx.get(e, "initEditor");
                if (a.jqx.hasProperty(e, "createEditor")) this.createeditor = a.jqx.get(e, "createEditor");
                if (a.jqx.hasProperty(e, "destroyEditor")) this.destroyeditor = a.jqx.get(e, "destroyEditor");
                if (a.jqx.hasProperty(e, "getEditorValue")) this.geteditorvalue = a.jqx.get(e, "getEditorValue");
                if (a.jqx.hasProperty(e, "className")) this.classname = a.jqx.get(e, "className");
                if (a.jqx.hasProperty(e, "cellClassName")) this.cellclassname = a.jqx.get(e, "cellClassName");
                if (a.jqx.hasProperty(e, "rendered")) this.rendered = a.jqx.get(e, "rendered");
                if (a.jqx.hasProperty(e, "exportable")) this.exportable = a.jqx.get(e, "exportable");
                if (a.jqx.hasProperty(e, "nullable")) this.nullable = a.jqx.get(e, "nullable");
                if (a.jqx.hasProperty(e, "columnGroup")) this.columngroup = a.jqx.get(e, "columnGroup");
                if (!e instanceof String && !(typeof e == "string")) {
                    for (var f in e) {
                        if (!d.hasOwnProperty(f)) {
                            if (!d.hasOwnProperty(f.toLowerCase())) {
                                b.host.remove();
                                throw new Error("Nombre de propiedad inválido - " + f + ".");
                            }
                        }
                    }
                }
            }
        };
        this._initfields(c);
        return this;
    };
    a.jqx.schedulerDataCollection = function(b) {
        this.records = new Array();
        this.owner = b;
        this.updating = false;
        this.beginUpdate = function() {
            this.updating = true;
        };
        this.resumeupdate = function() {
            this.updating = false;
        };
        this.clear = function() {
            this.records = new Array();
        };
        this.replace = function(d, c) {
            this.records[d] = c;
        };
        this.isempty = function(c) {
            if (this.records[c] == undefined) return true;
            return false;
        };
        this.initialize = function(c) {
            if (c < 1) c = 1;
            this.records[c - 1] = -1;
        };
        this.length = function() {
            return this.records.length;
        };
        this.indexOf = function(c) {
            return this.records.indexOf(c);
        };
        this.add = function(c) {
            if (c == null) return false;
            this.records[this.records.length] = c;
            return true;
        };
        this.insertAt = function(d, c) {
            if (d == null || d == undefined) return false;
            if (c == null) return false;
            if (d >= 0) {
                if (d < this.records.length) {
                    this.records.splice(d, 0, c);
                    return true;
                } else {
                    return this.add(c);
                }
            }
            return false;
        };
        this.remove = function(d) {
            if (d == null || d == undefined) return false;
            var c = this.records.indexOf(d);
            if (c != -1) {
                this.records.splice(c, 1);
                return true;
            }
            return false;
        };
        this.removeAt = function(d) {
            if (d == null || d == undefined) return false;
            if (d < 0) return false;
            if (d < this.records.length) {
                var c = this.records[d];
                this.records.splice(d, 1);
                return true;
            }
            return false;
        };
        return this;
    };
    a.jqx.scheduler.dataView = function(b) {
        this.that = this;
        this.scheduler = null;
        this.records = [];
        this.rows = [];
        this.columns = [];
        this.filters = new Array();
        this.pagesize = 0;
        this.pagenum = 0;
        this.source = null;
        this.databind = function(c, i) {
            var l = this;
            if (a.isArray(c)) {
                l.update(c);
                return;
            }
            var j = c._source ? true : false;
            var e = null;
            this._sortData = null;
            this._sortHierarchyData = null;
            if (j) {
                e = c;
                c = c._source;
            } else {
                e = new a.jqx.dataAdapter(c, {
                    autoBind: false
                })
            }
            var f = function(p) {
                e.recordids = [];
                e.records = new Array();
                e.cachedrecords = new Array();
                e.originaldata = new Array();
                e._options.totalrecords = p.totalrecords;
                e._options.originaldata = p.originaldata;
                e._options.recordids = p.recordids;
                e._options.cachedrecords = new Array();
                e._options.pagenum = p.pagenum;
                e._options.pageable = p.pageable;
                if (c.type != undefined) e._options.type = c.type;
                if (c.formatdata != undefined) e._options.formatData = c.formatdata;
                if (c.contenttype != undefined) e._options.contentType = c.contenttype;
                if (c.async != undefined) e._options.async = c.async;
                if (c.updaterow != undefined) e._options.updaterow = c.updaterow;
                if (c.addrow != undefined) e._options.addrow = c.addrow;
                if (c.deleterow != undefined) e._options.deleterow = c.deleterow;
                if (p.pagesize == 0) p.pagesize = 10;
                e._options.pagesize = p.pagesize;
            };
            var m = function(p) {
                p.originaldata = e.originaldata;
                p.records = e.records;
                p.hierarchy = e.hierarchy;
                if (!p.scheduler.serverProcessing) {
                    p._sortData = null;
                    p._sortfield = null;
                    p._filteredData = null;
                    p._sortHierarchyData = null;
                }
                if (!p.hierarchy) {
                    p.hierarchy = new Array();
                    e.hierarchy = new Array();
                }
                if (e._source.totalrecords) {
                    p.totalrecords = e._source.totalrecords;
                } else {
                    if (e._source.totalRecords) {
                        p.totalrecords = e._source.totalRecords;
                    } else {
                        if (p.hierarchy.length !== 0) p.totalrecords = p.hierarchy.length;
                        else p.totalrecords = p.records.length;
                    }
                }
                p.cachedrecords = e.cachedrecords;
            };
            f(this);
            this.source = c;
            if (i !== undefined) var n = i
            var l = this;
            switch (c.datatype) {
                case "local":
                case "array":
                default:
                    if (c.localdata == null) c.localdata = [];
                    if (c.localdata != null) {
                        e.unbindBindingUpdate(b + l.scheduler.element.id);
                        if ((!l.scheduler.autoBind && l.scheduler.isInitialized) || l.scheduler.autoBind) {
                            e.dataBind();
                        }
                        var k = function() {
                            m(l);
                            l.update(e.records);
                        };
                        k();
                        e.bindBindingUpdate(b + l.scheduler.element.id, k);
                    }
                    break;
                case "ics":
                case "json":
                case "jsonp":
                case "xml":
                case "xhtml":
                case "script":
                case "text":
                case "csv":
                case "tab":
                    if (c.localdata != null) {
                        e.unbindBindingUpdate(b + l.scheduler.element.id);
                        if ((!l.scheduler.autoBind && l.scheduler.isInitialized) || l.scheduler.autoBind) {
                            e.dataBind();
                        }
                        var k = function(p) {
                            m(l);
                            l.update(e.records);
                        };
                        k();
                        e.bindBindingUpdate(b + l.scheduler.element.id, k);
                        return;
                    }
                    var h = {};
                    var g = 0;
                    var o = {};
                    var d = e._options.data;
                    if (e._options.data) {
                        a.extend(e._options.data, o);
                    } else {
                        if (c.data) a.extend(o, c.data);
                        e._options.data = o;
                    }
                    var k = function() {
                        var q = a.jqx.browser.msie && a.jqx.browser.version < 9;
                        var r = function() {
                            m(l);
                            l.update(e.records)
                        };
                        if (q) {
                            try {
                                r();
                            } catch (p) {}
                        } else {
                            r();
                        }
                    };
                    e.unbindDownloadComplete(b + l.scheduler.element.id);
                    e.bindDownloadComplete(b + l.scheduler.element.id, k);
                    e._source.loaderror = function(r, p, q) {
                        k()
                    };
                    if ((!l.scheduler.autoBind && l.scheduler.isInitialized) || l.scheduler.autoBind) {
                        e.dataBind();
                    }
                    e._options.data = d;
            }
        };
        this.addFilter = function(f, e) {
            this._sortData = null;
            this._sortHierarchyData = null;
            var d = -1;
            for (var c = 0; c < this.filters.length; c++) {
                if (this.filters[c].datafield == f) {
                    d = c;
                    break;
                }
            }
            if (d == -1) {
                this.filters[this.filters.length] = {
                    filter: e,
                    datafield: f
                }
            } else {
                this.filters[d] = {
                    filter: e,
                    datafield: f
                }
            }
        };
        this.removeFilter = function(d) {
            this._sortData = null;
            this._sortHierarchyData = null;
            for (var c = 0; c < this.filters.length; c++) {
                if (this.filters[c].datafield == d) {
                    this.filters.splice(c, 1);
                    break;
                }
            }
        };
        this._compare = function(d, c, f) {
            var d = d;
            var c = c;
            if (d === undefined) d = null;
            if (c === undefined) c = null;
            if (d === null && c === null) return 0;
            if (d === null && c !== null) return 1;
            if (d !== null && c === null) return 1;
            d = d.toString();
            c = c.toString();
            if (a.jqx.dataFormat) {
                if (f && f != "") {
                    switch (f) {
                        case "number":
                        case "int":
                        case "float":
                            if (d < c) return -1;
                            if (d > c) return 1;
                            return 0;
                        case "date":
                        case "time":
                            if (d < c) return -1;
                            if (d > c) return 1;
                            return 0;
                        case "string":
                        case "text":
                            d = String(d).toLowerCase();
                            c = String(c).toLowerCase();
                            break;
                    }
                } else {
                    if (a.jqx.dataFormat.isNumber(d) && a.jqx.dataFormat.isNumber(c)) {
                        if (d < c) return -1;
                        if (d > c) return 1;
                        return 0;
                    } else {
                        if (a.jqx.dataFormat.isDate(d) && a.jqx.dataFormat.isDate(c)) {
                            if (d < c) return -1;
                            if (d > c) return 1;
                            return 0;
                        } else {
                            if (!a.jqx.dataFormat.isNumber(d) && !a.jqx.dataFormat.isNumber(c)) {
                                d = String(d).toLowerCase();
                                c = String(c).toLowerCase();
                            }
                        }
                    }
                }
            }
            try {
                if (d < c) return -1;
                if (d > c) return 1;
            } catch (e) {
                var g = e;
            }
            return 0;
        };
        this._equals = function(d, c) {
            return (this._compare(d, c) === 0);
        };
        this.evaluate = function(l) {
            if (this.scheduler.serverProcessing) return l;
            var c = new Array();
            if (this.filters.length) {
                var f = new Array();
                var k = function(o, s) {
                    for (var q = 0; q < o.length; q++) {
                        var r = o[q];
                        r._visible = true;
                        var m = undefined;
                        for (var p = 0; p < this.filters.length; p++) {
                            var n = this.filters[p].filter;
                            var t = r[this.filters[p].datafield];
                            var u = n.evaluate(t);
                            if (m == undefined) {
                                m = u;
                            } else {
                                if (n.operator == "or") m = m || u;
                                else m = m && u;
                            }
                        }
                        r._visible = false;
                        if (m || r.aggregate) {
                            r._visible = true;
                            s.push(r);
                            f[r.uid] = r;
                        }
                    }
                };
                if (!this._filteredData) {
                    if (this.source.hierarchy || (this.scheduler.source.hierarchy && this.scheduler.source.hierarchy.length > 0)) {
                        var j = new Array();
                        var g = function(n, o) {
                            for (var m = 0; m < o.length; m++) {
                                var p = o[m];
                                j.push(p);
                                if (p.records && p.records.length > 0) g(p, p.records);
                            }
                        };
                        g(null, l);
                        k.call(this, j, c);
                        for (var d = 0; d < c.length; d++) {
                            var e = c[d];
                            while (e.parent) {
                                var h = e.parent;
                                if (!f[h.uid]) {
                                    h._visible = true;
                                    f[h.uid] = h;
                                }
                                e = h;
                            }
                        }
                        c = l;
                    } else {
                        k.call(this, l, c);
                    }
                    this._filteredData = c;
                    this.rows = c;
                } else {
                    this.rows = this._filteredData;
                }
            } else {
                this.rows = l;
            }
            return this.rows;
        };
        this.getid = function(j, d, e) {
            if (a(j, d).length > 0) return a(j, d).text();
            if (this.rows && j != "" && j != undefined && this.rows.length > 0) {
                var h = this.rows[this.rows.length - 1][j];
                if (h == null) h = null;
                for (var f = 1; f <= 100; f++) {
                    var g = this.scheduler.appointmentsByKey[f + h];
                    if (!g) {
                        if (this.scheduler && this.scheduler.treeGrid && this.scheduler.treescheduler.virtualModeCreateRecords) {
                            var g = this.scheduler.appointmentsByKey["jqx" + h + f];
                            if (g) continue;
                            return "jqx" + h + f;
                        }
                        return h + f;
                    }
                }
            }
            if (j != undefined) {
                if (j.toString().length > 0) {
                    var c = a(d).attr(j);
                    if (c != null && c.toString().length > 0) {
                        if (this.scheduler && this.scheduler.treeGrid && this.scheduler.treescheduler.virtualModeCreateRecords) {
                            return "jqx" + c;
                        }
                        return c;
                    }
                }
            }
            if (this.rows && this.rows.length > 0) {
                var g = this.scheduler.appointmentsByKey[e];
                if (g) {
                    var h = this.rows[this.rows.length - 1][j];
                    if (h == null) h = "";
                    for (var f = 1; f <= 1000; f++) {
                        var g = this.scheduler.appointmentsByKey[f + h];
                        if (!g) {
                            if (this.scheduler && this.scheduler.treeGrid && this.scheduler.treescheduler.virtualModeCreateRecords) {
                                var g = this.scheduler.appointmentsByKey["jqx" + h + f];
                                if (g) continue;
                                return "jqx" + h + f;
                            }
                            return h + f;
                        }
                    }
                }
            }
            if (this.scheduler && this.scheduler.treeGrid && this.scheduler.treescheduler.virtualModeCreateRecords) {
                var g = this.scheduler.appointmentsByKey["jqx" + e];
                if (!g) {
                    return "jqx" + e;
                } else {
                    for (var f = e + 1; f <= 100; f++) {
                        var g = this.scheduler.appointmentsByKey["jqx" + f];
                        if (!g) {
                            var g = this.scheduler.appointmentsByKey["jqx" + f];
                            if (g) continue;
                            return "jqx" + f;
                        }
                    }
                }
            }
            return e;
        };
        this.generatekey = function() {
            var c = function() {
                return (((1 + Math.random()) * 16) | 0)
            };
            return ("" + c() + c() + "-" + c() + "-" + c() + "-" + c() + "-" + c());
        };
        return this;
    }
})(jqxBaseFramework);