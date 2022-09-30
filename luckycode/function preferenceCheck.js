function preferenceCheck() {
    if ($("#course").length) {
        if ($("#course option").not(":eq(0)").length > 8) {
            $(".field_10453,.field_10454,.field_15442,.field_15443,.field_15444,.field_15445,.field_15446,.field_15447").show();
        } else if ($("#course option").not(":eq(0)").length == 1) {
            $(".field_10453,.field_10454,.field_15442,.field_15443,.field_15444,.field_15445,.field_15446,.field_15447").hide();
        } else if ($("#course option").not(":eq(0)").length == 2) {
            $(".field_10454,.field_15442,.field_15443,.field_15444,.field_15445,.field_15446,.field_15447").hide();
            $(".field_10453").show()
        } else if ($("#course option").not(":eq(0)").length == 3) {
            $(".field_15442,.field_15443,.field_15444,.field_15445,.field_15446,.field_15447").hide();
            $(".field_10453,.field_10454").show()
        } else if ($("#course option").not(":eq(0)").length == 4) {
            $(".field_15443,.field_15444,.field_15445,.field_15446,.field_15447").hide();
            $(".field_10453,.field_10454,.field_15442").show()
        } else if ($("#course option").not(":eq(0)").length == 5) {
            $(".field_15444,.field_15445,.field_15446,.field_15447").hide();
            $(".field_10453,.field_10454,.field_15442,.field_15443").show()
        } else if ($("#course option").not(":eq(0)").length == 6) {
            $(".field_15445,.field_15446,.field_15447").hide();
            $(".field_10453,.field_10454,.field_15442,.field_15443,.field_15444").show()
        } else if ($("#course option").not(":eq(0)").length == 7) {
            $(".field_15446,.field_15447").hide();
            $(".field_10453,.field_10454,.field_15442,.field_15443,.field_15444,.field_15445").show()
        } else if ($("#course option").not(":eq(0)").length == 8) {
            $(".field_15447").hide();
            $(".field_10453,.field_10454,.field_15442,.field_15443,.field_15444,.field_15445,.field_15446").show()
        } else {
            $(".field_10453,.field_10454,.field_15442,.field_15443,.field_15444,.field_15445,.field_15446,.field_15447").hide();
        }
    }
};
preferenceCheck();
$("#campus").change(preferenceCheck);
$(document).ajaxStop(preferenceCheck);



let arr = [".field_10453", ".field_10454",".field_15442",".field_15443",".field_15444",".field_15445",".field_15446",".field_15447"];


if($("#course option").not(":eq(0)").length == 1){
    arr[0].show()
}else if($("#course option").not(":eq(0)").length == 2){
    arr[0,1].show()
}