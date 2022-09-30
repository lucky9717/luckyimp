if ($('.reSubmitLogicForm').length) {
    $('label').each(function () {
        if ($(this).parent().css('display') == 'block') {
            $(this).parent().css('display', 'none');
        }
    });
    $('.heading, .section_break').hide()
    // $(".field_140772,.field_140788,.field_140789,.field_176444").hide();

    // var showFields = ['field_409773', 'field_370034', 'field_296022'];
    // $(document).ready(function () {
    //     showFields.forEach(function (ids) {
    //         $('#' + ids).parent().show();
    //         $('.' + ids).css('display', 'block');
    //     });
    // });
    $('#field_409773').change(function () {
        $('#field_409773').val() != '' ? $('#field_409774').val('Yes').trigger('chosen:updated') : $('#field_409774').val('No').trigger('chosen:updated');
    });
}

/** for 11 May 22 */
if ($(".reSubmitLogicForm").length) {
    $('#progress_bar_2, .countFormNpf, .field_140779').hide();

    if ($('#field_410097,#field_410098').length == 2) {
        function autoYes21Dec() {
            $('#field_410097').parent().show();
            $('.field_296022,.field_366644, .field_370034').show(); //instruction

            if ($('#field_410097').val() != "") {
                $('#field_410098').val('Yes').trigger('chosen:updated');
            } else {
                $('#field_410098').val('No').trigger('chosen:updated');
            }
        }
        $('#field_410097').change(autoYes21Dec);
        autoYes21Dec();
        $('#field_410097').is(":visible") && $('#field_410097').after("<p>Scroll to the bottom of the screen to submit the essay.</p>");
    }
} else {
    $('.field_296022, .field_370034').hide(); //instruction
}
/*END */


// CHILD

// if ($(".reSubmitLogicForm").length) {

//     $('.field_296022').hide();
//     $('.field_269628').hide();
//     $(".field_249453").show()
//     $(".field_265289").show() //Upload Acceptance Document show
//     // 24th jan - 117222
//     // $('.visa_type').show();
//     $('.field_370034').hide();
//     $('.field_249456').hide();
//     $('.field_249453').hide();
//     $('.field_249452').show();
// }else{

// $('.field_249452').hide();
// $('.field_370034').hide();
// $(".field_249453").hide()
// $(".field_265289").hide() //Upload Acceptance Document hide
// $('.visa_type').hide();
// $('.field_269628').hide();
// }

/** for 20 Dec 21 */
if ($(".reSubmitLogicForm").length) {

    $("#field_265289").parent().show();
    addRequired('field_265289');
    $('#progress_bar_2, .countFormNpf, .field_140779').hide();

    if ($('#field_368735,#field_368734').length == 2) {
        function autoYes20Dec() {
            $('#field_368735').is(":disabled") && $('#field_368735').parent().show()

            $('.field_370034').show(); //Instruction

            if ($('#field_368735').val() != "") {
                $('#field_368734').val('Yes').trigger('chosen:updated');
            } else {
                $('#field_368734').val('No').trigger('chosen:updated');
            }
        }
        $('#field_368735').change(autoYes20Dec);
        autoYes20Dec();
        $('#field_368735').is(":visible") && $('#field_368735').after("<p>Scroll to the bottom of the screen to submit the essay.</p>");
    }
} else {
    $('.field_296022, .field_370034').hide(); //Instruction
}
/*END */

/** for 21 Dec 21 */
if ($(".reSubmitLogicForm").length) {
    $('#progress_bar_2, .countFormNpf, .field_140779').hide();

    if ($('#field_368735,#field_368734').length == 2) {
        function autoYes21Dec() {
            $('#field_368735').parent().show();
            $('.field_296022,.field_366644, .field_370034').show(); //instruction

            if ($('#field_368735').val() != "") {
                $('#field_368734').val('Yes').trigger('chosen:updated');
            } else {
                $('#field_368734').val('No').trigger('chosen:updated');
            }
        }
        $('#field_368735').change(autoYes21Dec);
        autoYes21Dec();
        $('#field_368735').is(":visible") && $('#field_368735').after("<p>Scroll to the bottom of the screen to submit the essay.</p>");
    }
} else {
    $('.field_296022, .field_370034').hide(); //instruction
}
/*END */

/** for 29 april 
$('.field_297198, .field_227200').hide();
if ($('#field_297198,#field_227200').length == 2) {
    function autoYes29april() {
        if ($('#field_297198').val() != "") {
            $('#field_227200').val('Yes').trigger('chosen:updated');
        } else {
            $('#field_227200').val('No').trigger('chosen:updated');
        }
    }
    $('#field_297198').change(autoYes29april);
    autoYes29april();
}
if ($('.field_297198').is(":visible")) {
    $('.field_297198').after("<p>Scroll to the bottom of the screen to submit the essay.</p>");
}

/*re-submit
 $('.field_297198').hide();

if ($("#next_btn").text() == "Submit" && $("#field_140790, #field_140791").is(":disabled")) {
    $('.field_297198').show();
} else {
    $('.field_297198').hide();
} 
/*END */


/** for 30 april 
$('.field_297199, .field_227201').hide();
if ($('#field_297199,#field_227201').length == 2) {
    function autoYes30april() {
        if ($('#field_297199').val() != "") {
            $('#field_227201').val('Yes').trigger('chosen:updated');
        } else {
            $('#field_227201').val('No').trigger('chosen:updated');
        }
    }
    $('#field_297199').change(autoYes30april);
    autoYes30april();
}
if ($('.field_297199').is(":visible")) {
    $('.field_297199').after("<p>Scroll to the bottom of the screen to submit the essay.</p>");
}
/*re-submit
 $('.field_297199').hide();

if ($("#next_btn").text() == "Submit" && $("#field_140790, #field_140791").is(":disabled")) {
    $('.field_297199').show();
} else {
    $('.field_297199').hide();
} 
/*END */
if ($('#next_btn:contains("Make Payment")').length == 1) {
    $('body').append('<div tabindex="-1" class="modal fade in publishpopup" id="ConfirmSubmitArea"><div class="modal-dialog"><div class="modal-content"><div class="modal-header" style="background-color: #205c9d;text-align: center;"><button aria-hidden="true" data-dismiss="modal" class="close npf-close" type="button" style="background-color: red;"><span class="glyphicon glyphicon-remove"></span></button><h2 class="modal-title" id="confirmSubmitTitle" style="color: white !important;padding-bottom: 5px;">Confirm</h2></div><div class="modal-body text-center"><p class="text-center modalcontent" id="ConfirmMsgBody">Kindly check your Email Address and Phone Number before making the Payment.</p><a onclick="SaveForm(\'next\');" class="btn btn-npf" href="javascript:void(0);" id="next_btn" style="background-color: #205c9d !important;font-size: 18px;">Yes</a> <a href="https://app.greatlakes.edu.in/pgpm/profile" class="btn btn-default">No</a></div></div></div></div>');
    $('#next_btn:contains("Make Payment")').attr("onclick", "$('#ConfirmSubmitArea').modal({show: true});");
    if ($('#next_btn').html() == '<span class="glyphicon glyphicon-chevron-right"></span>') {
        $('#next_btn').attr("onclick", "$('#ConfirmSubmitArea').modal({show: true});");
    }
}
if ($('#next_btn:contains("Submit Application")').length == 1 || $('#field_137709_0').is(':checked') === true) {
    $('body').append('<div tabindex="-1" class="modal fade in publishpopup" id="ConfirmSubmitArea"><div class="modal-dialog"><div class="modal-content"><div class="modal-header" style="background-color: #205c9d;text-align: center;"><button aria-hidden="true" data-dismiss="modal" class="close npf-close" type="button" style="background-color: red;"><span class="glyphicon glyphicon-remove"></span></button><h2 class="modal-title" id="confirmSubmitTitle" style="color: white !important;padding-bottom: 5px;">Confirm</h2></div><div class="modal-body text-center"><p class="text-center modalcontent" id="ConfirmMsgBody">Please ensure you have reviewed your entire application and furnished accurate information for all relevant fields. If you are yet to update any important information including Awards, Achievements or Extra Curricular Activities, please click on Cancel to go back to your form. You can click on Submit if you are ready to submit your application.</p><a class="btn btn-raised submit-btn" id="next_btn" href="javascript:void(0)" onclick="SaveForm(\'submit_application\');">Submit</a><a href="https://app.greatlakes.edu.in/profile" data-dismiss="modal" class="btn btn-default">Cancel</a></div></div></div></div>');
    $('#next_btn:contains("Submit Application")').attr("onclick", "$('#ConfirmSubmitArea').modal({show: true});");
    if ($('#field_137709_0').is(':checked') === true && $('#next_btn').html() == '<span class="glyphicon glyphicon-chevron-right"></span>') {
        $('#next_btn').attr("onclick", "$('#ConfirmSubmitArea').modal({show: true});");
    }
}

/** for 21 april */
//$('.field_296022, .field_279097').hide();
if ($('#field_296014,#field_296015').length == 2) {
    function autoYes21april() {
        if ($('#field_296014').val() != "") {
            $('#field_296015').val('Yes').trigger('chosen:updated');
        } else {
            $('#field_296015').val('No').trigger('chosen:updated');
        }
    }
    $('#field_296014').change(autoYes21april);
    autoYes21april();
}
if ($('.field_296014').is(":visible")) {
    $('.field_296014').after("<p>Scroll to the bottom of the screen to submit the essay.</p>");
}



if (location.pathname.search("/pgdm/form/preview-missing-fields/") != -1) {
    $(".field_140786").parent().parent().parent().parent().hide();
}
/*re-submit*/
/* $('.field_265289').hide();

if ($("#next_btn").text() == "Submit" && $("#field_140790, #field_140791").is(":disabled")) {
    $('.field_265289').show();
} else {
    $('.field_265289').hide();
} */

/*END */

$('#form_price_h2').html("Application Fee " + $('#form_price_h2').html())
$('title').text("Great Lakes PGDM 2020-2022 E-Form");
$('.requiredStar').parent().filter('label').each(function (i, e) {
    $(e).attr("style", "display: inline-block !important; padding-left: 5px;font-size:18px !important");
    $(e).before($(e).find('.requiredStar'));
})
// $('.requiredStar').parent().filter('td').each(function (i, e) {
//     e.insertBefore(e.firstElementChild, e.firstChild)
//     $(e.firstElementChild).css({
//         "display": "inline",
//         "padding-right": "5px"
//     })
// })
$('.radio.radio-primary.horizontal').css("display", "block");
$('.checkbox label[for="radios"]').after('<br>')
// $('span.required_asterisk').css({
//     "right": "initial",
//     "left": "15px"
// });

/*  Left Click Not Allowed  */
document.oncontextmenu = function (event) {
    event.preventDefault();
}

function integerOnly(elementArray) {
    if (typeof (elementArray) == "object" && elementArray.length != undefined) {
        elementArray.forEach(element => {
            if ($('#' + element).length) {
                $('#' + element).keypress(function (event) {
                    if (event.which < 48 || event.which > 57) {
                        event.preventDefault();
                    }
                });
            }
        });
    } else {
        throw 'Must pass an Array like Iterable object';
    }
}

function floatType(elementArray) {
    if (typeof (elementArray) == "object" && elementArray.length != undefined) {
        elementArray.forEach(element => {
            if ($('#' + element).length) {
                $('#' + element).keypress(function (event) {
                    if ((event.which != 46) && (event.which < 48 || event.which > 57)) {
                        event.preventDefault();
                    } else if (event.which == 46) {
                        if (event.target.value.split('.').length > 1) {
                            event.preventDefault();
                        }
                    }
                });
            }
        });
    } else {
        throw 'Must pass an Array like Iterable object';
    }
}

function alphaOnly(elementArray) {
    if (typeof (elementArray) == "object" && elementArray.length != undefined) {
        elementArray.forEach(element => {
            if ($('#' + element).length) {
                $('#' + element).keypress(function (event) {
                    if ((event.which != 32) && (event.which < 65 || event.which > 90) && (event.which < 97 || event.which > 122)) {
                        event.preventDefault();
                    }
                });
            }
        });
    } else {
        throw 'Must pass an Array like Iterable object';
    }
}

function alphaNumericOnly(elementArray) {
    if (typeof (elementArray) == "object" && elementArray.length != undefined) {
        elementArray.forEach(element => {
            if ($('#' + element).length) {
                $('#' + element).keypress(function (event) {
                    if ((event.which != 32) && (event.which < 48 || event.which > 57) && (event.which < 65 || event.which > 90) && (event.which < 97 || event.which > 122)) {
                        event.preventDefault();
                    }
                });
            }
        });
    } else {
        throw 'Must pass an Array like Iterable object';
    }
}

function maxLength(element, charLength) {
    if ($('#' + element).length) {
        $('#' + element).keypress(function (event) {
            if (event.target.value.length >= charLength) {
                event.preventDefault();
            }
        });
    }
}

function maxDecimalLength(element, charLength) {
    if ($('#' + element).length) {
        floatType([element]);
        $('#' + element).keypress(function (event) {
            if (event.target.value.split(".").length > 1) {
                if (event.target.value.split(".")[1].length >= charLength) {
                    event.preventDefault();
                }
            }
        });
    }
}

function alphaOnlyWithSpecialCharacter(elementArray, specialCharacterList) {
    if (typeof (elementArray) == "object" && elementArray.length != undefined) {
        elementArray.forEach(element => {
            if ($('#' + element).length) {
                $('#' + element).keypress(function (event) {
                    if ((event.which != 32) && (event.which < 65 || event.which > 90) && (event.which < 97 || event.which > 122) && specialCharacterList.indexOf(event.which) == -1) {
                        event.preventDefault();
                    }
                });
            }
        });
    } else {
        throw 'Must pass an Array like Iterable object';
    }
}

function alphaNumericOnlyWithSpecialCharacter(elementArray, specialCharacterList) {
    if (typeof (elementArray) == "object" && elementArray.length != undefined) {
        elementArray.forEach(element => {
            if ($('#' + element).length) {
                $('#' + element).keypress(function (event) {
                    if ((event.which != 32) && (event.which < 48 || event.which > 57) && (event.which < 65 || event.which > 90) && (event.which < 97 || event.which > 122) && specialCharacterList.indexOf(event.which) == -1) {
                        event.preventDefault();
                    }
                });
            }
        });
    } else {
        throw 'Must pass an Array like Iterable object';
    }
}

if (!window.hasOwnProperty('npfFormErrorObj')) {
    window.npfFormErrorObj = {};
}

function maxMinLimit(elementArray, maxValue, minValue) {
    function maxMinLimitFunction() {
        var elementValue = this.value;
        var element = this.id;
        if (elementValue != "") {
            if (elementValue > maxValue) {
                npfFormErrorObj[element] = true;
                $('#requiredError_' + element).hide();
                setTimeout(function () {
                    if ($('.' + element).hasClass('form-group')) {
                        $('.' + element).addClass('has-error');
                    } else if ($('.' + element + ' > :first-child').hasClass('form-group')) {
                        $('.' + element + ' > :first-child').addClass('has-error');
                    }
                    $('#otherError_' + element).text("Entered value can not be more than " + maxValue).show();
                }, 60);
            } else if (elementValue < minValue) {
                npfFormErrorObj[element] = true;
                $('#requiredError_' + element).hide();
                setTimeout(function () {
                    if ($('.' + element).hasClass('form-group')) {
                        $('.' + element).addClass('has-error');
                    } else if ($('.' + element + ' > :first-child').hasClass('form-group')) {
                        $('.' + element + ' > :first-child').addClass('has-error');
                    }
                    $('#otherError_' + element).text("Entered value can not be less than " + minValue).show();
                }, 60);
            } else {
                if ($('.' + element).hasClass('has-error')) {
                    $('.' + element).removeClass('has-error');
                } else if ($('.' + element + ' > :first-child').hasClass('has-error')) {
                    $('.' + element + ' > :first-child').removeClass('has-error');
                }
                if ($('#' + element).hasClass("error_td")) {
                    $('#' + element).removeClass("error_td")
                }
                npfFormErrorObj[element] = false;
                $('#otherError_' + element).text("").hide();
            }
        } else {
            if ($('.' + element).hasClass('has-error')) {
                $('.' + element).removeClass('has-error');
            } else if ($('.' + element + ' > :first-child').hasClass('has-error')) {
                $('.' + element + ' > :first-child').removeClass('has-error');
            }
            if ($('#' + element).hasClass("error_td")) {
                $('#' + element).removeClass("error_td")
            }
            npfFormErrorObj[element] = false;
            $('#otherError_' + element).text("").hide();
        }
    }
    var firstTimeOnlyFlag = true;
    if (typeof (elementArray) == "object" && elementArray.length != undefined) {
        elementArray.forEach(element => {
            if ($('#' + element).length) {
                $('#' + element).change(maxMinLimitFunction).blur(maxMinLimitFunction);
            }
        });
        if (firstTimeOnlyFlag) {
            elementArray.forEach(element => {
                if ($('#' + element).length) {
                    $('#' + element).change();
                }
            });
            firstTimeOnlyFlag = false;
        }
    } else {
        throw 'Must pass an Array like Iterable object';
    }
}

/*  Array Copy Function  */
function _toConsumableArray(arr) {

    function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
            }
            return arr2;
        }
    }

    function _iterableToArray(iter) {
        if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")
            return Array.from(iter);
    }

    function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
    }

    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

/*  Table row mandatory function if any coloum is filled  */
function tableRowItemsCheck(tableRowItems, arrayLength) {
    tableRowItems = _toConsumableArray(tableRowItems);

    function rowItemsCheck() {
        var notEmpty = false;
        tableRowItems.forEach(function (items) {
            if ($('#' + items).val() != '') {
                notEmpty = true;
            }
        });

        if (notEmpty) {
            tableRowItems.forEach(function (items) {
                addRequired(items);
            });
        } else {
            tableRowItems.forEach(function (items) {
                removeRequired(items);
            });
        }
    }

    if ($('#' + tableRowItems.join(', #')).length == arrayLength) {
        $('#' + tableRowItems.join(', #')).change(rowItemsCheck);
        rowItemsCheck();
    }
}

var tableId = 'field_140759';
var tableRowNumber = 5;
var tableColumnNumber = 3;

var tableId1 = 'field_140703';
var tableRowNumber1 = 5;
var tableColumnNumber1 = 4;

var tableId2 = 'field_140676';
var tableRowNumber2 = 6;
var tableColumnNumber2 = 9;

var tableId3 = 'field_140760';
var tableRowNumber3 = 5;
var tableColumnNumber3 = 2;

var tableId4 = 'field_140701';
var tableRowNumber4 = 1;
var tableColumnNumber4 = 7;

var tableId5 = 'field_140679';
var tableRowNumber5 = 5;
var tableColumnNumber5 = 2;


for (var i = 1; i <= tableRowNumber; i++) {
    var rowId = tableId + "_" + i;
    var localArray = [];

    for (var j = 1; j <= tableColumnNumber; j++) {
        var columnId = rowId + "_" + j;
        localArray.push(columnId);
    }

    tableRowItemsCheck(localArray, localArray.length);
}

for (var i = 1; i <= tableRowNumber1; i++) {
    var rowId = tableId1 + "_" + i;
    var localArray = [];

    for (var j = 1; j <= tableColumnNumber1; j++) {
        var columnId = rowId + "_" + j;
        localArray.push(columnId);
    }

    tableRowItemsCheck(localArray, localArray.length);
}

for (var i = 1; i <= tableRowNumber2; i++) {
    var rowId = tableId2 + "_" + i;
    var localArray = [];

    for (var j = 1; j <= tableColumnNumber2; j++) {
        var columnId = rowId + "_" + j;
        localArray.push(columnId);
    }

    tableRowItemsCheck(localArray, localArray.length);
}

for (var i = 1; i <= tableRowNumber3; i++) {
    var rowId = tableId3 + "_" + i;
    var localArray = [];

    for (var j = 1; j <= tableColumnNumber3; j++) {
        var columnId = rowId + "_" + j;
        localArray.push(columnId);
    }

    tableRowItemsCheck(localArray, localArray.length);
}

for (var i = 1; i <= tableRowNumber4; i++) {
    var rowId = tableId4 + "_" + i;
    var localArray = [];

    for (var j = 1; j <= tableColumnNumber4; j++) {
        var columnId = rowId + "_" + j;
        localArray.push(columnId);
    }

    tableRowItemsCheck(localArray, localArray.length);
}

for (var i = 1; i <= tableRowNumber5; i++) {
    var rowId = tableId5 + "_" + i;
    var localArray = [];

    for (var j = 1; j <= tableColumnNumber5; j++) {
        var columnId = rowId + "_" + j;
        localArray.push(columnId);
    }

    tableRowItemsCheck(localArray, localArray.length);
}
/*  Hides and shows current work exp row  */
if ($('#field_140752, #tr_field_140676_1').length == 2) {

    function tablehide() {
        if ($('#field_140752').val() == "" || $('#field_140752').val() == "No") {
            $('#tr_field_140676_1').hide();
            $('#tr_field_140676_1').find('select, input').val('').change();
        } else {
            $('#tr_field_140676_1').show();
        }
    }

    $('#field_140752').change(tablehide);
    tablehide();
}

integerOnly(["correspondence_pincode",
    "permanent_pincode",
    "field_140763",
    "field_140757",
    "field_140758",
    /*"field_140711_1_1",
    "field_140711_2_1",*/
    "father_annual_income",
    "mother_annual_income",
    /* "field_140711_3_1",
     "field_140711_4_1",
     "field_140711_5_1",*/
    /*"field_140708_1_1",
    "field_140708_2_1",
    "field_140708_3_1",
    "field_140708_4_1",
    "field_140708_5_1",*/
    "field_140676_1_5",
    "field_140676_2_5",
    "field_140676_3_5",
    "field_140676_4_5",
    "field_140676_5_5",
    "field_140676_6_5",
    "father_mobile_no",
    "mother_mobile_no",
    "mobile_no",
    "referral_1_mobile",
    "referral_2_mobile",
    "field_140786",
    "field_140767",
    "field_140796",
    "field_140797",
    "field_142528_1_2",
    "field_142528_1_3",
    "field_142528_1_4",
    "field_142528_1_5",
    "field_140798",
    "field_140800",
    "guardian2_mobile",
    "guardian2_annual_income",
    "field_140817",
    "field_142596"
    /*"field_142595_1_1",*/
    /* "field_142595_1_2", */
    /* "field_142595_2_1",*/
    /* "field_142595_2_2", */
    /*"field_142595_3_1",*/
    /* "field_142595_3_2", */
    /*"field_142595_4_1",*/
    /* "field_142595_4_2", */
    /* "field_142595_5_1"
        /* 
            ,"field_142595_5_2" */
]);
["field_140699_1_5", "field_140700_1_6", "field_140702_1_8", "field_140701_1_9", "field_140677_1_2", "field_140677_1_3", "field_140677_1_4", "field_140677_1_5", "field_140707_1_2", "field_140707_1_3", "field_140707_1_4", "field_140707_1_5", "field_140710_1_2", "field_140710_1_3", "field_140710_1_4", "field_140710_1_5", "field_140709_1_2", "field_140709_1_3", "field_140709_1_4", "field_140709_1_5", "field_140711_1_2", "field_140711_2_2", "field_140711_3_2", "field_140711_4_2", "field_140711_5_2", "field_140708_1_2", "field_140708_2_2", "field_140708_3_2", "field_140708_4_2", "field_140708_5_2", "field_142595_1_2", "field_142595_2_2", "field_142595_3_2", "field_142595_4_2", "field_142595_5_2"].forEach(function (element) {
    maxDecimalLength(element, 2);
    setTimeout(function () {
        $('#' + element).change();
    }, 300);
});

maxMinLimit(["field_140798"], 1200, 0);
maxMinLimit(["field_140699_1_5", "field_140700_1_6", "field_140702_1_8", "field_140701_1_9"], 100, 30);
maxMinLimit(["field_140711_1_1"], 800, 1);
maxMinLimit(["field_140711_4_1"], 6, 0);
maxMinLimit(["field_140711_4_2"], 100, 0);
maxMinLimit(["field_140711_5_1"], 8, 1);
maxMinLimit(["field_140711_2_1", "field_140711_3_1"], 60, 1);

maxMinLimit(["field_140676_1_5", "field_140676_2_5", "field_140676_3_5", "field_140676_4_5", "field_140676_5_5", "field_140676_6_5"], 9999999999, 10000);
maxMinLimit(["field_140711_1_2", "field_140711_2_2", "field_140711_3_2", "field_140711_5_2", "field_140708_1_2", "field_140708_2_2", "field_140708_3_2", "field_140708_4_2", "field_140708_5_2", "field_142595_1_2", "field_142595_2_2", "field_142595_3_2", "field_142595_4_2", "field_142595_5_2", "field_140677_1_2", "field_140677_1_3", "field_140677_1_4", "field_140677_1_5", "field_140707_1_2", "field_140707_1_3", "field_140707_1_4", "field_140707_1_5", "field_140710_1_2", "field_140710_1_3", "field_140710_1_4", "field_140710_1_5", "field_140709_1_2", "field_140709_1_3", "field_140709_1_4", "field_140709_1_5", "field_142528_1_2", "field_142528_1_3", "field_142528_1_4", "field_142528_1_5", "field_140708_2_1", "field_140708_3_1", "field_140708_4_1", "field_140708_5_1", "field_142595_2_1", "field_142595_3_1", "field_142595_4_1", "field_142595_5_1"], 100, 1);
alphaNumericOnlyWithSpecialCharacter(['field_140699_1_1', 'field_140700_1_1', 'field_140700_1_3', 'field_140702_1_1', 'field_140701_1_1', 'field_137690', 'field_137933', 'field_137698', 'field_137934'], [46, 45, 39, 44, 41, 40, 38]);
alphaNumericOnlyWithSpecialCharacter(['field_140759_1_1', 'field_140759_2_1', 'field_140759_3_1', 'field_140759_4_1', 'field_140759_5_1', 'field_140760_1_1', 'field_140760_2_1', 'field_140760_3_1', 'field_140760_4_1', 'field_140760_5_1', 'correspondence_address1', 'correspondence_address2', 'permanent_address1', 'permanent_address2'], [45, 95, 47, 46, 44, 39, 41, 40, 35]);

alphaOnly(['field_140703_1_1', 'field_140703_2_1', 'field_140703_3_1', 'field_140703_4_1', 'field_140703_5_1', "field_140676_1_3", "field_140676_1_4", "field_140676_1_6", "field_140676_2_3", "field_140676_2_4", "field_140676_2_6", "field_140676_3_3", "field_140676_3_4", "field_140676_3_6", "field_137686", "field_137691", "field_137694", "field_137699"]);
alphaOnlyWithSpecialCharacter(["first_name", "middle_name", "last_name", "father_first_name", "father_designation", "mother_first_name", "mother_designation", "referral_1_name", "referral_2_name", "field_137708_65390", "field_137708_65391"], [39]);

if ($('#field_140764, #field_140765').length == 2) {
    $('#field_140765').change(function () {
        var currentDate = new Date();
        currentDate = (currentDate.getDate().toString().length == 1 ? "0" + currentDate.getDate().toString() : currentDate.getDate().toString()) + "/" + ((currentDate.getMonth() + 1).toString().length == 1 ? "0" + (currentDate.getMonth() + 1).toString() : (currentDate.getMonth() + 1).toString()) + "/" + currentDate.getFullYear().toString()
        if (this.value == 'Taken') {
            $('#field_140764').datepicker("setStartDate", "01/01/2017");
            $('#field_140764').datepicker("setEndDate", currentDate);
        } else if (this.value == 'Planning to take') {
            $('#field_140764').datepicker("setStartDate", currentDate);
            $('#field_140764').datepicker("setEndDate", "31/01/2021");
        }
    });
}

var enrollmentYear10 = 'field_140699_1_3';
var passingYear10 = 'field_140699_1_4';
var enrollmentYear12 = 'field_140700_1_4';
var passingYear12 = 'field_140700_1_5';
var enrollmentYearUG = 'field_140702_1_5';
var passingYearUG = 'field_140702_1_6';
var enrollmentYearPG = 'field_140701_1_5';
var passingYearPG = 'field_140701_1_6';

if ($('#' + [enrollmentYear10, passingYear10, enrollmentYear12, passingYear12, enrollmentYearPG, passingYearPG, enrollmentYearUG, passingYearUG].join(', #')).length == 8) {
    $('#' + enrollmentYear10).change(function () {
        var localValue = this.value;

        if (localValue != '') {
            $('#' + passingYear10).datepicker('setStartDate', (parseInt(localValue) + 1).toString());
            $('#' + enrollmentYear12).datepicker('setStartDate', (parseInt(localValue) + 2).toString());
            $('#' + passingYear12).datepicker('setStartDate', (parseInt(localValue) + 3).toString());
            $('#' + enrollmentYearUG).datepicker('setStartDate', (parseInt(localValue) + 3).toString());
            $('#' + passingYearUG).datepicker('setStartDate', (parseInt(localValue) + 6).toString());
            $('#' + enrollmentYearPG).datepicker('setStartDate', (parseInt(localValue) + 6).toString());
            $('#' + passingYearPG).datepicker('setStartDate', (parseInt(localValue) + 7).toString());
        }
    });
    $('#' + passingYear10).change(function () {
        var localValue = this.value;

        if (localValue != '') {
            localValue = localValue - 1;
            $('#' + enrollmentYear12).datepicker('setStartDate', (parseInt(localValue) + 2).toString());
            $('#' + passingYear12).datepicker('setStartDate', (parseInt(localValue) + 3).toString());
            $('#' + enrollmentYearUG).datepicker('setStartDate', (parseInt(localValue) + 3).toString());
            $('#' + passingYearUG).datepicker('setStartDate', (parseInt(localValue) + 6).toString());
            $('#' + enrollmentYearPG).datepicker('setStartDate', (parseInt(localValue) + 6).toString());
            $('#' + passingYearPG).datepicker('setStartDate', (parseInt(localValue) + 7).toString());
        }
    });
    $('#' + enrollmentYear12).change(function () {
        var localValue = this.value;

        if (localValue != '') {
            localValue = localValue - 2;
            $('#' + passingYear12).datepicker('setStartDate', (parseInt(localValue) + 3).toString());
            $('#' + enrollmentYearUG).datepicker('setStartDate', (parseInt(localValue) + 3).toString());
            $('#' + passingYearUG).datepicker('setStartDate', (parseInt(localValue) + 6).toString());
            $('#' + enrollmentYearPG).datepicker('setStartDate', (parseInt(localValue) + 6).toString());
            $('#' + passingYearPG).datepicker('setStartDate', (parseInt(localValue) + 7).toString());
        }
    });
    $('#' + passingYear12).change(function () {
        var localValue = this.value;

        if (localValue != '') {
            localValue = localValue - 3;
            $('#' + enrollmentYearUG).datepicker('setStartDate', (parseInt(localValue) + 3).toString());
            $('#' + passingYearUG).datepicker('setStartDate', (parseInt(localValue) + 6).toString());
            $('#' + enrollmentYearPG).datepicker('setStartDate', (parseInt(localValue) + 6).toString());
            $('#' + passingYearPG).datepicker('setStartDate', (parseInt(localValue) + 7).toString());
        }
    });
    $('#' + enrollmentYearUG).change(function () {
        var localValue = this.value;

        if (localValue != '') {
            // console.log(`before declaring local value ${localValue}`)
            localValue = localValue - 3;
            // console.log(`after declaring local Value ${localValue}`)
            console.log(localValue);
            $('#' + passingYearUG).datepicker('setStartDate', (parseInt(localValue) + 4 /* before 6 */ ).toString());
            $('#' + passingYearUG).datepicker('setEndDate', (parseInt(localValue) + 8).toString())
            $('#' + enrollmentYearPG).datepicker('setStartDate', (parseInt(localValue) + 6 /*6*/ ).toString());
            $('#' + passingYearPG).datepicker('setStartDate', (parseInt(localValue) + 7).toString());
        }
    });
    $('#' + passingYearUG).change(function () {
        var localValue = this.value;
        // console.log(`local value pg before if ${localValue}`)
        if (localValue != '') {
            // console.log(`local value in the passing year UG scope before ${localValue}`)
            localValue = localValue - 6;
            // console.log(`local value in the passing year UG scope after${localValue}`)
            $('#' + enrollmentYearPG).datepicker('setStartDate', (parseInt(localValue) + 6).toString());
            $('#' + passingYearPG).datepicker('setStartDate', (parseInt(localValue) + 7).toString());
        }
    });
    $('#' + enrollmentYearPG).change(function () {
        var localValue = this.value;

        if (localValue != '') {
            localValue = localValue - 6;
            // console.log(localValue)
            $('#' + passingYearPG).datepicker('setStartDate', (parseInt(localValue) + 7).toString());
            $('#' + passingYearPG).datepicker('setEndDate', (parseInt(localValue) + 11).toString());
        }
    });
}

/*  table rows add more  */
function buttonCheck(tableId, visibleRow) {
    if (tableObj[tableId][2] == tableObj[tableId][0]) {
        $('.' + tableId + ' .r-more').addClass('r-hide');
    } else {
        $('.' + tableId + ' .r-more').removeClass('r-hide');
    }
    if (tableObj[tableId][2] <= visibleRow) {
        $('.' + tableId + ' .r-less').addClass('r-hide');
    } else {
        $('.' + tableId + ' .r-less').removeClass('r-hide');
    }
}

window.addRow = function (tableId, visibleRow, isMandatory) {
    $('#tr_' + tableId + '_' + (tableObj[tableId][2] + 1).toString()).removeClass('r-hide');
    if (isMandatory) {
        $('#tr_' + tableId + '_' + (tableObj[tableId][2] + 1).toString() + ' input, #tr_' + tableId + '_' + (tableObj[tableId][2] + 1).toString() + ' select').not($("input[name^='other_']")).each(function (i, e) {
            if (e.type != 'file') {
                addRequired(e.id);
            }
        });
    }
    tableObj[tableId][2] = tableObj[tableId][2] + 1;
    tableObj[tableId][3] = Math.abs(tableObj[tableId][2] - tableObj[tableId][0]);
    buttonCheck(tableId, visibleRow);
};

window.hideRow = function (tableId, visibleRow, isMandatory) {
    $('#tr_' + tableId + '_' + tableObj[tableId][2]).addClass('r-hide');
    if (isMandatory) {
        $('#tr_' + tableId + '_' + (tableObj[tableId][2]).toString() + ' input, #tr_' + tableId + '_' + (tableObj[tableId][2]).toString() + ' select').not($("input[name^='other_']")).each(function (i, e) {
            removeRequired(e.id);
        });
    }
    $('#tr_' + tableId + '_' + tableObj[tableId][2] + ' select, #tr_' + tableId + '_' + tableObj[tableId][2] + ' input').each(function (i, e) {
        if (e.type == 'file') {
            var id = e.id;
            if ($(e).parent().find('#list_files_' + id + ' ul li').length) {
                $(e).parent().find('#list_files_' + id + ' ul li').each(function (j, ele) {
                    $(ele).find('span:last-child').click();
                });
            }
        } else {
            $(e).val('').change();
        }
    });
    tableObj[tableId][2] = tableObj[tableId][2] - 1;
    tableObj[tableId][3] = Math.abs(tableObj[tableId][2] - tableObj[tableId][0]);
    buttonCheck(tableId, visibleRow);
};

function tableMoreLessRapper(tableId, tableRows, tableColumns, visibleRow, isMandatory) {
    if (!window.hasOwnProperty('tableObj')) {
        window.tableObj = {};
    }
    if ($('.' + tableId).length) {
        tableObj[tableId] = [tableRows, tableColumns, visibleRow, tableRows - visibleRow] // [row, column, visibleRow, hiddenRow]
        var hideFlag = true;
        for (var i = tableRows; i >= 1; i--) {
            var tRowId = 'tr_' + tableId + '_' + i;
            for (var j = 1; j <= tableColumns; j++) {
                var tColumnFieldId = tableId + '_' + i + '_' + j;
                if (($('#' + tColumnFieldId).length) && ($('#' + tColumnFieldId).val() != '')) {
                    hideFlag = false;
                }
            }
            if ((hideFlag) && (i > visibleRow)) {
                $('#' + tRowId).addClass('r-hide');
            }
        }
        tableObj[tableId][2] = tableRows - $('.' + tableId + ' .r-hide').length;
        tableObj[tableId][3] = Math.abs($('.' + tableId + ' .r-hide').length - tableRows);
        $('.' + tableId).append('<div class="col-md-12" style="display: block;"><a onclick="hideRow(\'' + tableId + '\', \'' + visibleRow + '\', ' + isMandatory + ')" class="btn pull-left dark-grey r-less"><span class="glyphicon glyphicon-minus-sign" aria-hidden="true" style="top: 3px;font-size: 20px;"></span>&nbsp; Less</a><a onclick="addRow(\'' + tableId + '\', \'' + visibleRow + '\', ' + isMandatory + ')" class="btn pull-right dark-grey r-more"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true" style="top: 3px;font-size: 20px;"></span>&nbsp; More</a></div>');
        buttonCheck(tableId, visibleRow);
    }
}

$('head').append('<style>.r-hide {display: none;}@media (max-width: 425px) {.r-more,.r-less {margin-top: -30px;}}@media (min-width: 426px) {.r-more,.r-less {margin-top: -10px;}}</style>');

tableMoreLessRapper('field_140676', 6, 9, 2, true);
tableMoreLessRapper('field_140759', 5, 3, 1, true);
tableMoreLessRapper('field_140703', 5, 3, 1, true);
tableMoreLessRapper('field_140760', 5, 3, 1, true);

function removeRequiredError() {
    var element = this.id;
    if (element != '' && element != undefined) {
        $('.' + element + ' > :first-child').removeClass('has-error');
        if ($('#' + element).hasClass("error_td")) {
            $('#' + element).removeClass("error_td")
        }
        /* $('#otherError_' + element).hide(); */
        $('#requiredError_' + element).hide();
    }
}

function handleRequiredError() {
    var element = this.id;
    var elementValue = this.value;
    if (elementValue != '') {
        $('#requiredError_' + element).hide();
        if ($('#otherError_' + element).text() == '') {
            $('.' + element + ' > :first-child').removeClass('has-error');
            if ($('#' + element).hasClass("error_td")) {
                $('#' + element).removeClass("error_td")
            }
        }
    }
}

$('input[type="text"], select, textarea').each(function (i, element) {
    $(element).change(handleRequiredError).blur(handleRequiredError);
});

$('input[type="checkbox"], input[type="radio"]').each(function (i, element) {
    $(element).change(function () {
        if ($('[name="' + this.name + '"]:checked').length) {
            if (this.type == "checkbox") {
                $('#requiredError_' + this.name.substr(0, this.name.length - 2)).hide();
            } else if (this.type == "radio") {
                $('#requiredError_' + this.name).hide();
            }
        }
    });
});

$('.navbar-brand > img').css("max-height", "60px");



$('#field_140718').change(function () {
    if (this.value != '') {
        $('#field_140719').datepicker('setStartDate', this.value);
    }
});

$('#field_140719').change(function () {
    if (this.value != '') {
        $('#field_140718').datepicker('setEndDate', this.value);
    }
});

if ($('#field_140786, #applicant_work_experience').length == 2) {
    if ($('#applicant_work_experience').val() == '') {
        $('#applicant_work_experience').val($('#field_140786').val()).change();
    }
}

if ($('#field_140786').length) {
    $('#field_140786').change(function () {
        if ($('#field_140786').val() != '' && parseFloat($('#field_140786').val()) > 23) {
            $('#field_140786').parent().addClass('has-error');
            $('#otherError_field_140786').text("Work experience must be less than 24 months as of 30th June 2020").show();
        } else {
            $('#field_140786').parent().removeClass('has-error');
            $('#otherError_field_140786').text("").show();
        }
    });
}
/*
var workExLookUpArray = ['field_140676_6_7', 'field_140676_6_8', 'field_140676_5_7', 'field_140676_5_8',
    'field_140676_4_7', 'field_140676_4_8', 'field_140676_3_7', 'field_140676_3_8', 'field_140676_2_7',
    'field_140676_2_8', 'field_140676_1_7', 'field_140676_1_8'
];


$('#' + workExLookUpArray.join(', #')).datepicker()
    .on('show', function (e) {
        console.log(this.id);


        var workExFieldValue = {};

        for (var i = 0; i < workExLookUpArray.length; i++) {
            if ($('#' + workExLookUpArray[i]).val() != '' && typeof $('#' + workExLookUpArray[i]).val() !=
                'undefined') {
                workExFieldValue[workExLookUpArray[i]] = $('#' + workExLookUpArray[i]).val();
            } else {
                workExFieldValue[workExLookUpArray[i]] = '';
            }
        }


        var nextDateValue = '';
        var prevDatevalue = '';

        console.log(workExFieldValue);

        var allKeys = Object.keys(workExFieldValue);
        var currentIndex = allKeys.indexOf(this.id);


        for (var i = currentIndex - 1; i >= 0; i--) {
            var field = allKeys[i];

            if (typeof field != 'undefined' && typeof workExFieldValue[field] != 'undefined' &&
                workExFieldValue[field] != '') {
                prevDatevalue = workExFieldValue[field];
                console.log('prevDatevalue = ' + prevDatevalue);
                break;
            }
        }

        for (var i = currentIndex + 1; i < allKeys.length; i++) {
            var field = allKeys[i];
            if (typeof field != 'undefined' && typeof workExFieldValue[field] != 'undefined' &&
                workExFieldValue[field] != '') {
                nextDateValue = workExFieldValue[field];
                console.log(' nextDateValue = ' + nextDateValue);
                break;
            }
        }

        if (typeof prevDatevalue != 'undefined' && prevDatevalue != '') {
            $('#' + this.id).datepicker('setStartDate', prevDatevalue);
        }

        if (typeof nextDateValue != 'undefined' && nextDateValue != '') {
            $('#' + this.id).datepicker('setEndDate', nextDateValue);
        }

    });


maxMinLimit(["field_140708_1_1"], 400, 1);

/*if ($('#field_140676_1_7, #field_140676_2_7, #field_140702_1_6').length == 3 && $('#field_140702_1_6').val() != '' && $('#field_140702_1_6').val() != undefined) {
    $('#field_140676_1_7').datepicker('setStartDate', '01/' + $('#field_140702_1_6').val().toString());
    $('#field_140676_2_7').datepicker('setStartDate', '01/' + $('#field_140702_1_6').val().toString());
    $('#field_140676_3_7').datepicker('setStartDate', '01/' + $('#field_140702_1_6').val().toString());
    $('#field_140676_4_7').datepicker('setStartDate', '01/' + $('#field_140702_1_6').val().toString());
    $('#field_140676_5_7').datepicker('setStartDate', '01/' + $('#field_140702_1_6').val().toString());
    $('#field_140676_6_7').datepicker('setStartDate', '01/' + $('#field_140702_1_6').val().toString());
}
*/

/* 

######################### OLD System #########################


if ($('#field_140676_1_7, #field_140676_2_7, #field_140702_1_6').length == 3 && $('#field_140702_1_6').val() != '' && $('#field_140702_1_6').val() != undefined) {
    $('#field_140676_1_7').datepicker('setStartDate', '01/01/' + $('#field_140702_1_6').val().toString());
    $('#field_140676_2_7').datepicker('setStartDate', '01/01/' + $('#field_140702_1_6').val().toString());
    $('#field_140676_3_7').datepicker('setStartDate', '01/01/' + $('#field_140702_1_6').val().toString());
    $('#field_140676_4_7').datepicker('setStartDate', '01/01/' + $('#field_140702_1_6').val().toString());
    $('#field_140676_5_7').datepicker('setStartDate', '01/01/' + $('#field_140702_1_6').val().toString());
    $('#field_140676_6_7').datepicker('setStartDate', '01/01/' + $('#field_140702_1_6').val().toString());
}
*/


/* -- Post Editable Logics -- */
if (location.pathname.split('/').indexOf('preview-missing-fields') != -1) {

    var pgTableId = 'field_140701',
        pgResultId = 'field_140701_1_7';
    var testTakenId = 'field_140706';
    var cat2019TestStatusId = 'field_140810',
        cat2019ResultStatusId = 'field_140794',
        cat2019TableId = 'field_140707';
    var gmatTestStatusId = 'field_140765',
        gmatId = 'field_140763',
        gmatTestDateId = 'field_140764',
        gmatTableId = 'field_140711';
    var xat2020TestStatusId = 'field_140811',
        xat2020ResultStatusId = 'field_140792',
        xat2020TableId = 'field_140709';
    var cmat2020TestStatusId = 'field_142526',
        cmat2020ResultStatusId = 'field_142527',
        cmat2020Id = 'field_142597',
        cmat2020AIRId = 'field_142596',
        cmat2020TableId = 'field_142595';

    var postEditableTestTakenHideShow = function () {

        if ($('.' + pgTableId).length && $('#' + pgResultId).length && $('#' + pgResultId).val() == 'Declared') {
            if ($('.' + pgTableId + ' input').length == 0) {
                $('.' + pgTableId).hide();
            }
        } else if ($('.' + pgTableId).length && $('#' + pgResultId).length && $('#' + pgResultId).val() == '') {
            $('.' + pgTableId).hide();
        }

        if ($('.' + testTakenId).length) {
            //             $('.'+testTakenId).hide();
            $('input[type="checkbox"][name="field_140706[]"]').not('[value="CMAT 2020"]').unbind();
            $('input[type="checkbox"][name="field_140706[]"]').not('[value="CMAT 2020"]').click(function () {
                return false;
            });
        }

        if ($('#' + cat2019TestStatusId).length && $('#' + cat2019TestStatusId).val() == 'Taken') {
            $('.' + cat2019TestStatusId).hide();
        }

        if ($('#' + cat2019ResultStatusId).length && $('#' + cat2019ResultStatusId).val() == 'Declared') {
            $('.' + cat2019ResultStatusId).hide();
        }

        if (($('.' + cat2019TableId).length) && ($('.' + cat2019TableId + ' input').length == 0)) {
            $('.' + cat2019TableId).hide();
        }

        if ($('#' + gmatTestStatusId).length && $('#' + gmatTestStatusId).val() == 'Taken') {
            $('.' + gmatTestStatusId).hide();
        }

        if ($('#' + gmatId).length && $('#' + gmatId).val() != '') {
            $('.' + gmatId).hide();
        }

        if ($('#' + gmatTestDateId).length && $('#' + gmatTestDateId).val() != '') {
            $('.' + gmatTestDateId).hide();
        }

        if (($('.' + gmatTableId).length) && ($('.' + gmatTableId + ' input').length == 0)) {
            $('.' + gmatTableId).hide();
        }

        if ($('#' + xat2020TestStatusId).length && $('#' + xat2020TestStatusId).val() == 'Taken') {
            $('.' + xat2020TestStatusId).hide();
        }

        if ($('#' + xat2020ResultStatusId).length && $('#' + xat2020ResultStatusId).val() == 'Declared') {
            $('.' + xat2020ResultStatusId).hide();
        }

        if (($('.' + xat2020TableId).length) && ($('.' + xat2020TableId + ' input').length == 0)) {
            $('.' + xat2020TableId).hide();
        }

        if ($('#' + cmat2020TestStatusId).length && $('#' + cmat2020TestStatusId).val() == 'Taken') {
            $('.' + cmat2020TestStatusId).hide();
        }

        if ($('#' + cmat2020ResultStatusId).length && $('#' + cmat2020ResultStatusId).val() == 'Declared') {
            $('.' + cmat2020ResultStatusId).hide();
        }

        if ($('#' + cmat2020Id).length && $('#' + cmat2020Id).val() != '') {
            $('.' + cmat2020Id).hide();
        }

        if ($('#' + cmat2020AIRId).length && $('#' + cmat2020AIRId).val() != '') {
            $('.' + cmat2020AIRId).hide();
        }

        if (($('.' + cmat2020TableId).length) && ($('.' + cmat2020TableId + ' input').length == 0)) {
            $('.' + cmat2020TableId).hide();
        }

    }

    $('input[type="checkbox"][name="field_140706[]"][value="CMAT 2020"]').change(postEditableTestTakenHideShow);

    setTimeout(function () {
        postEditableTestTakenHideShow();
    }, 33);
}

$('a:contains("Preview")').remove();

$('select').change(function () {
    $('.chosen-select').trigger('chosen:updated');
});

$('#coupon_code').attr('placeholder', 'Enter Voucher Code');

/* #### Post Application Interview Reschedule Code #### */
if (location.pathname.search("/pgdm/form/preview-missing-fields/") != -1 && $('#field_173882, #field_173883, #field_173884').length == 3) {

    //$('.panel-body').css('border', 'none');
    $('.panel-body').each(function (i, e) {
        if ($(e).find('#field_173882, #field_173883, #field_173884').length != 3) {
            $(e).hide()
        }
    });

    var interviewDate = $('#field_173883').val();
    var interviewvenue = $('#field_173882').val();
    var interviewSlotTime = $('#field_173884').val();
    var essaytime = $('#field_173885').val();
    var city = $('#field_174321').val();

    if (interviewDate != undefined && interviewDate != '') {
        interviewDate = interviewDate.trim();
    }
    if (interviewvenue != undefined && interviewvenue != '') {
        interviewvenue = interviewvenue.trim();
    }
    if (interviewSlotTime != undefined && interviewSlotTime != '') {
        interviewSlotTime = interviewSlotTime.trim();
    }
    if (essaytime != undefined && essaytime != '') {
        essaytime = essaytime.trim();
    }
    if (city != undefined && city != '') {
        city = city.trim();
    }

    $('#field_173883').parent().find('label').html("Interview Date: <span style='font-weight: normal;'>" + interviewDate + "</span>");
    $('#field_173882').parent().find('label').html("Interview Venue: <span style='font-weight: normal;'>" + interviewvenue + "</span>");
    $('#field_173884').parent().find('label').html("Reporting Time: <span style='font-weight: normal;'>" + interviewSlotTime + "</span>");
    $('#field_173885').parent().find('label').html("Essay Time: <span style='font-weight: normal;'>" + essaytime + "</span>");
    $('#field_174321').parent().find('label').html("Interview City: <span style='font-weight: normal;'>" + city + "</span>");
    $('#field_173882').hide();
    $('#field_173883').hide();
    $('#field_173884').hide();
    $('#field_173885').hide();
    $('#field_165099').hide();
    $('#field_174321').hide();
    $('.col-md-12.instructions.field_165103').show();

    if ($('#field_173888, #field_173889, #field_173890').length == 3) {
        addRequired('field_173888');
        addRequired('field_173889');
        addRequired('field_173890');
    }

} else {
    $('.col-md-12.instructions.field_165103').hide();
}



/*country*/
if ($('#correspondence_country').length == 1) {
    function coun() {
        if ($('#correspondence_country').val() == "") {
            $('#correspondence_country').val('12183;;;India').change().trigger('chosen:updated');
        }
    }

    $(document).ajaxStop(function () {
        coun();
    });

    setTimeout(function () {
        coun();
    }, 600);
}

document.title = "PGDM 2021-23 Application Form";


/*
if ($('#field_253008,#visa_type').length == 2) {
    function autoYes() {
        if ($('#visa_type').val() != "") {
            $('#field_253008').val('Yes').trigger('chosen:updated');
        } else {
            $('#field_253008').val('No').trigger('chosen:updated');
        }
    }
    $('#visa_type').change(autoYes);
    autoYes();
}

if ($('#field_253601,#exam_details_35').length == 2) {
    function autoYes() {
        if ($('#exam_details_35').val() != "") {
            $('#field_253601').val('Yes').trigger('chosen:updated');
        } else {
            $('#field_253601').val('No').trigger('chosen:updated');
        }
    }
    $('#exam_details_35').change(autoYes);
    autoYes();
}

if ($('#field_269628,#field_269626').length == 2) {
    function autoYes28() {
        if ($('#field_269626').val() != "") {
            $('#field_269628').val('Yes').trigger('chosen:updated');
        } else {
            $('#field_269628').val('No').trigger('chosen:updated');
        }
    }
    $('#field_269626').change(autoYes28);
    autoYes28();
}

if ($('#field_278748,#field_269627').length == 2) {
    function autoYes29() {
        if ($('#field_269627').val() != "") {
            $('#field_278748').val('Yes').trigger('chosen:updated');
        } else {
            $('#field_278748').val('No').trigger('chosen:updated');
        }
    }
    $('#field_269627').change(autoYes29);
    autoYes29();
}

$('.field_269626, .field_269627, .field_269628, .field_278748, .field_253005, .field_269905, .field_269905').hide();

if ($('#field_269627').length == 1 && $(".item.items-normal").length == 1 && $("#next_btn").text() == "Submit" && $("#field_140790, #field_140791").is(":disabled")) {
    $('.field_269627, .field_269628, .field_253005, .field_269905').show();
} else {
    $('.field_269627, .field_269628, .field_253005, .field_269905').hide();
}

$('.field_269626').after("<p>Scroll to the bottom of the screen to submit the essay.</p>");
$('.field_269627').after("<p>Scroll to the bottom of the screen to submit the essay.</p>");*/

if (location.pathname.search("preview-missing-fields") !== -1) {
    $('.field_140798').parent().hide();
    $('.field_140800').parent().hide();
}

/** for 1 march */
if ($('#field_278748,#field_278742').length == 2) {
    function autoYes1March() {
        if ($('#field_278742').val() != "") {
            $('#field_278748').val('Yes').trigger('chosen:updated');
        } else {
            $('#field_278748').val('No').trigger('chosen:updated');
        }
    }
    $('#field_278742').change(autoYes1March);
    autoYes1March();
}

/* $('.field_278742').hide();
$('.field_279096,.field_279097').hide();
if ($('#field_278742').length == 1 && $(".item.items-normal").length == 1 && $("#next_btn").text() == "Submit" && $("#field_140790, #field_140791").is(":disabled")) {
    $('.field_278742').show();
    
} else {
    $('.field_278742').hide();
    
}  */
/*
$('.field_278742').is(":visible") && $('.field_278742').after("<p>Scroll to the bottom of the screen to submit the essay.</p>");*/
/**end for 1 march */
/** for 2 march */
if ($('#field_278748,#field_278743').length == 2) {
    function autoYes1March() {
        if ($('#field_278743').val() != "") {
            $('#field_278748').val('Yes').trigger('chosen:updated');
        } else {
            $('#field_278748').val('No').trigger('chosen:updated');
        }
    }
    $('#field_278743').change(autoYes1March);
    autoYes1March();
}
/*
$('.field_278743').hide();
$('.field_279096,.field_279097').hide();
if ($('#field_278743').length == 1 && $(".item.items-normal").length == 1 && $("#next_btn").text() == "Submit" && $("#field_140790, #field_140791").is(":disabled")) {
    $('.field_278743').show();
    $('.field_279096,.field_279097').show();
    $('.field_278743').after('&nbsp;&nbsp;&nbsp;&nbsp;<b>Please scroll to the bottom of the screen to submit the essay.</b>'); 
    
} else {
    $('.field_278743').hide();
    $('.field_279096,.field_279097').hide();
}
/*
if($('.field_278743').is(":visible")) { $('.field_278743').after("<p>Scroll to the bottom of the screen to submit the essay.</p>");$('.field_279096, .field_279097').hide();}*/
/**end for 2 march */
/*
if ($('.field_297198').is(":visible")) {
    $('.field_297198').after("<p>Scroll to the bottom of the screen to submit the essay.</p>");
}

if ($('.field_297199').is(":visible")) {
    $('.field_297199').after("<p>Scroll to the bottom of the screen to submit the essay.</p>");
}*/


if ($('#application_stage').val() == '211324;;;Upload For Shortlisted') {

    $('.field_249448').show();
    $('.upload_10_marksheet').show();
    $('.field_249450').show();
    $('.field_249451').show();
    $('.field_194703').show();
    $('.field_194704').show();
    $('.field_194702').show();
    $('.upload_pg_marksheet').show();
    $('.field_194705').show();
    $('.field_249452').show();
    $('.field_249455').show();
    $('.field_249456').show();
    $('.field_249453').show();
    $('.field_249457').show();
    $('.field_194706').show();
    $('.field_194708').show();
    $('.field_249458').show();
    $('.field_365940').show();
    $('.field_365941').show();
    $('.field_365942').show();
    $('.field_365943').show();




} else {

    $('.field_249448').hide();
    $('.upload_10_marksheet').hide();
    $('.field_249450').hide();
    $('.field_249451').hide();
    $('.field_194703').hide();
    $('.field_194704').hide();
    $('.field_194702').hide();
    $('.upload_pg_marksheet').hide();
    $('.field_194705').hide();
    $('.field_249452').hide();
    $('.field_249455').hide();
    $('.field_249456').hide();
    $('.field_249453').hide();
    $('.field_249457').hide();
    $('.field_194706').hide();
    $('.field_194708').hide();
    $('.field_249458').hide();
    $('.field_365940').hide();
    $('.field_365941').hide();
    $('.field_365942').hide();
    $('.field_365943').hide();



}

$('.field_250951').hide();
$('.field_268223').hide();




if ($(".reSubmitLogicForm").length || window.location.href.includes('preview')) {
    document.querySelector('#field_397996').rows = 10;
    $('.field_296022').show();
    $('.field_370034').show();
    $('.field_397996').show();
} else {
    $('.field_296022').hide();
    $('.field_370034').hide();
    $('.field_397996').hide();
}

function checkEssayVal() {
    if ($('.reSubmitLogicForm').length) {
        if ($('#field_397996').val() != "") {
            $('#field_278748').val('Yes').trigger('chosen:updated');
        } else {
            $('#field_278748').val('No').trigger('chosen:updated');
        }
    }
}
$('#field_397996').change(() => checkEssayVal());
$('#next_btn').click(() => checkEssayVal());
$(document).ajaxStop(() => checkEssayVal());