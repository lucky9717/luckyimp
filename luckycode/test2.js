/* to show hiden field in backend*/
if ($('#field_428975').length == 1 && window.location.href.indexOf('in1.nopaperforms.io/form/preview') > -1) {
    $('.field_428975 > div > div').show()
}

$('#field_318546').val('31/03/2021').change();
location.pathname.search("preview-missing-fields") !== -1 ? $('.correspondence_pincode,.permanent_pincode').hide() : console.log('');

/*if ($('#course, #date_of_birth, #field_318547').length == 3) {
    function courseDobChange() {
        var course = $('#course').val();
        if (course != '') {
            switch (course) {
                case "54959;;;Toddler":
                    $('#date_of_birth').datepicker("setStartDate", "01/04/2001");
                    $('#date_of_birth').datepicker("setEndDate", "31/12/2019");
                    break;
                case "54960;;;Nursery":
                    $('#date_of_birth').datepicker("setStartDate", "01/04/2001");
                    $('#date_of_birth').datepicker("setEndDate", "31/07/2018");
                    break;


                default:
                    //$('#date_of_birth').datepicker("setStartDate", "01/04/2001");
                    //$('#date_of_birth').datepicker("setEndDate", "31/12/2019");
                    break;
            }
        }
    }
    $('#course').change(courseDobChange);
    $(document).ajaxStop(courseDobChange);
}*/
/*---------------------------------------freeze email and mobile ------------------*/
if ($('#mobile_no').length > 0 && $('#mobile_no').val() != '') {
    $('#mobile_no').attr('readonly', 'readonly');
}
/*To Autoselect the Day school in in the field of first page Select the school on the basis of class 11th and class 12th which is in admission for class field*/
var SelectDaySchool = function () {
    var AdmissionClass = $('#course').val();
    if (AdmissionClass !== "" && AdmissionClass !== undefined && AdmissionClass !== null) {
        if (AdmissionClass === "89868;;;XI" || AdmissionClass === "108794;;;XII") {
            $('#campus').val('Day School').trigger('chosen:updated');

        } else {
            $('#campus_chosen').css('pointer-events', '');
        }
    }
}
$('#course').change(SelectDaySchool);
SelectDaySchool();
/*To Autopopulate tranport facility as "Yes" on the basis of admission class 1 to 10 and Select school should be day boarding*/
var TransportFacelity = function () {
    var AdmissionClass = $('#course').val();
    var School = $('#campus').val();
    if (AdmissionClass !== "54959;;;Toddler" && AdmissionClass !== undefined && AdmissionClass !== null) {
        if ((AdmissionClass !== "") && School === "Day Boarding School") {
            console.log('Day Borading is working');
            $('#field_225950').val('Yes').trigger('chosen:updated');
            $('#field_225950_chosen').css('pointer-events', 'none');
        } else {
            $('#field_225950_chosen').css('pointer-events', '');
            $('#field_225950 option[value="Yes"]').prop('selected', false).trigger('chosen:updated');
        }
    }
}
$('#course,#campus').change(TransportFacelity);
TransportFacelity();
/*End code here*/


/*for removing classes in admission for class*/
var removearraycourse = ['108796;;;X', '108794;;;XII']

if ($('#course').length == 1) {
    $(document).ajaxStop(function () {
        $('#course option').each(function (i, e) {
            var localValue = $(e).val();
            if (removearraycourse.indexOf(localValue) != -1) {
                $(e).remove();
            }
        });
        $('.chosen-select').trigger('chosen:updated')
    });
}
var hidestatus = function () {
    if ($('#field_318552_1_2,#field_318552_1_3').length == 2) {

        if ($('#field_318552_1_2').val() == '89868;;;XI' || $('#field_318552_1_2').val() == '108794;;;XII') {

            $('#field_318552_1_3 option[value="A"]').hide().prop('selected', false).trigger('chosen:updated');
            $('#field_318552_1_3 option[value="B"]').hide().prop('selected', false).trigger('chosen:updated');
            $('#field_318552_1_3 option[value="C"]').hide().prop('selected', false).trigger('chosen:updated');
            $('#field_318552_1_3 option[value="D"]').hide().prop('selected', false).trigger('chosen:updated');
            $('#field_318552_1_3 option[value="E"]').hide().prop('selected', false).trigger('chosen:updated');

        } else {
            $('#field_318552_1_3 option[value="A"]').show().trigger('chosen:updated');
            $('#field_318552_1_3 option[value="B"]').show().trigger('chosen:updated');
            $('#field_318552_1_3 option[value="C"]').show().trigger('chosen:updated');
            $('#field_318552_1_3 option[value="D"]').show().trigger('chosen:updated');
            $('#field_318552_1_3 option[value="E"]').show().trigger('chosen:updated');


        }

    }
}
$('#field_318552_1_2,#field_318552_1_3').change(hidestatus);
$(document).ajaxStop(hidestatus);

var hidestatus1 = function () {
    if ($('#field_318552_2_2,#field_318552_2_3').length == 2) {

        if ($('#field_318552_2_2').val() == '89868;;;XI' || $('#field_318552_2_2').val() == '108794;;;XII') {

            $('#field_318552_2_3 option[value="A"]').hide().prop('selected', false).trigger('chosen:updated');
            $('#field_318552_2_3 option[value="B"]').hide().prop('selected', false).trigger('chosen:updated');
            $('#field_318552_2_3 option[value="C"]').hide().prop('selected', false).trigger('chosen:updated');
            $('#field_318552_2_3 option[value="D"]').hide().prop('selected', false).trigger('chosen:updated');
            $('#field_318552_2_3 option[value="E"]').hide().prop('selected', false).trigger('chosen:updated');

        } else {
            $('#field_318552_2_3 option[value="A"]').show().trigger('chosen:updated');
            $('#field_318552_2_3 option[value="B"]').show().trigger('chosen:updated');
            $('#field_318552_2_3 option[value="C"]').show().trigger('chosen:updated');
            $('#field_318552_2_3 option[value="D"]').show().trigger('chosen:updated');
            $('#field_318552_2_3 option[value="E"]').show().trigger('chosen:updated');


        }

    }
}
$('#field_318552_2_2,#field_318552_2_3').change(hidestatus1);
$(document).ajaxStop(hidestatus1);

var hidestatus2 = function () {
    if ($('#field_318552_3_2,#field_318552_3_3').length == 2) {

        if ($('#field_318552_3_2').val() == '89868;;;XI' || $('#field_318552_3_2').val() == '108794;;;XII') {

            $('#field_318552_3_3 option[value="A"]').hide().prop('selected', false).trigger('chosen:updated');
            $('#field_318552_3_3 option[value="B"]').hide().prop('selected', false).trigger('chosen:updated');
            $('#field_318552_3_3 option[value="C"]').hide().prop('selected', false).trigger('chosen:updated');
            $('#field_318552_3_3 option[value="D"]').hide().prop('selected', false).trigger('chosen:updated');
            $('#field_318552_3_3 option[value="E"]').hide().prop('selected', false).trigger('chosen:updated');

        } else {
            $('#field_318552_3_3 option[value="A"]').show().trigger('chosen:updated');
            $('#field_318552_3_3 option[value="B"]').show().trigger('chosen:updated');
            $('#field_318552_3_3 option[value="C"]').show().trigger('chosen:updated');
            $('#field_318552_3_3 option[value="D"]').show().trigger('chosen:updated');
            $('#field_318552_3_3 option[value="E"]').show().trigger('chosen:updated');


        }

    }
}
$('#field_318552_3_2,#field_318552_3_3').change(hidestatus2);
$(document).ajaxStop(hidestatus2);
var hidestatus3 = function () {
    if ($('#field_318552_1_2,#field_318552_1_3').length == 2) {

        if ($('#field_318552_1_2').val() != '89868;;;XI' && $('#field_318552_1_2').val() != '108794;;;XII') {

            $('#field_318552_1_3 option[value="Science"]').hide().prop('selected', false).trigger('chosen:updated');
            $('#field_318552_1_3 option[value="Humanities"]').hide().prop('selected', false).trigger('chosen:updated');
            $('#field_318552_1_3 option[value="Commerce"]').hide().prop('selected', false).trigger('chosen:updated');


        } else {
            $('#field_318552_1_3 option[value="Science"]').show().trigger('chosen:updated');
            $('#field_318552_1_3 option[value="Humanities"]').show().trigger('chosen:updated');
            $('#field_318552_1_3 option[value="Commerce"]').show().trigger('chosen:updated');



        }

    }
}
$('#field_318552_1_2,#field_318552_1_3').change(hidestatus3);
$(document).ajaxStop(hidestatus3);

var hidestatus5 = function () {
    if ($('#field_318552_2_2,#field_318552_2_3').length == 2) {

        if ($('#field_318552_2_2').val() == '54959;;;Toddler' || $('#field_318552_2_2').val() == '54960;;;Nursery' || $('#field_318552_2_2').val() == '54961;;;KG' || $('#field_318552_2_2').val() == '54962;;;I' || $('#field_318552_2_2').val() == '74627;;;II' || $('#field_318552_2_2').val() == '74628;;;III' || $('#field_318552_2_2').val() == '82180;;;IV' || $('#field_318552_2_2').val() == '82181;;;V' || $('#field_318552_2_2').val() == '82182;;;VI' || $('#field_318552_2_2').val() == '82183;;;VII' || $('#field_318552_2_2').val() == '82184;;;VIII' || $('#field_318552_2_2').val() == '108795;;;IX' || $('#field_318552_2_2').val() == '108796;;;X') {

            $('#field_318552_2_3 option[value="Science"]').hide().prop('selected', false).trigger('chosen:updated');
            $('#field_318552_2_3 option[value="Humanities"]').hide().prop('selected', false).trigger('chosen:updated');
            $('#field_318552_2_3 option[value="Commerce"]').hide().prop('selected', false).trigger('chosen:updated');


        } else {
            $('#field_318552_2_3 option[value="Science"]').show().trigger('chosen:updated');
            $('#field_318552_2_3 option[value="Humanities"]').show().trigger('chosen:updated');
            $('#field_318552_2_3 option[value="Commerce"]').show().trigger('chosen:updated');



        }

    }
}
$('#field_318552_2_2,#field_318552_2_3').change(hidestatus5);
$(document).ajaxStop(hidestatus5);

var hidestatus4 = function () {
    if ($('#field_318552_3_2,#field_318552_3_3').length == 2) {

        if ($('#field_318552_3_2').val() == '54959;;;Toddler' || $('#field_318552_3_2').val() == '54960;;;Nursery' || $('#field_318552_3_2').val() == '54961;;;KG' || $('#field_318552_3_2').val() == '54962;;;I' || $('#field_318552_3_2').val() == '74627;;;II' || $('#field_318552_3_2').val() == '74628;;;III' || $('#field_318552_3_2').val() == '82180;;;IV' || $('#field_318552_3_2').val() == '82181;;;V' || $('#field_318552_3_2').val() == '82182;;;VI' || $('#field_318552_3_2').val() == '82183;;;VII' || $('#field_318552_3_2').val() == '82184;;;VIII' || $('#field_318552_3_2').val() == '108795;;;IX' || $('#field_318552_3_2').val() == '108796;;;X') {

            $('#field_318552_3_3 option[value="Science"]').hide().prop('selected', false).trigger('chosen:updated');
            $('#field_318552_3_3 option[value="Humanities"]').hide().prop('selected', false).trigger('chosen:updated');
            $('#field_318552_3_3 option[value="Commerce"]').hide().prop('selected', false).trigger('chosen:updated');


        } else {
            $('#field_318552_3_3 option[value="Science"]').show().trigger('chosen:updated');
            $('#field_318552_3_3 option[value="Humanities"]').show().trigger('chosen:updated');
            $('#field_318552_3_3 option[value="Commerce"]').show().trigger('chosen:updated');



        }

    }
}
$('#field_318552_3_2,#field_318552_3_3').change(hidestatus4);
$(document).ajaxStop(hidestatus4);

var removearraycampus = ['Day School']

if ($('#campus').length == 1) {
    $(document).ready(function () {
        $('#campus option').each(function (i, e) {
            var localValue = $(e).val();
            if (removearraycampus.indexOf(localValue) != -1) {
                $(e).remove();
            }
        });
        $('.chosen-select').trigger('chosen:updated')
    });
}

/*to push the default value yes but if somechanges then it will be as per the user input*/
var ValuePushYes = function () {
    if ($('#field_318618').val() === "") {
        $('#field_318618').find('option[value="Yes"]').prop('selected', true);
        $('.chosen-select').trigger('chosen:updated');
    }
}
ValuePushYes();
var ValuePushYes1 = function () {
    if ($('#permanent_same_as_correspondence').val() === "") {
        radiobtn = document.getElementById("permanent_same_as_correspondence_0");
        radiobtn.checked = true;
    }
}
ValuePushYes1();
$(document).ajaxStop(function () {
    if ($('#field_318657').val() == "") {
        $('#field_318657').val('398362;;;0').trigger('chosen:updated');
    }
});
/*token fee*/
function feecalculation() {
    if ($('#field_318589,#field_318589,#field_318657,#field_318664').length > 1) {
        let admissionfee = $('#field_318589').val().substr(9),
            transport = $('#field_318657').val().split(';;;')[1],
            meal = $('#field_318664').val().substr(9),
            total = 0;

        if ($('#field_318589, #field_318657, #field_318664, #field_318659').length == 4) {
            if (admissionfee != "") {
                if (transport == "" || transport == undefined) {
                    transport = '398362;;;0'.split(';;;')[1];
                    total = (Number(admissionfee) + Number(transport) + Number(meal));
                    $('#field_318657').val('398362;;;0').trigger('chosen:updated');
                } else {
                    total = (Number(admissionfee) + Number(transport) + Number(meal));
                }

                console.log(total);
                $('#field_318665').val(total).change().prop("readonly", true);
            }

            if ($('#field_318659').find('option:contains(' + total + ')').length == 1) {

                if ($('#field_318659').val() != $('#field_318659').find('option:contains(' + total + ')').val()) {
                    $('#field_318659').val($('#field_318659').find('option:contains(' + total + ')').val()).trigger('chosen:updated');
                }

            } else {
                $('#field_318659').val('').trigger('chosen:updated');
            }

        }
        $('.chosen-select').trigger('chosen:updated');
    }
}


function admissionfee() {
    let clas = $('#course').val(),
        mode = $('#campus').val(),
        stream = $('#field_318583').val();

    if (clas == "54959;;;Toddler") {
        if (mode == "Day Boarding School") {
            $('#field_318589').val('459236;;;109600').trigger('chosen:updated');
        } else if (mode == "Day School") {
            $('#field_318589').val('459236;;;109600').trigger('chosen:updated');
        } else {
            $('#field_318589').val('').trigger('chosen:updated');
        }
    } else if (clas == "54960;;;Nursery") {
        if (mode == "Day Boarding School") {
            $('#field_318589').val('459242;;;113200').trigger('chosen:updated');
        } else if (mode == "Day School") {
            $('#field_318589').val('459235;;;109400').trigger('chosen:updated');
        } else {
            $('#field_318589').val('').trigger('chosen:updated');
        }
    } else if (clas == "54961;;;KG") {
        if (mode == "Day Boarding School") {
            $('#field_318589').val('459242;;;113200').trigger('chosen:updated');
        } else if (mode == "Day School") {
            $('#field_318589').val('459235;;;109400').trigger('chosen:updated');
        } else {
            $('#field_318589').val('').trigger('chosen:updated');
        }
    } else if (clas == "54962;;;I") {
        if (mode == "Day Boarding School") {
            $('#field_318589').val('459240;;;115400').trigger('chosen:updated');
        } else if (mode == "Day School") {
            $('#field_318589').val('459234;;;108800').trigger('chosen:updated');
        } else {
            $('#field_318589').val('').trigger('chosen:updated');
        }
    } else if (clas == "74627;;;II") {
        if (mode == "Day Boarding School") {
            $('#field_318589').val('459240;;;115400').trigger('chosen:updated');
        } else if (mode == "Day School") {
            $('#field_318589').val('459234;;;108800').trigger('chosen:updated');
        } else {
            $('#field_318589').val('').trigger('chosen:updated');
        }
    } else if (clas == "74628;;;III") {
        if (mode == "Day Boarding School") {
            $('#field_318589').val('459240;;;115400').trigger('chosen:updated');
        } else if (mode == "Day School") {
            $('#field_318589').val('459238;;;108400').trigger('chosen:updated');
        } else {
            $('#field_318589').val('').trigger('chosen:updated');
        }
    } else if (clas == "82180;;;IV") {
        if (mode == "Day Boarding School") {
            $('#field_318589').val('459244;;;115600').trigger('chosen:updated');
        } else if (mode == "Day School") {
            $('#field_318589').val('459238;;;108400').trigger('chosen:updated');
        } else {
            $('#field_318589').val('').trigger('chosen:updated');
        }
    } else if (clas == "82181;;;V") {
        if (mode == "Day Boarding School") {
            $('#field_318589').val('459244;;;115600').trigger('chosen:updated');
        } else if (mode == "Day School") {
            $('#field_318589').val('459238;;;108400').trigger('chosen:updated');
        } else {
            $('#field_318589').val('').trigger('chosen:updated');
        }
    } else if (clas == "82182;;;VI") {
        if (mode == "Day Boarding School") {
            $('#field_318589').val('459244;;;115600').trigger('chosen:updated');
        } else if (mode == "Day School") {
            $('#field_318589').val('459238;;;108400').trigger('chosen:updated');
        } else {
            $('#field_318589').val('').trigger('chosen:updated');
        }
    } else if (clas == "82183;;;VII") {
        if (mode == "Day Boarding School") {
            $('#field_318589').val('459892;;;116000').trigger('chosen:updated');
        } else if (mode == "Day School") {
            $('#field_318589').val('459238;;;108400').trigger('chosen:updated');
        } else {
            $('#field_318589').val('').trigger('chosen:updated');
        }
    } else if (clas == "82184;;;VIII") {
        if (mode == "Day Boarding School") {
            $('#field_318589').val('459892;;;116000').trigger('chosen:updated');
        } else if (mode == "Day School") {
            $('#field_318589').val('459238;;;108400').trigger('chosen:updated');
        } else {
            $('#field_318589').val('').trigger('chosen:updated');
        }
    } else if (clas == "108795;;;IX") {
        if (mode == "Day Boarding School") {
            $('#field_318589').val('459239;;;117000').trigger('chosen:updated');
        } else if (mode == "Day School") {
            $('#field_318589').val('459235;;;109400').trigger('chosen:updated');
        } else {
            $('#field_318589').val('').trigger('chosen:updated');
        }
    }
    /*else if (clas == "108796;;;X") {
           if (mode == "Day Boarding School") {
               $('#field_318589').val('254277;;;16230').trigger('chosen:updated');
           } else if (mode == "Day School") {
               $('#field_318589').val('254278;;;9960').trigger('chosen:updated');
           } else {
               $('#field_318589').val('').trigger('chosen:updated');
           }
       } */
    else if (clas == "89868;;;XI") {
        if (stream == "Science") {
            $('#field_318589').val('459237;;;61400').trigger('chosen:updated');
        } else if (stream == "Commerce") {
            $('#field_318589').val('459241;;;59000').trigger('chosen:updated');
        } else if (stream == "Humanities") {
            $('#field_318589').val('459243;;;49000').trigger('chosen:updated');
        } else {
            $('#field_318589').val('').trigger('chosen:updated');
        }
    }
    /*else if (clas == "108794;;;XII") {
           if (stream == "Science") {
               $('#field_318589').val('254282;;;19480').trigger('chosen:updated');
           } else if (stream == "Commerce") {
               $('#field_318589').val('254283;;;18190').trigger('chosen:updated');
           } else if (stream == "Humanities") {
               $('#field_318589').val('254283;;;18190').trigger('chosen:updated');
           } else {
               $('#field_318589').val('').trigger('chosen:updated');
           }
       } */
    else {
        $('#field_318589').val('').trigger('chosen:updated');
    }
}

if ($('#field_318589').length == 1) {
    $(document).ajaxStop(function () {
        admissionfee();
        ($('#field_318657').val() == '' || $('#field_318657').val() == null) && $('#field_318657').prop("selectedIndex", 1).trigger('chosen:updated');
        $('#field_233147').prop("selectedIndex", 1).trigger('chosen:updated');
    });
}
$('#course,#campus').change(admissionfee);
$('#course,#campus').change(function () {
    $('#field_318589').trigger('change');
});


if ($('.bottomButton').length > 0) {
    $('.field_318589, .field_318662, .field_318661, .field_318663, .field_318660').hide();
}

/*if (location.pathname.search("preview-missing-fields") !== -1) {*/
var removecourse = [
    '258705;;;10 October 2020, 10:30AM - 1:00PM',
    '258704;;;17 October 2020, 10:30AM - 1:00PM',
    '254240;;;29 September 2020, 12PM - 1:00PM',
    '254239;;;29 September 2020, 11AM - 12PM',
    '254238;;;29 September 2020, 10AM - 11AM',
    '251382;;;22 September 2020, 12PM - 1:00PM',
    '251384;;;22 September 2020, 10AM - 11AM',
    '252177;;;18 September 2020, 12PM - 1:00PM',
    '252175;;;18 September 2020, 10AM - 11AM',
    '254241;;;1 October 2020, 10AM - 11AM',
    '254602;;;6 October 2020, 10AM - 11AM',
    '260359;;;9 October 2020, 10AM - 11AM',
    '260361;;;9 October 2020, 11AM - 12PM',
    '260360;;;9 October 2020, 12PM - 1:00PM', '262082;;;15 October 2020, 11AM - 12PM', '262083;;;15 October 2020, 12PM - 1PM', '262081;;;15 October 2020, 10AM - 11AM', '308863;;;10 November 2020, 11AM - 12PM', '311027;;;19 November 2020, 10AM -11AM', '311031;;;19 November 2020, 12AM - 1PM', '254242;;;1 October 2020, 11AM - 12PM', '308860;;;5 November 2020, 10AM - 11AM', '308864;;;10 November 2020, 12PM - 1:00PM', '311030;;;19 November 2020, 11AM -12PM', '312153;;;2 December 2020, 10AM - 11AM', '312155;;;2 December 2020, 12AM - 1PM'
]

if ($('#gdpi_center').length == 1) {
    $(document).ajaxStop(function () {
        $('#gdpi_center option').each(function (i, e) {
            var localValue = $(e).val();
            if (removecourse.indexOf(localValue) != -1) {
                $(e).remove();
            }
        });
        $('.chosen-select').trigger('chosen:updated')
    });
}
/*}*/

/*to handled the dashboard token fee- Author: Anshul*/
var DashBoardHandledCase = function () {
    var Course = $('#course').val();
    var School = $('#campus').val();
    var stream = $('#field_318583').val();
    var temp;
    switch (School) {
        case 'Day Boarding School':
            Course === "54959;;;Toddler" ? temp = 'TODLER With Any School' : console.log();
            Course === "54960;;;Nursery" ? temp = 'KG or Nursery With Day Boarding' : console.log();
            Course === "54961;;;KG" ? temp = 'KG or Nursery With Day Boarding' : console.log();
            Course === "54962;;;I" ? temp = 'I or II With Day Boarding' : console.log();
            Course === "74627;;;II" ? temp = 'I or II With Day Boarding' : console.log();
            Course === "74628;;;III" ? temp = 'III With Day Boarding' : console.log();
            Course === "82180;;;IV" || Course === "82181;;;V" || Course === "82182;;;VI" ? temp = 'IV or V With Day Boarding' : console.log(); /*in this fees 6th class dayboarding is also incluuded but this is added in the last that's why i am not updating value here for data updation purpose*/
            Course === "82183;;;VII" || Course === "82184;;;VIII" ? temp = 'Class 7, 8 Day Boarding' : console.log();

            break;
        case 'Day School':
            Course === "54959;;;Toddler" ? temp = 'TODLER With Any School' : console.log();
            Course === "54960;;;Nursery" ? temp = 'KG or Nursery With Day School' : console.log();
            Course === "54961;;;KG" ? temp = 'KG or Nursery With Day School' : console.log();
            Course === "54962;;;I" ? temp = 'I or II With Day School' : console.log();
            Course === "74627;;;II" ? temp = 'I or II With Day School' : console.log();
            Course === "82180;;;IV" || Course === "74628;;;III" || Course === "82181;;;V" ? temp = 'III or IV or Vth With Day School' : console.log();
            Course === "82182;;;VI" || Course === "82183;;;VII" || Course === "82184;;;VIII" ? temp = '6, 7, 8 Day School' : console.log();
            break;
        default:
            break;
    }
    if (stream !== "") {
        switch (stream) {
            case 'Science':
                Course === "89868;;;XI" ? temp = 'Class 11 Science' : console.log();
                break;
            case 'Commerce':
                Course === "89868;;;XI" ? temp = 'Class 11 Commerce' : console.log();
                break;
            case 'Humanities':
                Course === "89868;;;XI" ? temp = 'Class 11 Humanities' : console.log();
                break;
            default:
                break;

        }
    }
    $('#field_235986').val(temp).trigger('chosen:updated');
}
$('#course,#campus,#field_318583').change(DashBoardHandledCase);
DashBoardHandledCase();



if (location.pathname.search("preview") == -1) {
    var remove = ['Day School']
    if ($('#campus').length == 1) {
        $(document).ajaxStop(function () {
            $('#campus option').each(function (i, e) {
                var localValue = $(e).val();
                if (remove.indexOf(localValue) != -1) {
                    $(e).remove();
                }
            });
            $('.chosen-select').trigger('chosen:updated')
        });
    }
}


if ($('#field_318546').val() == '31/03/2021') {
    $('#field_318546').val('31/03/2022').change();
}
$('#field_318589, #field_318657,#field_318664,#field_318659,#course,#campus').change(function () {
    feecalculation();
});
feecalculation();


function userTransportFacility() {
    if (!window.location.href.includes('preview')) {
        var userClass = $('#course').val() !== "" && $('#course').val() !== undefined ? $('#course').val() : console.log();
        console.log(`this is userclass - ${userClass}`);
        var userModeOfSchool = $('#campus').val() !== "" && $('#campus').val() !== undefined ? $('#campus').val() : console.log();
        console.log(`this is user${userModeOfSchool}`);
        if (userClass === "54959;;;Toddler" && userModeOfSchool != "") {
            $('#field_318590 option[value="No"]').show().trigger('chosen:updated');
        } else {
            $('#field_318590 option[value="No"]').hide().prop('selected', false).trigger('chosen:updated');
        }
    }
}
$('#course,#campus').change(function () {
    userTransportFacility();
});
$(document).ready(function () {
    userTransportFacility();
});
setTimeout(() => {
    feecalculation();
}, 800);

/**transport fee disable Ticket #121970 */
var removeTransportFee = [
    '400418;;;3100',
    '400417;;;840',
    '400415;;;5200',
    '400414;;;5280'
];

if ($('#field_318657').length == 1) {
    $(document).ajaxStop(function () {
        $('#field_318657 option').each(function (i, e) {
            var localValue = $(e).val();
            if (removeTransportFee.indexOf(localValue) != -1) {
                $(e).remove();
            }
        });
        $('.chosen-select').trigger('chosen:updated')
    });
}


function removeLate() {
    if ($("#field_416065").val() == "Father") {
        $(`#field_318593 option[value="Late"]`).hide().trigger("chosen:updated");
    }
    if ($("#field_416065").val() == "Mother") {
        $(`#field_318591 option[value="Late"]`).hide().trigger("chosen:updated");
    }

}
$("#field_416065").change(() => {
    removeLate();
})
removeLate();


$('#field_416063').change(function () {
    ($('#field_416065').trigger('chosen:updated'));
});

let value700 = ['527357;;;Club Town', '527358;;;Club town Garden/Ramkrishna Pally', '527359;;;CLUB TOWN HEIGHTS', '527360;;;Opposite School Gate', '527361;;;School Gate'];
let value1100 = ['526464;;;B. T. Rd. & Nilgunj Rd. Crossing', '254151;;;India Pottery Bazar', '254152;;;Manasbag', '254176;;;Agarpara on Nilgunj Rd.', '253965;;;Sindhu Stores', '254035;;;11 no. bus stand', '253551;;;Dishari Bhawan', '253552;;;Govt Qtr.', '253550;;;Rathtala'];
let value1660 = ['526289;;;6 no. bagan', '526303;;;Ghoshal Bagan', '526304;;;Gitanjali Park', '526309;;;Kalachand More', '526312;;;Ration Office', '526314;;;SHUKTARA CLUB', '526315;;;TALBANDA PUKUR(6 NO BAGAN)', '526466;;;Basant Bihar', '526469;;;Belgharia Bata', '526474;;;Belgharia P.O.', '526475;;;Bhairab Ganguly College', '526477;;;CSTC Bus Stand', '526479;;;Green Park', '526481;;;Jalkal', '526482;;;Mahua Club', '526483;;;Mahua Mistanna', '526488;;;Power House', '526489;;;Prabartak on Nilgunj Rd.', '526501;;;Uchoopool', '526615;;;L9', '526668;;;Green View', '526675;;;Prabartak on B.T. Road', '526676;;;Prasad Nagar', '526677;;;Rubber factory'];

let value4400 = ['526266;;;Agarpara Tentultala', '526274;;;Tentultala', '526287;;;34 Bus Stand', '526288;;;43/1 bus std. singhi battala', '526290;;;AMULYA CHARAN PAUL STREET', '526291;;;Ariadaha Sastitala', '526292;;;Ariadaha Tentultala', '526293;;;Chain Pukur', '526296;;;DAKSHINESWAR', '526297;;;Dakshineswar Post Office', '526298;;;Dakshineswar Stn.', '526299;;;Delhipara', '526300;;;Dipshikha', '526301;;;Dolpiri', '526302;;;Falguni', '526305;;;Goa Bagan', '526306;;;Hiralal College', '526307;;;Hospital More', '526308;;;India Foils', '526310;;;Military Barrack', '526311;;;Mousumi more', '526313;;;Sarada Math', '526316;;;TENTULTALA(ARIADAHA)', '526354;;;Badamtala', '526371;;;43 Bus Stand', '526377;;;Anandam Cinema', '526385;;;Baranagar Municipality', '526389;;;Baruipara on G.L.T. Road', '526390;;;Behalapara', '526394;;;Bonhooghly Petrol Pump', '526398;;;GLT Rd. Kalika Sweets', '526400;;;ISI backside gate', '526401;;;ISI on B.T. Road', '526410;;;Matrisadan', '526417;;;Petrol pump PWD Rd.', '526419;;;PWD Rd. Tentultala', '526426;;;TENTULTALA ON PWD ROAD', '526461;;;2 no. railgate', '526462;;;234/1 bus stand', '526468;;;Belgharia', '526470;;;Belgharia Battala', '526471;;;Belgharia Bazar', '526472;;;Belgharia flyover', '526473;;;belgharia flyover end', '526476;;;Biva Cinema', '526478;;;Eastern end of flyover', '526486;;;P.N. Dey Market', '526490;;;Pubpara', '526491;;;Ranipark', '526492;;;Sahid Bedi More', '526494;;;SBI Belgharia', '526495;;;SBI near Belgharia flyover', '526498;;;TEXMACO', '526502;;;Westernend flyover', '526609;;;34B Bus Stand', '526610;;;Ashokgarh', '526611;;;DUNLOP', '526612;;;Dunlop Bridge', '526613;;;Dunlop Gurudwara', '526614;;;Khalsa Model School', '526616;;;Sabeda bagan', '526662;;;Atithi Abasan', '526663;;;Bandhab Sangha Club', '526664;;;BENIR MATH', '526665;;;Creek School', '526666;;;ESI Hospital Gate', '526669;;;Kamarhatty', '526670;;;Kamarhatty Jute Mill Gate', '526672;;;Mukti cinema', '527289;;;Hardayal School', '527299;;;Udaipur'];

let value5640 = ['526268;;;Greenview(dhankol)'];

let value6040 = ['526267;;;GREEN VIEW(DHANKOL)', '526379;;;B.T. Rd. Bonhooghly', '526391;;;Bonhoghly', '526392;;;Bonhooghly on B.T. Road', '526393;;;Bonhooghly on G.L.T. Rd.'];

let value6320 = ['526427;;;Tobin Rd.', '526428;;;Tobin Rd. on B.T. Road,', '526429;;;Tobin Rd. on G.L.T. Rd.'];

let value6420 = ['526499;;;UBI- NEAR PUB PARA','526500;;;UBI-NEAR PUBPARA'];

let value6520 = ['526273;;;Sonar Bangla', '526275;;;Tentultala on B.T. Road', '526373;;;Abhijan Sangha Club Bonhooghly', '526374;;;Alambazar', '526375;;;Alambazar Bata', '526376;;;ALAMBAZAR ON PWD ROAD', '526378;;;Ananya Cinema', '526380;;;Banerjee para 203 bus std', '526381;;;Banerjee para Nabapally Builders', '526383;;;Baranagar Bazar', '526384;;;Baranagar Church', '526386;;;Baranagar P.O. Chaghar', '526387;;;Baranagar Post Office', '526399;;;Gokulbabur bazar', '526402;;;Jayashree Cinema', '526403;;;Jhulan tolar More', '526404;;;Kalakapara', '526405;;;Kalitala Math', '526406;;;Lake View Park', '526409;;;Mallick Colony', '526414;;;Neogipara on GLT Rd.', '526420;;;R.I.C Bazar', '526423;;;Sastitala on G.L.T. Rd.', '526424;;;Tantipara', '526425;;;Tantipara Battala', '526430;;;Uttarayan', '526467;;;Basudevpur', '526667;;;Fire Brigade', '527286;;;Crolbagan'];

let value6580 = ['526263;;;Agarpara Duckback', '526264;;;Agarpara on Nilgunj Rd.', '526270;;;Mollarhat', '526411;;;Mayra Danga', '526413;;;Narendranath School', '526422;;;Sachyasi Para', '526435;;;DuCKBACK MORE', '526493;;;Sanhati Club', '526600;;;Bidyasagar Road', '526604;;;Promod Nagar Bazar', '526671;;;Kamarhatty Phoolbagan', '526674;;;Post Office Kamarhatty', '526678;;;Titli Ghat', '526749;;;Nandannagar', '526750;;;Nandannagar Bazar', '526757;;;Alipore More', '526758;;;Arabindo Nagar', '527282;;;Aurobindo pally', '527287;;;Culture more', '527293;;;Nimta P.O.', '527298;;;Tarun Tirtha Club', '527315;;;Bengal chemical', '527432;;;Trikon Park'];

let value6960 = ['526262;;;Agarpara Chowmatha', '526465;;;Baisakhi Math(Jatin Das 5 no.)', '526575;;;Jheelpar'];

let value7140 = ['526269;;;Mahajati Agarpara', '526276;;;Ushumpur Adarsh School', '526277;;;Ushumpur Battala', '526278;;;Ushumpur Bus Stand', '526372;;;A.K. Mukherjee Rd.', '526382;;;Bangalakhi', '526388;;;Baranagar Thana', '526395;;;Dhartin Factory', '526397;;;Ghoshpara', '526407;;;Lal Quarter', '526408;;;Mahadev Sweets', '526415;;;Noapara', '526416;;;Party Office', '526418;;;Petrol pump Durga Mandop', '526463;;;4 No. Rail Gate', '526531;;;Majerhati Battala', '526570;;;Cossipore Uddanbati', '526661;;;Wareless Gate', '526673;;;Pal Builders', '526756;;;201 bus stand', '527284;;;Beltala', '527285;;;Chowdhury para', '527288;;;Halurmore', '527290;;;Joragamkal', '527292;;;Nimta Mahanagar', '527296;;;Olaichanditala', '527316;;;Dhankal', '527317;;;Panihati Sporting Club', '527318;;;Swedesi More', '527414;;;Sinthimore', '527424;;;Peerless Nagar, Sodepur', '527430;;;Sodepur Traffic More'];

let value7580 = ['526261;;;5 No. Railgate', '526265;;;Agarpara Stn.', '526279;;;Ushumpur Sadhur Bagan', '526356;;;Bally Bazar', '526358;;;Bally Kalimandir', '526359;;;Bally Nimtala', '526361;;;Ballykhal', '526370;;;34C Bus Stand', '526421;;;Ratanbabu Rd.', '526535;;;Tantkal Birati', '526561;;;Chiriamore', '527283;;;Battala Mini Bus Stand', '527294;;;Nimta P.S.', '527297;;;Pathanpur More', '527407;;;Chasmakal', '527408;;;Kagajkal', '527412;;;RBT SCHOOL', '527415;;;South Sinthi', '527417;;;Sree Guru Bastralaya'];

let value7920 = ['526294;;;Chaitalpara', '526360;;;Bally Thana', '526363;;;Nimtala', '526412;;;MIG Qtr. on Raja Manindra Rd.', '526521;;;Birati College', '526522;;;Birati Deluxe complex', '526560;;;C.I.T. on B.T. Road', '526563;;;Seals Garden', '526569;;;Cossipore MIG Qtr.', '527405;;;Beni Colony', '527406;;;Binayak Enclave', '527409;;;Kultala', '527410;;;Rabindra Bharati Hostel', '527411;;;Rabindra Bharati University', '527426;;;Raja Road Sodepur', '527431;;;Srineketan Sodepur', '527443;;;Gouri Cinema uttarpara', '527446;;;Uttarpara Bazar', '527450;;;Uttarpara Tiptop'];

let value8180 = ['526565;;;B.B. Bazar, Cossipore', '527404;;;Baishaki more', '527421;;;Kanchkal', '527428;;;Sodepur Flyover end', '527429;;;Sodepur Girja', '527449;;;Uttarpara Kheyaghat'];

let value8640 = ['526355;;;Bally Badamtala.', '526357;;;Bally Halt', '526362;;;Dawnagachi', '526366;;;Tarka Sidhyanta Lane', '526528;;;Itkhola, Birati', '526558;;;Ushagate', '526562;;;Radio Gali', '526566;;;Chitpur Bridge', '526567;;;Cossipore Girls School', '526568;;;Cossipore Gun & Shell', '526571;;;Gun & Shell Factory Gate', '526572;;;Gun & Shell School', '526579;;;30A Bus Stand', '526690;;;Keya more', '526693;;;Khardah ECL', '527295;;;Nutanpally', '527413;;;SBI near 30A', '527418;;;Amrabati', '527427;;;Rathindra Cinema', '527438;;;15 No. Bus Stand Ultadanga', '527447;;;Uttarpara Doltala'];

let value8700 = ['526271;;;Onkar Park Ushumpur', '526365;;;Lalbaba College', '526497;;;State Garage', '526518;;;AFTER birati college', '526519;;;Banikmore', '526599;;;Seven Tanks Welfare Society', '526686;;;Balaram hospital new', '526691;;;Khardah Prafulla', '526692;;;Khardah Balaram', '526694;;;Khardah Lichubagan', '526691;;;Khardah Prafulla', '526698;;;Khardah Thana', '526701;;;PraFULLA CINEMA', '526704;;;Rashmoni more', '527300;;;2 no. Bus Terminus', '527303;;;Chunibabu Bazar', '527304;;;Northern Avenue', '527307;;;Paikpara More on Raja Manin.Rd', '527308;;;Paikpara on B.T. Road', '527309;;;State Garage-Paikpara on B.T.Road', '527384;;;Tala Bridge', '527420;;;H.B. Town, Sodepur', '527444;;;Prantik Paribar', '527445;;;Sakher Bazar', '527448;;;Uttarpara Housing'];

let value8900 = ['526272;;;Sadhur More', '526325;;;240 Bus Stand', '526326;;;3 No. Bus Stand', '526327;;;Bagbazar', '526330;;;Boroline House', '526331;;;Girish Manch', '526332;;;Tatagate', '526364;;;Ganguly St.', '526456;;;Belgachia Metro Station', '526459;;;belgachia triangular park', '526460;;;belgachia UBI', '526504;;;Belur bazar', '526505;;;Belur Math', '526524;;;Birati Mahajati', '526525;;;Birati Mahajati School', '526526;;;Birati on Jessore Rd.', '526529;;;Mahajati Bazar', '526530;;;Mahajati kali mandir', '526534;;;SBI BIRATI', '526559;;;St. Stephen School', '526576;;;Rajchandrapur', '526581;;;Chanapatty', '526598;;;Seven Tanks', '526619;;;Durganagar Delhi Road', '526653;;;Siddeshwari Kali Bari', '526695;;;Khardah Municipality', '526696;;;Khardah Sandhya', '526697;;;Khardah Stn.Rd. on B.T. Road.', '526702;;;Priyanagar', '527291;;;Kola bagan', '527301;;;Aashubabu Bazar', '527302;;;Ashubabur Bazaar', '527305;;;Paikpara', '527306;;;Paikpara 1st Row', '527310;;;Tala Tank', '527311;;;Tala Tank on paikpara', '527312;;;Tala Triangular Park', '527313;;;Talapark', '527314;;;Talatank on paikpara', '527319;;;22 No.near Duttabagan', '527320;;;Duttabagan', '527321;;;J.K. Duttabagan', '527322;;;Milk Colony', '527370;;;Shaw Wallace', '527376;;;A.V. School', '527381;;;Raja Manindra Rd.', '527382;;;Rajballavpara', '527383;;;Shyambazar', '527385;;;Tala Post office', '527416;;;South Sinthi & 7 Tanks Crossing', '527422;;;Katgola', '527433;;;Uttarayan(Sodepur)'];

let value8960 = ['526328;;;Bagbazar Bata', '526329;;;Bagbazar St.', '526439;;;Kazipara', '526458;;;Belgachia Road', '526507;;;Hatibagan', '526515;;;Town School', '526516;;;Vidyasagar College', '526523;;;Birati Kalibari', '526533;;;Sarat Colony Birati', '526548;;;Grey Street', '526555;;;Sovabazar Metro Stn.', '526577;;;Saheb Bagan', '526578;;;11 A No Bus Stand, Dum Dum Road', '526584;;;Dumdum Phari', '526587;;;Dumdum Station', '526591;;;Guha Road', '526593;;;Lila Cinema', '526594;;;Motijheel', '526617;;;Durganagar', '526618;;;Durganagar (DURGAPUR EXPRESSWAY)', '526620;;;Durganagar Rail Gate', '526626;;;Ghola Bazar', '526627;;;Ghola Check Post', '526628;;;Ghola Old Post Office', '526629;;;Bidhan Sarani P.O.', '526630;;;Fariapukur- BIDHAN SARANI', '526632;;;Hindmotor', '526633;;;Hindmotor Battala', '526634;;;Hindmotor Ghoshpara', '526635;;;Hindmotor Shibtala', '526685;;;Khanna Cinema', '526689;;;Kalyannagar', '526715;;;Bhadrakali', '526722;;;Jessore Rd. Tentultala', '526724;;;kalindi on jessore rd.', '526730;;;Don Bosco School', '526732;;;Liluah', '526742;;;Dumdum Kajipara', '527323;;;Patipukur', '527324;;;Patipukur Qtr. R/Bldg.', '527326;;;Canal Road', '527378;;;Fariapukur', '527379;;;Park Institution', '527419;;;Chanditala', '527423;;;Panshila', '527425;;;Purbayan katgola'];

let value9220 = ['526280;;;Airport Gate No. 2.75', '526317;;;Aahiritola', '526318;;;B.K. Paul Avenue', '526321;;;Kumartolly', '526322;;;Nandoram Bose St.', '526323;;;Oriental School', '526324;;;Sovabazar on Rabindra Sarani', '526396;;;Dorjipara', '526508;;;Hedua Park', '526509;;;Khudiram Bose College', '526510;;;Rangana', '526512;;;Rupbani', '526549;;;hatibagan beadon st.crossing', '526582;;;Chatakal', '526586;;;Dumdum Qtr.', '526588;;;Ghughudanga Phari', '526589;;;Greeosree', '526590;;;Grihosree', '526592;;;Hanuman Mandir', '526596;;;Private Road', '526648;;;Parijat Cinema', '526679;;;Bagmari Bazar', '526699;;;Mandirpara', '526703;;;Rahara Bazar', '526706;;;BOMBAY ROAD', '526725;;;Kalindi Housing', '526726;;;Kalindi SBI', '526729;;;Bazrangbali (Liluah)', '526737;;;Karbala', '526740;;;Sahitya Parishad', '527336;;;Babudanga', '527338;;;Ghusuri', '527342;;;Salkia', '527368;;;Asian bldg. Serampore', '527377;;;Deys Medical', '527380;;;Raja Dinendra St. Crossing'];

let value9300 = ['526285;;;Amherst St. P.S.', '526319;;;Company Bagan', '526320;;;Jorabagan Park', '526367;;;Bangur Avenue', '526368;;;Bangur Avenue C Block', '526369;;;Bangur Avenue Sony Galary', '526441;;;B.N. Bose Hospital', '526447;;;Barrackpore Talpukur', '526454;;;Talpukur Barrackpore', '526455;;;Tulip Nursing Home', '526506;;;Ganguram', '526511;;;Rishikesh Park', '526513;;;Sreemani Market', '526514;;;Thantania', '526517;;;Vivekananda Rd.', '526520;;;Bankra on Jessore Rd.', '526527;;;Gouripur Kali Bari', '526532;;;Modinagar (Bakra)', '526546;;;C.R. Avenue Bowbazar crossing', '526547;;;Girish Park', '526550;;;Liberty Cinema', '526551;;;M.G. Road Crossing', '526552;;;Md. Ali Park', '526554;;;Ram Mandir', '526580;;;Central Jail', '526583;;;Clive House Dumdum', '526597;;;Rodkal', '526606;;;Aditya Academy', '526646;;;Nandi Bagan', '526647;;;Nutan Mandir', '526649;;;Ramsita Mandir', '526651;;;Sattapith, Howrah', '526652;;;Sitanath Bose Lane', '526682;;;Kankurgachi', '526683;;;Kankurgachi Rail Bridge', '526684;;;Phoolbagan', '526687;;;Dangapara', '526700;;;Panchayatmore', '526714;;;Baromandir Konnagar', '526716;;;Konnagar Bata', '526717;;;Konnagar Bisalakhi', '526718;;;Barat on Jessore Rd.', '526719;;;China Temple Jessore Rd.', '526720;;;Jaya Cinema Laketown', '526721;;;Jessore Rd. Bangur', '526727;;;Laketown', '526728;;;Laketown VIP Rd. Crossing', '526731;;;Jaiswal Hospital', '526734;;;Michaelnagar', '526736;;;Capital Nursing Home on A.P.C Road', '526738;;;Manicktala', '526741;;;Sukia Street', '526744;;;Nager bazar', '526745;;;ordinance factory', '526752;;;B.T. College New Barrackpore', '527327;;;Pathuriaghata', '527329;;;Malapara', '527337;;;Bandhaghat', '527341;;;Kalitala Ghusuri', '527343;;;Salkia Chowrasta', '527364;;;Rajabazar', '527365;;;Science College'];

let value9380 = ['526283;;;Etalgacha Airport gate', '526286;;;City College', '526442;;;Barrackpore Chiriamore', '526537;;;Indian Airlines', '526545;;;Beadon Street', '526553;;;Medical College', '526557;;;StRAND ROAD', '526564;;;College St. Bata', '526574;;;Dankuni', '526585;;;Dumdum Post Office', '526595;;;Post Office DUMDUM', '526601;;;Dum DUM CANT', '526602;;;Dumdum Cantt. Stn.', '526607;;;Dumdum Park on Jessore Road', '526608;;;Dumdum Park on V.I.P. Road', '526621;;;Ghash Bagan', '526622;;;Italgacha', '526631;;;Hatirkul', '526735;;;Sajirhat', '526739;;;Manicktala Fire Stn.', '526743;;;Gora Bazar', '526753;;;Ghaser Math New Barrackpore', '526754;;;InSIDE NEW BARRACKPORE', '527328;;;Ganesh Talkies', '527334;;;Rishra Banstala', '527339;;;Golabari Thana', '527362;;;Jagat Cinema', '527363;;;Prachi Cinema', '527366;;;Sealdah', '527367;;;Taki School'];

let value9580 = ['526654;;;BABLATALA(KAIKHALI)', '526655;;;KAIKHALI', '526656;;;KAIKHALI CHIRIAMORE', '526657;;;Kaikhali on VIP Rd.', '526658;;;KAIKHALI ROY PARA', '526659;;;KALI PARK(KAIKHALI)', '526680;;;Beliaghata Main Rd.', '526681;;;CIT More on Beliaghata Main Rd.', '526751;;;7 No.Railway Gate New Bkp'];

let value9740 = ['526260;;;Moulali', '526281;;;Airport Gate No.1', '526282;;;Airport Gate No.2.5', '526284;;;HMV on Jessore Rd.', '526440;;;15 No. Rail gate bkp', '526444;;;Barrackpore Lalkuthi', '526445;;;Barrackpore Rail Gate No.15', '526446;;;Barrackpore Station', '526448;;;Chandanpukur Battala', '526453;;;Panacia Nursing Home', '526503;;;Joramandir Beliaghata', '526536;;;Bowbazar on Bidhan Sarani', '526556;;;Statesman', '526573;;;Gurdwara near Regent Cinema', '526603;;;Natun Bazar', '526605;;;Subhash Nagar Highschool', '526623;;;Entally Market', '526636;;;Bangabasi', '526638;;;Howrah Court', '526639;;;Howrah Flyover', '526640;;;Howrah Maidan', '526712;;;Kona Highway', '526713;;;Kona More', '526755;;;New Barrackpore', '527335;;;Sandhya Bazar Rishra', '527340;;;Gulmohar Rly Qtr.', '527350;;;Tank No. 4 Salt lake', '527355;;;Tank No.3 Salt Lake', '527356;;;Tank No.5 Salt Lake'];

let value9900 = ['526341;;;Haldiram', '526349;;;Podder Bihar on V.I.P Road', '526438;;;Kajipara More', '526443;;;Barrackpore Ghusipara', '526449;;;Chandanpukur Bazar', '526450;;;Chandanpukur Masjid More', '526451;;;Ghusipara Barrackpore', '526452;;;Nonachandanpukur', '526538;;;Chingrighata', '526539;;;Hyatt Regency', '526624;;;Nonapukur Tram Depot', '526637;;;Fazir Bazar', '526641;;;Howrah Station', '526642;;;Jain Hospital', '526643;;;Kajipara More Howrah', '526644;;;Mallick Fatak', '526645;;;Mallick Fatak on Foreshore Rd', '526650;;;Sandhya Bazar, howrah', '526660;;;CMDA QTR on Kalyani exp', '526707;;;Chamrail', '526711;;;Kona High School', '526733;;;Madhyamgram Chowmatha', '527346;;;Karunamayee', '527347;;;Saltlake Swimming Pool', '527351;;;Tank No. 7 Salt Lake', '527369;;;Serampore Battala', '527371;;;AFTER Shibpur Tram Depot', '527372;;;Ganges Garden shibpur', '527373;;;Shibpur Police Line', '527374;;;Shibpur Thana', '527375;;;Shibpur Tram Depot', '527388;;;Ichapore Badamtala', '527395;;;Palta Bus Stand', '527434;;;Khatir bazar', '527435;;;Mahesh Phari'];

let value10000 = ['526334;;;Aswini Nagar', '526335;;;Baguiati on VIP Road', '526336;;;Baguihati More', '526337;;;Big Bazar on VIP Road', '526338;;;Chalpatti', '526339;;;Chinar Park', '526340;;;Dhankal on VIP Road', '526343;;;Jagat Pur', '526344;;;Jangra', '526345;;;Jora Mandir', '526346;;;Kestopur on VIP Road', '526347;;;Lokenath Mandir', '526348;;;Narayan tala on V.I.P. Road, Baguiati', '526350;;;Sanimandir Baguiati', '526351;;;Tegharia On V.I.P Road', '526352;;;V.I.P. Market', '526353;;;VIP Enclave (BIGBAZAR)', '526433;;;Barasat Railgate', '526434;;;Dak Bunglow More', '526437;;;Helabattala', '526457;;;Belgachia More', '526543;;;Science City', '526544;;;V.I.P. Bazar on EM-Byepass', '526688;;;Kalyani Rd. Dangadighata', '526705;;;Biradingi', '526723;;;Jora Mandir on Jessor Raod', '527348;;;Saltlake Tank No.10', '527352;;;Tank No. 9 Salt Lake', '527353;;;Tank No.10, Salt Lake', '527354;;;Tank No.12 Salt Lake', '527387;;;Ichapore', '527389;;;Ichapore Kanthadhar', '527390;;;Ichapore Kanthadhar UTI', '527391;;;Ichapore Manicktala', '527392;;;Ichapore Petrol Pump', '527393;;;Ichapore Store Bazar', '527394;;;kantadhar ichapore', '527398;;;Shyamnagar Chowringhee', '527399;;;Shyamnagar Nowapara', '527400;;;Shyamnagar P.O.'];

let value10100 = ['526295;;;Chatterjee Para', '526333;;;30C/1 Bus Stand', '526342;;;Hatiara', '526431;;;Barasat Colony More', '526432;;;barasat kalibari', '526436;;;Fortune City', '526487;;;Panchanan Tala', '526542;;;Ruby Hospital', '526625;;;Gariahat More', '526708;;;Icchapur Tank (HOWRAH)', '526709;;;JAGADISHPUR', '526710;;;Kadam Tala Bazar', '526746;;;Jagatdal', '526747;;;Jagatdal CMDA Qtr.', '527344;;;A.T.I. Salt Lake', '527345;;;Bijon Bhavan', '527349;;;Tank No. 11 Salt Lake', '527396;;;Pinkal more Shyamnagar', '527397;;;Rlygate No.17 Ghoshpara', '527401;;;Shyamnagar Station', '527402;;;Shyamnagar Transformer', '527403;;;Shyamnagar UBI'];

let value10420 = ['526540;;;Metro Cash & Carry', '527325;;;AJAY NAGAR', '527386;;;Bhatpara'];

let value10780 = ['526541;;;Mukundopur', '526748;;;Naihati Petrol Pump'];


function feeAuto() {
    if (value700.indexOf($("#field_428944").val()) > -1) {
        $(`#field_428975`).val('700').change();
    } else if (value1100.indexOf($("#field_428944").val()) > -1) {
        $(`#field_428975`).val('1100').change();
    } else if (value1660.indexOf($("#field_428944").val()) > -1) {
        $(`#field_428975`).val('1660').change();
    } else if (value4400.indexOf($("#field_428944").val()) > -1) {
        $(`#field_428975`).val('4400').change();
    } else if (value5640.indexOf($("#field_428944").val()) > -1) {
        $(`#field_428975`).val('5640').change();
    } else if (value6040.indexOf($("#field_428944").val()) > -1) {
        $(`#field_428975`).val('6040').change();
    } else if (value6320.indexOf($("#field_428944").val()) > -1) {
        $(`#field_428975`).val('6320').change();
    } else if (value6420.indexOf($("#field_428944").val()) > -1) {
        $(`#field_428975`).val('6420').change();
    } else if (value6520.indexOf($("#field_428944").val()) > -1) {
        $(`#field_428975`).val('6520').change();
    } else if (value6580.indexOf($("#field_428944").val()) > -1) {
        $(`#field_428975`).val('6580').change();
    } else if (value6960.indexOf($("#field_428944").val()) > -1) {
        $(`#field_428975`).val('6960').change();
    } else if (value7140.indexOf($("#field_428944").val()) > -1) {
        $(`#field_428975`).val('7140').change();
    } else if (value7580.indexOf($("#field_428944").val()) > -1) {
        $(`#field_428975`).val('7580').change();
    } else if (value7920.indexOf($("#field_428944").val()) > -1) {
        $(`#field_428975`).val('7920').change();
    } else if (value8180.indexOf($("#field_428944").val()) > -1) {
        $(`#field_428975`).val('8180').change();
    } else if (value8640.indexOf($("#field_428944").val()) > -1) {
        $(`#field_428975`).val('8640').change();
    } else if (value8700.indexOf($("#field_428944").val()) > -1) {
        $(`#field_428975`).val('8700').change();
    } else if (value8900.indexOf($("#field_428944").val()) > -1) {
        $(`#field_428975`).val('8900').change();
    } else if (value8960.indexOf($("#field_428944").val()) > -1) {
        $(`#field_428975`).val('8960').change();
    } else if (value9220.indexOf($("#field_428944").val()) > -1) {
        $(`#field_428975`).val('9220').change();
    } else if (value9300.indexOf($("#field_428944").val()) > -1) {
        $(`#field_428975`).val('9300').change();
    } else if (value9380.indexOf($("#field_428944").val()) > -1) {
        $(`#field_428975`).val('9380').change();
    } else if (value9580.indexOf($("#field_428944").val()) > -1) {
        $(`#field_428975`).val('9580').change();
    } else if (value9740.indexOf($("#field_428944").val()) > -1) {
        $(`#field_428975`).val('9740').change();
    } else if (value9900.indexOf($("#field_428944").val()) > -1) {
        $(`#field_428975`).val('9900').change();
    } else if (value10000.indexOf($("#field_428944").val()) > -1) {
        $(`#field_428975`).val('10000').change();
    } else if (value10100.indexOf($("#field_428944").val()) > -1) {
        $(`#field_428975`).val('10100').change();
    } else if (value10420.indexOf($("#field_428944").val()) > -1) {
        $(`#field_428975`).val('10420').change();
    } else if (value10780.indexOf($("#field_428944").val()) > -1) {
        $(`#field_428975`).val('10780').change();
    } else {
        $(`#field_428975`).val('').change();
    }


    $('.chosen-select').trigger('chosen:updated');
}

$("#field_428943, #field_428944, #field_428945").change(feeAuto);

$(document).ajaxStop(feeAuto);

/* Bus fee */
$('#field_318590').change(function(){$('#field_428943').trigger('change')});