//migration 10th & 12th
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

//---------------------------------------freeze email and mobile -------------------------

if ($('#email').length > 0 && $('#email').val() != '') {
    $('#email').attr('readonly', 'readonly');
}
if ($('#mobile_no').length > 0 && $('#mobile_no').val() != '') {
    $('#mobile_no').attr('readonly', 'readonly');
}

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


//--------------------------------------------Hide Course--------------------------------------------



/*
var removeCourseList = [
    '184869;;;BCA Industry Oriented Program',
    '184876;;;BBA In Public Policy',
    '184943;;;B.Tech. In Computer Science And Engineering With Specialisation In Computer Networks And Cyber Security',
    '184944;;;B.Tech. In Computer Science And Engineering With Specialization In Data Analytics',
    '184946;;;B.Tech In Computer Science Engineering with specialization in Business Analytics And Optimization',
    '184947;;;B.Tech. In Electronics And Communication Engineering With Specialization In Internet Of Things (IOT)',
    '184953;;;B.Tech. In Computer Science And Engineering With Specialization In Internet Of Things And Intelligent Systems',
    '184956;;;B.Tech. In Electronics And Communication Engineering With Specialization In Embedded Systems',
    '184957;;;B.Tech. In Electronics And Communication Engineering With Specialization In VLSI',
    '184921;;;B.Tech. In Electronics And Communication Engineering With Specialization In VLSI',
    '184906;;;B.Tech. In Computer Science And Engineering With Specialisation In Computer Networks And Cyber Security',
    '184907;;;B.Tech. In Computer Science And Engineering With Specialization In Data Analytics',
    '184909;;;B.Tech In Computer Science Engineering with specialization in Business Analytics And Optimization',
    '184910;;;B.Tech. In Electronics And Communication Engineering With Specialization In Internet Of Things (IOT)',
    '184916;;;B.Tech. In Computer Science And Engineering With Specialization In Internet Of Things And Intelligent Systems',
    '184920;;;B.Tech. In Electronics And Communication Engineering With Specialization In Embedded Systems',
    '184881;;;BBA Accountancy, Taxation And Auditing',
    //'215682;;;B.Tech In Artificial Intelligence and Data Science',
    //'184843;;;B.Tech In Civil Engineering',
    //'215689;;;B.Tech In Civil Engineering Environment and Pollution Control',
    //'184903;;;B.Tech In Computer Science And Engineering',
    //'184835;;;B.Tech In Computer Science and Engineering (Cloud Computing and Virtualization)',
    //'215683;;;B.Tech In Computer Science and Engineering (Cyber Security)',
    //'215685;;;B.Tech In Computer Science and Engineering (Gaming Technology)',
    '215684;;;B.Tech In Computer Science and Engineering (Internet of Things and Cyber Security Including Block Chain Technology)',
    //'184845;;;B.Tech In Electrical And Electronics Engineering',
    '388673;;;B.Tech. in Biomedical Engineering',
    //'184847;;;B.Tech In Electrical Engineering',
    //'184846;;;B.Tech In Electronics And Communication Engineering',
    //'215687;;;B.Tech In Electronics and Communication Engineering (Bio-Medical Engineering)',
    //'184841;;;B.Tech In Mechanical Engineering',
    '215197;;;Integrated B.A. LLB (Hons)',
    '215198;;;Integrated BBA. LLB (Hons)',
    //'184888;;;B.Sc (Nursing)',
    // '184884;;;B.A (Hons) Sociology',
    // '184893;;;B.Sc (Hons) Biochemistry',
    //'184892;;;B.Sc (Hons) Biological Science',
    //'185043;;;B.Sc (Hons) Botany',
    //'239965;;;B.Sc. (General) Mathematics and Data Science',
    //'239966;;;B.Sc. (General) PCM (Physics Chemistry and Maths)',
    //'184898;;;B.Sc Environmental Science',
    //'238980;;;B.Sc. Medical Imaging Technology',
    //'239967;;;B.Sc. (General) ZBC (Zoology, Botany, Chemistry)',
    '184874;;;Bachelor of Architecture (B.Arch.)',
    //'215690;;;B.Tech In Biomedical Engineering',
    //'215688;;;B.Tech In Civil Engineering (Construction Technology)',
    '184842;;;B.Tech In Automobile Engineering',
    '184951;;;B.Tech. In Automobile Engineering',
    '184914;;;B.Tech. In Automobile Engineering',
    '215686;;;B.Tech In Computer Science and Business Systems',
    '238979;;;Bachelor in Health Information Administration',
    '184898;;;B.Sc Environmental Science',
    '239966;;;B.Sc. (General) PCM (Physics Chemistry and Maths)',
    '238980;;;B.Sc. Medical Imaging Technology',
    '388667;;;BA+LLB (Hons)',
    '390059;;;B.Sc Clinical Research and Healthcare',
    '184852;;;Bachelor of Tourism Administration',
    // '392357;;;B.Tech. in Electronics and Communication Engineering (Bio-Medical Engineering)',
    // '392359;;;B.Tech. in Electronics and Communication Engineering(Bio-Medical Engineering)',
    '401110;;;B.Sc. (General) PCM',
    '399384;;;B.Sc Clinical Research',
    '400016;;;B.Sc in Data Analytics',
    '400032;;;B.Sc. Programming Data Science',
    '401274;;;B.Tech In Electrical And Electronics Engineering',
    '362719;;;B.Tech In Computer Science and Business Systems',
    '401266;;;B.Tech In Electrical And Electronics Engineering',
    // '485520;;;B.Tech (Hons) in Computer Science and Engineering with Specialization in Cyber Security and Forensic',
    '485527;;;Bachelor of Technology in Computer Science and Engineering (Data Analytics)',
    // '485512;;;B.Tech (Hons) in Computer Science and Engineering with Specialization in Cyber Security and Forensic',
    '485517;;;Bachelor of Technology in Computer Science and Engineering (Data Analytics)',
    '401261;;;B.Sc (Hons) Built Environment',
    '399383;;;B.Sc Nutrition and Dietetics',
    '399382;;;B.Sc Yoga Science',
    '400036;;;B.Sc. Health Information Administration',
    '184843;;;B.Tech In Civil Engineering',
    '215688;;;B.Tech In Civil Engineering (Construction Technology)',
    '215689;;;B.Tech In Civil Engineering Environment and Pollution Control',
    '184835;;;B.Tech In Computer Science and Engineering (Cloud Computing and Virtualization)',
    '184845;;;B.Tech In Electrical And Electronics Engineering',
    // '184847;;;B.Tech In Electrical Engineering',
    '184846;;;B.Tech In Electronics And Communication Engineering',
    '239965;;;B.Sc. (General) Mathematics and Data Science',
    //'185046;;;B.Des Fashion Design',
    '392334;;;B.Sc. - Food Science And Dietetics',
    '239967;;;B.Sc. (General) ZBC (Zoology, Botany, Chemistry)',
    '184893;;;B.Sc (Hons) Biochemistry',
    '185043;;;B.Sc (Hons) Botany',
    '394509;;;B.Tech. in Computer Science and Engineering (Data Analytics)',
    '392333;;;B.Sc. (Hons) Built Environment',
    '386699;;;Bachelor Health Information Administration',
    '388668;;;BBA+LLB(Hons)',
    '392337;;;B.Sc. Yoga Science',
    // '392338;;;B.Tech in Agriculture Engineering',
    '392339;;;B.Tech in Civil Engineering (Smart Cities)',
    '392340;;;B.Tech in Computer Science and Engineering (Augmented Reality and Virtual Reality (AR and VR))',
    '392341;;;B.Tech in Computer Science and Engineering (Business Analytics)',
    '393257;;;B.Tech in Computer Science and Engineering (Cyber Security and Forensic)',
    '215687;;;B.Tech In Electronics and Communication Engineering (Bio-Medical Engineering)',
    '388674;;;B.Tech. in Civil Engineering (Construction Technology)',
    '388675;;;B.Tech. in Civil Engineering Environment and Pollution Control',
    '388676;;;B.Tech. in Computer Science and Engineering',
    '388678;;;B.Tech. in Computer Science and Engineering (Cyber Security)',
    '388679;;;B.Tech. in Computer Science and Engineering (Gaming Technology)',
    '388683;;;B.Tech. in Mechanical Engineering',
    '184870;;;BCA In Multimedia And Animation',
    // '392350;;;BCA with Industry Oriented Specialization in Big Data',
    '392351;;;BCA with Industry Oriented Specialization in Business Analytics',
    // '392355;;;BCA with Industry Oriented Specialization in Internet of Things (IoT) and Blockchain',
    //'184871;;;Integrated MCA (BCA with MCA)',
    '392347;;;B.Tech In Artificial Intelligence and Machine Learning',
    // '392360;;;B.Tech in Electronics and Communication Engineering (Embedded Systems)',
    // '392361;;;B.Tech in Electronics and Communication Engineering (Internet of Things)',
    '392363;;;B.Tech in Mechanical Engineering (Energy Engineering)',
    '392364;;;B.Tech in Mechanical Engineering (Industry 4.0)',
    // '392365;;;B.Tech in Mechanical Engineering (Mechatronics)',
    '392362;;;B.Tech in Mechanical Engineering (Pipeline Engineering)',
    '392366;;;B.Tech in Mechanical Engineering (Robotics and Automation)',
    '392367;;;B.Tech in Mechanical Engineering (Smart Manufacturing)',
    '393258;;;B.Tech In Medical Lab Technology',
    '386700;;;B.Sc. Healthcare and Clinical Research',
    '388671;;;B.Tech. in Artificial Intelligence and Data Science',
    '218066;;;B.Sc. Nutrition and Dietetics',
    '399381;;;B.Sc Programming and Data Science',
    '393255;;;B.Sc. Clinical Research',
    '400034;;;BBA in Facilities and Hygiene Management',
    '400035;;;BA Digital Media and Design',
    '401247;;;B.Sc Health Information Administration',
    '392348;;;B.Sc. Programming and Data Science',
    '392368;;;B.Tech in Automobile Engineering (E-Vehicles and Autonomous Vehicles)'
]
if ($('#course, #field_178823, #field_178824').length == 3) {
    $(document).ajaxStop(function () {
        $('#course option').each(function (i, e) {
            var localValue = $(e).val();
            if (removeCourseList.indexOf(localValue) != -1) {
                $(e).prop("disabled", true).hide();
                $(e).remove();
            }
        });
        $('#field_178823 option').each(function (i, e) {
            var localValue = $(e).val();
            if (removeCourseList.indexOf(localValue) != -1) {
                $(e).prop("disabled", true).hide();
                $(e).remove();
            }
        });
        $('#field_178824 option').each(function (i, e) {
            var localValue = $(e).val();
            if (removeCourseList.indexOf(localValue) != -1) {
                $(e).prop("disabled", true).hide();
                $(e).remove();
            }
        });

        $('.chosen-select').trigger('chosen:updated')
    });
}

*/

/* autopop B.tech */

/* function autobtech() {

    if ($('#course option[value="' + $('#course').val() + '"]').text().trim().search('B.Tech ') != -1) {

        $('#field_209432').val('B.Tech').change().trigger('chosen:updated');
    } else {
        $('#field_209432').val('').change().trigger('chosen:updated');
    }
}

$('#course,#guardian3_company').change(autobtech); */




$('#field_212698').val('10000');
$('#field_212698').attr('readonly', 'readonly');
/*
if ($('#field_172751_1_5,#field_173198_1_5').length == 2){
	
	$('#field_172751_1_5 option[value="Awaited"]').hide().prop('selected', false).trigger('chosen:Updated');
	$('#field_173198_1_5 option[value="Awaited"]').hide().prop('selected', false).trigger('chosen:Updated');
}
*/
/*var removeCourseList1 = [
    '184904;;;Migration'
]
if ($('#guardian3_company').length == 1) {
    $(document).ajaxStop(function(){
        $('#guardian3_company option').each(function(i, e){
            var localValue = $(e).val();
            if (removeCourseList1.indexOf(localValue) != -1) {
                $(e).remove();
            }
        });
        $('.chosen-select').trigger('chosen:updated')
    });
}*/


if ($('#course').length) {
    $(document).ajaxStop(function () {
        if ($('#course option[value="239965;;;B.Sc. (General) Mathematics and Data Science"]').length) {
            $('#course option[value="239965;;;B.Sc. (General) Mathematics and Data Science"]').prop("disabled", true).hide();
            ($('#course option[value="386699;;;Bachelor Health Information Administration"]').length)
            $('#course option[value="386699;;;Bachelor Health Information Administration"]').prop("disabled", true).hide();
            ($('#course option[value="388668;;;BBA+LLB(Hons)"]').length)
            $('#course option[value="388668;;;BBA+LLB(Hons)"]').prop("disabled", true).hide();
            // ($('#course option[value="386922;;;BBA - Tourism and Travel"]').length)
            // $('#course option[value="386922;;;BBA - Tourism and Travel"]').prop("disabled", true).hide();
            ($('#course option[value="388668;;;BBA+LLB(Hons)"]').length)
            $('#course option[value="388668;;;BBA+LLB(Hons)"]').prop("disabled", true).hide();
            // ($('#course option[value="215690;;;B.Tech In Biomedical Engineering"]').length)
            // $('#course option[value="215690;;;B.Tech In Biomedical Engineering"]').prop("disabled", true).hide();
            ($('#course option[value="386700;;;B.Sc. Healthcare and Clinical Research"]').length)
            $('#course option[value="386700;;;B.Sc. Healthcare and Clinical Research"]').prop("disabled", true).hide();
            $('.chosen-select').trigger('chosen:updated');
        }
    });
}
if ($('#field_178823').length) {
    $(document).ajaxStop(function () {
        if ($('#field_178823 option[value="239965;;;B.Sc. (General) Mathematics and Data Science"]').length) {
            $('#field_178823 option[value="239965;;;B.Sc. (General) Mathematics and Data Science"]').prop("disabled", true).hide();
            ($('#field_178823 option[value="386699;;;Bachelor Health Information Administration"]').length)
            $('#field_178823 option[value="386699;;;Bachelor Health Information Administration"]').prop("disabled", true).hide();
            ($('#field_178823 option[value="388668;;;BBA+LLB(Hons)"]').length)
            $('#field_178823 option[value="388668;;;BBA+LLB(Hons)"]').prop("disabled", true).hide();
            // ($('#field_178823 option[value="386922;;;BBA - Tourism and Travel"]').length)
            // $('#field_178823 option[value="386922;;;BBA - Tourism and Travel"]').prop("disabled", true).hide();
            ($('#field_178823 option[value="388668;;;BBA+LLB(Hons)"]').length)
            $('#field_178823 option[value="388668;;;BBA+LLB(Hons)"]').prop("disabled", true).hide();
            // ($('#field_178823 option[value="215690;;;B.Tech In Biomedical Engineering"]').length)
            // $('#field_178823 option[value="215690;;;B.Tech In Biomedical Engineering"]').prop("disabled", true).hide();
            ($('#field_178823 option[value="386700;;;B.Sc. Healthcare and Clinical Research"]').length)
            $('#field_178823 option[value="386700;;;B.Sc. Healthcare and Clinical Research"]').prop("disabled", true).hide();
            $('.chosen-select').trigger('chosen:updated');
        }
    });
}
if ($('#field_178824').length) {
    $(document).ajaxStop(function () {
        if ($('#field_178824 option[value="239965;;;B.Sc. (General) Mathematics and Data Science"]').length) {
            $('#field_178824 option[value="239965;;;B.Sc. (General) Mathematics and Data Science"]').prop("disabled", true).hide();
            ($('#field_178824 option[value="386699;;;Bachelor Health Information Administration"]').length)
            $('#field_178824 option[value="386699;;;Bachelor Health Information Administration"]').prop("disabled", true).hide();
            ($('#field_178824 option[value="388668;;;BBA+LLB(Hons)"]').length)
            $('#field_178824 option[value="388668;;;BBA+LLB(Hons)"]').prop("disabled", true).hide();
            // ($('#field_178824 option[value="386922;;;BBA - Tourism and Travel"]').length)
            // $('#field_178824 option[value="386922;;;BBA - Tourism and Travel"]').prop("disabled", true).hide();
            ($('#field_178824 option[value="388668;;;BBA+LLB(Hons)"]').length)
            $('#field_178824 option[value="388668;;;BBA+LLB(Hons)"]').prop("disabled", true).hide();
            // ($('#field_178824 option[value="215690;;;B.Tech In Biomedical Engineering"]').length)
            // $('#field_178824 option[value="215690;;;B.Tech In Biomedical Engineering"]').prop("disabled", true).hide();
            ($('#field_178824 option[value="386700;;;B.Sc. Healthcare and Clinical Research"]').length)
            $('#field_178824 option[value="386700;;;B.Sc. Healthcare and Clinical Research"]').prop("disabled", true).hide();
            $('.chosen-select').trigger('chosen:updated');
        }
    });
}

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
// $(document).ajaxStop(function () {
//     btechAutoSelect();
// });

function fieldHide() {
    if ($('#guardian3_company').val() == '184831;;;Regular' && $('#field_209432').val() === "B.Tech" && $('#field_172751_1_5').val() == 'Declared') {
        $('.field_209436').show();
        addRequired('field_209436');
    } else {
        $('.field_209436').hide();
        removeRequired('field_209436');
    }
}
$('#field_172751_1_5,#guardian3_company,#course,#field_178823,#field_178824').change(function () {
    fieldHide();
});
fieldHide();

var courseRemoval = [
    '184870;;;BCA In Multimedia And Animation',
    '392333;;;B.Sc. (Hons) Built Environment',
    '393255;;;B.Sc. Clinical Research',
    '218065;;;B.Sc. Medical Biotechnology',
    '392334;;;B.Sc. - Food Science And Dietetics',
    '239967;;;B.Sc. (General) ZBC (Zoology, Botany, Chemistry)',
    '392348;;;B.Sc. Programming and Data Science',
    '392337;;;B.Sc. Yoga Science',
    '218066;;;B.Sc. Nutrition and Dietetics',
    '388671;;;B.Tech. in Artificial Intelligence and Data Science',
    '388674;;;B.Tech. in Civil Engineering (Construction Technology)',
    '388675;;;B.Tech. in Civil Engineering Environment and Pollution Control',
    '388676;;;B.Tech. in Computer Science and Engineering',
    '388677;;;B.Tech. in Computer Science and Engineering (Cloud Computing and Virtualization)',
    '388678;;;B.Tech. in Computer Science and Engineering (Cyber Security)',
    '388679;;;B.Tech. in Computer Science and Engineering (Gaming Technology)',
    '388680;;;B.Tech. in Electrical and Electronics Engineering',
    '388681;;;B.Tech. in Electrical Engineering',
    '388682;;;B.Tech. in Electronics and Communication Engineering',
    '388683;;;B.Tech. in Mechanical Engineering',
    '388672;;;B.Tech. in Civil Engineering',
    '388668;;;BBA+LLB(Hons)',
    '392368;;;B.Tech in Automobile Engineering (E-Vehicles and Autonomous Vehicles)',
    '394509;;;B.Tech. in Computer Science and Engineering (Data Analytics)',
    '399383;;;B.Sc Nutrition and Dietetics',
    '401110;;;B.Sc. (General) PCM',
    '400036;;;B.Sc. Health Information Administration',
    '400032;;;B.Sc. Programming Data Science',
    '184915;;;B.Tech. In Civil Engineering',
    '184939;;;B.Tech. In Computer Science And Engineering',
    '184911;;;B.Tech. In Computer Science And Engineering (Artificial Intelligence And Machine Learning)',
    '184908;;;B.Tech. In Computer Science And Engineering (Cloud Computing And Virtualization)',
    '184917;;;B.Tech. In Electrical And Electronics Engineering',
    '184919;;;B.Tech. In Electrical Engineering',
    '184918;;;B.Tech. In Electronics And Communication Engineering',
    '184913;;;B.Tech. In Mechanical Engineering',
    '184952;;;B.Tech. In Civil Engineering',
    '184959;;;B.Tech. In Computer Science And Engineering',
    '184948;;;B.Tech. In Computer Science And Engineering (Artificial Intelligence And Machine Learning)',
    '184945;;;B.Tech. In Computer Science And Engineering (Cloud Computing And Virtualization)',
    '216121;;;B.Tech. In Electrical And Electronics Engineering',
    '184955;;;B.Tech. In Electrical Engineering',
    '184954;;;B.Tech. In Electronics And Communication Engineering',
    '184950;;;B.Tech. In Mechanical Engineering',
    '401110;;;B.Sc. (General) PCM',
    '184892;;;B.Sc (Hons) Biological Science',
    '399382;;;B.Sc Yoga Science',
    '386700;;;B.Sc. Healthcare and Clinical Research',
   // '215690;;;B.Tech In Biomedical Engineering',
    '393258;;;B.Tech In Medical Lab Technology',
    '184845;;;B.Tech In Electrical And Electronics Engineering',
    '400035;;;BA Digital Media and Design',
    '184893;;;B.Sc (Hons) Biochemistry',
    "215688;;;B.Tech In Civil Engineering (Construction Technology)",
    "215689;;;B.Tech In Civil Engineering Environment and Pollution Control",
    "392339;;;B.Tech in Civil Engineering (Smart Cities)",
    "392340;;;B.Tech in Computer Science and Engineering (Augmented Reality and Virtual Reality (AR and VR))",
    "392341;;;B.Tech in Computer Science and Engineering (Business Analytics)",
    "392356;;;B.Tech in Electrical Engineering (Electric Vehicle)",
    "392367;;;B.Tech in Mechanical Engineering (Smart Manufacturing)",
    "393257;;;B.Tech in Computer Science and Engineering (Cyber Security and Forensic)",
    "392336;;;Bachelor of Design (Product Design)",
    "400034;;;BBA in Facilities and Hygiene Management",
    "392351;;;BCA with Industry Oriented Specialization in Business Analytics",
    "392352;;;BCA with Industry Oriented Specialization in Cloud Computing and Virtulization (CCV)",
    "400016;;;B.Sc in Data Analytics",
    "399381;;;B.Sc Programming and Data Science"
]
if ($('#course').length == 1) {
    $(document).ajaxStop(function () {
        $('#course option').each(function (i, e) {
            var localValue = $(e).val();
            if (courseRemoval.indexOf(localValue) != -1) {
                $(e).prop("disabled", true).hide();
            }
        });
        $('.chosen-select').trigger('chosen:updated')
    });
}
if ($('#field_178823').length == 1) {
    $(document).ajaxStop(function () {
        $('#field_178823 option').each(function (i, e) {
            var localValue = $(e).val();
            if (courseRemoval.indexOf(localValue) != -1) {
                $(e).prop("disabled", true).hide();
            }
        });
        $('.chosen-select').trigger('chosen:updated')
    });
}
if ($('#field_178824').length == 1) {
    $(document).ajaxStop(function () {
        $('#field_178824 option').each(function (i, e) {
            var localValue = $(e).val();
            if (courseRemoval.indexOf(localValue) != -1) {
                $(e).prop("disabled", true).hide();
            }
        });
        $('.chosen-select').trigger('chosen:updated')
    });
}



let prefArray = ['B.Tech In Artificial Intelligence and Data Science',
    'B.Tech In Civil Engineering',
    'B.Tech In Civil Engineering (Construction Technology)',
    'B.Tech In Civil Engineering Environment and Pollution Control',
    'B.Tech In Computer Science And Engineering',
    'B.Tech In Computer Science and Engineering (Cloud Computing and Virtualization)',
    'B.Tech In Computer Science and Engineering (Cyber Security)',
    'B.Tech In Computer Science and Engineering (Gaming Technology)',
    'B.Tech In Electrical And Electronics Engineering',
    'B.Tech In Electrical Engineering',
    'B.Tech In Electronics And Communication Engineering',
    'B.Tech In Mechanical Engineering',
    'B.Tech. in Computer Science and Engineering (Data Analytics)',
    'B.Tech Computer Science and Engineering (Artificial Intelligence)',
    'B.Tech Computer Science and Engineering (Data Science)',
    'B.Tech in Agriculture Engineering',
    'B.Tech in Civil Engineering (Smart Cities)',
    'B.Tech in Computer Science and Engineering (Augmented Reality and Virtual Reality (AR and VR))',
    'B.Tech in Computer Science and Engineering (Business Analytics and Optimization)',
    'B.Tech in Computer Science and Engineering (Business Analytics)',
    'B.Tech in Computer Science and Engineering (Computer Network and Cyber Security)',
    'B.Tech in Computer Science and Engineering (Cyber Security and Forensic)',
    'B.Tech in Computer Science and Engineering (Data Analytics)',
    'B.Tech In Electronics and Communication Engineering (Bio-Medical Engineering)',
    'B.Tech In Computer Science and Engineering (Artificial Intelligence and Machine Learning)',
    'B.Tech in Computer Science and Engineering (Internet of Things and Cyber Security Including Blockchain Technology)',
    'B.Tech. in Civil Engineering',
    'B.Tech. in Civil Engineering (Construction Technology)',
    'B.Tech. in Civil Engineering Environment and Pollution Control',
    'B.Tech. in Computer Science and Engineering',
    'B.Tech. in Computer Science and Engineering (Cloud Computing and Virtualization)',
    'B.Tech. in Computer Science and Engineering (Cyber Security)',
    'B.Tech. in Computer Science and Engineering (Gaming Technology)',
    'B.Tech. in Electrical and Electronics Engineering',
    'B.Tech. in Electrical Engineering',
    'B.Tech. in Electronics and Communication Engineering',
    'B.Tech. in Mechanical Engineering',
    'B.Tech in Electrical Engineering (Electric Vehicle)',
    'B.Tech In Artificial Intelligence and Machine Learning',
    'B.Tech in Electronics and Communication Engineering (Artificial Intelligence and Machine Learning)',
    'B.Tech in Electronics and Communication Engineering (Embedded Systems)',
    'B.Tech in Electronics and Communication Engineering (Internet of Things)',
    'B.Tech in Mechanical Engineering (Energy Engineering)',
    'B.Tech in Mechanical Engineering (Industry 4.0)',
    'B.Tech in Mechanical Engineering (Mechatronics)',
    'B.Tech in Mechanical Engineering (Pipeline Engineering)',
    'B.Tech in Mechanical Engineering (Robotics and Automation)',
    'B.Tech in Mechanical Engineering (Smart Manufacturing)',
    'B.Tech in Mechanical Engineering (E-Vehicles and Autonomous Vehicles)',
    'B.Tech In Medical Lab Technology',
    'B.Tech In Biomedical Engineering',
    'B.Tech. in Artificial Intelligence and Data Science',
    'B.Tech in Automobile Engineering (E-Vehicles and Autonomous Vehicles)',
    'B.Tech (CSE) Full Stack Development in association with UpGrad',
    'B.Tech (CSE) Artificial Intelligence and Machine Learning in association with UpGrad',
    'B.Tech in Computer Science and Engineering (Cyber Security and Digital Forensic)',
    'B.Tech in Computer Science and Engineering (Full Stack Development)',
    'B.Tech in Civil Engineering (Smart City)',
    'B.Tech CSE in Geographical Information Systems and Remote Sensing (GIS)'
];


let fiftyFiveArray = [
    'Integrated BA+LLB (Hons)',
    'Integrated BBA+LLB (Hons)'
]

function popNa(prefArray, fieldId) {
    let field = $('#' + fieldId + ' :selected').text();
    if (prefArray.indexOf(field) > -1) {
        $('#field_389155').val('60').trigger('chosen:updated').change();
        // console.log('Yes');
    } else if (fiftyFiveArray.indexOf(field) > -1) {
        $('#field_389155').val('55').trigger('chosen:updated').change();
        // console.log('No');
    } else {
        $('#field_389155').val('NA').trigger('chosen:updated').change();
    }

}
$(document).ajaxStop(() => {
    if ($('#field_389155').length) {
        popNa(prefArray, 'course');
    }
})

$('#course').change(() => popNa(prefArray, 'course'));
$("#field_172750_1_1 option[value='JEE Main - (January 2021)'],#field_172750_1_1 option[value='JEE Main - (April 2021)']").hide().trigger("chosen:updated");
/* Table Row Hide JS */
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

$('head').append('<style>.r-hide {display: none;}@media (max-width: 425px) {.r-more, .r-less {margin-top: -30px;}}@media (min-width: 426px) {.r-more, .r-less {margin-top: -10px;}} </style>');

tableMoreLessRapper('field_172750', 6, 5, 1, false);

/* to hide waited value for the list*/
/*$("#field_172751_1_5 option[value='Awaited']").prop("disabled",true).hide();*/
$("#field_173198_1_5 option[value='Awaited']").prop("disabled",true).hide();