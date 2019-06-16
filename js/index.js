
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

    // Next Button Click Listener
    $("#popup_main_continue").click(function(e){

        // Prevent Default behaviour until all fields are filled.
        if ($("#user_email").val().length !== 0 &&
            $("#user_username").val().length !== 0 &&
            $("#user_password").val().length !== 0 ){
            // Fields are not Empty

            // Showing Form 2
            if (!form2Shown) {
                form2Shown = true;
                $("#form1").hide();
                $("#form2").show();
                // Increase the Progress of Form to 50%
                $('.popup_main_form_progress_current').width('50%');
                $("#popup_main_continue").html('Continue');
            }

            // Check if Form2's field are filled or not
            if ($("#user_college").val().length === 0 ||
                $("#user_phone").val().length === 0  ){
                // College and Phone Fields empty, show any message if you want.
            }else {
                // Disable the default Behaviour of form Submit
                e.preventDefault();
                // Increase the Progress of Form to 100%
                $('.popup_main_form_progress_current').width('100%');
                // Do any kind of Ajax Form Processing.
                alert('Form Submission Completed');
            }

        }else {
            // Email,UserName or password Field empty, show any message if you want.
        }


    });

});