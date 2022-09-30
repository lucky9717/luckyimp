function removeAdType()
{
if($('.field_354927').length > 0){
if(document.querySelector('#field_355001').value==="250416;;;Certificate" || document.querySelector('#field_355001').value==="84641;;;PG"){
    document.querySelector('#field_355024').options[0].style.display="none";
    document.querySelector('#field_355024').options[2].style.display="none";
    document.querySelector('#field_355024').options[3].style.display="none";
    $('#field_355024').trigger('chosen:updated');
}else{
 document.querySelector('#field_355024').options[0].style.display="block";
    document.querySelector('#field_355024').options[2].style.display="block";
    document.querySelector('#field_355024').options[3].style.display="block";
}
}else{
    return;
}
}
$(document).ajaxStop(()=>{$('#field_355001').change(removeAdType);})


var removecourse = [
'84732;;;Automobile Engineering',
'373654;;;Nursing',
'84730;;;B. Tech + M.Tech (Dual Degree)',
'84742;;;B.Tech + MBA(Dual Degree)',
'84656;;;GNM',
'210983;;;Economics',
'210986;;;Economics',
'210995;;;Diploma in Business and Entrepreneurship',
'102881;;;MPT(School of Nursing and Health Sciences)',
'250421;;;Baby Nursing and Child Care',
'250425;;;O.T.T. Assistant',
'84736;;;Electornics and Communication Engineering',
'84737;;;Electrical and Electronics Engineering',
'84740;;;Information Technology',
'84644;;;Civil Engineering',
'84681;;;Industrial and Production Engineering',
'84685;;;Thermal Engineering',
'84643;;;Automobile Engineering',
'456601;;;AMBULANCE TECHNICIAN',
'456604;;;ANASTHESIA AND CRITICAL CARE TECHNICIAN',
'456594;;;BLOOD TRANSFUSION',
'456605;;;BLOOD TRANSFUSION TECHNICIAN',
'456608;;;C.T. SCAN TECHNICIAN',
'456595;;;CARDIOLOGY',
'456606;;;CARDIOLOGY TECHNICIAN',
'456607;;;CLINICAL AND THERAPEUTIC NUTRITIONIST COURSE',
'456596;;;CRITICAL CARE',
'456593;;;CT',
'456609;;;DIALYSIS TECHNICIAN',
'456610;;;EMERGENCY AND TRAUMA CARE TECHNICIAN',
'456592;;;HOSPITAL ADMINISTRATION',
'456597;;;HOSPITAL FRONT OFFICE',
'456613;;;HOSPITAL RECORD KEEPING',
'456611;;;LAB TECHNICIAN',
'456612;;;M.R.I. TECHNICIAN',
'456599;;;OPTOMETRY',
'456600;;;OTT',
'456598;;;PHYSIOTHERAPY',
'456615;;;RADIO THERAPY TECHNICIAN',
'456617;;;RESPIRATORY TECHNICIAN',
'456602;;;X-RAY',
'456616;;;X-RAY TECHNICIAN',
'210994;;;Diploma in Business Management',
'210991;;;Diploma in Financial Management',
'210993;;;Diploma in Industrial Relations',
'210992;;;Diploma in Marketing Management',
'442021;;;Integrated Industry with KPMG',
'442023;;;Integrated Industry with SHRM',
'84727;;;Security Management',
'84739;;;Electronics Instrumentation and Control',
'84675;;;BioInformatics',
'84677;;;Building Construction and Management',
'84678;;;Digital Communication',
'84679;;;Energy Management',
'84680;;;Environmental Engineering',
'84683;;;Power System and Control Engineering',
'210989;;;Structural Engineering',
'84686;;;VLSI Technology',
'84696;;;History',
'84701;;;Sociology',
'84663;;;Banking and Financial Services',
'84665;;;Hospitality Management and Insurance',
'84667;;;Information Technology',
'84668;;;International Business',
'84670;;;Production and Operations Management'

]


var remocur=['210996;;;Diploma in Nursing and Health Science',
'250417;;;NIIMS Hospital Certificate Course',
'84730;;;B. Tech + M.Tech (Dual Degree)',
'210985;;;B.A General',
'84711;;;B.Arch',
'84788;;;B.Sc General',
'84742;;;B.Tech + MBA(Dual Degree)',
'388052;;;BSC Information Technology',
'388051;;;BSC Hons Agriculture',
'84662;;;MBA (Dual Specialisation)',
'388055;;;MSC information technology'
]
if ($('#specialization, #course').length == 2) {
    $(document).ajaxStop(function () {
        $('#specialization option').each(function (i, e) {
            var localValue = $(e).val();
            if (removecourse.indexOf(localValue) != -1) {
                $(e).remove();
            }
        });
        $('#course option').each(function (i, e) {
            var localValue = $(e).val();
            if (remocur.indexOf(localValue) != -1) {
                $(e).remove();
            }
        });
        $('.chosen-select').trigger('chosen:updated')
    });
}

//----------------------label and placeholder text transformation-------------------------
$('label.control-label').css("text-transform", "none");
$('input.form-control').css("font-size", "14px");
$('input.form-control').css("text-transform", "none");
$('label.control-label').css("font-size", "16px");
$('.merge_field_div').css("margin-top", "0px");
$('a.chosen-single').css("height", "38px");

//---------------------------------------freeze email and mobile -------------------------

if ($('#email').length > 0 && $('#email').val() != '') {
    $('#email').attr('readonly', 'readonly');
}
if ($('#mobile_no').length > 0 && $('#mobile_no').val() != '') {
    $('#mobile_no').attr('readonly', 'readonly');
}

/*
if ($('#field_108377, #field_108379').length == 2) {
    $("#field_108377").change(function () {
        var program = $("#field_108377").val();
        var short_name;
        switch (program) {
            case 'Application form':
                short_name = 'AF';
                break;
            case 'GD-PI':
                short_name = 'GD-PI';
                break;
            case 'AIBFEE':
                short_name = 'AIBFEE';
                break;
            default:
                break;
        }
        $("#field_108379").val(short_name);
        $('.chosen-select').trigger('chosen:updated');
    });
    $("#field_108377").change();
}*/

if ($('#course').length) {
    var a = function () {
        if ($('#course option[value="84743;;;B.Tech(Hons.)"]').length) {
            $('#course option[value="84743;;;B.Tech(Hons.)"]').prop("disabled", true).attr('disabled','disabled').hide();
            
           // $('#field_147041 option[value="10k fun run"]').attr('disabled','disabled').hide()
            $('.chosen-select').trigger('chosen:updated');
        }
    }
    $(document).ajaxStop(a);
    a();
    setTimeout(function(){
        a();
    }, 300);
}
function intCourseChange(){
    if(document.querySelector('#field_355001').value==="84640;;;UG"){
        $('#course option[value="84728;;;Integrated"]').html("BBA + MBA");
        $('#course').trigger('chosen:updated');
        if(document.querySelector('#course').value === "84725;;;BBA"){
            $('#specialization option[value="84726;;;Bachelor of Business Administration"]').html("General");
            $('#specialization').trigger('chosen:updated');
        }
    }

}
 $('#field_355001').change(intCourseChange());
$(document).ajaxStop(()=>{
   intCourseChange();
});

if($("#field_355024").length){
    $("#field_355024 option[value='3rd Year {only for 4 years or 5 years program)']").remove();
     $('.chosen-select').trigger('chosen:updated')
    }
    $(document).ajaxStop(()=>{if($("#field_355024").length){
    $("#field_355024 option[value='3rd Year {only for 4 years or 5 years program)']").remove();
     $('.chosen-select').trigger('chosen:updated')
    }});





var flag = false;
if ($('#course').val() != "" && $('#course').val().search('MBA ') !== -1) {
    
            $("#otherError_course").show();
            $("#otherError_course").html("Registration Closed");
            scrollToField('course');
            flag = true;
        }


return flag;



