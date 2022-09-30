/*--email_readonly--*/
if ($('#email').length > 0 && $('#email').val() != '') {
    $('#email').attr('readonly', 'readonly');
}



/*--Dynamic App--*/
$('#field_187691').change(function () {
    if ($('#field_187691').val() == "357778;;;Computer Application") {
        $('#field_194674').val('GEC');
    } else if ($('#field_187691').val() == "208194;;;Engineering") {
        $('#field_194674').val('GEC');
    } else if ($('#field_187691').val() == "208195;;;Hotel Management") {
        $('#field_194674').val('LCHM');
    } else if ($('#field_187691').val() == "208193;;;Law") {
        $('#field_194674').val('GIL');
    } else if ($('#field_187691').val() == "208197;;;Pharmacy") {
        $('#field_194674').val('GIP');
    } else if ($('#field_187691').val() == "208198;;;Management") {
        $('#field_194674').val('GEC');
    } else if ($('#field_187691').val() == "357785;;;Agriculture") {
        $('#field_194674').val('GEC');
    } else if ($('#field_187691').val() == "208196;;;Education") {
        $('#field_194674').val('GCE');
    } else {
        $('#field_194674').val('');
    }
    $('.chosen-select').trigger('chosen:updated');
});

$('#course').change(function () {

    if ($('#course').val().substr(9, 1) == 'D') {
        $('#field_194683').val('Diploma').trigger('chosen:updated');
    } else if ($('#course').val().substr(9, 1) == 'B') {
        $('#field_194683').val('UG').trigger('chosen:updated');
    } else if ($('#course').val().substr(9, 1) == 'M') {
        $('#field_194683').val('PG').trigger('chosen:updated');
    } else if ($('#course').val().substr(9, 1) == 'L') {
        $('#field_194683').val('PG').trigger('chosen:updated');
    } else {
        $('#field_194683').val('').trigger('chosen:updated');
    }

});
$('#field_187661').val('').change().trigger('chosen:updated');


function autopopulte() {
    var course = $('#course').val(),
        auto_degree;
    switch (course) {
        case '208242;;;B. Ed.':
            auto_degree = '208242;;;B. Ed.';
            break;
        case '208241;;;D. Ed.':
            auto_degree = '208241;;;D. Ed.';
            break;
        case '208243;;;M. Ed.':
            auto_degree = '208243;;;M. Ed.';
            break;
        case '208207;;;B. Tech. (Lateral Entry)-Civil Engineering':
            auto_degree = '208207;;;B. Tech. (Lateral Entry)-Civil Engineering';
            break;
        case '208208;;;B. Tech. (Lateral Entry)-Computer Science and Engineering':
            auto_degree = '208208;;;B. Tech. (Lateral Entry)-Computer Science and Engineering';
            break;
        case '208209;;;B. Tech. (Lateral Entry)-Electronics and Communication Engineering':
            auto_degree = '208209;;;B. Tech. (Lateral Entry)-Electronics and Communication Engineering';
            break;
        case '208210;;;B. Tech. (Lateral Entry)-Mechanical Engineering':
            auto_degree = '208210;;;B. Tech. (Lateral Entry)-Mechanical Engineering';
            break;
        case '208203;;;B. Tech.-Civil Engineering':
            auto_degree = '208203;;;B. Tech.-Civil Engineering';
            break;
        case '208204;;;B. Tech.-Computer Science and Engineering':
            auto_degree = '208204;;;B. Tech.-Computer Science and Engineering';
            break;
        case '208205;;;B. Tech.-Electronics and Communication Engineering':
            auto_degree = '208205;;;B. Tech.-Electronics and Communication Engineering';
            break;
        case '208206;;;B. Tech.-Mechanical Engineering':
            auto_degree = '208206;;;B. Tech.-Mechanical Engineering';
            break;
        case '208231;;;B. Voc. in Interior Designing':
            auto_degree = '208231;;;B. Voc. in Interior Designing';
            break;
        case '208215;;;Diploma in Civil Engineering':
            auto_degree = '208215;;;Diploma in Civil Engineering';
            break;
        case '208225;;;Diploma in Civil Engineering (Lateral Entry)':
            auto_degree = '208225;;;Diploma in Civil Engineering (Lateral Entry)';
            break;
        case '208216;;;Diploma in Mechanical Engineering':
            auto_degree = '208216;;;Diploma in Mechanical Engineering';
            break;
        case '208226;;;Diploma in Mechanical Engineering (Lateral Entry)':
            auto_degree = '208226;;;Diploma in Mechanical Engineering (Lateral Entry)';
            break;
        case '208229;;;Diploma Vocational in Software Development':
            auto_degree = '208229;;;Diploma Vocational in Software Development';
            break;
        case '208211;;;M. Tech-Civil Engineering(Transportation Engineering)':
            auto_degree = '208211;;;M. Tech-Civil Engineering(Transportation Engineering)';
            break;
        case '208212;;;M. Tech.-Computer Science and Engineering':
            auto_degree = '208212;;;M. Tech.-Computer Science and Engineering';
            break;
        case '208213;;;M. Tech.-Electronics and Communication Engineering':
            auto_degree = '208213;;;M. Tech.-Electronics and Communication Engineering';
            break;
        case '208214;;;M. Tech.-Mechanical Engineering (Production Engineering)':
            auto_degree = '208214;;;M. Tech.-Mechanical Engineering (Production Engineering)';
            break;
        case '208232;;;BHMCT':
            auto_degree = '208232;;;BHMCT';
            break;
        case '208233;;;D. Voc. in Food Processing':
            auto_degree = '208233;;;D. Voc. in Food Processing';
            break;
        case '208200;;;B.A. LL.B.':
            auto_degree = '208200;;;B.A. LL.B.';
            break;
        case '208201;;;BBA LL.B.':
            auto_degree = '208201;;;BBA LL.B.';
            break;
        case '208199;;;LL.B.':
            auto_degree = '208199;;;LL.B.';
            break;
        case '208202;;;LL.M.':
            auto_degree = '208202;;;LL.M.';
            break;
        case '214543;;;B.Voc(BFSI)':
            auto_degree = '214543;;;B.Voc(BFSI)';
            break;
        case '208234;;;BBA':
            auto_degree = '208234;;;BBA';
            break;
        case '208235;;;MBA':
            auto_degree = '208235;;;MBA';
            break;
        case '208239;;;B. Pharmacy':
            auto_degree = '208239;;;B. Pharmacy';
            break;
        case '218228;;;B.Pharmacy(LEET)':
            auto_degree = '218228;;;B.Pharmacy(LEET)';
            break;
        case '208237;;;D. Pharmacy':
            auto_degree = '208237;;;D. Pharmacy';
            break;
        case '226193;;;D.Voc.(Graphics and Multimedia)-LEET':
            auto_degree = '226193;;;D.Voc.(Graphics and Multimedia)-LEET';
            break;
        case '226194;;;D.Voc.(Interior Design)-LEET':
            auto_degree = '226194;;;D.Voc.(Interior Design)-LEET';
            break;
        case '226195;;;D.Voc.(Automobile Servicing)-LEET':
            auto_degree = '226195;;;D.Voc.(Automobile Servicing)-LEET';
            break;
        case '289320;;;BCA Cloud Computing':
            auto_degree = '289320;;;BCA Cloud Computing';
            break;
        case '289321;;;BBA Agri Business':
            auto_degree = '289321;;;BBA Agri Business';
            break;

        case '357780;;;BCA':
            auto_degree = '357780;;;BCA';
            break;

        case '357779;;;BCA Cloud Computing':
            auto_degree = '357779;;;BCA Cloud Computing';
            break;
        case '357786;;;BBA Agri Business':
            auto_degree = '357786;;;BBA Agri Business';
            break;

        case '357782;;;BHMCT (Hotel Mgmt.) Lateral Entry':
            auto_degree = '357782;;;BHMCT (Hotel Mgmt.) Lateral Entry';
            break;

        case '357783;;;Diploma in Hotel Management':
            auto_degree = '357783;;;Diploma in Hotel Management';
            break;

        case '357784;;;Diploma in Hotel Management Lateral Entry':
            auto_degree = '357784;;;Diploma in Hotel Management Lateral Entry';
            break;
        case '357781;;;BBA Lateral Entry':
            auto_degree = '357781;;;BBA Lateral Entry';
            break;

            case '357776;;;Diploma in Computer Science and Engineering':
                auto_degree = '357776;;;Diploma in Computer Science and Engineering';
                break;
            case '357777;;;Diploma in Computer Science and Engineering (Lateral Entry)':
                auto_degree = '357777;;;Diploma in Computer Science and Engineering (Lateral Entry)';
                break;
                case '208236;;;BFSI (Banking Financial Services and Insurance)':
                auto_degree = '208236;;;BFSI (Banking Financial Services and Insurance)';
                break;
        default:
            break;
    }
    $('#field_207211').val(auto_degree).trigger('chosen:updated');
}
$('#course').change(function () {
    autopopulte();
});
$(document).ajaxStop(function () {
    autopopulte();
});




var removeCourse=['357785;;;Agriculture',
'357778;;;Computer Application',
'208194;;;Engineering',
'208198;;;Management',
'391612;;;Not Decided Yet',
'391611;;;Others',
'208197;;;Pharmacy']

if ($('#field_187691').length == 1) {
$(document).ajaxStop(function(){
$('#field_187691 option').each(function(i, e){
var localValue = $(e).val();
if (removeCourse.indexOf(localValue) != -1) {
$(e).remove();
}
});
$('.chosen-select').trigger('chosen:updated')
});
}


var removeSpec=['208231;;;B. Voc. in Interior Designing',
'289321;;;BBA Agri Business',
'357783;;;Diploma in Hotel Management',
'357784;;;Diploma in Hotel Management Lateral Entry'
]

if ($('#course').length == 1) {
$(document).ajaxStop(function(){
$('#course option').each(function(i, e){
var localValue = $(e).val();
if (removeSpec.indexOf(localValue) != -1) {
$(e).remove();
}
});
$('.chosen-select').trigger('chosen:updated')
});
}