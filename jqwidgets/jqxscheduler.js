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
    a.jqx.jqxWidget("jqxScheduler", "", {});
    a.extend(a.jqx._jqxScheduler.prototype, {
        defineInstance: function() {
            var b = {
                altRows: false,
                autoShowLoadElement: true,
                columnsHeight: 30,
                columns: [],
                columnGroups: null,
                dataview: null,
                disabled: false,
                enableHover: true,
                appointmentOpacity: 0.8,
                headerZIndex: 235,
                height: 600,
                timeRulerWidth: 60,
                loadingErrorMessage: "The data is still loading and you cannot set a property or call a method. You can do that once the data binding is completed. jqxScheduler raises the 'bindingComplete' event when the binding is completed.",
                localization: null,
                ready: null,
                renderToolBar: null,
                renderAppointment: null,
                rendered: null,
                rendering: null,
                rtl: false,
                showToolbar: true,
                showLegend: false,
                legendPosition: "bottom",
                legendHeight: 34,
                rowsHeight: 27,
                touchRowsHeight: 36,
                appointmentsMinHeight: 18,
                touchAppointmentsMinHeight: 27,
                appointmentsRenderMode: "default",
                serverProcessing: false,
                selectionMode: "multiplerows",
                scrollBarSize: a.jqx.utilities.scrollBarSize,
                touchScrollBarSize: a.jqx.utilities.touchScrollBarSize,
                showHeader: true,
                maxHeight: 999999,
                maxWidth: 999999,
                autoBind: true,
                showAllDayRow: true,
                changedAppointments: new Array(),
                renderMode: "simple",
                views: new Array(),
                view: 0,
                min: new a.jqx.date(0),
                max: new a.jqx.date(9999, 12, 31),
                date: new a.jqx.date("todayDate"),
                colors: ["#307DD7", "#AA4643", "#89A54E", "#71588F", "#4198AF", "#7FD13B", "#EA157A", "#FEB80A", "#00ADDC", "#738AC8", "#E8601A", "#FF9639", "#F5BD6A", "#599994", "#115D6E", "#D02841", "#FF7C41", "#FFC051", "#5B5F4D", "#364651", "#25A0DA", "#309B46", "#8EBC00", "#FF7515", "#FFAE00", "#0A3A4A", "#196674", "#33A6B2", "#9AC836", "#D0E64B", "#CC6B32", "#FFAB48", "#FFE7AD", "#A7C9AE", "#888A63", "#3F3943", "#01A2A6", "#29D9C2", "#BDF271", "#FFFFA6", "#1B2B32", "#37646F", "#A3ABAF", "#E1E7E8", "#B22E2F", "#5A4B53", "#9C3C58", "#DE2B5B", "#D86A41", "#D2A825", "#993144", "#FFA257", "#CCA56A", "#ADA072", "#949681", "#105B63", "#EEEAC5", "#FFD34E", "#DB9E36", "#BD4932", "#BBEBBC", "#F0EE94", "#F5C465", "#FA7642", "#FF1E54", "#60573E", "#F2EEAC", "#BFA575", "#A63841", "#BFB8A3", "#444546", "#FFBB6E", "#F28D00", "#D94F00", "#7F203B", "#583C39", "#674E49", "#948658", "#F0E99A", "#564E49", "#142D58", "#447F6E", "#E1B65B", "#C8782A", "#9E3E17", "#4D2B1F", "#635D61", "#7992A2", "#97BFD5", "#BFDCF5", "#844341", "#D5CC92", "#BBA146", "#897B26", "#55591C", "#56626B", "#6C9380", "#C0CA55", "#F07C6C", "#AD5472", "#96003A", "#FF7347", "#FFBC7B", "#FF4154", "#642223", "#5D7359", "#E0D697", "#D6AA5C", "#8C5430", "#661C0E", "#16193B", "#35478C", "#4E7AC7", "#7FB2F0", "#ADD5F7", "#7B1A25", "#BF5322", "#9DA860", "#CEA457", "#B67818", "#0081DA", "#3AAFFF", "#99C900", "#FFEB3D", "#309B46", "#0069A5", "#0098EE", "#7BD2F6", "#FFB800", "#FF6800", "#FF6800", "#A0A700", "#FF8D00", "#678900", "#0069A5"],
                colorSchemes: [{
                    name: "scheme01",
                    colors: ["#307DD7", "#AA4643", "#89A54E", "#71588F", "#4198AF"]
                }, {
                    name: "scheme02",
                    colors: ["#7FD13B", "#EA157A", "#FEB80A", "#00ADDC", "#738AC8"]
                }, {
                    name: "scheme03",
                    colors: ["#E8601A", "#FF9639", "#F5BD6A", "#599994", "#115D6E"]
                }, {
                    name: "scheme04",
                    colors: ["#D02841", "#FF7C41", "#FFC051", "#5B5F4D", "#364651"]
                }, {
                    name: "scheme05",
                    colors: ["#25A0DA", "#309B46", "#8EBC00", "#FF7515", "#FFAE00"]
                }, {
                    name: "scheme06",
                    colors: ["#0A3A4A", "#196674", "#33A6B2", "#9AC836", "#D0E64B"]
                }, {
                    name: "scheme07",
                    colors: ["#CC6B32", "#FFAB48", "#FFE7AD", "#A7C9AE", "#888A63"]
                }, {
                    name: "scheme08",
                    colors: ["#3F3943", "#01A2A6", "#29D9C2", "#BDF271", "#FFFFA6"]
                }, {
                    name: "scheme09",
                    colors: ["#1B2B32", "#37646F", "#A3ABAF", "#E1E7E8", "#B22E2F"]
                }, {
                    name: "scheme10",
                    colors: ["#5A4B53", "#9C3C58", "#DE2B5B", "#D86A41", "#D2A825"]
                }, {
                    name: "scheme11",
                    colors: ["#993144", "#FFA257", "#CCA56A", "#ADA072", "#949681"]
                }, {
                    name: "scheme12",
                    colors: ["#105B63", "#EEEAC5", "#FFD34E", "#DB9E36", "#BD4932"]
                }, {
                    name: "scheme13",
                    colors: ["#BBEBBC", "#F0EE94", "#F5C465", "#FA7642", "#FF1E54"]
                }, {
                    name: "scheme14",
                    colors: ["#60573E", "#F2EEAC", "#BFA575", "#A63841", "#BFB8A3"]
                }, {
                    name: "scheme15",
                    colors: ["#444546", "#FFBB6E", "#F28D00", "#D94F00", "#7F203B"]
                }, {
                    name: "scheme16",
                    colors: ["#583C39", "#674E49", "#948658", "#F0E99A", "#564E49"]
                }, {
                    name: "scheme17",
                    colors: ["#142D58", "#447F6E", "#E1B65B", "#C8782A", "#9E3E17"]
                }, {
                    name: "scheme18",
                    colors: ["#4D2B1F", "#635D61", "#7992A2", "#97BFD5", "#BFDCF5"]
                }, {
                    name: "scheme19",
                    colors: ["#844341", "#D5CC92", "#BBA146", "#897B26", "#55591C"]
                }, {
                    name: "scheme20",
                    colors: ["#56626B", "#6C9380", "#C0CA55", "#F07C6C", "#AD5472"]
                }, {
                    name: "scheme21",
                    colors: ["#96003A", "#FF7347", "#FFBC7B", "#FF4154", "#642223"]
                }, {
                    name: "scheme22",
                    colors: ["#5D7359", "#E0D697", "#D6AA5C", "#8C5430", "#661C0E"]
                }, {
                    name: "scheme23",
                    colors: ["#16193B", "#35478C", "#4E7AC7", "#7FB2F0", "#ADD5F7"]
                }, {
                    name: "scheme24",
                    colors: ["#7B1A25", "#BF5322", "#9DA860", "#CEA457", "#B67818"]
                }, {
                    name: "scheme25",
                    colors: ["#0081DA", "#3AAFFF", "#99C900", "#FFEB3D", "#309B46"]
                }, {
                    name: "scheme26",
                    colors: ["#0069A5", "#0098EE", "#7BD2F6", "#FFB800", "#FF6800"]
                }, {
                    name: "scheme27",
                    colors: ["#FF6800", "#A0A700", "#FF8D00", "#678900", "#0069A5"]
                }],
                resources: null,
                contextMenu: true,
                contextMenuOpen: null,
                contextMenuClose: null,
                contextMenuItemClick: null,
                contextMenuCreate: null,
                timeZone: null,
                statuses: {
                    free: "white",
                    tentative: "tentative",
                    busy: "transparent",
                    outOfOffice: "#800080"
                },
                appointmentDataFields: {
                    from: "from",
                    to: "to",
                    id: "id",
                    calendarId: "calendarId",
                    description: "description",
                    location: "location",
                    subject: "subject",
                    background: "background",
                    color: "color",
                    borderColor: "borderColor",
                    style: "style",
                    recurrencePattern: "recurrencePattern",
                    recurrenceException: "recurrenceException",
                    draggable: "draggable",
                    resizable: "resizable",
                    resourceId: "resourceId",
                    status: "status",
                    tooltip: "tooltip",
                    hidden: "hidden",
                    allDay: "allDay",
                    timeZone: "timeZone",
                    ownerId: "ownerId"
                },
                appointmentTooltips: true,
                tableColumns: 1,
                tableRows: 1,
                dayNameFormat: "full",
                touchDayNameFormat: "abbr",
                toolBarRangeFormat: "dd MMMM yyyy",
                toolBarRangeFormatAbbr: "dd MM yyyy",
                columnRenderer: null,
                exportSettings: {
                    serverURL: null,
                    characterSet: null,
                    fileName: "jqxScheduler",
                    dateTimeFormatString: "S",
                    resourcesInMultipleICSFiles: false,
                    ICSXWRCALNAME: "jqxScheduler",
                    ICSXWRCALDESC: "jqxScheduler Description"
                },
                source: {
                    beforeprocessing: null,
                    beforesend: null,
                    loaderror: null,
                    localdata: null,
                    data: null,
                    datatype: "array",
                    datafields: [],
                    url: "",
                    root: "",
                    record: "",
                    id: "",
                    totalrecords: 0,
                    recordstartindex: 0,
                    recordendindex: 0,
                    loadallrecords: true,
                    sortcolumn: null,
                    sortdirection: null,
                    sort: null,
                    filter: null,
                    sortcomparer: null
                },
                editDialogDateTimeFormatString: "dd/MM/yyyy hh:mm tt",
                editDialogDateFormatString: "dd/MM/yyyy",
                editDialogOpen: null,
                editDialogCreate: null,
                editDialogKeyDown: null,
                editDialogClose: null,
                editDialog: true,
                toolbarHeight: 54,
                tableZIndex: 469,
                _updating: false,
                touchMode: "auto",
                width: 800,
                that: this,
                beginDrag: null,
                endDrag: null,
                dragging: null,
                timeZones: [{
                    id: "Dateline Standard Time",
                    offset: -720,
                    offsetHours: -12,
                    displayName: "(UTC-12:00) International Date Line West",
                    supportsDaylightSavingTime: false
                }, {
                    id: "UTC-11",
                    offset: -660,
                    offsetHours: -11,
                    displayName: "(UTC-11:00) Coordinated Universal Time-11",
                    supportsDaylightSavingTime: false
                }, {
                    id: "Hawaiteratoran Standard Time",
                    offset: -600,
                    offsetHours: -10,
                    displayName: "(UTC-10:00) Hawaiterator",
                    supportsDaylightSavingTime: false
                }, {
                    id: "Alaskan Standard Time",
                    offset: -540,
                    offsetHours: -9,
                    displayName: "(UTC-09:00) Alaska",
                    supportsDaylightSavingTime: true
                }, {
                    id: "Pacific Standard Time (Mexico)",
                    offset: -480,
                    offsetHours: -8,
                    displayName: "(UTC-08:00) Baja California",
                    supportsDaylightSavingTime: true
                }, {
                    id: "Pacific Standard Time",
                    offset: -480,
                    offsetHours: -8,
                    displayName: "(UTC-08:00) Pacific Time (US & Canada)",
                    supportsDaylightSavingTime: true
                }, {
                    id: "US Mountain Standard Time",
                    offset: -420,
                    offsetHours: -7,
                    displayName: "(UTC-07:00) Arizona",
                    supportsDaylightSavingTime: false
                }, {
                    id: "Mountain Standard Time (Mexico)",
                    offset: -420,
                    offsetHours: -7,
                    displayName: "(UTC-07:00) Chihuahua, La Paz, Mazatlan",
                    supportsDaylightSavingTime: true
                }, {
                    id: "Mountain Standard Time",
                    offset: -420,
                    offsetHours: -7,
                    displayName: "(UTC-07:00) Mountain Time (US & Canada)",
                    supportsDaylightSavingTime: true
                }, {
                    id: "Central Standard Time",
                    offset: -360,
                    offsetHours: -6,
                    displayName: "(UTC-06:00) Central Time (US & Canada)",
                    supportsDaylightSavingTime: true
                }, {
                    id: "Central America Standard Time",
                    offset: -360,
                    offsetHours: -6,
                    displayName: "(UTC-06:00) Central America",
                    supportsDaylightSavingTime: false
                }, {
                    id: "Canada Central Standard Time",
                    offset: -360,
                    offsetHours: -6,
                    displayName: "(UTC-06:00) Saskatchewan",
                    supportsDaylightSavingTime: false
                }, {
                    id: "Central Standard Time (Mexico)",
                    offset: -360,
                    offsetHours: -6,
                    displayName: "(UTC-06:00) Guadalajara, Mexico City, Monterrey",
                    supportsDaylightSavingTime: true
                }, {
                    id: "SA Pacific Standard Time",
                    offset: -300,
                    offsetHours: -5,
                    displayName: "(UTC-05:00) Bogota, Lima, Quito, Rio Branco",
                    supportsDaylightSavingTime: false
                }, {
                    id: "Eastern Standard Time",
                    offset: -300,
                    offsetHours: -5,
                    displayName: "(UTC-05:00) Eastern Time (US & Canada)",
                    supportsDaylightSavingTime: true
                }, {
                    id: "US Eastern Standard Time",
                    offset: -300,
                    offsetHours: -5,
                    displayName: "(UTC-05:00) Indiana (East)",
                    supportsDaylightSavingTime: true
                }, {
                    id: "Venezuela Standard Time",
                    offset: -270,
                    offsetHours: -4.5,
                    displayName: "(UTC-04:30) Caracas",
                    supportsDaylightSavingTime: false
                }, {
                    id: "Atlantic Standard Time",
                    offset: -240,
                    offsetHours: -4,
                    displayName: "(UTC-04:00) Atlantic Time (Canada)",
                    supportsDaylightSavingTime: true
                }, {
                    id: "Paraguay Standard Time",
                    offset: -240,
                    offsetHours: -4,
                    displayName: "(UTC-04:00) Asuncion",
                    supportsDaylightSavingTime: true
                }, {
                    id: "Central Brazilian Standard Time",
                    offset: -240,
                    offsetHours: -4,
                    displayName: "(UTC-04:00) Cuiaba",
                    supportsDaylightSavingTime: true
                }, {
                    id: "Pacific SA Standard Time",
                    offset: -240,
                    offsetHours: -4,
                    displayName: "(UTC-04:00) Santiago",
                    supportsDaylightSavingTime: true
                }, {
                    id: "SA Western Standard Time",
                    offset: -240,
                    offsetHours: -4,
                    displayName: "(UTC-04:00) Georgetown, La Paz, Manaus",
                    supportsDaylightSavingTime: false
                }, {
                    id: "Newfoundland Standard Time",
                    offset: -210,
                    offsetHours: -3.5,
                    displayName: "(UTC-03:30) Newfoundland",
                    supportsDaylightSavingTime: true
                }, {
                    id: "SA Eastern Standard Time",
                    offset: -180,
                    offsetHours: -3,
                    displayName: "(UTC-03:00) Cayenne, Fortaleza",
                    supportsDaylightSavingTime: false
                }, {
                    id: "Argentina Standard Time",
                    offset: -180,
                    offsetHours: -3,
                    displayName: "(UTC-03:00) Buenos Aires",
                    supportsDaylightSavingTime: true
                }, {
                    id: "E. South America Standard Time",
                    offset: -180,
                    offsetHours: -3,
                    displayName: "(UTC-03:00) Brasilia",
                    supportsDaylightSavingTime: true
                }, {
                    id: "Bahia Standard Time",
                    offset: -180,
                    offsetHours: -3,
                    displayName: "(UTC-03:00) Salvador",
                    supportsDaylightSavingTime: true
                }, {
                    id: "Montevideo Standard Time",
                    offset: -180,
                    offsetHours: -3,
                    displayName: "(UTC-03:00) Montevideo",
                    supportsDaylightSavingTime: true
                }, {
                    id: "Greenland Standard Time",
                    offset: -180,
                    offsetHours: -3,
                    displayName: "(UTC-03:00) Greenland",
                    supportsDaylightSavingTime: true
                }, {
                    id: "UTC-02",
                    offset: -120,
                    offsetHours: -2,
                    displayName: "(UTC-02:00) Coordinated Universal Time-02",
                    supportsDaylightSavingTime: false
                }, {
                    id: "Mid-Atlantic Standard Time",
                    offset: -120,
                    offsetHours: -2,
                    displayName: "(UTC-02:00) Mid-Atlantic - Old",
                    supportsDaylightSavingTime: true
                }, {
                    id: "Azores Standard Time",
                    offset: -60,
                    offsetHours: -1,
                    displayName: "(UTC-01:00) Azores",
                    supportsDaylightSavingTime: true
                }, {
                    id: "Cape Verde Standard Time",
                    offset: -60,
                    offsetHours: -1,
                    displayName: "(UTC-01:00) Cape Verde Is.",
                    supportsDaylightSavingTime: false
                }, {
                    id: "Morocco Standard Time",
                    offset: 0,
                    offsetHours: 0,
                    displayName: "(UTC) Casablanca",
                    supportsDaylightSavingTime: true
                }, {
                    id: "UTC",
                    offset: 0,
                    offsetHours: 0,
                    displayName: "(UTC) Coordinated Universal Time",
                    supportsDaylightSavingTime: false
                }, {
                    id: "GMT Standard Time",
                    offset: 0,
                    offsetHours: 0,
                    displayName: "(UTC) Dublin, Edinburgh, Lisbon, London",
                    supportsDaylightSavingTime: true
                }, {
                    id: "Greenwich Standard Time",
                    offset: 0,
                    offsetHours: 0,
                    displayName: "(UTC) Monrovia, Reykjavik",
                    supportsDaylightSavingTime: false
                }, {
                    id: "Central European Standard Time",
                    offset: 60,
                    offsetHours: 1,
                    displayName: "(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb",
                    supportsDaylightSavingTime: true
                }, {
                    id: "Namibia Standard Time",
                    offset: 60,
                    offsetHours: 1,
                    displayName: "(UTC+01:00) Windhoek",
                    supportsDaylightSavingTime: true
                }, {
                    id: "W. Central Africa Standard Time",
                    offset: 60,
                    offsetHours: 1,
                    displayName: "(UTC+01:00) West Central Africa",
                    supportsDaylightSavingTime: false
                }, {
                    id: "W. Europe Standard Time",
                    offset: 60,
                    offsetHours: 1,
                    displayName: "(UTC+01:00) Amsterdam, Berlin, Rome",
                    supportsDaylightSavingTime: true
                }, {
                    id: "Central Europe Standard Time",
                    offset: 60,
                    offsetHours: 1,
                    displayName: "(UTC+01:00) Belgrade, Budapest, Prague",
                    supportsDaylightSavingTime: true
                }, {
                    id: "Romance Standard Time",
                    offset: 60,
                    offsetHours: 1,
                    displayName: "(UTC+01:00) Brussels, Copenhagen, Madrid, Paris",
                    supportsDaylightSavingTime: true
                }, {
                    id: "FLE Standard Time",
                    offset: 120,
                    offsetHours: 2,
                    displayName: "(UTC+02:00) Helsinki, Kyiv, Riga, Sofia",
                    supportsDaylightSavingTime: true
                }, {
                    id: "South Africa Standard Time",
                    offset: 120,
                    offsetHours: 2,
                    displayName: "(UTC+02:00) Harare, Pretoria",
                    supportsDaylightSavingTime: false
                }, {
                    id: "Turkey Standard Time",
                    offset: 120,
                    offsetHours: 2,
                    displayName: "(UTC+02:00) Istanbul",
                    supportsDaylightSavingTime: true
                }, {
                    id: "GTB Standard Time",
                    offset: 120,
                    offsetHours: 2,
                    displayName: "(UTC+02:00) Athens, Bucharest",
                    supportsDaylightSavingTime: true
                }, {
                    id: "Libya Standard Time",
                    offset: 120,
                    offsetHours: 2,
                    displayName: "(UTC+02:00) Tripoli",
                    supportsDaylightSavingTime: true
                }, {
                    id: "E. Europe Standard Time",
                    offset: 120,
                    offsetHours: 2,
                    displayName: "(UTC+02:00) E. Europe",
                    supportsDaylightSavingTime: true
                }, {
                    id: "Jordan Standard Time",
                    offset: 120,
                    offsetHours: 2,
                    displayName: "(UTC+02:00) Amman",
                    supportsDaylightSavingTime: true
                }, {
                    id: "Middle East Standard Time",
                    offset: 120,
                    offsetHours: 2,
                    displayName: "(UTC+02:00) Beirut",
                    supportsDaylightSavingTime: true
                }, {
                    id: "Egypt Standard Time",
                    offset: 120,
                    offsetHours: 2,
                    displayName: "(UTC+02:00) Cairo",
                    supportsDaylightSavingTime: true
                }, {
                    id: "Syria Standard Time",
                    offset: 120,
                    offsetHours: 2,
                    displayName: "(UTC+02:00) Damascus",
                    supportsDaylightSavingTime: true
                }, {
                    id: "Israel Standard Time",
                    offset: 120,
                    offsetHours: 2,
                    displayName: "(UTC+02:00) Jerusalem",
                    supportsDaylightSavingTime: true
                }, {
                    id: "Arab Standard Time",
                    offset: 180,
                    offsetHours: 3,
                    displayName: "(UTC+03:00) Kuwait, Riyadh",
                    supportsDaylightSavingTime: false
                }, {
                    id: "E. Africa Standard Time",
                    offset: 180,
                    offsetHours: 3,
                    displayName: "(UTC+03:00) Nairobi",
                    supportsDaylightSavingTime: false
                }, {
                    id: "Arabic Standard Time",
                    offset: 180,
                    offsetHours: 3,
                    displayName: "(UTC+03:00) Baghdad",
                    supportsDaylightSavingTime: true
                }, {
                    id: "Kaliningrad Standard Time",
                    offset: 180,
                    offsetHours: 3,
                    displayName: "(UTC+03:00) Kaliningrad, Minsk",
                    supportsDaylightSavingTime: true
                }, {
                    id: "Iran Standard Time",
                    offset: 210,
                    offsetHours: 3.5,
                    displayName: "(UTC+03:30) Tehran",
                    supportsDaylightSavingTime: true
                }, {
                    id: "Mauritius Standard Time",
                    offset: 240,
                    offsetHours: 4,
                    displayName: "(UTC+04:00) Port Louis",
                    supportsDaylightSavingTime: true
                }, {
                    id: "Georgian Standard Time",
                    offset: 240,
                    offsetHours: 4,
                    displayName: "(UTC+04:00) Tbilisi",
                    supportsDaylightSavingTime: false
                }, {
                    id: "Caucasus Standard Time",
                    offset: 240,
                    offsetHours: 4,
                    displayName: "(UTC+04:00) Yerevan",
                    supportsDaylightSavingTime: true
                }, {
                    id: "Arabian Standard Time",
                    offset: 240,
                    offsetHours: 4,
                    displayName: "(UTC+04:00) Abu Dhabi, Muscat",
                    supportsDaylightSavingTime: false
                }, {
                    id: "Azerbaijan Standard Time",
                    offset: 240,
                    offsetHours: 4,
                    displayName: "(UTC+04:00) Baku",
                    supportsDaylightSavingTime: true
                }, {
                    id: "Russian Standard Time",
                    offset: 240,
                    offsetHours: 4,
                    displayName: "(UTC+04:00) Moscow, St. Petersburg, Volgograd",
                    supportsDaylightSavingTime: true
                }, {
                    id: "Afghanistan Standard Time",
                    offset: 270,
                    offsetHours: 4.5,
                    displayName: "(UTC+04:30) Kabul",
                    supportsDaylightSavingTime: false
                }, {
                    id: "Pakistan Standard Time",
                    offset: 300,
                    offsetHours: 5,
                    displayName: "(UTC+05:00) Islamabad, Karachi",
                    supportsDaylightSavingTime: true
                }, {
                    id: "West Asia Standard Time",
                    offset: 300,
                    offsetHours: 5,
                    displayName: "(UTC+05:00) Ashgabat, Tashkent",
                    supportsDaylightSavingTime: false
                }, {
                    id: "India Standard Time",
                    offset: 330,
                    offsetHours: 5.5,
                    displayName: "(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi",
                    supportsDaylightSavingTime: false
                }, {
                    id: "Sri Lanka Standard Time",
                    offset: 330,
                    offsetHours: 5.5,
                    displayName: "(UTC+05:30) Sri Jayawardenepura",
                    supportsDaylightSavingTime: false
                }, {
                    id: "Nepal Standard Time",
                    offset: 345,
                    offsetHours: 5.75,
                    displayName: "(UTC+05:45) Kathmandu",
                    supportsDaylightSavingTime: false
                }, {
                    id: "Central Asia Standard Time",
                    offset: 360,
                    offsetHours: 6,
                    displayName: "(UTC+06:00) Astana",
                    supportsDaylightSavingTime: false
                }, {
                    id: "Bangladesh Standard Time",
                    offset: 360,
                    offsetHours: 6,
                    displayName: "(UTC+06:00) Dhaka",
                    supportsDaylightSavingTime: true
                }, {
                    id: "Ekaterinburg Standard Time",
                    offset: 360,
                    offsetHours: 6,
                    displayName: "(UTC+06:00) Ekaterinburg",
                    supportsDaylightSavingTime: true
                }, {
                    id: "Myanmar Standard Time",
                    offset: 390,
                    offsetHours: 6.5,
                    displayName: "(UTC+06:30) Yangon (Rangoon)",
                    supportsDaylightSavingTime: false
                }, {
                    id: "SE Asia Standard Time",
                    offset: 420,
                    offsetHours: 7,
                    displayName: "(UTC+07:00) Bangkok, Hanoi, Jakarta",
                    supportsDaylightSavingTime: false
                }, {
                    id: "N. Central Asia Standard Time",
                    offset: 420,
                    offsetHours: 7,
                    displayName: "(UTC+07:00) Novosibirsk",
                    supportsDaylightSavingTime: true
                }, {
                    id: "Ulaanbaatar Standard Time",
                    offset: 480,
                    offsetHours: 8,
                    displayName: "(UTC+08:00) Ulaanbaatar",
                    supportsDaylightSavingTime: false
                }, {
                    id: "China Standard Time",
                    offset: 480,
                    offsetHours: 8,
                    displayName: "(UTC+08:00) Beijing, Chongqing, Hong Kong",
                    supportsDaylightSavingTime: false
                }, {
                    id: "Singapore Standard Time",
                    offset: 480,
                    offsetHours: 8,
                    displayName: "(UTC+08:00) Kuala Lumpur, Singapore",
                    supportsDaylightSavingTime: false
                }, {
                    id: "North Asia Standard Time",
                    offset: 480,
                    offsetHours: 8,
                    displayName: "(UTC+08:00) Krasnoyarsk",
                    supportsDaylightSavingTime: true
                }, {
                    id: "Taipei Standard Time",
                    offset: 480,
                    offsetHours: 8,
                    displayName: "(UTC+08:00) Taipei",
                    supportsDaylightSavingTime: false
                }, {
                    id: "W. Australia Standard Time",
                    offset: 480,
                    offsetHours: 8,
                    displayName: "(UTC+08:00) Perth",
                    supportsDaylightSavingTime: true
                }, {
                    id: "Korea Standard Time",
                    offset: 540,
                    offsetHours: 9,
                    displayName: "(UTC+09:00) Seoul",
                    supportsDaylightSavingTime: false
                }, {
                    id: "North Asia East Standard Time",
                    offset: 540,
                    offsetHours: 9,
                    displayName: "(UTC+09:00) Irkutsk",
                    supportsDaylightSavingTime: true
                }, {
                    id: "Tokyo Standard Time",
                    offset: 540,
                    offsetHours: 9,
                    displayName: "(UTC+09:00) Osaka, Sapporo, Tokyo",
                    supportsDaylightSavingTime: false
                }, {
                    id: "AUS Central Standard Time",
                    offset: 570,
                    offsetHours: 9.5,
                    displayName: "(UTC+09:30) Darwin",
                    supportsDaylightSavingTime: false
                }, {
                    id: "Cen. Australia Standard Time",
                    offset: 570,
                    offsetHours: 9.5,
                    displayName: "(UTC+09:30) Adelaide",
                    supportsDaylightSavingTime: true
                }, {
                    id: "West Pacific Standard Time",
                    offset: 600,
                    offsetHours: 10,
                    displayName: "(UTC+10:00) Guam, Port Moresby",
                    supportsDaylightSavingTime: false
                }, {
                    id: "Tasmania Standard Time",
                    offset: 600,
                    offsetHours: 10,
                    displayName: "(UTC+10:00) Hobart",
                    supportsDaylightSavingTime: true
                }, {
                    id: "E. Australia Standard Time",
                    offset: 600,
                    offsetHours: 10,
                    displayName: "(UTC+10:00) Brisbane",
                    supportsDaylightSavingTime: false
                }, {
                    id: "AUS Eastern Standard Time",
                    offset: 600,
                    offsetHours: 10,
                    displayName: "(UTC+10:00) Canberra, Melbourne, Sydney",
                    supportsDaylightSavingTime: true
                }, {
                    id: "Yakutsk Standard Time",
                    offset: 600,
                    offsetHours: 10,
                    displayName: "(UTC+10:00) Yakutsk",
                    supportsDaylightSavingTime: true
                }, {
                    id: "Vladivostok Standard Time",
                    offset: 660,
                    offsetHours: 11,
                    displayName: "(UTC+11:00) Vladivostok",
                    supportsDaylightSavingTime: true
                }, {
                    id: "Central Pacific Standard Time",
                    offset: 660,
                    offsetHours: 11,
                    displayName: "(UTC+11:00) Solomon Is., New Caledonia",
                    supportsDaylightSavingTime: false
                }, {
                    id: "Magadan Standard Time",
                    offset: 720,
                    offsetHours: 12,
                    displayName: "(UTC+12:00) Magadan",
                    supportsDaylightSavingTime: true
                }, {
                    id: "Kamchatka Standard Time",
                    offset: 720,
                    offsetHours: 12,
                    displayName: "(UTC+12:00) Petropavlovsk-Kamchatsky - Old",
                    supportsDaylightSavingTime: true
                }, {
                    id: "Fiji Standard Time",
                    offset: 720,
                    offsetHours: 12,
                    displayName: "(UTC+12:00) Fiji",
                    supportsDaylightSavingTime: true
                }, {
                    id: "New Zealand Standard Time",
                    offset: 720,
                    offsetHours: 12,
                    displayName: "(UTC+12:00) Auckland, Wellington",
                    supportsDaylightSavingTime: true
                }, {
                    id: "UTC+12",
                    offset: 720,
                    offsetHours: 12,
                    displayName: "(UTC+12:00) Coordinated Universal Time+12",
                    supportsDaylightSavingTime: false
                }, {
                    id: "Tonga Standard Time",
                    offset: 780,
                    offsetHours: 13,
                    displayName: "(UTC+13:00) Nuku'alofa",
                    supportsDaylightSavingTime: false
                }, {
                    id: "Samoa Standard Time",
                    offset: 780,
                    offsetHours: 13,
                    displayName: "(UTC+13:00) Samoa",
                    supportsDaylightSavingTime: true
                }]
            };
            if (this === a.jqx._jqxScheduler.prototype) {
                return b
            }
            a.extend(true, this, b);
            this.that = this;
            return b
        },
        createInstance: function(c) {
            var e = this;
            e._views = new Array();
            e._view = e.view;
            for (var d = 0; d < e.views.length; d++) {
                if (a.type(e.views[d]) === "string") {
                    e._views.push({
                        type: e.views[d]
                    })
                } else {
                    e._views.push(e.views[d])
                }
            }
            for (var d = 0; d < e._views.length; d++) {
                if (e._views[d].type == e.view) {
                    e._view = d;
                    break
                }
            }
            if (a.jqx.utilities.scrollBarSize != 15) {
                e.scrollBarSize = a.jqx.utilities.scrollBarSize
            }
            if (e.source && !e.source.dataBind) {
                e.source = new a.jqx.dataAdapter(e.source)
            }
            var b = e.source._source.datafields;
            if (b && b.length > 0) {
                e._camelCase = e.source._source.dataFields !== undefined;
                e.selectionMode = e.selectionMode.toLowerCase()
            }
            if (e.host.attr("tabindex") == null) {
                e.host.attr("tabindex", "0")
            }
            e.host.attr("role", "grid");
            e.host.attr("align", "left");
            e.host.addClass(e.toTP("jqx-grid"));
            e.host.addClass(e.toTP("jqx-scheduler"));
            e.host.addClass(e.toTP("jqx-reset"));
            e.host.addClass(e.toTP("jqx-rc-all"));
            e.host.addClass(e.toTP("jqx-widget"));
            e.host.addClass(e.toTP("jqx-widget-content jqx-disableselect"));
            if (e._testmodules()) {
                return
            }
            e.overlay = a("<div style='z-index: 999; position:absolute;'></div>");
            e.overlay.hide();
            e.overlay.appendTo(e.host);
            e.render(true);
            a.jqx.utilities.resize(e.host, function() {
                var h = a(window).width();
                var f = a(window).height();
                e._hostWidth = null;
                e._hostHeight = null;
                var g = e.host.width();
                var i = e.host.height();
                e._hostWidth = g;
                e._hostHeight = i;
                if (e._lastHostWidth != g || e._lastHostHeight != i) {
                    e._updatesize(e._lastHostWidth != g, e._lastHostHeight != i)
                }
                e._lastWidth = h;
                e._lastHeight = f;
                e._lastHostWidth = g;
                e._lastHostHeight = i
            });
            e.createEditRecurrenceDialog()
        },
        createEditRecurrenceDialog: function() {
            var d = this;
            d.editRecurrenceDialog = null;
            var b = a("<div><div>" + d.schedulerLocalization.editRecurringAppointmentDialogTitleString + "</div><div><div>" + d.schedulerLocalization.editRecurringAppointmentDialogContentString + "</div><div style='position: absolute; white-space:nowrap; text-overflow: ellipsis; left:0px; width:100%; bottom: 0px;'><button title='" + d.schedulerLocalization.editRecurringAppointmentDialogOccurrenceString + "' id='editRecurringAppointmentOccurrence." + d.element.id + "' style='white-space:nowrap; text-overflow: ellipsis; border-left-width: 0px;  border-bottom-width: 0px; border-radius:0px; width:50%;'>" + d.schedulerLocalization.editRecurringAppointmentDialogOccurrenceString + "</button><button title='" + d.schedulerLocalization.editRecurringAppointmentDialogSeriesString + "' id='editRecurringAppointmentSeries." + d.element.id + "' style=' white-space:nowrap; text-overflow: ellipsis; border-bottom-width: 0px;  border-left-width: 0px; border-right-width:0px; width:50%; border-radius:0px;'>" + d.schedulerLocalization.editRecurringAppointmentDialogSeriesString + "</button></div></div></div>");
            d.editRecurrenceDialog = b;
            a(b).jqxWindow({
                rtl: d.rtl,
                autoFocus: false,
                animationType: "none",
                autoOpen: false,
                theme: d.theme,
                minWidth: 300,
                minHeight: 110,
                resizable: false
            });
            var c = b.find("button");
            c.jqxButton({
                theme: d.theme,
                width: "50%"
            });
            var e = false;
            c.mousedown(function() {
                e = true;
                var f = this.id;
                if (f.indexOf("editRecurringAppointmentOccurrence") >= 0) {
                    d.editSeries(false)
                } else {
                    d.editSeries(true)
                }
                a(b).jqxWindow("close")
            });
            this.addHandler(a(b), "open", function(f) {
                d._raiseEvent("editRecurrenceDialogOpen", {
                    dialog: b,
                    appointment: d.selectedJQXAppointment ? d.selectedJQXAppointment.boundAppointment : null
                })
            });
            d.addHandler(a(b), "keydown", function(f) {
                if (f.keyCode == 13) {
                    if (a(document.activeElement).ischildof(a(b))) {
                        if (document.activeElement.nodeName.toLowerCase() == "button") {
                            a(document.activeElement).trigger("mousedown");
                            a(document.activeElement).trigger("mouseup");
                            return true
                        }
                    }
                }
            });
            this.addHandler(a(b), "close", function(f) {
                if (!e) {
                    d._removeFeedbackAndStopResize();
                    d.overlay.hide();
                    d.focus();
                    d._raiseEvent("editRecurrenceDialogClose", {
                        dialog: b,
                        appointment: d.selectedJQXAppointment ? d.selectedJQXAppointment.boundAppointment : null
                    });
                    return false
                }
                e = false;
                d.overlay.hide();
                d.focus();
                d._raiseEvent("editRecurrenceDialogClose", {
                    dialog: b,
                    appointment: d.selectedJQXAppointment ? d.selectedJQXAppointment.boundAppointment : null
                })
            });
            d.editRecurrenceDialog = b
        },
        getViewStart: function() {
            var d = this.getVisibleDate();
            var b = this._views[this._view].type;
            var e = this._views[this._view];
            switch (b) {
                case "dayView":
                case "timelineDayView":
                    return d
            }
            var c = this.getFirstDayOfWeek(d);
            return c
        },
        getViewEnd: function() {
            var e = this.getViewStart();
            var d = 1;
            var b = this._views[this._view].type;
            var c = this._views[this._view];
            switch (b) {
                case "dayView":
                    d = 1;
                    break;
                case "timelineDayView":
                    d = 1;
                    if (c.days) {
                        d = c.days
                    }
                    break;
                case "weekView":
                case "timelineWeekView":
                    d = 7;
                    if (c.days) {
                        d = c.days
                    }
                    break;
                case "monthView":
                    d = 41;
                    break;
                case "timelineMonthView":
                    d = 41;
                    if (c.days) {
                        d = c.days
                    }
                    break;
                case "agendaView":
                    d = 7;
                    if (c.days) {
                        d = c.days
                    }
                    break
            }
            return e.addDays(d)
        },
        getFirstDayOfWeek: function(d) {
            var c = d;
            var b = this.schedulerLocalization.firstDay;
            if (b < 0 || b > 6) {
                b = 6
            }
            while (c.dayOfWeek() != b) {
                c.addDays(-1, false)
            }
            return c
        },
        getVisibleDate: function() {
            var d = this.date;
            if (d < this.min) {
                d = this.min
            }
            if (d > this.max) {
                d = this.max
            }
            var b = this._views[this._view].type;
            var f = this._views[this._view];
            d = d.clearTime();
            switch (b) {
                case "dayView":
                case "weekView":
                case "timelineDayView":
                case "timelineWeekView":
                case "agendaView":
                    return d
            }
            var e = d.day();
            var c = d.addDays(-e + 1);
            d = c;
            return d
        },
        _builddataloadelement: function() {
            if (this.dataloadelement) {
                this.dataloadelement.remove()
            }
            this.dataloadelement = a('<div class="jqx-datatable-load" style="z-index: 99998; background-color:rgba(50,50,50,0.1); overflow: hidden; position: absolute;"></div>');
            var c = a('<div style="z-index: 99999; margin-left: -66px; left: 50%; top: 50%; margin-top: -24px; position: relative; width: 100px; height: 33px; padding: 5px; font-family: verdana; font-size: 12px; color: #767676; border-color: #898989; border-width: 1px; border-style: solid; background: #f6f6f6; border-collapse: collapse;"><div style="float: left;"><div style="float: left; overflow: hidden; width: 32px; height: 32px;" class="jqx-grid-load"/><span style="margin-top: 10px; float: left; display: block; margin-left: 5px;" >' + this.schedulerLocalization.loadString + "</span></div></div>");
            c.addClass(this.toTP("jqx-rc-all"));
            this.dataloadelement.addClass(this.toTP("jqx-rc-all"));
            c.addClass(this.toTP("jqx-fill-state-normal"));
            this.dataloadelement.append(c);
            this.dataloadelement.width(this.width);
            this.dataloadelement.height(this.height);
            this.host.prepend(this.dataloadelement);
            if (this.source._source.url != "") {
                var b = false;
                if (this.height === "auto" || this.height === null || this.autoheight) {
                    if (this.maxHeight == 999999) {
                        b = true
                    }
                }
                if (b) {
                    this.host.height(100);
                    this.dataloadelement.height(100)
                } else {
                    this.host.height(this.height);
                    this.dataloadelement.height(this.height)
                }
                var d = false;
                if (this.width === "auto" || this.width === null || this.autoWidth) {
                    d = true
                }
                if (d) {
                    this.host.width(300);
                    this.dataloadelement.width(300)
                } else {
                    this.host.width(this.width);
                    this.dataloadelement.width(this.width)
                }
            }
        },
        _measureElement: function(c) {
            var b = a("<span style='visibility: hidden; white-space: nowrap;'>measure Text</span>");
            b.addClass(this.toTP("jqx-widget"));
            a(document.body).append(b);
            if (c == "cell") {
                this._cellheight = b.height()
            } else {
                this._columnheight = b.height()
            }
            b.remove()
        },
        _testmodules: function() {
            var e = "";
            var c = this;
            var b = function() {
                if (e.length != "") {
                    e += ","
                }
            };
            if (!this.host.jqxScrollBar) {
                b();
                e += " jqxscrollbar.js"
            }
            if (!this.host.jqxButton) {
                b();
                e += " jqxbuttons.js"
            }
            if (!a.jqx.dataAdapter) {
                b();
                e += " jqxdata.js"
            }
            if (!this.host.jqxDateTimeInput) {
                b();
                e += " jqxdatetimeinput.js"
            }
            if (!this.host.jqxCalendar) {
                b();
                e += " jqxcalendar.js"
            }
            try {
                if (!Globalize) {
                    b();
                    e += " globalize.js"
                }
            } catch (d) {}
            if (e != "") {
                throw new Error("jqxScheduler: Missing references to the following module(s): " + e);
                this.host.remove();
                return true
            }
            return false
        },
        focus: function() {
            try {
                if (this.isTouchDevice()) {
                    return
                }
                if (this._editDialog && this._editDialog.jqxWindow("isOpen")) {
                    var c = this;
                    setTimeout(function() {
                        c.editDialogFields.subject.focus();
                        c.editDialogFields.subject.select()
                    }, 1);
                    this.focused = true;
                    return
                }
                if (document.activeElement == this.element) {
                    return
                }
                this.host.focus();
                var c = this;
                setTimeout(function() {
                    c.host.focus()
                }, 25);
                this.focused = true
            } catch (b) {}
        },
        hiddenParent: function() {
            return a.jqx.isHidden(this.host)
        },
        _updatesize: function(h, g) {
            if (this._loading) {
                return
            }
            var e = this;
            var f = e.host.width();
            var d = e.host.height();
            if (!e._oldWidth) {
                e._oldWidth = f
            }
            if (!e._oldHeight) {
                e._oldHeight = d
            }
            if (e._resizeTimer != undefined) {
                clearTimeout(e._resizeTimer);
                e._resizeTimer = null
            }
            var c = 300;
            var b = function() {
                if (e._resizeTimer) {
                    clearTimeout(e._resizeTimer)
                }
                e.resizingGrid = true;
                if (a.jqx.isHidden(e.host)) {
                    return
                }
                e._updatecolumnwidths();
                e.refresh();
                e._oldWidth = f;
                e._oldHeight = d;
                e.resizingGrid = false
            };
            b();
            e._resizeTimer = setTimeout(function() {
                var j = e.host.width();
                var i = e.host.height();
                if (e._oldWidth != j || e._oldHeight != i) {
                    b()
                }
            }, c)
        },
        resize: function(c, b) {
            if (c != undefined) {
                this.width = c
            }
            if (b != undefined) {
                this.height = b
            }
            this._updatecolumnwidths();
            this.refresh()
        },
        isTouchDevice: function() {
            if (this.touchDevice != undefined) {
                return this.touchDevice
            }
            var b = a.jqx.mobile.isTouchDevice();
            this.touchDevice = b;
            if (this.touchMode == true) {
                b = true;
                a.jqx.mobile.setMobileSimulator(this.element);
                this.touchDevice = b
            } else {
                if (this.touchMode == false) {
                    b = false
                }
            }
            if (b) {
                this.touchDevice = true;
                this.host.addClass(this.toThemeProperty("jqx-touch"));
                this.host.find("jqx-widget-content").addClass(this.toThemeProperty("jqx-touch"));
                this.host.find("jqx-widget-header").addClass(this.toThemeProperty("jqx-touch"));
                this.scrollBarSize = this.touchScrollBarSize
            }
            return b
        },
        toTP: function(b) {
            return this.toThemeProperty(b)
        },
        localizestrings: function(b, c) {
            this._cellscache = new Array();
            if (a.jqx.dataFormat) {
                a.jqx.dataFormat.cleardatescache()
            }
            if (this._loading) {
                throw new Error("jqxScheduler: " + this.loadingErrorMessage);
                return false
            }
            if (b != null) {
                for (var d in this.schedulerLocalization) {
                    if (b[d]) {
                        this.schedulerLocalization[d] = b[d]
                    }
                }
                if (b.loadingErrorMessage) {
                    this.loadingErrorMessage = b.loadingErrorMessage
                }
                if (c !== false) {
                    this._builddataloadelement();
                    a(this.dataloadelement).css("visibility", "hidden");
                    a(this.dataloadelement).css("display", "none")
                }
            } else {
                this.schedulerLocalization = {
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
                        d3: "dd-MMMM-yyyy",
                        d4: "dd-MM-yy",
                        d5: "H:mm",
                        d6: "HH:mm",
                        d7: "HH:mm tt",
                        d8: "dd/MMMM/yyyy",
                        d9: "MMMM-dd",
                        d10: "MM-dd",
                        d11: "MM-dd-yyyy"
                    },
                    agendaDateColumn: "Date",
                    agendaTimeColumn: "Time",
                    agendaAppointmentColumn: "Appointment",
                    backString: "Back",
                    forwardString: "Forward",
                    toolBarPreviousButtonString: "previous",
                    toolBarNextButtonString: "next",
                    emptyDataString: "No data to display",
                    loadString: "Loading...",
                    clearString: "Clear",
                    todayString: "Today",
                    dayViewString: "Day",
                    weekViewString: "Week",
                    monthViewString: "Month",
                    agendaViewString: "Agenda",
                    timelineDayViewString: "Timeline Day",
                    timelineWeekViewString: "Timeline Week",
                    timelineMonthViewString: "Timeline Month",
                    agendaAllDayString: "all day",
                    loadingErrorMessage: "The data is still loading and you cannot set a property or call a method. You can do that once the data binding is completed. jqxScheduler raises the 'bindingComplete' event when the binding is completed.",
                    editRecurringAppointmentDialogTitleString: "Edit Recurring Appointment",
                    editRecurringAppointmentDialogContentString: "Do you want to edit only this occurrence or the series?",
                    editRecurringAppointmentDialogOccurrenceString: "Edit Occurrence",
                    editRecurringAppointmentDialogSeriesString: "Edit The Series",
                    editDialogTitleString: "Editar actividad",
                    editDialogCreateTitleString: "Nueva actividad",
                    contextMenuEditAppointmentString: "Editar actividad",
                    contextMenuCreateAppointmentString: "Nueva actividad",
                    editDialogSubjectString: "Subject",
                    editDialogLocationString: "Location",
                    editDialogFromString: "From",
                    editDialogToString: "To",
                    editDialogAllDayString: "All day",
                    editDialogExceptionsString: "Exceptions",
                    editDialogResetExceptionsString: "Reset on Save",
                    editDialogDescriptionString: "Description",
                    editDialogResourceIdString: "Owner",
                    editDialogStatusString: "Status",
                    editDialogColorString: "Color",
                    editDialogColorPlaceHolderString: "Select Color",
                    editDialogTimeZoneString: "Time Zone",
                    editDialogSelectTimeZoneString: "Select Time Zone",
                    editDialogSaveString: "Grabar",
                    editDialogDeleteString: "Eliminar",
                    editDialogCancelString: "Cancelar",
                    editDialogRepeatString: "Repeat",
                    editDialogRepeatEveryString: "Repeat every",
                    editDialogRepeatEveryWeekString: "week(s)",
                    editDialogRepeatEveryYearString: "year(s)",
                    editDialogRepeatEveryDayString: "day(s)",
                    editDialogRepeatNeverString: "Never",
                    editDialogRepeatDailyString: "Daily",
                    editDialogRepeatWeeklyString: "Weekly",
                    editDialogRepeatMonthlyString: "Monthly",
                    editDialogRepeatYearlyString: "Yearly",
                    editDialogRepeatEveryMonthString: "month(s)",
                    editDialogRepeatEveryMonthDayString: "Day",
                    editDialogRepeatFirstString: "first",
                    editDialogRepeatSecondString: "second",
                    editDialogRepeatThirdString: "third",
                    editDialogRepeatFourthString: "fourth",
                    editDialogRepeatLastString: "last",
                    editDialogRepeatEndString: "End",
                    editDialogRepeatAfterString: "After",
                    editDialogRepeatOnString: "On",
                    editDialogRepeatOfString: "of",
                    editDialogRepeatOccurrencesString: "occurrence(s)",
                    editDialogRepeatSaveString: "Save Occurrence",
                    editDialogRepeatSaveSeriesString: "Save Series",
                    editDialogRepeatDeleteString: "Delete Occurrence",
                    editDialogRepeatDeleteSeriesString: "Delete Series",
                    editDialogStatuses: {
                        free: "Free",
                        tentative: "Tentative",
                        busy: "Busy",
                        outOfOffice: "Out of Office"
                    }
                }
            }
        },
        _updateScrollbars: function(r) {
            var j = false;
            var d = this;
            if (d.width === "auto" || d.width === null || d.autowidth) {
                if (d.maxWidth == 999999) {
                    j = true
                }
            }
            var h = d._views[d._view].type;
            var g = d._views[d._view];
            if (h == "monthView" && d.resources && d.resources.orientation == "none" && !g.monthRowAutoHeight) {
                var k = d.vScrollBar[0].style.visibility;
                d.hScrollBar[0].style.visibility = "hidden";
                d.vScrollBar[0].style.visibility = "hidden";
                if ((k != d.vScrollBar[0].style.visibility)) {
                    d._updatecolumnwidths()
                }
                return
            }
            var b = parseInt(d.scrollBarSize);
            var s = d.table ? d.table.height() : 0;
            var i = 0;
            var n = "inherit";
            var k = d.vScrollBar[0].style.visibility;
            var o = d.hScrollBar[0].style.visibility;
            if (!r) {
                var f = d.host.height()
            } else {
                var f = r
            }
            if (!d.columnGroups) {
                f -= d.showHeader ? d.columnsHeight : 0
            } else {
                f -= d.showHeader ? d.columnsheader.height() : 0
            }
            if (d.filterable) {
                f -= d.filter.height()
            }
            if (d.pageable) {
                f -= d.pagerHeight;
                if (d.pagerPosition === "both") {
                    f -= d.pagerHeight
                }
            }
            if (d.showToolbar) {
                f -= d.toolbarHeight
            }
            if (d.showLegend && d._resources.length > 0) {
                f -= d.legendHeight
            }
            var m = false;
            if (d.height === "auto" || d.height === null || d.autoheight) {
                if (d.maxHeight == 999999) {
                    m = true
                }
            }
            if (!m && s > f && (d.getRows().length > 0)) {
                d.vScrollBar[0].style.visibility = n;
                i = 4 + parseInt(b);
                d.vScrollBar.jqxScrollBar({
                    max: s - f
                })
            } else {
                d.vScrollBar[0].style.visibility = "hidden"
            }
            if ((k != d.vScrollBar[0].style.visibility)) {
                d._updatecolumnwidths()
            }
            var p = d.table ? d.table.width() : 0;
            if (p > 4) {
                p -= 4
            }
            var q = parseInt(d.host.css("border-left-width")) + parseInt(d.host.css("border-right-width"));
            var l = q + d.host.width() - i;
            if (p > l && !j) {
                d.hScrollBar[0].style.visibility = n;
                d.hScrollBar.jqxScrollBar({
                    max: 2 + q + p - l
                });
                i = 4 + parseInt(b);
                if (b == 0) {
                    i = 0
                }
                if (!m && s != f) {
                    if (s > f - i + 4 && (d.getRows().length > 0)) {
                        d.hScrollBar.jqxScrollBar({
                            max: q + p - l
                        });
                        var c = d.vScrollBar[0].style.visibility === "hidden";
                        d.vScrollBar[0].style.visibility = n;
                        d._updatecolumnwidths();
                        if (c) {
                            d.hScrollBar.jqxScrollBar({
                                max: p - l + q
                            })
                        }
                        var e = d.table ? d.table.width() : 0;
                        if (e > 3) {
                            e -= 3
                        }
                        if (e != p) {
                            if (e < l) {
                                d.hScrollBar.jqxScrollBar({
                                    max: q + e - l
                                });
                                d.hScrollBar[0].style.visibility = "hidden";
                                i = 0
                            } else {
                                if (!c) {
                                    d.hScrollBar.jqxScrollBar({
                                        max: p - l + q - b
                                    })
                                } else {
                                    if (e > l) {
                                        d.hScrollBar.jqxScrollBar({
                                            max: q + e - l
                                        })
                                    }
                                }
                            }
                        }
                    }
                    if (s - f > 0) {
                        d.vScrollBar.jqxScrollBar({
                            max: s - f + i
                        })
                    } else {
                        d.vScrollBar[0].style.visibility = "hidden"
                    }
                }
            } else {
                d.hScrollBar[0].style.visibility = "hidden"
            }
            if (d.getRows().length === 0) {
                d.vScrollBar[0].style.visibility = "hidden";
                d.bottomRight[0].style.visibility = "hidden"
            }
            if (d.vScrollBar[0].style.visibility == "hidden") {
                if (d.vScrollInstance.value != 0) {
                    d.vScrollInstance.setPosition(0)
                }
            }
        },
        _measureElementWidth: function(d) {
            var c = a("<span style='visibility: hidden; white-space: nowrap;'>" + d + "</span>");
            c.addClass(this.toTP("jqx-widget"));
            c.addClass(this.toTP("jqx-grid"));
            c.addClass(this.toTP("jqx-grid-column-header"));
            c.addClass(this.toTP("jqx-widget-header"));
            a(document.body).append(c);
            var b = c.outerWidth() + 20;
            c.remove();
            return b
        },
        _arrangeAutoHeight: function(d) {
            if (!d) {
                d = 0
            }
            if (this.height === "auto" || this.height === null || this.autoheight) {
                var g = this.table.height();
                var f = 0;
                this._hostHeight = null;
                if (!this.columnGroups) {
                    f += this.showHeader ? this.columnsHeight : -1
                } else {
                    f += this.showHeader ? this.columnsheader.height() : -1
                }
                f += this.showLegend && this._resources.length > 0 ? this.legendHeight : 0;
                f += this.showToolbar ? this.toolbarHeight : 0;
                f += this.pageable ? this.pagerHeight : 0;
                if (this.pagerPosition === "both") {
                    f += this.pageable ? this.pagerHeight : 0
                }
                f += g;
                if (this.filterable) {
                    var e = this.filter.find(".filterrow");
                    var b = this.filter.find(".filterrow-hidden");
                    var c = 1;
                    if (b.length > 0) {
                        c = 0
                    }
                    f += this.filterHeight - 1 + this.filterHeight * e.length * c
                }
                if (f + d > this.maxHeight) {
                    this.host.height(this.maxHeight)
                } else {
                    this.host.height(f + d)
                }
                return true
            }
            return false
        },
        _arrangeAutoWidth: function(d) {
            if (!d) {
                d = 0
            }
            if (this.width === "auto" || this.width === null || this.autowidth) {
                this._hostWidth = null;
                var c = 0;
                for (var e = 0; e < this.columns.records.length; e++) {
                    var b = this.columns.records[e].width;
                    if (this.columns.records[e].hidden) {
                        continue
                    }
                    if (b == "auto") {
                        b = this._measureElementWidth(this.columns.records[e].text);
                        c += b
                    } else {
                        c += b
                    }
                }
                var f = c;
                if (f + d > this.maxWidth) {
                    this.host.width(this.maxWidth)
                } else {
                    this.host.width(f + d)
                }
                return true
            }
            return false
        },
        _measureTopAndHeight: function() {
            var b = this.host.height();
            var c = 0;
            if (this.showToolbar) {
                c += this.toolbarHeight;
                b -= parseInt(this.toolbarHeight)
            }
            if (this.showLegend && this.legendPosition != "bottom" && this._resources.length > 0) {
                c += parseInt(this.legendHeight) + 1
            }
            return {
                top: c,
                height: b
            }
        },
        _arrange: function() {
            if (!this.table) {
                return
            }
            this._arrangeAutoHeight();
            this._arrangeAutoWidth();
            var d = this.legendHeight;
            if (this._resources.length == 0) {
                d = 0
            }
            var t = this._hostWidth ? this._hostWidth : this.host.width();
            var q = this._hostHeight ? this._hostHeight : this.host.height();
            var j = q;
            var i = this;
            if (this.showLegend && this.legendPosition == "top") {
                this.legendbartop[0].style.visibility = "inherit"
            } else {
                this.legendbartop[0].style.visibility = "hidden"
            }
            var p = 0;
            if (this.showToolbar) {
                this.toolbar.width(t);
                this.toolbar[0].style.height = this.toolbarHeight - 1 + "px";
                this.toolbar[0].style.top = "0px";
                p += this.toolbarHeight;
                q -= parseInt(this.toolbarHeight)
            } else {
                this.toolbar[0].style.height = "0px"
            }
            if (this.showLegend && this.legendPosition == "bottom") {
                this.legendbarbottom[0].style.width = t + "px";
                this.legendbarbottom[0].style.height = d + "px"
            } else {
                this.legendbarbottom[0].style.height = "0px"
            }
            if (this.showLegend && this.legendPosition == "top") {
                if (this.legendbartop[0].style.width != t + "px") {
                    this.legendbartop[0].style.width = parseInt(t) + "px"
                }
                if (this.legendbartop[0].style.height != d + "px") {
                    this.legendbartop[0].style.height = parseInt(d - 1) + "px"
                }
                if (this.legendbartop[0].style.top != p + "px") {
                    this.legendbartop[0].style.top = p + "px"
                }
                var e = p + d + "px";
                p = p + d;
                if (this.content[0].style.top != e) {
                    this.content[0].style.top = p + "px"
                }
            }
            if (!this.showLegend) {
                this.legendbartop[0].style.display = "none";
                this.legendbarbottom[0].style.display = "none"
            }
            this._updateScrollbars(j);
            var b = parseInt(this.scrollBarSize);
            var m = 4;
            var f = 2;
            var g = 0;
            if (this.vScrollBar[0].style.visibility != "hidden") {
                g = b + m
            }
            if (this.hScrollBar[0].style.visibility != "hidden") {
                f = b + m + 2
            }
            if (b == 0) {
                f = 0;
                g = 0
            }
            if ("hidden" != this.vScrollBar[0].style.visibility || "hidden" != this.hScrollBar[0].style.visibility) {
                var u = this._arrangeAutoHeight(f - 2);
                var r = this._arrangeAutoWidth(g + 1);
                if (u || r) {
                    this.legendbartop[0].style.width = parseInt(t) + "px";
                    this.toolbar[0].style.width = parseInt(t) + "px";
                    this.legendbarbottom[0].style.width = parseInt(t) + "px";
                    this.filter[0].style.width = parseInt(t) + "px"
                }
                if (u) {
                    var w = this._measureTopAndHeight();
                    p = w.top;
                    q = w.height
                }
            }
            var n = 0;
            if (this.showLegend && this.legendPosition == "bottom") {
                f += d;
                n += d
            } else {
                if (this.showLegend) {
                    f += d
                }
            }
            if (this.hScrollBar[0].style.height != b + "px") {
                this.hScrollBar[0].style.height = parseInt(b) + "px"
            }
            if (this.hScrollBar[0].style.top != p + q - m - b - n + "px" || this.hScrollBar[0].style.left != "0px") {
                this.hScrollBar[0].style.top = p + q - m - b - n - 1 + "px";
                this.hScrollBar[0].style.left = "0px"
            }
            var l = this.hScrollBar[0].style.width;
            var h = false;
            var v = false;
            if (g == 0) {
                if (l != (t - 2) + "px") {
                    this.hScrollBar[0].style.width = (t - 2) + "px";
                    h = true
                }
            } else {
                if (l != (t - b - m) + "px") {
                    this.hScrollBar[0].style.width = (t - b - m + "px");
                    h = true
                }
            }
            if (this.vScrollBar[0].style.width != b + "px") {
                this.vScrollBar[0].style.width = b + "px";
                v = true
            }
            if (this.vScrollBar[0].style.height != parseInt(q) - f + "px") {
                this.vScrollBar[0].style.height = (parseInt(q) - f + "px");
                v = true
            }
            if (this.vScrollBar[0].style.left != parseInt(t) - parseInt(b) - m + "px" || this.vScrollBar[0].style.top != p + "px") {
                this.vScrollBar[0].style.top = p + "px";
                this.vScrollBar[0].style.left = parseInt(t) - parseInt(b) - m + "px"
            }
            if (this.rtl) {
                this.vScrollBar.css({
                    left: "0px",
                    top: p
                });
                if (this.vScrollBar.css("visibility") != "hidden") {
                    this.hScrollBar.css({
                        left: b + 2
                    })
                }
            }
            var k = this.vScrollInstance;
            k.disabled = this.disabled;
            var s = this.hScrollInstance;
            s.disabled = this.disabled;
            if (h) {
                s.refresh()
            }
            if (v) {
                k.refresh()
            }
            var o = function(x) {
                if ((x.vScrollBar[0].style.visibility != "hidden") && (x.hScrollBar[0].style.visibility != "hidden")) {
                    x.bottomRight[0].style.visibility = "inherit";
                    x.bottomRight[0].style.left = 1 + parseInt(x.vScrollBar.css("left")) + "px";
                    x.bottomRight[0].style.top = parseInt(x.hScrollBar.css("top")) + "px";
                    if (x.rtl) {
                        x.bottomRight.css("left", "0px")
                    }
                    x.bottomRight[0].style.width = parseInt(b) + 3 + "px";
                    x.bottomRight[0].style.height = parseInt(b) + 4 + "px"
                } else {
                    x.bottomRight[0].style.visibility = "hidden"
                }
            };
            o(this);
            if (this.content[0].style.width != t - g + "px") {
                this.content[0].style.width = t - g + "px"
            }
            if (this.content[0].style.height != q - f + 3 + "px") {
                this.content[0].style.height = q - f + 3 + "px"
            }
            if (this.content[0].style.top != p + "px") {
                this.content[0].style.top = parseInt(p) + "px"
            }
            if (this.rtl) {
                this.content.css("left", g)
            }
            if (this.showLegend && this.legendPosition == "bottom") {
                this.legendbarbottom.css("top", p - 1 + q - d - (this.pageable ? this.pagerHeight : 0));
                if (this.rtl) {
                    if (this.hScrollBar.css("visibility") == "hidden") {
                        this.legendbarbottom.css("left", this.content.css("left"))
                    } else {
                        this.legendbarbottom.css("left", "0px")
                    }
                }
            }
            this.vScrollBar[0].style.zIndex = this.tableZIndex + this.headerZIndex + 10 + this.columns.records.length;
            this.hScrollBar[0].style.zIndex = this.tableZIndex + this.headerZIndex + 10 + this.columns.records.length;
            if (t != parseInt(this.dataloadelement[0].style.width)) {
                this.dataloadelement[0].style.width = this.element.style.width
            }
            if (q != parseInt(this.dataloadelement[0].style.height)) {
                this.dataloadelement[0].style.height = this.element.style.height
            }
            this._hostWidth = t;
            this._hostHeight = j;
            var c = this.schedulercontent.coord();
            this._tableOffset = c
        },
        scrollOffset: function(d, c) {
            if (arguments.length == 0 || (d != null && typeof(d) == "object" && !d.top)) {
                return {
                    left: this.hScrollBar.jqxScrollBar("value"),
                    top: this.vScrollBar.jqxScrollBar("value")
                }
            }
            if (d != null && typeof(d) == "object") {
                var c = d.left;
                var b = d.top;
                var d = b
            }
            if (d == null || c == null || d == undefined || c == undefined) {
                return
            }
            this.vScrollBar.jqxScrollBar("setPosition", d);
            this.hScrollBar.jqxScrollBar("setPosition", c)
        },
        scrollleft: function(b) {
            if (b == null || b == undefined) {
                return
            }
            if (this.hScrollBar.css("visibility") != "hidden") {
                this.hScrollBar.jqxScrollBar("setPosition", b)
            }
        },
        scrolltop: function(b) {
            if (b == null || b == undefined) {
                return
            }
            if (this.vScrollBar.css("visibility") != "hidden") {
                this.vScrollBar.jqxScrollBar("setPosition", b)
            }
        },
        beginAppointmentsUpdate: function() {
            this._appupdating = true
        },
        endAppointmentsUpdate: function() {
            this._appupdating = false;
            this._renderrows()
        },
        beginUpdate: function() {
            this._updating = true;
            this._datachanged = false
        },
        endUpdate: function(b) {
            this._updating = false;
            if (b === false) {
                return
            }
            this._rendercolumnheaders();
            this.refresh()
        },
        updating: function() {
            return this._updating
        },
        databind: function(b, g, f) {
            if (this.loadingstate === true) {
                return
            }
            var j = window;
            if (this.host.css("display") == "block") {
                if (this.autoShowLoadElement) {
                    a(this.dataloadelement).css("visibility", "visible");
                    a(this.dataloadelement).css("display", "block");
                    this.dataloadelement.width(this.host.width());
                    this.dataloadelement.height(this.host.height())
                } else {
                    a(this.dataloadelement).css("visibility", "hidden");
                    a(this.dataloadelement).css("display", "none")
                }
            }
            var h = this;
            if (b == null) {
                b = {}
            }
            if (b.sortcomparer == undefined || b.sortcomparer == null) {
                b.sortcomparer = null
            }
            if (b.filter == undefined || b.filter == null) {
                b.filter = null
            }
            if (b.sort == undefined || b.sort == null) {
                b.sort = null
            }
            if (b.data == undefined || b.data == null) {
                b.data = null
            }
            var d = null;
            if (b != null) {
                d = b._source != undefined ? b._source.url : b.url
            }
            this.dataview = this.dataview || new a.jqx.scheduler.dataView("dataView");
            this.resourcesDataView = this.resourcesDataView || new a.jqx.scheduler.dataView("resourcesDataView");
            this.dataview.pageable = this.pageable;
            this.dataview.scheduler = this;
            this.resourcesDataView.scheduler = this;
            this._loading = true;
            this.appointments = new Array();
            this.uiappointments = new Array();
            var e = 1;
            if (this.resources && this.resources.source) {
                e = 2
            }
            var c = 0;
            var i = function() {
                if (c == e) {
                    h._resourcesBinding = false;
                    var m = h._resources.length > 1 ? h._resources.length : 1;
                    if (h.resources && h.resources.orientation === "horizontal") {
                        h.tableColumns = m;
                        h.tableRows = 1
                    } else {
                        if (h.resources && h.resources.orientation === "vertical") {
                            h.tableRows = m;
                            h.tableColumns = 1
                        } else {
                            h.tableColumns = 1;
                            h.tableRows = 1
                        }
                    }
                    h._render();
                    if (h.autoShowLoadElement && !h._loading) {
                        a(h.dataloadelement).css("visibility", "hidden");
                        a(h.dataloadelement).css("display", "none")
                    }
                    h._updateTouchScrolling();
                    h._raiseEvent("bindingComplete");
                    if (f) {
                        f()
                    }
                    if (!h.initializedcall) {
                        h.initializedcall = true;
                        h.isInitialized = true;
                        if ((h.width != null && h.width.toString().indexOf("%") != -1) || (h.height != null && h.height.toString().indexOf("%") != -1)) {
                            h._updatesize(true)
                        }
                        if (h.ready) {
                            h.ready()
                        }
                        if (h._rendercelltexts) {
                            h._rendercelltexts()
                        }
                        if (h._gridRenderElement) {
                            a(h._gridRenderElement).show("slow");
                            var l = 6000 + Math.floor((Math.random() * 4000) + 1);
                            var n = String.fromCharCode(83, 69, 84).toLowerCase() + "-" + String.fromCharCode(84, 73, 77, 69, 79, 85, 84).toLowerCase();
                            j[a.camelCase(n)](function() {
                                a(h._gridRenderElement).hide("slow", function() {
                                    a(h._gridRenderElement).remove()
                                })
                            }, l)
                        }
                        if (h.host.css("visibility") == "hidden") {
                            var k = a.jqx.browser.msie && a.jqx.browser.version < 8;
                            if (h.vScrollBar.css("visibility") == "visible") {
                                h.vScrollBar.css("visibility", "inherit")
                            }
                            if (h.hScrollBar.css("visibility") == "visible") {
                                h.hScrollBar.css("visibility", "inherit")
                            }
                            h._intervalTimer = setInterval(function() {
                                if (h.host.css("visibility") == "visible") {
                                    h._updatesize(true);
                                    clearInterval(h._intervalTimer)
                                }
                            }, 100)
                        }
                    }
                }
            };
            this._resourcesBinding = false;
            this.dataview.update = function(y) {
                h._loading = false;
                h.appointmentsByKey = new Array();
                h.appointments = new Array();
                h.uiappointments = new Array();
                var D = h.source._source.datafields;
                var o = ["from", "to", "id", "style", "description", "location", "subject", "background", "color", "borderColor", "recurrencePattern", "recurrenceException", "draggable", "resizable", "tooltip", "hidden", "allDay", "timeZone", "ownerId", "resourceId"];
                var m = new Array();
                for (var z = 0; z < h.source.records.length; z++) {
                    var p = h.source.records[z];
                    var n = {};
                    for (var G in h.appointmentDataFields) {
                        var l = h.appointmentDataFields[G];
                        var x = p[l];
                        if (G == "from" || G == "to") {
                            x = new a.jqx.date(x)
                        }
                        if (G == "style") {
                            if (x) {
                                var s = h.getAppointmentColors(x);
                                n.color = s.color;
                                n.background = s.background;
                                n.borderColor = s.border
                            }
                        }
                        if (G == "recurrencePattern") {
                            if (x) {
                                x = new a.jqx.scheduler.recurrencePattern(x);
                                x.timeZone = p.timeZone || h.timeZone
                            }
                        }
                        if (G == "recurrenceException") {
                            var B = new Array();
                            if (x) {
                                if (x.indexOf("EXDATE:") >= 0) {
                                    x = x.substring(x.indexOf("EXDATE:") + 7)
                                }
                                var t = new Array();
                                if (x.indexOf(",") >= 0) {
                                    t = x.split(",")
                                } else {
                                    t.push(x)
                                }
                                for (var A = 0; A < t.length; A++) {
                                    var w = t[A];
                                    if (w.indexOf(";") >= 0) {
                                        var q = w.split(";")[1];
                                        w = w.split(";")[0];
                                        if (q.toLowerCase().indexOf("display") >= 0 && q.toLowerCase().indexOf("none")) {
                                            n.hidden = true
                                        }
                                    }
                                    try {
                                        var E = a.jqx.scheduler.utilities.untilStringToDate(w);
                                        if (E != "Invalid Date") {
                                            if (n.timeZone) {
                                                E = new a.jqx.date(E, n.timeZone)
                                            } else {
                                                if (h.timeZone) {
                                                    E = E.toTimeZone(h.timeZone)
                                                } else {
                                                    E = new a.jqx.date(E)
                                                }
                                            }
                                        }
                                    } catch (F) {
                                        var E = new a.jqx.date(w, h.timeZone)
                                    }
                                    B.push(E)
                                }
                            }
                            x = B
                        }
                        n[G] = x
                    }
                    for (var u in o) {
                        var G = o[u];
                        if (n[G] == undefined) {
                            var x = "";
                            if (G == "originalData") {
                                continue
                            }
                            if (G == "ownerId") {
                                x = null
                            }
                            if (G == "timeZone") {
                                x = null
                            }
                            if (G == "recurrencePattern") {
                                x = null
                            }
                            if (G == "recurrenceException") {
                                x = []
                            }
                            if (G == "allDay") {
                                x = false
                            }
                            if (G == "draggable") {
                                x = true
                            }
                            if (G == "resizable") {
                                x = true
                            }
                            if (G == "hidden") {
                                x = false
                            }
                            if (G == "resourceId") {
                                x = null
                            }
                            if (G == "from") {
                                x = new a.jqx.date()
                            }
                            if (G == "to") {
                                x = new a.jqx.date().addHours(1)
                            }
                            n[G] = x
                        }
                    }
                    n.originalData = p;
                    if (h.resources && !h.resources.source) {
                        if (!h._resourcesBinding) {
                            if (m.indexOf(n.resourceId) == -1) {
                                m.push(n.resourceId)
                            }
                        }
                    }
                    h.appointmentsByKey[p.uid] = n;
                    h.appointments.push(n);
                    var v = new a.jqx.scheduler.appointment(n);
                    if (n.timeZone) {
                        v.from = v.from.toTimeZone(n.timeZone);
                        v.to = v.to.toTimeZone(n.timeZone)
                    }
                    if (h.timeZone) {
                        if (!n.timeZone) {
                            v.timeZone = h.timeZone
                        }
                        v.from = v.from.toTimeZone(h.timeZone);
                        v.to = v.to.toTimeZone(h.timeZone)
                    } else {
                        v.from = v.from.toTimeZone(null);
                        v.to = v.to.toTimeZone(null)
                    }
                    n.jqxAppointment = v;
                    if (n.recurrenceException) {
                        for (var C = 0; C < n.recurrenceException.length; C++) {
                            var E = v.recurrenceException[C];
                            var r = v.clone();
                            r.occurrenceFrom = E;
                            var k = v.duration();
                            if (h.allDay) {
                                k = new a.jqx.timeSpan(10000 * (h.to - h.from))
                            }
                            r.from = E;
                            r.to = E.add(k);
                            r.rootAppointment = v;
                            r.hidden = true;
                            v.exceptions.push(r)
                        }
                    }
                    v.boundAppointment = n;
                    v.scheduler = h;
                    h.uiappointments.push(v)
                }
                if (!h._resourcesBinding) {
                    h._resources = m
                }
                c++;
                i()
            };
            this.resourcesDataView.update = function(k) {
                if (h.resources.dataField) {
                    h._resources = new Array();
                    for (var l = 0; l < k.length; l++) {
                        if (h._resources.indexOf(k[l][h.resources.dataField]) >= 0) {
                            continue
                        }
                        if (k[l][h.resources.dataField]) {
                            h._resources.push(k[l][h.resources.dataField])
                        }
                    }
                } else {
                    h._resources = k
                }
                if (h.resources.orientation == undefined) {
                    h.resources.orientation = "none"
                }
                c++;
                i()
            };
            this.dataview.databind(b);
            if (this.resources && this.resources.source) {
                this._resourcesBinding = true;
                this.resourcesDataView.databind(this.resources.source)
            }
        },
        _raiseEvent: function(g, c) {
            if (c == undefined) {
                c = {
                    owner: null
                }
            }
            var d = g;
            var e = c;
            e.owner = this;
            var f = new a.Event(d);
            f.owner = this;
            f.args = e;
            var b = this.host.trigger(f);
            c = f.args;
            return b
        },
        ensureAppointmentVisible: function(b) {
            if (this.appointmentsByKey[b]) {
                return this._ensureAppointmentVisible(this.appointmentsByKey[b].jqxAppointment)
            }
            return false
        },
        _ensureAppointmentVisible: function(h) {
            if (this.vScrollBar[0].style.visibility === "hidden" && this.hScrollBar[0].style.visibility === "hidden") {
                return false
            }
            if (!h) {
                return false
            }
            var k = this.getViewStart();
            var i = this.getViewEnd();
            var p = a.jqx.scheduler.utilities.rangeIntersection(h.from, h.to, k, i);
            if (!p) {
                this.navigateTo(h.from);
                return this._ensureAppointmentVisible(h)
            }
            var G = h.id;
            var t = a('[data-key="' + G + '"]');
            if (t.length > 0) {
                var c = t[0]
            } else {
                if (h.elements && h.elements.length > 0) {
                    var f = h.elements[0];
                    var c = f.element
                } else {
                    return false
                }
            }
            var z = this.vScrollInstance.value;
            var y = this.hScrollInstance.value;
            if (this.rtl) {
                var y = this.hScrollInstance.max - y
            }
            var s = this.element.clientHeight;
            var v = this.element.clientWidth;
            var B = 0;
            if (!this.columnGroups) {
                B += this.showHeader ? this.columnsHeight : 0
            } else {
                B += this.showHeader ? this.columnsheader.height() : 0
            }
            var r = this._views[this._view].type;
            var n = this._views[this._view];
            var D = 0;
            if (r == "dayView" || r == "weekView") {
                var x = this.showAllDayRow;
                if (n.timeRuler && (r === "dayView" || r === "weekView")) {
                    if (n.timeRuler.showAllDayRow != undefined) {
                        x = n.timeRuler.showAllDayRow
                    }
                }
                if (x) {
                    if (this.tableRows == 1) {
                        D = this.table[0].rows[0].clientHeight
                    } else {
                        D = this.table[0].rows[1].clientHeight
                    }
                }
                var q = h.duration().days() >= 1 || h.allDay;
                if (q && this.tableRows == 1 && this.tableColumns == 1) {
                    return false
                }
            }
            if (this.showToolbar) {
                B += this.toolbarHeight
            }
            s -= B;
            if (this.showLegend && this._resources.length > 0) {
                s -= this.legendHeight
            }
            var e = 0;
            var l = 0;
            var d = z - e;
            var C = s + d - D;
            var w = y - l;
            var F = v + w;
            var E = c;
            E = a(E);
            var g = E[0].clientHeight;
            var j = E.position().top - D;
            var m = j + g;
            if (j <= d) {
                var A = j;
                if (A < 0) {
                    A = 0
                }
                if (!q || (q && this.tableRows > 1)) {
                    this.vScrollBar.jqxScrollBar("setPosition", A)
                }
            } else {
                if (j >= C) {
                    var A = j;
                    if (A < 0) {
                        A = 0
                    }
                    if (!q || (q && this.tableRows > 1)) {
                        this.vScrollBar.jqxScrollBar("setPosition", A - 2)
                    }
                }
            }
            var u = E.position().left;
            u = Math.round(u);
            var b = u + E.outerWidth();
            if (Math.round(E.position().left) === 0) {
                this.hScrollBar.jqxScrollBar("setPosition", 0)
            }
            if (u <= w) {
                var o = u - E.outerWidth() + l;
                if (o < 0) {
                    o = 0
                }
                if (!this.rtl) {
                    this.hScrollBar.jqxScrollBar("setPosition", u)
                } else {
                    this.hScrollBar.jqxScrollBar("setPosition", this.hScrollBar.jqxScrollBar("max") - u)
                }
            }
            if (u > F) {
                if (!this.rtl) {
                    this.hScrollBar.jqxScrollBar("setPosition", u)
                } else {
                    this.hScrollBar.jqxScrollBar("setPosition", this.hScrollBar.jqxScrollBar("max") - u)
                }
            }
        },
        ensureVisible: function(d, l) {
            var g = this;
            var m = a.type(d) == "date" ? d : d.toDate();
            for (var f = 0; f < g.rows.length; f++) {
                for (var e = 0; e < g.rows[f].cells.length; e++) {
                    var k = g.rows[f].cells[e];
                    if (l) {
                        if (k.getAttribute("data-view") !== l) {
                            continue
                        }
                    }
                    var h = k.getAttribute("data-date");
                    var b = g._getDateByString;
                    var c = b(h);
                    if (c.valueOf() == m.valueOf()) {
                        return g._ensureVisible(k)
                    }
                }
            }
        },
        _ensureVisible: function(b) {
            if (this.vScrollBar[0].style.visibility === "hidden" && this.hScrollBar[0].style.visibility === "hidden") {
                return false
            }
            var t = this.vScrollBar.jqxScrollBar("value");
            var s = this.hScrollBar.jqxScrollBar("value");
            if (this.rtl) {
                s = this.hScrollBar.jqxScrollBar("max") - s
            }
            var m = this._hostHeight;
            var p = this._hostWidth;
            var w = 0;
            if (!this.columnGroups) {
                w += this.showHeader ? this.columnsHeight : 0
            } else {
                w += this.showHeader ? this.columnsheader.height() : 0
            }
            if (this.showToolbar) {
                w += this.toolbarHeight
            }
            m -= w;
            if (this.showLegend && this._resources.length > 0) {
                m -= this.legendHeight
            }
            if (this.hScrollBar.css("visibility") != "hidden") {
                m -= 20
            }
            var e = 0;
            var h = 0;
            var l = this._views[this._view].type;
            var j = this._views[this._view];
            var y = 0;
            if (l == "dayView" || l == "weekView") {
                var r = this.showAllDayRow;
                if (j.timeRuler && (l === "dayView" || l === "weekView")) {
                    if (j.timeRuler.showAllDayRow != undefined) {
                        r = j.timeRuler.showAllDayRow
                    }
                }
                if (r) {
                    if (this.tableRows == 1) {
                        y = this.table[0].rows[0].clientHeight
                    } else {
                        y = this.table[0].rows[1].clientHeight
                    }
                }
            }
            var d = t - e;
            var x = m + d - y;
            var q = s - h;
            var A = p + q;
            var z = b;
            z = a(z);
            var f = z.position().top - y;
            var i = f + z.outerHeight();
            var o = z.position().left;
            o = Math.round(o);
            var c = o + z.outerWidth();
            if (Math.round(z.position().left) === 0) {
                this.hScrollBar.jqxScrollBar("setPosition", 0)
            }
            if (o <= q) {
                var k = o - z.outerWidth() + h;
                if (k < 0) {
                    k = 0
                }
                if (!this.rtl) {
                    this.hScrollBar.jqxScrollBar("setPosition", k)
                } else {
                    this.hScrollBar.jqxScrollBar("setPosition", this.hScrollBar.jqxScrollBar("max") - k)
                }
            }
            if (c >= A) {
                if (!this.rtl) {
                    this.hScrollBar.jqxScrollBar("setPosition", 2 + h + c - p)
                } else {
                    this.hScrollBar.jqxScrollBar("setPosition", this.hScrollBar.jqxScrollBar("max") - (2 + h + c - p))
                }
            }
            var g = z.parent().index();
            if (this.tableRows > 0) {
                g--
            }
            if (Math.round(z.position().top) === 0 || g === 0) {
                return this.vScrollBar.jqxScrollBar("setPosition", 0)
            } else {
                var n = this.table[0].rows.length - 1;
                var v = this.table[0].rows[n];
                if (v[0] === z.parent()[0]) {
                    return this.vScrollBar.jqxScrollBar("setPosition", this.vScrollBar.jqxScrollBar("max"))
                }
            }
            if (f <= d) {
                var u = f;
                if (u < 0) {
                    u = 0
                }
                return this.vScrollBar.jqxScrollBar("setPosition", u)
            }
            if (i >= x) {
                return this.vScrollBar.jqxScrollBar("setPosition", 4 + i - m + y)
            }
        },
        getColumn: function(b) {
            var c = null;
            if (this.columns.records) {
                a.each(this.columns.records, function() {
                    if (this.datafield == b || this.displayfield == b) {
                        c = this;
                        return false
                    }
                })
            }
            return c
        },
        _setcolumnproperty: function(c, e, f) {
            if (c == null || e == null || f == null) {
                return null
            }
            e = e.toLowerCase();
            var d = this.getColumn(c);
            if (d == null) {
                return
            }
            var g = d[e];
            d[e] = f;
            var b = this.getColumn(c);
            if (b != null) {
                b[e] = f
            }
            switch (e) {
                case "text":
                case "hidden":
                case "hideable":
                case "renderer":
                case "align":
                case "cellsalign":
                case "contenttype":
                case "cellclass":
                case "cellclassname":
                case "class":
                case "width":
                case "minwidth":
                case "maxwidth":
                    if (e == "align") {
                        this._rendercolumnheaders();
                        this.refresh()
                    } else {
                        if (e == "text" || e == "class" || e == "hidden" || e == "pinned" || e == "resizable" || e == "renderer") {
                            this._rendercolumnheaders();
                            this.refresh()
                        } else {
                            if (e == "width" || e == "maxwidth" || e == "minwidth") {
                                d._width = null;
                                d._percentagewidth = null;
                                this._updatecolumnwidths();
                                this.refresh()
                            } else {
                                this.refresh()
                            }
                        }
                    }
                    break
            }
        },
        getColumnProperty: function(b, d) {
            if (b == null || d == null) {
                return null
            }
            d = d.toLowerCase();
            var c = this.getColumn(b);
            return c[d]
        },
        setColumnProperty: function(b, c, d) {
            this._setcolumnproperty(b, c, d)
        },
        hideColumn: function(b) {
            this._setcolumnproperty(b, "hidden", true)
        },
        showColumn: function(b) {
            this._setcolumnproperty(b, "hidden", false)
        },
        updateBoundData: function(c, b) {
            this.databind(this.source, c, b)
        },
        refresh: function(c) {
            if (c != true) {
                var b = this;
                if (a.jqx.isHidden(b.host)) {
                    return
                }
                b.table[0].style.top = "0px";
                b.vScrollInstance.setPosition(0);
                b._renderrows();
                b._arrange();
                b._renderhorizontalscroll();
                b._updateTouchScrolling();
                b._refreshToolBar();
                b._updateFocusedCell()
            }
        },
        _updateFocusedCell: function() {
            var h = this;
            if (h.focusedCell) {
                h._updateCellsSelection();
                return
            }
            var d = h._views[h._view].type;
            var g = h._views[h._view];
            var c = h.showAllDayRow;
            if (g.timeRuler && (d === "dayView" || d === "weekView")) {
                if (g.timeRuler.showAllDayRow != undefined) {
                    c = g.timeRuler.showAllDayRow
                }
            }
            if (!c || (d != "dayView" && d != "weekView")) {
                h.focusedCell = h.rows[0].cells[0];
                if (h.rtl) {
                    h.focusedCell = h.rows[0].cells[h.rows[0].cells.length - 1]
                }
            } else {
                h.focusedCell = h.rows[1].cells[0];
                if (h.rtl) {
                    h.focusedCell = h.rows[1].cells[h.rows[1].cells.length - 1]
                }
            }
            if (h.focusedCell.className.indexOf("jqx-scheduler-disabled-cell") >= 0) {
                h.focusedCell = null;
                for (var f = 0; f < this.rows.length; f++) {
                    for (var e = 0; e < this.rows[f].cells.length; e++) {
                        var b = this.rows[f].cells[e];
                        if (b.className.indexOf("jqx-scheduler-disabled-cell") == -1) {
                            h.focusedCell = b;
                            break
                        }
                    }
                    if (h.focusedCell) {
                        break
                    }
                }
            }
            h._lastSelectedCell = h.focusedCell;
            h._updateCellsSelection()
        },
        _updateTouchScrolling: function() {
            var c = this.that;
            if (c.isTouchDevice()) {
                var e = a.jqx.mobile.getTouchEventName("touchstart");
                var d = a.jqx.mobile.getTouchEventName("touchend");
                var b = a.jqx.mobile.getTouchEventName("touchmove");
                if (c.schedulercontent) {
                    c.removeHandler(c.table, e + ".touchScroll");
                    c.removeHandler(c.table, b + ".touchScroll");
                    c.removeHandler(c.table, d + ".touchScroll");
                    c.removeHandler(c.table, "touchcancel.touchScroll");
                    a.jqx.mobile.touchScroll(c._table[0], Math.max(c.vScrollInstance.max, c.hScrollInstance.max), function(h, g) {
                        if (c.dragOrResize) {
                            return
                        }
                        if (g != null && c.vScrollBar.css("visibility") != "hidden") {
                            var f = c.vScrollInstance.value;
                            c.vScrollInstance.setPosition(g)
                        }
                        if (h != null && c.hScrollBar.css("visibility") != "hidden") {
                            var f = c.hScrollInstance.value;
                            c.hScrollInstance.setPosition(h)
                        }
                        c.scrolled = new Date()
                    }, this.element.id, this.hScrollBar, this.vScrollBar)
                }
            }
        },
        scrollWidth: function() {
            return this.hScrollInstance.max
        },
        scrollHeight: function() {
            return this.vScrollInstance.max
        },
        scrollLeft: function(b) {
            if (this.hScrollBar[0].style.visibility != "hidden") {
                this.hScrollInstance.setPosition(b)
            }
        },
        scrollTop: function(b) {
            if (this.vScrollBar[0].style.visibility != "hidden") {
                this.vScrollInstance.setPosition(b)
            }
        },
        render: function(i) {
            var e = "<div style='overflow: hidden; -webkit-appearance: none; outline: none; width:100%; height: 100%; align:left; border: 0px; padding: 0px; margin: 0px; left: 0px; top: 0px; valign:top; position: relative;'><div id='wrapper" + this.element.id + "' style='overflow: hidden; -webkit-appearance: none; border: none; background: transparent; outline: none; width:100%; height: 100%; padding: 0px; margin: 0px; align:left; left: 0px; top: 0px; valign:top; position: relative;'><div id='toolbar' style='visibility: hidden; align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div><div id='legendbartop' style='align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div><div id='filter' style='visibility: hidden; align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div><div id='content" + this.element.id + "' style='overflow: hidden; -webkit-appearance: none; border: none; background: transparent; outline: none; border: none; padding: 0px; margin-left: 0px; margin-top: 0px; margin-right: 0px; margin-bottom: 0px; align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div><div id='verticalScrollBar" + this.element.id + "' style='align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div><div id='horizontalScrollBar" + this.element.id + "' style='align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div><div id='bottomRight' style='align:left; valign:top; left: 0px; top: 0px; border: none; position: absolute;'></div><div id='aggregates' style='align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div><div id='legendbarbottom' style='align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div><div id='pager' style='z-index: 20; align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div></div></div>";
            this.element.innerHTML = e;
            this.wrapper = this.host.find("#wrapper" + this.element.id);
            this.content = this.host.find("#content" + this.element.id);
            this.content.addClass(this.toTP("jqx-reset"));
            var g = this.host.find("#verticalScrollBar" + this.element.id);
            var k = this.host.find("#horizontalScrollBar" + this.element.id);
            this.bottomRight = this.host.find("#bottomRight").addClass(this.toTP("jqx-grid-bottomright")).addClass(this.toTP("jqx-scrollbar-state-normal"));
            if (this.vScrollBar) {
                this.vScrollBar.jqxScrollBar("destroy")
            }
            if (this.hScrollBar) {
                this.hScrollBar.jqxScrollBar("destroy")
            }
            this.vScrollBar = g.jqxScrollBar({
                vertical: true,
                rtl: this.rtl,
                touchMode: this.touchMode,
                theme: this.theme,
                _triggervaluechanged: false
            });
            this.hScrollBar = k.jqxScrollBar({
                vertical: false,
                rtl: this.rtl,
                touchMode: this.touchMode,
                theme: this.theme,
                _triggervaluechanged: false
            });
            this.vScrollBar.css("visibility", "hidden");
            this.hScrollBar.css("visibility", "hidden");
            this.vScrollInstance = a.data(this.vScrollBar[0], "jqxScrollBar").instance;
            this.hScrollInstance = a.data(this.hScrollBar[0], "jqxScrollBar").instance;
            this.pager = this.host.find("#pager");
            this.pager[0].id = "pager" + this.element.id;
            this.toolbar = this.host.find("#toolbar");
            this.toolbar[0].id = "toolbar" + this.element.id;
            this.toolbar.addClass(this.toTP("jqx-scheduler-toolbar"));
            this.toolbar.addClass(this.toTP("jqx-widget-header"));
            this.legendbarbottom = this.host.find("#legendbarbottom");
            this.legendbarbottom[0].id = "legendbarbottom" + this.element.id;
            this.legendbarbottom.addClass(this.toTP("jqx-scheduler-legend-bar-bottom"));
            this.legendbarbottom.addClass(this.toTP("jqx-scheduler-legend-bar"));
            this.legendbarbottom.addClass(this.toTP("jqx-widget-header"));
            this.pager.addClass(this.toTP("jqx-grid-pager"));
            this.pager.addClass(this.toTP("jqx-widget-header"));
            this.legendbartop = this.host.find("#legendbartop");
            this.legendbartop.addClass(this.toTP("jqx-scheduler-legend-bar-top"));
            this.legendbartop.addClass(this.toTP("jqx-scheduler-legend-bar"));
            this.legendbartop.addClass(this.toTP("jqx-widget-header"));
            this.schedulertable = null;
            if (this.localizestrings) {
                this.localizestrings();
                if (this.localization != null) {
                    this.localizestrings(this.localization, false)
                }
            }
            this._builddataloadelement();
            this._cachedcolumns = this.columns;
            var b = this.source.datafields;
            if (b == null && this.source._source) {
                b = this.source._source.datafields
            }
            if (b) {
                for (var c = 0; c < this.columns.length; c++) {
                    var d = this.columns[c];
                    if (d && d.cellsFormat && d.cellsFormat.length > 2) {
                        for (var j = 0; j < b.length; j++) {
                            if (b[j].name == d.datafield && !b[j].format) {
                                b[j].format = d.cellsFormat;
                                break
                            }
                        }
                    }
                }
            }
            this.databind(this.source);
            if (this.showToolbar) {
                this.toolbar.css("visibility", "inherit")
            }
            if (this.showLegend) {
                this.legendbarbottom.css("visibility", "inherit")
            }
            this.tableheight = null;
            var f = this;
            var h = function() {
                if (f.content) {
                    f.content[0].scrollTop = 0;
                    f.content[0].scrollLeft = 0
                }
                if (f.schedulercontent) {
                    f.schedulercontent[0].scrollLeft = 0;
                    f.schedulercontent[0].scrollTop = 0
                }
            };
            this.removeHandler(this.content, "scroll");
            this.removeHandler(this.content, "mousedown");
            this.addHandler(this.content, "scroll", function(l) {
                h();
                return false
            });
            if (i !== true) {
                this._render()
            }
        },
        _render: function() {
            var g = this;
            if (g.dataview == null) {
                return
            }
            if (g._loading) {
                return
            }
            if (g.columnsHeight != 25 || g.columnGroups) {
                g._measureElement("column")
            }
            g.rowinfo = new Array();
            g._removeHandlers();
            if (g.columns == null) {
                g.columns = new a.jqx.schedulerDataCollection(g.element)
            } else {
                g._initializeColumns()
            }
            g.host.height(g.height);
            g.host.width(g.width);
            a.jqx.utilities.html(g.content, "");
            g.columnsheader = g.columnsheader || a('<div style="overflow: hidden;"></div>');
            g.columnsheader.remove();
            g.columnsheader.addClass(g.toTP("jqx-widget-header"));
            g.columnsheader.addClass(g.toTP("jqx-grid-header"));
            if (!g.showHeader) {
                g.columnsheader.css("display", "none")
            } else {
                if (g.columnsheader) {
                    g.columnsheader.css("display", "block")
                }
            }
            g.schedulercontent = g.schedulercontent || a('<div style="width: 100%; overflow: hidden; position: absolute;"></div>');
            g.schedulercontent.remove();
            var e = g.columnsHeight;
            e = g._preparecolumnGroups();
            g.columnsheader.height(e);
            g.content.append(g.columnsheader);
            g.content.append(g.schedulercontent);
            g._rendercolumnheaders();
            g.tableheight = null;
            g.schedulercontent.find("#contenttable" + g.element.id).remove();
            if (g.table != null) {
                g.table.remove();
                g.table = null
            }
            if (g.pinnedtable != null) {
                g.pinnedtable.remove();
                g.pinnedtable = null
            }
            g.table = a('<div id="contenttable' + g.element.id + '" style="overflow: hidden; position: relative;"></div>');
            g.pinnedtable = a('<div id="contenttable2' + g.element.id + '" style="display: none; overflow: hidden; position: relative;"></div>');
            g.schedulercontent.addClass(g.toTP("jqx-grid-content"));
            g.schedulercontent.addClass(g.toTP("jqx-widget-content"));
            g.schedulercontent.append(g.table);
            if (g.tableRows == 1) {
                g.schedulercontent.append(g.pinnedtable)
            }
            g._renderrows();
            g._arrange();
            g._resourcesElements = new Array();
            var d = function(h, i) {
                h.children().remove();
                var h = a("<div style='margin:5px; position: relative;'></div>").appendTo(h);
                g._resourcesElements[i] = new Array();
                a.each(g._resources, function(n) {
                    var l = g.getColors(n);
                    var m = this.toString();
                    var o = a("<div data-toggle='on' style='border-color: " + l.border + "; background: " + l.background + ";' class='" + g.toThemeProperty("jqx-scheduler-legend") + "'></div>");
                    o.appendTo(h);
                    var k = a("<div class='" + g.toThemeProperty("jqx-scheduler-legend-label") + "'>" + m + "</div>");
                    k.appendTo(h);
                    g._resourcesElements[i][m] = o;
                    var j = function() {
                        if (o.attr("data-toggle") == "on") {
                            g.hideAppointmentsByResource(m)
                        } else {
                            g.showAppointmentsByResource(m)
                        }
                    };
                    g.addHandler(o, "mousedown", function() {
                        j();
                        return false
                    });
                    g.addHandler(k, "mousedown", function() {
                        j();
                        return false
                    })
                })
            };
            d(g.legendbarbottom, "bottom");
            d(g.legendbartop, "top");
            if (g.legendPosition == "top") {
                g.legendbarbottom.hide()
            } else {
                g.legendbartop.hide()
            }
            if (g._resources.length == 0) {
                g.legendbarbottom.hide();
                g.legendbartop.hide()
            }
            if (g.renderToolBar) {
                g.renderToolBar(g.toolbar)
            } else {
                g._renderToolBar()
            }
            if (g.disabled) {
                g.host.addClass(g.toThemeProperty("jqx-fill-state-disabled"))
            }
            g._renderhorizontalscroll();
            g._addHandlers();
            g.clearSelection();
            var c = g._views[g._view].type;
            var f = g._views[g._view];
            var b = g.showAllDayRow;
            if (f.timeRuler && (c === "dayView" || c === "weekView")) {
                if (f.timeRuler.showAllDayRow != undefined) {
                    b = f.timeRuler.showAllDayRow
                }
            }
            if (!b || (c != "dayView" && c != "weekView")) {
                g.focusedCell = g.rows[0].cells[0]
            } else {
                g.focusedCell = g.rows[1].cells[0]
            }
            g._lastSelectedCell = g.focusedCell;
            g._updateCellsSelection()
        },
        clear: function() {
            if (this.source) {
                this.source.records = new Array();
                this.source.hierarchy = new Array()
            }
            this.dataview._filteredData = new Array();
            this.databind(null);
            this._render()
        },
        getAppointmentElement: function(e) {
            var b = null;
            if (e.className.indexOf("jqx-scheduler-appointment") >= 0 && e.className.indexOf("jqx-scheduler-appointment-inner-content") == -1 && e.className.indexOf("jqx-scheduler-appointment-content") == -1 && e.className.indexOf("jqx-scheduler-appointment-resize-indicator") == -1) {
                b = e
            }
            var d = e;
            for (var c = 0; c < 4; c++) {
                if (d.parentNode) {
                    if (d.className.indexOf("jqx-scheduler-appointment") >= 0 && d.className.indexOf("jqx-scheduler-appointment-innter-content") == -1 && d.className.indexOf("jqx-scheduler-appointment-content") == -1 && d.className.indexOf("jqx-scheduler-appointment-resize-indicator") == -1) {
                        b = d
                    }
                    d = d.parentNode
                } else {
                    break
                }
            }
            return b
        },
        getJQXAppointmentByElement: function(d) {
            var f = this;
            var e = d.getAttribute ? d.getAttribute("data-key") : d.attr("data-key");
            if (e.indexOf(".") >= 0) {
                var c = e.substring(0, e.indexOf("."));
                var h = e.substring(e.indexOf(".") + 1);
                var g = f.appointmentsByKey[c];
                var b = g.jqxAppointment.renderedAppointments[e]
            } else {
                var g = f.appointmentsByKey[e];
                var b = g.jqxAppointment
            }
            return b
        },
        _renderToolBar: function() {
            var i = this;
            var b = a('<div style="width: 100%; height: 100%; position: relative;"></div>');
            var k = (this.toolbarHeight - 20) / 2;
            b.css("top", k);
            i.toolbarLeftButton = a('<div type="button" style="outline: none; padding: 0px; margin-top: 3px; margin-left: 3px; margin-right: 3px; width: 27px; float: left;"></div>');
            i.toolbarRightButton = a('<div type="button" style="outline: none; padding: 0px; margin-top: 3px; margin-right: 3px; width: 27px; float: left;"></div>');
            i.toolbarLeftButton.attr("title", i.schedulerLocalization.toolBarPreviousButtonString);
            i.toolbarRightButton.attr("title", i.schedulerLocalization.toolBarNextButtonString);
            i.toolbarRightButton.jqxButton({
                enableHover: false,
                enableDefault: false,
                enablePressed: false,
                cursor: "pointer",
                disabled: i.disabled,
                theme: i.theme
            });
            i.toolbarLeftButton.jqxButton({
                enableHover: false,
                enableDefault: false,
                enablePressed: false,
                cursor: "pointer",
                disabled: i.disabled,
                theme: i.theme
            });
            i.dateTimeInput = a('<div style="outline: none; padding: 0px; margin-top: 0px; margin-right: 3px; width: 27px; float: left;"></div>');
            i.toolbarLeftButton.find(".jqx-icon-arrow-left").remove();
            i.toolbarRightButton.find(".jqx-icon-arrow-right").remove();
            var e = a("<div style='outline: none; margin-left: 6px; width: 15px; height: 15px;'></div>");
            e.addClass(i.toThemeProperty("jqx-icon-arrow-left"));
            i.toolbarLeftButton.wrapInner(e);
            var j = a("<div style='outline: none; margin-left: 6px; width: 15px; height: 15px;'></div>");
            j.addClass(i.toThemeProperty("jqx-icon-arrow-right"));
            i.toolbarRightButton.wrapInner(j);
            if (i.rtl) {
                i.toolbarLeftButton.css("float", "right");
                i.toolbarRightButton.css("float", "right");
                i.dateTimeInput.css("float", "right")
            }
            i.addHandler(i.toolbarRightButton, "mouseenter", function() {
                j.addClass(i.toThemeProperty("jqx-icon-arrow-right-hover"))
            });
            i.addHandler(i.toolbarLeftButton, "mouseenter", function() {
                e.addClass(i.toThemeProperty("jqx-icon-arrow-left-hover"))
            });
            i.addHandler(i.toolbarRightButton, "mouseleave", function() {
                j.removeClass(i.toThemeProperty("jqx-icon-arrow-right-hover"))
            });
            i.addHandler(i.toolbarLeftButton, "mouseleave", function() {
                e.removeClass(i.toThemeProperty("jqx-icon-arrow-left-hover"))
            });
            i.addHandler(i.toolbarRightButton, "mousedown", function() {
                j.addClass(i.toThemeProperty("jqx-icon-arrow-right-selected"))
            });
            i.addHandler(i.toolbarRightButton, "mouseup", function() {
                j.removeClass(i.toThemeProperty("jqx-icon-arrow-right-selected"))
            });
            i.addHandler(i.toolbarLeftButton, "mousedown", function() {
                e.addClass(i.toThemeProperty("jqx-icon-arrow-left-selected"))
            });
            i.addHandler(i.toolbarLeftButton, "mouseup", function() {
                e.removeClass(i.toThemeProperty("jqx-icon-arrow-left-selected"))
            });
            i.addHandler(a(document), "mouseup.pagerbuttons" + i.element.id, function() {
                j.removeClass(i.toThemeProperty("jqx-icon-arrow-right-selected"));
                e.removeClass(i.toThemeProperty("jqx-icon-arrow-left-selected"))
            });
            i.addHandler(i.toolbarRightButton, "click", function() {
                if (!i.toolbarRightButton.jqxButton("disabled")) {
                    if (!i.rtl) {
                        i.navigateForward()
                    } else {
                        i.navigateBackward()
                    }
                    i.focus()
                }
            });
            i.addHandler(i.toolbarLeftButton, "click", function() {
                if (!i.toolbarLeftButton.jqxButton("disabled")) {
                    if (!i.rtl) {
                        i.navigateBackward()
                    } else {
                        i.navigateForward()
                    }
                    i.focus()
                }
            });
            i.toolbar.children().remove();
            i.toolbar.append(b);
            if (!i.rtl) {
                b.append(i.toolbarLeftButton);
                b.append(i.dateTimeInput);
                b.append(i.toolbarRightButton)
            } else {
                b.append(i.toolbarRightButton);
                b.append(i.dateTimeInput);
                b.append(i.toolbarLeftButton)
            }
            i.toolbarDetails = a('<div class="' + i.toTP("jqx-scheduler-toolbar-details") + '" style="margin-left: 7px; margin-top:2px; float: left;"></div>');
            i.toolbarViews = a('<div style="margin-right: 10px; margin-top:0px; float: right;"></div>');
            if (i.rtl) {
                i.toolbarDetails.css("float", "right");
                i.toolbarDetails.css("margin-left", "0px");
                i.toolbarDetails.css("margin-right", "7px");
                i.toolbarViews.css("margin-left", "10px");
                i.toolbarViews.css("margin-right", "0px");
                i.toolbarViews.css("float", "left")
            }
            var h = new Array();
            if (!i.rtl) {
                h.push(i.toolbarLeftButton);
                h.push(i.dateTimeInput);
                h.push(i.toolbarRightButton)
            } else {
                h.push(i.toolbarRightButton);
                h.push(i.dateTimeInput);
                h.push(i.toolbarLeftButton)
            }
            var l = i._views.length - 1;
            a.each(i._views, function(p) {
                var q = "";
                var n = p;
                if (i.rtl) {
                    n = l - p
                }
                if (i._views[n].text != undefined) {
                    q = i._views[n].text
                } else {
                    switch (i._views[n].type) {
                        case "dayView":
                            q = i.schedulerLocalization.dayViewString;
                            break;
                        case "weekView":
                            q = i.schedulerLocalization.weekViewString;
                            break;
                        case "monthView":
                            q = i.schedulerLocalization.monthViewString;
                            break;
                        case "agendaView":
                            q = i.schedulerLocalization.agendaViewString;
                            break;
                        case "timelineDayView":
                            q = i.schedulerLocalization.timelineDayViewString;
                            break;
                        case "timelineWeekView":
                            q = i.schedulerLocalization.timelineWeekViewString;
                            break;
                        case "timelineMonthView":
                            q = i.schedulerLocalization.timelineMonthViewString;
                            break
                    }
                }
                var o = '<span data-type="' + i._views[n].type + '" style="cursor: pointer; outline: none; margin-left: -1px; position: relative;">' + q + "</span>";
                var m = a(o);
                m.addClass(i.toTP("jqx-group-button-normal jqx-button jqx-fill-state-normal"));
                h.push(m);
                if (n == 0) {
                    if (!i.rtl) {
                        m.addClass(i.toTP("jqx-rc-l"))
                    } else {
                        m.addClass(i.toTP("jqx-rc-r"))
                    }
                }
                if (n == i._views.length - 1) {
                    if (!i.rtl) {
                        m.addClass(i.toTP("jqx-rc-r"))
                    } else {
                        m.addClass(i.toTP("jqx-rc-l"))
                    }
                }
                if (n === i._view) {
                    m.addClass(i.toTP("jqx-fill-state-pressed"))
                }
                m.mouseenter(function() {
                    m.addClass(i.toTP("jqx-fill-state-hover"))
                });
                m.mouseleave(function() {
                    m.removeClass(i.toTP("jqx-fill-state-hover"))
                });
                m.mousedown(function() {
                    i._setView(n);
                    i.focus()
                });
                a(i.toolbarViews).append(m)
            });
            b.append(i.toolbarDetails);
            b.append(i.toolbarViews);
            if (i._views.length < 2) {
                i.toolbarViews.hide()
            }
            i.dateTimeInput.jqxDateTimeInput({
                dropDownWidth: 220,
                dropDownHeight: 220,
                rtl: i.rtl,
                localization: i._getDateTimeInputLocalization(),
                firstDayOfWeek: i.schedulerLocalization.firstDay,
                todayString: i.schedulerLocalization.todayString,
                clearString: i.schedulerLocalization.clearString,
                showFooter: true,
                height: 19,
                width: 18,
                renderMode: "simple"
            });
            i.addHandler(i.dateTimeInput, "change", function(m) {
                if (!i.fromNavigate) {
                    i.navigateTo(new a.jqx.date(m.args.date, i.timeZone));
                    i.focus()
                }
            });
            i.tabKeyElements = h;
            var g = i._views[i._view].type;
            var d = function(m) {
                var o = a.jqx.formatDate(i.getViewStart().toDate(), m, i.schedulerLocalization);
                var n = a.jqx.formatDate(i.getViewEnd().toDate(), m, i.schedulerLocalization);
                if (g === "dayView" || g === "timelineDayView") {
                    i.toolbarDetails.html(o)
                } else {
                    i.toolbarDetails.html(o + " - " + n)
                }
                if (i.rtl) {
                    i.toolbarDetails.addClass("jqx-rtl");
                    i.toolbarDetails.html("<span style='direction:rtl;'>" + n + "<span> - <span style='direction:rtl;'>" + o + "</span>")
                } else {
                    i.toolbarDetails[0].style.direction = "ltr"
                }
            };
            d(i.toolBarRangeFormat);
            var c = i.toolbarViews.width() + i.toolbarDetails.width() + 120;
            var f = i.toolBarRangeFormat;
            if (c > i.host.width()) {
                f = i.toolBarRangeFormatAbbr;
                d(f);
                var c = i.toolbarViews.width() + i.toolbarDetails.width() + 120;
                if (c > i.host.width()) {
                    i.toolbarDetails.hide();
                    var c = i.toolbarViews.width() + 120;
                    if (c > i.host.width()) {
                        i.toolbarViews.hide()
                    }
                }
            } else {
                i.currentToolbarFormat = i.toolBarRangeFormat
            }
        },
        _setView: function(g) {
            var f = this;
            f.toolbarViews.find(".jqx-fill-state-pressed").removeClass(f.toTP("jqx-fill-state-pressed"));
            if (!f.rtl) {
                a(f.toolbarViews.children()[g]).addClass(f.toTP("jqx-fill-state-pressed"))
            } else {
                a(f.toolbarViews.children()[f._views.length - 1 - g]).addClass(f.toTP("jqx-fill-state-pressed"))
            }
            if (f._view === g) {
                return
            }
            var b = f.vScrollBar[0].style.visibility;
            if (b) {
                if (!f._scrollPosition) {
                    f._scrollPosition = new Array()
                }
                f._scrollPosition[f._view] = f.vScrollInstance.value
            }
            var c = f.hScrollBar[0].style.visibility;
            if (c) {
                if (!f._hscrollPosition) {
                    f._hscrollPosition = new Array()
                }
                f._hscrollPosition[f._view] = f.hScrollInstance.value
            }
            var i = f._views[f._view].type;
            var e = f._views[g].type;
            f._view = g;
            f._refreshColumns();
            f.refresh();
            var h = f.hScrollBar[0].style.visibility;
            if (c !== h) {
                f._renderrows();
                f._updateTouchScrolling()
            }
            if (f._scrollPosition[f._view]) {
                f.vScrollInstance.setPosition(f._scrollPosition[f._view])
            }
            if (f._hscrollPosition[f._view]) {
                f.hScrollInstance.setPosition(f._hscrollPosition[f._view])
            }
            if (f.selectedJQXAppointment) {
                f._ensureAppointmentVisible(f.selectedJQXAppointment)
            }
            var d = f.getViewStart();
            var j = a.jqx.scheduler.utilities.getEndOfDay(f.getViewEnd());
            f._raiseEvent("viewChange", {
                date: f.date,
                from: d,
                to: j,
                oldViewType: i,
                newViewType: e
            })
        },
        _getDateTimeInputLocalization: function() {
            var b = this;
            var c = {};
            c.backString = b.schedulerLocalization.backString;
            c.forwardString = b.schedulerLocalization.forwardString;
            c.todayString = b.schedulerLocalization.todayString;
            c.clearString = b.schedulerLocalization.clearString;
            c.calendar = b.schedulerLocalization;
            return c
        },
        setView: function(b) {
            switch (b) {
                case "dayView":
                    this._setView(0);
                    break;
                case "weekView":
                    this._setView(1);
                    break;
                case "monthView":
                    this._setView(2);
                    break;
                case "timelineDayView":
                    this._setView(3);
                    break;
                case "timelineWeekView":
                    this._setView(4);
                    break;
                case "timelineMonthView":
                    this._setView(5);
                    break
            }
            this.view = b
        },
        navigateForward: function() {
            var d = this;
            var h = this._views[this._view].type;
            var i = this._views[this._view];
            var c = new a.jqx.date(this.date, d.timeZone);
            var j = function() {
                while ((c.dayOfWeek() == 0 || c.dayOfWeek() == 6) && false === i.showWeekends) {
                    c = c.addDays(1)
                }
                return c
            };
            switch (h) {
                case "dayView":
                case "timelineDayView":
                    c = c.addDays(1);
                    c = j();
                    break;
                case "weekView":
                case "timelineWeekView":
                    c = c.addDays(7);
                    break;
                case "monthView":
                case "timelineMonthView":
                    var g = c.day();
                    var e = c.month();
                    var f = c.year();
                    var b = new a.jqx.date(f, e, 1);
                    b.timeZone = d.timeZone;
                    c = b.addMonths(1);
                    break;
                case "agendaView":
                    if (i.days) {
                        c = c.addDays(i.days)
                    } else {
                        c = c.addDays(7)
                    }
                    break
            }
            return this.navigateTo(c)
        },
        navigateBackward: function() {
            var d = this;
            var h = this._views[this._view].type;
            var i = this._views[this._view];
            var c = new a.jqx.date(this.date, d.timeZone);
            var j = function() {
                while ((c.dayOfWeek() == 0 || c.dayOfWeek() == 6) && false === i.showWeekends) {
                    c = c.addDays(-1)
                }
                return c
            };
            switch (h) {
                case "dayView":
                case "timelineDayView":
                    c = c.addDays(-1);
                    c = j();
                    break;
                case "weekView":
                case "timelineWeekView":
                    c = c.addDays(-7);
                    break;
                case "monthView":
                case "timelineMonthView":
                    var g = c.day();
                    var e = c.month();
                    var f = c.year();
                    var b = new a.jqx.date(f, e, 1);
                    b.timeZone = d.timeZone;
                    c = b.addMonths(-1);
                    break;
                case "agendaView":
                    if (i.days) {
                        c = c.addDays(-i.days)
                    } else {
                        c = c.addDays(-7)
                    }
                    break
            }
            return this.navigateTo(c)
        },
        _refreshToolBar: function(d) {
            var f = this;
            var g = f.getViewStart();
            var e = f.getViewEnd();
            var c = function(i) {
                var l = a.jqx.formatDate(g.toDate(), i, f.schedulerLocalization);
                var j = a.jqx.formatDate(e.toDate(), i, f.schedulerLocalization);
                var h = f._views[f._view].type;
                var k = f._views[f._view];
                if (k.showWeekends === false) {
                    if (g.dayOfWeek() == 0 || g.dayOfWeek() == 6) {
                        g = g.addDays(1)
                    }
                    if (g.dayOfWeek() == 0 || g.dayOfWeek() == 6) {
                        g = g.addDays(1)
                    }
                    if (e.dayOfWeek() == 0 || e.dayOfWeek() == 6) {
                        e = e.addDays(-1)
                    }
                    if (e.dayOfWeek() == 0 || e.dayOfWeek() == 6) {
                        e = e.addDays(-1)
                    }
                    var l = a.jqx.formatDate(g.toDate(), i, f.schedulerLocalization);
                    var j = a.jqx.formatDate(e.toDate(), i, f.schedulerLocalization)
                }
                if (h === "dayView" || h === "timelineDayView") {
                    f.toolbarDetails.html(l)
                } else {
                    f.toolbarDetails.html(l + " - " + j)
                }
                if (f.rtl) {
                    f.toolbarDetails.addClass("jqx-rtl");
                    f.toolbarDetails.html("<span style='direction:rtl;'>" + j + "<span> - <span style='direction:rtl;'>" + l + "</span>")
                } else {
                    f.toolbarDetails[0].style.direction = "ltr"
                }
            };
            if (d) {
                c(f._lastFormatString || f.toolBarRangeFormat);
                return
            }
            c(f.toolBarRangeFormat);
            f.toolbarDetails.show();
            f.toolbarViews.show();
            var b = f.toolbarViews.width() + f.toolbarDetails.width() + 120;
            if (b > f.host.width()) {
                c(f.toolBarRangeFormatAbbr);
                var b = f.toolbarViews.width() + f.toolbarDetails.width() + 120;
                if (b > f.host.width()) {
                    f.toolbarDetails.hide();
                    var b = f.toolbarViews.width() + 120;
                    if (b > f.host.width()) {
                        f.toolbarViews.hide()
                    }
                }
            }
        },
        navigateTo: function(b) {
            var d = this;
            if (a.type(b) == "date") {
                b = new a.jqx.date(b)
            }
            if (b < this.min) {
                return
            }
            if (b > this.max) {
                return
            }
            b.timeZone = d.timeZone;
            d.date = b;
            d._refreshToolBar(true);
            d.fromNavigate = true;
            d.dateTimeInput.val(b.toDate());
            d.fromNavigate = false;
            d._refreshColumnTitles();
            d._renderrows();
            d._updateFocusedCell();
            if (d.resources) {
                d._renderhorizontalscroll()
            }
            var e = d.getViewStart();
            var c = a.jqx.scheduler.utilities.getEndOfDay(d.getViewEnd());
            d._raiseEvent("dateChange", {
                date: b,
                from: e,
                to: c
            })
        },
        _preparecolumnGroups: function() {
            var n = this.columnsHeight;
            if (this.columnGroups) {
                this.columnshierarchy = new Array();
                if (this.columnGroups.length) {
                    var l = this;
                    for (var f = 0; f < this.columnGroups.length; f++) {
                        this.columnGroups[f].parent = null;
                        this.columnGroups[f].groups = null
                    }
                    for (var f = 0; f < this.columns.records.length; f++) {
                        this.columns.records[f].parent = null;
                        this.columns.records[f].groups = null
                    }
                    var m = function(j) {
                        for (var s = 0; s < l.columnGroups.length; s++) {
                            var t = l.columnGroups[s];
                            if (t.name === j) {
                                return t
                            }
                        }
                        return null
                    };
                    for (var f = 0; f < this.columnGroups.length; f++) {
                        var o = this.columnGroups[f];
                        if (!o.groups) {
                            o.groups = null
                        }
                        if (o.parentGroup) {
                            o.parentgroup = o.parentGroup
                        }
                        if (o.parentgroup) {
                            var q = m(o.parentgroup);
                            if (q) {
                                o.parent = q;
                                if (!q.groups) {
                                    q.groups = new Array()
                                }
                                if (q.groups.indexOf(o) === -1) {
                                    q.groups.push(o)
                                }
                            }
                        }
                    }
                    for (var f = 0; f < this.columns.records.length; f++) {
                        var o = this.columns.records[f];
                        if (o.columngroup) {
                            var q = m(o.columngroup);
                            if (q) {
                                if (!q.groups) {
                                    q.groups = new Array()
                                }
                                o.parent = q;
                                if (q.groups.indexOf(o) === -1) {
                                    q.groups.push(o)
                                }
                            }
                        }
                    }
                    var p = 0;
                    for (var f = 0; f < this.columns.records.length; f++) {
                        var o = this.columns.records[f];
                        var c = o;
                        o.level = 0;
                        while (c.parent) {
                            c = c.parent;
                            o.level++
                        }
                        var c = o;
                        var b = o.level;
                        p = Math.max(p, o.level);
                        while (c.parent) {
                            c = c.parent;
                            if (c) {
                                c.level = --b
                            }
                        }
                    }
                    var k = function(w) {
                        var v = new Array();
                        if (w.columngroup) {
                            v.push(w)
                        }
                        if (!w.groups) {
                            return new Array()
                        }
                        for (var u = 0; u < w.groups.length; u++) {
                            if (w.groups[u].columngroup) {
                                v.push(w.groups[u])
                            } else {
                                if (w.groups[u].groups) {
                                    var t = k(w.groups[u]);
                                    for (var s = 0; s < t.length; s++) {
                                        v.push(t[s])
                                    }
                                }
                            }
                        }
                        return v
                    };
                    for (var f = 0; f < this.columnGroups.length; f++) {
                        var o = this.columnGroups[f];
                        var d = k(o);
                        o.columns = d;
                        var g = new Array();
                        var r = 0;
                        for (var e = 0; e < d.length; e++) {
                            g.push(this.columns.records.indexOf(d[e]));
                            if (d[e].pinned) {
                                r++
                            }
                        }
                        if (r != 0) {
                            throw new Error("jqxScheduler: Column Groups initialization Error. Please, check the initialization of the jqxScheduler's columns array. The columns in a column group cannot be pinned.")
                        }
                        g.sort(function(j, i) {
                            j = parseInt(j);
                            i = parseInt(i);
                            if (j < i) {
                                return -1
                            }
                            if (j > i) {
                                return 1
                            }
                            return 0
                        });
                        for (var h = 1; h < g.length; h++) {
                            if (g[h] != g[h - 1] + 1) {
                                throw new Error("jqxScheduler: Column Groups initialization Error. Please, check the initialization of the jqxScheduler's columns array. The columns in a column group are expected to be siblings in the columns array.");
                                this.host.remove()
                            }
                        }
                    }
                }
                this.columnGroupslevel = 1 + p;
                n = this.columnGroupslevel * this.columnsHeight
            }
            return n
        },
        wheel: function(d, c) {
            if (c.editRecurrenceDialog && c.editRecurrenceDialog.jqxWindow("isOpen")) {
                return true
            }
            if (c._editDialog && c._editDialog.jqxWindow("isOpen")) {
                return true
            }
            if (c.autoheight && c.hScrollBar.css("visibility") == "hidden") {
                d.returnValue = true;
                return true
            }
            var e = 0;
            if (!d) {
                d = window.event
            }
            if (d.originalEvent && d.originalEvent.wheelDelta) {
                d.wheelDelta = d.originalEvent.wheelDelta
            }
            if (d.wheelDelta) {
                e = d.wheelDelta / 120
            } else {
                if (d.detail) {
                    e = -d.detail / 3
                }
            }
            if (e) {
                var b = c._handleDelta(e);
                if (b) {
                    if (d.preventDefault) {
                        d.preventDefault()
                    }
                    if (d.originalEvent != null) {
                        d.originalEvent.mouseHandled = true
                    }
                    if (d.stopPropagation != undefined) {
                        d.stopPropagation()
                    }
                }
                if (b) {
                    b = false;
                    d.returnValue = b;
                    return b
                } else {
                    return false
                }
            }
            if (d.preventDefault) {
                d.preventDefault()
            }
            d.returnValue = false
        },
        _handleDelta: function(d) {
            if (this.vScrollBar.css("visibility") != "hidden") {
                var c = this.vScrollInstance.value;
                if (d < 0) {
                    this.vScrollInstance.setPosition(this.vScrollInstance.value + 2 * 10)
                } else {
                    this.vScrollInstance.setPosition(this.vScrollInstance.value - 2 * 10)
                }
                var b = this.vScrollInstance.value;
                if (c != b) {
                    return true
                }
            } else {
                if (this.hScrollBar.css("visibility") != "hidden") {
                    var c = this.hScrollInstance.value;
                    if (d > 0) {
                        if (this.hScrollInstance.value > 2 * 10) {
                            this.hScrollInstance.setPosition(this.hScrollInstance.value - 2 * 10)
                        } else {
                            this.hScrollInstance.setPosition(0)
                        }
                    } else {
                        if (this.hScrollInstance.value < this.hScrollInstance.max) {
                            this.hScrollInstance.setPosition(this.hScrollInstance.value + 2 * 10)
                        } else {
                            this.hScrollInstance.setPosition(this.hScrollInstance.max)
                        }
                    }
                    var b = this.hScrollInstance.value;
                    if (c != b) {
                        return true
                    }
                }
            }
            return false
        },
        _removeHandlers: function() {
            var e = this;
            if (e._mousewheelfunc) {
                e.removeHandler(this.host, "mousewheel", e._mousewheelfunc)
            }
            e.removeHandler(a(document), "keydown.scheduler" + e.element.id);
            e.removeHandler(e.host, "focus");
            e.removeHandler(e.host, "blur");
            e.removeHandler(e.host, "dragstart." + e.element.id);
            e.removeHandler(e.host, "selectstart." + e.element.id);
            e.removeHandler(a(window), "jqxReady." + e.element.id);
            e.removeHandler(e.host, "mousewheel", e._mousewheelfunc);
            var d = "mousedown";
            if (e.isTouchDevice()) {
                d = a.jqx.mobile.getTouchEventName("touchstart");
                if (a.jqx.browser.msie && a.jqx.browser.version < 10) {
                    d = "mousedown"
                }
            }
            if (e.table) {
                e.removeHandler(e.table, "mouseleave")
            }
            var c = "mousemove.scheduler" + e.element.id;
            var f = "mouseup.scheduler" + e.element.id;
            if (e.isTouchDevice() && e.touchMode !== true) {
                c = a.jqx.mobile.getTouchEventName("touchmove") + ".scheduler" + e.element.id;
                f = a.jqx.mobile.getTouchEventName("touchend") + ".scheduler" + e.element.id
            }
            e.removeHandler(a(document), c);
            e.removeHandler(a(document), f);
            if (!e.isTouchDevice()) {
                try {
                    if (document.referrer != "" || window.frameElement) {
                        if (window.top != null && window.top != window.self) {
                            var g = null;
                            if (window.parent && document.referrer) {
                                g = document.referrer
                            }
                            if (g && g.indexOf(document.location.host) != -1) {
                                e.removeHandler(a(window.top.document), "mouseup.jqxscheduler" + e.element.id)
                            }
                        }
                    }
                } catch (b) {}
            }
            e.removeHandler(e.host, c);
            e.removeHandler(a(document), "keydown.jqxscheduler" + e.element.id);
            e.removeHandler(e.host, "keydown");
            if (e.table) {
                e.removeHandler(e.table, "dblclick");
                e.removeHandler(e.pinnedtable, d);
                e.removeHandler(e.table, d)
            }
        },
        selectAppointment: function(b) {
            if (this.appointmentsByKey[b]) {
                this._selectAppointment(this.appointmentsByKey[b].jqxAppointment)
            }
        },
        _selectAppointment: function(d, i, f) {
            if (!d) {
                return
            }
            var h = this;
            if (h.selectedAppointment) {
                h.clearAppointmentsSelection()
            }
            var e = d.id;
            var c = a('[data-key="' + e + '"]');
            if (c.length > 0) {
                h.selectedJQXAppointment = d;
                if (!i) {
                    h.selectedAppointment = a(c[0])
                } else {
                    h.selectedAppointment = a(i)
                }
                var b = h._views[h._view].type;
                var g = h._views[h._view];
                if (b == "agendaView") {
                    h.clearSelection();
                    return
                }
                c.addClass(h.toTP("jqx-scheduler-selected-appointment"));
                if (d.resizable) {
                    c.find(".jqx-scheduler-appointment-resize-indicator").show()
                }
                switch (b) {
                    case "dayView":
                        a(c).find(".jqx-scheduler-appointment-left-resize-indicator").hide();
                        a(c).find(".jqx-scheduler-appointment-right-resize-indicator").hide();
                        break;
                    case "weekView":
                        break;
                    case "monthView":
                    case "timeLineMonthView":
                    case "timeLineDayView":
                    case "timeLineWeekView":
                        if (c.length > 1) {
                            a.each(c, function(j) {
                                if (!h.rtl) {
                                    if (j > 0) {
                                        a(this).find(".jqx-scheduler-appointment-left-resize-indicator").hide()
                                    }
                                    if (j < c.length - 1) {
                                        a(this).find(".jqx-scheduler-appointment-right-resize-indicator").hide()
                                    }
                                } else {
                                    if (j > 0) {
                                        a(this).find(".jqx-scheduler-appointment-right-resize-indicator").hide()
                                    }
                                    if (j < c.length - 1) {
                                        a(this).find(".jqx-scheduler-appointment-left-resize-indicator").hide()
                                    }
                                }
                            })
                        }
                        break
                }
                if (f == "mouse") {
                    h.clearSelection();
                    return
                }
            }
            h.clearSelection()
        },
        clearAppointmentsSelection: function() {
            var d = this;
            if (d.selectedAppointment) {
                var c = d.selectedAppointment.attr("data-key");
                var b = a('[data-key="' + c + '"]');
                b.removeClass(d.toTP("jqx-scheduler-selected-appointment"));
                b.find(".jqx-scheduler-appointment-resize-indicator").hide();
                d.selectedAppointment = null;
                d.selectedJQXAppointment = null
            }
        },
        selectCell: function(c, m, l) {
            var g = this;
            var n = c.toDate();
            for (var f = 0; f < g.rows.length; f++) {
                for (var e = 0; e < g.rows[f].cells.length; e++) {
                    var k = g.rows[f].cells[e];
                    if (l) {
                        if (k.getAttribute("data-view") !== l) {
                            continue
                        }
                    }
                    var h = k.getAttribute("data-date");
                    var b = g._getDateByString;
                    var d = b(h);
                    if (m && k.getAttribute("data-end-date")) {
                        if (d.valueOf() == c.valueOf()) {
                            k.setAttribute("data-selected", "true");
                            g.focusedCell = k;
                            g._lastSelectedCell = k;
                            g._updateCellsSelection();
                            g._ensureVisible(g.focusedCell);
                            return
                        }
                    } else {
                        if (!m && k.getAttribute("data-end-date")) {
                            continue
                        }
                    }
                    if (d.valueOf() == n.valueOf()) {
                        k.setAttribute("data-selected", "true");
                        g.focusedCell = k;
                        g._lastSelectedCell = k;
                        g._updateCellsSelection();
                        g._ensureVisible(g.focusedCell);
                        return
                    }
                }
            }
            g._updateCellsSelection()
        },
        selectRange: function(m, n, q, p) {
            var k = this;
            if (m < this.min) {
                m = this.min
            }
            if (n > this.max) {
                n = this.max
            }
            var f = m.toDate();
            var d = n.toDate();
            var g = false;
            for (var h = 0; h < k.rows.length; h++) {
                for (var e = 0; e < k.rows[h].cells.length; e++) {
                    var o = k.rows[h].cells[e];
                    if (p) {
                        if (o.getAttribute("data-view") !== p) {
                            continue
                        }
                    }
                    var l = o.getAttribute("data-date");
                    var b = k._getDateByString;
                    var c = b(l);
                    if (q && o.getAttribute("data-end-date")) {
                        if (c.valueOf() >= f.valueOf() && c.valueOf() <= d.valueOf()) {
                            o.setAttribute("data-selected", "true")
                        }
                    } else {
                        if (!q && o.getAttribute("data-end-date")) {
                            continue
                        }
                    }
                    if (c.valueOf() >= f.valueOf() && c.valueOf() <= d.valueOf()) {
                        o.setAttribute("data-selected", "true");
                        if (!g) {
                            k._lastSelectedCell = o;
                            k.focusedCell = o;
                            g = true
                        }
                    }
                }
            }
            k._updateCellsSelection()
        },
        _selectRange: function(b, r) {
            var h = this;
            if (h._views[h._view].type == "agendaView") {
                return
            }
            var k = b;
            var v = r.getAttribute("data-view");
            if (b.getAttribute("data-view") !== v) {
                return
            }
            var q = r.getAttribute("data-date");
            var m = k.getAttribute("data-date");
            if (null == q || null == m) {
                return
            }
            var C = r.getAttribute("data-end-date");
            var F = k.getAttribute("data-end-date");
            var H = C != null || F != null;
            var s = C != null && F != null;
            var n = h._getDateByString;
            var u = n(q);
            var t = n(m);
            if (u < this.min.toDate()) {
                u = this.min.toDate()
            }
            if (t < this.min.toDate()) {
                t = this.min.toDate()
            }
            if (u > this.max.toDate()) {
                u = this.max.toDate()
            }
            if (t > this.max.toDate()) {
                t = this.max.toDate()
            }
            var w = Math.min(u, t);
            var A = Math.max(u, t);
            var p = h.rows;
            var f = 0;
            var e = 0;
            if (f > 0 && h.rtl) {
                f = 0;
                e = 1
            }
            var d = p.length;
            if (H) {
                d = 1;
                if (b.getAttribute("data-end-date") == null) {
                    t.setHours(0, 0, 0, 0);
                    var B = new a.jqx.date(t, h.timeZone).toString();
                    var E = a(k).parent().index();
                    a.each(p[0].cells, function() {
                        var i = this.getAttribute("data-date");
                        if (i === B) {
                            b = this;
                            s = r.getAttribute("data-end-date") != null && b.getAttribute("data-end-date") != null;
                            var I = r.getAttribute("data-date");
                            var j = b.getAttribute("data-date");
                            var K = n(I);
                            var J = n(j);
                            w = Math.min(K, J);
                            A = Math.max(K, J);
                            return false
                        }
                    })
                }
            }
            for (var z = 0; z < d; z++) {
                var g = p[z];
                if (H && this.tableRows > 1) {
                    var y = parseInt(b.getAttribute("data-view"));
                    var l = p.length / h.tableRows;
                    var o = (-1 + y) * l;
                    c = p[o];
                    g = p[o]
                }
                var c = g.cells;
                for (var x = f; x < c.length - e; x++) {
                    if (c[x].getAttribute("data-view") !== v) {
                        continue
                    }
                    c[x].removeAttribute("data-selected");
                    if (!s && c[x].getAttribute("data-end-date")) {
                        continue
                    }
                    var G = c[x].getAttribute("data-date");
                    var D = n(G).valueOf();
                    if (w <= D && D <= A) {
                        c[x].setAttribute("data-selected", "true")
                    }
                }
            }
            h._updateCellsSelection()
        },
        findCell: function(s, p) {
            var k = this;
            var l = null;
            if (!k._tableOffset) {
                var c = k.schedulercontent.coord();
                k._tableOffset = c
            }
            var g = k._tableOffset;
            var e = g.top;
            var n = g.left;
            if (p < e) {
                return null
            }
            if (s < n) {
                return null
            }
            if (p > e + k._hostHeight) {
                return null
            }
            if (s > n + k._hostWidth) {
                return null
            }
            var q = false;
            var r = k.rows;
            var o = k._views[k._view];
            var t = o.type;
            var D = 0;
            var m = k.vScrollInstance.value;
            var u = k.hScrollInstance.value;
            for (var B = 0; B < r.length; B++) {
                if (q) {
                    break
                }
                var h = r[B];
                var d = h.cells;
                var z = false;
                if (B == 0 && t == "dayView" || t == "weekView") {
                    z = k.showAllDayRow;
                    if (o.timeRuler && (t === "dayView" || t === "weekView")) {
                        if (o.timeRuler.showAllDayRow != undefined) {
                            z = o.timeRuler.showAllDayRow
                        }
                    }
                    if (z) {
                        D = k._allDayRowFullHeight
                    }
                }
                for (var C = 0; C < d.length; C++) {
                    var b = d[C];
                    if (C == 0 && b.getAttribute("data-time-slot")) {
                        continue
                    }
                    if (!b._left) {
                        var f = b.offsetLeft + n;
                        var v = b.offsetTop + e;
                        var A = b.offsetWidth;
                        var w = b.offsetHeight;
                        b._left = f;
                        b._top = v;
                        b._width = A;
                        b._height = w
                    } else {
                        var f = b._left;
                        var v = b._top;
                        var A = b._width;
                        var w = b._height
                    }
                    b._left = f;
                    b._top = v;
                    b._width = A;
                    b._height = w;
                    if (A === 0 || w === 0) {
                        continue
                    }
                    if (!k.rtl) {
                        f -= u
                    } else {
                        if (k.hScrollInstance.element.style.visibility != "hidden") {
                            f -= (k.hScrollInstance.max - u)
                        }
                    }
                    v -= m;
                    if (B == 0 && z) {
                        v += m
                    }
                    if (v <= p && p < v + w) {
                        if (f <= s && s < f + A) {
                            l = b;
                            q = true;
                            break
                        }
                    } else {
                        break
                    }
                }
            }
            return l
        },
        _removeFeedbackAndStopResize: function() {
            var d = this;
            if (!d.feedback) {
                return
            }
            d.feedback.remove();
            d.feedback = null;
            d.pinnedfeedback.remove();
            d.pinnedfeedback = null;
            if (d.feedbacks) {
                for (var c = 0; c < d.feedbacks.length; c++) {
                    d.feedbacks[c].remove()
                }
            }
            d._resizeDays = 0;
            d._resizeStep = 0;
            d._lastX = null;
            d.feedbacks = new Array();
            d.leftResize = false;
            d.rightResize = false;
            d.topResize = false;
            d.bottomResize = false;
            d.overlay.hide();
            d.resizing = false;
            d.resizeFrom = null;
            d._dragCell = null;
            d._dragStartCell = null;
            d.resizeTo = null;
            d.dragOrResize = false;
            d.isMouseDown = false;
            if (d.selectedJQXAppointment) {
                var b = a('[data-key="' + d.selectedJQXAppointment.id + '"]');
                b.removeClass(d.toTP("jqx-scheduler-feedback-appointment jqx-disableselect"))
            }
            if (d.openedMonthCellPopup) {
                d.openedMonthCellPopup.remove()
            }
        },
        _saveChangesAfterDragOrResize: function(e, b, r, m) {
            var l = this;
            if (e === false) {
                if (!b.isException()) {
                    if (!b.rootAppointment.recurrenceException) {
                        b.rootAppointment.recurrenceException = new Array()
                    }
                    if (b.rootAppointment != null) {
                        b.rootAppointment.exceptions.push(b);
                        b.rootAppointment.recurrenceException.push(b.occurrenceFrom)
                    } else {
                        b.exceptions.push(b);
                        b.recurrenceException.push(b.occurrenceFrom)
                    }
                } else {
                    var d = b.rootAppointment ? b.rootAppointment.exceptions : b.exceptions;
                    for (var h = 0; h < d.length; h++) {
                        if (d[h].occurrenceFrom.equals(b.occurrenceFrom)) {
                            d[h] = b;
                            break
                        }
                    }
                }
            } else {
                if (e === true) {
                    if (b.isException()) {
                        var d = b.rootAppointment ? b.rootAppointment.exceptions : b.exceptions;
                        for (var h = 0; h < d.length; h++) {
                            if (d[h].occurrenceFrom.equals(b.occurrenceFrom)) {
                                for (var g = 0; g < b.rootAppointment.recurrenceException.length; g++) {
                                    if (b.rootAppointment.recurrenceException[g].equals(d[h].occurrenceFrom)) {
                                        var q = b.from;
                                        var f = new a.jqx.date(d[h].occurrenceFrom.year(), d[h].occurrenceFrom.month(), d[h].occurrenceFrom.day(), b.from.hour(), b.from.minute(), b.from.second());
                                        b.rootAppointment.recurrenceException[g] = f;
                                        break
                                    }
                                }
                                d[h] = b;
                                var q = b.from;
                                var f = new a.jqx.date(d[h].occurrenceFrom.year(), d[h].occurrenceFrom.month(), d[h].occurrenceFrom.day(), b.from.hour(), b.from.minute(), b.from.second());
                                d[h].occurrenceFrom = f;
                                break
                            }
                        }
                    }
                    if (b.rootAppointment != null) {
                        b.rootAppointment.recurrencePattern = b.rootAppointment.recurrencePattern.createNewPattern();
                        var p = b.rootAppointment.from;
                        var n = b.rootAppointment.duration();
                        var c = b.rootAppointment.recurrencePattern.freq;
                        var f = null;
                        switch (c) {
                            case "daily":
                                f = new a.jqx.date(p.year(), p.month(), p.day(), b.from.hour(), b.from.minute(), b.from.second());
                                break;
                            case "weekly":
                                f = new a.jqx.date(p.year(), p.month(), p.day(), b.from.hour(), b.from.minute(), b.from.second());
                                break;
                            case "monthly":
                                f = new a.jqx.date(p.year(), p.month(), p.day(), b.from.hour(), b.from.minute(), b.from.second());
                                break;
                            case "yearly":
                                f = new a.jqx.date(p.year(), p.month(), p.day(), b.from.hour(), b.from.minute(), b.from.second());
                                break
                        }
                        if (m) {
                            b.rootAppointment.from = p;
                            b.rootAppointment.to = p.add(b.duration())
                        } else {
                            b.rootAppointment.from = f;
                            b.rootAppointment.to = f.add(n)
                        }
                        b.rootAppointment.allDay = b.allDay;
                        b.rootAppointment.resourceId = b.resourceId;
                        b.rootAppointment.color = b.color;
                        b.rootAppointment.borderColor = b.borderColor;
                        b.rootAppointment.background = b.background;
                        b.rootAppointment.timezone = b.timezone;
                        b.rootAppointment.subject = b.subject;
                        b.rootAppointment.description = b.description;
                        b.rootAppointment.location = b.location;
                        b.rootAppointment.category = b.category;
                        b.rootAppointment.status = b.status;
                        if (!l.resizing) {
                            b.rootAppointment.recurrencePattern.setFrom(f)
                        } else {
                            b.rootAppointment.recurrencePattern.setFrom(p)
                        }
                    } else {
                        b.recurrencePattern = b.recurrencePattern.createNewPattern();
                        b.recurrencePattern.setFrom(b.from)
                    }
                    var o = a(r).attr("data-view");
                    var k = l._resources[parseInt(o) - 1];
                    if (k != null) {
                        if (b.rootAppointment != null) {
                            b.rootAppointment.resourceId = k
                        } else {
                            b.resourceId = k
                        }
                    }
                }
            }
        },
        _handleMouseUp: function(k, i, g) {
            var f = this;
            clearInterval(f._verticalIntervalDragVelocity);
            clearInterval(f._horizontalIntervalDragVelocity);
            clearInterval(f._intervalDrag);
            clearInterval(f._horizontalIntervalDrag);
            var b = k;
            var j = false;
            if (!g) {
                if (f._dragStartCell == i) {
                    j = true
                }
            } else {
                if (f.resizeTo) {
                    if (b.to.equals(f.resizeTo)) {
                        j = true
                    }
                } else {
                    if (f.resizeFrom) {
                        if (b.from.equals(f.resizeFrom)) {
                            j = true
                        }
                    }
                }
            }
            if (j) {
                var h = a('[data-key="' + k.id + '"]');
                h.removeClass(f.toTP("jqx-scheduler-feedback-appointment jqx-disableselect"));
                f._removeFeedbackAndStopResize();
                return
            }
            var d = b.duration();
            var c = b.duration().days() >= 1 || b.allDay;
            var e = function(t, q) {
                if (q.allDay || c) {
                    var w = f.getMaxAllDayAppointments(f.appointmentsToRender)
                }
                if (g) {
                    if (f.resizeTo) {
                        if (f.resizeTo > f.max) {
                            f.resizeTo = f.max
                        }
                        if (f.resizeTo < f.min) {
                            f.resizeTo = f.min
                        }
                        q.to = f.resizeTo
                    } else {
                        if (f.resizeFrom) {
                            if (f.resizeFrom > f.max) {
                                f.resizeFrom = f.max
                            }
                            if (f.resizeFrom < f.min) {
                                f.resizeFrom = f.min
                            }
                            q.from = f.resizeFrom
                        }
                    }
                    if (q.from.hour() == 0 && q.from.minute() == 0 && q.to.hour() == 23 && q.to.minute() == 59) {
                        q.allDay = true
                    }
                } else {
                    var x = f._views[f._view].type;
                    var u = f._views[f._view];
                    var C = a(i).attr("data-date");
                    var D = a(i).attr("data-end-date") != null;
                    var o = new a.jqx.date(C, f.timeZone);
                    if (o < f.min) {
                        o = f.min
                    }
                    if (o > f.max) {
                        o = f.max
                    }
                    if (f.rtl && c && D) {
                        q.to = a.jqx.scheduler.utilities.getEndOfDay(o)
                    } else {
                        if (f.rtl && (x == "monthView" || x == "timelineMonthView")) {
                            q.to = a.jqx.scheduler.utilities.getEndOfDay(o)
                        } else {
                            if (f.rtl && (x == "timelineDayView" || x == "timelineWeekView")) {
                                var n = f.getMinutesPerScale();
                                q.to = o.addMinutes(n)
                            } else {
                                q.from = o
                            }
                        }
                    }
                    if (x === "dayView" || x === "weekView") {
                        if (!c && !D) {
                            q.to = o.add(d);
                            q.allDay = false
                        } else {
                            if (!c && D) {
                                q.to = a.jqx.scheduler.utilities.getEndOfDay(o);
                                q.allDay = true
                            } else {
                                if (c && D && !f.rtl) {
                                    q.to = o.add(d);
                                    if (q.from.hour() == 0 && q.from.minute() == 0 && q.to.hour() == 23 && q.to.minute() == 59) {
                                        q.allDay = true
                                    }
                                } else {
                                    if (c && D && f.rtl) {
                                        q.from = a.jqx.scheduler.utilities.getStartOfDay(q.to.add(new a.jqx.timeSpan(-d)));
                                        if (q.from.hour() == 0 && q.from.minute() == 0 && q.to.hour() == 23 && q.to.minute() == 59) {
                                            q.allDay = true
                                        }
                                    } else {
                                        if (c && !D) {
                                            var A = 30;
                                            var E = u.timeRuler && u.timeRuler.scale;
                                            switch (E) {
                                                case "sixtyMinutes":
                                                case "hour":
                                                    A = 60;
                                                    break;
                                                case "fifteenMinutes":
                                                case "quarterHour":
                                                    A = 15;
                                                    break;
                                                case "tenMinutes":
                                                    A = 10;
                                                    break;
                                                case "fiveMinutes":
                                                    A = 5;
                                                    break
                                            }
                                            q.to = o.addMinutes(A);
                                            q.allDay = false
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        if (x === "monthView") {
                            if (!f.rtl) {
                                q.to = o.add(d)
                            } else {
                                q.from = a.jqx.scheduler.utilities.getStartOfDay(q.to.add(new a.jqx.timeSpan(-d)))
                            }
                        } else {
                            if (x === "timelineDayView" || x === "timelineWeekView" || x === "timelineMonthView") {
                                if (!f.rtl) {
                                    q.to = o.add(d)
                                } else {
                                    if (x == "timelineMonthView") {
                                        q.from = a.jqx.scheduler.utilities.getStartOfDay(q.to.add(new a.jqx.timeSpan(-d)))
                                    } else {
                                        var n = f.getMinutesPerScale();
                                        q.from = o.addMinutes(n).add(new a.jqx.timeSpan(-d))
                                    }
                                }
                            }
                        }
                    }
                }
                f._saveChangesAfterDragOrResize(t, q, i, f.resizing);
                var x = a(i).attr("data-view");
                var y = f._resources[parseInt(x) - 1];
                if (y != null) {
                    q.resourceId = y
                }
                f.resizing = false;
                f.resizeFrom = null;
                f._dragCell = null;
                f.resizeTo = null;
                var p = {};
                var v = {};
                for (var F in f.appointmentDataFields) {
                    var m = f.appointmentDataFields[F];
                    var z = q[F];
                    p[F] = z;
                    if (F == "from" || F == "to") {
                        z = z.toDate()
                    }
                    v[m] = z
                }
                p.jqxAppointment = q;
                p.originalData = v;
                q.boundAppointment = p;
                f._raiseEvent("appointmentChange", {
                    appointment: q.boundAppointment
                });
                f.changedAppointments[q.id] = {
                    type: "Update",
                    appointment: q.boundAppointment
                };
                f.table.find(".jqx-icon-arrow-down").hide();
                if (f._views[f._view].type == "monthView" && f._views[f._view].monthRowAutoHeight) {
                    f._renderrows()
                } else {
                    if ((f._views[f._view].type == "weekView" || f._views[f._view].type == "dayView") && (q.allDay || c)) {
                        if (f.tableRows > 1) {
                            f._renderrows()
                        } else {
                            var s = f.getViewStart();
                            var r = a.jqx.scheduler.utilities.getEndOfDay(f.getViewEnd());
                            f._prepareAppointmentsInView(s, r);
                            f._renderAppointments(s, r);
                            var l = f.getMaxAllDayAppointments(f.appointmentsToRender);
                            if (l != w) {
                                var B = l * (f._defaultRowHeight - 2);
                                if (f.isTouchDevice()) {
                                    B = Math.max(22 + f._defaultRowHeight, 17 + B)
                                } else {
                                    B = Math.max(3 * f._defaultRowHeight, 17 + B)
                                }
                                if (f.tableRows == 1) {
                                    a(a(f.table[0].rows[0]).find("td")).css("height", B + "px")
                                } else {
                                    a(a(f.table[0].rows[1]).find("td")).css("height", B + "px")
                                }
                                a(f.oldRow).find("td").css("height", B + "px");
                                a(f.pinnedTableRow).find("td").css("height", B + "px");
                                f.pinnedtable.height(B);
                                f._updateScrollbars(f._hostHeight ? f._hostHeight : f.host.height())
                            }
                        }
                    } else {
                        var s = f.getViewStart();
                        var r = a.jqx.scheduler.utilities.getEndOfDay(f.getViewEnd());
                        f._prepareAppointmentsInView(s, r);
                        f._renderAppointments(s, r)
                    }
                }
                f._removeFeedbackAndStopResize()
            };
            if (b.isRecurrentAppointment()) {
                e(false, b)
            } else {
                e(null, b)
            }
        },
        _handleDayWeekViewResize: function(E, D, h, F, n) {
            var C = this;
            var f = C._views[C._view].type;
            var B = C._views[C._view];
            var r = n.duration().days() >= 1 || n.allDay;
            if (!r && !h.getAttribute("data-end-date")) {
                var e = function(i) {
                    if (i < 10) {
                        return false
                    }
                    return true
                };
                var j = C.findCell(C.feedback.coord().left, D);
                if (C.topResize) {
                    if (!C._lastResizeY) {
                        C._lastResizeY = C.mouseDownPosition.top
                    }
                    if (D > C._lastResizeY + a(h).height() / 2) {
                        var v = C.selectedAppointmentTableBounds.height + C.selectedAppointmentTableBounds.top - F.top - a(h).height() - 3;
                        if (e(v)) {
                            C.feedback.css("top", 2 + F.top + a(h).height());
                            C.feedback.height(v);
                            C._lastResizeY = C.feedback.coord().top;
                            var M = new a.jqx.date(j.getAttribute("data-date"), C.timeZone);
                            C.resizeFrom = M.addMinutes(C.getMinutesPerScale())
                        }
                    } else {
                        if (D < C._lastResizeY - a(h).height() / 2) {
                            var v = C.selectedAppointmentTableBounds.height + C.selectedAppointmentTableBounds.top - F.top - 3;
                            if (e(v)) {
                                C.feedback.css("top", 2 + F.top);
                                C.feedback.height(v);
                                C._lastResizeY = C.feedback.coord().top;
                                C.resizeFrom = new a.jqx.date(j.getAttribute("data-date"), C.timeZone)
                            }
                        }
                    }
                } else {
                    if (C.bottomResize) {
                        if (!C._lastResizeY) {
                            C._lastResizeY = C.mouseDownPosition.top
                        }
                        if (D > C._lastResizeY + a(h).height() / 2) {
                            var G = -5 + a(h).height() + F.top - C.selectedAppointmentTableBounds.height - C.selectedAppointmentTableBounds.top;
                            var v = C.selectedAppointmentTableBounds.height + G;
                            if (e(v)) {
                                C.feedback.height(v);
                                C._lastResizeY = C.selectedAppointmentTableBounds.height + G + C.feedback.coord().top;
                                C.resizeTo = new a.jqx.date(j.getAttribute("data-date"), C.timeZone).addMinutes(C.getMinutesPerScale())
                            }
                        } else {
                            if (D < C._lastResizeY - a(h).height() / 2) {
                                var G = -5 + F.top - C.selectedAppointmentTableBounds.height - C.selectedAppointmentTableBounds.top;
                                var v = C.selectedAppointmentTableBounds.height + G;
                                if (e(v)) {
                                    C.feedback.height(v);
                                    C._lastResizeY = C.selectedAppointmentTableBounds.height + G + C.feedback.coord().top;
                                    C.resizeTo = new a.jqx.date(j.getAttribute("data-date"), C.timeZone)
                                }
                            }
                        }
                    }
                }
            } else {
                var p = function(i) {
                    if (i < C.cellWidth - 10) {
                        return false
                    }
                    return true
                };
                var A = B.appointmentsRenderMode && B.appointmentsRenderMode == "exactTime";
                if (n.allDay || !A) {
                    if (C.leftResize) {
                        if (!C._lastResizeX) {
                            C._lastResizeX = C.mouseDownPosition.left
                        }
                        if (E > C._lastResizeX + a(h).width() / 2) {
                            var d = C.selectedAppointmentTableBounds.width + C.selectedAppointmentTableBounds.left - F.left - C.cellWidth;
                            if (p(d)) {
                                C.feedback.css("left", 5 + F.left + C.cellWidth);
                                C.feedback.width(d - 5);
                                C.feedback.hide();
                                C.pinnedfeedback.css("left", 5 + F.left + C.cellWidth);
                                C.pinnedfeedback.width(d - 5);
                                C._lastResizeX = C.pinnedfeedback.coord().left;
                                if (!C.rtl) {
                                    C.resizeFrom = new a.jqx.date(h.getAttribute("data-date"), C.timeZone).addDays(1)
                                } else {
                                    C.resizeTo = a.jqx.scheduler.utilities.getEndOfDay(new a.jqx.date(h.getAttribute("data-date"), C.timeZone)).addDays(-1)
                                }
                            }
                        } else {
                            if (E < C._lastResizeX - a(h).width() / 2) {
                                var d = C.selectedAppointmentTableBounds.width + C.selectedAppointmentTableBounds.left - F.left;
                                if (p(d)) {
                                    C.feedback.css("left", 5 + F.left);
                                    C.feedback.width(d - 5);
                                    C.feedback.hide();
                                    C.pinnedfeedback.css("left", 5 + F.left);
                                    C.pinnedfeedback.width(d - 5);
                                    C._lastResizeX = C.pinnedfeedback.coord().left;
                                    if (!C.rtl) {
                                        C.resizeFrom = new a.jqx.date(h.getAttribute("data-date"), C.timeZone)
                                    } else {
                                        C.resizeTo = a.jqx.scheduler.utilities.getEndOfDay(new a.jqx.date(h.getAttribute("data-date"), C.timeZone))
                                    }
                                }
                            }
                        }
                    } else {
                        if (C.rightResize) {
                            if (!C._lastResizeX) {
                                C._lastResizeX = C.selectedAppointmentTableBounds.width + C.selectedAppointmentTableBounds.left
                            }
                            var m = a(h).width() / 2;
                            if (E > C._lastResizeX + m) {
                                var G = a(h).width() + F.left - C.selectedAppointmentTableBounds.width - C.selectedAppointmentTableBounds.left;
                                var d = C.selectedAppointmentTableBounds.width + G;
                                if (p(d)) {
                                    C.feedback.hide();
                                    C.feedback.width(d - 6);
                                    C.feedback.css("left", 5 + F.left);
                                    C.pinnedfeedback.width(d - 6);
                                    C._lastResizeX = C.selectedAppointmentTableBounds.width + G + C.pinnedfeedback.coord().left;
                                    if (!C.rtl) {
                                        C.resizeTo = a.jqx.scheduler.utilities.getEndOfDay(new a.jqx.date(h.getAttribute("data-date"), C.timeZone))
                                    } else {
                                        C.resizeFrom = new a.jqx.date(h.getAttribute("data-date"), C.timeZone)
                                    }
                                }
                            } else {
                                if (E < C._lastResizeX - m) {
                                    var G = F.left - C.selectedAppointmentTableBounds.width - C.selectedAppointmentTableBounds.left;
                                    var d = C.selectedAppointmentTableBounds.width + G;
                                    if (p(d)) {
                                        C.feedback.hide();
                                        C.feedback.css("left", 5 + F.left);
                                        C.feedback.width(d - 6);
                                        C.pinnedfeedback.width(d - 6);
                                        C._lastResizeX = C.selectedAppointmentTableBounds.width + G + C.pinnedfeedback.coord().left;
                                        if (!C.rtl) {
                                            C.resizeTo = a.jqx.scheduler.utilities.getEndOfDay(new a.jqx.date(h.getAttribute("data-date"), C.timeZone).addDays(-1))
                                        } else {
                                            C.resizeFrom = new a.jqx.date(h.getAttribute("data-date"), C.timeZone).addDays(1)
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else {
                    var t = new Array();
                    var b = new Array();
                    var K = -1;
                    var J = -1;
                    var k = this.host.coord().left;
                    var Q = 0;
                    var z = C.hScrollInstance.value;
                    if (C.rtl) {
                        var z = C.hScrollInstance.max - C.hScrollInstance.value
                    }
                    if (C.hScrollBar[0].style.visibility == "hidden") {
                        z = 0
                    }
                    var O = E + z - k;
                    k = 0;
                    for (var L = 0; L < this.columns.records.length; L++) {
                        if (this.columns.records[L].timeColumn) {
                            if (!C.rtl) {
                                k += this.columns.records[L].width;
                                Q++
                            }
                        }
                    }
                    var s = C.getViewStart();
                    var H = C.getViewEnd();
                    for (var L = 0; L < this._getColumnsLengthPerView(); L++) {
                        var c = this.columns.records[L + Q].width;
                        if (C.leftResize) {
                            if (!C.rtl) {
                                t.push(k);
                                b.push(s.addDays(L));
                                if (n.from.hour() != 0 || (n.from.hour() == 0 && n.from.minute() != 0)) {
                                    if (k < C.selectedAppointmentTableBounds.left && k + c > C.selectedAppointmentTableBounds.left) {
                                        t.push(C.selectedAppointmentTableBounds.left);
                                        b.push(n.from);
                                        K = t.length - 1
                                    }
                                }
                                if (n.to.hour() != 23 || (n.to.hour() == 23 && n.to.minute() != 59)) {
                                    if (k < C.selectedAppointmentTableBounds.left + C.selectedAppointmentTableBounds.width && k + c > C.selectedAppointmentTableBounds.left + C.selectedAppointmentTableBounds.width) {
                                        t.push(C.selectedAppointmentTableBounds.left + C.selectedAppointmentTableBounds.width + 8);
                                        b.push(n.to);
                                        J = t.length - 1
                                    }
                                }
                            }
                            if (C.rtl) {
                                t.push(k);
                                b.push(H.addDays(-L - 1));
                                if (n.from.hour() != 0 || (n.from.hour() == 0 && n.from.minute() != 0)) {
                                    if (k < C.selectedAppointmentTableBounds.left + C.selectedAppointmentTableBounds.width && k + c > C.selectedAppointmentTableBounds.left + C.selectedAppointmentTableBounds.width) {
                                        t.push(C.selectedAppointmentTableBounds.left + C.selectedAppointmentTableBounds.width + 8);
                                        b.push(n.from);
                                        K = t.length - 1
                                    }
                                }
                                if (n.to.hour() != 23 || (n.to.hour() == 23 && n.to.minute() != 59)) {
                                    if (k < C.selectedAppointmentTableBounds.left && k + c > C.selectedAppointmentTableBounds.left) {
                                        t.push(C.selectedAppointmentTableBounds.left);
                                        b.push(n.to);
                                        J = t.length - 1
                                    }
                                }
                            }
                            k += c
                        } else {
                            if (!C.rtl) {
                                if (n.from.hour() != 0 || (n.from.hour() == 0 && n.from.minute() != 0)) {
                                    if (k < C.selectedAppointmentTableBounds.left && k + c > C.selectedAppointmentTableBounds.left) {
                                        t.push(C.selectedAppointmentTableBounds.left);
                                        b.push(n.from);
                                        K = t.length - 1
                                    }
                                }
                                if (n.to.hour() != 23 || (n.to.hour() == 23 && n.to.minute() != 59)) {
                                    if (k < C.selectedAppointmentTableBounds.left + C.selectedAppointmentTableBounds.width && k + c > C.selectedAppointmentTableBounds.left + C.selectedAppointmentTableBounds.width) {
                                        t.push(C.selectedAppointmentTableBounds.left + C.selectedAppointmentTableBounds.width + 8);
                                        b.push(n.to);
                                        J = t.length - 1
                                    }
                                }
                                k += c;
                                t.push(k);
                                b.push(s.addDays(L))
                            } else {
                                if (n.from.hour() != 0 || (n.from.hour() == 0 && n.from.minute() != 0)) {
                                    if (k < C.selectedAppointmentTableBounds.left + C.selectedAppointmentTableBounds.width && k + c > C.selectedAppointmentTableBounds.left + C.selectedAppointmentTableBounds.width) {
                                        t.push(C.selectedAppointmentTableBounds.left + C.selectedAppointmentTableBounds.width + 8);
                                        b.push(n.from);
                                        K = t.length - 1
                                    }
                                }
                                if (n.to.hour() != 23 || (n.to.hour() == 23 && n.to.minute() != 59)) {
                                    if (k < C.selectedAppointmentTableBounds.left && k + c > C.selectedAppointmentTableBounds.left) {
                                        t.push(C.selectedAppointmentTableBounds.left);
                                        b.push(n.to);
                                        J = t.length - 1
                                    }
                                }
                                k += c;
                                t.push(k);
                                b.push(H.addDays(-L - 1))
                            }
                        }
                    }
                    if (C.leftResize) {
                        for (var L = 0; L < t.length; L++) {
                            var F = t[L];
                            var N = t[L + 1];
                            if (!N) {
                                N = F
                            }
                            var g = L < t.length - 1 ? O >= F && O <= N : O >= F;
                            if (g) {
                                var c = -F + C.selectedAppointmentTableBounds.left + C.selectedAppointmentTableBounds.width;
                                var q = C.pinnedfeedback.width();
                                var I = C.pinnedfeedback.css("left");
                                var l = C.resizeTo;
                                var w = C.resizeFrom;
                                if (c > 0) {
                                    C.pinnedfeedback.css("left", F);
                                    C.pinnedfeedback.width(c);
                                    if (L == K) {
                                        if (!C.rtl) {
                                            C.resizeFrom = n.from
                                        } else {
                                            C.resizeTo = n.from
                                        }
                                    } else {
                                        if (L == J) {
                                            if (!C.rtl) {
                                                C.resizeFrom = n.to
                                            } else {
                                                C.resizeTo = n.to
                                            }
                                        } else {
                                            if (!C.rtl) {
                                                C.resizeFrom = b[L]
                                            } else {
                                                C.resizeTo = a.jqx.scheduler.utilities.getEndOfDay(b[L])
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        var o = C.resizeFrom;
                        var P = C.resizeTo;
                        if (C.rtl) {
                            o = n.from
                        } else {
                            P = n.to
                        }
                        var u = new a.jqx.timeSpan(10000 * (P - o));
                        if (u.days() < 1) {
                            C.pinnedfeedback.css("left", I);
                            C.pinnedfeedback.width(q);
                            C.resizeFrom = w;
                            C.resizeTo = l
                        }
                    } else {
                        if (C.rightResize) {
                            for (var L = 0; L < t.length; L++) {
                                var F = t[L];
                                var N = t[L + 1];
                                if (!N) {
                                    N = F
                                }
                                var g = L < t.length - 1 ? E >= F - this.cellWidth / 3 && E <= N - this.cellWidth / 3 : E >= F - this.cellWidth / 3;
                                if (g) {
                                    var c = F - C.selectedAppointmentTableBounds.left - 15;
                                    var q = C.pinnedfeedback.width();
                                    C.pinnedfeedback.width(c);
                                    var l = C.resizeTo;
                                    var w = C.resizeFrom;
                                    if (L == K) {
                                        if (!C.rtl) {
                                            C.resizeTo = n.from
                                        } else {
                                            C.resizeFrom = n.from
                                        }
                                        var c = F - C.selectedAppointmentTableBounds.left - 9;
                                        C.pinnedfeedback.width(c);
                                        break
                                    } else {
                                        if (L == J) {
                                            if (!C.rtl) {
                                                C.resizeTo = n.to
                                            } else {
                                                C.resizeFrom = n.to
                                            }
                                            var c = F - C.selectedAppointmentTableBounds.left - 9;
                                            C.pinnedfeedback.width(c);
                                            break
                                        } else {
                                            if (!C.rtl) {
                                                C.resizeTo = a.jqx.scheduler.utilities.getEndOfDay(b[L])
                                            } else {
                                                C.resizeFrom = b[L]
                                            }
                                            break
                                        }
                                    }
                                }
                            }
                            var o = C.resizeFrom;
                            var P = C.resizeTo;
                            if (!C.rtl) {
                                o = n.from
                            } else {
                                P = n.to
                            }
                            var u = new a.jqx.timeSpan(10000 * (P - o));
                            if (u.days() < 1) {
                                C.pinnedfeedback.width(q);
                                C.resizeFrom = w;
                                C.resizeTo = l
                            }
                        }
                    }
                }
            }
        },
        _handleTimelineMonthViewResize: function(t, s, q, M, k) {
            var p = this;
            var w = p._views[p._view].type;
            var r = p._views[p._view];
            var D = function(i) {
                if (i < 10) {
                    return false
                }
                return true
            };
            var E = p.findCell(t, p.feedback.coord().top);
            if (k.allDay) {
                if (p.leftResize) {
                    if (!p._lastResizeX) {
                        p._lastResizeX = p.mouseDownPosition.left
                    }
                    if (t > p._lastResizeX + a(q).width() / 2) {
                        var v = p.selectedAppointmentTableBounds.width + p.selectedAppointmentTableBounds.left - M.left - a(q).width();
                        if (D(v)) {
                            p.feedback.css("left", M.left + a(q).width());
                            p.feedback.width(v);
                            p._lastResizeX = p.feedback.coord().left;
                            if (!p.rtl) {
                                p.resizeFrom = new a.jqx.date(E.getAttribute("data-date"), p.timeZone).addDays(1)
                            } else {
                                p.resizeTo = a.jqx.scheduler.utilities.getEndOfDay(new a.jqx.date(E.getAttribute("data-date"), p.timeZone).addDays(-1))
                            }
                        }
                    } else {
                        if (t < p._lastResizeX - a(q).width() / 2) {
                            var v = p.selectedAppointmentTableBounds.width + p.selectedAppointmentTableBounds.left - M.left;
                            if (D(v)) {
                                p.feedback.css("left", M.left);
                                p.feedback.width(v);
                                p._lastResizeX = p.feedback.coord().left;
                                if (!p.rtl) {
                                    p.resizeFrom = new a.jqx.date(E.getAttribute("data-date"), p.timeZone)
                                } else {
                                    p.resizeTo = a.jqx.scheduler.utilities.getEndOfDay(new a.jqx.date(E.getAttribute("data-date"), p.timeZone))
                                }
                            }
                        }
                    }
                } else {
                    if (p.rightResize) {
                        if (!p._lastResizeX) {
                            p._lastResizeX = p.mouseDownPosition.left
                        }
                        if (t > p._lastResizeX + a(q).width() / 2) {
                            var n = a(q).width() + M.left - p.selectedAppointmentTableBounds.width - p.selectedAppointmentTableBounds.left;
                            var v = p.selectedAppointmentTableBounds.width + n - 5;
                            if (D(v)) {
                                p.feedback.width(v);
                                p._lastResizeX = p.selectedAppointmentTableBounds.width + n + p.feedback.coord().left;
                                if (!p.rtl) {
                                    p.resizeTo = a.jqx.scheduler.utilities.getEndOfDay(new a.jqx.date(E.getAttribute("data-date"), p.timeZone))
                                } else {
                                    p.resizeFrom = new a.jqx.date(E.getAttribute("data-date"), p.timeZone)
                                }
                            }
                        } else {
                            if (t < p._lastResizeX - a(q).width() / 2) {
                                var n = M.left - p.selectedAppointmentTableBounds.width - p.selectedAppointmentTableBounds.left;
                                var v = p.selectedAppointmentTableBounds.width + n - 5;
                                if (D(v)) {
                                    p.feedback.width(v);
                                    p._lastResizeX = p.selectedAppointmentTableBounds.width + n + p.feedback.coord().left;
                                    if (!p.rtl) {
                                        p.resizeTo = a.jqx.scheduler.utilities.getEndOfDay(new a.jqx.date(E.getAttribute("data-date"), p.timeZone).addDays(-1))
                                    } else {
                                        p.resizeFrom = new a.jqx.date(E.getAttribute("data-date"), p.timeZone).addDays(1)
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                var o = new Array();
                var L = new Array();
                var u = -1;
                var A = -1;
                var j = this.host.coord().left;
                var h = 0;
                for (var J = 0; J < this.columns.records.length; J++) {
                    if (this.columns.records[J].timeColumn) {
                        j += this.columns.records[J].width;
                        h++
                    }
                }
                var z = p.hScrollInstance.value;
                if (p.rtl) {
                    var z = p.hScrollInstance.max - p.hScrollInstance.value
                }
                if (p.hScrollBar[0].style.visibility == "hidden") {
                    z = 0
                }
                var d = t + z - j;
                j = 0;
                var m = p.getViewStart();
                var l = p.getViewEnd();
                var g = this._getColumnsLengthPerView() - 1;
                for (var J = 0; J < this._getColumnsLengthPerView(); J++) {
                    var C = this.columns.records[J + h].width;
                    if (p.leftResize) {
                        o.push(j);
                        if (!p.rtl) {
                            L.push(m.addDays(J))
                        } else {
                            L.push(l.addDays(-J))
                        }
                        if (k.from.hour() != 0 || (k.from.hour() == 0 && k.from.minute() != 0)) {
                            if (j < p.selectedAppointmentTableBounds.left && j + C > p.selectedAppointmentTableBounds.left) {
                                o.push(p.selectedAppointmentTableBounds.left);
                                L.push(k.from);
                                u = o.length - 1
                            }
                        }
                        if (k.to.hour() != 23 || (k.to.hour() == 23 && k.to.minute() != 59)) {
                            if (j < p.selectedAppointmentTableBounds.left + p.selectedAppointmentTableBounds.width && j + C > p.selectedAppointmentTableBounds.left + p.selectedAppointmentTableBounds.width) {
                                o.push(p.selectedAppointmentTableBounds.left + p.selectedAppointmentTableBounds.width + 8);
                                L.push(k.to);
                                A = o.length - 1
                            }
                        }
                        j += C
                    } else {
                        if (k.from.hour() != 0 || (k.from.hour() == 0 && k.from.minute() != 0)) {
                            if (j < p.selectedAppointmentTableBounds.left && j + C > p.selectedAppointmentTableBounds.left) {
                                o.push(p.selectedAppointmentTableBounds.left);
                                L.push(k.from);
                                u = o.length - 1
                            }
                        }
                        if (k.to.hour() != 23 || (k.to.hour() == 23 && k.to.minute() != 59)) {
                            if (j < p.selectedAppointmentTableBounds.left + p.selectedAppointmentTableBounds.width && j + C > p.selectedAppointmentTableBounds.left + p.selectedAppointmentTableBounds.width) {
                                o.push(p.selectedAppointmentTableBounds.left + p.selectedAppointmentTableBounds.width);
                                L.push(k.to);
                                A = o.length - 1
                            }
                        }
                        j += C;
                        o.push(j);
                        if (!p.rtl) {
                            L.push(m.addDays(J))
                        } else {
                            L.push(l.addDays(-J - 1))
                        }
                    }
                }
                if (p.leftResize) {
                    for (var J = 0; J < o.length; J++) {
                        var c = o[J];
                        var H = o[J + 1];
                        if (!H) {
                            H = c
                        }
                        var I = J < o.length - 1 ? d >= c && d <= H : d >= c;
                        if (I) {
                            var C = -c + p.selectedAppointmentTableBounds.left + p.selectedAppointmentTableBounds.width;
                            var B = p.feedback.width();
                            var f = p.feedback.css("left");
                            var F = p.resizeTo;
                            var K = p.resizeFrom;
                            p.feedback.css("left", c);
                            p.feedback.width(C);
                            if (J == u) {
                                if (!p.rtl) {
                                    p.resizeFrom = k.from
                                } else {
                                    p.resizeTo = k.from
                                }
                            } else {
                                if (J == A) {
                                    if (!p.rtl) {
                                        p.resizeFrom = k.to
                                    } else {
                                        p.resizeTo = k.to
                                    }
                                } else {
                                    if (!p.rtl) {
                                        p.resizeFrom = L[J]
                                    } else {
                                        p.resizeTo = L[J]
                                    }
                                }
                            }
                        }
                    }
                    var G = p.resizeFrom;
                    var e = p.resizeTo;
                    if (p.rtl) {
                        G = k.from
                    } else {
                        e = k.to
                    }
                    var b = new a.jqx.timeSpan(10000 * (e - G));
                    if (p.feedback.width() < 20) {
                        p.feedback.css("left", f);
                        p.feedback.width(B);
                        p.resizeFrom = K;
                        p.resizeTo = F
                    }
                } else {
                    if (p.rightResize) {
                        for (var J = 0; J < o.length; J++) {
                            var c = o[J];
                            var H = o[J + 1];
                            if (!H) {
                                H = c
                            }
                            var I = J < o.length - 1 ? d >= c - this.cellWidth / 3 && d <= H - this.cellWidth / 3 : d >= c - this.cellWidth / 3;
                            if (I) {
                                var C = c - p.selectedAppointmentTableBounds.left - 12;
                                var B = p.feedback.width();
                                p.feedback.width(C);
                                var F = p.resizeTo;
                                var K = p.resizeFrom;
                                if (J == u) {
                                    if (!p.rtl) {
                                        p.resizeTo = k.from
                                    } else {
                                        p.resizeFrom = k.from
                                    }
                                    var C = c - p.selectedAppointmentTableBounds.left;
                                    p.feedback.width(C);
                                    break
                                } else {
                                    if (J == A) {
                                        if (!p.rtl) {
                                            p.resizeTo = k.to
                                        } else {
                                            p.resizeFrom = k.to
                                        }
                                        var C = c - p.selectedAppointmentTableBounds.left;
                                        p.feedback.width(C);
                                        break
                                    } else {
                                        if (!p.rtl) {
                                            p.resizeTo = a.jqx.scheduler.utilities.getEndOfDay(L[J])
                                        } else {
                                            p.resizeFrom = L[J]
                                        }
                                        break
                                    }
                                }
                            }
                        }
                        var G = p.resizeFrom;
                        var e = p.resizeTo;
                        if (!p.rtl) {
                            G = k.from
                        } else {
                            e = k.to
                        }
                        var b = new a.jqx.timeSpan(10000 * (e - G));
                        if (p.feedback.width() < 20) {
                            p.feedback.width(B);
                            p.resizeFrom = K;
                            p.resizeTo = F
                        }
                    }
                }
            }
        },
        _handleMonthViewResize: function(K, I, g, L, r) {
            var H = this;
            if (!H.selectedJQXAppointment) {
                return
            }
            var f = H._views[H._view].type;
            var G = H._views[H._view];
            var v = function(i) {
                if (i < 10) {
                    return false
                }
                return true
            };
            var s = -5;
            if (H.tableColumns > 1) {
                s = parseInt(-5 / H.tableColumns)
            }
            for (var R = 0; R < H.columns.records.length / H.tableColumns; R++) {
                if (H.columns.records[R].timeColumn) {
                    continue
                }
                s += H.columns.records[R].width
            }
            var q = H.selectedJQXAppointment.resourceId;
            var k = H._resources.indexOf(q);
            if (H.resources && H.resources.orientation == "none") {
                k = -1
            }
            var e = "0px";
            if (k != -1 && H.tableRows == 1) {
                e = s * k + "px"
            }
            if (G.showWeekNumbers) {
                if (!H.rtl) {
                    e = parseInt(e) + H.columns.records[0].width + "px"
                }
            }
            var F = g.offsetWidth;
            var P = g.offsetHeight;
            var E = 18;
            if (H.isTouchDevice()) {
                E = 2
            }
            for (var R = 0; R < 6; R++) {
                H.feedbacks[R][0].style.left = e;
                H.feedbacks[R][0].style.width = s + "px";
                H.feedbacks[R][0].style.display = "block";
                H.feedbacks[R][0].style.top = parseInt(H.rows[R].top) + E + "px";
                if (H.tableRows > 1) {
                    H.feedbacks[R][0].style.top = parseInt(H.rows[6 * k + R].top) + E + "px"
                }
                a(H.feedbacks[R][0]).find(".jqx-scheduler-appointment-resize-indicator").css("visibility", "inherit")
            }
            var l = H.selectedJQXAppointment.elements;
            var c = l[0].cells[0].cell;
            var J = l[l.length - 1];
            var N = J.lastCellY;
            var h = J.lastCellX;
            var n = l[0].cellY;
            var B = l[0].cellX;
            var t = parseInt(L.top);
            var S = parseInt(L.left);
            if (!H.rtl) {
                if (H.leftResize) {
                    var O = false;
                    for (var R = 0; R < 6; R++) {
                        var C = H.feedbacks[R];
                        var A = parseInt(C[0].style.top) - E;
                        var z = parseInt(C[0].style.left);
                        if (A < t) {
                            C[0].style.width = s + "px";
                            for (var Q = 0; Q < l.length; Q++) {
                                var o = l[Q].cellY;
                                if (o == A) {
                                    C[0].style.top = l[Q].y + "px"
                                }
                            }
                        } else {
                            for (var Q = 0; Q < l.length; Q++) {
                                var o = l[Q].cellY;
                                if (o == A) {
                                    C[0].style.width = l[Q].width + "px";
                                    C[0].style.top = l[Q].y + "px"
                                }
                            }
                        }
                        var u = l[0];
                        var m = parseInt(u.x);
                        if (A == n) {
                            C[0].style.left = m + "px";
                            if (t == n) {
                                C[0].style.left = 1 + L.left + "px";
                                C[0].style.width = -1 + u.x + u.width - L.left + "px";
                                if (G.appointmentsRenderMode == "exactTime" && !H.selectedJQXAppointment.allDay) {
                                    var M = H.cellWidth - (u.x - B);
                                    var b = H.host.coord().left;
                                    if (K - b >= u.x && K - b <= u.x + M + 2) {
                                        C[0].style.left = m + "px";
                                        C[0].style.width = u.width + "px";
                                        O = true
                                    }
                                }
                            } else {
                                if (t > n) {
                                    C[0].style.left = m + "px";
                                    C[0].style.width = u.width + "px"
                                } else {
                                    if (t < n) {
                                        C[0].style.left = e;
                                        C[0].style.width = u.x + u.width - parseInt(e) + "px"
                                    }
                                }
                            }
                        } else {
                            if (A == t) {
                                C[0].style.width = s - L.left + parseInt(e) + "px";
                                C[0].style.left = L.left + "px"
                            }
                        }
                        if (A > N) {
                            C[0].style.display = "none"
                        }
                        if (A < t) {
                            C[0].style.display = "none"
                        }
                        if (t >= N) {
                            for (var Q = 0; Q < l.length; Q++) {
                                var o = l[Q].cellY;
                                if (t > N || (t == N && S > h)) {
                                    if (o == A) {
                                        C[0].style.display = "block";
                                        C[0].style.width = l[Q].width + "px";
                                        C[0].style.left = l[Q].x + "px"
                                    }
                                } else {
                                    if (t == N && S <= h) {
                                        if (n != N) {
                                            C[0].style.width = l[Q].width - L.left + parseInt(e) + "px"
                                        }
                                    }
                                }
                            }
                        }
                    }
                    var D = new a.jqx.date(g.getAttribute("data-date"), H.timeZone);
                    if (D < H.selectedJQXAppointment.to && !O) {
                        H.resizeFrom = D
                    } else {
                        H.resizeFrom = H.selectedJQXAppointment.from
                    }
                } else {
                    if (H.rightResize) {
                        var p = false;
                        for (var R = 0; R < 6; R++) {
                            var C = H.feedbacks[R];
                            var A = parseInt(C[0].style.top) - E;
                            var z = parseInt(C[0].style.left);
                            if (A < t) {
                                C[0].style.width = s + "px"
                            }
                            for (var Q = 0; Q < l.length; Q++) {
                                var o = l[Q].cellY;
                                if (o == A) {
                                    C[0].style.top = l[Q].y + "px"
                                }
                            }
                            var u = l[0];
                            var m = parseInt(u.x);
                            if (A == n) {
                                C[0].style.left = m + "px";
                                if (t == n) {
                                    if (S >= B) {
                                        C[0].style.width = S + F - m - 5 + "px";
                                        if (G.appointmentsRenderMode == "exactTime" && !H.selectedJQXAppointment.allDay) {
                                            var b = H.host.coord().left;
                                            if (K - b >= h && K - b <= u.x + u.width + 15) {
                                                C[0].style.width = u.width + "px";
                                                p = true
                                            }
                                        }
                                    } else {
                                        C[0].style.width = u.width + "px"
                                    }
                                } else {
                                    if (t < n) {
                                        C[0].style.left = m + "px";
                                        C[0].style.width = u.width + "px"
                                    } else {
                                        if (t > n) {
                                            C[0].style.left = m + "px";
                                            C[0].style.width = s - m + parseInt(e) + "px"
                                        }
                                    }
                                }
                            } else {
                                if (A == t) {
                                    C[0].style.width = S + F - 5 - parseInt(e) + "px"
                                }
                            }
                            if (A < n) {
                                C[0].style.display = "none"
                            }
                            if (A > t && A > n) {
                                C[0].style.display = "none"
                            }
                            if (t <= n) {
                                for (var Q = 0; Q < l.length; Q++) {
                                    var o = l[Q].cellY;
                                    if (t < n || (t == n && S < B)) {
                                        if (o == A) {
                                            C[0].style.display = "block";
                                            C[0].style.width = l[Q].width + "px"
                                        }
                                    }
                                }
                            }
                        }
                        var D = a.jqx.scheduler.utilities.getEndOfDay(new a.jqx.date(g.getAttribute("data-date"), H.timeZone));
                        if (D > H.selectedJQXAppointment.from && !p) {
                            H.resizeTo = D
                        } else {
                            H.resizeTo = H.selectedJQXAppointment.to
                        }
                    }
                }
            } else {
                if (H.leftResize) {
                    var p = false;
                    for (var R = 0; R < 6; R++) {
                        var C = H.feedbacks[R];
                        var A = parseInt(C[0].style.top) - E;
                        var z = parseInt(C[0].style.left);
                        if (A < t) {
                            C[0].style.width = s + "px"
                        } else {
                            for (var Q = 0; Q < l.length; Q++) {
                                var o = l[Q].cellY;
                                if (o == A) {
                                    C[0].style.width = l[Q].width + "px";
                                    C[0].style.top = l[Q].y + "px"
                                }
                            }
                        }
                        var u = l[0];
                        var m = parseInt(u.x);
                        if (A == n) {
                            C[0].style.left = m + "px";
                            if (t == n) {
                                C[0].style.left = 1 + L.left + "px";
                                C[0].style.width = -1 + u.x + u.width - L.left + "px";
                                if (L.left > u.x + u.width) {
                                    C[0].style.width = u.width + "px";
                                    C[0].style.left = u.x + "px"
                                }
                                if (G.appointmentsRenderMode == "exactTime" && !H.selectedJQXAppointment.allDay) {
                                    var b = H.host.coord().left;
                                    if (K - b >= u.x - 10 && K - b <= u.cellX + H.cellWidth) {
                                        C[0].style.width = u.width + "px";
                                        C[0].style.left = u.x + "px";
                                        p = true
                                    }
                                }
                            } else {
                                if (t < n) {
                                    C[0].style.left = m + "px";
                                    C[0].style.width = u.width + "px"
                                } else {
                                    if (t > n) {
                                        C[0].style.left = e;
                                        C[0].style.width = u.x + u.width - parseInt(e) + "px"
                                    }
                                }
                            }
                        } else {
                            if (A == t) {
                                C[0].style.width = s - L.left + parseInt(e) + "px";
                                C[0].style.left = L.left + "px"
                            }
                        }
                        if (A < n) {
                            C[0].style.display = "none"
                        }
                        if (A > t) {
                            C[0].style.display = "none"
                        }
                        if (t < n) {
                            for (var Q = 0; Q < l.length; Q++) {
                                var o = l[Q].cellY;
                                if (o == A) {
                                    C[0].style.display = "block";
                                    C[0].style.width = l[Q].width + "px";
                                    C[0].style.left = l[Q].x + "px"
                                }
                            }
                        }
                        if (t == n) {
                            for (var Q = 0; Q < l.length; Q++) {
                                var o = l[Q].cellY;
                                if (t < n || (t == n)) {
                                    if (o == A && n != N) {
                                        C[0].style.left = 1 + L.left + parseInt(e) + "px";
                                        if (1 + L.left + parseInt(e) > u.x + u.width) {
                                            C[0].style.left = u.x + "px"
                                        }
                                        C[0].style.width = -1 + u.x + u.width - L.left + "px"
                                    }
                                }
                            }
                        }
                    }
                    var D = a.jqx.scheduler.utilities.getEndOfDay(new a.jqx.date(g.getAttribute("data-date"), H.timeZone));
                    if (D > H.selectedJQXAppointment.from && !p) {
                        H.resizeTo = D
                    } else {
                        H.resizeTo = H.selectedJQXAppointment.to
                    }
                } else {
                    if (H.rightResize) {
                        var O = false;
                        for (var R = 0; R < 6; R++) {
                            var C = H.feedbacks[R];
                            var A = parseInt(C[0].style.top) - E;
                            var z = parseInt(C[0].style.left);
                            if (A < t) {
                                C[0].style.width = s + "px"
                            }
                            for (var Q = 0; Q < l.length; Q++) {
                                var o = l[Q].cellY;
                                if (o == A) {
                                    C[0].style.top = l[Q].y + "px"
                                }
                            }
                            var u = l[0];
                            var m = parseInt(u.x);
                            if (A == n) {
                                C[0].style.left = m + "px";
                                if (t == n) {
                                    if (S >= B) {
                                        C[0].style.width = S + F - m - 5 + "px";
                                        if (G.appointmentsRenderMode == "exactTime" && !H.selectedJQXAppointment.allDay) {
                                            var b = H.host.coord().left;
                                            if (K - b >= u.lastCellX && K - b <= u.x + u.width + 15) {
                                                C[0].style.width = u.width + "px";
                                                O = true
                                            }
                                        }
                                    } else {
                                        C[0].style.width = u.width + "px"
                                    }
                                } else {
                                    if (t > n) {
                                        C[0].style.left = m + "px";
                                        C[0].style.width = u.width + "px"
                                    } else {
                                        if (t < n) {
                                            C[0].style.left = m + "px";
                                            C[0].style.width = s - m + parseInt(e) + "px"
                                        }
                                    }
                                }
                            } else {
                                if (A == t) {
                                    C[0].style.width = S + F - 5 - parseInt(e) + "px"
                                }
                            }
                            if (A > N) {
                                C[0].style.display = "none"
                            }
                            if (A < t) {
                                C[0].style.display = "none"
                            }
                            if (t > N) {
                                for (var Q = 0; Q < l.length; Q++) {
                                    var o = l[Q].cellY;
                                    if (o == A) {
                                        C[0].style.display = "block"
                                    }
                                    if (A == N) {
                                        C[0].style.width = l[Q].width + "px";
                                        C[0].style.left = l[Q].x + "px"
                                    }
                                }
                            }
                            if (t <= N) {
                                if (A == N) {
                                    for (var Q = 0; Q < l.length; Q++) {
                                        var o = l[Q].cellY;
                                        if (A != t && o == A && n != N) {
                                            C[0].style.width = l[Q].width + "px";
                                            C[0].style.left = l[Q].x + "px"
                                        } else {
                                            if (A == t && o == A && n != N) {
                                                C[0].style.left = l[Q].x + "px";
                                                C[0].style.width = S + F - 5 - parseInt(e) - l[Q].x + "px"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        var D = new a.jqx.date(g.getAttribute("data-date"), H.timeZone);
                        if (D < H.selectedJQXAppointment.to && !O) {
                            H.resizeFrom = D
                        } else {
                            H.resizeFrom = H.selectedJQXAppointment.from
                        }
                    }
                }
            }
            var d = new Array();
            for (var R = 0; R < 6; R++) {
                var C = H.feedbacks[R];
                if (C[0].style.display == "block") {
                    d.push(C)
                }
            }
            a.each(d, function(i) {
                if (!H.rtl) {
                    if (i > 0) {
                        a(this).find(".jqx-scheduler-appointment-left-resize-indicator")[0].style.visibility = "hidden"
                    }
                    if (i < d.length - 1) {
                        a(this).find(".jqx-scheduler-appointment-right-resize-indicator")[0].style.visibility = "hidden"
                    }
                } else {
                    if (i > 0) {
                        a(this).find(".jqx-scheduler-appointment-right-resize-indicator")[0].style.visibility = "hidden"
                    }
                    if (i < d.length - 1) {
                        a(this).find(".jqx-scheduler-appointment-left-resize-indicator")[0].style.visibility = "hidden"
                    }
                }
            })
        },
        _handleTimelineDayWeekViewResize: function(m, k, d, h, b) {
            var i = this;
            var l = i._views[i._view].type;
            var n = i._views[i._view];
            var e = i.getMinutesPerScale();
            var j = function(o) {
                if (o < 10) {
                    return false
                }
                return true
            };
            var c = i.findCell(m, i.feedback.coord().top);
            if (i.leftResize) {
                if (!i._lastResizeX) {
                    i._lastResizeX = i.mouseDownPosition.left
                }
                if (m > i._lastResizeX + a(d).width() / 2) {
                    var g = i.selectedAppointmentTableBounds.width + i.selectedAppointmentTableBounds.left - h.left - a(d).width();
                    if (j(g)) {
                        i.feedback.css("left", 2 + h.left + a(d).width());
                        i.feedback.width(g);
                        i._lastResizeX = i.feedback.coord().left;
                        if (!i.rtl) {
                            i.resizeFrom = new a.jqx.date(c.getAttribute("data-date"), i.timeZone).addMinutes(e)
                        } else {
                            i.resizeTo = new a.jqx.date(c.getAttribute("data-date"), i.timeZone)
                        }
                    }
                } else {
                    if (m < i._lastResizeX - a(d).width() / 2) {
                        var g = i.selectedAppointmentTableBounds.width + i.selectedAppointmentTableBounds.left - h.left;
                        if (j(g)) {
                            i.feedback.css("left", 2 + h.left);
                            i.feedback.width(g);
                            i._lastResizeX = i.feedback.coord().left;
                            if (!i.rtl) {
                                i.resizeFrom = new a.jqx.date(c.getAttribute("data-date"), i.timeZone)
                            } else {
                                i.resizeTo = new a.jqx.date(c.getAttribute("data-date"), i.timeZone).addMinutes(e)
                            }
                        }
                    }
                }
            } else {
                if (i.rightResize) {
                    if (!i._lastResizeX) {
                        i._lastResizeX = i.mouseDownPosition.left
                    }
                    if (m > i._lastResizeX + a(d).width() / 2) {
                        var f = a(d).width() + h.left - i.selectedAppointmentTableBounds.width - i.selectedAppointmentTableBounds.left;
                        var g = i.selectedAppointmentTableBounds.width + f;
                        if (j(g)) {
                            i.feedback.width(g);
                            i._lastResizeX = i.selectedAppointmentTableBounds.width + f + i.feedback.coord().left;
                            if (!i.rtl) {
                                i.resizeTo = new a.jqx.date(c.getAttribute("data-date"), i.timeZone).addMinutes(e)
                            } else {
                                i.resizeFrom = new a.jqx.date(c.getAttribute("data-date"), i.timeZone)
                            }
                        }
                    } else {
                        if (m < i._lastResizeX - a(d).width() / 2) {
                            var f = h.left - i.selectedAppointmentTableBounds.width - i.selectedAppointmentTableBounds.left;
                            var g = i.selectedAppointmentTableBounds.width + f;
                            if (j(g)) {
                                i.feedback.width(g);
                                i._lastResizeX = i.selectedAppointmentTableBounds.width + f + i.feedback.coord().left;
                                if (!i.rtl) {
                                    i.resizeTo = new a.jqx.date(c.getAttribute("data-date"), i.timeZone)
                                } else {
                                    i.resizeFrom = new a.jqx.date(c.getAttribute("data-date"), i.timeZone).addMinutes(e)
                                }
                            }
                        }
                    }
                }
            }
        },
        _handleResize: function(c, i, h, b, e) {
            var g = this;
            var d = g._views[g._view].type;
            var f = g._views[g._view];
            if (d === "dayView" || d === "weekView") {
                g._handleDayWeekViewResize(c, i, h, b, e)
            } else {
                if (d === "timelineMonthView") {
                    g._handleTimelineMonthViewResize(c, i, h, b, e)
                } else {
                    if (d === "monthView") {
                        g._handleMonthViewResize(c, i, h, b, e)
                    } else {
                        if (d === "timelineDayView" || d === "timelineWeekView") {
                            g._handleTimelineDayWeekViewResize(c, i, h, b, e)
                        }
                    }
                }
            }
            if (d === "timelineDayView" || d === "timelineMonthView" || d === "timelineWeekView") {
                clearInterval(g._horizontalIntervalDrag);
                g._horizontalIntervalDrag = setInterval(function() {
                    var k = g.host.width();
                    var m = g.host.coord().left;
                    var j = m + 25;
                    var l = k + j - 45;
                    if (!g.rtl) {
                        if (c < j) {
                            g.hScrollInstance.setPosition(g.hScrollInstance.value - 5)
                        } else {
                            if (c > l) {
                                g.hScrollInstance.setPosition(g.hScrollInstance.value + 5)
                            }
                        }
                    } else {
                        if (c > l) {
                            g.hScrollInstance.setPosition(g.hScrollInstance.value - 5)
                        } else {
                            if (c < j) {
                                g.hScrollInstance.setPosition(g.hScrollInstance.value + 5)
                            }
                        }
                    }
                }, 5)
            } else {
                if (d === "dayView" || d === "weekView") {
                    clearInterval(g._intervalDrag);
                    g._intervalDrag = setInterval(function() {
                        var n = g.host.height();
                        var k = 0;
                        if (!g.columnGroups) {
                            k += g.showHeader ? g.columnsHeight : 0
                        } else {
                            k += g.showHeader ? g.columnsheader.height() : 0
                        }
                        if (g.showToolbar) {
                            k += g.toolbarHeight
                        }
                        n -= k;
                        var m = g.legendHeight;
                        if (g._resources.length == 0) {
                            m = 0
                        }
                        if (g.showLegend) {
                            n -= m
                        }
                        var q = k + g.host.coord().top;
                        var j = g.showAllDayRow;
                        if (f.timeRuler && (d === "dayView" || d === "weekView")) {
                            if (f.timeRuler.showAllDayRow != undefined) {
                                j = f.timeRuler.showAllDayRow
                            }
                        }
                        var l = e.duration().days() >= 1 || e.allDay;
                        if (j && l) {
                            q -= 20
                        } else {
                            if (j && g.resizing) {
                                q += a(g.table[0].rows[0]).height();
                                n -= a(g.table[0].rows[0]).height()
                            }
                        }
                        var p = q + 25;
                        var o = n + p - 45;
                        if (i < p) {
                            g.vScrollInstance.setPosition(g.vScrollInstance.value - 5)
                        } else {
                            if (i > o) {
                                g.vScrollInstance.setPosition(g.vScrollInstance.value + 5)
                            }
                        }
                    }, 5)
                }
            }
            g.resizing = true
        },
        _startTimers: function(b, h, d) {
            var f = this;
            var g = f.host.coord();
            var e = 0;
            var c = 0;
            if (f.hScrollInstance.element.style.visibility != "hidden") {
                clearInterval(f._horizontalIntervalDragVelocity);
                f._horizontalIntervalDragVelocity = setInterval(function() {
                    e++;
                    if (e > 40) {
                        e = 40
                    }
                }, 100);
                clearInterval(f._horizontalIntervalDrag);
                f._horizontalIntervalDrag = setInterval(function() {
                    var j = f._hostWidth;
                    var l = g.left;
                    var i = l + 30;
                    var k = j + i - 60;
                    if (!f.rtl) {
                        if (b < i) {
                            f.hScrollInstance.setPosition(f.hScrollInstance.value - 10 - e)
                        } else {
                            if (b > k) {
                                f.hScrollInstance.setPosition(f.hScrollInstance.value + 10 + e)
                            } else {
                                e = 0
                            }
                        }
                    } else {
                        if (b < i) {
                            f.hScrollInstance.setPosition(f.hScrollInstance.value + 10 + e)
                        } else {
                            if (b > k) {
                                f.hScrollInstance.setPosition(f.hScrollInstance.value - 10 - e)
                            } else {
                                e = 0
                            }
                        }
                    }
                }, 10)
            }
            if (f.vScrollInstance.element.style.visibility != "hidden") {
                clearInterval(f._verticalIntervalDragVelocity);
                f._verticalIntervalDragVelocity = setInterval(function() {
                    c++;
                    if (c > 40) {
                        c = 40
                    }
                }, 100);
                clearInterval(f._intervalDrag);
                f._intervalDrag = setInterval(function() {
                    var m = f._hostHeight;
                    var o = 0;
                    if (!f.columnGroups) {
                        o += f.showHeader ? f.columnsHeight : 0
                    } else {
                        o += f.showHeader ? f.columnsheader.height() : 0
                    }
                    var p = f._views[f._view].type;
                    var r = f._views[f._view];
                    if (f.showToolbar) {
                        o += f.toolbarHeight
                    }
                    m -= o;
                    if (f.showLegend && f._resources.length > 0) {
                        m -= f.legendHeight
                    }
                    var k = g.top;
                    var q = o + k;
                    if (p == "dayView" || p == "weekView") {
                        var j = f.showAllDayRow;
                        if (r.timeRuler && (p === "dayView" || p === "weekView")) {
                            if (r.timeRuler.showAllDayRow != undefined) {
                                j = r.timeRuler.showAllDayRow
                            }
                        }
                        var l = d.duration().days() >= 1 || d.allDay;
                        if (j && l) {
                            q -= 20
                        } else {
                            if (j && f.resizing) {
                                q += a(f.table[0].rows[0]).height()
                            }
                        }
                    }
                    var n = q + 30;
                    var i = k + m + o - 30;
                    if (h < n) {
                        f.vScrollInstance.setPosition(f.vScrollInstance.value - 10 - c)
                    } else {
                        if (h > i) {
                            f.vScrollInstance.setPosition(f.vScrollInstance.value + 10 + c)
                        } else {
                            c = 0
                        }
                    }
                }, 10)
            }
        },
        _hoverCell: function(b) {
            var c = this;
            if (!c.enableHover) {
                return true
            }
            if (c._resources.length > 0) {
                if (b.className.indexOf("pinned") >= 0) {
                    return true
                }
            }
            if (b.className.indexOf("time-column") >= 0) {
                return true
            }
            if (b.className.indexOf("jqx-scheduler-disabled-cell") >= 0) {
                return true
            }
            if (b && b == c.hoveredCell) {
                return true
            }
            c.hoveredCell = b;
            if (!b) {
                return true
            }
            c._removeHoveredCell();
            c.hoveredCell = b;
            b.className += " " + c.toTP("jqx-fill-state-hover") + " " + c.toTP("jqx-grid-cell-hover") + " " + c.toTP("jqx-scheduler-cell-hover");
            b.jqxClassName = b.className
        },
        _removeHoveredCell: function() {
            var d = this;
            if (d.hoveredCell) {
                var c = d.hoveredCell;
                var b = function(e) {
                    var f = c.className;
                    f = f.replace(" " + d.toTP("jqx-fill-state-hover"), "");
                    f = f.replace(" " + d.toTP("jqx-grid-cell-hover"), "");
                    f = f.replace(" " + d.toTP("jqx-scheduler-cell-hover"), "");
                    c.className = f;
                    c.jqxClassName = f
                };
                b(c)
            }
            d.hoveredCell = null
        },
        _addHandlers: function() {
            var i = this;
            this._mousewheelfunc = this._mousewheelfunc || function(m) {
                i.wheel(m, i);
                return false
            };
            this.focused = false;
            var g = false;
            this.addHandler(a(document), "keydown.scheduler" + i.element.id, function(m) {
                g = false;
                if (m.keyCode === 9 && m.shiftKey && !i.focused) {
                    g = true
                }
            });
            this.addHandler(this.host, "focus", function(n) {
                if (i.focusedCell && !i.selectedAppointment && !g) {
                    a(i.focusedCell).addClass(i.toThemeProperty("jqx-scheduler-cell-focus"))
                }
                i.focused = true;
                if (g) {
                    if (i.appointmentsToRender.length > 0) {
                        var m = i.appointmentsToRender[i.appointmentsToRender.length - 1];
                        i._selectAppointment(m);
                        i._lastSelectedAppointment = m
                    } else {
                        if (!i.focusedCell) {
                            i._updateFocusedCell()
                        } else {
                            if (i.focusedCell) {
                                if (i.focusedCell.className.indexOf("-focus") == -1) {
                                    i._updateCellsSelection();
                                    return false
                                }
                            }
                        }
                    }
                }
            });
            this.addHandler(this.host, "blur", function(m) {
                if (i.focusedCell) {
                    if (document.activeElement == i.element) {
                        return true
                    }
                    if (a(document.activeElement).ischildof(i.host)) {
                        return true
                    }
                    a(i.focusedCell).removeClass(i.toThemeProperty("jqx-scheduler-cell-focus"));
                    i.focused = false
                }
            });
            this.addHandler(this.host, "dragstart." + this.element.id, function(m) {
                return false
            });
            this.addHandler(this.host, "selectstart." + this.element.id, function(m) {
                if (i.enableBrowserSelection) {
                    return true
                }
                if (i.showToolBar) {
                    if (a(m.target).ischildof(i.toolbar)) {
                        return true
                    }
                }
                if (i.rowDetails) {
                    if (a(m.target).parents("[data-role=details]").length > 0) {
                        return true
                    }
                }
                if (undefined == i.editKey) {
                    return false
                }
            });
            this.addHandler(a(window), "jqxReady." + this.element.id, function() {});
            this.removeHandler(this.host, "mousewheel", this._mousewheelfunc);
            this.addHandler(this.host, "mousewheel", this._mousewheelfunc);
            var d = this.isTouchDevice();
            this.vScrollInstance.valueChanged = function(m) {
                if (i._timer) {
                    clearTimeout(i._timer)
                }
                if (d) {
                    if (i.table) {
                        i.table[0].style.top = 0 - i.vScrollInstance.value + "px"
                    }
                } else {
                    i._timer = setTimeout(function() {
                        if (i.table) {
                            i.table[0].style.top = 0 - i.vScrollInstance.value + "px"
                        }
                    }, 1)
                }
            };
            this.hScrollInstance.valueChanged = function(m) {
                if (i._htimer) {
                    clearTimeout(i._htimer)
                }
                if (d) {
                    if (i.table) {
                        i._renderhorizontalscroll()
                    }
                } else {
                    i._htimer = setTimeout(function() {
                        if (i.table) {
                            i._renderhorizontalscroll()
                        }
                    }, 1)
                }
            };
            var c = "mousedown";
            if (this.isTouchDevice()) {
                c = a.jqx.mobile.getTouchEventName("touchstart");
                if (a.jqx.browser.msie && a.jqx.browser.version < 10) {
                    c = "mousedown"
                }
            }
            this.addHandler(this.table, "mouseleave", function(m) {
                i._removeHoveredCell()
            });
            if (i.isTouchDevice()) {
                i.enableHover = false
            }
            var h = "mousemove.scheduler" + this.element.id;
            var e = "mouseup.scheduler" + this.element.id;
            if (this.isTouchDevice() && this.touchMode !== true) {
                h = a.jqx.mobile.getTouchEventName("touchmove") + ".scheduler" + this.element.id;
                e = a.jqx.mobile.getTouchEventName("touchend") + ".scheduler" + this.element.id
            }
            this.addHandler(a(document), h, function(X) {
                var M = X.pageX;
                var L = X.pageY;
                if (i.isTouchDevice()) {
                    var N = a.jqx.position(X);
                    M = N.left;
                    L = N.top;
                    if (isNaN(M) || isNaN(L)) {
                        var N = a.jqx.position(X.originalEvent);
                        M = N.left;
                        L = N.top
                    }
                }
                if (i.disabled || X.which === 3) {
                    return true
                }
                if (!i.isMouseDown) {
                    return true
                }
                if (i.hScrollInstance.isScrolling() || i.vScrollInstance.isScrolling()) {
                    return true
                }
                if (i._hostWidth) {
                    var D = i.host.coord();
                    if (D.left + i._hostWidth < M || M < D.left) {
                        return true
                    }
                    if (D.top + i._hostHeight < L || L < D.top) {
                        return true
                    }
                }
                if (i.mouseDownPosition) {
                    if ((Math.abs(i.mouseDownPosition.left - M) >= 3 && Math.abs(i.mouseDownPosition.left - M) <= 10) || (Math.abs(i.mouseDownPosition.top - L) >= 3 && Math.abs(i.mouseDownPosition.top - L) <= 10)) {
                        i.dragOrResize = true
                    }
                }
                if (i.selectedAppointment && i.dragOrResize) {
                    var w = null;
                    if (i._hasOpenedMenu) {
                        return true
                    }
                    if (i.editRecurrenceDialog.jqxWindow("isOpen")) {
                        return true
                    }
                    var o = i._views[i._view].type;
                    var K = i._views[i._view];
                    var A = false;
                    if (X.target.nodeName.toLowerCase() === "td") {
                        var q = X.target
                    } else {
                        var q = i.findCell(M, L)
                    }
                    if (!q) {
                        return true
                    }
                    if (q.getAttribute("data-time-slot") != undefined) {
                        return true
                    }
                    if (q.className.indexOf("jqx-grid-cell-pinned") >= 0) {
                        return true
                    }
                    if (!i.feedback) {
                        w = i.getJQXAppointmentByElement(i.selectedAppointment);
                        if (!w.draggable && !w.resizable) {
                            w = null;
                            return true
                        }
                        if (i.beginDrag) {
                            var t = i.beginDrag(w);
                            if (!t) {
                                return true
                            }
                        }
                        var T = a('[data-key="' + w.id + '"]');
                        var B = i.selectedAppointment.position();
                        i.feedback = i.selectedAppointment.clone(true);
                        i.pinnedfeedback = i.selectedAppointment.clone(true);
                        var V = !(i.selectedAppointment[0].style.cursor == "row-resize" || i.selectedAppointment[0].style.cursor == "col-resize" || i.resizing);
                        var p = function(x) {
                            if (V) {
                                x.find(".jqx-scheduler-appointment-resize-indicator").hide()
                            }
                            T.addClass(i.toTP("jqx-scheduler-feedback-appointment jqx-disableselect"));
                            x.find(".jqx-scheduler-appointment-duration-status").hide();
                            x.addClass(i.toTP("jqx-scheduler-feedback-appointment"));
                            x.addClass(i.toTP("jqx-scheduler-feedback-drag-appointment"));
                            if (!V) {
                                x.css("z-index", 400)
                            } else {
                                x.css("z-index", 401)
                            }
                        };
                        p(i.feedback);
                        p(i.pinnedfeedback);
                        if (i._views[i._view].type != "monthView" || V) {
                            i.table.append(i.feedback);
                            if (i.tableRows == 1) {
                                i.pinnedtable.append(i.pinnedfeedback)
                            } else {
                                i.table.append(i.pinnedfeedback)
                            }
                            i.feedback.css("left", B.left);
                            i.feedback.css("top", B.top);
                            i.pinnedfeedback.css("left", B.left);
                            i.pinnedfeedback.css("top", B.top);
                            if (i._views[i._view].type == "monthView" && i.isTouchDevice()) {
                                i.feedbacks = new Array();
                                for (var S = 0; S < 6; S++) {
                                    i.feedbacks.push(i.feedback.clone(true));
                                    a(i.feedbacks[S]).hide();
                                    i.table.append(a(i.feedbacks[S]))
                                }
                            }
                        } else {
                            i.feedbacks = new Array();
                            for (var S = 0; S < 6; S++) {
                                i.feedbacks.push(i.feedback.clone(true));
                                a(i.feedbacks[S]).hide();
                                i.table.append(a(i.feedbacks[S]))
                            }
                        }
                    }
                    if (i.dragging) {
                        var t = i.dragging(w, q, i.feedback);
                        if (false === t) {
                            return true
                        }
                    }
                    var N = a(q).position();
                    if (i.endDrag) {
                        var I = i.feedback.css("left");
                        var J = i.feedback.css("top");
                        var z = i.feedback.width();
                        var F = i.feedback.height
                    }
                    if (!w) {
                        w = i.selectedJQXAppointment
                    }
                    if (!w) {
                        i.selectAppointment(i.uiappointments[0].id);
                        w = i.selectedJQXAppointment
                    }
                    var v = w.resourceId;
                    var r = i._resources.indexOf(v);
                    if (i.resources && i.resources.orientation == "none") {
                        r = -1
                    }
                    var Q = false;
                    var U = i.isTouchDevice();
                    if (U && i.touchMode !== true && i._dragCell == null && !(i.leftResize || i.rightResize || i.topResize || i.bottomResize || i.resizing)) {
                        switch (o) {
                            case "dayView":
                            case "weekView":
                                var A = w.duration().days() >= 1 || w.allDay;
                                if (!A) {
                                    if (L >= i.selectedAppointmentBounds.top - 15 && L <= i.selectedAppointmentBounds.top + 15) {
                                        Q = true;
                                        i.topResize = true
                                    }
                                    if (L >= i.selectedAppointmentBounds.top - 15 + i.selectedAppointmentBounds.height && L <= i.selectedAppointmentBounds.top + i.selectedAppointmentBounds.height + 15) {
                                        Q = true;
                                        i.bottomResize = true
                                    }
                                } else {
                                    if (M >= i.selectedAppointmentBounds.left - 15 && M <= i.selectedAppointmentBounds.left + 15) {
                                        Q = true;
                                        i.leftResize = true
                                    }
                                    if (M >= i.selectedAppointmentBounds.left + i.selectedAppointmentBounds.width - 15 && M <= i.selectedAppointmentBounds.left + i.selectedAppointmentBounds.width + 15) {
                                        Q = true;
                                        i.rightResize = true
                                    }
                                }
                                break;
                            default:
                                if (M >= i.selectedAppointmentBounds.left - 15 && M <= i.selectedAppointmentBounds.left + 15) {
                                    Q = true;
                                    i.leftResize = true
                                }
                                if (M >= i.selectedAppointmentBounds.left + i.selectedAppointmentBounds.width - 15 && M <= i.selectedAppointmentBounds.left + i.selectedAppointmentBounds.width + 15) {
                                    Q = true;
                                    i.rightResize = true
                                }
                                break
                        }
                    }
                    if (U && (i.leftResize || i.rightResize || i.topResize || i.bottomResize || i.resizing) || Q) {
                        if (q.getAttribute("data-view") != r + 1 && i._resources.length > 0) {
                            if (i.resources.orientation != "none") {
                                return true
                            }
                        }
                        var W = i._getDateByString(q.getAttribute("data-date"));
                        if (W < i.min.toDate() || W > i.max.toDate()) {
                            return
                        }
                        i._handleResize(M, L, q, N, w);
                        i._oldResizeTD = q
                    } else {
                        if (!U && i.selectedAppointment[0].style.cursor == "row-resize" || i.selectedAppointment[0].style.cursor == "col-resize" || i.resizing) {
                            if (q.getAttribute("data-view") != r + 1 && i._resources.length > 0) {
                                if (i.resources && i.resources.orientation != "none") {
                                    return true
                                }
                            }
                            var W = i._getDateByString(q.getAttribute("data-date"));
                            if (W < i.min.toDate() || W > i.max.toDate()) {
                                return
                            }
                            i._handleResize(M, L, q, N, w);
                            i._oldResizeTD = q
                        } else {
                            if (!w.draggable) {
                                i._removeFeedbackAndStopResize();
                                return true
                            }
                            if (i._dragCell == q) {
                                i._startTimers(M, L, w);
                                if (i.isTouchDevice() && i.touchMode !== true) {
                                    X.stopPropagation();
                                    return false
                                } else {
                                    return
                                }
                            }
                            var W = i._getDateByString(q.getAttribute("data-date"));
                            if (W < i.min.toDate() || W > i.max.toDate()) {
                                return
                            }
                            var E = w.duration();
                            if (o.indexOf("month") >= 0 && new a.jqx.date(W).add(E) > i.max) {
                                return
                            }
                            var P = i.vScrollBar[0].style.visibility == "hidden" ? 0 : 6 + i.vScrollBar.outerWidth();
                            i._dragCell = q;
                            i.feedback[0].style.left = 2 + N.left + "px";
                            i.feedback[0].style.top = 2 + N.top + "px";
                            if (o === "dayView" || o === "weekView") {
                                i.pinnedfeedback.css("left", 2 + N.left);
                                i.pinnedfeedback.css("top", 2 + N.top);
                                var m = 0;
                                if (q.getAttribute("data-end-date")) {
                                    var s = i.appointmentsMinHeight;
                                    if (i.isTouchDevice()) {
                                        s = i.touchAppointmentsMinHeight
                                    }
                                    if (K.appointmentHeight) {
                                        s = K.appointmentHeight
                                    }
                                    A = w.duration().days() >= 1 || w.allDay;
                                    i.feedback.css("top", 2 + N.top + s);
                                    i.pinnedfeedback.css("top", 2 + N.top + 18);
                                    if (o == "dayView") {
                                        var R = i.selectedAppointment.coord().left - 9;
                                        i.feedback.css("left", R);
                                        i.pinnedfeedback.css("left", R)
                                    }
                                    if (A) {
                                        i.pinnedfeedback.css("top", w.elements[0].y);
                                        m = i.selectedAppointment.width();
                                        if (2 + N.left + m > i.host.width() - P) {
                                            var C = 2 + N.left + m - i.host.width() + P + 6;
                                            m -= C
                                        }
                                        i.feedback.width(m);
                                        i.feedback.height(s);
                                        i.pinnedfeedback.width(m);
                                        i.pinnedfeedback.height(s)
                                    } else {
                                        m = a(q).width() - 4;
                                        i.feedback.width(m);
                                        i.feedback.height(s);
                                        i.pinnedfeedback.width(m);
                                        i.pinnedfeedback.height(s)
                                    }
                                    i.feedback.hide();
                                    i.pinnedfeedback.show()
                                } else {
                                    i.feedback.show();
                                    i.pinnedfeedback.hide();
                                    var u = 2;
                                    var O = 30;
                                    var H = K.timeRuler && K.timeRuler.scale;
                                    switch (H) {
                                        case "sixtyMinutes":
                                        case "hour":
                                            u = 1;
                                            break;
                                        case "thirtyMinutes":
                                        case "halfHour":
                                            u = 2;
                                            break;
                                        case "fifteenMinutes":
                                        case "quarterHour":
                                            u = 4;
                                            break;
                                        case "tenMinutes":
                                            u = 6;
                                            break;
                                        case "fiveMinutes":
                                            u = 12;
                                            break
                                    }
                                    m = a(q).width() - 4;
                                    i.feedback.width(m);
                                    A = w.duration().days() >= 1 || w.allDay;
                                    if (A) {
                                        i.feedback.height((a(q).height()) - 6)
                                    } else {
                                        i.feedback.height(i.selectedAppointment.height())
                                    }
                                }
                                i._startTimers(M, L, w)
                            } else {
                                if (o === "monthView") {
                                    i.feedback.css("left", 1 + N.left);
                                    var n = i.selectedAppointmentTableBounds;
                                    var G = parseInt(n.top);
                                    if (G > N.top && G < N.top + q.offsetHeight) {
                                        i.feedback.css("top", G + "px")
                                    } else {
                                        i.feedback.css("top", i.selectedAppointment.height() + N.top - 2)
                                    }
                                    if (i.isTouchDevice()) {
                                        i.feedback.css("top", N.top + 2)
                                    }
                                    m = i.selectedAppointment.width();
                                    i.feedback.width(m);
                                    i.feedback.height(i.selectedAppointment.height());
                                    i._startTimers(M, L, w)
                                } else {
                                    if (o === "timelineDayView" || o === "timelineMonthView" || o === "timelineWeekView") {
                                        var n = i.selectedAppointmentTableBounds;
                                        var G = parseInt(n.top);
                                        if (G > N.top && G < N.top + q.offsetHeight) {
                                            i.feedback.css("top", G + "px")
                                        }
                                        i._startTimers(M, L, w)
                                    }
                                }
                            }
                        }
                    }
                    if (i.endDrag) {
                        var t = i.endDrag(w, q, i.feedback);
                        if (!t) {
                            i.feedback.width(z)
                        }
                        i.feedback.height(F);
                        i.feedback.css("top", J);
                        i.feedback.css("left", I);
                        return true
                    }
                    if (i.isTouchDevice() && i.touchMode !== true) {
                        X.stopPropagation();
                        return false
                    }
                }
            });
            var l = function(m) {
                i.isMouseDown = false;
                i.dragOrResize = false;
                if (i.contextMenu && i.menu && m.which !== 3) {
                    i.menu.jqxMenu("close");
                    i._hasOpenedMenu = false
                }
                if (m.which === 3) {
                    return true
                }
                if (i.selectedAppointment && i.feedback) {
                    if (i.editRecurrenceDialog.jqxWindow("isOpen")) {
                        return
                    }
                    i._handleMouseUp(i.selectedJQXAppointment, i._dragCell, i.resizing)
                }
            };
            this.addHandler(a(document), e, function(m) {
                return l(m)
            });
            if (!this.isTouchDevice()) {
                try {
                    if (document.referrer != "" || window.frameElement) {
                        if (window.top != null && window.top != window.self) {
                            var b = null;
                            if (window.parent && document.referrer) {
                                b = document.referrer
                            }
                            if (b && b.indexOf(document.location.host) != -1) {
                                var f = function(m) {
                                    if (!i.disabled) {
                                        return l(m)
                                    }
                                };
                                i.addHandler(a(window.top.document), "mouseup.jqxscheduler" + i.element.id, f)
                            }
                        }
                    }
                } catch (k) {}
            }
            this.addHandler(this.host, h, function(o) {
                var C = o.pageX;
                var A = o.pageY;
                if (i.disabled || o.which === 3) {
                    return true
                }
                if (i.selectedAppointment && i.isMouseDown) {
                    return true
                }
                if (i.hScrollInstance.isScrolling() || i.vScrollInstance.isScrolling()) {
                    return true
                }
                if (i._hasOpenedMenu) {
                    return true
                }
                if (i.overlay[0].style.display !== "none") {
                    return true
                }
                var n = null;
                if (o.target.className.indexOf("jqx-scheduler-appointment") >= 0 && o.target.className.indexOf("jqx-scheduler-appointment-inner-content") == -1 && o.target.className.indexOf("jqx-scheduler-appointment-content") == -1 && o.target.className.indexOf("jqx-scheduler-appointment-resize-indicator") == -1) {
                    n = o.target
                }
                var u = o.target;
                for (var v = 0; v < 4; v++) {
                    if (u.parentNode) {
                        if (u.className.indexOf("jqx-scheduler-appointment") >= 0 && u.className.indexOf("jqx-scheduler-appointment-innter-content") == -1 && u.className.indexOf("jqx-scheduler-appointment-content") == -1 && u.className.indexOf("jqx-scheduler-appointment-resize-indicator") == -1) {
                            n = u
                        }
                        u = u.parentNode
                    } else {
                        break
                    }
                }
                if (n) {
                    var B = i._views[i._view].type;
                    var E = i._views[i._view];
                    var D = i.getJQXAppointmentByElement(n);
                    if (D.resizable) {
                        var t = D.duration();
                        var p = D.allDay || t.days() >= 1 || (t.hours() == 23 && t.minutes == 59 && t.seconds == 59);
                        var z = a(n).coord();
                        var w = a(n).position();
                        i.selectedAppointmentBounds = {
                            top: z.top,
                            left: z.left,
                            width: a(n).width(),
                            height: a(n).height()
                        };
                        i.selectedAppointmentTableBounds = {
                            top: w.top,
                            left: w.left,
                            width: a(n).width(),
                            height: a(n).height()
                        };
                        var m = i.selectedAppointmentBounds;
                        if (B == "weekView" || B == "dayView") {
                            if (!p) {
                                if (A >= m.top - 3 && A <= m.top + 6) {
                                    n.style.cursor = "row-resize";
                                    i.topResize = true;
                                    i.bottomResize = false
                                } else {
                                    if (A >= m.top + m.height - 6 && A <= m.top + m.height + 3) {
                                        n.style.cursor = "row-resize";
                                        i.topResize = false;
                                        i.bottomResize = true
                                    } else {
                                        n.style.cursor = "pointer"
                                    }
                                }
                            } else {
                                if (B != "dayView") {
                                    if (C >= m.left - 3 && C <= m.left + 6) {
                                        n.style.cursor = "col-resize";
                                        i.leftResize = true;
                                        i.rightResize = false
                                    } else {
                                        if (C >= m.left + m.width - 6 && C <= m.left + m.width + 3) {
                                            n.style.cursor = "col-resize";
                                            i.leftResize = false;
                                            i.rightResize = true
                                        } else {
                                            n.style.cursor = "pointer"
                                        }
                                    }
                                } else {
                                    n.style.cursor = "pointer"
                                }
                            }
                        } else {
                            if (B == "monthView" && D.elements.length > 1) {
                                var s = i.table.coord();
                                for (var v = 0; v < D.elements.length; v++) {
                                    var q = D.elements[v];
                                    var m = {
                                        top: s.top + q.y,
                                        left: s.left + q.x,
                                        width: q.width,
                                        height: q.height
                                    };
                                    if ((v == 0 && !i.rtl) || (v == D.elements.length - 1 && i.rtl)) {
                                        if (C >= m.left - 3 && C <= m.left + 6) {
                                            if (A >= m.top && A <= m.top + m.height) {
                                                n.style.cursor = "col-resize";
                                                i.leftResize = true;
                                                i.rightResize = false;
                                                i.selectedAppointment = a(n);
                                                break
                                            } else {
                                                n.style.cursor = "pointer"
                                            }
                                        } else {
                                            n.style.cursor = "pointer"
                                        }
                                    } else {
                                        if ((v == D.elements.length - 1 && !i.rtl) || (v == 0 && i.rtl)) {
                                            if (C >= m.left + m.width - 6 && C <= m.left + m.width + 3) {
                                                if (A >= m.top && A <= m.top + m.height) {
                                                    n.style.cursor = "col-resize";
                                                    i.leftResize = false;
                                                    i.rightResize = true;
                                                    i.selectedAppointment = a(n);
                                                    break
                                                } else {
                                                    n.style.cursor = "pointer"
                                                }
                                            } else {
                                                n.style.cursor = "pointer"
                                            }
                                        }
                                    }
                                }
                            } else {
                                if (C >= m.left - 3 && C <= m.left + 6) {
                                    n.style.cursor = "col-resize";
                                    i.leftResize = true;
                                    i.rightResize = false
                                } else {
                                    if (C >= m.left + m.width - 6 && C <= m.left + m.width + 3) {
                                        n.style.cursor = "col-resize";
                                        i.leftResize = false;
                                        i.rightResize = true
                                    } else {
                                        n.style.cursor = "pointer"
                                    }
                                }
                            }
                        }
                    }
                }
                if (!i.enableHover) {
                    return true
                }
                if (o.target.nodeName.toLowerCase() === "td") {
                    var r = o.target
                } else {
                    var r = i.findCell(C, A)
                }
                if (!r) {
                    return true
                }
                i._removeHoveredCell();
                if (i.renderedRecords && i.renderedRecords.length === 0) {
                    return true
                }
                if (i.isMouseDown) {
                    if (Math.abs(i.mousecaptureposition.left - C) > 3 || Math.abs(i.mousecaptureposition.top - A) > 3) {
                        if (i.mousecaptureposition.clickedcell.length === 0) {
                            i.selectionarea[0].style.visibility = "hidden";
                            return
                        }
                        if (i.lastHoveredCell != r) {
                            if (i._selectRangeTimer) {
                                clearTimeout(i._selectRangeTimer)
                            }
                            i._selectRangeTimer = setTimeout(function() {
                                var x = i._views[i._view].type;
                                if (x != "agendaView") {
                                    i._selectRange(r, i.mousecaptureposition.clickedcell[0])
                                }
                            }, 1)
                        }
                        i.lastHoveredCell = r
                    }
                } else {
                    if (!n) {
                        if (i.rows.length == 1 && i.rows[0].cells.length == 1) {
                            return true
                        }
                        i._hoverCell(r)
                    }
                }
                return true
            });
            this.addHandler(a(document), "keydown.jqxscheduler" + i.element.id, function(m) {
                if (i.focused && m.ctrlKey) {
                    if (m.keyCode == 68) {
                        return false
                    }
                }
            });
            this.addHandler(this.host, "keydown", function(m) {
                return i._handleKey(m)
            });
            if (a.jqx.browser.msie && a.jqx.browser.version < 9) {
                this.addHandler(this.table, "dblclick", function(m) {
                    i.table.trigger("mousedown", m)
                })
            }
            var j = function(K) {
                var M = K.target;
                var u = null;
                if (i.disabled) {
                    return true
                }
                if (!i.menu && K.which == 3) {
                    i._initMenu()
                }
                var n = i.table.coord();
                var B = K.pageX;
                var w = K.pageY;
                if (a.jqx.browser.msie && a.jqx.browser.version < 9) {
                    if (arguments && arguments.length == 2) {
                        B = arguments[1].pageX;
                        w = arguments[1].pageY
                    }
                }
                if (i.isTouchDevice()) {
                    var N = a.jqx.position(K);
                    B = N.left;
                    w = N.top;
                    if (isNaN(B) || isNaN(w)) {
                        var N = a.jqx.position(K.originalEvent);
                        B = N.left;
                        w = N.top
                    }
                }
                i.mouseDown = {
                    top: w,
                    left: B
                };
                var u = i.findCell(B, w);
                if (K.target.nodeName.toLowerCase() === "td") {
                    var u = K.target
                } else {
                    var u = i.findCell(B, w)
                }
                var D = i._views[i._view].type;
                var v = i._views[i._view];
                if (D === "monthView" && v.weekViewNavigation) {
                    if (u && u.getAttribute("data-time-slot")) {
                        var z = i._getDateByString(u.getAttribute("data-date"));
                        var J = new a.jqx.date(z);
                        i.date = J;
                        i.setView("weekView")
                    }
                }
                if (D === "monthView" && v.dayViewNavigation) {
                    var m = a(u).coord().top;
                    if (u && w >= m && m + 16 >= w) {
                        var z = i._getDateByString(u.getAttribute("data-date"));
                        var J = new a.jqx.date(z);
                        i.date = J;
                        i.setView("dayView")
                    }
                }
                if (K.target.nodeName.toLowerCase() === "span" && (K.target.className.indexOf("jqx-icon-arrow-down") >= 0 || K.target.className.indexOf("jqx-icon-close") >= 0)) {
                    if (K.target.mousedown) {
                        K.target.mousedown()
                    }
                    return true
                }
                var t = a(u).parent();
                var P = t.attr("data-key");
                i.mousecaptureposition = {
                    left: K.pageX,
                    top: K.pageY,
                    clickedrow: a(t).index(),
                    clickedcell: a(u)
                };
                if (K.which !== 3) {
                    i.isMouseDown = true;
                    i.isMouseDownDate = new Date()
                } else {
                    i.isMouseDown = false
                }
                if (i.contextMenu && i.menu && K.which !== 3) {
                    i.menu.jqxMenu("close");
                    i._hasOpenedMenu = false
                }
                var r = function(y) {
                    if (K.which === 3) {
                        if (i.contextMenu && i.menu) {
                            if (y) {
                                i.menu.find("li:first").show()
                            } else {
                                i.menu.find("li:first").hide()
                            }
                            var x = i.menu.coord();
                            if (i.menu.css("display") == "block" && x.left == K.pageX && x.top == K.pageY) {
                                i._hasOpenedMenu = true;
                                K.preventDefault();
                                K.stopPropagation();
                                return
                            }
                            if (D === "agendaView") {}
                            i.menuOpening = true;
                            i.menu.jqxMenu("open", K.pageX, K.pageY);
                            i.menuOpening = false;
                            i._hasOpenedMenu = true;
                            K.preventDefault();
                            K.stopPropagation();
                            setTimeout(function() {
                                i.menu.jqxMenu("focus")
                            }, 50)
                        }
                    }
                };
                var I = function() {
                    for (var Q = 0; Q < A.length; Q++) {
                        var y = A[Q].cells;
                        for (var x = 0; x < y.length; x++) {
                            y[x].removeAttribute("data-selected")
                        }
                    }
                };
                var q = K.target.className.indexOf("jqx-scheduler-appointment") >= 0 && K.target.className.indexOf("jqx-scheduler-appointment-duration-status") == -1 && K.target.className.indexOf("jqx-scheduler-appointment-inner-content") == -1 && K.target.className.indexOf("jqx-scheduler-appointment-status") == -1 && K.target.className.indexOf("jqx-scheduler-appointment-resize-indicator") == -1 && K.target.className.indexOf("jqx-scheduler-appointment-content") == -1 ? a(K.target) : a(K.target).parents(".jqx-scheduler-appointment");
                if (q.length == 0) {
                    q = null
                }
                if (q && q[0].className.indexOf("feedback") == -1) {
                    if (q.parents(".jqx-scheduler-month-cell-popup").length > 0) {
                        return true
                    }
                    i.mouseDownPosition = {
                        top: w,
                        left: B
                    };
                    var H = a(q).coord();
                    i.selectedAppointmentBounds = {
                        top: H.top,
                        left: H.left,
                        width: a(q).width(),
                        height: a(q).height()
                    };
                    var N = a(q).position();
                    i.selectedAppointmentTableBounds = {
                        top: N.top,
                        left: N.left,
                        width: a(q).width(),
                        height: a(q).height()
                    };
                    if (!i._dragStartCell) {
                        i._dragStartCell = i.findCell(H.left, H.top)
                    }
                    var p = i.getJQXAppointmentByElement(q);
                    i._selectAppointment(p, q, "mouse");
                    i._raiseEvent("appointmentClick", {
                        appointment: p.boundAppointment
                    });
                    i.clearSelection();
                    var s = new Date().getTime();
                    var F = 300;
                    if (a.jqx.browser.msie && a.jqx.browser.version < 9) {
                        F = 1000
                    }
                    if (!i.clickTime) {
                        i.clickTime = new Date()
                    }
                    if ((s - i.clickTime.getTime() < F) && i._lastSelectedAppointment && p.id == i._lastSelectedAppointment.id && K.which != 3) {
                        if (!p.readOnly && !i.editRecurrenceDialog.jqxWindow("isOpen") && (!i._editDialog || (i._editDialog && !i._editDialog.jqxWindow("isOpen")))) {
                            var C = i._initDialog(p);
                            if (C !== false) {
                                i._openDialog()
                            }
                        }
                        i.mouseDownPosition = null;
                        i.isMouseDown = false;
                        if (K.preventDefault) {
                            K.preventDefault()
                        }
                        i._raiseEvent("appointmentDoubleClick", {
                            appointment: p.boundAppointment
                        })
                    } else {
                        if (!p.readOnly) {
                            if (K.which !== 3) {
                                i.focus()
                            }
                        }
                    }
                    i._lastSelectedAppointment = p;
                    if (K.preventDefault) {
                        K.preventDefault()
                    }
                    K.stopPropagation();
                    i.clickTime = new Date();
                    if (!p.readOnly) {
                        if (K.which == 3) {
                            r(true)
                        }
                    }
                    return
                } else {
                    if (K.which === 3) {
                        var O = i.getSelection();
                        if (O !== null) {
                            r(false)
                        } else {
                            i.clearAppointmentsSelection();
                            u.setAttribute("data-selected", "true");
                            i._lastSelectedCell = u;
                            i.focusedCell = u;
                            i._updateCellsSelection(u);
                            r(false);
                            var L = new a.jqx.date(u.getAttribute("data-date"), i.timeZone);
                            i._raiseEvent("cellClick", {
                                cell: u,
                                date: L
                            })
                        }
                    } else {
                        if (K.which != 3) {
                            i.clearAppointmentsSelection()
                        }
                    }
                }
                if (i.view == "agendaView") {
                    var q = K.target.className.indexOf("jqx-scheduler-agenda-appointment") != -1;
                    if (q) {
                        q = K.target;
                        var p = i.getJQXAppointmentByElement(q);
                        i._selectAppointment(p, q, "mouse");
                        i._raiseEvent("appointmentClick", {
                            appointment: p.boundAppointment
                        });
                        var s = new Date().getTime();
                        var F = 300;
                        if (a.jqx.browser.msie && a.jqx.browser.version < 9) {
                            F = 1000
                        }
                        if (!i.clickTime) {
                            i.clickTime = new Date()
                        }
                        if ((s - i.clickTime.getTime() < F) && i._lastSelectedAppointment && p.id == i._lastSelectedAppointment.id && K.which != 3) {
                            if (!p.readOnly && !i.editRecurrenceDialog.jqxWindow("isOpen") && (!i._editDialog || (i._editDialog && !i._editDialog.jqxWindow("isOpen")))) {
                                var C = i._initDialog(p);
                                if (C !== false) {
                                    i._openDialog()
                                }
                            }
                            i.mouseDownPosition = null;
                            i.isMouseDown = false;
                            if (K.preventDefault) {
                                K.preventDefault()
                            }
                            i._raiseEvent("appointmentDoubleClick", {
                                appointment: p.boundAppointment
                            })
                        }
                        i._lastSelectedAppointment = p;
                        if (K.preventDefault) {
                            K.preventDefault()
                        }
                        K.stopPropagation();
                        i.clickTime = new Date();
                        if (!p.readOnly) {
                            if (K.which == 3) {
                                r(true)
                            }
                        }
                    }
                }
                var E = function() {
                    if (!i.enableBrowserSelection) {
                        if (K.preventDefault) {
                            K.preventDefault()
                        }
                    }
                    var x = a(document).scrollTop();
                    i.host.focus();
                    a(document).scrollTop(x)
                };
                if (P !== undefined && K.which != 3) {
                    i.clickedTD = u;
                    var L = new a.jqx.date(u.getAttribute("data-date"), i.timeZone);
                    var o = i.rowinfo[P];
                    var G = false;
                    if (o) {
                        var s = new Date().getTime();
                        var F = 300;
                        if (!i.clickTime) {
                            i.clickTime = new Date()
                        }
                        i.focus();
                        if (i._lastSelectedCell && i._lastSelectedCell.getAttribute("data-selected") == "true" && u.getAttribute("data-selected") === "true" && (s - i.clickTime.getTime() < F)) {
                            var L = new a.jqx.date(u.getAttribute("data-date"), i.timeZone);
                            i._raiseEvent("cellDoubleClick", {
                                cell: u,
                                date: L
                            });
                            G = true;
                            i._initDialog();
                            i._openDialog();
                            if (K.preventDefault) {
                                K.preventDefault()
                            }
                        }
                    }
                    var A = i.rows;
                    if (u.getAttribute("data-selected") != "true" || K.shiftKey || s - i.clickTime.getTime() > F) {
                        if (u.getAttribute("data-time-slot") == "true") {
                            return
                        }
                        if (!K.shiftKey) {
                            i.shiftSelectedCell = null
                        }
                        if (K.shiftKey && i._lastSelectedCell && D != "agendaView") {
                            if (!i.shiftSelectedCell) {
                                i.shiftSelectedCell = i._lastSelectedCell
                            }
                            if (u.getAttribute("data-view") === i.shiftSelectedCell.getAttribute("data-view")) {
                                I()
                            }
                            i._selectRange(u, i.shiftSelectedCell)
                        }
                        if (!K.shiftKey) {
                            I();
                            var z = i._getDateByString(u.getAttribute("data-date"));
                            if (z >= i.min.toDate() && z <= i.max.toDate()) {
                                u.setAttribute("data-selected", "true")
                            } else {
                                u.setAttribute("data-selected", "false")
                            }
                        }
                        a('[data-key="' + P + '"]').removeClass(i.toTP("jqx-scheduler-selected-appointment"));
                        i.selectedAppointment = null;
                        var z = i._getDateByString(u.getAttribute("data-date"));
                        if (z >= i.min.toDate() && z <= i.max.toDate()) {
                            i._lastSelectedCell = u;
                            i.focusedCell = u
                        }
                        i._updateCellsSelection(u);
                        if (i.openedMonthCellPopup) {
                            i.openedMonthCellPopup.remove()
                        }
                    }
                    i._raiseEvent("cellClick", {
                        cell: u,
                        date: L
                    });
                    i.clickTime = new Date();
                    if (K.stopPropagation) {
                        K.stopPropagation()
                    }
                }
            };
            this.addHandler(this.pinnedtable, c, function(n) {
                var m = j(n);
                if (m != undefined) {
                    return m
                }
            });
            this.addHandler(this.table, c, function(n) {
                var m = j(n);
                if (m != undefined) {
                    return m
                }
            })
        },
        moveAppointment: function(k, c, g, f, j) {
            var h = this;
            var i = f.getAttribute("data-end-date");
            if (k) {
                if (h.editRecurrenceDialog.jqxWindow("isOpen")) {
                    return
                }
                clearInterval(h._verticalIntervalDragVelocity);
                clearInterval(h._horizontalIntervalDragVelocity);
                clearInterval(h._intervalDrag);
                clearInterval(h._horizontalIntervalDrag);
                var d = k.duration();
                var b = k.duration().days() >= 1 || k.allDay;
                var e = function(r) {
                    if (!j) {
                        var l = h._views[h._view].type;
                        var o = h._views[h._view];
                        var p = c;
                        k.from = p;
                        if (l === "dayView" || l === "weekView") {
                            if (!b && !i) {
                                k.to = p.add(d);
                                k.allDay = false
                            } else {
                                if (!b && i) {
                                    k.to = a.jqx.scheduler.utilities.getEndOfDay(p);
                                    k.allDay = true
                                } else {
                                    if (b && i) {
                                        k.to = p.add(d)
                                    } else {
                                        if (b && !i) {
                                            var n = 30;
                                            var q = o.timeRuler && o.timeRuler.scale;
                                            switch (q) {
                                                case "sixtyMinutes":
                                                case "hour":
                                                    n = 60;
                                                    break;
                                                case "fifteenMinutes":
                                                case "quarterHour":
                                                    n = 15;
                                                    break;
                                                case "tenMinutes":
                                                    n = 10;
                                                    break;
                                                case "fiveMinutes":
                                                    n = 5;
                                                    break
                                            }
                                            k.to = p.addMinutes(n);
                                            k.allDay = false
                                        }
                                    }
                                }
                            }
                        } else {
                            if (l === "monthView") {
                                k.to = p.add(d)
                            } else {
                                if (l === "timelineDayView" || l === "timelineWeekView" || l === "timelineMonthView") {
                                    k.to = p.add(d)
                                }
                            }
                        }
                    }
                    h._saveChangesAfterDragOrResize(r, k, f, j);
                    if (g != null) {
                        k.resourceId = g
                    }
                    h.table.find(".jqx-icon-arrow-down").hide();
                    if (k.allDay || b) {
                        h._renderrows()
                    } else {
                        var s = h.getViewStart();
                        var m = a.jqx.scheduler.utilities.getEndOfDay(h.getViewEnd());
                        h._prepareAppointmentsInView(s, m);
                        h._renderAppointments(s, m)
                    }
                    h._raiseEvent("appointmentChange", {
                        appointment: k.boundAppointment
                    });
                    h.changedAppointments[k.id] = {
                        type: "Update",
                        appointment: k.boundAppointment
                    };
                    h._ensureAppointmentVisible(h.selectedJQXAppointment)
                };
                if (k.isRecurrentAppointment()) {
                    e(false)
                } else {
                    e(null)
                }
            }
        },
        getAppointmentProperty: function(d, b) {
            var e = this;
            var c = null;
            if (this.appointmentsByKey[d]) {
                c = this.appointmentsByKey[d].jqxAppointment
            }
            if (!c) {
                return
            }
            return c[b]
        },
        setAppointmentProperty: function(e, b, g) {
            var f = this;
            var c = null;
            if (this.appointmentsByKey[e]) {
                c = this.appointmentsByKey[e].jqxAppointment
            }
            if (!c) {
                return
            }
            c[b] = g;
            f.changedAppointments[e] = {
                type: b,
                appointment: c.boundAppointment
            };
            switch (e) {
                case "draggable":
                case "resizable":
                    break;
                case "background":
                case "color":
                case "borderColor":
                case "status":
                case "tooltip":
                case "subject":
                case "location":
                case "description":
                case "style":
                    var h = f.getViewStart();
                    var d = a.jqx.scheduler.utilities.getEndOfDay(f.getViewEnd());
                    f._prepareAppointmentsInView(h, d);
                    f._renderAppointments(h, d);
                    break;
                case "hidden":
                case "timeZone":
                    if (c.isAllDayAppointment()) {
                        f._renderrows()
                    } else {
                        var h = f.getViewStart();
                        var d = a.jqx.scheduler.utilities.getEndOfDay(f.getViewEnd());
                        f._prepareAppointmentsInView(h, d);
                        f._renderAppointments(h, d)
                    }
                    break;
                default:
                    f._renderrows()
            }
        },
        deleteAppointment: function(b) {
            if (this.appointmentsByKey[b]) {
                this._deleteAppointment(this.appointmentsByKey[b].jqxAppointment)
            }
        },
        _deleteAppointment: function(b) {
            var g = this;
            if (b.rootAppointment) {
                if (!b.isException()) {
                    if (b.rootAppointment != null) {
                        b.rootAppointment.exceptions.push(g.editAppointment);
                        b.rootAppointment.recurrenceException.push(g.editAppointment.occurrenceFrom)
                    } else {
                        b.exceptions.push(g.editAppointment);
                        b.recurrenceException.push(g.editAppointment.occurrenceFrom)
                    }
                } else {
                    var f = b.rootAppointment ? b.rootAppointment.exceptions : b.exceptions;
                    for (var e = 0; e < f.length; e++) {
                        if (f[e].occurrenceFrom.equals(g.editAppointment.occurrenceFrom)) {
                            f[e] = b;
                            break
                        }
                    }
                }
                b.hidden = true;
                g._renderrows();
                return
            }
            g._raiseEvent("appointmentDelete", {
                appointment: b.boundAppointment
            });
            var d = b.id;
            delete g.appointmentsByKey[d];
            var c = -1;
            for (var e = 0; e < g.appointments.length; e++) {
                if (g.appointments[e] == b.boundAppointment || g.appointments[e].id == b.boundAppointment.id) {
                    c = e;
                    break
                }
            }
            if (c != -1) {
                g.appointments.splice(c, 1)
            }
            c = -1;
            for (var e = 0; e < g.uiappointments.length; e++) {
                if (g.uiappointments[e] == b || g.uiappointments[e].id == b.id) {
                    c = e;
                    break
                }
            }
            if (c != -1) {
                g.uiappointments.splice(c, 1)
            }
            if (g.selectedJQXAppointment == b) {
                g.clearAppointmentsSelection();
                if (g.uiappointments[c + 1]) {
                    g.selectAppointment(g.uiappointments[c + 1].id)
                } else {
                    if (g.uiappointments[c - 1]) {
                        g.selectAppointment(g.uiappointments[c - 1].id)
                    } else {
                        if (g.uiappointments[0]) {
                            g.selectAppointment(g.uiappointments[0].id)
                        }
                    }
                }
            }
            g.changedAppointments[d] = {
                type: "Delete",
                appointment: b.boundAppointment
            };
            g._renderrows()
        },
        addAppointment: function(o) {
            var g = this;
            if (!o.scheduler) {
                o.scheduler = this
            }
            if (!o.duration) {
                if ((!o.from && !o.to) || (!o.appointmentObject)) {
                    var f = o;
                    var d = {};
                    var e = ["from", "to", "id", "style", "description", "location", "subject", "background", "color", "borderColor", "recurrencePattern", "recurrenceException", "draggable", "resizable", "tooltip", "hidden", "allDay", "timeZone", "ownerId", "resourceId"];
                    for (var w in g.appointmentDataFields) {
                        var b = g.appointmentDataFields[w];
                        var q = f[b];
                        if (w == "from" || w == "to") {
                            q = new a.jqx.date(q)
                        }
                        if (w == "style") {
                            if (q) {
                                var k = g.getAppointmentColors(q);
                                d.color = k.color;
                                d.background = k.background;
                                d.borderColor = k.border
                            }
                        }
                        if (w == "recurrencePattern") {
                            if (q) {
                                q = new a.jqx.scheduler.recurrencePattern(q);
                                q.timeZone = f.timeZone || g.timeZone
                            }
                        }
                        if (w == "recurrenceException") {
                            var t = new Array();
                            if (q) {
                                if (q.indexOf("EXDATE:") >= 0) {
                                    q = q.substring(q.indexOf("EXDATE:") + 7)
                                }
                                var l = new Array();
                                if (q.indexOf(",") >= 0) {
                                    l = q.split(",")
                                } else {
                                    l.push(q)
                                }
                                for (var s = 0; s < l.length; s++) {
                                    var p = l[s];
                                    if (p.indexOf(";") >= 0) {
                                        var h = p.split(";")[1];
                                        p = p.split(";")[0];
                                        if (h.toLowerCase().indexOf("display") >= 0 && h.toLowerCase().indexOf("none")) {
                                            d.hidden = true
                                        }
                                    }
                                    try {
                                        var u = a.jqx.scheduler.utilities.untilStringToDate(p);
                                        if (u != "Invalid Date") {
                                            if (d.timeZone) {
                                                u = new a.jqx.date(u, d.timeZone)
                                            } else {
                                                if (g.timeZone) {
                                                    u = u.toTimeZone(g.timeZone)
                                                } else {
                                                    u = new a.jqx.date(u)
                                                }
                                            }
                                        }
                                    } catch (v) {
                                        var u = new a.jqx.date(p, g.timeZone)
                                    }
                                    t.push(u)
                                }
                            }
                            q = t
                        }
                        d[w] = q
                    }
                    for (var m in e) {
                        var w = e[m];
                        if (d[w] == undefined) {
                            var q = "";
                            if (w == "originalData") {
                                continue
                            }
                            if (w == "ownerId") {
                                q = null
                            }
                            if (w == "timeZone") {
                                q = null
                            }
                            if (w == "recurrencePattern") {
                                q = null
                            }
                            if (w == "recurrenceException") {
                                q = null
                            }
                            if (w == "allDay") {
                                q = false
                            }
                            if (w == "draggable") {
                                q = true
                            }
                            if (w == "resizable") {
                                q = true
                            }
                            if (w == "hidden") {
                                q = false
                            }
                            if (w == "resourceId") {
                                q = null
                            }
                            if (w == "from") {
                                q = new a.jqx.date()
                            }
                            if (w == "to") {
                                q = new a.jqx.date().addHours(1)
                            }
                            d[w] = q
                        }
                    }
                    d.originalData = f;
                    d.scheduler = this;
                    var o = new a.jqx.scheduler.appointment(d);
                    if (d.timeZone) {
                        o.from = o.from.toTimeZone(d.timeZone);
                        o.to = o.to.toTimeZone(d.timeZone)
                    }
                    if (g.timeZone) {
                        if (!d.timeZone) {
                            o.timeZone = g.timeZone
                        }
                        o.from = o.from.toTimeZone(g.timeZone);
                        o.to = o.to.toTimeZone(g.timeZone)
                    } else {
                        o.from = o.from.toTimeZone(null);
                        o.to = o.to.toTimeZone(null)
                    }
                } else {
                    var i = new a.jqx.scheduler.appointment();
                    for (var w in o) {
                        i[w] = o[w]
                    }
                    o = i
                }
            }
            var w = g.dataview.generatekey();
            o.id = w;
            g.appointmentsByKey[w] = o;
            g.appointments.push(o);
            var c = {};
            var j = {};
            for (var r in g.appointmentDataFields) {
                var b = g.appointmentDataFields[r];
                var q = o[r];
                c[r] = q;
                if (r == "from" || r == "to") {
                    if (q.toDate) {
                        q = q.toDate()
                    } else {
                        q = new a.jqx.date(q).toDate()
                    }
                }
                j[b] = q
            }
            c.originalData = j;
            o.boundAppointment = c;
            c.jqxAppointment = o;
            o.jqxAppointment = o;
            g._raiseEvent("appointmentAdd", {
                appointment: o.boundAppointment
            });
            g.uiappointments.push(o);
            g.changedAppointments[w] = {
                type: "Add",
                appointment: o.boundAppointment
            };
            if (g.hiddenResources && g.hiddenResources[o.resourceId]) {
                g.hideAppointmentsByResource(o.resourceId)
            } else {
                g._renderrows()
            }
            g._selectAppointment(o);
            g._lastSelectedAppointment = o;
            if (g.resources) {
                var n = o.resourceId;
                if (g._resources.indexOf(n) === -1) {
                    g._resources.push(n);
                    g._renderrows()
                }
            }
        },
        _updateCellsSelection: function() {
            var f = this;
            var l = f.rows;
            var b = 0;
            var c = 0;
            if (b > 0 && f.rtl) {
                b = 0;
                c = 1
            }
            for (var e = 0; e < l.length; e++) {
                var k = l[e].cells;
                for (var d = b; d < k.length - c; d++) {
                    var h = k[d];
                    if (h.getAttribute("data-selected") == "true") {
                        var g = h.jqxClassName || h.className;
                        if (g.indexOf("jqx-fill-state-pressed") >= 0) {
                            if (h != f.focusedCell) {
                                g = g.replace(" jqx-scheduler-cell-focus", "");
                                g = g.replace(" jqx-scheduler-cell-focus-" + f.theme, "")
                            } else {
                                if (h == f.focusedCell && f.focused) {
                                    g = g.replace(" jqx-scheduler-cell-focus", "");
                                    g = g.replace(" jqx-scheduler-cell-focus-" + f.theme, "");
                                    if (!f.selectedAppointment) {
                                        g = g += " " + f.toTP("jqx-scheduler-cell-focus")
                                    }
                                }
                            }
                            if (h.className != g) {
                                h.className = g
                            }
                            h.jqxClassName = g;
                            continue
                        }
                        g = g.replace(" jqx-fill-state-pressed", "");
                        g = g.replace(" jqx-fill-state-pressed-" + f.theme, "");
                        g = g.replace(" jqx-scheduler-cell-focus", "");
                        g = g.replace(" jqx-scheduler-cell-focus-" + f.theme, "");
                        g = g.replace(" jqx-grid-cell-selected", "");
                        g = g.replace(" jqx-grid-cell-selected-" + f.theme, "");
                        g = g.replace(" jqx-scheduler-cell-selected", "");
                        g = g.replace(" jqx-scheduler-cell-selected-" + f.theme, "");
                        g = g += " " + f.toTP("jqx-fill-state-pressed jqx-grid-cell-selected jqx-scheduler-cell-selected");
                        if (h == f.focusedCell && f.focused && !f.selectedAppointment) {
                            g = g += " " + f.toTP("jqx-scheduler-cell-focus")
                        }
                        if (h.className != g) {
                            h.className = g
                        }
                        h.jqxClassName = g
                    } else {
                        var g = h.jqxClassName || h.className;
                        if (g.indexOf("jqx-fill-state-pressed") == -1) {
                            if (h != f.focusedCell) {
                                g = g.replace(" jqx-scheduler-cell-focus", "");
                                g = g.replace(" jqx-scheduler-cell-focus-" + f.theme, "")
                            } else {
                                if (h == f.focusedCell && f.focused) {
                                    g = g.replace(" jqx-scheduler-cell-focus", "");
                                    g = g.replace(" jqx-scheduler-cell-focus-" + f.theme, "");
                                    if (!f.selectedAppointment) {
                                        g = g += " " + f.toTP("jqx-scheduler-cell-focus")
                                    }
                                }
                            }
                            if (h.className != g) {
                                h.className = g
                            }
                            h.jqxClassName = g;
                            continue
                        } else {
                            if (h == f.focusedCell && f.focused) {
                                g = g.replace(" jqx-scheduler-cell-focus", "");
                                g = g.replace(" jqx-scheduler-cell-focus-" + f.theme, "");
                                if (!f.selectedAppointment) {
                                    g = g += " " + f.toTP("jqx-scheduler-cell-focus")
                                }
                                if (h.className != g) {
                                    h.className = g
                                }
                                h.jqxClassName = g
                            }
                        }
                        g = g.replace(" jqx-fill-state-pressed", "");
                        g = g.replace(" jqx-fill-state-pressed-" + f.theme, "");
                        g = g.replace(" jqx-scheduler-cell-focus", "");
                        g = g.replace(" jqx-scheduler-cell-focus-" + f.theme, "");
                        g = g.replace(" jqx-grid-cell-selected", "");
                        g = g.replace(" jqx-grid-cell-selected-" + f.theme, "");
                        g = g.replace(" jqx-scheduler-cell-selected", "");
                        g = g.replace(" jqx-scheduler-cell-selected-" + f.theme, "");
                        if (h == f.focusedCell && f.focused && !f.selectedAppointment) {
                            g = g += " " + f.toTP("jqx-scheduler-cell-focus")
                        }
                        if (h.className != g) {
                            h.className = g
                        }
                        h.jqxClassName = g;
                        h.removeAttribute("data-selected")
                    }
                }
            }
        },
        _getuikey: function(c, f) {
            var e = null;
            var d = this.table[0].rows;
            e = a(d[c]).attr("data-key");
            if (a(d[c]).attr("data-role")) {
                var b = a(d[c]);
                if (f == "next") {
                    while (b) {
                        b = b.next();
                        if (b) {
                            var g = b.attr("data-role");
                            if (!g) {
                                e = b.attr("data-key");
                                return e
                            }
                        }
                    }
                } else {
                    if (f == "prev") {
                        while (b) {
                            b = b.prev();
                            if (b) {
                                var g = b.attr("data-role");
                                if (!g) {
                                    e = b.attr("data-key");
                                    return e
                                }
                            }
                        }
                    }
                }
                return null
            }
            return e
        },
        getRows: function() {
            var h = this._views[this._view].type;
            var k = this._views[this._view];
            var d = "halfHour";
            if (k.timeRuler && k.timeRuler.scale) {
                d = k.timeRuler.scale
            }
            var j = 24;
            var b = this.showAllDayRow;
            if (k.timeRuler && (h === "dayView" || h === "weekView")) {
                var c = 0;
                var f = 23;
                if (k.timeRuler.scaleStartHour != undefined) {
                    var c = parseInt(k.timeRuler.scaleStartHour)
                }
                if (k.timeRuler.scaleEndHour != undefined) {
                    var f = parseInt(k.timeRuler.scaleEndHour)
                }
                if (c < 0) {
                    c = 0
                }
                if (f < 0) {
                    f = 23
                }
                if (c > 23) {
                    c = 0
                }
                if (f > 23) {
                    f = 23
                }
                j = f - c + 1;
                if (k.timeRuler.showAllDayRow != undefined) {
                    b = k.timeRuler.showAllDayRow
                }
            }
            var l = new Array();
            var g = 0;
            switch (h) {
                case "dayView":
                case "weekView":
                default:
                    var g = j * 2;
                    if (d === "hour" || d === "sixtyMinutes") {
                        var g = j
                    } else {
                        if (d === "quarterHour" || d === "fifteenMinutes") {
                            var g = j * 4
                        } else {
                            if (d === "tenMinutes") {
                                var g = j * 6
                            } else {
                                if (d === "fiveMinutes") {
                                    var g = j * 12
                                }
                            }
                        }
                    }
                    if (b) {
                        g++
                    }
                    break;
                case "monthView":
                    var g = 6;
                    break;
                case "timelineDayView":
                case "timelineWeekView":
                case "timelineMonthView":
                    var g = 1;
                    break;
                case "agendaView":
                    var g = this.appointments ? this.appointments.length : 0;
                    break
            }
            for (var e = 0; e < g; e++) {
                l.push({
                    uid: e
                })
            }
            return l
        },
        _getDateByString: function(j) {
            var e = j.split(" ");
            var l = e[0].split("-");
            var h = e[1].split(":");
            var g = parseInt(l[0], 10);
            var f = parseInt(l[1], 10) - 1;
            var i = parseInt(l[2], 10);
            var d = parseInt(h[0], 10);
            var c = parseInt(h[1], 10);
            var k = parseInt(h[2], 10);
            var b = new Date(g, f, i, d, c, k);
            if (g < 1970) {
                b.setFullYear(g, f, i)
            }
            return b
        },
        _getCellByDate: function(b, d, c) {
            var m = this.rows;
            if (d === undefined) {
                d = false
            }
            if (c === undefined) {
                if (this.focusedCell) {
                    c = this.focusedCell.getAttribute("data-view")
                }
            }
            for (var g = 0; g < m.length; g++) {
                var l = m[g];
                if (l.element.getAttribute("data-group-row")) {
                    continue
                }
                for (var f = 0; f < l.cells.length; f++) {
                    var k = l.cells[f];
                    if (k.getAttribute("rowspan") != null) {
                        continue
                    }
                    if (k.getAttribute("data-view") !== c) {
                        continue
                    }
                    if (k.getAttribute("data-time-slot")) {
                        continue
                    }
                    if (d && k.getAttribute("data-end-date") != null) {
                        continue
                    }
                    var h = k.getAttribute("data-date");
                    var e = this._getDateByString(h);
                    if (e.valueOf() == b.valueOf()) {
                        return k
                    }
                }
            }
        },
        _rendercelltexts: function() {
            if (a.jqx.credits !== "75CE8878-FCD1-4EC7-9249-BA0F153A5DE8") {
                var c = "www.jqwidgets.com";
                if (location.hostname.indexOf(c.substring(4)) == -1) {
                    if (this._gridRenderElement) {
                        a(this._gridRenderElement).remove()
                    }
                    var d = String.fromCharCode(83, 80, 65, 78);
                    var b = String.fromCharCode(72, 84, 84, 80, 58, 47, 47);
                    var e = document.createElement(d);
                    e.id = a.jqx.utilities.createId();
                    e.innerHTML = c;
                    e.style.position = "absolute";
                    e.style.right = "5px";
                    e.style.bottom = "5px";
                    e.style.color = "#909090";
                    e.style.cursor = "pointer";
                    e.style.zIndex = "999999";
                    e.style.display = "none";
                    e.style.fontSize = "9px";
                    e.onmousedown = function() {
                        open(b + c)
                    };
                    this.content[0].appendChild(e);
                    this._gridRenderElement = e
                }
            }
        },
        _handleKey: function(s) {
            if (this._loading) {
                return true
            }
            var t = s.shiftKey;
            var m = s.ctrlKey || s.metaKey;
            var i = this;
            var w = s.charCode ? s.charCode : s.keyCode ? s.keyCode : 0;
            if (i._hasOpenedMenu) {
                if (w == 27) {
                    i.closeMenu()
                } else {
                    i.menu.jqxMenu("focus")
                }
                return true
            }
            if (w === 13 || (i.selectedAppointment && w == 46)) {
                if (i.editRecurrenceDialog && i.editRecurrenceDialog.jqxWindow("isOpen")) {
                    return true
                }
                if (i._editDialog && i._editDialog.jqxWindow("isOpen")) {
                    return true
                }
                if (!i.selectedAppointment) {
                    i._initDialog();
                    i._openDialog()
                } else {
                    var c = i.getJQXAppointmentByElement(i.selectedAppointment);
                    if (!c.readOnly) {
                        if (w == 46) {
                            var o = i._initDialog(c, "delete");
                            if (o !== false) {
                                i._openDialog()
                            }
                        } else {
                            var o = i._initDialog(c);
                            if (o !== false) {
                                i._openDialog()
                            }
                        }
                    }
                }
            }
            if (w === 27) {
                if (i.dragOrResize) {
                    i.table.find(".jqx-icon-arrow-down").hide();
                    var f = i.getViewStart();
                    var e = a.jqx.scheduler.utilities.getEndOfDay(i.getViewEnd());
                    i._prepareAppointmentsInView(f, e);
                    i._renderAppointments(f, e);
                    i._removeFeedbackAndStopResize();
                    return false
                }
            }
            var r = function(z) {
                var B = i.selectedAppointment;
                var y = i.getJQXAppointmentByElement(B);
                var x = y.elements[0].cells[0].cell;
                var L = y.elements[y.elements.length - 1].cells[y.elements[y.elements.length - 1].cells.length - 1].cell;
                var E = i.rows[i.rows.length - 1].cells[i.rows[i.rows.length - 1].cells.length - 1];
                if (t || (!t && !m && (z == "down" || z == "right"))) {
                    x = L
                }
                var H = i._views[i._view].type;
                var G = i._views[i._view];
                var I = x;
                switch (z) {
                    case "left":
                        var D = i.rowByCell[x.getAttribute("data-key")];
                        var F = D.indexOf(x);
                        if (F > 0 && !t) {
                            I = D.cells[F - 1]
                        } else {
                            if (H == "monthView" && !t) {
                                var A = D.aboveRow;
                                if (A) {
                                    I = A.cells[A.cells.length - 1]
                                }
                            }
                        }
                        break;
                    case "right":
                        var D = i.rowByCell[x.getAttribute("data-key")];
                        var F = D.indexOf(x);
                        if (F < D.cells.length - 1) {
                            I = D.cells[F + 1]
                        } else {
                            if (H == "monthView") {
                                var P = D.belowRow;
                                if (P) {
                                    I = P.cells[0]
                                }
                            }
                        }
                        if (H == "monthView" && !t && m && L == E) {
                            I = x
                        }
                        break;
                    case "up":
                        var D = i.rowByCell[x.getAttribute("data-key")];
                        var F = D.indexOf(x);
                        var A = D.aboveRow;
                        if (A && !t) {
                            I = A.cells[F]
                        }
                        break;
                    case "down":
                        var D = i.rowByCell[x.getAttribute("data-key")];
                        var F = D.indexOf(x);
                        var P = D.belowRow;
                        if (P) {
                            I = P.cells[F]
                        }
                        break
                }
                var N = I.getAttribute("data-date");
                var M = new a.jqx.date(N, i.timeZone);
                var H = a(I).attr("data-view");
                var J = i._resources[parseInt(H) - 1];
                if (t) {
                    var H = i._views[i._view].type;
                    var G = i._views[i._view];
                    var C = false;
                    if (H === "dayView" || H === "weekView") {
                        if (x.getAttribute("data-end-date")) {
                            if (z == "left" && (y.elements[0].cells.length > 1 || i.rtl)) {
                                if (!i.rtl) {
                                    y.to = a.jqx.scheduler.utilities.getEndOfDay(M.addDays(-1))
                                } else {
                                    y.to = a.jqx.scheduler.utilities.getEndOfDay(M.addDays(1))
                                }
                                C = true
                            } else {
                                if (z == "right") {
                                    if (!i.rtl || (i.rtl && y.elements[0].cells.length > 1)) {
                                        y.to = a.jqx.scheduler.utilities.getEndOfDay(M)
                                    }
                                    C = true
                                }
                            }
                        } else {
                            if (z == "up" && y.elements[0].cells.length > 1) {
                                y.to = M;
                                C = true
                            } else {
                                if (z == "down") {
                                    y.to = M.addMinutes(i.getMinutesPerScale());
                                    C = true
                                }
                            }
                        }
                    } else {
                        if (H.indexOf("month") >= 0) {
                            if (z == "left" && (y.elements[0].cells.length > 1 || y.elements.length > 1)) {
                                y.to = a.jqx.scheduler.utilities.getEndOfDay(M.addDays(-1));
                                C = true
                            } else {
                                if (z == "right") {
                                    y.to = a.jqx.scheduler.utilities.getEndOfDay(M);
                                    C = true
                                }
                            }
                        } else {
                            if ((!i.rtl && z == "left" && y.elements[0].cells.length > 1) || (i.rtl && z == "right" && y.elements[0].cells.length > 1)) {
                                y.to = M;
                                if (i.rtl) {
                                    y.to = M.addMinutes(i.getMinutesPerScale())
                                }
                                C = true
                            } else {
                                if ((!i.rtl && z == "right") || (i.rtl && z == "left")) {
                                    y.to = M.addMinutes(i.getMinutesPerScale());
                                    if (i.rtl) {
                                        y.to = y.to.addMinutes(i.getMinutesPerScale())
                                    }
                                    C = true
                                }
                            }
                        }
                    }
                    if (C) {
                        i.moveAppointment(y, M, J, I, true)
                    }
                } else {
                    if (m) {
                        i.moveAppointment(y, M, J, I)
                    } else {
                        i.clearAppointmentsSelection();
                        var K = true;
                        if (z == "down") {
                            K = false
                        }
                        i.selectCell(M, K, H);
                        i._ensureVisible(I)
                    }
                }
                if (i.selectedAppointment) {
                    i.selectedAppointment.removeClass(i.toTP("jqx-scheduler-selected-appointment"));
                    var O = i.selectedAppointment.attr("data-key");
                    a('[data-key="' + O + '"]').addClass(i.toTP("jqx-scheduler-selected-appointment"));
                    i.clearSelection()
                }
            };
            if (s.altKey && i._resourcesElements && i._resources && i._resources.length > 0) {
                var g = function(x) {
                    var y = i._resourcesElements.bottom[x];
                    if (y.attr("data-toggle") == "on") {
                        i.hideAppointmentsByResource(x)
                    } else {
                        i.showAppointmentsByResource(x)
                    }
                };
                var j = w >= 49 && w <= 58 ? j = w - 48 : -1;
                if (j >= 1) {
                    a.each(i._resources, function(x, y) {
                        if (x == j - 1) {
                            g(y);
                            return false
                        }
                    });
                    return false
                }
            }
            if (s.ctrlKey) {
                if (!i.selectedAppointment) {
                    if (w == 37) {
                        i.toolbarLeftButton.trigger("click");
                        i._ensureVisible(i.focusedCell);
                        return false
                    } else {
                        if (w == 39) {
                            i.toolbarRightButton.trigger("click");
                            i._ensureVisible(i.focusedCell);
                            return false
                        }
                    }
                }
                if (w == 49) {
                    i._setView(0);
                    return false
                } else {
                    if (w == 50) {
                        i._setView(1);
                        return false
                    } else {
                        if (w == 51) {
                            i._setView(2);
                            return false
                        } else {
                            if (w == 52) {
                                i._setView(3);
                                return false
                            } else {
                                if (w == 53) {
                                    i._setView(4);
                                    return false
                                } else {
                                    if (w == 54) {
                                        i._setView(5);
                                        return false
                                    } else {
                                        if (w == 68) {
                                            i.dateTimeInput.jqxDateTimeInput("open");
                                            return false
                                        } else {
                                            if (w == 77) {
                                                i.openMenu();
                                                return false
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (w == 9) {
                if (!s.shiftKey) {
                    if (i.selectedAppointment) {
                        i.clearSelection();
                        var d = i.selectedAppointment;
                        var c = i.getJQXAppointmentByElement(d);
                        var h = i.tabKeyAppointments.indexOf(c);
                        if (h < i.tabKeyAppointments.length - 1) {
                            c = i.tabKeyAppointments[h + 1];
                            i._selectAppointment(c);
                            i._lastSelectedAppointment = c;
                            i._ensureAppointmentVisible(c);
                            return false
                        } else {
                            i.clearAppointmentsSelection();
                            return true
                        }
                    } else {
                        var c = i.tabKeyAppointments[0];
                        if (c) {
                            i._selectAppointment(c);
                            i._lastSelectedAppointment = c;
                            i._ensureAppointmentVisible(c);
                            return false
                        } else {
                            if (!i.focusedCell) {
                                i._updateFocusedCell();
                                i._ensureVisible(i.focusedCell);
                                return false
                            } else {
                                if (i.focusedCell) {
                                    if (i.focusedCell.className.indexOf("-focus") == -1) {
                                        i._updateCellsSelection();
                                        i._ensureVisible(i.focusedCell);
                                        return false
                                    }
                                }
                            }
                        }
                    }
                } else {
                    if (i.selectedAppointment) {
                        i.clearSelection();
                        var d = i.selectedAppointment;
                        var c = i.getJQXAppointmentByElement(d);
                        if (c) {
                            var h = i.tabKeyAppointments.indexOf(c);
                            if (h > 0) {
                                c = i.tabKeyAppointments[h - 1];
                                i._selectAppointment(c);
                                i._lastSelectedAppointment = c;
                                i._ensureAppointmentVisible(c);
                                return false
                            } else {
                                i.clearAppointmentsSelection();
                                if (!i.focusedCell) {
                                    i._updateFocusedCell();
                                    i._ensureVisible(i.focusedCell);
                                    return false
                                } else {
                                    if (i.focusedCell) {
                                        if (i.focusedCell.className.indexOf("-focus") == -1) {
                                            i._updateCellsSelection();
                                            i._ensureVisible(i.focusedCell);
                                            return false
                                        }
                                    }
                                }
                                return true
                            }
                        }
                    } else {
                        if (!i.focusedCell) {
                            i._updateFocusedCell();
                            i._ensureVisible(i.focusedCell)
                        } else {
                            if (i.focusedCell) {
                                if (i.focusedCell.className.indexOf("-focus") == -1) {
                                    i._updateCellsSelection();
                                    i._ensureVisible(i.focusedCell);
                                    return false
                                }
                            }
                        }
                    }
                }
            }
            if (i.selectedAppointment) {
                if (w == 37) {
                    r("left")
                } else {
                    if (w == 38) {
                        r("up")
                    } else {
                        if (w == 40) {
                            r("down")
                        } else {
                            if (w == 39) {
                                r("right")
                            }
                        }
                    }
                }
                if (w >= 37 && w <= 40) {
                    return false
                }
                return
            }
            var k = this._lastSelectedCell;
            if (!k) {
                return
            }
            if (!a(this._lastSelectedCell).parent()[0]) {
                this._lastSelectedCell = this.rows[0].cells[0];
                k = this._lastSelectedCell
            }
            var n = this.rows;
            var p = this._views[this._view].type;
            var l = this._views[this._view];
            var v = "halfHour";
            if (l.timeRuler && l.timeRuler.scale) {
                v = l.timeRuler.scale
            }
            var q = function(K, F) {
                var B = 30;
                switch (v) {
                    case "sixtyMinutes":
                    case "hour":
                        B = 60;
                        break;
                    case "thirtyMinutes":
                    case "halfHour":
                        B = 30;
                        break;
                    case "fifteenMinutes":
                    case "quarterHour":
                        B = 15;
                        break;
                    case "tenMinutes":
                        B = 10;
                        break;
                    case "fiveMinutes":
                        B = 5;
                        break
                }
                var I = K.getAttribute("data-date");
                var H = function(U, N, P) {
                    if (U && (U.getAttribute("rowspan") == null || p == "agendaView") && U.getAttribute("data-time-slot") == null) {
                        if (P < i.min || P > i.max) {
                            return
                        }
                        var S = i.rows;
                        var R = i._lastSelectedCell;
                        i._lastSelectedCell = U;
                        if (s.shiftKey && i._lastSelectedCell) {
                            if (!i.shiftSelectedCell) {
                                i.shiftSelectedCell = k
                            }
                        } else {
                            if (!s.shiftKey) {
                                i.shiftSelectedCell = null
                            }
                        }
                        if (!i.shiftSelectedCell) {
                            for (var Q = 0; Q < S.length; Q++) {
                                var T = S[Q];
                                if (T.element.getAttribute("data-group-row")) {
                                    continue
                                }
                                for (var O = 0; O < T.cells.length; O++) {
                                    var N = T.cells[O];
                                    N.removeAttribute("data-selected", "false")
                                }
                            }
                            U.setAttribute("data-selected", "true");
                            i.focusedCell = U
                        } else {
                            if (U.getAttribute("data-end-date") && i.shiftSelectedCell.getAttribute("data-end-date")) {
                                i.focusedCell = U;
                                i._selectRange(U, i.shiftSelectedCell)
                            } else {
                                if (!U.getAttribute("data-end-date") && !i.shiftSelectedCell.getAttribute("data-end-date")) {
                                    i.focusedCell = U;
                                    i._selectRange(U, i.shiftSelectedCell)
                                } else {
                                    i.focusedCell = R;
                                    i._lastSelectedCell = R
                                }
                            }
                        }
                        i._ensureVisible(i.focusedCell)
                    }
                };
                var y = new a.jqx.date(I, i.timeZone);
                var z = K.getAttribute("data-view");
                switch (F) {
                    case "left":
                        var M = i.rowByCell[K.getAttribute("data-key")];
                        var E = M.indexOf(K);
                        if (E > 0) {
                            var C = M.cells[E - 1];
                            var J = new a.jqx.date(C.getAttribute("data-date"), i.timeZone)
                        }
                        H(C, K, J);
                        break;
                    case "right":
                        var M = i.rowByCell[K.getAttribute("data-key")];
                        var E = M.indexOf(K);
                        if (E < M.cells.length - 1) {
                            var C = M.cells[E + 1];
                            var J = new a.jqx.date(C.getAttribute("data-date"), i.timeZone)
                        }
                        H(C, K, J);
                        break;
                    case "up":
                        var M = i.rowByCell[K.getAttribute("data-key")];
                        var E = M.indexOf(K);
                        var x = M.aboveRow;
                        if (x) {
                            var C = x.cells[E];
                            if (E == 0 && C.getAttribute("rowspan")) {
                                var G = -1 + i.rows.indexOf(M);
                                var C = K;
                                while (G >= 0) {
                                    if (i.rows[G].cells[0] == C) {
                                        G--
                                    } else {
                                        C = i.rows[G].cells[0];
                                        break
                                    }
                                }
                            }
                            var J = new a.jqx.date(C.getAttribute("data-date"), i.timeZone);
                            H(C, K, J)
                        }
                        break;
                    case "down":
                        var M = i.rowByCell[K.getAttribute("data-key")];
                        var E = M.indexOf(K);
                        var D = M.belowRow;
                        if (D) {
                            var C = D.cells[E];
                            if (E == 0 && C.getAttribute("rowspan")) {
                                var G = 1 + i.rows.indexOf(M);
                                var C = K;
                                while (G < i.rows.length) {
                                    if (i.rows[G].cells[0] == C) {
                                        G++
                                    } else {
                                        C = i.rows[G].cells[0];
                                        break
                                    }
                                }
                            }
                            var J = new a.jqx.date(C.getAttribute("data-date"), i.timeZone);
                            H(C, K, J)
                        }
                        break;
                    case "home":
                        var M = i.rowByCell[K.getAttribute("data-key")];
                        var E = M.indexOf(K);
                        var A = i.rows[0];
                        var C = A.cells[E];
                        var J = new a.jqx.date(C.getAttribute("data-date"), i.timeZone);
                        H(C, K, J);
                        break;
                    case "end":
                        var M = i.rowByCell[K.getAttribute("data-key")];
                        var E = M.indexOf(K);
                        var L = i.rows[i.rows.length - 1];
                        var C = L.cells[E];
                        var J = new a.jqx.date(C.getAttribute("data-date"), i.timeZone);
                        H(C, K, J);
                        break
                }
                i._updateCellsSelection()
            };
            var u = function() {
                q(k, "home")
            };
            var b = function() {
                q(k, "end")
            };
            if (w == 36 || (m && w == 38)) {
                u();
                return false
            } else {
                if (w == 35 || (m && w == 40)) {
                    b();
                    return false
                } else {
                    if (w == 37) {
                        if (i.selectedAppointment) {
                            r(k, "left")
                        } else {
                            q(k, "left")
                        }
                        return false
                    } else {
                        if (w == 38) {
                            if (i.selectedAppointment) {
                                r(k, "up")
                            } else {
                                q(k, "up")
                            }
                            return false
                        } else {
                            if (w == 40) {
                                if (i.selectedAppointment) {
                                    r(k, "down")
                                } else {
                                    q(k, "down")
                                }
                                return false
                            } else {
                                if (w == 39) {
                                    if (i.selectedAppointment) {
                                        r(k, "right")
                                    } else {
                                        q(k, "right")
                                    }
                                    return false
                                }
                            }
                        }
                    }
                }
            }
        },
        getSelectedCells: function() {
            var g = this;
            var h = g.rows;
            var f = h.length;
            var b = new Array();
            for (var e = 0; e < f; e++) {
                var d = h[e].cells;
                for (var c = 0; c < d.length; c++) {
                    if (d[c].getAttribute("data-selected")) {
                        b.push(d[c])
                    }
                }
            }
            return b.sort(function(i, j) {
                return g._sortByDate(i, j)
            })
        },
        getSelection: function() {
            var e = this;
            var b = e.getSelectedCells();
            if (b.length == 0) {
                return null
            }
            var h = b[0].getAttribute("data-date");
            var g = b[b.length - 1].getAttribute("data-date");
            var d = e.getMinutesPerScale();
            var c = e._views[e._view].type;
            if (c.toLowerCase().indexOf("month") >= 0) {
                d = 0
            }
            if (b[0].getAttribute("data-end-date")) {
                d = 0
            }
            g = new a.jqx.date(g, e.timeZone).addMinutes(d);
            var c = parseInt(b[0].getAttribute("data-view")) - 1;
            var f = e._resources[c];
            if (e._views[e._view].type.toLowerCase().indexOf("month") >= 0) {
                return {
                    from: new a.jqx.date(h, e.timeZone),
                    to: a.jqx.scheduler.utilities.getEndOfDay(g),
                    resourceId: f
                }
            }
            if (e._views[e._view].type.toLowerCase().indexOf("day") >= 0 || e._views[e._view].type.toLowerCase().indexOf("week") >= 0) {
                h = new a.jqx.date(h, e.timeZone);
                if (g.minute() === 0 && g.hour() === 0 && h.hour() === 0 && h.minute() === 0) {
                    if (g.day() === h.day()) {
                        return {
                            from: new a.jqx.date(h, e.timeZone),
                            to: a.jqx.scheduler.utilities.getEndOfDay(g),
                            resourceId: f
                        }
                    } else {
                        return {
                            from: new a.jqx.date(h, e.timeZone),
                            to: a.jqx.scheduler.utilities.getEndOfDay(g).addDays(-1),
                            resourceId: f
                        }
                    }
                }
                return {
                    from: new a.jqx.date(h, e.timeZone),
                    to: g,
                    resourceId: f
                }
            }
            if (e._views[e._view].type.toLowerCase().indexOf("agenda") >= 0) {
                return {
                    from: new a.jqx.date(h, e.timeZone),
                    to: a.jqx.scheduler.utilities.getEndOfDay(g),
                    resourceId: f
                }
            }
        },
        clearSelection: function() {
            var f = this;
            var g = f.rows;
            var e = g.length;
            for (var d = 0; d < e; d++) {
                var c = g[d].cells;
                for (var b = 0; b < c.length; b++) {
                    c[b].removeAttribute("data-selected")
                }
            }
            f._updateCellsSelection()
        },
        _getvirtualcolumnsindexes: function(c, k, g, i, b) {
            if (this.rtl) {
                c = this.hScrollInstance.max - c
            }
            var d = 0;
            var h = -1;
            var e = g + i;
            if (this.autorowheight) {
                return {
                    start: 0,
                    end: g + i
                }
            }
            if (!b) {
                for (var f = 0; f < g + i; f++) {
                    var l = f;
                    if (!this.columns.records[f].hidden) {
                        d += this.columns.records[f].width
                    }
                    if (d >= c && h == -1) {
                        h = f
                    }
                    if (d > k + c) {
                        e = f;
                        break
                    }
                }
            }
            e++;
            if (e > g + i) {
                e = g + i
            }
            if (h == -1) {
                h = 0
            }
            return {
                start: h,
                end: e
            }
        },
        _renderhorizontalscroll: function() {
            var k = this;
            var r = k.hScrollInstance;
            var s = r.value;
            if (k.hScrollBar[0].style.visibility === "hidden") {
                r.value = 0;
                s = 0
            }
            var d = parseInt(s);
            if (k.table == null) {
                return
            }
            var j = function(i) {
                if (i.parentNode && i.parentNode.nodeName != "#document-fragment") {
                    return true
                }
                return false
            };
            var q = k._getvirtualcolumnsindexes(d, k._hostWidth, 0, k.columns.records.length, false);
            var l = q.start;
            var n = q.end;
            var b = k.rows;
            for (var m = 0; m < l; m++) {
                var h = m;
                var t = k.columns.records[h].element[0];
                if (j(t)) {
                    t.parentNode.removeChild(t)
                }
            }
            for (var m = n; m < k.columns.records.length; m++) {
                var h = m;
                var t = k.columns.records[h].element[0];
                if (j(t)) {
                    t.parentNode.removeChild(t)
                }
            }
            for (var m = l; m < n; m++) {
                var h = m;
                t = k.columns.records[h].element[0];
                if (!j(t)) {
                    k.columnsrow[0].appendChild(t)
                }
            }
            var o = k.columnsrow;
            var p = 0;
            var e = k.columns.records.length - p;
            var c = k.columns.records;
            var f = k.source.records.length == 0;
            if (k.rtl) {
                if (k.hScrollBar.css("visibility") != "hidden") {
                    d = r.max - d
                }
            }
            k.table[0].style.left = -d + "px";
            if (k.pinnedtable[0].style.display == "block") {
                k.pinnedtable[0].style.left = -d + "px"
            }
            if (k._resources.length > 0 && k.tableRows > 0) {
                for (var u = 0; u < this.table[0].rows.length; u++) {
                    var g = this.table[0].rows[u];
                    if (g.getAttribute("data-group-row")) {
                        a(g).find("span").css("left", 5 + d)
                    }
                }
            }
            o[0].style.marginLeft = -d + "px"
        },
        _getDayName: function(b, d) {
            if (b >= 7) {
                b -= 7
            }
            if (!d) {
                d = this.dayNameFormat;
                if (this.isTouchDevice()) {
                    d = this.touchDayNameFormat
                }
            }
            var c = this.schedulerLocalization.days.names[b];
            switch (d) {
                case "full":
                    c = this.schedulerLocalization.days.names[b];
                    break;
                case "abbr":
                    c = this.schedulerLocalization.days.namesAbbr[b];
                    break;
                case "shortest":
                    c = this.schedulerLocalization.days.namesShort[b];
                    break;
                case "firstTwoLetters":
                    c = c.substring(0, 2);
                    break;
                case "firstLetter":
                    c = c.substring(0, 1);
                    break
            }
            return c
        },
        _initializeColumns: function() {
            if (this._views.length === 0) {
                this._views.push({
                    type: "dayView"
                })
            }
            if (!this._views[this._view]) {
                throw new Error("jqxScheduler: View is undefined. You need to define the View in the Views Array when you create jqxScheduler")
            }
            var p = this._views[this._view].type;
            var m = this._views[this._view];
            if (m.timeSlotWidth) {
                m.timeSlotWidth = Math.max(m.timeSlotWidth, 30);
                m.columnWidth = m.timeSlotWidth
            }
            if (m.columnWidth) {
                if (m.columnWidth < 30) {
                    m.columnWidth = 30
                }
            }
            if (this.columns && this.columns.records) {
                for (var z = 0; z < this.columns.records.length; z++) {
                    this._removecolumnhandlers(this.columns.records[z])
                }
            }
            this.columns = new Array();
            var B = new Array();
            var h = this;
            var q = function(H, N) {
                var I = "halfHour";
                if (m.timeRuler && m.timeRuler.scale) {
                    I = m.timeRuler.scale
                }
                var Q = 24;
                var G = 0;
                var P = 23;
                if (m.timeRuler) {
                    if (m.timeRuler.scaleStartHour != undefined) {
                        var G = parseInt(m.timeRuler.scaleStartHour)
                    }
                    if (m.timeRuler.scaleEndHour != undefined) {
                        var P = parseInt(m.timeRuler.scaleEndHour)
                    }
                    if (G < 0) {
                        G = 0
                    }
                    if (P < 0) {
                        P = 23
                    }
                    if (G > 23) {
                        G = 0
                    }
                    if (P > 23) {
                        P = 23
                    }
                    Q = P - G + 1
                }
                var K = 60;
                var O = 2;
                if (I) {
                    switch (I) {
                        case "sixtyMinutes":
                        case "hour":
                            O = 1;
                            break;
                        case "thirtyMinutes":
                        case "halfHour":
                            O = 2;
                            break;
                        case "fifteenMinutes":
                        case "quarterHour":
                            O = 4;
                            break;
                        case "tenMinutes":
                            O = 6;
                            break;
                        case "fiveMinutes":
                            O = 12;
                            break
                    }
                }
                var S = new Array();
                var R = "auto";
                if (m.timeRuler && m.timeRuler.formatString) {
                    R = m.timeRuler.formatString
                }
                var F = G;
                var L = Q;
                var D = H.addHours(F);
                var j = "auto";
                if (m.columnWidth) {
                    j = O * m.columnWidth
                } else {
                    j = O * 80
                }
                for (var M = 0; M < L; M++) {
                    var E = D.toDate();
                    if (R === "auto") {
                        if ((E.getHours() == 0 && E.getMinutes() == 0) || (E.getHours() == 12 && E.getMinutes() == 0)) {
                            var J = "hh tt"
                        } else {
                            var J = "hh:mm"
                        }
                    } else {
                        if (a.isFunction(R)) {
                            var J = R(E)
                        } else {
                            J = R
                        }
                    }
                    if (a.jqx.dataFormat.isDate(E)) {
                        E = a.jqx.dataFormat.formatdate(E, J, h.schedulerLocalization)
                    }
                    D = D.addMinutes(K, false);
                    h.columns.push({
                        columnGroup: N,
                        text: E,
                        minwidth: 30,
                        width: j
                    })
                }
            };
            for (var x = 0; x < this.tableColumns; x++) {
                if (this.tableColumns > 1) {
                    var f = h._resources[x] ? h._resources[x] : "Resource" + x;
                    B.push({
                        text: f,
                        name: f
                    })
                }
                var w = "left";
                if (this.rtl) {
                    w = "right"
                }
                switch (p) {
                    case "dayView":
                        var g = this.getViewStart();
                        if (false === m.showWeekends) {
                            if (g.dayOfWeek() === 0 || g.dayOfWeek() === 6) {
                                g = g.addDays(1)
                            }
                            if (g.dayOfWeek() === 0 || g.dayOfWeek() === 6) {
                                g = g.addDays(1)
                            }
                        }
                        var v = "auto";
                        if (m && m.columnWidth) {
                            v = m.columnWidth
                        }
                        var f = h._resources[x] ? h._resources[x] : "Resource" + x;
                        this.columns.push({
                            align: w,
                            width: v,
                            columnGroup: f,
                            text: this._getDayName(g.dayOfWeek())
                        });
                        break;
                    case "weekView":
                    case "monthView":
                        for (var z = 0; z < 7; z++) {
                            var y = this.schedulerLocalization.firstDay + z;
                            if (y > 6) {
                                y = 0
                            }
                            if (false === m.showWeekends) {
                                if (y === 0 || y === 6) {
                                    continue
                                }
                            }
                            var v = "auto";
                            if (m && m.columnWidth) {
                                v = m.columnWidth
                            }
                            var f = h._resources[x] ? h._resources[x] : "Resource" + x;
                            this.columns.push({
                                align: p == "weekView" ? w : "center",
                                width: v,
                                columnGroup: f,
                                text: this._getDayName(y)
                            })
                        }
                        break;
                    case "timelineDayView":
                        var f = h._resources[x] ? h._resources[x] : "Resource" + x;
                        q(h.getViewStart(), f);
                        break;
                    case "timelineWeekView":
                        for (var z = 0; z < 7; z++) {
                            var y = this.schedulerLocalization.firstDay + z;
                            if (false === m.showWeekends) {
                                if (z === 0 || z === 6) {
                                    continue
                                }
                            }
                            var f = h._resources[x] ? h._resources[x] : "Resource" + x;
                            B.push({
                                align: h.rtl ? "right" : "left",
                                parentGroup: f,
                                name: this._getDayName(y) + x,
                                text: this._getDayName(y)
                            });
                            q(h.getViewStart().addDays(z), this._getDayName(y) + x)
                        }
                        break;
                    case "timelineMonthView":
                        var k = h.getViewStart();
                        var A = "auto";
                        if (m.timeRuler && m.timeRuler.formatString) {
                            A = m.timeRuler.formatString
                        }
                        for (var z = 0; z < 41; z++) {
                            var y = k.dayOfWeek();
                            if (false === m.showWeekends) {
                                if (y === 0 || y === 6) {
                                    continue
                                }
                            }
                            var v = "auto";
                            if (m.columnWidth) {
                                v = m.columnWidth
                            } else {
                                v = 100
                            }
                            var r = k.toDate();
                            if (A === "auto") {
                                var c = "dd";
                                r = k.toDate();
                                if (r.getDate() === 1) {
                                    c = "MMM dd"
                                }
                            } else {
                                if (a.isFunction(A)) {
                                    var c = A(r)
                                } else {
                                    c = A
                                }
                            }
                            if (a.jqx.dataFormat.isDate(r)) {
                                r = a.jqx.dataFormat.formatdate(r, c, h.schedulerLocalization)
                            }
                            k = k.addDays(1);
                            var f = h._resources[x] ? h._resources[x] : "Resource" + x;
                            h.columns.push({
                                minwidth: 30,
                                columnGroup: f,
                                text: r,
                                width: v
                            })
                        }
                        break;
                    case "agendaView":
                        var l = m.dateColumnWidth;
                        var u = m.timeColumnWidth;
                        var o = m.appointmentColumnWidth;
                        if (!o) {
                            o = "70%"
                        }
                        if (!u) {
                            u = "auto"
                        }
                        if (!l) {
                            l = "auto"
                        }
                        h.columns.push({
                            text: h.schedulerLocalization.agendaDateColumn,
                            width: l
                        });
                        h.columns.push({
                            text: h.schedulerLocalization.agendaTimeColumn,
                            width: u
                        });
                        h.columns.push({
                            text: h.schedulerLocalization.agendaAppointmentColumn,
                            width: o
                        });
                        break
                }
            }
            if (B.length > 0) {
                this.columnGroups = B
            }
            var h = this;
            var s = new a.jqx.schedulerDataCollection(this.element);
            var d = 0;
            this._columns = this.columns;
            var C = "left";
            var e = new a.jqx.scheduler.column(h, this);
            e.visibleindex = d++;
            e.text = "";
            e.width = h.timeRulerWidth;
            e.editable = false;
            e.timeColumn = true;
            C = "left";
            e.text = "";
            e.hidden = false;
            e.width = h.timeRulerWidth;
            var b = false;
            if (m.timeRuler && (p === "dayView" || p === "weekView")) {
                e._text = m.timeRuler.text || "";
                C = m.timeRuler.position || "left";
                e.hidden = m.timeRuler.hidden || false;
                e.width = m.timeRuler.width || h.timeRulerWidth;
                if (m.timeRuler.timeZones) {
                    b = true
                }
            } else {
                if (p !== "dayView" && p !== "weekView") {
                    e.hidden = true
                }
            }
            var n = function(i) {
                var j = new a.jqx.scheduler.column(h, h);
                j.visibleindex = d++;
                j.text = "";
                j.width = h.timeRulerWidth;
                j.editable = false;
                j.timeColumn = true;
                C = "left";
                j.text = "";
                j.hidden = false;
                j.timeZone = m.timeRuler.timeZones[i].id;
                j.width = h.timeRulerWidth;
                if (m.timeRuler && (p === "dayView" || p === "weekView")) {
                    j._text = m.timeRuler.timeZones[z].text || "";
                    j.hidden = m.timeRuler.hidden || false;
                    j.width = m.timeRuler.width || h.timeRulerWidth;
                    s.add(j)
                }
            };
            if (C === "left" && (p === "dayView" || p === "weekView")) {
                if (m.timeRuler && m.timeRuler.timeZones) {
                    for (var z = 0; z < m.timeRuler.timeZones.length; z++) {
                        n(z)
                    }
                }
                s.add(e)
            }
            if (C === "left" && p === "monthView" && m.showWeekNumbers) {
                e.hidden = false;
                s.add(e)
            }
            var t = new Array();
            a.each(this.columns, function(i) {
                if (h.columns[i] != undefined) {
                    var j = new a.jqx.scheduler.column(h, this);
                    j.visibleindex = d++;
                    s.add(j)
                }
            });
            if (C === "right" && (p === "dayView" || p === "weekView")) {
                if (m.timeRuler) {
                    for (var z = 0; z < m.timeRuler.timeZones.length; z++) {
                        n(z)
                    }
                }
                s.add(e)
            }
            if (C === "right" && p === "monthView" && m.showWeekNumbers) {
                e.hidden = false;
                s.add(e)
            }
            if (this.rtl) {
                s.records.reverse()
            }
            this.columns = s
        },
        _getColumnsLengthPerView: function() {
            var b = this._views[this._view].type;
            var d = this._views[this._view];
            var c = 1;
            switch (b) {
                case "dayView":
                    c = 1;
                    break;
                case "weekView":
                    if (d.showWeekends !== false) {
                        c = 7
                    } else {
                        c = 5
                    }
                    break;
                case "monthView":
                    if (d.showWeekends !== false) {
                        c = 7
                    } else {
                        c = 5
                    }
                    break;
                case "timelineDayView":
                case "timelineWeekView":
                case "timelineMonthView":
                    c = this.columns.records.length;
                    break;
                case "agendaView":
                    c = this.columns.records.length;
                    break
            }
            return c
        },
        _renderagenda: function() {
            var ab = this;
            var h = ab._views[ab._view].type;
            var aa = ab._views[ab._view];
            var K = ab.getViewStart();
            var af = a.jqx.scheduler.utilities.getEndOfDay(ab.getViewEnd().addDays(-1));
            ab._prepareAppointmentsInView(K, af);
            var R = ab.appointmentsToRender.length;
            var al = new Array();
            var aj = 0;
            for (var at = 0; at < ab.appointmentsToRender.length; at++) {
                var q = ab.appointmentsToRender[at];
                var au = q.from.clearTime();
                while (au < a.jqx.scheduler.utilities.getEndOfDay(q.to)) {
                    var d = au.toString();
                    if (!al[d]) {
                        al[d] = {
                            date: au,
                            appointments: new Array()
                        };
                        al[d].appointments.push(q);
                        al[al.length] = al[d];
                        aj++
                    } else {
                        al[d].appointments.push(q);
                        aj++
                    }
                    au = au.addDays(1).clearTime()
                }
            }
            var O = 0;
            var N = 0;
            ab.rows = new Array();
            var av = a.jqx.browser.msie && a.jqx.browser.version < 8;
            var F = 0;
            var ax = 0;
            var ap = ab.rtl ? " " + ab.toTP("jqx-grid-table-rtl") : "";
            var Z = 0;
            var v = "<table cellspacing='0' cellpadding='0' class='" + ab.toTP("jqx-grid-table") + ap + "' id='table" + ab.element.id + "'><colgroup>";
            var G = ab.columns.records.length;
            for (var aq = 0; aq < G; aq++) {
                var X = ab.columns.records[aq];
                if (X.hidden) {
                    F++;
                    continue
                }
                var c = X.width;
                if (c < X.minwidth) {
                    c = X.minwidth
                }
                if (c > X.maxwidth) {
                    c = X.maxwidth
                }
                c -= ax;
                if (c < 0) {
                    c = 0
                }
                if (av) {
                    var ae = c;
                    if (aq == F) {
                        ae++
                    }
                    v += "<col style='max-width: " + ae + "px; width: " + ae + "px;'>"
                } else {
                    v += "<col style='max-width: " + c + "px; width: " + c + "px;'>"
                }
                Z += c
            }
            v += "</colgroup>";
            if (R == 0) {
                var l = '<tr role="row">';
                var f = this.host.height();
                var U = 0;
                if (!ab.columnGroups) {
                    U += ab.showHeader ? ab.columnsHeight : 0
                } else {
                    U += ab.showHeader ? ab.columnsheader.height() : 0
                }
                if (ab.showToolbar) {
                    U += ab.toolbarHeight
                }
                if (ab.showLegend && ab._resources.length > 0) {
                    U += ab.legendHeight
                }
                f -= U;
                var e = '<td data-date="' + K.toString() + '" colspan="' + this.columns.records.length + '" role="gridcell" style="border: none; min-height: ' + f + "px; height: " + f + "px; max-width:" + Z + "px; width:" + Z + "px;";
                var E = this.toTP("jqx-cell") + " " + this.toTP("jqx-grid-cell") + " " + this.toTP("jqx-item");
                E += " " + this.toTP("jqx-center-align");
                e += '" class="' + E + '">';
                e += this.schedulerLocalization.emptyDataString;
                e += "</td>";
                l += e;
                l += "</tr>";
                v += l;
                this.table[0].style.width = Z + 2 + "px";
                N = Z
            }
            var k = ab.rowsHeight;
            if (ab.isTouchDevice()) {
                k = ab.touchRowsHeight
            }
            for (var at = 0; at < al.length; at++) {
                var H = at;
                var au = al[at];
                for (var ai = 0; ai < au.appointments.length; ai++) {
                    var m = 0;
                    var l = '<tr data-key="' + H + '" role="row">';
                    O = 0;
                    var u = au.appointments[ai];
                    for (var aq = 0; aq < G; aq++) {
                        var ah = ab.columns.records[aq];
                        var ao = aq;
                        if (ab.rtl) {
                            ao = G - 1 - aq
                        }
                        var c = ah.width;
                        if (c < ah.minwidth) {
                            c = ah.minwidth
                        }
                        if (c > ah.maxwidth) {
                            c = ah.maxwidth
                        }
                        c -= ax;
                        if (c < 0) {
                            c = 0
                        }
                        var E = ab.toTP("jqx-cell") + " " + ab.toTP("jqx-grid-cell") + " " + ab.toTP("jqx-item");
                        if (ab.rtl) {
                            E += " " + ab.toTP("jqx-cell-rtl")
                        }
                        var J = "";
                        var H = ab.dataview.generatekey();
                        var s = -1;
                        var g = au.date;
                        var f = k + "px";
                        var e = '<td data-key="' + H + '" data-view="' + (s) + '" data-date="' + g.toString() + '" role="gridcell" ' + J + ' style="max-width:' + c + "px; width:" + c + "px; height: " + f + "; min-height: " + k + "px;";
                        if (ao == 0 && ai == 0) {
                            var M = au.appointments.length;
                            var e = '<td rowspan="' + M + '" data-key="' + H + '" data-view="' + (s) + '" data-date="' + g.toString() + '" role="gridcell" ' + J + ' style="max-width:' + c + "px; width:" + c + "px;  min-height: " + k + "px;";
                            E += " " + ab.toTP("jqx-center-align")
                        } else {
                            if (ao == 0) {
                                O++;
                                continue
                            }
                        }
                        if (ab.rtl && ao == 1) {
                            E += " " + ab.toTP("jqx-right-align")
                        }
                        if (!(ah.hidden)) {
                            m += ax + c;
                            if (O == 0 && !ab.rtl) {
                                e += "border-left-width: 0px;"
                            } else {
                                e += "border-left-width: 1px;"
                            }
                            O++
                        } else {
                            e += "display: none;";
                            ab._hiddencolumns = true
                        }
                        e += '" class="' + E + '">';
                        var an = "";
                        if (ao == 0 && ai == 0) {
                            var D = g.toString("dddd", ab.schedulerLocalization);
                            var am = g.toString("MMMM, yyyy", ab.schedulerLocalization);
                            var ar = ab.toTP("jqx-scheduler-agenda-date");
                            var o = ab.toTP("jqx-scheduler-agenda-day");
                            var n = ab.toTP("jqx-scheduler-agenda-week");
                            an = '<div class="' + ar + '"><strong class="' + o + '">' + g.day() + '</strong><br/><em class="' + n + '">' + D + '</em><br/><span class="' + ar + '">' + am + "</span></div>"
                        }
                        if (ao == 1) {
                            var Q = "auto";
                            var aa = this._views[this._view];
                            var z = u.from;
                            var ay = u.to;
                            if (aa.timeRuler && aa.timeRuler.formatString) {
                                Q = aa.timeRuler.formatString
                            }
                            var ad = Q;
                            var I = Q;
                            if (Q === "auto") {
                                if ((z.hour() == 0 && z.minute() == 0) || (z.hour() == 12 && z.minute() == 0)) {
                                    var ad = "hh tt"
                                } else {
                                    var ad = "hh:mm"
                                }
                                if ((ay.hour() == 0 && ay.minute() == 0) || (ay.hour() == 12 && ay.minute() == 0)) {
                                    var I = "hh tt"
                                } else {
                                    var I = "hh:mm"
                                }
                            }
                            var ar = ab.toTP("jqx-scheduler-agenda-time");
                            if (u.allDay) {
                                an = "<span class='" + ar + "'>" + ab.schedulerLocalization.agendaAllDayString + "</span>"
                            } else {
                                if (!ab.rtl) {
                                    an = "<span class='" + ar + "'>" + z.toString(ad, ab.schedulerLocalization) + " - " + ay.toString(I, ab.schedulerLocalization) + "</span>"
                                } else {
                                    an = "<span class='" + ar + "'>" + ay.toString(I, ab.schedulerLocalization) + " - " + z.toString(ad, ab.schedulerLocalization) + "</span>"
                                }
                            }
                        } else {
                            if (ao == 2) {
                                if (u.resourceId) {
                                    a.each(ab._resources, function(r, x) {
                                        if (u.resourceId == x) {
                                            var i = ab.getColors(r);
                                            var j = this.toString();
                                            var w = ab.toTP("jqx-scheduler-agenda-appointment-resource jqx-scheduler-legend");
                                            if (ab.rtl) {
                                                var w = ab.toTP("jqx-scheduler-agenda-appointment-resource-rtl jqx-scheduler-legend")
                                            }
                                            var t = "<div data-key='" + u.id + "' class='" + w + "' style='margin-right: 5px; border-color: " + i.border + "; background: " + i.background + ";' class='" + ab.toThemeProperty("jqx-scheduler-legend") + "'></div>";
                                            an = t
                                        }
                                    })
                                }
                                var W = u.subject ? u.subject : "(No Title)";
                                var C = u.location;
                                var y = u.description;
                                var T = u.status ? ab.schedulerLocalization.editDialogStatuses[u.status] : "";
                                var b = u.isRecurrentAppointment();
                                var B = u.isException();
                                var Y = "" + ab.schedulerLocalization.editDialogSubjectString + ": " + W + "";
                                if (C) {
                                    Y += "\n" + ab.schedulerLocalization.editDialogLocationString + ": " + C + ""
                                }
                                if (y) {
                                    Y += "\n" + ab.schedulerLocalization.editDialogDescriptionString + ": " + y + ""
                                }
                                if (T) {
                                    Y += "\n" + ab.schedulerLocalization.editDialogStatusString + ": " + T + ""
                                }
                                if (b) {
                                    Y += "\n" + ab.schedulerLocalization.editDialogRepeatString + ": " + b + ""
                                }
                                var ar = ab.toTP("jqx-scheduler-agenda-appointment jqx-scheduler-legend-label");
                                if (ab.rtl) {
                                    var ar = ab.toTP("jqx-scheduler-agenda-appointment-rtl jqx-scheduler-legend-label")
                                }
                                an += "<span data-key='" + u.id + "' title='" + Y + "' class='" + ar + "'>" + W + "</span>"
                            }
                        }
                        e += an;
                        e += "</td>";
                        l += e
                    }
                    if (N == 0) {
                        ab.table[0].style.width = m + 2 + "px";
                        ab.pinnedtable[0].style.width = m + 2 + "px";
                        N = m
                    }
                    l += "</tr>";
                    v += l
                }
            }
            v += "</table>";
            ab.table[0].innerHTML = v;
            ab.pinnedtable[0].innerHTML = v;
            ab.pinnedtable[0].style.display = "none";
            var ag = a(ab.table[0].firstChild);
            var V = a(ab.pinnedtable[0].firstChild);
            ab._table = ag;
            ab._pinnedtable = V;
            if (a.jqx.browser.msie && a.jqx.browser.version < 10) {
                ab._table[0].style.width = N + "px";
                ab._pinnedtable[0].style.width = N + "px"
            }
            if (R === 0) {
                ab._table[0].style.width = (2 + N) + "px";
                ab._pinnedtable[0].style.width = (2 + N) + "px";
                ab._pinnedtable[0].style.display = "none"
            }
            ab._pinnedtable[0].style.display = "none";
            ab._table.addClass("jqx-grid-table-one-cell jqx-disableselect");
            ab.table[0].rows = ab.table[0].firstChild.rows;
            ab.rowByCell = new Array();
            ab.columnCells = new Array();

            function p() {
                var i = {};
                i.cells = new Array();
                i.indexOf = function(j) {
                    for (var r = 0; r < i.cells.length; r++) {
                        if (i.cells[r].getAttribute("data-key") == j.getAttribute("data-key")) {
                            return r
                        }
                    }
                    return -1
                };
                return i
            }
            ab.cellWidth = 0;
            ab.cellHeight = 0;
            var L = ab.table[0].rows.length;
            for (var at = 0; at < L; at++) {
                var ak = ab.table[0].rows[at];
                if (ak.getAttribute("data-group-row")) {
                    continue
                }
                var A = new p();
                A.aboveRow = null;
                A.belowRow = null;
                if (ab.rows.length > 0) {
                    A.aboveRow = ab.rows[ab.rows.length - 1];
                    ab.rows[ab.rows.length - 1].belowRow = A
                }
                A.element = ak;
                ab.rows.push(A);
                var S = false;
                for (var aq = 0; aq < ak.cells.length; aq++) {
                    if (ak.cells.length < ab.columns.records.length && !S) {
                        var ac = at;
                        while (ac >= 0) {
                            var aw = ab.table[0].rows[ac];
                            if (ab.table[0].rows[ac].cells.length == ab.columns.records.length) {
                                var P = aw.cells[0];
                                if (!ab.columnCells[A.cells.length]) {
                                    ab.columnCells[A.cells.length] = new Array()
                                }
                                ab.columnCells[A.cells.length].push(P);
                                if (ab.cellWidth == 0) {
                                    ab.cellWidth = P.clientWidth
                                }
                                if (ab.cellHeight == 0 && (L == 1 || at > 1)) {
                                    ab.cellHeight = P.clientHeight
                                }
                                A.cells.push(P);
                                S = true;
                                break
                            }
                            ac--
                        }
                    }
                    var P = ak.cells[aq];
                    if (P.style.display === "none") {
                        continue
                    }
                    if (P.className.indexOf("jqx-grid-cell-pinned") >= 0) {
                        continue
                    }
                    if (!ab.columnCells[A.cells.length]) {
                        ab.columnCells[A.cells.length] = new Array()
                    }
                    ab.columnCells[A.cells.length].push(P);
                    if (ab.cellWidth == 0) {
                        ab.cellWidth = P.clientWidth
                    }
                    if (ab.cellHeight == 0 && (L == 1 || at > 1)) {
                        ab.cellHeight = P.clientHeight
                    }
                    A.cells.push(P);
                    ab.rowByCell[P.getAttribute("data-key")] = A
                }
            }
            if (R === 0) {
                ab._table[0].style.tableLayout = "auto"
            }
            ab._updateScrollbars(ab.host.height());
            ab._arrange();
            if (ab.rendered) {
                ab.rendered()
            }
            ab.renderedTime = new Date()
        },
        _renderrows: function() {
            var V = this;
            if (V._loading) {
                return
            }
            if (V._updating || V._appupdating) {
                return
            }
            if (V.rendering) {
                V.rendering()
            }
            var V = this;
            var aF = V._views[V._view].type;
            var G = V._views[V._view];
            if (aF == "agendaView") {
                V._renderagenda();
                return
            }
            var az = 1;
            var d = V.getViewStart();
            var aN = a.jqx.scheduler.utilities.getEndOfDay(V.getViewEnd());
            V._prepareAppointmentsInView(d, aN);
            var N = new Array();
            if (aF === "weekView" || aF === "dayView") {
                var az = V.getMaxAllDayAppointments(V.appointmentsToRender)
            } else {
                if (aF === "monthView" && G.monthRowAutoHeight && V.rows && V.rows.length == 6) {
                    N = V._getMonthAppointmentsPerWeek()
                }
            }
            var aa = V.tableRows > 1 ? V.tableRows : 0;
            var aL = "halfHour";
            var B = null;
            var aQ;
            if (G.rowHeight) {
                B = G.rowHeight
            }
            if (G && G.allDayRowHeight) {
                aQ = G.allDayRowHeight
            }
            if (G.timeRuler && G.timeRuler.scale) {
                aL = G.timeRuler.scale
            }
            var aM = 0;
            V.table[0].rows = new Array();
            V.rows = new Array();
            var a5 = V.toTP("jqx-cell") + " " + V.toTP("jqx-widget-content");
            if (V.rtl) {
                a5 += " " + V.toTP("jqx-cell-rtl")
            }
            var b = V.columns.records.length;
            var av = V._getColumnsLengthPerView();
            var W = a.jqx.browser.msie && a.jqx.browser.version < 8;
            if (W) {
                V.host.attr("hideFocus", "true")
            }
            V._lastSelectedCell = null;
            V.focusedCell = null;
            var E = new Array();
            var aD = V.source.records;
            aD = V.dataview.evaluate(aD);
            V.dataViewRecords = aD;
            V.cells = new Array();
            var E = V.dataViewRecords;
            V.renderedRecords = V.getRows();
            var aZ = V.tableZIndex;
            var ai = V.getRows().length;
            var o = 0;
            var aH = 0;
            if (W) {
                for (var X = 0; X < b; X++) {
                    var ac = V.columns.records[X];
                    var aK = ac.width;
                    if (aK < ac.minwidth) {
                        aK = ac.minwidth
                    }
                    if (aK > ac.maxwidth) {
                        aK = ac.maxwidth
                    }
                    var aJ = a('<table><tr><td role="gridcell" style="max-width: ' + aK + "px; width:" + aK + 'px;" class="' + a5 + '"></td></tr></table>');
                    a(document.body).append(aJ);
                    var at = aJ.find("td");
                    o = 1 + parseInt(at.css("padding-left")) + parseInt(at.css("padding-right"));
                    aJ.remove();
                    break
                }
            }
            var K = V.rtl ? " " + V.toTP("jqx-grid-table-rtl") : "";
            var H = "<table cellspacing='0' cellpadding='0' class='" + V.toTP("jqx-grid-table") + K + "' id='table" + V.element.id + "'><colgroup>";
            var aY = 0;
            var a4 = b;
            var aS = 2;
            var an = 30;
            switch (aL) {
                case "sixtyMinutes":
                case "hour":
                    an = 60;
                    aS = 1;
                    break;
                case "thirtyMinutes":
                case "halfHour":
                    an = 30;
                    aS = 2;
                    break;
                case "fifteenMinutes":
                case "quarterHour":
                    an = 15;
                    aS = 4;
                    break;
                case "tenMinutes":
                    an = 10;
                    aS = 6;
                    break;
                case "fiveMinutes":
                    an = 5;
                    aS = 12;
                    break
            }
            var a3 = 1;
            if (aF === "timelineDayView" || aF === "timelineWeekView") {
                b = aS * b;
                a3 = aS;
                av = b / V.tableColumns
            } else {
                if (aF === "timelineMonthView") {
                    av = b / V.tableColumns
                } else {
                    if (aF === "monthView") {
                        if (G.showWeekNumbers) {
                            av = (b - V.tableColumns) / V.tableColumns
                        } else {
                            av = b / V.tableColumns
                        }
                    }
                }
            }
            var g = function(i) {
                var c = V.columns.records[i];
                if (c) {
                    return c
                }
                while (i >= V.columns.records.length) {
                    i -= V.columns.records.length
                }
                var c = V.columns.records[i];
                return c
            };
            for (var X = 0; X < b; X++) {
                var ac = g(X);
                if (ac.hidden) {
                    aY++;
                    a4--;
                    continue
                }
                var aK = ac.width / a3;
                if (aK < ac.minwidth) {
                    aK = ac.minwidth / a3
                }
                if (aK > ac.maxwidth) {
                    aK = ac.maxwidth / a3
                }
                aK -= o;
                if (aK < 0) {
                    aK = 0
                }
                if (aF == "monthView" && V.rtl && ac.timeColumn) {
                    aK++
                }
                if (W) {
                    var P = aK;
                    if (X == aY) {
                        P++
                    }
                    H += "<col style='max-width: " + P + "px; width: " + P + "px;'>"
                } else {
                    H += "<col style='max-width: " + aK + "px; width: " + aK + "px;'>"
                }
                aH += aK
            }
            H += "</colgroup>";
            V._hiddencolumns = false;
            if (ai === 0) {
                var u = '<tr role="row">';
                var z = V.host.height();
                if (V.pageable) {
                    z -= V.pagerHeight;
                    if (V.pagerPosition === "both") {
                        z -= V.pagerHeight
                    }
                }
                z -= V.columnsHeight;
                if (V.showLegend && V._resources.length > 0) {
                    z -= V.legendHeight
                }
                if (z < 25) {
                    z = 25
                }
                if (V.hScrollBar[0].style.visibility != "hidden") {
                    z -= V.hScrollBar.outerHeight()
                }
                if (V.height === "auto" || V.height === null || V.autoheight) {
                    z = 300
                }
                var aJ = '<td colspan="' + V.columns.records.length + '" role="gridcell" style="border: none; min-height: ' + z + "px; height: " + z + "px; max-width:" + aH + "px; width:" + aH + "px;";
                var a5 = V.toTP("jqx-cell") + " " + V.toTP("jqx-grid-cell") + " " + V.toTP("jqx-item");
                if (V.rtl) {
                    a5 += " " + V.toTP("jqx-cell-rtl")
                }
                a5 += " " + V.toTP("jqx-center-align");
                aJ += '" class="' + a5 + '">';
                aJ += V.schedulerLocalization.emptyDataString;
                aJ += "</td>";
                u += aJ;
                H += u;
                V.table[0].style.width = aH + 2 + "px";
                aM = aH
            }
            var au = V.getRows();
            var d = V.getViewStart();
            var z = V._hostHeight ? V._hostHeight : V.host.height();
            var a2 = 0;
            if (!V.columnGroups) {
                a2 += V.showHeader ? V.columnsHeight : 0
            } else {
                a2 += V.showHeader ? V.columnsheader.height() : 0
            }
            if (V.showToolbar) {
                a2 += V.toolbarHeight
            }
            if (V.showLegend && V._resources.length > 0) {
                a2 += V.legendHeight
            }
            var f = V.showAllDayRow;
            var m = 23;
            if (G.resourceHeaderRowHeight) {
                m = G.resourcesRowHeight
            }
            m += 2;
            if (G.showAllDayRow != undefined) {
                f = G.showAllDayRow
            }
            var h = V._columnswidth > V._hostWidth;
            var al = h ? (3 + V.scrollBarSize) : 0;
            var ag = V.tableRows > 1 ? V.resources.unitsInView : 1;
            if (ag == undefined) {
                ag = V._resources.length
            }
            if (V.resources && V.resources.resourceRowHeight) {
                B = V.resources.resourceRowHeight
            }
            if (B == null || B == "auto") {
                var p = V.rowsHeight;
                var ap = 3 * p;
                if (V.isTouchDevice()) {
                    p = V.touchRowsHeight;
                    var ap = 22 + p
                }
                if (V.tableRows == 1) {
                    B = z > 0 ? (z - a2) : p;
                    if (V.columns.records.length > 10) {
                        B = z > 0 ? (z - V.scrollBarSize - 5 - a2) : p
                    }
                } else {
                    B = z > 0 ? (z - a2 - m) / (ai) : p;
                    if (V.columns.records.length > 10) {
                        B = z > 0 ? (z - V.scrollBarSize - 5 - a2 - ag * m) / (ag * ai) : p
                    }
                }
                if (aF === "dayView" || aF === "weekView") {
                    if (f) {
                        if (aQ == null || aQ == "auto") {
                            B = z > 0 ? (z - a2) / (V.tableRows * (ai)) : ap;
                            aQ = B
                        } else {
                            B = z > 0 ? (z - a2 - aQ - ag * m) / (ag * (ai - 1)) : p
                        }
                    }
                } else {
                    if (aF === "monthView") {
                        if (V.hScrollBar[0].style.visibility == "hidden") {
                            al = 0
                        }
                        if (V.tableRows == 1) {
                            B = z > 0 ? (z - a2 - al) / ai : p
                        } else {
                            B = z > 0 ? (z - a2 - m - al) / (ai) : p
                        }
                    }
                }
                B = Math.max(p, B);
                if (!aQ) {
                    aQ = ap
                }
                aQ = Math.max(ap, aQ);
                V._allDayRowHeight = aQ;
                V._defaultRowHeight = p;
                aQ = az * (p - 2);
                aQ = Math.max(ap, 17 + aQ);
                V._allDayRowFullHeight = aQ;
                if (G.allDayRowHeight) {
                    V._allDayRowHeight = G.allDayRowHeight;
                    aQ = az * (G.allDayRowHeight - 2);
                    V._allDayRowFullHeight = aQ
                }
            }
            var aB = new Array();
            if (V.resources && V.resources.colorScheme) {
                for (var ao = 0; ao < V.colorSchemes.length; ao++) {
                    if (V.colorSchemes[ao].name == V.resources.colorScheme) {
                        aB = V.colorSchemes[ao].colors;
                        break
                    }
                }
                while (V._resources.length > aB.length - 1) {
                    var aW = parseInt(V.resources.colorScheme.substring(6));
                    if (aW >= 27) {
                        aW = 0
                    }
                    aB = aB.concat(V.colorSchemes[aW].colors);
                    aW++
                }
            }
            for (var aE = 0; aE < V.tableRows; aE++) {
                var aq = 0;
                var S = 0;
                var e = 23;
                if (G.timeRuler && G.timeRuler.scaleStartHour != undefined) {
                    var S = parseInt(G.timeRuler.scaleStartHour)
                }
                if (G.timeRuler && G.timeRuler.scaleEndHour != undefined) {
                    var e = parseInt(G.timeRuler.scaleEndHour)
                }
                var A = d;
                if (false === G.showWeekends) {
                    if (A.dayOfWeek() == 0 || A.dayOfWeek() == 6) {
                        A = A.addDays(1)
                    }
                }
                var ar = new Array();
                var k = aF != "monthView" && aF != "timelineDayView" && aF != "timelineWeekView" && aF != "timelineMonthView" && f ? 1 : 0;
                if (V.tableRows > 1) {
                    var u = '<tr data-group-row="true" role="row">';
                    var a5 = V.toTP("jqx-cell") + " " + V.toTP("jqx-grid-cell") + " " + V.toTP("jqx-item");
                    if (V.rtl) {
                        a5 += " " + V.toTP("jqx-cell-rtl")
                    }
                    if (!W) {
                        a5 += " " + V.toTP("jqx-grid-cell-pinned");
                        Z += ' colspan="' + b + '"';
                        var P = 0;
                        for (var Q = 0; Q < b; Q++) {
                            var ab = g(Q);
                            var ak = ab.width / a3;
                            if (ak < ab.minwidth) {
                                aK = ab.minwidth / a3
                            }
                            if (ak > ab.maxwidth) {
                                aK = ab.maxwidth / a3
                            }
                            ak -= o;
                            if (ak < 0) {
                                ak = 0
                            }
                            if (!ab.hidden) {
                                P += ak
                            }
                        }
                        aK = P
                    } else {
                        a5 += " " + V.toTP("jqx-grid-cell-pinned")
                    }
                    var aJ = '<td style="height:' + m + "px;";
                    if (X == b - 1 && b == 1 && !V.rtl) {
                        aJ += "border-right-color: transparent;"
                    }
                    if (V._resources.length > 0 && V.resources.colorScheme && V.resources.orientation != "none") {
                        var aO = "";
                        var y = "";
                        var D = "";
                        var L = function(i) {
                            var c = 105;
                            var j = (i.r * 0.299) + (i.g * 0.587) + (i.b * 0.114);
                            var q = (255 - j < c) ? "Black" : "White";
                            return q
                        };
                        aO = aB[aE];
                        aO = V.hexToRgba(aB[aE], 0.7).toString();
                        D = L(V.hexToRgba(aB[aE], 0.7));
                        y = aB[aE];
                        aJ += "background: " + aO + ";";
                        aJ += "border-color: " + y + ";";
                        aJ += "color: " + D + ";"
                    }
                    aJ += '" class="' + a5 + '" role="gridcell" ' + Z + "";
                    var aX = V._resources[aE];
                    aJ += "><span style='position: relative;'>" + aX + "</span>";
                    aJ += "</td>";
                    u += aJ;
                    H += u
                }
                for (var Y = 0; Y < ai; Y++) {
                    var aI = {};
                    var am = "jqx" + V.element.id + "_" + Y;
                    aI.uid = am;
                    var u = '<tr data-key="' + am + '" role="row">';
                    var ad = 0;
                    var x = 0;
                    if (ar[0] && Y > k) {
                        var an = 30;
                        if (aF != "monthView") {
                            switch (aL) {
                                case "sixtyMinutes":
                                case "hour":
                                    an = 60;
                                    break;
                                case "thirtyMinutes":
                                case "halfHour":
                                    an = 30;
                                    break;
                                case "fifteenMinutes":
                                case "quarterHour":
                                    an = 15;
                                    break;
                                case "tenMinutes":
                                    an = 10;
                                    break;
                                case "fiveMinutes":
                                    an = 5;
                                    break
                            }
                            for (var T = 0; T < b; T++) {
                                ar[T] = ar[T].addMinutes(an, false)
                            }
                        } else {
                            for (var T = 0; T < b; T++) {
                                ar[T] = ar[T].addDays(7, false)
                            }
                        }
                    }
                    var ax = 0;
                    var ae = 1;
                    var aj = 0;
                    if (G.showWeekends || G.showWeekends == undefined) {
                        aj = (V.columns.records.length) / (7 * V.tableColumns);
                        aj *= aS
                    } else {
                        aj = (V.columns.records.length) / (5 * V.tableColumns);
                        aj *= aS
                    }
                    var aw = 0;
                    if (V.rtl) {
                        aw = 1
                    }
                    var aU = 0;
                    for (var X = 0; X < b; X++) {
                        var R = g(X);
                        if (ax >= av) {
                            ax = 0;
                            aU = 0;
                            aw = 0;
                            if (V.rtl) {
                                aw = 1
                            }
                            ae++
                        }
                        if (!ar[X]) {
                            if (!V.rtl) {
                                if (aF.toString().indexOf("timelineDayView") >= 0) {
                                    var I = X;
                                    ar[X] = A.addHours(S).addMinutes(I * an, false)
                                } else {
                                    if (aF.toString().indexOf("timelineWeekView") >= 0) {
                                        ar[X] = A.addDays(aU).addHours(S, false).addMinutes(aw * an, false)
                                    } else {
                                        ar[X] = A.addDays(ax).addHours(S, false)
                                    }
                                }
                                if (V.timeZone) {
                                    ar[X].timeZone = V.timeZone
                                }
                            } else {
                                if (aF.toString().indexOf("timelineDayView") >= 0) {
                                    var I = 1 + X;
                                    ar[X] = A.addHours(1 + e).addMinutes(-I * an, false)
                                } else {
                                    if (aF.toString().indexOf("timelineWeekView") >= 0) {
                                        if (G.showWeekends || G.showWeekends == undefined) {
                                            ar[X] = A.addDays(6 - aU).addHours(1 + e, false).addMinutes(-aw * an, false)
                                        } else {
                                            ar[X] = A.addDays(4 - aU).addHours(1 + e, false).addMinutes(-aw * an, false)
                                        }
                                    } else {
                                        if (aF == "dayView" || aF == "monthView" || aF == "weekView") {
                                            if (G.showWeekends || G.showWeekends == undefined) {
                                                ar[X] = A.addDays(6 - ax).addHours(S, false)
                                            } else {
                                                ar[X] = A.addDays(4 - ax).addHours(S, false)
                                            }
                                        } else {
                                            ar[X] = A.addDays(av - ax - 1).addHours(S, false)
                                        }
                                    }
                                }
                                if (V.timeZone) {
                                    ar[X].timeZone = V.timeZone
                                }
                            }
                        }
                        aw++;
                        if (aw >= aj) {
                            aw = 0;
                            aU++
                        }
                        if (!R.timeColumn && (aF === "dayView" || aF === "weekView")) {
                            ax++
                        } else {
                            if (!R.timeColumn && (aF === "monthView" && G.showWeekNumbers)) {
                                ax++
                            } else {
                                if ((aF === "monthView" && !(G.showWeekNumbers)) || aF === "timelineMonthView") {
                                    ax++
                                } else {
                                    if (aF == "timelineDayView" || aF == "timelineWeekView") {
                                        ax++
                                    }
                                }
                            }
                        }
                        var C = ar[X];
                        var aK = R.width / a3;
                        if (aK < R.minwidth) {
                            aK = R.minwidth / a3
                        }
                        if (aK > R.maxwidth) {
                            aK = R.maxwidth / a3
                        }
                        aK -= o;
                        if (aK < 0) {
                            aK = 0
                        }
                        var a5 = V.toTP("jqx-cell") + " " + V.toTP("jqx-grid-cell") + " " + V.toTP("jqx-item");
                        if (R.pinned) {
                            a5 += " " + V.toTP("jqx-grid-cell-pinned")
                        }
                        if (V.sortcolumn === R.displayfield) {
                            a5 += " " + V.toTP("jqx-grid-cell-sort")
                        }
                        if (V.altRows && Y % 2 != 0) {
                            a5 += " " + V.toTP("jqx-grid-cell-alt")
                        }
                        if (Y == 0 && f && (aF === "dayView" || aF === "weekView")) {
                            a5 += " " + V.toTP("jqx-grid-cell-alt")
                        }
                        if (C > V.max || C < V.min) {
                            a5 += " " + V.toTP("jqx-scheduler-disabled-cell")
                        }
                        if (V.rtl) {
                            a5 += " " + V.toTP("jqx-cell-rtl")
                        }
                        var Z = "";
                        var am = V.dataview.generatekey();
                        var aG = aE + ae;
                        if (V.resources && V.resources.orientation == "none") {
                            aG = -1
                        }
                        if (V._resources.length == 0) {
                            aG = -1
                        }
                        var aJ = '<td data-key="' + am + '" data-view="' + (aG) + '" data-date="' + C.toString() + '" role="gridcell" ' + Z + ' style="max-width:' + aK + "px; width:" + aK + "px;  height:" + B + "px;";
                        if (Y == 0 && f && (aF === "dayView" || aF === "weekView")) {
                            var aJ = '<td  data-key="' + am + '" data-view="' + (aG) + '" data-end-date="' + a.jqx.scheduler.utilities.getEndOfDay(C).toString() + '" data-date="' + C.clearTime().toString() + '" role="gridcell" ' + Z + ' style="max-width:' + aK + "px; width:" + aK + "px; height:" + aQ + "px;"
                        }
                        if (aF == "monthView" && G.monthRowAutoHeight && N.length > 0) {
                            if (N[Y] && N[Y] != "auto") {
                                if (B < N[Y]) {
                                    var aJ = '<td data-key="' + am + '" data-view="' + (aG) + '" data-date="' + C.toString() + '" role="gridcell" ' + Z + ' style="max-width:' + aK + "px; width:" + aK + "px;  height:" + N[Y] + "px;"
                                }
                            }
                        }
                        if (V.date.month() != C.month() && aF === "monthView" && !G.showOtherMonthDays) {}
                        if (V.resources && V._resources.length > 0 && V.resources.colorScheme && V.resources.orientation !== "none") {
                            var aO = "";
                            var y = "";
                            aO = aB[aE + ae - 1];
                            if (!(Y == 0 && f && (aF === "dayView" || aF === "weekView"))) {
                                aO = V.hexToRgba(aB[aE + ae - 1], 0.3).toString()
                            } else {
                                aO = V.shadeColor(aB[aE + ae - 1], 0.3).toString()
                            }
                            if (!(Y == 0 && f && (aF === "dayView" || aF === "weekView"))) {
                                if (aF.indexOf("month") == -1) {
                                    if (!R.timeColumn) {
                                        if (G.showWorkTime !== false) {
                                            var O = 1;
                                            var J = 5;
                                            var ay = 8;
                                            var l = 18;
                                            if (G.workTime) {
                                                var O = G.workTime.fromDayOfWeek ? G.workTime.fromDayOfWeek : 0;
                                                var J = G.workTime.toDayOfWeek ? G.workTime.toDayOfWeek : 0;
                                                var ay = G.workTime.fromHour !== undefined ? G.workTime.fromHour : 8;
                                                var l = G.workTime.toHour ? G.workTime.toHour : 8
                                            }
                                            if (C.dayOfWeek() >= O && C.dayOfWeek() <= J) {
                                                if (C.hour() >= ay && C.hour() < l) {
                                                    aO = V.hexToRgba(aB[aE + ae - 1], 0.1).toString()
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            y = aB[ae + aE - 1];
                            aJ += "background: " + aO + ";";
                            aJ += "border-color: " + y + ";"
                        }
                        if (X == b - 1 && b == 1 && !V.rtl) {
                            aJ += "border-right-color: transparent;"
                        }
                        if (R.timeColumn && !R.hidden && aF === "monthView") {
                            var a5 = V.toTP("jqx-scheduler-time-column") + " " + V.toTP("jqx-widget-header") + " " + V.toTP("jqx-cell") + " " + V.toTP("jqx-grid-cell") + " " + V.toTP("jqx-item");
                            a5 += " " + V.toTP("jqx-scheduler-week-number-column");
                            if (V.tableRows > 1) {
                                var a5 = V.toTP("jqx-cell") + " " + V.toTP("jqx-grid-cell") + " " + V.toTP("jqx-item")
                            }
                            if (V.rtl) {
                                a5 += " " + V.toTP("jqx-cell-rtl")
                            }
                            if (C.minute() === 0) {
                                var aJ = '<td classname="jqx-disableselect" data-time-slot="true" data-date="' + C.toString() + '" role="gridcell" style="max-width:' + aK + "px; width:" + aK + "px;";
                                if (X == b - 1 && b == 1 && !V.rtl) {
                                    aJ += "border-right-color: transparent;"
                                } else {
                                    if (V.rtl && X == 0) {
                                        aJ += "border-left-color: transparent;"
                                    }
                                }
                                if (X == b - 1 && V.rtl) {
                                    aJ += "border-right-color: transparent;"
                                }
                            } else {
                                x++;
                                continue
                            }
                        }
                        if (R.timeColumn && !R.hidden && (aF === "dayView" || aF === "weekView")) {
                            var a5 = V.toTP("jqx-scheduler-time-column") + " " + V.toTP("jqx-widget-header") + " " + V.toTP("jqx-cell") + " " + V.toTP("jqx-grid-cell") + " " + V.toTP("jqx-item");
                            if (V.tableRows > 1) {
                                var a5 = V.toTP("jqx-cell") + " " + V.toTP("jqx-grid-cell") + " " + V.toTP("jqx-item")
                            }
                            if (V.rtl) {
                                a5 += " " + V.toTP("jqx-cell-rtl")
                            }
                            if (Y > 0) {
                                if (C.minute() === 0) {
                                    var aJ = '<td classname="jqx-disableselect" data-time-slot="true" data-date="' + C.toString() + '" rowspan=' + aS + ' role="gridcell" ' + Z + ' style="max-width:' + aK + "px; width:" + aK + "px;";
                                    if (X == b - 1 && b == 1 && !V.rtl) {
                                        aJ += "border-right-color: transparent;"
                                    } else {
                                        if (V.rtl && X == 0) {
                                            aJ += "border-left-color: transparent;"
                                        }
                                    }
                                } else {
                                    x++;
                                    continue
                                }
                            } else {
                                if (V.resources && V.resources.orientation == "none") {
                                    aG = -1
                                }
                                if (Y == 0 && f && (aF === "dayView" || aF === "weekView")) {
                                    var aJ = '<td data-view="' + (aG) + '" data-time-slot="true" data-end-date="' + a.jqx.scheduler.utilities.getEndOfDay(C).toString() + '" data-date="' + C.toString() + '" role="gridcell" ' + Z + ' style="max-width:' + aK + "px; width:" + aK + "px;"
                                }
                                if (X == b - 1 && b == 1 && !V.rtl) {
                                    aJ += "border-right-color: transparent;"
                                } else {
                                    if (X == 0 && b == 1 && V.rtl) {
                                        aJ += "border-right-color: transparent;"
                                    }
                                }
                                if (V.rtl) {
                                    aJ += "border-left-width: 1px;"
                                }
                                if (V.tableRows > 1) {
                                    aJ += "background: " + aO + ";";
                                    aJ += "border-color: " + y + ";"
                                }
                            }
                        } else {
                            if (Y > 0) {
                                var n = "border-left-width: 1px;";
                                if (V.rtl && X == 0 && aF == "monthView" && G.showWeekNumbers) {
                                    n = "border-left-width: 0px;"
                                }
                                aJ += n
                            }
                        }
                        if (R.cellsalign != "left") {
                            if (R.cellsalign === "right") {
                                a5 += " " + V.toTP("jqx-right-align")
                            } else {
                                a5 += " " + V.toTP("jqx-center-align")
                            }
                        }
                        if (!R.timeColumn) {
                            if (V.rowinfo[aI.uid]) {
                                if (V.rowinfo[aI.uid].selected) {
                                    if (V.editKey !== aI.uid) {
                                        if (V.selectionMode !== "none") {
                                            a5 += " " + V.toTP("jqx-grid-cell-selected");
                                            a5 += " " + V.toTP("jqx-fill-state-pressed");
                                            a5 += " " + V.toTP("jqx-scheduler-cell-selected")
                                        }
                                    }
                                }
                            }
                        }
                        if (!(R.hidden)) {
                            ad += o + aK;
                            if (x == 0 && !V.rtl) {
                                aJ += "border-left-width: 0px;"
                            }
                            x++
                        } else {
                            aJ += "display: none;";
                            V._hiddencolumns = true
                        }
                        if (!(Y == 0 && f && (aF === "dayView" || aF === "weekView"))) {
                            if (aF.indexOf("month") == -1) {
                                a5 += " " + V.toTP("jqx-grid-cell-nowrap");
                                if (Y % 2 == 1 && !R.timeColumn) {
                                    a5 += " " + V.toTP("jqx-scheduler-middle-cell")
                                }
                                if (!R.timeColumn) {
                                    if (G.showWorkTime !== false) {
                                        var O = 1;
                                        var J = 5;
                                        var ay = 8;
                                        var l = 18;
                                        if (G.workTime) {
                                            var O = G.workTime.fromDayOfWeek ? G.workTime.fromDayOfWeek : 0;
                                            var J = G.workTime.toDayOfWeek ? G.workTime.toDayOfWeek : 0;
                                            var ay = G.workTime.fromHour !== undefined ? G.workTime.fromHour : 8;
                                            var l = G.workTime.toHour ? G.workTime.toHour : 8
                                        }
                                        if (C.dayOfWeek() >= O && C.dayOfWeek() <= J) {
                                            if (C.hour() >= ay && C.hour() < l) {
                                                a5 += " " + V.toTP("jqx-scheduler-work-time-cell")
                                            } else {
                                                a5 += " " + V.toTP("jqx-scheduler-not-work-time-cell")
                                            }
                                        } else {
                                            a5 += " " + V.toTP("jqx-scheduler-not-work-time-cell")
                                        }
                                    }
                                }
                            }
                        }
                        var ah = "";
                        if (aF === "monthView") {
                            if (!V.touchDevice && !R.timeColumn) {
                                a5 += " " + V.toTP("jqx-top-align")
                            }
                            var af = "dd";
                            ah = C.toDate();
                            var a1 = V.toTP("jqx-scheduler-month-outer-cell") + " ";
                            var aA = V.toTP("jqx-scheduler-month-weekend-cell");
                            if (V.date.month() == C.month()) {
                                a1 = ""
                            }
                            if (!C.isWeekend()) {
                                aA = ""
                            } else {
                                a5 += " " + aA
                            }
                            if (ah.getDate() === 1) {
                                af = "MMM dd"
                            }
                            if (V.touchDevice) {
                                if (B > 16) {
                                    ah = "<div class='" + a1 + V.toTP("jqx-scheduler-month-cell-touch") + "'>" + a.jqx.dataFormat.formatdate(ah, af, V.schedulerLocalization) + "<span style='display: none; float: right; cursor: pointer; width:16px; height: 16px;' class='" + V.toTP("jqx-icon-arrow-down") + "'></span></div>"
                                } else {
                                    ah = "<div class='" + a1 + V.toTP("jqx-scheduler-month-cell-touch") + "'>" + a.jqx.dataFormat.formatdate(ah, af, V.schedulerLocalization) + "<span style='display: none; float: right; cursor: pointer;' class='" + V.toTP("jqx-icon-arrow-down") + "'></span></div>"
                                }
                            } else {
                                if (B > 16) {
                                    ah = "<div class='" + a1 + V.toTP("jqx-scheduler-month-cell") + "'>" + a.jqx.dataFormat.formatdate(ah, af, V.schedulerLocalization) + "<span style='display: none; float: right; cursor: pointer; width:16px; height: 16px;' class='" + V.toTP("jqx-icon-arrow-down") + "'></span></div>"
                                } else {
                                    ah = "<div class='" + a1 + V.toTP("jqx-scheduler-month-cell") + "'>" + a.jqx.dataFormat.formatdate(ah, af, V.schedulerLocalization) + "<span style='display: none; float: right; cursor: pointer;' class='" + V.toTP("jqx-icon-arrow-down") + "'></span></div>"
                                }
                            }
                        } else {
                            if (aF === "timelineWeekView" || aF === "timelineDayView" || aF === "timelineMonthView") {
                                a5 += " " + V.toTP("jqx-right-align jqx-bottom-align");
                                ah = "<span style='display: none; float: right; cursor: pointer; width:16px; height: 16px;' class='" + V.toTP("jqx-icon-arrow-down") + "'></span>"
                            }
                        }
                        if (Y == 0 && f && (aF === "dayView" || aF === "weekView") && !R.timeColumn) {
                            a5 += " " + V.toTP("jqx-top-align");
                            a5 += " " + V.toTP("jqx-scheduler-all-day-cell");
                            if (V.rtl) {
                                a5 += " " + V.toTP("jqx-rtl")
                            }
                            ah = C.toDate();
                            ah = "<span>" + a.jqx.dataFormat.formatdate(ah, "dd", V.schedulerLocalization) + "</span>"
                        }
                        var r = R.cellsFormat;
                        if (R.timeColumn && !R.hidden) {
                            ah = C.toDate();
                            if (R.timeZone) {
                                ah = C.clone().toTimeZone(R.timeZone);
                                ah = ah.toDate()
                            }
                            var s = "auto";
                            if (G.timeRuler && G.timeRuler.formatString) {
                                r = G.timeRuler.formatString
                            } else {
                                if (!R.timeColumn.format) {
                                    if (ah.getHours() == 0 || ah.getHours() == 12) {
                                        r = "hh tt"
                                    } else {
                                        r = "hh:mm"
                                    }
                                }
                            }
                            if (a.jqx.dataFormat.isDate(ah)) {
                                ah = a.jqx.dataFormat.formatdate(ah, r, V.schedulerLocalization)
                            }
                            if (Y < k) {
                                if (!V.rtl) {
                                    a5 += " " + V.toTP("jqx-scheduler-time-column-header-cell")
                                } else {
                                    a5 += " " + V.toTP("jqx-scheduler-time-column-header-cell-rtl")
                                }
                                ah = ""
                            }
                            if (Y < k) {
                                if (R._text) {
                                    a5 += " " + V.toTP("jqx-bottom-align")
                                }
                                if (G.timeRuler && G.timeRuler.timeZones && G.timeRuler.timeZones.length > 0) {
                                    if (X < G.timeRuler.timeZones.length) {
                                        ah = R._text
                                    }
                                }
                            }
                            if (aF == "monthView") {
                                ah = C.weekOfYear(V.schedulerLocalization.firstDay)
                            }
                        } else {
                            if (r != "") {
                                if (a.jqx.dataFormat) {
                                    if (a.jqx.dataFormat.isDate(ah)) {
                                        ah = a.jqx.dataFormat.formatdate(ah, r, V.schedulerLocalization)
                                    } else {
                                        if (a.jqx.dataFormat.isNumber(ah) || (!isNaN(parseFloat(ah)) && isFinite(ah))) {
                                            ah = a.jqx.dataFormat.formatnumber(ah, r, V.schedulerLocalization)
                                        }
                                    }
                                }
                            }
                        }
                        if (R.cellclassname != "" && R.cellclassname) {
                            if (typeof R.cellclassname == "string") {
                                a5 += " " + R.cellclassname
                            } else {
                                var a0 = R.cellclassname(Y, R.datafield, ah, aI);
                                if (a0) {
                                    a5 += " " + a0
                                }
                            }
                        }
                        if (R.cellsRenderer != "" && R.cellsRenderer) {
                            var aT = au.indexOf(aI);
                            ah = R.cellsRenderer(aT, R.datafield, ah, aI)
                        }
                        aJ += '" class="' + a5 + '">';
                        aJ += ah;
                        aJ += "</td>";
                        u += aJ
                    }
                    if (aM == 0) {
                        V.table[0].style.width = ad + 2 + "px";
                        V.pinnedtable[0].style.width = ad + 2 + "px";
                        aM = ad
                    }
                    u += "</tr>";
                    H += u;
                    if (!V.rowinfo[aI.uid]) {
                        V.rowinfo[aI.uid] = {
                            row: aI
                        }
                    } else {
                        if (!("row" in V.rowinfo[aI.uid])) {
                            V.rowinfo[aI.uid].row = aI
                        }
                    }
                }
            }
            H += "</table>";
            V.table[0].innerHTML = H;
            V.pinnedtable[0].innerHTML = H;
            V.table[0].rows = V.table[0].firstChild.rows;
            var aR = a.jqx.browser.msie && a.jqx.browser.version < 9;
            var aP = null;
            if (f && (aF === "dayView" || aF === "weekView") && V.tableRows == 1) {
                V.pinnedtable[0].style.display = "block";
                V.pinnedtable[0].style.zIndex = "400";
                V.pinnedtable[0].style.position = "absolute";
                V.pinnedtable[0].style.top = "0px";
                V.pinnedtable[0].style.height = aQ + "px";
                if (!aR) {
                    if (V.tableRows == 1) {
                        V.oldRow = V.table[0].rows[0];
                        try {
                            V.table[0].rows[0] = V.pinnedtable.find("tr")[0]
                        } catch (aC) {}
                        aP = V.pinnedtable.find("tr")[0];
                        V.pinnedTableRow = aP
                    } else {
                        V.oldRow = V.table[0].rows[1];
                        try {
                            V.table[0].rows[1] = V.pinnedtable.find("tr")[1]
                        } catch (aC) {}
                        aP = V.pinnedtable.find("tr")[1];
                        V.pinnedTableRow = aP
                    }
                }
            } else {
                V.pinnedtable[0].style.display = "none"
            }
            var Q = a(V.table[0].firstChild);
            var aV = a(V.pinnedtable[0].firstChild);
            V._table = Q;
            V._pinnedtable = aV;
            if (a.jqx.browser.msie && a.jqx.browser.version < 10) {
                V._table[0].style.width = aM + "px";
                V._pinnedtable[0].style.width = aM + "px"
            }
            if (ai === 0) {
                V._table[0].style.width = (2 + aM) + "px";
                V._pinnedtable[0].style.width = (2 + aM) + "px"
            }
            V._table.addClass("jqx-grid-table-one-cell jqx-disableselect");
            V._pinnedtable.addClass("jqx-grid-table-one-cell jqx-disableselect");
            V.rowByCell = new Array();
            V.columnCells = new Array();

            function F() {
                var c = {};
                c.cells = new Array();
                c.indexOf = function(j) {
                    for (var q = 0; q < c.cells.length; q++) {
                        if (c.cells[q].getAttribute("data-key") == j.getAttribute("data-key")) {
                            return q
                        }
                    }
                    return -1
                };
                return c
            }
            V.cellWidth = 0;
            V.cellHeight = 0;
            var U = V.table[0].rows.length;
            for (var Y = 0; Y < U; Y++) {
                var v = V.table[0].rows[Y];
                if (Y == 0 && aP) {
                    v = aP
                }
                if (v.getAttribute("data-group-row")) {
                    continue
                }
                var aI = new F();
                aI.aboveRow = null;
                aI.belowRow = null;
                if (V.rows.length > 0) {
                    aI.aboveRow = V.rows[V.rows.length - 1];
                    V.rows[V.rows.length - 1].belowRow = aI
                }
                aI.element = v;
                V.rows.push(aI);
                for (var X = 0; X < v.cells.length; X++) {
                    var M = v.cells[X];
                    if (M.getAttribute("data-time-slot")) {
                        continue
                    }
                    if (M.style.display === "none") {
                        continue
                    }
                    if (M.className.indexOf("jqx-grid-cell-pinned") >= 0) {
                        continue
                    }
                    if (!V.columnCells[aI.cells.length]) {
                        V.columnCells[aI.cells.length] = new Array()
                    }
                    V.columnCells[aI.cells.length].push(M);
                    if (V.cellWidth == 0) {
                        V.cellWidth = M.clientWidth
                    }
                    if (V.cellHeight == 0 && (U == 1 || Y > 1)) {
                        V.cellHeight = M.clientHeight
                    }
                    if (V._views[V._view].type == "monthView") {
                        if (aI.top == undefined) {
                            aI.top = parseInt(a(M).position().top)
                        }
                    }
                    aI.cells.push(M);
                    V.rowByCell[M.getAttribute("data-key")] = aI
                }
            }
            if (ai === 0) {
                V._table[0].style.tableLayout = "auto"
            }
            V._renderAppointments(d, aN);
            if (V.pinnedtable[0].style.display != "none" || ((aF == "dayView" || aF == "weekView") && V.tableRows > 1)) {
                V._updateScrollbars(V.host.height())
            }
            if (aF === "monthView" && G.monthRowAutoHeight) {
                if (N.length == 0) {
                    V._renderrows()
                } else {
                    V._updateScrollbars(V.host.height())
                }
            }
            if (V.rendered) {
                V.rendered()
            }
            V.renderedTime = new Date()
        },
        showAppointmentsByResource: function(f) {
            var e = this;
            for (var d = 0; d < e.uiappointments.length; d++) {
                var g = e.uiappointments[d];
                if (g.resourceId == f) {
                    g.hidden = false;
                    g.hiddenByResourceId = false;
                    if (g.exceptions) {
                        for (var c = 0; c < g.exceptions.length; c++) {
                            g.exceptions[c].hiddenByResourceId = false
                        }
                    }
                }
            }
            if (e._resourcesElements) {
                var b = e.getColors(e._resources.indexOf(f));
                e._resourcesElements.top[f].attr("data-toggle", "on");
                e._resourcesElements.top[f].css("background", b.background);
                e._resourcesElements.bottom[f].attr("data-toggle", "on");
                e._resourcesElements.bottom[f].css("background", b.background)
            }
            if (e.hiddenResources) {
                delete e.hiddenResources[f]
            }
            e._renderrows()
        },
        hideAppointmentsByResource: function(e) {
            var d = this;
            for (var c = 0; c < d.uiappointments.length; c++) {
                var f = d.uiappointments[c];
                if (f.resourceId == e) {
                    f.hidden = true;
                    f.hiddenByResourceId = true;
                    if (f.exceptions) {
                        for (var b = 0; b < f.exceptions.length; b++) {
                            f.exceptions[b].hiddenByResourceId = true;
                            f.exceptions[b].hidden = true
                        }
                    }
                }
            }
            if (d._resourcesElements) {
                d._resourcesElements.top[e].attr("data-toggle", "off");
                d._resourcesElements.top[e].css("background", "transparent");
                d._resourcesElements.bottom[e].attr("data-toggle", "off");
                d._resourcesElements.bottom[e].css("background", "transparent")
            }
            if (!d.hiddenResources) {
                d.hiddenResources = new Array()
            }
            d.hiddenResources[e] = true;
            d._renderrows()
        },
        _prepareAppointmentsInView: function(g, f) {
            var h = this;
            if (h._appupdating) {
                return
            }
            var l = new Array();
            for (var s = 0; s < this.uiappointments.length; s++) {
                var n = this.uiappointments[s];
                if (n.hidden && n.recurrencePattern == null) {
                    continue
                }
                var o = a.jqx.scheduler.utilities.rangeIntersection(n.from, n.to, g, f);
                if (o && !n.recurrencePattern) {
                    l.push(n)
                }
                n.renderedAppointments = new Array();
                var v = false;
                if (n.recurrencePattern) {
                    var u = n.getOccurrences(g, f);
                    var t = n.exceptions;
                    for (var r = 0; r < u.length; r++) {
                        var e = u[r];
                        if (e.hidden) {
                            continue
                        }
                        var c = true;
                        for (var p = 0; p < t.length; p++) {
                            var k = t[p];
                            var w = k.occurrenceFrom ? k.occurrenceFrom : k;
                            if (h.selectedJQXAppointment && h.selectedJQXAppointment.rootAppointment) {
                                if (!v && h.selectedJQXAppointment.occurrenceFrom.clearTime().equals(w.clearTime())) {
                                    h.selectedJQXAppointment = k;
                                    v = true
                                }
                            }
                            if (w.clearTime().equals(e.from.clearTime())) {
                                c = false;
                                break
                            }
                        }
                        if (!c) {
                            continue
                        }
                        if (h.selectedJQXAppointment && h.selectedJQXAppointment.rootAppointment) {
                            if (!v && h.selectedJQXAppointment.occurrenceFrom.clearTime().equals(e.occurrenceFrom.clearTime())) {
                                h.selectedJQXAppointment = e;
                                v = true
                            }
                        }
                        n.renderedAppointments[e.id] = e;
                        l.push(e)
                    }
                    for (var p = 0; p < t.length; p++) {
                        var k = t[p];
                        var w = k.occurrenceFrom ? k.from : k;
                        var q = n.createOccurrence(w);
                        if (k.occurrenceFrom) {
                            k.cloneAppointmentAttributes(q);
                            if (k.hidden) {
                                continue
                            }
                        }
                        if (q != n) {
                            l.push(k);
                            n.renderedAppointments[k.id] = k
                        }
                    }
                }
            }
            var b = new Array();
            this.tabKeyAppointments = new Array();
            for (var s = 0; s < l.length; s++) {
                var d = l[s];
                b.push(d);
                this.tabKeyAppointments.push(d)
            }
            b.sort(this._sortAppointmentsByFrom);
            if (this._resources.length > 0) {
                this.tabKeyAppointments.sort(function(j, i) {
                    return h._sortAppointmentsByResourceId(j, i, h)
                })
            } else {
                this.tabKeyAppointments.sort(this._sortAppointmentsByFrom)
            }
            this.appointmentsToRender = b
        },
        _renderDayWeekAppointments: function() {
            var N = this;
            var ab = N._views[N._view].type;
            var M = N._views[N._view];
            var A = new Array();
            var K = new Array();
            var Z = this.rows;
            var E = N.showAllDayRow;
            var ad = N.getMinutesPerScale();
            if (M.timeRuler && M.timeRuler.showAllDayRow != undefined) {
                E = M.timeRuler.showAllDayRow
            }
            for (var f = 0; f < this.appointmentsToRender.length; f++) {
                var s = this.appointmentsToRender[f];
                var u = s.from;
                var ae = s.to;
                var V = a.jqx.scheduler.utilities.getEndOfDay(ae);
                var D = u.day();
                var e = s.allDay;
                var v = N._getDateByString;
                var G = new Array();
                var r = new Array();
                var p = s.resourceId;
                var h = N._resources.indexOf(p);
                if (N.resources && N.resources.orientation == "none") {
                    h = -1
                }
                var B = u.toDate().valueOf();
                var k = ae.toDate().valueOf();
                var Q = V.toDate().valueOf();
                var af = function(j, i) {
                    if (j.date < i.date) {
                        return -1
                    }
                    if (j.date == i.date) {
                        return 0
                    }
                    if (j.date > i.date) {
                        return 1
                    }
                };
                if (!s.allDay && s.duration().days() < 1 || !E) {
                    var q = ae.toDate();
                    var I = false;
                    if (q.getHours() == 0 && q.getMinutes() == 0) {
                        I = true
                    }
                    for (var X = 0; X < N.columnCells.length; X++) {
                        if (!N.columnCells[X]) {
                            continue
                        }
                        var w = N.columnCells[X];
                        if (N.rtl) {
                            w = N.columnCells[N.columnCells.length - 1 - X]
                        }
                        for (var W = 0; W < w.length; W++) {
                            if (w[W].getAttribute("data-end-date")) {
                                continue
                            }
                            var n = w[W].getAttribute("data-date");
                            var Y = v(n);
                            var F = v(n);
                            F.setMinutes(F.getMinutes() + ad - 1);
                            var m = Y.valueOf();
                            var H = F.valueOf();
                            if (m > ae) {
                                continue
                            }
                            if ((B <= m && m < k) || (B <= H && H < k) || (B >= m && H >= k)) {
                                if (h != -1) {
                                    if ((1 + h) != w[W].getAttribute("data-view")) {
                                        continue
                                    }
                                }
                                if (D != Y.getDate()) {
                                    G.sort(af);
                                    r.push(G);
                                    G = new Array();
                                    D = u.addDays(1).day()
                                }
                                G.push({
                                    cell: w[W],
                                    date: Y
                                })
                            }
                        }
                    }
                    G.sort(af);
                    r.push(G);
                    var C = new Array();
                    for (var X = 0; X < r.length; X++) {
                        var w = r[X];
                        if (w.length == 0) {
                            continue
                        }
                        var c = N.cellWidth;
                        var d = w[w.length - 1].cell.offsetTop + N.cellHeight;
                        var P = w[0].cell.offsetLeft;
                        var O = w[0].cell.offsetTop;
                        var S = N.getMinutesPerScale();
                        var q = new a.jqx.date(w[w.length - 1].date, N.timeZone).addMinutes(S);
                        var ac = {
                            cells: w,
                            x: P,
                            y: O,
                            height: d - O,
                            width: c,
                            appointment: s,
                            from: new a.jqx.date(w[0].date, N.timeZone),
                            to: q
                        };
                        C.push(ac);
                        A.push(ac)
                    }
                    s.elements = C;
                    if (s.rootAppointment) {
                        s.rootAppointment.elements = s.rootAppointment.elements.concat(s.elements)
                    }
                } else {
                    var w = Z[0].cells;
                    if (this.tableRows > 1) {
                        var U = Z.length / N.tableRows;
                        var b = h * U;
                        w = Z[b].cells
                    }
                    for (var W = 0; W < w.length; W++) {
                        var n = w[W].getAttribute("data-date");
                        var ag = v(n);
                        var Y = new a.jqx.date(ag, N.timeZone);
                        Y = a.jqx.scheduler.utilities.getEndOfDay(Y);
                        var m = Y.toDate().valueOf();
                        if (m > V) {
                            continue
                        }
                        if (u <= Y && Y <= V) {
                            if (h != -1) {
                                if ((1 + h) != w[W].getAttribute("data-view")) {
                                    continue
                                }
                            }
                            if (G.length == 0) {
                                Y = a.jqx.scheduler.utilities.getStartOfDay(Y)
                            }
                            G.push({
                                cell: w[W],
                                date: Y
                            })
                        }
                    }
                    G.sort(af);
                    r.push(G);
                    var C = new Array();
                    for (var X = 0; X < r.length; X++) {
                        var w = r[X];
                        if (w.length == 0) {
                            break
                        }
                        var l = a(w[0].cell).position();
                        var c = a(w[w.length - 1].cell).position().left + this.cellWidth - l.left;
                        var d = a(w[w.length - 1].cell).position().top;
                        var P = l.left;
                        var O = l.top;
                        if (this.rtl) {
                            var l = a(w[w.length - 1].cell).position();
                            var P = l.left;
                            var c = a(w[0].cell).position().left + this.cellWidth - l.left
                        }
                        var T = w[w.length - 1].date;
                        T = new a.jqx.date(a.jqx.scheduler.utilities.getEndOfDay(T), N.timeZone);
                        var ac = {
                            cells: w,
                            x: P,
                            y: O,
                            height: d - O + this.cellHeight,
                            width: c,
                            appointment: s,
                            from: a.jqx.scheduler.utilities.getStartOfDay(new a.jqx.date(w[0].date, N.timeZone)),
                            to: T
                        };
                        C.push(ac);
                        K.push(ac)
                    }
                    s.elements = C;
                    if (s.rootAppointment) {
                        s.rootAppointment.elements = s.rootAppointment.elements.concat(s.elements)
                    }
                }
            }
            var z = this.getViewStart();
            var R = this.getViewEnd();
            if (this._resources.length < 2 || this.resources.orientation == "none") {
                var aa = new Array();
                var g = z;
                var J = 0;
                while (g < R) {
                    aa[J] = new Array();
                    for (var X = 0; X < A.length; X++) {
                        var t = A[X];
                        if (t.from.day() == g.day()) {
                            t.column = -1;
                            t.columnSpan = 1;
                            aa[J].push(t)
                        }
                    }
                    J++;
                    g = g.addDays(1)
                }
                for (var X = 0; X < aa.length; X++) {
                    this._renderAppointmentsInDay(aa[X])
                }
                this._renderAllDayAppointments(K)
            } else {
                for (var W = 0; W < this._resources.length; W++) {
                    var L = this._resources[W];
                    var aa = new Array();
                    var g = z;
                    var J = 0;
                    while (g < R) {
                        aa[J] = new Array();
                        for (var X = 0; X < A.length; X++) {
                            var t = A[X];
                            if (t.from.day() == g.day()) {
                                t.column = -1;
                                t.columnSpan = 1;
                                if (t.appointment.resourceId == L) {
                                    aa[J].push(t)
                                }
                            }
                        }
                        J++;
                        g = g.addDays(1)
                    }
                    for (var X = 0; X < aa.length; X++) {
                        this._renderAppointmentsInDay(aa[X])
                    }
                    var o = new Array();
                    for (var X = 0; X < K.length; X++) {
                        if (K[X].appointment.resourceId == L) {
                            o.push(K[X])
                        }
                    }
                    this._renderAllDayAppointments(o)
                }
            }
        },
        _renderAllDayAppointments: function(ar) {
            var ac = this;
            var I = this.showAllDayRow;
            var ab = this._views[this._view];
            if (ab.timeRuler && ab.timeRuler.showAllDayRow != undefined) {
                I = ab.timeRuler.showAllDayRow
            }
            if (!I) {
                return
            }
            if (ar.length == 0) {
                return
            }
            var B = ar;
            var H = 1;
            H = this.getMaxAllDayAppointments(ar);
            if (this.tableRows == 1) {
                var A = this.table[0].rows[0].clientHeight / H
            } else {
                var A = this.table[0].rows[1].clientHeight / H
            }
            for (var ap = 0; ap < ar.length; ap++) {
                var z = ar[ap];
                z.row = -1;
                var d = this.getCollisionAppointments(z, ar);
                d.sort(this._sortAppointmentsByFrom);
                var s = d.indexOf(z);
                if (s >= 0) {
                    for (var aj = s; aj < d.length; aj++) {
                        d[aj].row = -1
                    }
                }
                for (var am = 0; am < H; am++) {
                    var n = am;
                    for (var U in d) {
                        if (U == "indexOf") {
                            break
                        }
                        var Y = d[U];
                        if (Y.row == -1 && !this.isBusyRow(n, d)) {
                            Y.row = n;
                            var an = H;
                            var c = this.getMaxAllDayAppointments(d);
                            if (an > c) {
                                an = c
                            }
                            Y.rowsCount = an
                        }
                    }
                }
            }
            for (var am = 0; am < B.length; am++) {
                var z = B[am];
                var d = this.getCollisionAppointments(z, B);
                d.sort(this._sortAppointmentsByFrom);
                var l = 1;
                for (var U in d) {
                    if (U == "indexOf") {
                        break
                    }
                    var O = d[U];
                    l = Math.max(l, O.rowsCount)
                }
                for (var U in d) {
                    if (U == "indexOf") {
                        break
                    }
                    var O = d[U];
                    O.rowsCount = l
                }
                if (d.length == 1) {
                    z.rowSpan = l
                } else {
                    var F = 0;
                    var f = true;
                    for (var aj = z.row; aj < l; aj++) {
                        for (var U in d) {
                            if (U == "indexOf") {
                                break
                            }
                            var Y = d[U];
                            if (Y == z) {
                                continue
                            }
                            if (Y.row == aj) {
                                f = false
                            }
                        }
                        if (!f) {
                            break
                        }
                        F++
                    }
                    z.rowSpan = F
                }
            }
            var aq = ac.appointmentsMinHeight + 2;
            if (ac.isTouchDevice()) {
                var aq = ac.touchAppointmentsMinHeight + 2
            }
            for (var ae = 0; ae < B.length; ae++) {
                var ad = aq;
                var z = B[ae];
                z.height = aq;
                var D = ad * z.row;
                z.y = 18 + z.y + D + (4 * z.row);
                z.x += 3;
                z.width -= 8;
                if (z.appointment.from.hour() != 0 || z.appointment.to.hour() != 23) {
                    var C = this.getViewStart();
                    var ag = this.getViewEnd();
                    if (!ac.rtl) {
                        var K = parseFloat(ac.cellWidth / 24) * (z.appointment.from.hour()) + parseFloat(ac.cellWidth / 48) * (z.appointment.from.minute() / 30);
                        if (z.appointment.from < C) {
                            K = 0
                        }
                        z.timewidth = z.width;
                        z.timex = K;
                        var L = parseFloat(ac.cellWidth / 24) * (z.appointment.to.hour()) + parseFloat(ac.cellWidth / 48) * (z.appointment.to.minute() / 30);
                        if (z.appointment.to > ag) {
                            L = 0
                        }
                        z.timewidth -= K;
                        if (L > 0) {
                            z.timewidth -= ac.cellWidth;
                            z.timewidth += L
                        }
                        if (ab.appointmentsRenderMode == "exactTime") {
                            z.width = z.timewidth;
                            z.x += K
                        }
                    } else {
                        var K = parseFloat(ac.cellWidth / 24) * (z.appointment.to.hour()) + parseFloat(ac.cellWidth / 48) * (z.appointment.to.minute() / 30);
                        var L = (parseFloat(ac.cellWidth / 24) * (z.appointment.from.hour()) + parseFloat(ac.cellWidth / 48) * (z.appointment.from.minute() / 30));
                        if (K > 0) {
                            K = ac.cellWidth - K
                        }
                        if (z.appointment.from < C) {
                            L = 0
                        }
                        if (z.appointment.to > ag) {
                            K = 0
                        }
                        if (ab.appointmentsRenderMode == "exactTime") {
                            z.x += K;
                            z.width -= K;
                            z.width -= L
                        }
                        if (z.appointment.duration().days() < 1) {
                            if (z.width < 15) {
                                z.width = 15
                            }
                        }
                        z.timewidth = z.width;
                        if (ab.appointmentsRenderMode == "exactTimeStatus") {
                            z.timewidth -= K;
                            z.timewidth -= L
                        }
                        z.timex = K
                    }
                }
            }
            for (var ae = 0; ae < B.length; ae++) {
                var ak = B[ae];
                var N = "";
                var P = "auto";
                var ab = this._views[this._view];
                var o = ak.appointment.from;
                var av = ak.appointment.to;
                if (ab.timeRuler && ab.timeRuler.formatString) {
                    P = ab.timeRuler.formatString
                }
                var af = P;
                if (P === "auto") {
                    if ((o.hour() == 0 && o.minute() == 0) || (o.hour() == 12 && o.minute() == 0)) {
                        var af = "hh tt"
                    } else {
                        var af = "hh:mm"
                    }
                    if ((av.hour() == 0 && av.minute() == 0) || (av.hour() == 12 && av.minute() == 0)) {
                        var y = "hh tt"
                    } else {
                        var y = "hh:mm"
                    }
                }
                var u = o.toString(af);
                var v = av.toString(y);
                var J = ak.appointment.duration();
                var e = ak.appointment.allDay || (J.hours === 23 && J.minutes === 59 && J.seconds === 59);
                var aa = ak.appointment.background;
                var T = ak.appointment.subject ? ak.appointment.subject : "(No Title)";
                var M = ak.appointment.color;
                var i = ak.appointment.resourceId;
                var ah = ac.getColors(ac._resources.indexOf(i));
                var ai = " data-resourceId='" + i + "' ";
                var X = ak.appointment.borderColor;
                var t = ak.appointment.location;
                if (t.length > 0) {
                    t = ", " + t
                }
                if (!aa) {
                    aa = ah.background
                }
                if (!X) {
                    X = ah.border
                }
                if (!M) {
                    M = ah.color
                }
                var b = ak.appointment.isRecurrentAppointment();
                var r = ak.appointment.isException();
                var g = u + "-" + v;
                if (e) {
                    u = "";
                    v = ""
                }
                var ao = "";
                var w = ac.toTP("jqx-scheduler-appointment-status");
                var S = "";
                var R = ac.statuses[ak.appointment.status];
                var k = false;
                if (R) {
                    if (R == "transparent") {
                        k = false
                    } else {
                        S = "<div style='background: " + R + "; border-right-color: " + X + "' class='" + w + "'></div>";
                        if (R == "tentative") {
                            w = ac.toTP("jqx-scheduler-appointment-status jqx-scheduler-appointment-status-stripes");
                            S = "<div style='background-color: " + X + "; border-right-color: " + X + "' class='" + w + "'></div>"
                        }
                        k = true
                    }
                }
                var E = ac.toTP("jqx-scheduler-appointment-duration-status");
                var al = "<div style='width: " + ak.timewidth + "px; left: " + ak.timex + "px;' class='" + E + "'></div>";
                if (e) {
                    al = ""
                }
                var G = "";
                if (ab.appointmentsRenderMode != "exactTimeStatus") {
                    al = ""
                }
                if (ac.rtl) {
                    var w = ac.toTP("jqx-scheduler-appointment-status-rtl jqx-scheduler-appointment-status");
                    S = "<div style='background: " + R + "; border-left-color: " + X + "' class='" + w + "'></div>";
                    if (R == "tentative") {
                        w = ac.toTP("jqx-scheduler-appointment-status-rtl jqx-scheduler-appointment-status jqx-scheduler-appointment-status-stripes");
                        S = "<div style='background-color: " + X + "; border-left-color: " + X + "' class='" + w + "'></div>"
                    }
                    G = S;
                    S = ""
                }
                var W = "";
                var Q = T + t;
                if (!e) {
                    Q = T + t + al
                }
                if (ac.renderAppointment) {
                    var au = ac.renderAppointment({
                        appointment: ak.appointment.boundAppointment,
                        textColor: M,
                        background: aa,
                        borderColor: X,
                        html: Q,
                        cssClass: "",
                        style: "",
                        width: ak.width,
                        height: ak.height,
                        view: ac._views[ac._view].type
                    });
                    if (au) {
                        var N = au.html;
                        if (N != Q) {
                            Q = N
                        }
                        M = au.textColor;
                        aa = au.background;
                        X = au.borderColor;
                        if (au.cssClass) {
                            W = au.cssClass + " "
                        }
                        if (au.style != "") {
                            var ah = ac.getAppointmentColors(au.style);
                            aa = ah.background;
                            X = ah.border;
                            M = ah.color
                        }
                    }
                }
                if (ao === "") {
                    if (k) {
                        var ao = "<div style='white-space:nowrap;' class='" + ac.toTP("jqx-scheduler-appointment-content") + "'>" + S + "<div class='" + ac.toTP("jqx-scheduler-appointment-inner-content") + "'>" + Q + "</div>" + G + "</div>"
                    } else {
                        var ao = "<div style='white-space:nowrap;' class='" + ac.toTP("jqx-scheduler-appointment-content") + "'><div class='" + ac.toTP("jqx-scheduler-appointment-inner-content") + "'>" + Q + "</div></div>"
                    }
                }
                var at = "";
                if (ac.rtl) {
                    at = ac.toTP("jqx-rtl jqx-scheduler-appointment-rtl") + " "
                }
                if (r) {
                    var h = M.toLowerCase() == "white" ? ac.toTP("jqx-icon-recurrence-exception-white") : ac.toTP("jqx-icon-recurrence-exception");
                    N = "<div data-key='" + ak.appointment.id + "'" + ai + "class='" + at + W + ac.toTP("jqx-scheduler-appointment jqx-rc-all") + "' style='position:absolute; z-index: 399; left: " + ak.x + "px; top: " + ak.y + "px; width: " + ak.width + "px; line-height: " + ak.height + "px; height: " + ak.height + "px; border-color:" + X + "; color:" + M + "; background:" + aa + ";'><div class='" + h + "'></div>" + ao + "<div class='" + ac.toTP("jqx-scheduler-appointment-resize-indicator jqx-scheduler-appointment-left-resize-indicator") + "'></div><div class='" + ac.toTP("jqx-scheduler-appointment-resize-indicator jqx-scheduler-appointment-right-resize-indicator") + "'></div>"
                } else {
                    if (b) {
                        var q = M.toLowerCase() == "white" ? ac.toTP("jqx-icon-recurrence-white") : ac.toTP("jqx-icon-recurrence");
                        N = "<div data-key='" + ak.appointment.id + "'" + ai + "class='" + at + W + ac.toTP("jqx-scheduler-appointment jqx-rc-all") + "' style='position:absolute; z-index: 399; left: " + ak.x + "px; top: " + ak.y + "px; width: " + ak.width + "px; line-height: " + ak.height + "px; height: " + ak.height + "px; border-color:" + X + "; color:" + M + "; background:" + aa + ";'><div class='" + q + "'></div>" + ao + "<div class='" + ac.toTP("jqx-scheduler-appointment-resize-indicator jqx-scheduler-appointment-left-resize-indicator") + "'></div><div class='" + ac.toTP("jqx-scheduler-appointment-resize-indicator jqx-scheduler-appointment-right-resize-indicator") + "'></div>"
                    } else {
                        N = "<div data-key='" + ak.appointment.id + "'" + ai + "class='" + at + W + ac.toTP("jqx-scheduler-appointment jqx-rc-all") + "' style='position:absolute; z-index: 399; left: " + ak.x + "px; top: " + ak.y + "px; width: " + ak.width + "px; line-height: " + ak.height + "px; height: " + ak.height + "px; border-color:" + X + "; color:" + M + "; background:" + aa + ";'>" + ao + "<div class='" + ac.toTP("jqx-scheduler-appointment-resize-indicator jqx-scheduler-appointment-left-resize-indicator") + "'></div><div class='" + ac.toTP("jqx-scheduler-appointment-resize-indicator jqx-scheduler-appointment-right-resize-indicator") + "'></div>"
                    }
                }
                var V = a(N);
                if (this.tableRows == 1) {
                    V.appendTo(this.pinnedtable)
                } else {
                    V.appendTo(this.table)
                }
                ak.element = V;
                if (this.appointmentTooltips) {
                    if (!ak.appointment.tooltip) {
                        var Z = ak.appointment.subject;
                        if (u) {
                            Z = u + " - " + v + " " + Z
                        }
                        if (Z) {
                            var t = ak.appointment.location;
                            if (t) {
                                Z += "\n" + t
                            }
                            V[0].setAttribute("title", Z)
                        }
                    } else {
                        V[0].setAttribute("title", ak.appointment.tooltip)
                    }
                }
            }
        },
        _renderAppointmentsInDay: function(an, am) {
            if (an.length == 0) {
                return
            }
            var Z = this;
            var Y = this._views[this._view];
            var B = an;
            var C = this.getViewStart();
            var ac = this.getViewEnd();
            var ai = 1;
            var o = 0;
            if (Y.timeRuler) {
                o = this.columns.records[1].width;
                if (Y.timeRuler.timeZones) {
                    o = this.columns.records[1 + Y.timeRuler.timeZones.length].width
                }
            } else {
                o = this.columns.records[1].width
            }
            ai = this.getMaxColumnsInADay(an);
            var n = o / ai;
            if (n < 0) {
                return
            }
            for (var al = 0; al < an.length; al++) {
                var A = an[al];
                A.column = -1;
                var d = this.getCollisionAppointments(A, an);
                d.sort(this._sortAppointmentsByFrom);
                var t = d.indexOf(A);
                if (t >= 0) {
                    for (var ag = t; ag < d.length; ag++) {
                        d[ag].column = -1
                    }
                }
                for (var aj = 0; aj < ai; aj++) {
                    var e = aj;
                    for (var R in d) {
                        if (R == "indexOf") {
                            break
                        }
                        var V = d[R];
                        if (V.column == -1 && !this.isBusyColumn(e, d)) {
                            V.column = e;
                            var g = ai;
                            var c = this.getMaxColumnsInADay(d);
                            if (g > c) {
                                g = c
                            }
                            V.columnsCount = g
                        }
                    }
                }
            }
            for (var aj = 0; aj < B.length; aj++) {
                var A = B[aj];
                var d = this.getCollisionAppointments(A, B);
                d.sort(this._sortAppointmentsByFrom);
                var H = 1;
                for (var R in d) {
                    if (R == "indexOf") {
                        break
                    }
                    var L = d[R];
                    if (L.columnsCount == undefined) {
                        continue
                    }
                    H = Math.max(H, L.columnsCount)
                }
                for (var R in d) {
                    if (R == "indexOf") {
                        break
                    }
                    var L = d[R];
                    L.columnsCount = H
                }
                if (d.length == 1) {
                    A.columnSpan = H
                } else {
                    var D = 0;
                    var f = true;
                    for (var ag = A.column; ag < H; ag++) {
                        for (var R in d) {
                            if (R == "indexOf") {
                                break
                            }
                            var V = d[R];
                            if (V.column == undefined) {
                                continue
                            }
                            if (V == A) {
                                continue
                            }
                            if (V.column == ag) {
                                f = false
                            }
                        }
                        if (!f) {
                            break
                        }
                        D++
                    }
                    A.columnSpan = D
                }
            }
            for (var aa = 0; aa < B.length; aa++) {
                var E = o / B[aa].columnsCount;
                var A = B[aa];
                A.width = -5 + (E * A.columnSpan);
                var ap = E * A.column;
                A.x = 2 + A.x + ap;
                A.height -= 5;
                A.y += 1;
                if (Y.appointmentsRenderMode == "exactTime") {
                    var ae = Z.getMinutesPerScale();
                    if (A.appointment.from.minute() % ae != 0) {
                        var at = A.appointment.from.minute() % ae;
                        var J = parseFloat(Z.cellHeight / ae) * at
                    } else {
                        var J = 0
                    }
                    if (A.appointment.to.minute() % ae != 0) {
                        var at = A.appointment.to.minute() % ae;
                        var G = Z.cellHeight - parseFloat(Z.cellHeight / ae) * at;
                        if (A.to.day() !== A.appointment.to.day()) {
                            G = 0
                        }
                    } else {
                        G = 0
                    }
                    A.y += J;
                    A.height -= J;
                    A.height -= G
                }
            }
            for (var aa = 0; aa < B.length; aa++) {
                var ah = B[aa];
                var K = "";
                var M = "auto";
                var Y = this._views[this._view];
                var q = ah.appointment.from;
                var ar = ah.appointment.to;
                if (Y.timeRuler && Y.timeRuler.formatString) {
                    M = Y.timeRuler.formatString
                }
                var ab = M;
                if (M === "auto") {
                    if ((q.hour() == 0 && q.minute() == 0) || (q.hour() == 12 && q.minute() == 0)) {
                        var ab = "hh tt"
                    } else {
                        var ab = "hh:mm"
                    }
                    if ((ar.hour() == 0 && ar.minute() == 0) || (ar.hour() == 12 && ar.minute() == 0)) {
                        var z = "hh tt"
                    } else {
                        var z = "hh:mm"
                    }
                }
                var v = q.toString(ab);
                var w = ar.toString(z);
                var X = ah.appointment.background;
                var Q = ah.appointment.subject ? ah.appointment.subject : "(No Title)";
                var u = ah.appointment.location ? ah.appointment.location : "";
                var I = ah.appointment.color;
                var k = ah.appointment.resourceId;
                var ad = Z.getColors(Z._resources.indexOf(k));
                var af = " data-resourceId='" + k + "' ";
                var U = ah.appointment.borderColor;
                if (!X) {
                    X = ad.background
                }
                if (!U) {
                    U = ad.border
                }
                if (!I) {
                    I = ad.color
                }
                var b = ah.appointment.isRecurrentAppointment();
                var s = ah.appointment.isException();
                var ak = "";
                var y = Z.toTP("jqx-scheduler-appointment-status");
                var P = "";
                var O = Z.statuses[ah.appointment.status];
                var l = false;
                if (O) {
                    if (O == "transparent") {
                        l = false
                    } else {
                        P = "<div style='background: " + O + "; border-right-color: " + U + "' class='" + y + "'></div>";
                        if (O == "tentative") {
                            y = Z.toTP("jqx-scheduler-appointment-status jqx-scheduler-appointment-status-stripes");
                            P = "<div style='background-color: " + U + "; border-right-color: " + U + "' class='" + y + "'></div>"
                        }
                        l = true
                    }
                }
                var F = "";
                if (Z.rtl) {
                    var y = Z.toTP("jqx-scheduler-appointment-status-rtl jqx-scheduler-appointment-status");
                    P = "<div style='background: " + O + "; border-left-color: " + U + "' class='" + y + "'></div>";
                    if (O == "tentative") {
                        y = Z.toTP("jqx-scheduler-appointment-status-rtl jqx-scheduler-appointment-status jqx-scheduler-appointment-status-stripes");
                        P = "<div style='background-color: " + U + "; border-left-color: " + U + "' class='" + y + "'></div>"
                    }
                    F = P;
                    P = ""
                }
                var T = "";
                var N = Q + "<br/>" + u;
                if (!u) {
                    var N = Q
                }
                if (Z.renderAppointment) {
                    var aq = Z.renderAppointment({
                        appointment: ah.appointment.boundAppointment,
                        textColor: I,
                        background: X,
                        borderColor: U,
                        html: N,
                        cssClass: "",
                        style: "",
                        width: ah.width,
                        height: ah.height,
                        view: Z._views[Z._view].type
                    });
                    if (aq) {
                        var K = aq.html;
                        if (K != N) {
                            N = K
                        }
                        I = aq.textColor;
                        X = aq.background;
                        U = aq.borderColor;
                        if (aq.cssClass) {
                            T = aq.cssClass + " "
                        }
                        if (aq.style != "") {
                            var ad = Z.getAppointmentColors(aq.style);
                            X = ad.background;
                            U = ad.border;
                            I = ad.color
                        }
                    }
                }
                if (ak === "") {
                    if (l) {
                        var ak = "<div class='" + Z.toTP("jqx-scheduler-appointment-content") + "'>" + P + "<div class='" + Z.toTP("jqx-scheduler-appointment-inner-content") + "'>" + N + "</div>" + F + "</div>"
                    } else {
                        var ak = "<div class='" + Z.toTP("jqx-scheduler-appointment-content") + "'><div class='" + Z.toTP("jqx-scheduler-appointment-inner-content") + "'>" + N + "</div></div>"
                    }
                }
                var ao = "";
                if (Z.rtl) {
                    ao = Z.toTP("jqx-rtl jqx-scheduler-appointment-rtl") + " "
                }
                if (s) {
                    var h = I.toLowerCase() == "white" ? Z.toTP("jqx-icon-recurrence-exception-white") : Z.toTP("jqx-icon-recurrence-exception");
                    K = "<div data-key='" + ah.appointment.id + "'" + af + "class='" + ao + T + Z.toTP("jqx-scheduler-appointment jqx-rc-all") + "' style='position:absolute; z-index: 399; left: " + ah.x + "px; top: " + ah.y + "px; width: " + ah.width + "px; height: " + ah.height + "px; border-color:" + U + "; color:" + I + "; background:" + X + ";'><div class='" + h + "'></div>" + ak + "<div class='" + Z.toTP("jqx-scheduler-appointment-resize-indicator jqx-scheduler-appointment-top-resize-indicator") + "'></div><div class='" + Z.toTP("jqx-scheduler-appointment-resize-indicator jqx-scheduler-appointment-bottom-resize-indicator") + "'></div></div>"
                } else {
                    if (b) {
                        var r = I.toLowerCase() == "white" ? Z.toTP("jqx-icon-recurrence-white") : Z.toTP("jqx-icon-recurrence");
                        K = "<div data-key='" + ah.appointment.id + "'" + af + "class='" + ao + T + Z.toTP("jqx-scheduler-appointment jqx-rc-all") + "' style='position:absolute; z-index: 399; left: " + ah.x + "px; top: " + ah.y + "px; width: " + ah.width + "px; height: " + ah.height + "px; border-color:" + U + "; color:" + I + "; background:" + X + ";'><div class='" + r + "'></div>" + ak + "<div class='" + Z.toTP("jqx-scheduler-appointment-resize-indicator jqx-scheduler-appointment-top-resize-indicator") + "'></div><div class='" + Z.toTP("jqx-scheduler-appointment-resize-indicator jqx-scheduler-appointment-bottom-resize-indicator") + "'></div></div>"
                    } else {
                        K = "<div data-key='" + ah.appointment.id + "'" + af + "class='" + ao + T + Z.toTP("jqx-scheduler-appointment jqx-rc-all") + "' style='position:absolute; z-index: 399; left: " + ah.x + "px; top: " + ah.y + "px; width: " + ah.width + "px; height: " + ah.height + "px; border-color:" + U + "; color:" + I + "; background:" + X + ";'>" + ak + "<div class='" + Z.toTP("jqx-scheduler-appointment-resize-indicator jqx-scheduler-appointment-top-resize-indicator") + "'></div><div class='" + Z.toTP("jqx-scheduler-appointment-resize-indicator jqx-scheduler-appointment-bottom-resize-indicator") + "'></div></div>"
                    }
                }
                var S = a(K);
                S.appendTo(this.table);
                ah.element = S;
                if (this.appointmentTooltips) {
                    if (!ah.appointment.tooltip) {
                        var W = ah.appointment.subject;
                        if (W) {
                            var u = ah.appointment.location;
                            if (u) {
                                W += "\n" + u
                            }
                            S[0].setAttribute("title", W)
                        }
                    } else {
                        S[0].setAttribute("title", ah.appointment.tooltip)
                    }
                }
            }
        },
        getCollisionAppointments: function(b, f) {
            var j = new Array();
            var g = b.from;
            var h = b.to;
            for (var d = 0; d < f.length; d++) {
                var k = f[d];
                var e = k.from;
                var c = k.to;
                if (a.jqx.scheduler.utilities.rangeIntersection(g, h, e, c)) {
                    j.push(k)
                }
            }
            return j
        },
        getAllDayCollisionAppointments: function(b, f) {
            var j = new Array();
            var g = a.jqx.scheduler.utilities.getStartOfDay(b.from);
            var h = a.jqx.scheduler.utilities.getEndOfDay(b.to);
            for (var d = 0; d < f.length; d++) {
                var k = f[d];
                var e = a.jqx.scheduler.utilities.getStartOfDay(k.from);
                var c = a.jqx.scheduler.utilities.getEndOfDay(k.to);
                if (a.jqx.scheduler.utilities.rangeIntersection(g, h, e, c)) {
                    j.push(k)
                }
            }
            return j
        },
        _renderAppointments: function(e, c) {
            var d = this;
            if (d._appupdating) {
                return
            }
            d.table.find(".jqx-scheduler-appointment").remove();
            d.pinnedtable.find(".jqx-scheduler-appointment").remove();
            var b = d._views[d._view].type;
            if (b === "dayView" || b === "weekView") {
                d._renderDayWeekAppointments(e, c)
            } else {
                if (b === "monthView") {
                    d._renderMonthAppointments(e, c)
                } else {
                    if (b === "timelineWeekView" || b === "timelineDayView" || b === "timelineMonthView") {
                        d._renderTimelineAppointments(e, c)
                    }
                }
            }
            if (d.selectedJQXAppointment) {
                d._selectAppointment(d.selectedJQXAppointment)
            }
        },
        _renderTimelineAppointments: function(t, I) {
            var E = this;
            var Q = E._views[E._view].type;
            var D = E._views[E._view];
            var u = new Array();
            var P = this.rows;
            var L = this.cellHeight;
            var K = this.cellWidth;
            var J = E.getMinutesPerScale();
            for (var d = 0; d < this.appointmentsToRender.length; d++) {
                var o = this.appointmentsToRender[d];
                var p = o.from;
                var S = o.to;
                var r = E._getDateByString;
                var A = new Array();
                var v = p.toDate().valueOf();
                var g = S.toDate().valueOf();
                if (Q === "timelineMonthView") {
                    v = p.clearTime().toDate().valueOf()
                }
                var T = function(j, i) {
                    if (j.date < i.date) {
                        return -1
                    }
                    if (j.date == i.date) {
                        return 0
                    }
                    if (j.date > i.date) {
                        return 1
                    }
                };
                var q = E.rows[0];
                var m = o.resourceId;
                var f = E._resources.indexOf(m);
                if (E._resources.length > 0) {
                    if (E.resources.orientation !== "horizontal") {
                        if (f >= 1) {
                            q = E.rows[f]
                        }
                    }
                }
                if (E.resources && E.resources.orientation == "none") {
                    f = -1;
                    var q = E.rows[0]
                }
                var s = q.cells;
                for (var M = 0; M < s.length; M++) {
                    var k = s[M].getAttribute("data-date");
                    s[M].appointments = new Array();
                    var O = r(k);
                    var h = O.valueOf();
                    var z = r(k);
                    z.setMinutes(z.getMinutes() + J - 1);
                    var B = z.valueOf();
                    if (h > S) {
                        continue
                    }
                    if ((v <= h && h < g) || (v <= B && B < g) || (v >= h && v <= B && g <= B)) {
                        if (f != -1) {
                            if ((1 + f) != s[M].getAttribute("data-view")) {
                                continue
                            }
                        }
                        A.push({
                            cell: s[M],
                            date: O
                        });
                        q = N
                    }
                }
                A.sort(T);
                var w = new Array();
                var s = A;
                if (s.length == 0) {
                    continue
                }
                var l = E.appointmentsMinHeight;
                if (E.isTouchDevice()) {
                    l = E.touchAppointmentsMinHeight
                }
                if (D.appointmentHeight) {
                    l = D.appointmentHeight
                }
                var H = a(s[0].cell).position();
                var c = l;
                var b = a(s[s.length - 1].cell).position().left - H.left + K;
                var G = H.left;
                var F = H.top;
                if (E.rtl) {
                    var H = a(s[s.length - 1].cell).position();
                    var b = a(s[0].cell).position().left - H.left + K;
                    var G = H.left;
                    var F = H.top
                }
                var n = new a.jqx.date(s[s.length - 1].date, E.timeZone).addMinutes(J);
                if (Q === "timelineMonthView") {
                    var n = a.jqx.scheduler.utilities.getEndOfDay(new a.jqx.date(s[s.length - 1].date, E.timeZone))
                }
                var R = {
                    cellX: G,
                    cellY: F,
                    cellHeight: L,
                    cells: s,
                    x: G,
                    y: F,
                    height: c,
                    width: b,
                    appointment: o,
                    from: new a.jqx.date(s[0].date, E.timeZone),
                    to: n
                };
                if (D.appointmentsRenderMode === "exactTime") {
                    R.from = o.from;
                    R.to = o.to
                }
                w.push(R);
                u.push(R);
                o.elements = w;
                if (o.rootAppointment) {
                    o.rootAppointment.elements = o.rootAppointment.elements.concat(o.elements)
                }
            }
            if (this._resources.length < 2 || this.resources.orientation == "none") {
                this._renderUITimelineAppointments(u, t, I)
            } else {
                for (var M = 0; M < this._resources.length; M++) {
                    var C = this._resources[M];
                    var e = new Array();
                    for (var N = 0; N < u.length; N++) {
                        if (u[N].appointment.resourceId == C) {
                            e.push(u[N])
                        }
                    }
                    this._renderUITimelineAppointments(e, t, I)
                }
            }
        },
        _renderUITimelineAppointments: function(ao, w, ac) {
            var Y = this;
            var ap = Y._views[Y._view].type;
            var X = Y._views[Y._view];
            var E = ao;
            var C = 1;
            var Y = this;
            var T = new Array();
            C = Y.getMaxTimelineAppointments(ao, T, w, ac);
            var h = Y.appointmentsMinHeight;
            if (Y.isTouchDevice()) {
                h = Y.touchAppointmentsMinHeight
            }
            if (X.appointmentHeight) {
                h = X.appointmentHeight
            }
            for (var an = 0; an < ao.length; an++) {
                var g = ao[an];
                g.row = -1;
                var d = Y.getCollisionAppointments(g, ao);
                d.sort(Y._sortAppointmentsByFrom);
                var t = d.indexOf(g);
                if (t >= 0) {
                    for (var aj = t; aj < d.length; aj++) {
                        d[aj].row = -1
                    }
                }
                for (var ak = 0; ak < C; ak++) {
                    var o = ak;
                    for (var P in d) {
                        if (P == "indexOf") {
                            break
                        }
                        var U = d[P];
                        if (U.row == -1 && !Y.isBusyRow(o, d)) {
                            U.row = o;
                            var al = C;
                            var c = Y.getMaxTimelineAppointments(d, T, w, ac);
                            if (al > c) {
                                al = c
                            }
                            U.rowsCount = al
                        }
                    }
                }
            }
            for (var ak = 0; ak < E.length; ak++) {
                var g = E[ak];
                var d = Y.getCollisionAppointments(g, E);
                d.sort(Y._sortAppointmentsByFrom);
                var n = 1;
                for (var P in d) {
                    if (P == "indexOf") {
                        break
                    }
                    var K = d[P];
                    n = Math.max(n, K.rowsCount)
                }
                for (var P in d) {
                    if (P == "indexOf") {
                        break
                    }
                    var K = d[P];
                    K.rowsCount = n
                }
                if (d.length == 1) {
                    g.rowSpan = n
                } else {
                    var z = 0;
                    var f = true;
                    for (var aj = g.row; aj < n; aj++) {
                        for (var P in d) {
                            if (P == "indexOf") {
                                break
                            }
                            var U = d[P];
                            if (U == g) {
                                continue
                            }
                            if (U.row == aj) {
                                f = false
                            }
                        }
                        if (!f) {
                            break
                        }
                        z++
                    }
                    g.rowSpan = z
                }
            }
            for (var aa = 0; aa < E.length; aa++) {
                var Z = h;
                var g = E[aa];
                g.height = Z;
                var y = 2 + (3 + Z) * g.row;
                g.y = g.y + y;
                g.x += 1;
                g.width -= 5;
                var e = Y._views[Y._view].type;
                var X = Y._views[Y._view];
                if (e == "timelineMonthView" && X.appointmentsRenderMode) {
                    if ((g.appointment.from.hour() != 0 || g.appointment.to.hour() != 23)) {
                        if (!Y.rtl) {
                            var F = parseFloat(Y.cellWidth / 24) * (g.appointment.from.hour()) + parseFloat(Y.cellWidth / 48) * (g.appointment.from.minute() / 30);
                            var G = parseFloat(Y.cellWidth / 24) * (g.appointment.to.hour()) + parseFloat(Y.cellWidth / 48) * (g.appointment.to.minute() / 30);
                            g.timewidth = g.width;
                            g.timex = F;
                            g.timewidth -= F;
                            g.timewidth -= Y.cellWidth;
                            g.timewidth += G;
                            if (X.appointmentsRenderMode == "exactTime") {
                                g.width = g.timewidth;
                                if (Y.date.month() === g.appointment.from.month()) {
                                    g.x += F
                                } else {
                                    g.width = F + g.timewidth
                                }
                                if (g.appointment.duration().days() < 1) {
                                    if (g.width < 15) {
                                        g.width = 15;
                                        if (F + 15 > Y.cellWidth) {
                                            var D = Y.cellWidth - F - 15;
                                            g.x += D
                                        }
                                    }
                                }
                            }
                        } else {
                            var F = parseFloat(Y.cellWidth / 24) * (g.appointment.to.hour()) + parseFloat(Y.cellWidth / 48) * (g.appointment.to.minute() / 30);
                            var G = (parseFloat(Y.cellWidth / 24) * (g.appointment.from.hour()) + parseFloat(Y.cellWidth / 48) * (g.appointment.from.minute() / 30));
                            if (F > 0) {
                                F = Y.cellWidth - F
                            }
                            if (X.appointmentsRenderMode == "exactTime") {
                                g.x += F;
                                g.width -= F;
                                g.width -= G
                            }
                            if (g.appointment.duration().days() < 1) {
                                if (g.width < 15) {
                                    g.width = 15
                                }
                            }
                            g.timewidth = g.width;
                            g.timex = F
                        }
                    }
                } else {
                    if (X.appointmentsRenderMode) {
                        if (X.appointmentsRenderMode == "exactTime") {
                            var ae = Y.getMinutesPerScale();
                            if (g.appointment.from.minute() % ae != 0) {
                                var au = g.appointment.from.minute() % ae;
                                var F = parseFloat(Y.cellWidth / ae) * au;
                                if (Y.rtl) {
                                    var F = parseFloat(Y.cellWidth / ae) * au
                                }
                            } else {
                                var F = 0
                            }
                            if (g.appointment.to.minute() % ae != 0) {
                                var au = g.appointment.to.minute() % ae;
                                var G = Y.cellWidth - parseFloat(Y.cellWidth / ae) * au;
                                if (Y.rtl) {
                                    var G = Y.cellWidth - parseFloat(Y.cellWidth / ae) * au
                                }
                            } else {
                                G = 0
                            }
                            if (!Y.rtl) {
                                g.x += F;
                                g.width -= F;
                                g.width -= G
                            } else {
                                g.x += G;
                                g.width -= F;
                                g.width -= G
                            }
                        }
                    }
                }
            }
            var ah = "";
            for (var aa = 0; aa < E.length; aa++) {
                var ai = E[aa];
                var I = "";
                var J = "auto";
                var X = Y._views[Y._view];
                var q = ai.appointment.from;
                var at = ai.appointment.to;
                if (X.timeRuler && X.timeRuler.formatString) {
                    J = X.timeRuler.formatString
                }
                var W = ai.appointment.background;
                var O = ai.appointment.subject ? ai.appointment.subject : "(No Title)";
                var u = ai.appointment.location;
                if (u && u.length > 1) {
                    u = ", " + u
                }
                var H = ai.appointment.color;
                var k = ai.appointment.resourceId;
                var ad = Y.getColors(Y._resources.indexOf(k));
                var af = " data-resourceId='" + k + "' ";
                var S = ai.appointment.borderColor;
                if (!W) {
                    W = ad.background
                }
                if (!S) {
                    S = ad.border
                }
                if (!H) {
                    H = ad.color
                }
                var b = ai.appointment.isRecurrentAppointment();
                var s = ai.appointment.isException();
                var am = "";
                var v = Y.toTP("jqx-scheduler-appointment-status");
                var N = "";
                var M = Y.statuses[ai.appointment.status];
                var l = false;
                if (M) {
                    if (M == "transparent") {
                        l = false
                    } else {
                        N = "<div style='background: " + M + "; border-right-color: " + S + "' class='" + v + "'></div>";
                        if (M == "tentative") {
                            v = Y.toTP("jqx-scheduler-appointment-status jqx-scheduler-appointment-status-stripes");
                            N = "<div style='background-color: " + S + "; border-right-color: " + S + "' class='" + v + "'></div>"
                        }
                        l = true
                    }
                }
                var A = "";
                if (Y.rtl) {
                    var v = Y.toTP("jqx-scheduler-appointment-status-rtl jqx-scheduler-appointment-status");
                    N = "<div style='background: " + M + "; border-left-color: " + S + "' class='" + v + "'></div>";
                    if (M == "tentative") {
                        v = Y.toTP("jqx-scheduler-appointment-status-rtl jqx-scheduler-appointment-status jqx-scheduler-appointment-status-stripes");
                        N = "<div style='background-color: " + S + "; border-left-color: " + S + "' class='" + v + "'></div>"
                    }
                    A = N;
                    N = ""
                }
                var R = "";
                var L = O + "<br/>" + u;
                if (Y.renderAppointment) {
                    var ar = Y.renderAppointment({
                        appointment: ai.appointment.boundAppointment,
                        textColor: H,
                        background: W,
                        borderColor: S,
                        html: L,
                        cssClass: "",
                        style: "",
                        width: ai.width,
                        height: ai.height,
                        view: Y._views[Y._view].type
                    });
                    if (ar) {
                        var I = ar.html;
                        if (I != L) {
                            L = I
                        }
                        H = ar.textColor;
                        W = ar.background;
                        S = ar.borderColor;
                        if (ar.cssClass) {
                            R = ar.cssClass + " "
                        }
                        if (ar.style != "") {
                            var ad = Y.getAppointmentColors(ar.style);
                            W = ad.background;
                            S = ad.border;
                            H = ad.color
                        }
                    }
                }
                if (am === "") {
                    if (l) {
                        var am = "<div style='white-space:nowrap;' class='" + Y.toTP("jqx-scheduler-appointment-content") + "'>" + N + "<div class='" + Y.toTP("jqx-scheduler-appointment-inner-content") + "'>" + L + "</div>" + A + "</div>"
                    } else {
                        var am = "<div style='white-space:nowrap;' class='" + Y.toTP("jqx-scheduler-appointment-content") + "'><div class='" + Y.toTP("jqx-scheduler-appointment-inner-content") + "'>" + L + "</div></div>"
                    }
                }
                var aq = "";
                if (Y.rtl) {
                    aq = Y.toTP("jqx-rtl jqx-scheduler-appointment-rtl") + " "
                }
                if (s) {
                    var i = H.toLowerCase() == "white" ? Y.toTP("jqx-icon-recurrence-exception-white") : Y.toTP("jqx-icon-recurrence-exception");
                    I = "<div data-key='" + ai.appointment.id + "'" + af + "class='" + aq + R + Y.toTP("jqx-scheduler-appointment jqx-rc-all") + "' style='position:absolute; z-index: 399; left: " + ai.x + "px; top: " + ai.y + "px; width: " + ai.width + "px; height: " + ai.height + "px; line-height: " + ai.height + "px; border-color:" + S + "; color:" + H + "; background:" + W + ";'><div class='" + i + "'></div>" + am + "<div class='" + Y.toTP("jqx-scheduler-appointment-resize-indicator jqx-scheduler-appointment-left-resize-indicator") + "'></div><div class='" + Y.toTP("jqx-scheduler-appointment-resize-indicator jqx-scheduler-appointment-right-resize-indicator") + "'></div>"
                } else {
                    if (b) {
                        var r = H.toLowerCase() == "white" ? Y.toTP("jqx-icon-recurrence-white") : Y.toTP("jqx-icon-recurrence");
                        I = "<div data-key='" + ai.appointment.id + "'" + af + "class='" + aq + R + Y.toTP("jqx-scheduler-appointment jqx-rc-all") + "' style='position:absolute; z-index: 399; left: " + ai.x + "px; top: " + ai.y + "px; width: " + ai.width + "px; height: " + ai.height + "px; line-height: " + ai.height + "px; border-color:" + S + "; color:" + H + "; background:" + W + ";'><div class='" + r + "'></div>" + am + "<div class='" + Y.toTP("jqx-scheduler-appointment-resize-indicator jqx-scheduler-appointment-left-resize-indicator") + "'></div><div class='" + Y.toTP("jqx-scheduler-appointment-resize-indicator jqx-scheduler-appointment-right-resize-indicator") + "'></div>"
                    } else {
                        I = "<div data-key='" + ai.appointment.id + "'" + af + "class='" + aq + R + Y.toTP("jqx-scheduler-appointment jqx-rc-all") + "' style='position:absolute; z-index: 399; left: " + ai.x + "px; top: " + ai.y + "px; width: " + ai.width + "px; height: " + ai.height + "px; line-height: " + ai.height + "px; border-color:" + S + "; color:" + H + "; background:" + W + ";'>" + am + "<div class='" + Y.toTP("jqx-scheduler-appointment-resize-indicator jqx-scheduler-appointment-left-resize-indicator") + "'></div><div class='" + Y.toTP("jqx-scheduler-appointment-resize-indicator jqx-scheduler-appointment-right-resize-indicator") + "'></div>"
                    }
                }
                ah = I;
                var Q = a(I);
                Q.appendTo(this.table);
                ai.element = Q;
                if (this.appointmentTooltips) {
                    if (!ai.appointment.tooltip) {
                        var V = ai.appointment.subject;
                        if (V) {
                            var u = ai.appointment.location;
                            if (u) {
                                V += "\n" + u
                            }
                            Q[0].setAttribute("title", V)
                        }
                    } else {
                        Q[0].setAttribute("title", ai.appointment.tooltip)
                    }
                }
            }
            var ag = Y.table.find(".jqx-scheduler-appointment");
            var B = function(m) {
                for (var j = 0; j < ag.length; j++) {
                    var p = ag[j].getAttribute("data-key");
                    if (p == m) {
                        return ag[j]
                    }
                }
            };
            for (var aa = 0; aa < E.length; aa++) {
                var ai = E[aa];
                var ab = false;
                var Q = a(B(ai.appointment.id));
                a.each(ai.cells, function(p) {
                    var m = a(this.cell);
                    var aw = ai.cellY;
                    var av = ai.cellX;
                    var j = ai.cellHeight;
                    if (!m[0].appointments) {
                        m[0].appointments = new Array()
                    }
                    m[0].appointments.push({
                        ui: Q,
                        appointment: ai
                    });
                    Q = Q;
                    if (ai.y + ai.height >= aw + j - 12) {
                        Q[0].style.visibility = "hidden";
                        var x = m.find(".jqx-icon-arrow-down");
                        if (x.length > 0) {
                            x[0].style.display = "block";
                            x[0].mousedown = function() {
                                if (Y.openedMonthCellPopup) {
                                    Y.openedMonthCellPopup.remove()
                                }
                                var ax = a("<div></div>");
                                var aA = new a.jqx.date(m.attr("data-date"), Y.timeZone);
                                var aD = a("<div class='" + Y.toTP("jqx-scheduler-month-cell") + "'><span style='float: right; cursor: pointer; width:16px; height: 16px;' class='" + Y.toTP("jqx-icon-close") + "'></span></div>");
                                aD.height(16);
                                aD.find("span")[0].mousedown = function() {
                                    ax.remove()
                                };
                                aD.addClass(Y.toTP("jqx-widget-header"));
                                ax.addClass(Y.toTP("jqx-widget"));
                                ax.addClass(Y.toTP("jqx-window"));
                                ax.addClass(Y.toTP("jqx-scheduler-month-cell-popup"));
                                ax.addClass(Y.toTP("jqx-popup"));
                                var aE = a("<div></div>");
                                ax.append(aD);
                                ax.append(aE);
                                aE.addClass(Y.toTP("jqx-widget-content"));
                                var ay = m.width();
                                var aG = 21;
                                for (var aB = 0; aB < m[0].appointments.length; aB++) {
                                    var az = m[0].appointments[aB].ui.clone(true);
                                    az.css("left", "3px");
                                    az.css("top", "0px");
                                    az.css("margin-top", "2px");
                                    az.css("position", "relative");
                                    az.css("visibility", "visible");
                                    az.width(ay - 6);
                                    az.click(function(aH) {
                                        var aI = Y.getJQXAppointmentByElement(Y.getAppointmentElement(aH.target));
                                        Y._raiseEvent("appointmentClick", {
                                            appointment: aI.boundAppointment
                                        })
                                    });
                                    az.dblclick(function(aI) {
                                        var aJ = Y.getJQXAppointmentByElement(Y.getAppointmentElement(aI.target));
                                        if (!aJ.readOnly && !Y.editRecurrenceDialog.jqxWindow("isOpen") && (!Y._editDialog || (Y._editDialog && !Y._editDialog.jqxWindow("isOpen")))) {
                                            var aH = Y._initDialog(aJ);
                                            if (aH !== false) {
                                                Y._openDialog()
                                            }
                                        }
                                        Y._raiseEvent("appointmentDoubleClick", {
                                            appointment: aJ.boundAppointment
                                        })
                                    });
                                    aG += az.outerHeight() + 4;
                                    aE.append(az)
                                }
                                ax.css("overflow", "hidden");
                                ax.css("position", "absolute");
                                var aF = Y.table.height() - aw - 25;
                                if (aF < j) {
                                    aF = j
                                }
                                ax.css("max-height", aF);
                                ax.height(aG);
                                ax.width(ay);
                                ax.css("z-index", "9999");
                                var aC = m.position();
                                ax.css("top", aC.top);
                                ax.css("left", aC.left);
                                Y.table.append(ax);
                                Y.openedMonthCellPopup = ax
                            }
                        }
                    }
                })
            }
        },
        _renderMonthAppointments: function() {
            var K = this;
            var U = K._views[K._view].type;
            var J = K._views[K._view];
            var A = new Array();
            var S = this.rows;
            var O = 0;
            if (this.host.find(".jqx-scheduler-month-cell").length > 0) {
                O = a(this.host.find(".jqx-scheduler-month-cell")[0]).height()
            }
            for (var e = 0; e < this.appointmentsToRender.length; e++) {
                var r = this.appointmentsToRender[e];
                var t = a.jqx.scheduler.utilities.getStartOfDay(r.from);
                var W = a.jqx.scheduler.utilities.getEndOfDay(r.to);
                var c = r.allDay;
                var v = K._getDateByString;
                var F = new Array();
                var q = new Array();
                var B = t.toDate().valueOf();
                var k = W.toDate().valueOf();
                var X = function(j, i) {
                    if (j.date < i.date) {
                        return -1
                    }
                    if (j.date == i.date) {
                        return 0
                    }
                    if (j.date > i.date) {
                        return 1
                    }
                };
                var u = -1;
                var o = r.resourceId;
                var h = K._resources.indexOf(o);
                if (K.resources && K.resources.orientation == "none") {
                    h = -1
                }
                for (var Q = 0; Q < K.rows.length; Q++) {
                    var w = K.rows[Q].cells;
                    for (var P = 0; P < w.length; P++) {
                        var m = w[P].getAttribute("data-date");
                        var R = v(m);
                        var l = R.valueOf();
                        if (l > W) {
                            continue
                        }
                        w[P].appointments = new Array();
                        if (h != -1) {
                            if ((1 + h) != w[P].getAttribute("data-view")) {
                                continue
                            }
                        }
                        if (B <= l && l < k) {
                            if (u != Q && u != -1) {
                                F.sort(X);
                                q.push(F);
                                F = new Array()
                            }
                            F.push({
                                cell: w[P],
                                date: R
                            });
                            u = Q
                        }
                    }
                }
                F.sort(X);
                q.push(F);
                var C = new Array();
                for (var Q = 0; Q < q.length; Q++) {
                    var w = q[Q];
                    if (w.length == 0) {
                        break
                    }
                    var n = K.appointmentsMinHeight;
                    if (K.isTouchDevice()) {
                        n = K.touchAppointmentsMinHeight
                    }
                    if (J.appointmentHeight) {
                        n = J.appointmentHeight
                    }
                    var d = n;
                    var E = a(w[w.length - 1].cell).position().left;
                    var b = E - a(w[0].cell).position().left + K.columns.records[0].width;
                    if (J.showWeekNumbers) {
                        var b = E - a(w[0].cell).position().left + K.columns.records[1].width
                    }
                    var G = a(w[0].cell).position();
                    var M = G.left;
                    var L = G.top + O;
                    var p = a.jqx.scheduler.utilities.getEndOfDay(new a.jqx.date(w[w.length - 1].date, K.timeZone));
                    var D = new a.jqx.date(w[0].date, K.timeZone);
                    if (K.rtl) {
                        var p = a.jqx.scheduler.utilities.getEndOfDay(new a.jqx.date(w[0].date, K.timeZone));
                        var D = new a.jqx.date(w[w.length - 1].date, K.timeZone);
                        var G = a(w[w.length - 1].cell).position();
                        var M = G.left;
                        var L = G.top + O;
                        var E = a(w[0].cell).position().left;
                        var b = E - a(w[w.length - 1].cell).position().left + K.columns.records[0].width;
                        if (J.showWeekNumbers) {
                            var b = E - a(w[w.length - 1].cell).position().left + K.columns.records[1].width
                        }
                    }
                    var V = {
                        cells: w,
                        cellY: parseInt(G.top),
                        cellX: parseInt(G.left),
                        lastCellY: parseInt(G.top),
                        lastCellX: E,
                        x: M,
                        y: L,
                        height: d,
                        width: b,
                        appointment: r,
                        from: D,
                        to: p
                    };
                    C.push(V);
                    A.push(V)
                }
                r.elements = C;
                if (r.rootAppointment) {
                    r.rootAppointment.elements = r.rootAppointment.elements.concat(r.elements)
                }
            }
            var z = this.getViewStart();
            var N = this.getViewEnd();
            if (this._resources.length < 2 || this.resources.orientation == "none") {
                var T = new Array();
                var f = z;
                var H = 0;
                while (f < N) {
                    T[H] = new Array();
                    for (var Q = 0; Q < A.length; Q++) {
                        var s = A[Q];
                        if (f <= s.from && s.to < f.addDays(7)) {
                            s.row = -1;
                            s.rowSpan = 1;
                            T[H].push(s)
                        }
                    }
                    H++;
                    f = f.addDays(7)
                }
                for (var Q = 0; Q < T.length; Q++) {
                    if (T[Q].length > 0) {
                        this._renderUIMonthAppointments(T[Q])
                    }
                }
            } else {
                for (var P = 0; P < this._resources.length; P++) {
                    var I = this._resources[P];
                    var g = new Array();
                    var T = new Array();
                    var f = z;
                    var H = 0;
                    while (f < N) {
                        T[H] = new Array();
                        for (var Q = 0; Q < A.length; Q++) {
                            var s = A[Q];
                            if (f <= s.from && s.to < f.addDays(7)) {
                                s.row = -1;
                                s.rowSpan = 1;
                                if (s.appointment.resourceId == I) {
                                    T[H].push(s)
                                }
                            }
                        }
                        H++;
                        f = f.addDays(7)
                    }
                    for (var Q = 0; Q < T.length; Q++) {
                        if (T[Q].length > 0) {
                            this._renderUIMonthAppointments(T[Q])
                        }
                    }
                }
            }
        },
        _getMonthAppointmentsPerWeek: function() {
            var M = this;
            var W = M._views[M._view].type;
            var L = M._views[M._view];
            var C = new Array();
            var U = this.rows;
            var Q = 0;
            if (this.host.find(".jqx-scheduler-month-cell").length > 0) {
                Q = a(this.host.find(".jqx-scheduler-month-cell")[0]).height()
            }
            if (!M.rows) {
                return new Array()
            }
            var B = this.getViewStart();
            var P = this.getViewEnd();
            for (var e = 0; e < this.appointmentsToRender.length; e++) {
                var s = this.appointmentsToRender[e];
                var u = a.jqx.scheduler.utilities.getStartOfDay(s.from);
                var Y = a.jqx.scheduler.utilities.getEndOfDay(s.to);
                var c = s.allDay;
                var z = M._getDateByString;
                var H = new Array();
                var r = new Array();
                var D = u.toDate().valueOf();
                var l = Y.toDate().valueOf();
                var Z = function(j, i) {
                    if (j.date < i.date) {
                        return -1
                    }
                    if (j.date == i.date) {
                        return 0
                    }
                    if (j.date > i.date) {
                        return 1
                    }
                };
                var v = -1;
                var p = s.resourceId;
                var k = M._resources.indexOf(p);
                if (M.resources && M.resources.orientation == "none") {
                    k = -1
                }
                for (var S = 0; S < M.rows.length; S++) {
                    var A = M.rows[S].cells;
                    for (var R = 0; R < A.length; R++) {
                        var n = A[R].getAttribute("data-date");
                        var T = B.addDays(S * 7 + R).toDate();
                        var m = T.valueOf();
                        if (m > Y) {
                            continue
                        }
                        if (k != -1) {
                            if ((1 + k) != A[R].getAttribute("data-view")) {
                                continue
                            }
                        }
                        if (D <= m && m < l) {
                            if (v != S && v != -1) {
                                H.sort(Z);
                                r.push(H);
                                H = new Array()
                            }
                            H.push({
                                cell: A[R],
                                date: T
                            });
                            v = S
                        }
                    }
                }
                H.sort(Z);
                r.push(H);
                var E = new Array();
                for (var S = 0; S < r.length; S++) {
                    var A = r[S];
                    if (A.length == 0) {
                        break
                    }
                    var o = M.appointmentsMinHeight;
                    if (M.isTouchDevice()) {
                        o = M.touchAppointmentsMinHeight
                    }
                    if (L.appointmentHeight) {
                        o = L.appointmentHeight
                    }
                    var d = o;
                    var G = a(A[A.length - 1].cell).position().left;
                    var b = G - a(A[0].cell).position().left + M.columns.records[0].width;
                    if (L.showWeekNumbers) {
                        var b = G - a(A[0].cell).position().left + M.columns.records[1].width
                    }
                    var I = a(A[0].cell).position();
                    var O = I.left;
                    var N = I.top + Q;
                    var q = a.jqx.scheduler.utilities.getEndOfDay(new a.jqx.date(A[A.length - 1].date, M.timeZone));
                    var F = new a.jqx.date(A[0].date, M.timeZone);
                    if (M.rtl) {
                        var q = a.jqx.scheduler.utilities.getEndOfDay(new a.jqx.date(A[0].date, M.timeZone));
                        var F = new a.jqx.date(A[A.length - 1].date, M.timeZone);
                        var I = a(A[A.length - 1].cell).position();
                        var O = I.left;
                        var N = I.top + Q;
                        var G = a(A[0].cell).position().left;
                        var b = G - a(A[A.length - 1].cell).position().left + M.columns.records[0].width;
                        if (L.showWeekNumbers) {
                            var b = G - a(A[A.length - 1].cell).position().left + M.columns.records[1].width
                        }
                    }
                    var X = {
                        cells: A,
                        cellY: parseInt(I.top),
                        cellX: parseInt(I.left),
                        lastCellY: parseInt(I.top),
                        lastCellX: G,
                        x: O,
                        y: N,
                        height: d,
                        width: b,
                        appointment: s,
                        from: F,
                        to: q
                    };
                    E.push(X);
                    C.push(X)
                }
            }
            if (this._resources.length < 2 || this.resources.orientation == "none") {
                var V = new Array();
                var g = B;
                var J = 0;
                while (g < P) {
                    V[J] = new Array();
                    for (var S = 0; S < C.length; S++) {
                        var t = C[S];
                        if (g <= t.from && t.to < g.addDays(7)) {
                            t.row = -1;
                            t.rowSpan = 1;
                            V[J].push(t)
                        }
                    }
                    J++;
                    g = g.addDays(7)
                }
                var f = new Array();
                for (var S = 0; S < V.length; S++) {
                    if (V[S].length > 0) {
                        var w = this.getMaxMonthAppointments(V[S]);
                        var o = M.appointmentsMinHeight;
                        if (M.isTouchDevice()) {
                            o = M.touchAppointmentsMinHeight
                        }
                        if (L.appointmentHeight) {
                            o = L.appointmentHeight
                        }
                        f.push((w * (o + 3)) + 22)
                    } else {
                        f.push("auto")
                    }
                }
                return f
            } else {
                var f = new Array();
                for (var R = 0; R < this._resources.length; R++) {
                    var K = this._resources[R];
                    var h = new Array();
                    var V = new Array();
                    var g = B;
                    var J = 0;
                    while (g < P) {
                        V[J] = new Array();
                        for (var S = 0; S < C.length; S++) {
                            var t = C[S];
                            if (g <= t.from && t.to < g.addDays(7)) {
                                t.row = -1;
                                t.rowSpan = 1;
                                if (t.appointment.resourceId == K) {
                                    V[J].push(t)
                                }
                            }
                        }
                        J++;
                        g = g.addDays(7)
                    }
                    for (var S = 0; S < V.length; S++) {
                        if (V[S].length > 0) {
                            var w = this.getMaxMonthAppointments(V[S]);
                            f.push((w * (o + 3)) + 22)
                        } else {
                            f.push("auto")
                        }
                    }
                    return f
                }
            }
        },
        _renderUIMonthAppointments: function(ar) {
            var ab = this._views[this._view];
            var I = ar;
            var B = this.getViewStart();
            var ah = this.getViewEnd();
            var G = 1;
            var ac = this;
            G = this.getMaxMonthAppointments(ar);
            var i = ac.appointmentsMinHeight;
            if (ac.isTouchDevice()) {
                i = ac.touchAppointmentsMinHeight
            }
            if (ab.appointmentHeight) {
                i = ab.appointmentHeight
            }
            var f = this._sortAppointmentsByFrom;
            if (this.rtl) {
                f = this._sortAppointmentsByTo
            }
            for (var aq = 0; aq < ar.length; aq++) {
                var h = ar[aq];
                h.row = -1;
                var d = this.getCollisionAppointments(h, ar);
                d.sort(f);
                var u = d.indexOf(h);
                if (u >= 0) {
                    for (var ak = u; ak < d.length; ak++) {
                        d[ak].row = -1
                    }
                }
                for (var an = 0; an < G; an++) {
                    var q = an;
                    for (var U in d) {
                        if (U == "indexOf") {
                            break
                        }
                        var Y = d[U];
                        if (Y.row == -1 && !this.isBusyRow(q, d)) {
                            Y.row = q;
                            var ao = G;
                            var c = this.getMaxMonthAppointments(d);
                            if (ao > c) {
                                ao = c
                            }
                            Y.rowsCount = ao
                        }
                    }
                }
            }
            for (var an = 0; an < I.length; an++) {
                var h = I[an];
                var d = this.getCollisionAppointments(h, I);
                d.sort(f);
                var o = 1;
                for (var U in d) {
                    if (U == "indexOf") {
                        break
                    }
                    var O = d[U];
                    o = Math.max(o, O.rowsCount)
                }
                for (var U in d) {
                    if (U == "indexOf") {
                        break
                    }
                    var O = d[U];
                    O.rowsCount = o
                }
                if (d.length == 1) {
                    h.rowSpan = o
                } else {
                    var E = 0;
                    var g = true;
                    for (var ak = h.row; ak < o; ak++) {
                        for (var U in d) {
                            if (U == "indexOf") {
                                break
                            }
                            var Y = d[U];
                            if (Y == h) {
                                continue
                            }
                            if (Y.row == ak) {
                                g = false
                            }
                        }
                        if (!g) {
                            break
                        }
                        E++
                    }
                    h.rowSpan = E
                }
            }
            for (var ae = 0; ae < I.length; ae++) {
                var ad = i;
                var h = I[ae];
                h.height = ad;
                var C = 2 + (3 + ad) * h.row;
                h.y = h.y + C;
                h.x += 1;
                h.width -= 5;
                if (h.appointment.from.hour() != 0 || h.appointment.to.hour() != 23) {
                    if (!ac.rtl) {
                        var K = parseFloat(ac.cellWidth / 24) * (h.appointment.from.hour()) + parseFloat(ac.cellWidth / 48) * (h.appointment.from.minute() / 30);
                        h.timewidth = h.width;
                        if (h.from.clearTime().toString() == h.appointment.from.clearTime().toString()) {
                            h.timex = K
                        } else {
                            K = 0
                        }
                        if (h.appointment.elements.length > 1) {
                            if (h.appointment.elements[0] != h) {
                                K = 0
                            }
                        }
                        var L = parseFloat(ac.cellWidth / 24) * (h.appointment.to.hour()) + parseFloat(ac.cellWidth / 48) * (h.appointment.to.minute() / 30);
                        if (h.appointment.elements.length > 1) {
                            if (h.appointment.elements[h.appointment.elements.length - 1] != h) {
                                L = 0
                            }
                        }
                        h.timewidth -= K;
                        if (L > 0) {
                            h.timewidth -= ac.cellWidth;
                            h.timewidth += L
                        }
                        if (ab.appointmentsRenderMode == "exactTime") {
                            if (h.from.clearTime().toString() == h.appointment.from.clearTime().toString()) {
                                h.x += K
                            }
                            h.width = h.timewidth;
                            if (h.appointment.duration().days() < 1) {
                                if (h.width < 15) {
                                    h.width = 15;
                                    if (K + 15 > ac.cellWidth) {
                                        var H = ac.cellWidth - K - 15;
                                        h.x += H
                                    }
                                }
                            }
                        }
                    } else {
                        var K = parseFloat(ac.cellWidth / 24) * (h.appointment.to.hour()) + parseFloat(ac.cellWidth / 48) * (h.appointment.to.minute() / 30);
                        var L = parseFloat(ac.cellWidth / 24) * (h.appointment.from.hour()) + parseFloat(ac.cellWidth / 48) * (h.appointment.from.minute() / 30);
                        if (h.appointment.elements.length > 1) {
                            if (h == h.appointment.elements[0]) {
                                if (L > 0) {
                                    if (ab.appointmentsRenderMode == "exactTime") {
                                        h.width -= (ac.cellWidth - K);
                                        h.width -= L
                                    } else {
                                        h.timewidth = h.width - ac.cellWidth + K - L
                                    }
                                } else {
                                    h.timewidth = h.width;
                                    h.timex = 0
                                }
                            } else {
                                if (h == h.appointment.elements[h.appointment.elements.length - 1]) {
                                    if (ab.appointmentsRenderMode == "exactTime") {
                                        h.x += ac.cellWidth;
                                        h.x -= K;
                                        h.width += K;
                                        h.width -= ac.cellWidth
                                    }
                                    h.timewidth = h.width - ac.cellWidth + K;
                                    h.timex = ac.cellWidth - K
                                }
                            }
                        } else {
                            if (ab.appointmentsRenderMode == "exactTime") {
                                h.x += ac.cellWidth;
                                h.x -= K;
                                h.width -= (ac.cellWidth - K);
                                h.width -= L
                            }
                            if (h.appointment.duration().days() < 1) {
                                if (h.width < 15) {
                                    h.width = 15
                                }
                            }
                            h.timewidth = h.width - ac.cellWidth + K - L;
                            h.timex = ac.cellWidth - K
                        }
                    }
                }
            }
            for (var ae = 0; ae < I.length; ae++) {
                var al = I[ae];
                var N = "";
                var P = "auto";
                var ab = this._views[this._view];
                var r = al.appointment.from;
                var av = al.appointment.to;
                var P = "auto";
                var ab = this._views[this._view];
                var r = al.appointment.from;
                var av = al.appointment.to;
                if (ab.timeRuler && ab.timeRuler.formatString) {
                    P = ab.timeRuler.formatString
                }
                var ag = P;
                var A = P;
                if (P === "auto") {
                    if ((r.hour() == 0 && r.minute() == 0) || (r.hour() == 12 && r.minute() == 0)) {
                        var ag = "hh tt"
                    } else {
                        var ag = "hh:mm"
                    }
                    if ((av.hour() == 0 && av.minute() == 0) || (av.hour() == 12 && av.minute() == 0)) {
                        var A = "hh tt"
                    } else {
                        var A = "hh:mm"
                    }
                }
                var w = r.toString(ag);
                var y = av.toString(A);
                var J = al.appointment.duration();
                var e = al.appointment.allDay || (J.hours === 23 && J.minutes === 59 && J.seconds === 59);
                var aa = al.appointment.background;
                var T = al.appointment.subject ? al.appointment.subject : "(No Title)";
                var M = al.appointment.color;
                var l = al.appointment.resourceId;
                var ai = ac.getColors(ac._resources.indexOf(l));
                var aj = " data-resourceId='" + l + "' ";
                var X = al.appointment.borderColor;
                var v = al.appointment.location;
                if (v && v.length > 1) {
                    v = ", " + v
                }
                if (!aa) {
                    aa = ai.background
                }
                if (!X) {
                    X = ai.border
                }
                if (!M) {
                    M = ai.color
                }
                var b = al.appointment.isRecurrentAppointment();
                var t = al.appointment.isException();
                var ap = "";
                var z = ac.toTP("jqx-scheduler-appointment-status");
                var S = "";
                var R = ac.statuses[al.appointment.status];
                var n = false;
                if (R) {
                    if (R == "transparent") {
                        n = false
                    } else {
                        S = "<div style='background: " + R + "; border-right-color: " + X + "' class='" + z + "'></div>";
                        if (R == "tentative") {
                            z = ac.toTP("jqx-scheduler-appointment-status jqx-scheduler-appointment-status-stripes");
                            S = "<div style='background-color: " + X + "; border-right-color: " + X + "' class='" + z + "'></div>"
                        }
                        n = true
                    }
                }
                var D = ac.toTP("jqx-scheduler-appointment-duration-status");
                var am = "<div style='width: " + al.timewidth + "px; left: " + al.timex + "px;' class='" + D + "'></div>";
                if (e) {
                    am = ""
                }
                if (ab.appointmentsRenderMode != "exactTimeStatus") {
                    am = ""
                }
                var F = "";
                if (ac.rtl) {
                    var z = ac.toTP("jqx-scheduler-appointment-status-rtl jqx-scheduler-appointment-status");
                    S = "<div style='background: " + R + "; border-left-color: " + X + "' class='" + z + "'></div>";
                    if (R == "tentative") {
                        z = ac.toTP("jqx-scheduler-appointment-status-rtl jqx-scheduler-appointment-status jqx-scheduler-appointment-status-stripes");
                        S = "<div style='background-color: " + X + "; border-left-color: " + X + "' class='" + z + "'></div>"
                    }
                    F = S;
                    S = ""
                }
                var W = "";
                var Q = T + v;
                if (!e) {
                    Q = T + v + am
                }
                if (ac.renderAppointment) {
                    var au = ac.renderAppointment({
                        appointment: al.appointment.boundAppointment,
                        textColor: M,
                        background: aa,
                        borderColor: X,
                        html: Q,
                        cssClass: "",
                        style: "",
                        width: al.width,
                        height: al.height,
                        view: ac._views[ac._view].type
                    });
                    if (au) {
                        var N = au.html;
                        if (N != Q) {
                            Q = N
                        }
                        M = au.textColor;
                        aa = au.background;
                        X = au.borderColor;
                        if (au.cssClass) {
                            W = au.cssClass + " "
                        }
                        if (au.style != "") {
                            var ai = ac.getAppointmentColors(au.style);
                            aa = ai.background;
                            X = ai.border;
                            M = ai.color
                        }
                    }
                }
                if (ap === "") {
                    if (n) {
                        var ap = "<div style='white-space:nowrap;' class='" + ac.toTP("jqx-scheduler-appointment-content") + "'>" + S + "<div class='" + ac.toTP("jqx-scheduler-appointment-inner-content") + "'>" + Q + "</div>" + F + "</div>"
                    } else {
                        var ap = "<div style='white-space:nowrap;' class='" + ac.toTP("jqx-scheduler-appointment-content") + "'><div class='" + ac.toTP("jqx-scheduler-appointment-inner-content") + "'>" + Q + "</div></div>"
                    }
                }
                var at = "";
                if (ac.rtl) {
                    at = ac.toTP("jqx-rtl jqx-scheduler-appointment-rtl") + " "
                }
                if (t) {
                    var k = M.toLowerCase() == "white" ? ac.toTP("jqx-icon-recurrence-exception-white") : ac.toTP("jqx-icon-recurrence-exception");
                    N = "<div data-key='" + al.appointment.id + "'" + aj + "class='" + at + W + ac.toTP("jqx-scheduler-appointment jqx-rc-all") + "' style='position:absolute; z-index: 399; left: " + al.x + "px; top: " + al.y + "px; width: " + al.width + "px; line-height: " + al.height + "px; height: " + al.height + "px; border-color:" + X + "; color:" + M + "; background:" + aa + ";'><div class='" + k + "'></div>" + ap + "<div class='" + ac.toTP("jqx-scheduler-appointment-resize-indicator jqx-scheduler-appointment-left-resize-indicator") + "'></div><div class='" + ac.toTP("jqx-scheduler-appointment-resize-indicator jqx-scheduler-appointment-right-resize-indicator") + "'></div>"
                } else {
                    if (b) {
                        var s = M.toLowerCase() == "white" ? ac.toTP("jqx-icon-recurrence-white") : ac.toTP("jqx-icon-recurrence");
                        N = "<div data-key='" + al.appointment.id + "'" + aj + "class='" + at + W + ac.toTP("jqx-scheduler-appointment jqx-rc-all") + "' style='position:absolute; z-index: 399; left: " + al.x + "px; top: " + al.y + "px; width: " + al.width + "px; line-height: " + al.height + "px; height: " + al.height + "px; border-color:" + X + "; color:" + M + "; background:" + aa + ";'><div class='" + s + "'></div>" + ap + "<div class='" + ac.toTP("jqx-scheduler-appointment-resize-indicator jqx-scheduler-appointment-left-resize-indicator") + "'></div><div class='" + ac.toTP("jqx-scheduler-appointment-resize-indicator jqx-scheduler-appointment-right-resize-indicator") + "'></div>"
                    } else {
                        N = "<div data-key='" + al.appointment.id + "'" + aj + "class='" + at + W + ac.toTP("jqx-scheduler-appointment jqx-rc-all") + "' style='position:absolute; z-index: 399; left: " + al.x + "px; top: " + al.y + "px; width: " + al.width + "px; line-height: " + al.height + "px; height: " + al.height + "px; border-color:" + X + "; color:" + M + "; background:" + aa + ";'>" + ap + "<div class='" + ac.toTP("jqx-scheduler-appointment-resize-indicator jqx-scheduler-appointment-left-resize-indicator") + "'></div><div class='" + ac.toTP("jqx-scheduler-appointment-resize-indicator jqx-scheduler-appointment-right-resize-indicator") + "'></div>"
                    }
                }
                var V = a(N);
                V.appendTo(this.table);
                al.element = V;
                if (this.appointmentTooltips) {
                    if (!al.appointment.tooltip) {
                        var Z = al.appointment.subject;
                        if (w && !e) {
                            Z = w + " - " + y + " " + Z
                        }
                        if (Z) {
                            var v = al.appointment.location;
                            if (v) {
                                Z += "\n" + v
                            }
                            V[0].setAttribute("title", Z)
                        }
                    } else {
                        V[0].setAttribute("title", al.appointment.tooltip)
                    }
                }
                var af = false;
                a.each(al.cells, function() {
                    var m = a(this.cell);
                    var j = m.position();
                    if (!m[0].appointments) {
                        m[0].appointments = new Array()
                    }
                    m[0].appointments.push({
                        ui: V,
                        appointment: al
                    });
                    if (al.y + al.height + 2 >= j.top + m.height()) {
                        V.css("visibility", "hidden");
                        var p = m.find(".jqx-icon-arrow-down");
                        p.show();
                        if (p[0]) {
                            p[0].mousedown = function() {
                                if (ac.openedMonthCellPopup) {
                                    ac.openedMonthCellPopup.remove()
                                }
                                var aw = a("<div></div>");
                                var aB = m.find("div").clone(true);
                                aB.find("span").removeClass().addClass(ac.toTP("jqx-icon-close"));
                                aB.find("span")[0].mousedown = function() {
                                    aw.remove()
                                };
                                aB.addClass(ac.toTP("jqx-widget-header"));
                                aw.addClass(ac.toTP("jqx-widget"));
                                aw.addClass(ac.toTP("jqx-window"));
                                aw.addClass(ac.toTP("jqx-scheduler-month-cell-popup"));
                                aw.addClass(ac.toTP("jqx-popup"));
                                var az = a("<div></div>");
                                aw.append(aB);
                                aw.append(az);
                                az.addClass(ac.toTP("jqx-widget-content jqx-disableselect"));
                                var ay = m.width();
                                var x = 5 + m.find("div").outerHeight();
                                for (var ax = 0; ax < m[0].appointments.length; ax++) {
                                    var aA = m[0].appointments[ax].ui.clone(true);
                                    aA.css("left", "3px");
                                    aA.css("top", "0px");
                                    aA.css("margin-top", "2px");
                                    aA.css("position", "relative");
                                    aA.css("visibility", "visible");
                                    aA.width(ay - 6);
                                    x += aA.outerHeight() + 4;
                                    az.append(aA);
                                    aA.click(function(aC) {
                                        var aD = ac.getJQXAppointmentByElement(ac.getAppointmentElement(aC.target));
                                        ac._raiseEvent("appointmentClick", {
                                            appointment: aD.boundAppointment
                                        })
                                    });
                                    aA.dblclick(function(aD) {
                                        var aE = ac.getJQXAppointmentByElement(ac.getAppointmentElement(aD.target));
                                        if (!aE.readOnly && !ac.editRecurrenceDialog.jqxWindow("isOpen") && (!ac._editDialog || (ac._editDialog && !ac._editDialog.jqxWindow("isOpen")))) {
                                            var aC = ac._initDialog(aE);
                                            if (aC !== false) {
                                                ac._openDialog()
                                            }
                                        }
                                        ac._raiseEvent("appointmentDoubleClick", {
                                            appointment: aE.boundAppointment
                                        })
                                    })
                                }
                                aw.css("overflow", "hidden");
                                aw.css("position", "absolute");
                                aw.height(x);
                                aw.width(ay);
                                aw.css("z-index", "9999");
                                aw.css("top", j.top);
                                aw.css("left", j.left);
                                ac.table.append(aw);
                                ac.openedMonthCellPopup = aw
                            }
                        }
                    }
                })
            }
        },
        _sortByDate: function(b, e) {
            var d = b.getAttribute("data-date");
            d = this._getDateByString(d);
            var c = e.getAttribute("data-date");
            c = this._getDateByString(c);
            if (d < c) {
                return -1
            }
            if (d > c) {
                return 1
            }
            if (d == c) {
                return 0
            }
        },
        _sortAppointmentsByFrom: function(b, f) {
            if (b.from.equals(f.from)) {
                var d = b.to - b.from;
                var e = d * 10000;
                var d = f.to - f.from;
                var c = d * 10000;
                if (e > c) {
                    return -1
                }
            }
            if (b.from < f.from) {
                return -1
            }
            if (b.from > f.from) {
                return 1
            }
            if (b.from == f.from) {
                return 0
            }
        },
        _sortAppointmentsByTo: function(b, f) {
            if (b.to.equals(f.to)) {
                var d = b.to - b.from;
                var e = d * 10000;
                var d = f.to - f.from;
                var c = d * 10000;
                if (e > c) {
                    return -1
                }
            }
            if (b.to < f.to) {
                return -1
            }
            if (b.to > f.to) {
                return 1
            }
            if (b.to == f.to) {
                return 0
            }
        },
        _sortAppointmentsByResourceId: function(b, f, e) {
            var d = e._resources.indexOf(b.resourceId);
            var c = e._resources.indexOf(f.resourceId);
            if (d == c) {
                return 0
            }
            if (d < c) {
                return -1
            }
            if (d > c) {
                return -1
            }
        },
        isBusyRow: function(e, d) {
            for (var c = 0; c < d.length; c++) {
                var b = d[c];
                if (b.row == e) {
                    return true
                }
            }
            return false
        },
        isBusyColumn: function(e, d) {
            for (var c = 0; c < d.length; c++) {
                var b = d[c];
                if (b.column == e) {
                    return true
                }
            }
            return false
        },
        getMaxTimelineAppointments: function(c, s, f, e) {
            if (c.length == 0) {
                return 1
            }
            var i = this;
            var t = i._views[i._view].type;
            var j = i._views[i._view];
            var k = 1;
            var m = f;
            var u = e;
            var q = this.getMinutesPerScale();
            var n = null;
            var r = null;
            var w = "";
            for (var g in c) {
                if (g == "indexOf") {
                    break
                }
                var d = c[g];
                if (!n) {
                    n = d.from
                }
                if (!r) {
                    r = d.to
                }
                n = Math.min(d.from, n);
                r = Math.max(d.to, r);
                w += d.appointment.id
            }
            w += n;
            w += r;
            if (s[w]) {
                return s[w]
            }
            n = new a.jqx.date(n, i.timeZone);
            r = new a.jqx.date(r, i.timeZone);
            var m = n;
            while (n < r) {
                var p = m;
                if (t === "timelineMonthView") {
                    var b = p.addDays(1)
                } else {
                    var b = p.addMinutes(q)
                }
                var o = 0;
                for (var g in c) {
                    if (g == "indexOf") {
                        break
                    }
                    var d = c[g];
                    var h = d.from;
                    var v = d.to;
                    var l = a.jqx.scheduler.utilities.rangeIntersection(p, b, h, v);
                    if (l) {
                        o++
                    }
                }
                k = Math.max(o, k);
                if (t === "timelineMonthView") {
                    m = m.addDays(1, false)
                } else {
                    m = m.addMinutes(q, false)
                }
            }
            s[w] = k;
            return k
        },
        getMaxMonthAppointments: function(g) {
            var i = this._views[this._view].type;
            var l = this._views[this._view];
            if (g.length == 0) {
                return 1
            }
            var o = 1;
            var h = this.getViewStart().clone();
            var e = this.getViewEnd();
            while (h < e) {
                var j = h;
                var k = a.jqx.scheduler.utilities.getEndOfDay(j);
                var n = 0;
                for (var f in g) {
                    if (f == "indexOf") {
                        break
                    }
                    var b = g[f];
                    var d = b.from;
                    var c = b.to;
                    var m = a.jqx.scheduler.utilities.rangeIntersection(j, k, d, c);
                    if (m) {
                        n++
                    }
                }
                o = Math.max(n, o);
                h = h.addDays(1, false)
            }
            return o
        },
        getMaxAllDayAppointments: function(e) {
            var h = this._views[this._view].type;
            var l = this._views[this._view];
            var f = this;
            if (e.length == 0) {
                return 1
            }
            var n = function(r) {
                var y = 1;
                var s = f.getViewStart();
                var p = f.getViewEnd();
                while (s < p) {
                    var t = s;
                    var u = a.jqx.scheduler.utilities.getEndOfDay(t);
                    var x = 0;
                    for (var q in r) {
                        if (q == "indexOf") {
                            break
                        }
                        var i = r[q];
                        var v = i;
                        if (i.appointment) {
                            v = i.appointment
                        }
                        if (v.hidden == true) {
                            continue
                        }
                        if (!v.duration) {
                            continue
                        }
                        if (v.allDay || v.duration().days() >= 1) {
                            var o = i.from;
                            var j = i.to;
                            var w = a.jqx.scheduler.utilities.rangeIntersection(t, u, o, j);
                            if (w) {
                                x++
                            }
                        }
                    }
                    y = Math.max(x, y);
                    s = s.addDays(1, false)
                }
                return y
            };
            if (this._resources.length < 2 || (!this.resources.orientation || this.resources.orientation == "none")) {
                var m = n(e)
            } else {
                var k = 1;
                for (var c = 0; c < this._resources.length; c++) {
                    var b = this._resources[c];
                    var g = new Array();
                    for (var d = 0; d < e.length; d++) {
                        if (e[d].appointment && e[d].appointment.resourceId == b) {
                            g.push(e[d])
                        } else {
                            if (e[d].resourceId != undefined && e[d].resourceId == b) {
                                g.push(e[d])
                            }
                        }
                    }
                    var m = n(g);
                    k = Math.max(k, m)
                }
                m = k
            }
            return m
        },
        getMinutesPerScale: function() {
            var b = this._views[this._view].type;
            var d = this._views[this._view];
            var c = 30;
            var e = "halfHour";
            if (d.timeRuler && d.timeRuler.scale) {
                e = d.timeRuler.scale
            }
            switch (e) {
                case "sixtyMinutes":
                case "hour":
                    c = 60;
                    break;
                case "thirtyMinutes":
                case "halfHour":
                    c = 30;
                    break;
                case "fifteenMinutes":
                case "quarterHour":
                    c = 15;
                    break;
                case "tenMinutes":
                    c = 10;
                    break;
                case "fiveMinutes":
                    c = 5;
                    break
            }
            return c
        },
        getMaxColumnsInADay: function(k) {
            var m = this._views[this._view].type;
            var p = this._views[this._view];
            var e = 30;
            var c = "halfHour";
            if (p.timeRuler && p.timeRuler.scale) {
                c = p.timeRuler.scale
            }
            switch (c) {
                case "sixtyMinutes":
                case "hour":
                    e = 60;
                    break;
                case "thirtyMinutes":
                case "halfHour":
                    e = 30;
                    break;
                case "fifteenMinutes":
                case "quarterHour":
                    e = 15;
                    break;
                case "tenMinutes":
                    e = 10;
                    break;
                case "fiveMinutes":
                    e = 5;
                    break
            }
            if (k.length == 0) {
                return 1
            }
            var d = 1;
            var l = k[0].from.clone();
            var i = l.addMinutes(e);
            var h = a.jqx.scheduler.utilities.getEndOfDay(l);
            while (l < h) {
                var o = l;
                var n = i;
                var r = 0;
                for (var j in k) {
                    if (j == "indexOf") {
                        break
                    }
                    var b = k[j];
                    if (!b.from && !b.to) {
                        continue
                    }
                    var g = b.from;
                    var f = b.to;
                    var q = a.jqx.scheduler.utilities.rangeIntersection(o, n, g, f);
                    if (q) {
                        r++
                    }
                }
                d = Math.max(r, d);
                l = l.addMinutes(e, false);
                i = i.addMinutes(e, false)
            }
            return d
        },
        getTouches: function(b) {
            return a.jqx.mobile.getTouches(b)
        },
        _updatecolumnwidths: function() {
            var h = this;
            var j = this._hostWidth;
            var b = j;
            if (this.vScrollBar.css("visibility") !== "hidden" && this.scrollBarSize > 0) {
                j -= parseInt(this.scrollBarSize) + 6;
                if (this.rtl) {
                    j += 3
                }
                b = j
            }
            var i = "";
            if (this.columns == undefined || this.columns.records == undefined) {
                return
            }
            var h = this;
            var g = false;
            var k = new Array();
            a.each(this.columns.records, function(l, m) {
                if (!(this.hidden)) {
                    if (this.width.toString().indexOf("%") != -1 || this._percentagewidth != undefined) {
                        var m = 0;
                        var n = h.vScrollBar[0].style.visibility == "hidden" ? 0 : h.scrollBarSize + 5;
                        if (h.scrollBarSize == 0) {
                            n = 0
                        }
                        m = parseFloat(this.width) * b / 100;
                        if (this._percentagewidth != undefined) {
                            m = parseFloat(this._percentagewidth) * (b) / 100
                        }
                        if (m < this.minwidth && this.minwidth != "auto") {
                            m = this.minwidth
                        }
                        if (m > this.maxwidth && this.maxwidth != "auto") {
                            m = this.maxwidth
                        }
                        j -= Math.round(m)
                    } else {
                        if (this.width != "auto" && !this._width) {
                            j -= this.width
                        } else {
                            i += this.text
                        }
                    }
                    if (this._width == "auto") {
                        k[k.length] = this
                    }
                }
            });
            var e = this.columnsheader.find("#columntable" + this.element.id);
            if (e.length == 0) {
                return
            }
            var c = 0;
            var f = e.find(".jqx-grid-column-header");
            var d = 0;
            a.each(this.columns.records, function(o, t) {
                var m = this.element;
                var w = false;
                var v = this.width;
                var q = this.width;
                if (this.width.toString().indexOf("%") != -1 || this._percentagewidth != undefined) {
                    if (this._percentagewidth != undefined) {
                        v = parseFloat(this._percentagewidth) * b / 100
                    } else {
                        v = parseFloat(this.width) * b / 100
                    }
                    v = Math.round(v);
                    w = true
                }
                if (this.width != "auto" && !this._width && !w) {
                    if (parseInt(m[0].style.width) != this.width) {
                        m.width(this.width)
                    }
                } else {
                    if (w) {
                        if (v < this.minwidth && this.minwidth != "auto") {
                            v = this.minwidth;
                            this.width = v
                        }
                        if (v > this.maxwidth && this.maxwidth != "auto") {
                            v = this.maxwidth;
                            this.width = v
                        }
                        if (parseInt(m[0].style.width) != v) {
                            m.width(v);
                            this.width = v
                        }
                    } else {
                        var n = h.columns.records.length;
                        var p = h._views[h._view].type;
                        if (p === "dayView" || p === "weekView") {
                            var r = h._views[h._view];
                            if (r.timeRuler) {
                                if (r.timeRuler.timeZones) {
                                    n -= r.timeRuler.timeZones.length
                                }
                                n--
                            } else {
                                n--
                            }
                        } else {
                            if (p === "monthView" && h._views[h._view].showWeekNumbers) {
                                n--
                            }
                        }
                        var l = Math.floor(j * (1 / n));
                        if (h.resources && h.resources.resourceColumnWidth && h.resources.resourceColumnWidth != "auto") {
                            l = h.resources.resourceColumnWidth
                        } else {
                            if (h.resources && h.resources.resourceColumnWidth && h.resources.resourceColumnWidth == "auto") {
                                if (h.resources.orientation == "horizontal") {
                                    l = Math.round((2 + j) * (1 / h._getColumnsLengthPerView()))
                                }
                            }
                        }
                        var s = (j * (1 / n)) - l;
                        c += s;
                        if (c >= 1) {
                            c -= 1;
                            l++
                        }
                        if (c >= 0.5 && o == h.columns.records.length - 1) {
                            l++
                        }
                        if (p == "agendaView") {
                            l = j / k.length;
                            l++
                        }
                        if (l < 0) {
                            var u = a("<span>" + this.text + "</span>");
                            a(document.body).append(u);
                            l = 10 + u.width();
                            u.remove()
                        }
                        if (l < this.minwidth) {
                            l = this.minwidth
                        }
                        if (l > this.maxwidth) {
                            l = this.maxwidth
                        }
                        this._width = "auto";
                        this.width = parseInt(l);
                        m.width(this.width)
                    }
                }
                if (parseInt(m[0].style.left) != d) {
                    m.css("left", d)
                }
                if (!(this.hidden)) {
                    d += this.width
                }
                this._requirewidthupdate = true;
                if (q !== this.width) {
                    g = true
                }
            });
            this.columnsheader.width(2 + d);
            e.width(this.columnsheader.width());
            this._resizecolumnGroups();
            if (g) {
                this._renderrows();
                h._arrange()
            }
        },
        _rendercolumnheaders: function() {
            var g = this;
            if (this._updating) {
                return
            }
            var l = this._views[this._view];
            this._columnsbydatafield = new Array();
            this.columnsheader.find("#columntable" + this.element.id).remove();
            var h = a('<div id="columntable' + this.element.id + '" style="height: 100%; position: relative;"></div>');
            h[0].cells = new Array();
            var r = 0;
            var d = 0;
            var n = "";
            var p = this._hostWidth;
            if (!p) {
                this._hostWidth = this.host.width()
            }
            var v = this._hostWidth;
            var m = v;
            var w = this.getRows().length;
            var u = this.rowsHeight;
            if (this.isTouchDevice()) {
                u = this.touchRowsHeight
            }
            if (w * u > this.host.height()) {
                this.vScrollBar[0].style.visibility = "inherit"
            }
            if (this.vScrollBar.css("visibility") !== "hidden" && this.scrollBarSize > 0) {
                v -= parseInt(this.scrollBarSize) + 6;
                if (this.rtl) {
                    v += 3
                }
                m = v
            }
            var q = new Array();
            var s = new Array();
            a.each(this.columns.records, function(j, k) {
                if (!(this.hidden)) {
                    if (this.width != "auto" && !this._width) {
                        if (this.width < this.minwidth && this.minwidth != "auto") {
                            v -= this.minwidth
                        } else {
                            if (this.width > this.maxwidth && this.maxwidth != "auto") {
                                v -= this.maxwidth
                            } else {
                                if (this.width.toString().indexOf("%") != -1) {
                                    var k = 0;
                                    k = parseFloat(this.width) * m / 100;
                                    if (k < this.minwidth && this.minwidth != "auto") {
                                        k = this.minwidth
                                    }
                                    if (k > this.maxwidth && this.maxwidth != "auto") {
                                        k = this.maxwidth
                                    }
                                    v -= k
                                } else {
                                    if (typeof this.width == "string") {
                                        this.width = parseInt(this.width)
                                    }
                                    v -= this.width
                                }
                            }
                        }
                    } else {
                        n += this.text
                    }
                }
                if (this.width == null || this.width == "auto") {
                    s[s.length] = this
                }
                q[q.length] = this
            });
            if (this.rtl) {
                for (var t = 0; t < q.length; t++) {
                    this.columns.replace(t, q[t])
                }
            }
            var f = this.headerZIndex;
            var i = 0;
            var e = g.columnsHeight;
            var b = function(k, x) {
                var j = g.columnGroupslevel * g.columnsHeight;
                j = j - (x.level * g.columnsHeight);
                return j
            };
            var o = 0;
            var c = document.createDocumentFragment();
            a.each(this.columns.records, function(D, I) {
                this.height = g.columnsHeight;
                if (g.columnGroups) {
                    if (g.columnGroups.length) {
                        this.height = b(this.datafield, this);
                        e = this.height
                    }
                }
                var y = g.toTP("jqx-grid-column-header") + " " + g.toTP("jqx-widget-header");
                if (g.rtl) {
                    y += " " + g.toTP("jqx-grid-column-header-rtl")
                }
                if (!g.enableBrowserSelection) {
                    y += " " + g.toTP("jqx-disableselect")
                }
                var E = !g.rtl ? f-- : f++;
                var k = document.createElement("div");
                k.setAttribute("role", "columnheader");
                k.style.position = "absolute";
                k.style.zIndex = E;
                k.style.height = "100%";
                k.className = y;
                var z = a(k);
                if (g.rtl && D === 0) {
                    z[0].style.borderLeftColor = "transparent"
                }
                if (g.columnGroups) {
                    z[0].style.height = e + "px";
                    z[0].style.bottom = "0px"
                } else {
                    if (!this.timeColumn) {
                        z[0].style.height = -1 + e + "px"
                    }
                }
                this.uielement = z;
                this.element = z;
                if (this.classname != "" && this.classname) {
                    z.addClass(this.classname)
                }
                var K = this.width;
                var L = false;
                if (this.width === null) {
                    this.width = "auto"
                }
                if (this.width.toString().indexOf("%") != -1 || this._percentagewidth != undefined) {
                    if (this._percentagewidth != undefined) {
                        K = parseFloat(this._percentagewidth) * m / 100
                    } else {
                        K = parseFloat(this.width) * m / 100
                    }
                    K = Math.round(K);
                    L = true
                }
                if (this.width != "auto" && !this._width && !L) {
                    if (K < this.minwidth && this.minwidth != "auto") {
                        K = this.minwidth
                    }
                    if (K > this.maxwidth && this.maxwidth != "auto") {
                        K = this.maxwidth
                    }
                    z[0].style.width = parseInt(K) + "px"
                } else {
                    if (L) {
                        if (K < this.minwidth && this.minwidth != "auto") {
                            K = this.minwidth
                        }
                        if (K > this.maxwidth && this.maxwidth != "auto") {
                            K = this.maxwidth
                        }
                        if (this._percentagewidth == undefined || this.width.toString().indexOf("%") != -1) {
                            this._percentagewidth = this.width
                        }
                        z.width(K);
                        this.width = K
                    } else {
                        var A = g.columns.records.length;
                        var C = g._views[g._view].type;
                        if (C === "dayView" || C === "weekView") {
                            var G = g._views[g._view];
                            if (G.timeRuler) {
                                if (G.timeRuler.timeZones) {
                                    A -= G.timeRuler.timeZones.length
                                }
                                A--
                            } else {
                                A--
                            }
                        } else {
                            if (C === "monthView" && g._views[g._view].showWeekNumbers) {
                                A--
                            }
                        }
                        var j = Math.floor(v * (1 / A));
                        if (g.resources && g.resources.resourceColumnWidth && g.resources.resourceColumnWidth != "auto") {
                            j = g.resources.resourceColumnWidth
                        } else {
                            if (g.resources && g.resources.resourceColumnWidth && g.resources.resourceColumnWidth == "auto") {
                                if (g.resources.orientation == "horizontal") {
                                    j = Math.round((2 + v) * (1 / g._getColumnsLengthPerView()))
                                }
                            }
                        }
                        var H = (v * (1 / A)) - j;
                        o += H;
                        if (o >= 1) {
                            o -= 1;
                            j++
                        }
                        if (o >= 0.5 && D == g.columns.records.length - 1) {
                            j++
                        }
                        if (isNaN(j)) {
                            j = this.minwidth
                        }
                        if (C == "agendaView") {
                            j = v / s.length;
                            j++
                        }
                        if (j < 0) {
                            var J = a("<span>" + this.text + "</span>");
                            a(document.body).append(J);
                            j = 10 + J.width();
                            J.remove()
                        }
                        if (j < this.minwidth) {
                            j = this.minwidth
                        }
                        if (j > this.maxwidth) {
                            j = this.maxwidth
                        }
                        this._width = "auto";
                        this.width = parseInt(j);
                        K = this.width;
                        z.width(this.width)
                    }
                }
                if (this.timeColumn) {
                    z.css("border-bottom-color", "transparent");
                    if (l.timeRuler && l.timeRuler.timeZones) {
                        if (D < l.timeRuler.timeZones.length) {
                            z.css("border-right-color", "transparent")
                        }
                    }
                    if (this.tableRows == 1) {
                        z.addClass(g.toTP("jqx-scheduler-time-column"))
                    }
                }
                if (this.hidden) {
                    z.css("display", "none")
                }
                var x = a(z.children()[0]);
                h[0].cells[D] = z[0];
                var B = g._rendercolumnheader(this.text, this.align, e, g);
                z[0].innerHTML = B;
                c.appendChild(z[0]);
                var F = this;
                z[0].style.left = d + "px";
                if (!(this.hidden)) {
                    d += K
                }
            });
            h[0].appendChild(c);
            if (d > 0) {
                this.columnsheader[0].style.width = 2 + d + "px"
            } else {
                this.columnsheader[0].style.width = d + "px"
            }
            this._columnswidth = d;
            this.columnsrow = h;
            g.columnsheader.append(h);
            h[0].style.width = d + "px";
            if (this.columnGroups) {
                this._rendercolumnGroups()
            }
        },
        _rendercolumnGroups: function() {
            if (!this.columnGroups) {
                return
            }
            var r = this.headerZIndex + this.columns.records.length;
            var m = this;
            var f = m.toTP("jqx-grid-column-header") + " " + m.toTP("jqx-grid-columngroup-header") + " " + m.toTP("jqx-widget-header");
            if (m.rtl) {
                f += " " + m.toTP("jqx-grid-columngroup-header-rtl")
            }
            var d = this.columnsheader.find("#columntable" + this.element.id);
            d.find("jqx-grid-columngroup-header").remove();
            for (var g = 0; g < this.columnGroupslevel - 1; g++) {
                for (var k = 0; k < this.columnGroups.length; k++) {
                    var o = this.columnGroups[k];
                    var b = o.level;
                    if (b !== g) {
                        continue
                    }
                    var n = b * this.columnsHeight;
                    var c = 99999;
                    if (o.groups) {
                        var q = function(u) {
                            var t = 0;
                            for (var s = 0; s < u.groups.length; s++) {
                                var i = u.groups[s];
                                if (!i.groups) {
                                    if (!i.hidden) {
                                        t += i.width;
                                        c = Math.min(parseInt(i.element[0].style.left), c)
                                    }
                                } else {
                                    t += q(i)
                                }
                            }
                            return t
                        };
                        o.width = q(o);
                        o.left = c;
                        var p = this.columnsHeight;
                        var l = r--;
                        var e = a('<div role="columnheader" style="z-index: ' + l + ';position: absolute;" class="' + f + '"></div>');
                        var h = a(this._rendercolumnheader(o.text, o.align, this.columnsHeight, this));
                        if (o.renderer) {
                            o.renderer(e, o.text)
                        }
                        e.append(h);
                        e[0].style.left = c + "px";
                        if (c === 0) {
                            e[0].style.borderLeftColor = "transparent"
                        }
                        e[0].style.top = n + "px";
                        e[0].style.height = p + "px";
                        e[0].style.width = -1 + o.width + "px";
                        d.append(e);
                        o.element = e
                    }
                }
            }
        },
        _resizecolumnGroups: function() {
            if (!this.columnGroups) {
                return
            }
            for (var c = 0; c < this.columnGroups.length; c++) {
                var h = this.columnGroups[c];
                var j = h.level;
                var g = j * this.columnsHeight;
                var f = 99999;
                if (h.groups) {
                    var e = function(m) {
                        var l = 0;
                        for (var k = 0; k < m.groups.length; k++) {
                            var i = m.groups[k];
                            if (!i.groups) {
                                l += i.width;
                                f = Math.min(parseInt(i.element[0].style.left), f)
                            } else {
                                l += e(i)
                            }
                        }
                        return l
                    };
                    h.width = e(h);
                    h.left = f;
                    var b = this.columnsHeight;
                    var d = h.element;
                    d[0].style.left = f + "px";
                    d[0].style.top = g + "px";
                    d[0].style.height = b + "px";
                    d[0].style.width = -1 + h.width + "px"
                }
            }
        },
        _removecolumnhandlers: function(e) {
            var c = this;
            var b = a(e.element);
            if (b.length > 0) {
                c.removeHandler(b, "mouseenter");
                c.removeHandler(b, "mouseleave");
                var d = a(e.filtericon);
                c.removeHandler(d, "mousedown");
                c.removeHandler(d, "click");
                c.removeHandler(b, "click")
            }
        },
        destroy: function() {
            var b = this;
            b._removeHandlers();
            if (b._editDialog) {
                b._editDialog.jqxWindow("destroy")
            }
            if (b.menu) {
                b.menu.jqxMenu("destroy")
            }
            if (b.editRecurrenceDialog) {
                b.editRecurrenceDialog.jqxWindow("destroy")
            }
            b.vScrollBar.jqxScrollBar("destroy");
            b.hScrollBar.jqxScrollBar("destroy");
            delete b.vScrollBar;
            delete b.hScrollBar;
            delete b._mousewheelfunc;
            a.jqx.utilities.resize(b.host, null, true);
            b.host.remove()
        },
        propertiesChangedHandler: function(d, b, c) {
            if (c && c.width && c.height && Object.keys(c).length == 2) {
                d.host.height(d.height);
                d.host.width(d.width);
                d._updatesize(false, true)
            }
        },
        propertyChangedHandler: function(b, d, f, e) {
            if (this.isInitialized == undefined || this.isInitialized == false) {
                return
            }
            if (b.batchUpdate && b.batchUpdate.width && b.batchUpdate.height && Object.keys(b.batchUpdate).length == 2) {
                return
            }
            if (e !== f) {
                if (d == "filterable") {
                    b._render()
                } else {
                    if (d == "view") {
                        b.setView(e)
                    } else {
                        if (d == "views") {
                            b._columns = null;
                            b._views = new Array();
                            b._view = b.view;
                            for (var c = 0; c < b.views.length; c++) {
                                if (a.type(b.views[c]) === "string") {
                                    b._views.push({
                                        type: b.views[c]
                                    })
                                } else {
                                    b._views.push(b.views[c])
                                }
                            }
                            for (var c = 0; c < b._views.length; c++) {
                                if (b._views[c].type == b.view) {
                                    b._view = c;
                                    break
                                }
                            }
                            b._render()
                        } else {
                            if (d === "height") {
                                b._hostWidth = null;
                                b._hostHeight = null;
                                b.host.height(b.height);
                                b.host.width(b.width);
                                b._updatesize(false, true)
                            } else {
                                if (d === "width") {
                                    b._hostWidth = null;
                                    b._hostHeight = null;
                                    b.host.height(b.height);
                                    b.host.width(b.width);
                                    b._updatesize(true, false)
                                } else {
                                    if (d === "source") {
                                        b.updateBoundData()
                                    } else {
                                        if (d == "resources") {
                                            b.updateBoundData()
                                        } else {
                                            if (d === "columns" || d === "columnGroups") {
                                                b._columns = null;
                                                b._render()
                                            } else {
                                                if (d === "selectionMode") {
                                                    b.selectionMode = e.toLowerCase()
                                                } else {
                                                    if (d == "touchMode") {
                                                        b._removeHandlers();
                                                        b.touchDevice = null;
                                                        b.vScrollBar.jqxScrollBar({
                                                            touchMode: e
                                                        });
                                                        b.hScrollBar.jqxScrollBar({
                                                            touchMode: e
                                                        });
                                                        b.refresh();
                                                        b._addHandlers()
                                                    } else {
                                                        if (d == "enableHover") {
                                                            return
                                                        } else {
                                                            if (d == "showLegend") {
                                                                b.legendbartop.show();
                                                                b.legendbarbottom.show();
                                                                b.refresh()
                                                            } else {
                                                                if (d == "disabled") {
                                                                    if (e) {
                                                                        b.host.addClass(this.toThemeProperty("jqx-fill-state-disabled"))
                                                                    } else {
                                                                        b.host.removeClass(this.toThemeProperty("jqx-fill-state-disabled"))
                                                                    }
                                                                    b.host.find(".jqx-grid-group-collapse").css("cursor", e ? "default" : "pointer");
                                                                    b.host.find(".jqx-grid-group-expand").css("cursor", e ? "default" : "pointer")
                                                                } else {
                                                                    if (d == "columnsHeight") {
                                                                        b._render()
                                                                    } else {
                                                                        if (d == "localization") {
                                                                            b._render();
                                                                            if (b.editRecurrenceDialog) {
                                                                                b.editRecurrenceDialog.jqxWindow("destroy");
                                                                                b.createEditRecurrenceDialog()
                                                                            }
                                                                        } else {
                                                                            if (d == "theme") {
                                                                                a.jqx.utilities.setTheme(f, e, b.host);
                                                                                if (b._editDialog) {
                                                                                    a.jqx.utilities.setTheme(f, e, b._editDialog)
                                                                                }
                                                                                if (b.editRecurrenceDialog) {
                                                                                    a.jqx.utilities.setTheme(f, e, b.editRecurrenceDialog)
                                                                                }
                                                                                if (b.menu) {
                                                                                    b.menu.jqxMenu({
                                                                                        theme: b.theme
                                                                                    })
                                                                                }
                                                                                b.vScrollBar.jqxScrollBar({
                                                                                    theme: b.theme
                                                                                });
                                                                                b.hScrollBar.jqxScrollBar({
                                                                                    theme: b.theme
                                                                                });
                                                                                b.refresh()
                                                                            } else {
                                                                                if (d === "date") {
                                                                                    b.navigateTo(e)
                                                                                } else {
                                                                                    b.refresh()
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        _rendercolumnheader: function(g, h, d, e) {
            var f = "4px";
            if (e.columnGroups) {
                f = (d / 2 - this._columnheight / 2);
                if (f < 0) {
                    f = 4
                }
                f += "px"
            } else {
                if (this.columnsHeight != 25) {
                    f = (this.columnsHeight / 2 - this._columnheight / 2);
                    if (f < 0) {
                        f = 4
                    }
                    f += "px"
                }
            }
            var c = '<div style="overflow: hidden; text-overflow: ellipsis; text-align: ' + h + "; margin-left: 4px; margin-right: 4px; margin-bottom: " + f + "; margin-top: " + f + ';"><span style="text-overflow: ellipsis; cursor: default;">' + g + "</span></div>";
            if (this.columnRenderer) {
                var b = this.columnRenderer(g, h, d, c);
                if (b != undefined) {
                    return b
                }
            }
            return c
        }
    })
})(jqxBaseFramework);