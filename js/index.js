
$(document).ready(function () {

    function showPopup(){
        $('.popup').show();
    }

    function hidePopup(){
        $('.popup').hide();
    }

    $("#btn_callback").click(function(){
        showPopup()
    });

    $("#popup_close").click(function(){
        hidePopup()
    });

    let form2Shown = false;
    let form3Shown = false;
    let form4Shown = false;

    showPopup();

    // Next Button Click Listener
    $("#popup_main_continue").click(function(e){

        // Prevent Default behaviour until all fields are filled.
        if ($("#user_email").val().length !== 0 &&
            $("#user_name").val().length !== 0 &&
            $("#user_phone").val().length !== 0 &&
            $("#user_age").val().length !== 0 ){
            // Fields are not Empty

            // Showing Form 2
            if (!form2Shown) {
                form2Shown = true;
                $("#form1").hide();
                $("#form2").show();
                // Increase the Progress of Form to 50%
                $('.popup_main_form_progress_current').width('50%');
                $("#popup_main_continue").html('Next');
            }

            // Check if Form2's field are filled or not
            if ($("#user_college").val().length === 0  ){
                // College and Phone Fields empty, show any message if you want.
            }else {

                // Showing Form 3
                if (!form3Shown) {
                    form3Shown = true;
                    $("#form1").hide();
                    $("#form2").hide();
                    $("#form3").show();
                    // Increase the Progress of Form to 75%
                    $('.popup_main_form_progress_current').width('75%');
                    $("#popup_main_continue").html('Continue');
                    return
                }

                if (!$("#student").is(":checked") &&
                    !$("#teacher").is(":checked") &&
                    !$("#corporate").is(":checked") ) {
                    // do something
                    alert('Please Select a Pack');
                } else {


                    // Disable the default Behaviour of form Submit
                    e.preventDefault();

                    // Showing Screen 4
                    if (!form4Shown) {
                        form4Shown = true;
                        $("#form1").hide();
                        $("#form2").hide();
                        $("#form3").hide();
                        $("#form4").show();
                        // Increase the Progress of Form to 100%
                        $('.popup_main_form_progress_current').width('100%');
                        $("#popup_main_continue").html('Continue');
                    }

                    // Do any kind of Ajax Form Processing.
                    setTimeout(function(){ alert('Form Submission Completed'); }, 1000);

                }

            }

        }else {
            // Email,UserName or password Field empty, show any message if you want.
        }

    });

    showPopup();
});