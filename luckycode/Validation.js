
let ugArray = [
    'B.A',
'D.Pharma',
'Diploma',
'Diploma LEET'
];
let pgArray = [
    'M.Tech',
'MBA',
'MCA'
];

// let subjectArray = [ugArray, pgArray];

function checkForLevel (ugArray, pgArray){
    let selectedSubject = $('#course :selected').text();
    if(ugArray.indexOf(selectedSubject) > -1) {
        $('#field_389840').val('UG').trigger('chosen:updated');
    }
    if(pgArray.indexOf(selectedSubject) > -1){
        $('#field_389840').val('PG').trigger('chosen:updated');
    }
}

$('#course').change(()=>checkForLevel(ugArray, pgArray));
$(document).ajaxStop(()=>checkForLevel(ugArray, pgArray));





//validatoion



var flag = false;
 if($('#field_378931').val() =='Yes'){
        if($('#field_378748_1_5').val() < 75) {
            $('#otherError_field_378748_1_5').text('You are not eligible for PKAT').show();
            scrollToField('field_378748_1_5');
            flag = true;
        }
    }





if($('#field_378931').val() =='Yes'){
    if($('#field_378746_1_4').length && $('#field_389840').val() == "UG") {
        scrollToField('field_378746_1_4');
        if($('#field_378746_1_4').val() < 8) {
            $('#otherError_field_378746_1_4').text('You are not eligible for PKAT').show();
            flag = true;
        }
    }
    }
    
    if($('#field_378931').val() =='Yes'){
    if($('#field_378747_1_5').length && $('#field_389840').val() == "UG") {
        scrollToField('field_378747_1_5');
        if($('#field_378747_1_5').val() < 85) {
            $('#otherError_field_378747_1_5').text('You are not eligible for PKAT').show();
            flag = true;
        }
    }
    }
    if($('#field_378931').val() =='Yes'){
    if($('#field_378746_1_4').length && $('#field_389840').val() == "PG") {
        scrollToField('field_378746_1_4');
        if($('#field_378746_1_4').val() < 8) {
            $('#otherError_field_378746_1_4').text('You are not eligible for PKAT').show();
            flag = true;
        }
    }
    
    }
    
    if($('#field_378931').val() =='Yes'){
    if($('#field_378747_1_5').length && $('#field_389840').val() == "PG") {
        scrollToField('field_378747_1_5');
        if($('#field_378747_1_5').val() < 85) {
            $('#otherError_field_378747_1_5').text('You are not eligible for PKAT').show();
            flag = true;
        }
    }
    }

if (((Number($('#field_378747_1_3').val()) - Number($('#field_378746_1_3').val())) < 2) && ($('#field_378747_1_3').val() !== "")) {
    scrollToField('field_378747_1_3');
    $("#otherError_field_378747_1_3").html("Minimum 2 year gap in Passing Year");
    $("#otherError_field_378747_1_3").show();
    flag = true;
}


if (((Number($('#field_378748_1_3').val()) - Number($('#field_378747_1_3').val())) < 3) && ($('#field_378748_1_3').val() !== "")) {
    scrollToField('field_378748_1_3');
    $("#otherError_field_378748_1_3").html("Minimum 3 year gap in Passing Year");
    $("#otherError_field_378748_1_3").show();
    flag = true;


}

if (((Number($('#field_378746_1_4').val()) > 10) || (Number($('#field_378746_1_4').val()) < 7))) {
    scrollToField('field_378746_1_4');
    $("#otherError_field_378746_1_4").html("Eligibility criteria is 7 CGPA");
    $("#otherError_field_378746_1_4").show();
    flag = true;


}

if (
    (Number($('#field_378747_1_5').val()) != " ")
    && ((Number($('#field_378747_1_5').val()) > 100) ||
        ((Number($('#field_378747_1_5').val()) < 70)
        ))
) {
    scrollToField('field_378747_1_5');
    $("#otherError_field_378747_1_5").html("Eligibility criteria is 70%");
    $("#otherError_field_378747_1_5").show();
    flag = true;


}
return flag;


//for hinding specialization

function hidingdiv(){
    if($('#course').val() == "210990;;;Diploma in Business Management"){
        $('.specialization').hide()
    }else{
        $('.specialization').show()
    }
}
    
    $('#course').change(hidingdiv);
    $(document).ajaxStop(hidingdiv);
    

    



//remove course and specilization


var removecourse = [
    '84732;;;Automobile Engineering'
]
var remocur=['210996;;;Diploma in Nursing and Health Science']

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



//for fixing value
$('#field_12562_1_1 option').not(':eq(0), [value="Physics"]').prop('disabled', true).attr('disabled', 'disabled').hide();
$('#field_12562_2_1 option').not(':eq(0), [value="Chemistry"]').prop('disabled', true).attr('disabled', 'disabled').hide();
$('#field_12562_3_1 option').not(':eq(0), [value="Mathematics"]').prop('disabled', true).attr('disabled', 'disabled').hide();
$('#field_12562_4_1 option').not(':eq(0), [value="Biology"]').prop('disabled', true).attr('disabled', 'disabled').hide();


//for button on desktop with broucher

$(".page-header").after("<a style='float:right' class='btn btn-primary' href='https://admissions.jagannath.org/downloads/621497d5ea4a6003920405_PGDM_Brochure_2022.pdf' target='_blank'>Brochure</a>");


//course remove

var removecourse = ['169554;;;M. Sc. (Computer Science)']

if ($('#course').length == 1) {
    $(document).ajaxStop(function () {
        $('#course option').each(function (i, e) {
            var localValue = $(e).val();
            if (removecourse.indexOf(localValue) != -1) {
                $(e).remove();
            }
        });
        $('.chosen-select').trigger('chosen:updated')
    });
}

//Remove course from frontend and visible in backend

var removecourse = ['349798;;;MD or MS']

if ($('#course').length == 1 && !window.location.href.includes('preview')) {
    $(document).ajaxStop(function () {
        $('#course option').each(function (i, e) {
            var localValue = $(e).val();
            if (removecourse.indexOf(localValue) != -1) {
                $(e).remove();
            }
        });
        $('.chosen-select').trigger('chosen:updated')
    });
}


//for LP button
jQuery('a[href="#tab2default"]').click(function(){
    jQuery('#tab2default').removeClass('active show').addClass('active show');
    jQuery('#tab2default').siblings().removeClass('active show')
    })

    jQuery('a[href="#tab1default"]').click(function(){
    jQuery('#tab1default').removeClass('active show').addClass('active show');
    jQuery('#tab1default').siblings().removeClass('active show')
    })

    jQuery('a[href="#tab3default"]').click(function(){
    jQuery('#tab3default').removeClass('active show').addClass('active show');
    jQuery('#tab3default').siblings().removeClass('active show')
    })



    //for lp placeholder
    $("#loginEmail").attr("placeholder", "Enter Your Email");
    $("#loginPassword").attr("placeholder", "Enter Your Password");



    //apending text
$(".form_16243 tr td strong:contains(Online application form - Domestic (2022-23))").append("<p>Applicable for Indian students</p>");
$(".form_1590 tr td strong:contains(Online Application Form - International (2022-23))").append("<p>Applicable for International Students</p>")



//to populate data
function autoexamcode() {
    var course = $('#course').val(),
        d = '';
    switch (course) {
        case '210916;;;B.Ed':
            d = 'B.Ed';
            break;
        case '84763;;;LLB':
            d = 'LLB';
            break;
         
        default:
            break;
    }
    $('#field_395886').val(d).change().trigger('chosen:updated');
}
$('#course').change(function () {
    autoexamcode();
});

$(document).ajaxStop(function () {
    autoexamcode();
});


if($('#course').val() == "210916;;;B.Ed" || $('#course').val() == "84763;;;LLB"){
    $('#field_395912').val('Yes').change().trigger('chosen:updated');
}else{
    $('#field_395912').val('No').change().trigger('chosen:updated');
}


//for url based hiding course  first level agar hai to ready lagega nahi to ajaxStop
window.location.href
window.location.href.includes('https://apply.rishihood.edu.in/')


var removecourse = ['486653']




if(window.location.href.includes('https://apply.rishihood.edu.in/')){
    if ($('#UniversityId').length == 1 ) {
        $(document).ready(function () {
            $('#UniversityId option').each(function (i, e) {
                var localValue = $(e).val();
                if (removecourse.indexOf(localValue) != -1) {
                    $(e).remove();
                }
            });
            $('.chosen-select').trigger('chosen:updated')
        });
    }
    
}


// remove

if(jsVars.FULL_URL.split('/')[3] == 'water-project'){
    let local = ['Under Graduate', 'Post Graduate','Summer School','Gap Year'];
    for(let i=0;i<=local.length;i++){
    $('.opt:contains('+ local[i] +')').hide();
    }}


    $("#nationality").change(function(){
        $("#course,#field_355001,#specialization").change();
        });
    

//for hiding form from deshborad
        function remove(){
            if( window.location.href.includes('all-application-form')){
             $('table.form_1590').hide()
             $('#li_10').hide()
            }
         }
         
         $(document).ready(remove);



     //to populate two field data in one field  
function course(){
    if ($('#field_369569, #field_369585').length == 2){
    if($('#field_369569').val() != '' && $('#field_369585').val() == 'Yes') {
        $('#field_398436').val('Yes').change().trigger('chosen:updated');
    }
    else{
            $('#field_398436').val('No').change().trigger('chosen:updated');
        }
    }
    }
    $("#field_369569,#field_369585").change(course);
    $(document).ajaxStop(course);
    
    
//hide multiple values from multiple fields


    let preferencesHide = function () {
        let fields = ['field_9770_1_1', 'field_9770_2_1', 'field_9770_3_1'];
    
        let courses = ['UGPET-DAT'];
    
        $('#' + fields.join(', #')).find('option').each((i, e) => {
            courses.indexOf($(e).val()) != -1 && $(e).prop('disabled', true).attr('disabled', 'disabled').hide().remove().trigger('chosen:updated');
        });
    }
    $(document).ajaxStop(preferencesHide);
    preferencesHide();



    //for two filed dynamic series

    
function course(){
    if ($('#field_22165').val() == "175652;;;Degree Courses" && $('#field_26714').val() == "L.B.NAGAR" ){
        $('#field_26801').val('ADC22LBN').trigger('chosen:updated');
    
    }
    else if ($('#field_22165').val() == "175651;;;Intermediate Courses" && $('#field_26714').val() == "L.B.NAGAR" ){
        $('#field_26801').val('ACC22LBN').trigger('chosen:updated');
    }
    else if ($('#field_22165').val() == "175651;;;Intermediate Courses" && $('#field_26714').val() == "KUKATPALLY" ){
        $('#field_26801').val('ACC22KKP').trigger('chosen:updated');
    }

    else if ($('#field_22165').val() == "175652;;;Degree Courses" && $('#field_26714').val() == "WARANGAL" ){
        $('#field_26801').val('ADC22WGL').trigger('chosen:updated');
    
    }else  {
        $('#field_26801').val('').trigger('chosen:updated');
    
    }
    
    
    }
    $("#field_22165,#field_26714").change(course);
        $(document).ajaxStop(course);
    
//Dynamic fee
$('#course').change(function () {
    if (($('#course').val() == "488898;;;B.A. LL.B. (Hons.)") ||($('#course').val() == "488899;;;BBA.LL.B. (Hons.)") || ($('#course').val() == "488964;;;L.L.M.") || ($('#course').val() == "488965;;;LL.B.")){
            $('#field_399306').val('Yes')
       
    }
    else{
        $('#field_399306').val('No')
    }
    $('.chosen-select').trigger('chosen:updated');
    }
    
    )



    //for hiding batch

function hide(){
    if ($('#field_22165').val()== "181928;;;Degree"){
        $('#field_26714 option[value="S.R.Nagar"]').hide().trigger('chosen:updated');
        $('#field_26714 option[value="Warangal"]').hide().trigger('chosen:updated');
    }
    else{
    $('#field_26714 option[value="S.R.Nagar"]').show().trigger('chosen:updated');
    $('#field_26714 option[value="Warangal"]').show().trigger('chosen:updated');
    }
    }
    
    $(document).ajaxStop(hide);
    

    //for making field editable

    $('input, select').prop("disabled", false);
$('.chosen-select').trigger('chosen:updated');



for (let i = 1; i <= 43; i++){
    let valueArr = document.querySelector('#dropdown_list').children[i].children[0].value.split('');
    let pos = 3;
    valueArr[pos] = "2";
    finalValue = valueArr.join("");
    document.querySelector('#dropdown_list').children[i].children[0].value = finalValue;
}


//for couse array
let crs = document.querySelector('#campus');
for (let i = 1 ; i <= crs.options.length; i++){
    console.log(crs.options[i].value);
}


// table validation
for(let i = 1; i <= 7; i++){
    if (
        (Number($('#field_7323_'+i+'_7').val()) != "")
        && ((Number($('#field_7323_'+i+'_7').val()) > 100))
    ){
    $('#otherError_field_7323_'+i+'_7').html("Cannot be greater than 100");
    $('#otherError_field_7323_'+i+'_7').show();
    flag = true;
    }
        
}


/*--Dynamic App--*/
$('#field_187691').change(function () {
    if ($('#field_187691').val() == "488830;;;Engineering") {
        $('#field_398557').val('GU/ENGG/2022');
    } else if ($('#field_187691').val() == "488831;;;Hotel Management") {
        $('#field_398557').val('GGI/LCHM/2022');
    } else if ($('#field_187691').val() == "488814;;;Agriculture" ||$('#field_187691').val() == "488937;;;Agriculture" )  {
        $('#field_398557').val('GU/AG/2022');
    }  else {
        $('#field_398557').val('');
    }
    $('.chosen-select').trigger('chosen:updated');
});



//for hiding value
function hide() {
    if ($('#nationality').val() == "10997;;;Indian" ) {
        $('#category option[value="FN"]').hide().trigger('chosen:updated');
        $('#category option[value="CIWSEA"]').show().trigger('chosen:updated');
    }

    if ($('#nationality').val() != "10997;;;Indian") {
        $('#category option[value="CIWGC"]').hide().trigger('chosen:updated');
        $('#category option[value="OCI / PIO"]').show().trigger('chosen:updated');
    }
    }


$(document).ajaxStop(hide);
$('#nationality').change(hide);


//for required

function Req() {
    addRequired('field_28522_1_1');
    addRequired('field_28522_1_4');
    addRequired('field_28522_2_1');
    addRequired('field_28522_2_4');
}

$(document).ready(function () {
    Req();
});


//diploma

if ($('#field_215888, #field_215057_1').length == 2) {
    $(document).ajaxStop(function () {
        if ($('#field_215888').val() == '233545;;;Lateral' && !$('#field_215057_1').is(':checked')) {
            $('#field_215057_1').click();
        }
    });
}

if ($('#guardian3_company, #field_173196_0').length == 2) {
    $(document).ajaxStop(function () {
        if ($('#guardian3_company').val() == '184904;;;Migration') {
            $('.field_173196').hide();
            if (!$('#field_173196_0').is(':checked')) {
                $('#field_173196_0').click();
            }
        }
    });
}


/* Diploma autopopulate */
function makeDipYes () {
    if($('#field_402405').length){
    if ($('#course').val() == "84648;;;ANM"
    ||$('#course').val() == "456591;;;Diploma in Allied Health Sciences"
    ||$('#course').val() == "84650;;;Diploma in Clinical Nurse Assistant"
    ||$('#course').val() == "481568;;;Fashion Designing"
    ||$('#course').val() == "84656;;;GNM"
    ||$('#course').val() == "481569;;;Guidance and Counseling"
    ||$('#course').val() == "481567;;;Landscaping"
    ||$('#course').val() == "481566;;;Painting"
    ||$('#course').val() == "481565;;;Sculpture") {
        $('#field_402405').val('Yes').change().trigger('chosen:updated');
    } else {
        $('#field_402405').val('No').change().trigger('chosen:updated');
    }
    $('.chosen-select').trigger('chosen:updated');
}
}


$(document).ajaxStop(makeDipYes);


//to set default value 

if ($('#field_246862').length == 1) {
    $('#field_246862').val('106200.00');
}


//slider
if($('#slider33').length){
    var owl = $("#slider33");
    owl.owlCarousel({
    pagination: false,	
     autoPlay: 3000, //Set AutoPlay to 3 seconds
      itemsCustom : [
      [0, 1],
      [450, 1],
      [600, 1],
      [700, 2],
      [1000, 1],
      [1200, 5],
      [1400, 5],
      [1600, 6]
      ],
      navigation : true
  
    });
  } 
//to hide table option

  function removeVal(){
    if($('#field_10230_1_1, #field_10230_2_1').length == 2){
        $('#field_10230_1_1 option[value="GATE 2019"]').hide();
        $('#field_10230_2_1 option[value="GATE 2019"]').hide();
    }
 }
 
 $(document).ready(removeVal);


 //for student name in declartion
 $('.FatherName').length?$('.FatherName').text($("#father_first_name").val()+" "):'';
$('.StudentName').length?$('.StudentName').text($("#first_name").val()+" "):'';


function ChangeVal() {
    console.log('Change');
    //Auto populate members name
    $('.member1').length ? $('.member1').text($("#first_name").val() + " ") : '';
    $('.member2').length ? $('.member2').text($("#field_410633").val() + " ") : '';
}

$('#first_name').change(()=>ChangeVal());
$('#field_410633').change(()=>ChangeVal());



//desktop 

$('.utility-link:contains(Ack. Receipt)').length > 0 ? $('.form_15315').after('<p style="font-weight: 500; color: #000;">If you want to update your test (CAT/XAT/GMAT/CMAT/MAT) score, kindly drop a mail on admission@bimtech.ac.in to get it updated.</p>') : console.log('payment pending')

//Pop up on submit
if ($('#next_btn').attr('onclick') == "SaveForm('submit_application');") {
    $('body').append('<div tabindex="-1" class="modal fade in publishpopup" id="ConfirmSubmitArea"><div class="modal-dialog"><div class="modal-content"><div class="modal-header" style="background-color: #009D5B;text-align: center;"><button aria-hidden="true" data-dismiss="modal" class="close npf-close" type="button" style="background-color: red;"><span class="glyphicon glyphicon-remove"></span></button><h2 class="modal-title" id="confirmSubmitTitle" style="color: white !important;padding-bottom: 5px;">Confirm</h2></div><div class="modal-body text-center"><p class="text-center modalcontent" id="ConfirmMsgBody">You are about to submit the application. Please ensure you have completed the application form.</p><a class="btn btn-raised submit-btn" id="next_btn" href="javascript:void(0)" onclick="SaveForm(\'submit_application\');">Submit</a><a href="https://app.nutmng.org/profile" data-dismiss="modal" class="btn btn-default">Cancel</a></div></div></div></div>');
    $('#next_btn:contains("Submit Application")').attr("onclick", "$('#ConfirmSubmitArea').modal({show: true});");
    if ($('#next_btn').html() == '<span class="glyphicon glyphicon-chevron-right"></span>') {
        $('#next_btn').attr("onclick", "$('#ConfirmSubmitArea').modal({show: true});");
    }
}




if ($('#next_btn').text() == 'Submit Application' && $('.current-stage').text() == 'Additional information') {

    $('#next_btn').attr('onclick', '');

    $('#next_btn').click(function () {
        let confirmAction = confirm("Are you want to submit form?");

        if (confirmAction && $('#next_btn').text() == 'Submit Application') {
            //alert("Application Submitted successfully");
            SaveForm('submit_application');
        } else {

            alert('Please ensure you have completed the application form.')
        }

    })
}

/*for para word count populate*/



$('#field_30275').keyup(function () {

    $('#field_31575').val($('#counter_word_field_30275').val());
});
$('#field_31575').val($('#counter_word_field_30275').val());
$('#field_30276').keyup(function () {

    $('#field_31576').val($('#counter_word_field_30276').val());
});
$('#field_31576').val($('#counter_word_field_30276').val());
$('#field_30278').keyup(function () {

    $('#field_31577').val($('#counter_word_field_30278').val());
});
$('#field_31577').val($('#counter_word_field_30278').val());


//existing User in LP
$(".button-holder ").append(`<a id="login" href="#" target="_blank">EXISTING USER? LOGIN</a>`);

$("#login").click(function(){
	
	window.top.location.href = "https://apply.rishihood.edu.in/water-project/#Login";
});


//diffrent condition acc. to CGPA and Percentage
if ($("#course").val() == "459939;;;School of CSET") {
    function markingLawMedia(mrkVld, obtMrk) {
        if ($("#" + mrkVld).val() == "Percentage") {
            if (parseFloat($("#" + obtMrk).val()) < 50) {
                $("#otherError_" + obtMrk).html("Minimun 50% required").show();
                scrollToField(obtMrk);
                flag = true;
            } else if (parseFloat($("#" + obtMrk).val()) > 100) {
                $("#otherError_" + obtMrk).html("Cannot be greater than 100").show();
                scrollToField(obtMrk);
                flag = true;
            }
        } else if ($("#" + mrkVld).val() == "CGPA out of 10") {
            if (parseFloat($("#" + obtMrk).val()) < 5.5) {
                $("#otherError_" + obtMrk).html("Minimun 5.5 required").show();
                scrollToField(obtMrk);
                flag = true;
            } else if (parseFloat($("#" + obtMrk).val()) > 10) {
                $("#otherError_" + obtMrk).html("Cannot be greater than 10").show();
                scrollToField(obtMrk);
                flag = true;
            }
        } else if ($("#" + mrkVld).val() == "CGPA out of 9") {
            if (parseFloat($("#" + obtMrk).val()) < 4.95) {
                $("#otherError_" + obtMrk).html("Minimun 4.95 required").show();
                scrollToField(obtMrk);
                flag = true;
            } else if (parseFloat($("#" + obtMrk).val()) > 9) {
                $("#otherError_" + obtMrk).html("Cannot be greater than 9").show();
                scrollToField(obtMrk);
                flag = true;
            }
        } else if ($("#" + mrkVld).val() == "CGPA out of 7") {
            if (parseFloat($("#" + obtMrk).val()) < 3.85) {
                $("#otherError_" + obtMrk).html("Minimun 3.85 required").show();
                scrollToField(obtMrk);
                flag = true;
            } else if (parseFloat($("#" + obtMrk).val()) > 7) {
                $("#otherError_" + obtMrk).html("Cannot be greater than 7").show();
                scrollToField(obtMrk);
                flag = true;
            }
        } else if ($("#" + mrkVld).val() == "CGPA out of 4") {
            if (parseFloat($("#" + obtMrk).val()) < 2.2) {
                $("#otherError_" + obtMrk).html("Minimun 2.2 required").show();
                scrollToField(obtMrk);
                flag = true;
            } else if (parseFloat($("#" + obtMrk).val()) > 4) {
                $("#otherError_" + obtMrk).html("Cannot be greater than 4").show();
                scrollToField(obtMrk);
                flag = true;
            }
        }
    }

    // markingLawMedia('field_98786_1_4', 'field_98786_1_5');
    // markingLawMedia('field_98786_2_4', 'field_98786_2_5');
    markingLawMedia('field_98786_3_4', 'field_98786_3_5');
    markingLawMedia('field_98786_4_4', 'field_98786_4_5');
    // markingLawMedia('field_98786_5_4', 'field_98786_5_5');

}

//hide something from LP from slug from all forms
if(window.location.hostname == 'admissions.jgu.edu.in'){
    $('#FieldRegistrationDate,#FieldRegistrationCity').hide()   
}

//to dowload broucher from widget paste this in thankyou msg

setTimeout(()=>{
    downloadWidgetPDF("https://sme-snu.nopaperforms.com/downloads/6297509f56cd3095870594_download3.pdf")
},100);


window.top.location.href="https://admissions.calcuttabusinessschool.org.in/downloads/62ac4d8b2d705693149076_CBSBrochure2022.pdf";



//for hiding values
/*Room type hide according to gender*/
function hide() {
    if ($('#gender').val() == "Female") {
        $('#field_268797 option[value="Double"]').hide();
        $('#field_268797 option[value="3 Seater"], #field_268797 option[value="4 Seater"], #field_268797 option[value="2-Seater (Heated Room, attached Washroom)"], #field_268797 option[value="2 Seater"]').show();

    }
    if ($('#gender').val() == "Male") {
        $('#field_268797 option[value="2 Seater"]').hide();
        $('#field_268797 option[value="3 Seater"], #field_268797 option[value="4 Seater"], #field_268797 option[value="2-Seater (Heated Room, attached Washroom)"], #field_268797 option[value="Double"]').show();
    }
}

hide();
$(document).ajaxStop(hide);

/*.................*/


/*-- Terms & Conditions --*/
if ($('.checkbox.field_355118').length) {
    $('body').append('<div class="modal fade" tabindex="-1" role="dialog" id="ConfirmSubmitArea"><div class="modal-dialog modal-lg" role="document" style="width: 100% !important;margin: 0;"><div class="modal-content"><div class="modal-body" id="tacBody"></div><div class="modal-footer"><button style="color: red;cursor: default;background: transparent;" class="btn btn-default myHide">All checkboxes must be checked</button><button type="button" class="btn btn-primary" onclick="checkCheckBox()">Save changes</button></div></div></div></div><style>.myHide {display: none;}</style>');

    console.log("length")

    if ($('input[name="field_355118[]"]').length == $('input[name="field_355118[]"]:checked').length) {
        $('.checkbox.field_355118').addClass('myHide');
        console.log("checkking")
    } else {
        $('#tacBody').append($('.checkbox.field_355118').children());
        $('#ConfirmSubmitArea').modal('show');
    }

    window.checkCheckBox = function () {
        if ($('input[name="field_355118[]"]').length == $('input[name="field_355118[]"]:checked').length) {
            $('#ConfirmSubmitArea').modal('hide');
            console.log("window pop check")
            $('.checkbox.field_355118').append($('#tacBody').children()).addClass('myHide');
        } else {
            $('#ConfirmSubmitArea .modal-footer .btn-default').removeClass('myHide');
            setTimeout(function () {
                $('#ConfirmSubmitArea .modal-footer .btn-default').addClass('myHide');
            }, 5000);
        }
    }
}

//---------------------------------------freeze email and mobile -------------------------

if ($('#email').length > 0 && $('#email').val() != '') {
    $('#email').attr('readonly', 'readonly');
 }
 if ($('#mobile_no').length > 0 && $('#mobile_no').val() != '') {
    $('#mobile_no').attr('readonly', 'readonly');
 }



 /*function to calulate the percentage by Anshul code till the anshul end point*/
var calculatePercentage = function (PercentageField, maxField1, maxField2, maxField3, maxField4, maxField5, obtMarks1, obtMarks2, obtMarks3, obtMarks4, obtMarks5) {
    var executeOnChange = function () {
        var m1 = $('#' + maxField1).val(),
            m2 = $('#' + maxField2).val(),
            m3 = $('#' + maxField3).val(),
            m4 = $('#' + maxField4).val(),
            m5 = $('#' + maxField5).val(),
            o1 = $('#' + obtMarks1).val(),
            o2 = $('#' + obtMarks2).val(),
            o3 = $('#' + obtMarks3).val(),
            o4 = $('#' + obtMarks4).val(),
            o5 = $('#' + obtMarks5).val();
        if ($('#' + [PercentageField, maxField1].join(',#')).length) {
            var totalPercentage = 0;
            totalPercentage = ((Number(o1) + Number(o2) + Number(o3) + Number(o4) + Number(o5)) / (Number(m1) + Number(m2) + Number(m3) + Number(m4) + Number(m5)) * 100);
            $('#' + PercentageField).val(totalPercentage.toFixed(2)).attr('readonly', true);
        }
    }
    $('#' + [maxField1, maxField2, maxField3, maxField4, maxField5, obtMarks1, obtMarks2, obtMarks3, obtMarks4, obtMarks5].join(',#')).change(executeOnChange);
    $(document).ready(executeOnChange);
}
calculatePercentage('field_36847_1_4', 'field_36858_2_1', 'field_36858_2_2', 'field_36858_2_3', 'field_36858_2_4', 'field_36858_2_5', 'field_36858_3_1', 'field_36858_3_2', 'field_36858_3_3', 'field_36858_3_4', 'field_36858_3_5');
calculatePercentage('field_36863_1_4', 'field_36864_2_1', 'field_36864_2_2', 'field_36864_2_3', 'field_36864_2_4', 'field_36864_2_5', 'field_36864_3_1', 'field_36864_3_2', 'field_36864_3_3', 'field_36864_3_4', 'field_36864_3_5');




/*show and hide the proof of identity based of nationality*/
var nationality = function () {
    var n = $('#nationality').val();
    if (n === "Foreign National") {
        $('#field_36861 option[value="Aadhar Card"],#field_36861 option[value="Pan Card"]').hide().trigger('chosen:updated');
    } else {
        $('#field_36861 option').show().trigger('chosen:updated');
    }
}
$('#nationality').change(nationality);
nationality();




//For auto population
function degreePopulate() {
    if ($('#course').val() == "177936;;;UG" ||
        $('#course').val() == "177953;;;UG" ||
        $('#course').val() == "177956;;;UG" ||
        $('#course').val() == "177978;;;UG" ||
        $('#course').val() == "178011;;;UG" ||
        $('#course').val() == "178060;;;UG" ||
        $('#course').val() == "178069;;;UG" ||
        $('#course').val() == "178088;;;UG" ||
        $('#course').val() == "178125;;;UG" ||
        $('#course').val() == "178142;;;UG" ||
        $('#course').val() == "178171;;;UG"
    ) {
        $('#field_39488').val('UG');
    }   else if ($('#course').val() == "177981;;;Fellowship") {
        $('#field_39488').val('Fellowship');
    } else {
        $('#field_39488').val('');
    }
    $('.chosen-select').trigger('chosen:updated');

}
if ($('#field_39488,#course').length) {
    $('#course').change(degreePopulate);
    $(document).ajaxStop(degreePopulate)
}

//for deciaml 

$('#field_10121_1_7, #field_10121_2_7,#field_10121_3_7,#field_10121_4_7,#field_10121_5_7').keypress(function(event) {
    if ((((event.which != 46) && (event.which < 48)) || (event.which > 57)) || (event.target.value.split('.')[1].length >= 2)) {
        event.preventDefault();
    }
});

$('#field_10121_1_7, #field_10121_2_7,#field_10121_3_7,#field_10121_4_7,#field_10121_5_7').change(function(){
for (i = 1; i <= 5; i++) {
    if ($('#field_10121_' + i + '_1').val() == 'JEE Main') {
        $('#field_10121_' + i + '_7').keypress(function (event) {
            if ((((event.which != 46) && (event.which < 48)) || (event.which > 57)) || (event.target.value.split('.')[1].length >= 7)) {
                event.preventDefault();
            }
        });
    }   
}
})

//............
$('#field_353561_1_3 option').hide().prop("disabled", true).attr("disabled","disabled");


//to append msg

if($('#showMObileVerified').is(':visible')==false){
    $("#Mobile").after(`<p style="color:red;font-size:10px">You have to verify your number</p>`);
}



if($('#showMObileVerified').is(':visible')==false){
$( "#target" ).click(function() {
    $("#Mobile").after("<p>You have to verify your number</p>");
  });
}

//to update filed
$('#field_416063').change(function () {
    ($('#field_416065').trigger('chosen:updated'));
});

//to hide dropdown value
let admissionClas = $("#course");
let transportaionRequired = $("#field_226519 option[value='No']");

function noYes(){
    if($(admissionClas).val() != "54980;;;Toddler" && $(admissionClas).val() !="54981;;;Nursery" && (admissionClas).val() !="54982;;;KG" ){
        transportaionRequired.hide().trigger("chosen:updated");    
    }else{
        transportaionRequired.show().trigger("chosen:updated");    
    }
}
admissionClas.change(noYes)
noYes();


//to sate date acc. to course
if ($('#course, #date_of_birth, #field_91801').length == 3) {
    function courseDobChange() {
        var course = $('#course').val();
        if (course != '') {
            switch (course) {
                case "54980;;;Toddler":
                    $('#date_of_birth').datepicker("setStartDate", "01/04/2001");
                    $('#date_of_birth').datepicker("setEndDate", "31/03/2020");
                    break;
                case "54981;;;Nursery":
                    $('#date_of_birth').datepicker("setStartDate", "01/04/2001");
                    $('#date_of_birth').datepicker("setEndDate", "31/03/2019");
                    break;

                default:
                    //$('#date_of_birth').datepicker("setStartDate", "01/04/2001");
                   // $('#date_of_birth').datepicker("setEndDate", "12/31/2019");
                    break;
            }
        }
    }
    $('#course').change(courseDobChange);
    $(document).ajaxStop(courseDobChange);
}


//hide multiple option from dropdown

function preferencesHide() {
    let fields = ['field_13092_1_1', 'field_13092_2_1', 'field_13092_3_1', 'field_13092_4_1', 'field_13092_5_1',];

    let courses = ['CLAT 2021', 'LAST India 2021', 'MH CET(LAW) 2021', 'UGPET 2021'];

    $('#' + fields.join(', #')).find('option').each((i, e) => {
        courses.indexOf($(e).val()) != -1 && $(e).prop('disabled', true).attr('disabled', 'disabled').hide().trigger('chosen:updated');
    });
}
$(document).ajaxStop(preferencesHide);
preferencesHide();


//validtaion on gender

function genderShow() {
    if ($('#applicant_title').val() == "Mr.") {
        $('#gender option[value="244780;;;Female"]').hide().prop('disabled', true).prop('selected', false).trigger('chosen:updated');
        $('#gender option[value="244779;;;Male"]').show().prop('disabled', false).trigger('chosen:updated');

    } else if($('#applicant_title').val() == "Mrs." || $('#applicant_title').val() == "Miss."){
        $('#gender option[value="244780;;;Female"]').show().prop('disabled', false).trigger('chosen:updated');
        $('#gender option[value="244779;;;Male"]').hide().prop('disabled', true).prop('selected', false).trigger('chosen:updated');
    } else {
        $('#gender option[value="244780;;;Female"]').show().prop('disabled', false).trigger('chosen:updated');
        $('#gender option[value="244779;;;Male"]').show().prop('disabled', false).trigger('chosen:updated');
    }
}

$(document).ajaxStop(genderShow);
$('#applicant_title').change(genderShow);


//to make field input show
$(document).ajaxStop(function(){
    $('#nationality').val() == '10997;;;Indian' ? $('.first_name, .middle_name, .last_name, .email, .mobile_no').show() : $('.first_name, .middle_name, .last_name,.email, .mobile_no').hide(); 
    })
    $('#nationality').change(function(){
    $('#nationality').val() == '10997;;;Indian' ? $('.first_name, .middle_name, .last_name,.email, .mobile_no').show() : $('.first_name, .middle_name, .last_name,.email, .mobile_no').hide(); 
    })


//to autopopulate course
if(window.location.href.includes('https://apply.msb.ac.in/msb')){
$('#UniversityId').val("233556").change();
}

if(window.location.href.includes('https://apply.msb.ac.in/mips')){
$('#UniversityId').val("233562").change();
}


//scholarship hide

var scholarCourses = ["487396;;;B Tech CSE Artificial Intelligence Research", "487396;;;B Tech CSE Artificial Intelligence Research", "199126;;;B Tech CSE Cloud Computing", "199127;;;B Tech CSE Cyber Security", "449919;;;B Tech CSE Data Science", "497711;;;B Tech CSE LEET Artificial Intelligence", "338168;;;B Tech CSE LEET Cloud Computing", "338169;;;B Tech CSE LEET Cyber Security", "497710;;;B Tech CSE LEET Data Science"]

function scholar() {
    if (scholarCourses.indexOf($('#course').val()) !== -1 && $('#domicile').val() == "12877;;;Himachal Pradesh") {
        $("#field_169295 option[value='1505699;;;HP CSE Scholarship']").show().prop('disabled', false).trigger('chosen:updated');
    }

    else {
        $("#field_169295 option[value='1505699;;;HP CSE Scholarship']").hide().prop('disabled', true).trigger('chosen:updated');
    }
    }
$(document).ajaxStop(scholar);
$('#course').change(scholar);


/*school id*/
$("#field_269013").change(function () {
    setTimeout(() => {
        $("#field_338576").prop("selectedIndex", 1).trigger('chosen:updated');
    }, 400);
});

setTimeout(() => {
    $("#field_338576").prop("selectedIndex", 1).trigger('chosen:updated');
}, 400);


//DOB validation
if ($('#campus, #date_of_birth').length == 2) {
    function campusDobChange() {
        if ($('#campus').val()== "1500003;;;PG Diploma - Leadership") {
            $('#date_of_birth').datepicker("setStartDate", "01/01/1962");
            $('#date_of_birth').datepicker("setEndDate", "31/12/2022");
            }
        }
    }
    $('#campus').change(campusDobChange);
    $(document).ajaxStop(campusDobChange);


//Pursuing hide from 12th table
$("#field_355409_1_2 option[value='Pursuing']").hide().prop('disabled', true).trigger('chosen:updated');

//......
var setCourseCode = function () {
    var program = $("#campus").val();
    var d;
    switch (program) {
        case '233557;;;MITS Engineering College':
            d = 'MITS';
            break;
        case '233560;;;MITS School of Engineering':
            d = 'MSE';
        default:
            break;
    }

    $("#field_423395").val(d);
    console.log(d);
    $('.chosen-select').trigger('chosen:updated');
}
$("#campus").change(setCourseCode);
$(document).ajaxStop(setCourseCode);
setCourseCode();


$('.navbar-header').append(`<span style="width: 310px; position: absolute; left: 50%; top: 0px;"><img src="https://gen.sendtric.com/countdown/pde3yv8b87" style="display: block;max-width:100%" /></span>`);
$(".page-header").append("<a style='float:right' class='btn btn-primary' href='https://www.youtube.com/watch?v=VeIiSqVSfyU' target='_blank'>Virtual Campus Tour</a>");

if ($('.submit-btn').length == 1){
    $(".submit-btn").html('Submit Registration')
    };
 
    
//function
$("#field_408185").change(()=>{
    $("#field_408185").val() != "" ?  $('#field_283983').val('Yes').trigger('chosen:updated') : $('#field_283983').val('No').trigger('chosen:updated');
})




function dynamicSeries() {
    if ($('#campus').val() == "1500011;;;Graphic Design Diploma (Part-Time)"
    ||$('#campus').val() == "1500012;;;Motion Graphics Diploma (Part-Time)"
    ||$('#campus').val() == "1500013;;;UX Design Diploma (Part-Time)"
    ||$('#campus').val() == "1500014;;;Digital Brand Communication Diploma (Part-Time)"
    ||$('#campus').val() == "1500015;;;Interior Design Diploma (Part-Time)"
    ||$('#campus').val() == "1507689;;;Diploma in UI Design"
    ||$('#campus').val() == "1507691;;;Diploma in Graphic Design"
    ||$('#campus').val() == "1507692;;;Diploma in Interior Design"
    ||$('#campus').val() == "1507693;;;Diploma in UX + UI Design"
    ||$('#campus').val() == "1507694;;;Diploma in Motion Graphics"
    ) {
        $('#field_33603').val('AND/OF/DC/2022')
    } 
    else if ($('#campus').val() == "1500010;;;PG Graphic Design (Full-Time)"
    ||$('#campus').val() == "1507690;;;PG Diploma in Graphic Design"
    ||$('#campus').val() == "1507688;;;PG Diploma in Interior Design"
    )  {
        $('#field_33603').val('AND/OF/PG/2022');
    }else {
        $('#field_33603').val('');
    }
    $('.chosen-select').trigger('chosen:updated');

}
$('#campus').change(function () {
    dynamicSeries();
});

$(document).ajaxStop(function () {
    dynamicSeries();
});


//for css

$(".correspondence_country").after($(".correspondence_state1"));
$(".correspondence_state1").after($(".correspondence_city1"));
$(".correspondence_state1").css({'clear':'initial'})


$(".permanent_country").after($(".permanent_state1"));
$(".permanent_state1").after($(".permanent_city_1"));
$(".permanent_state1").css({'clear':'initial'})



/*show BCA Corse*/
var scholarbca = ['487398;;;BCA Full Stack Developer','484179;;;BCA Gaming and Graphics','449924;;;BCA UI/UX'];
function showBCAlist(){
    if(scholarbca.indexOf($("#course").val()) !== -1){
        $('#field_169295 option[value="1506092;;;BCA Merit Scholarship"]').show().prop('disabled',false).trigger('chosen:updated');
    }else{
        $('#field_169295 option[value="1506092;;;BCA Merit Scholarship"]').hide().prop('disabled',true).trigger('chosen:updated');
    }
}

$(document).ajaxStop(showBCAlist);
$('#course').change(showBCAlist);


//form sort
var formId= ['15196','15221','15210','15261','15260','15243'];
$(formId).each(function (i, e) {
    $(".form_" + formId[i]).after($(".form_" + formId[i + 1]));
});


//to show

function btechAutoSelect() {
    if ($('#course').val().includes('B.Tech') === true || $('#field_178823').val().includes('B.Tech') === true || $('#field_178824').val().includes('B.Tech') === true) {
        $('#field_209432').val('B.Tech').change().trigger('chosen:updated');
    } else {
        $('#field_209432').val('').change().trigger('chosen:updated');
    }
}
$('#course,#field_178823,#field_178824').change(function () {
    btechAutoSelect();
});
$(document).ajaxStop(function () {
    btechAutoSelect();
});


//--------------------------auto populate gender-----------------------------------------
$("#applicant_title").on('change', function () {
    var title = $("#applicant_title").val();
    var gen;
    if (title == 'Mr') {
        gen = 'Male';
    }
    if (title == 'Miss') {
        gen = 'Female';
    }
    if (title == 'Mrs') {
        gen = 'Female';
    }
    $("#gender").val(gen);
    $('.chosen-select').trigger('chosen:updated');
});

//for frezing 

$('#dial_code_mobile_no').parent().css('pointer-events','none');
$('#marital_status').val("12855;;;Single").prop('disabled', true).change().trigger('chosen:updated');


//for data capture
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



//for hide

function showHideCategory() {
    var getValueBeforeExecution = $('#field_329338').val();
    $('#field_329338 option').not(':eq(0)').remove();
    $('.chosen-select').trigger('chosen:updated');
    var ifFlag = true;
    if ($('#field_329391').length) {
        var getExam = $('#field_329391').val().indexOf("|||") !== -1 ? $('#field_329391').val().split("|||") : [$('#field_329391').val()];
        getExam.forEach(function (getData) {
            if (ifFlag) {
                if (['CAT', 'XAT', 'MAT', 'CMAT', 'GMAT'].indexOf(getData) !== -1) {
                    $('#field_329338').append('<option value="Merit">Merit</option>');
                    ifFlag = false;
                }
            }
            if (['None of These'].indexOf(getData) !== -1) {
                $('#field_329338').append('<option value="NRI Sponsored">NRI Sponsored</option>');
                $('#field_329338').append('<option value="Corp. Sponsored">Corp. Sponsored</option>');
                $('#field_329338').append('<option value="NRI">NRI</option>');
                $('#field_329338').append('<option value="Supernumerary">Supernumerary</option>');
            }
            if (['GMAT'].indexOf(getData) !== -1) {
                $('#field_329338').append('<option value="International Students">International Students</option>');
            }
        });
        if ($('#field_329338 option[value="' + getValueBeforeExecution + '"]:disabled').length === 0) {
            $('#field_329338').val(getValueBeforeExecution).trigger('chosen:updated');
        }
        $('.chosen-select').trigger('chosen:updated');
    }
}
$(document).ready(function () {
    showHideCategory();
});


//for document in deshboard
$('.msgarw:contains(OfferLetterGivenActive)').hide();
$('.msgarw:contains(OfferLetterGivenActive)').length == 0 && $('a.utility-link:contains(Offer Letter)').remove();


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


//mobile validation

if ($('#mobile_no, #father_mobile_no, #mother_mobile_no').length == 3) {
    if (($('#mobile_no').val().split('-')[1] == $('#father_mobile_no').val()) ||
        ($('#mobile_no').val().split('-')[1] == $('#mother_mobile_no').val()) ||
        ($('#mobile_no').val().split('-')[1] == $('#mother_mobile_no').val())) {
        $('#otherError_mother_mobile_no').html('Phone Numbers should be different!').show();
        $('#otherError_father_mobile_no').html('Phone Numbers should be different!').show();
        flag = true;
    }
}

//to enable login first

$(document).ready(function(){
    let url=location.pathname;
    if(url ==='/dsab-application-form' || url==='/mba-executive'){
    $("#tab1default").removeClass("active in");
    $("#tab2default").addClass("active in");
    }
    })



$('.msgarw').hide();
$('.msgarw:contains(Integrated B.A. and LLB (Hons.))').length == 1 && $('a.utility-link:contains(Int BA LLB token fee hidden)').hide();
$('a.utility-link:contains(Int BA LLB token fee hidden)').length == 1 && $('a[role="button"]:contains(Program Fee), a[role="button"]:contains(Remaining Fee 1), a[role="button"]:contains(Remaining Fee 2)').hide();


$('.msgarw:contains(OfferLetterGivenActive)').hide();
$('.msgarw:contains(OfferLetterGivenActive)').length == 0 && $('a.utility-link:contains(Offer Letter)').remove();
/* Year validatio*/
var TwelveYear = 'field_357640_1_6',
    UgYear = 'field_357663_1_6';
if ($('#' + TwelveYear + ', #' + UgYear).length === 2){
    if (($('#' + TwelveYear).val() !== '') && ($('#' + UgYear).val() !== '') && ($('#' + TwelveYear).val() !== null) && ($('#' + UgYear).val() !== null) && ((Number($('#' + UgYear).val()) - Number($('#' + TwelveYear).val())) < 3)) {
        scrollToField(UgYear);
        $('#otherError_' + UgYear).html("minimum gap in 12th and UG is 3 years");
        $('#otherError_' + UgYear).show();
        flag = true;
    }
}


//Pursuing hide from 12th table
$("#field_355283_1_2 option[value='Pursuing']").hide().prop('disabled', true).trigger('chosen:updated');


//to show state field on other
$('#FieldNearestCity').change(function(){
    if ($('#FieldNearestCity').val() == "260349") {
        $('.reg_field_choose_your_state_div').show();

    } else{
        $('.reg_field_choose_your_state_div').hide();
    }
    });
$('.reg_field_choose_your_state_div').hide();


//For multiple hide

let preferencesHide = function () {
    let fields = ['field_232496_1_2', 'field_232507_1_2', 'field_232506_1_2','field_232547_1_3','field_232547_2_3','field_232547_3_3'];

    let courses = ['20126;;;Not specified/Any Other','20127;;;Not specified/Any Other','19209;;;Any Other'];

    $('#' + fields.join(', #')).find('option').each((i, e) => {
        courses.indexOf($(e).val()) != -1 && $(e).prop('disabled', true).attr('disabled', 'disabled').hide().remove().trigger('chosen:updated');
    });
}
$(document).ajaxStop(preferencesHide);
preferencesHide();


//for non of these

if($('.field_232536').length){
    var freezeChecked = () => {
        var examEntranceID = ['field_232536_0', 'field_232536_1', 'field_232536_2', 'field_232536_3', 'field_232536_4'];
        if ($('#field_232536_5').is(':checked') == true) {
            examEntranceID.forEach((ids) => {
                if ($(`#${ids}`).is(':checked') == true) {
                    $(`#${ids}`).click();
                }
            });
            $("#field_232536_0,#field_232536_1,#field_232536_2,#field_232536_3,#field_232536_4").prop("disabled", true);
        } else {
            $("#field_232536_0,#field_232536_1,#field_232536_2,#field_232536_3,#field_232536_4").prop("disabled", false);
        }
    }
    freezeChecked();
    }
    
    $('input[name="field_232536[]"]').change(freezeChecked);

//to add required
if ($('#field_329336_2_2').val() == null || $('#field_329336_2_2').val() == '' || typeof $('#field_329336_2_2').val() == 'undefined') {
    addRequiredTableElms('field_329336_2_2');
    $('#otherError_field_329336_2_2').text('Required!');
    $('#otherError_field_329336_2_2').show();
    $(this).addClass('error_td');
    flag = true;
}



//to show doc
if (window.location.href.indexOf("dashboard") > -1) {  jQuery('.page-header').append('<a class="btn btn-primary btn-xs pull-right mt-5 first" href="https://www.bimtech.ac.in/life-at-bimtech/virtual-tour/" target="_blank"><span class="glyphicon glyphicon-eye-open" style="padding-right: 5px;"></span> Campus 360 Degree View </a> <a class="btn btn-primary btn-xs pull-right mt-5 first faqss" href="https://online.admissions.bimtech.ac.in/downloads/6181229a4cd81394222686_FAQ_2022.pdf" target="_blank">FAQ</a><a class="btn btn-primary btn-xs pull-right mt-5 first informs" href="https://online.admissions.bimtech.ac.in/downloads/6180c34bc9b28312910631_INFORMATION_BULLETIN_2022_(2).pdf" target="_blank">Information Bulletin</a> <a class="pull-right mt-5 second" href="https://www.facebook.com/groups/289214242677612" target="_blank"><img class="desk_img" src="https://online.admissions.bimtech.ac.in/downloads/5d78af50625d4622796147_facebook_connect.png"><img class="mob_img" src="https://online.admissions.bimtech.ac.in/downloads/5d78a7116cb53798862221_facebookIcon.png"></a>')}

//to show hidden field in frontend

if ($('#field_428975').length == 1 && window.location.href.indexOf('in1.nopaperforms.io/form/preview') > -1) {
    $('.field_428975 > div > div').show()
}

/*To show instruction */
$('#field_347164_7').parent().before('<p style="margin-bottom: 0; margin-top:10px;font-weight:bold;font-size:17px">If you have not appeared for any of these entrance exams, you will have to appear for Bennett University Management Aptitude Test (BUMAT) Score</p>')



/* Course according to gender*/

function classVal() {
    if($('#gender, #field_84511').length == 2){
    if ($('#gender').val() == "Female") {
        $('#field_84511 option[value="4"],#field_84511 option[value="5"]').hide().prop('disabled', true).trigger('chosen:updated');
    }
    else{
        $('#field_84511 option[value="4"],#field_84511 option[value="5"]').show().prop('disabled', false).trigger('chosen:updated');
    }
}
}
classVal();
$('#gender').change(classVal);


//Country
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


//freez phone no

$('#dial_code_mobile_no, #mobile_no').length && $('.merge_field_div > div').css('pointer-events','none');

//for diffrent slug hide

var removecourse =[
    '182316',
    '392405',
    '239021',
    '182324'
    ]
    
    if ($('#home,#registerForm').length == 2){
        if ($('#SpecializationId').length == 1 ) {
            $(document).ajaxStop(function () {
                $('#SpecializationId option').each(function (i, e) {
                    var localValue = $(e).val();
                    if (removecourse.indexOf(localValue) != -1) {
                        $(e).remove();
                    }
                });
                $('.chosen-select').trigger('chosen:updated')
            });
        }
        
    }


//To show hidden field 
$('.control-label').parent().show();



//for 7 decimal value
$('#field_10121_1_7, #field_10121_2_7,#field_10121_3_7,#field_10121_4_7,#field_10121_5_7').keypress(function(event) {
    if ((((event.which != 46) && (event.which < 48)) || (event.which >57)) || (event.target.value.split('.')[1].length >= 7)) {
        event.preventDefault();
    }
 if(event.target.value.includes('.') && event.which == 46){
     event.preventDefault();
 }
});
