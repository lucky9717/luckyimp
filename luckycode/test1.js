// Conditional JS
var flag = false;
if ($('div.field_329391').length) {
    removeRequiredTableElms('field_329336_1_1');
    removeRequiredTableElms('field_329336_1_2');
    removeRequiredTableElms('field_329336_2_1');
    removeRequiredTableElms('field_329336_2_2');
    removeRequiredTableElms('field_329336_3_1');
    removeRequiredTableElms('field_329336_3_2');
    removeRequiredTableElms('field_329336_3_4');
    removeRequiredTableElms('field_329336_4_1');
    removeRequiredTableElms('field_329336_4_2');
    removeRequiredTableElms('field_329336_4_4');
    removeRequiredTableElms('field_329336_5_1');
    removeRequiredTableElms('field_329336_5_2');
    flag = false;

    if ($('#field_329391_0').is(':checked')) {
        if ($('#field_329336_1_1').val() == null || $('#field_329336_1_1').val() == '' || typeof $('#field_329336_1_1').val() == 'undefined') {
            addRequiredTableElms('field_329336_1_1');
            $('#otherError_field_329336_1_1').text('Required!');
            $('#otherError_field_329336_1_1').show();
            $(this).addClass('error_td');
            flag = true;
        }
        if ($('#field_329336_1_2').val() == null || $('#field_329336_1_2').val() == '' || typeof $('#field_329336_1_2').val() == 'undefined') {
            addRequiredTableElms('field_329336_1_2');
            $('#otherError_field_329336_1_2').text('Required!');
            $('#otherError_field_329336_1_2').show();
            $(this).addClass('error_td');
            flag = true;
        }
    }
    if ($('#field_329391_1').is(':checked')) {
        if ($('#field_329336_2_1').val() == null || $('#field_329336_2_1').val() == '' || typeof $('#field_329336_2_1').val() == 'undefined') {
            addRequiredTableElms('field_329336_2_1');
            $('#otherError_field_329336_2_1').text('Required!');
            $('#otherError_field_329336_2_1').show();
            $(this).addClass('error_td');
            flag = true;
        }
        if ($('#field_329336_2_2').val() == null || $('#field_329336_2_2').val() == '' || typeof $('#field_329336_2_2').val() == 'undefined') {
            addRequiredTableElms('field_329336_2_2');
            $('#otherError_field_329336_2_2').text('Required!');
            $('#otherError_field_329336_2_2').show();
            $(this).addClass('error_td');
            flag = true;
        }
    }

    if ($('#field_329391_2').is(':checked')) {
        if ($('#field_329336_3_1').val() == null || $('#field_329336_3_1').val() == '' || typeof $('#field_329336_3_1').val() == 'undefined') {
            addRequiredTableElms('field_329336_3_1');
            $('#otherError_field_329336_3_1').text('Required!');
            $('#otherError_field_329336_3_1').show();
            $(this).addClass('error_td');
            flag = true;
        }
        if ($('#field_329336_3_2').val() == null || $('#field_329336_3_2').val() == '' || typeof $('#field_329336_3_2').val() == 'undefined') {
            addRequiredTableElms('field_329336_3_2');
            $('#otherError_field_329336_3_2').text('Required!');
            $('#otherError_field_329336_3_2').show();
            $(this).addClass('error_td');
            flag = true;
        }
        if ($('#field_329336_3_4').val() == null || $('#field_329336_3_4').val() == '' || typeof $('#field_329336_3_4').val() == 'undefined') {
            addRequiredTableElms('field_329336_3_4');
            $('#otherError_field_329336_3_4').text('Required!');
            $('#otherError_field_329336_3_4').show();
            $(this).addClass('error_td');
            flag = true;
        }
    }

    if ($('#field_329391_3').is(':checked')) {
        if ($('#field_329336_4_1').val() == null || $('#field_329336_4_1').val() == '' || typeof $('#field_329336_4_1').val() == 'undefined') {
            addRequiredTableElms('field_329336_4_1');
            $('#otherError_field_329336_4_1').text('Required!');
            $('#otherError_field_329336_4_1').show();
            $(this).addClass('error_td');
            flag = true;
        }
        if ($('#field_329336_4_4').val() == null || $('#field_329336_4_4').val() == '' || typeof $('#field_329336_4_4').val() == 'undefined') {
            addRequiredTableElms('field_329336_4_4');
            $('#otherError_field_329336_4_4').text('Required!');
            $('#otherError_field_329336_4_4').show();
            $(this).addClass('error_td');
            flag = true;
        }
    }

    if ($('#field_329391_4').is(':checked')) {
        if ($('#field_329336_5_1').val() == null || $('#field_329336_5_1').val() == '' || typeof $('#field_329336_5_1').val() == 'undefined') {
            addRequiredTableElms('field_329336_5_1');
            $('#otherError_field_329336_5_1').text('Required!');
            $('#otherError_field_329336_5_1').show();
            $(this).addClass('error_td');
            flag = true;
        }
        if ($('#field_329336_5_2').val() == null || $('#field_329336_5_2').val() == '' || typeof $('#field_329336_5_2').val() == 'undefined') {
            addRequiredTableElms('field_329336_5_2');
            $('#otherError_field_329336_5_2').text('Required!');
            $('#otherError_field_329336_5_2').show();
            $(this).addClass('error_td');
            flag = true;
        }
    }
    
    if ($('#field_329391_5').is(':checked')) {
        removeRequiredTableElms('field_329336_1_1');
        removeRequiredTableElms('field_329336_1_2');
        removeRequiredTableElms('field_329336_2_1');
        removeRequiredTableElms('field_329336_2_2');
        removeRequiredTableElms('field_329336_3_1');
        removeRequiredTableElms('field_329336_3_2');
        removeRequiredTableElms('field_329336_3_4');
        removeRequiredTableElms('field_329336_4_1');
        removeRequiredTableElms('field_329336_4_2');
        removeRequiredTableElms('field_329336_4_4');
        removeRequiredTableElms('field_329336_5_1');
        removeRequiredTableElms('field_329336_5_2');
        flag = false;
    }
}

if ($('#mobile_no, #father_mobile_no, #mother_mobile_no').length == 3) {
    if (($('#mobile_no').val().split('-')[1] == $('#father_mobile_no').val()) ||
        ($('#mobile_no').val().split('-')[1] == $('#mother_mobile_no').val()) ||
        ($('#mobile_no').val().split('-')[1] == $('#mother_mobile_no').val())) {
        $('#otherError_mother_mobile_no').html('Phone Numbers should be different!').show();
        $('#otherError_father_mobile_no').html('Phone Numbers should be different!').show();
        flag = true;
    }
}


if ($('#field_329373_1_3').length) {
    var markingScheme = $('#field_329373_1_3').val();
    if (markingScheme != 'CGPA' && $('#field_329373_1_5').val() == '') {
        $('#field_329373_1_5').addClass('error_td');
        $('#otherError_field_329373_1_5').show();
        $('#otherError_field_329373_1_5').html("Required");
        scrollToField('field_329373_1_5');
        flag = true;
    }
    if (markingScheme != 'CGPA' && $('#field_329373_1_6').val() == '') {
        $('#field_329373_1_6').addClass('error_td');
        $('#otherError_field_329373_1_6').show();
        $('#otherError_field_329373_1_6').html("Required");
        scrollToField('field_329373_1_6');
        flag = true;
    }
    var marks = $('#field_329373_1_4').val();
    var percentage = $('#field_329373_1_5').val();
    if (parseFloat(marks) > parseFloat(percentage)) {
        $('#field_329373_1_5').addClass('error_td');
        $('#otherError_field_329373_1_5').show();
        $('#otherError_field_329373_1_5').html("Invalid Marks");
        scrollToField('field_329373_1_5');
        flag = true;
    }
}


if ($('#field_329324_1_5').length) {
    var marks_scored = $('#field_329324_1_4').val();
    var maximum_marks = $('#field_329324_1_5').val();
    if (parseFloat(marks_scored) > parseFloat(maximum_marks)) {
        $('#field_329324_1_5').addClass('error_td');
        $('#otherError_field_329324_1_5').show();
        $('#otherError_field_329324_1_5').html("Kindly Fill Valid Marks");
        scrollToField('field_329324_1_5');
        flag = true;
    }
}
/* if(parseInt(d1) > parseInt(d2) ){} */
if ($("#field_329368_104786_1_5").length > 0 && $("#field_329368_104786_1_6").length > 0) {
    var d1 = $("#field_329368_104786_1_5").val();
    var d2 = $("#field_329368_104786_1_6").val();
    if (parseDateIntoSecs(d1, "DD/MM/YYYY") > parseDateIntoSecs(d2, "DD/MM/YYYY")) {
        $('#otherError_field_329368_104786_1_6').show();
        $('#otherError_field_329368_104786_1_6').html("To Year can't be less then From Year");
        flag = true;
    }
}
/*
if ($('#birth_state, .field_329232').length == 2) {
    if ($('#birth_state').val() != '' && [
            "12878;;;Jammu and Kashmir",
            "12881;;;Kerala",
            "12865;;;Andhra Pradesh",
            "12895;;;Telangana",
            "12867;;;Assam",
            "12886;;;Meghalaya",
            "12887;;;Mizoram",
            "12888;;;Nagaland",
            "12866;;;Arunachal Pradesh",
            "12896;;;Tripura",
            "12885;;;Manipur",
            "12890;;;Puducherry",
            "12894;;;Tamil Nadu",
            "12880;;;Karnataka"
        ].indexOf($('#birth_state').val()) != -1 &&
        $('#field_329232_0').prop('checked') == false) {
        flag = true;
        $('#otherError_field_329232').text('Required').show();
        scrollToField('field_329232');
    }
}
*/

// this is the first heading class
if ($('.field_329373').length == 1) {
    // 10th and 12th year val
    if (document.querySelector('.field_329373').style.display != "none" && document.querySelector('.field_329324').style.display != "none") {
        tenyearofPassing = document.querySelector('#field_329373_1_7').value;
        twelyearofPassing = document.querySelector('#field_329324_1_7').value;
        diff = Number(twelyearofPassing) - Number(tenyearofPassing)
        if (diff < 2) {
            $('#otherError_field_329373_1_7').show().html('Difference must be greater than or equal to 2 years between 10th and 12th');
            scrollToField('field_329373_1_7');
            flag = true;
        }
    }
}

if (flag == true) {
    return flag;
}

$('.field_329376').length == 1