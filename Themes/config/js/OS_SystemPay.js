

$(document).ready(function () {

    $('#OS_SystemPay_cmdSave').unbind("click");
    $('#OS_SystemPay_cmdSave').click(function () {
        $('.processing').show();
        $('.actionbuttonwrapper').hide();
        // lower case cmd must match ajax provider ref.
        nbxget('os_systempay_savesettings', '.OS_SystemPaydata', '.OS_SystemPayreturnmsg');
    });

    $('.selectlang').unbind("click");
    $(".selectlang").click(function () {
        $('.editlanguage').hide();
        $('.actionbuttonwrapper').hide();
        $('.processing').show();
        $("#nextlang").val($(this).attr("editlang"));
        // lower case cmd must match ajax provider ref.
        nbxget('os_systempay_selectlang', '.OS_SystemPaydata', '.OS_SystemPaydata');
    });


    $(document).on("nbxgetcompleted", OS_SystemPay_nbxgetCompleted); // assign a completed event for the ajax calls

    // function to do actions after an ajax call has been made.
    function OS_SystemPay_nbxgetCompleted(e) {

        $('.processing').hide();
        $('.actionbuttonwrapper').show();
        $('.editlanguage').show();

        if (e.cmd == 'os_systempay_selectlang') {
                        
        }

    };

});

