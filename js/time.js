$(document).ready(function () {
    // Start Timer Function
    $(".start").click(function () {
        // Set Vars
        const s = $(this)
                .parent(".input-wrapper")
                .siblings(".timer")
                .children(".clock-wrapper")
                .children(".seconds"),
            m = $(this)
                .parent(".input-wrapper")
                .siblings(".timer")
                .children(".clock-wrapper")
                .children(".minutes"),
            h = $(this)
                .parent(".input-wrapper")
                .siblings(".timer")
                .children(".clock-wrapper")
                .children(".hours"),
            input = $(this).siblings(".num").val();
        let seconds = 1,
            minutes = 1,
            hours = 1;

        // Checked For Value Inpu
        if (input == "") {
            // Show Btns Actions
            $(this).parent().slideUp(350);
            $(this).parent().siblings().children(".reset-timer").hide(350);
            setTimeout(() => {
                $(this).parent().siblings().fadeIn(350);
                $(this)
                    .parent()
                    .siblings()
                    .children(".details ,.add-drink ,.stop-timer")
                    .fadeIn(350);
            }, 350);

            // Start Timer Up
            cunoutUp = setInterval(() => {
                s.text() < 9
                    ? s.text("0" + seconds++)
                    : parseInt(s.text(seconds++));

                if (seconds >= 60) {
                    seconds = 0;
                    setTimeout(() => {
                        m.text() < 9
                            ? m.text("0" + minutes++)
                            : parseInt(m.text(minutes++));
                    }, 1000);
                }
                if (minutes >= 60) {
                    setTimeout(() => {
                        h.text() < 9
                            ? h.text("0" + hours++)
                            : parseInt(h.text(hours++));
                        minutes = "00";
                        seconds = "00";
                    }, 1000);
                }
            }, 1000);
        } else {
            // Show Btns Actions
            $(this).parent().slideUp(350);
            setTimeout(() => {
                $(this).parent().siblings().fadeIn(350);
                $(this)
                    .parent()
                    .siblings()
                    .children(".details ,.add-drink")
                    .fadeIn(350);
            }, 350);

            // Post Timer Down Form Input Value
            let min = input,
                scen = 59;
            m.text(min-- <= 10 ? "0" + min-- : min--);
            s.text("59");
            // Start Timer Down
            cunoutDown = setInterval(() => {
                s.text() <= 10
                    ? s.text("0" + scen--)
                    : parseInt(s.text(scen--));
                if (scen < 0) {
                    m.text() <= 10 > 1
                        ? m.text("0" + min--)
                        : parseInt(m.text(min--));
                    scen = 59;
                }
                // Finshed Time
                if (m.text() == -1 && s.text() == 0) {
                    s.text("00");
                    m.text("00");
                    $(this)
                        .parent()
                        .siblings()
                        .children(".reset-timer")
                        .fadeIn(350);
                    $(this).parent().siblings().children(".add-drink").hide();
                    clearInterval(cunoutDown);
                    setTimeout(() => {
                        alert("PS Finshied");
                    }, 1000);
                }
            }, 1000);
        }

        // Start Reset Timer Function
        $(".reset-timer").click(function () {
            $(this).parent(".buttons-wrapper").hide();
            $(this).parent(".buttons-wrapper").siblings(".timer").hide();
            $(this)
                .parent(".buttons-wrapper")
                .siblings(".input-wrapper")
                .slideDown();
            s.text(0);
            m.text(0);
            h.text(0);
            input = "0";
        });
    });
    // End Timer Function

    // Btn Stop Timer Function
    $(".stop-timer").click(function () {
        clearInterval(cunoutUp);
        $(this).hide();
        $(this).siblings(".add-drink").hide();
        $(this).siblings(".reset-timer").fadeIn(350);
    });
    // End Stop Timer Function
});
