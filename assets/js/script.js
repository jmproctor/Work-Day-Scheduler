$(document).ready(function() {
    var hourColor = function() {

        var actualTime = moment().hours();
        //changes the timeBlock color based on whether it is past, present, or future
        $(".time-block").each(function() {
            var hourBlock = parseInt($(this).attr("id").split("-")[1])
            
            if (hourBlock<actualTime) {
                $(this).addClass("past");
            } else if (hourBlock === actualTime) {
                $(this).addClass("present")
                $(this).removeClass("past")
            } else {
                $(this).addClass("future")
                $(this).removeClass("past")
                $(this).removeClass("present")
            }
        })
    }

    hourColor();

    $(".saveBtn").on("click", function() {

        var hour = $(this).parent().attr("id")
        var text = $(this).siblings(".description").val()
        //puts info into local storage
        localStorage.setItem(hour, text);
    });

    //loads any saved data from Localstorage
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
    //displays current day & time
    $("#currentDay").text(moment().format("LLLL"));
})
