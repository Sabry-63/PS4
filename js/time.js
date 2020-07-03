$(document).ready(function () {
    var id = 0;
    // Start Timer Function
    $(".start").click(function () {
        let cuontUp = "interval" + id++,
            conutDown = "interval" + id++;
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
            input = $(this).siblings(".num");
        let seconds = 1,
            minutes = 1,
            hours = 1;

        // Checked For Value Inpu
        if (input.val() == "") {
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
            cuontUp = setInterval(() => {
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
            let min = input.val(),
                scen = 59;
            m.text(min-- <= 10 ? "0" + min-- : min--);
            s.text("59");

            // Start Timer Down
            conutDown = setInterval(() => {
                s.text() <= 10
                    ? s.text("0" + scen--)
                    : parseInt(s.text(scen--));
                // Down Seconds
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
                    clearInterval(conutDown);
                    setTimeout(() => {
                        alert("PS Finshied" + id);
                    }, 1000);
                }
            }, 1000);
        }

        // Start Reset Timer Function
        $(this)
            .parent(".input-wrapper")
            .siblings(".buttons-wrapper")
            .children(".reset-timer")
            .click(function () {
                $(this).parent(".buttons-wrapper").hide();
                $(this).parent(".buttons-wrapper").siblings(".timer").hide();
                $(this)
                    .parent(".buttons-wrapper")
                    .siblings(".input-wrapper")
                    .slideDown();
                // Reset Value In Timer
                s.text("00");
                m.text("00");
                h.text("00");
                input.val("");
            });

        // Btn Stop Timer Function
        $(this)
            .parent(".input-wrapper")
            .siblings(".buttons-wrapper")
            .children(".stop-timer")
            .click(function () {
                clearInterval(cuontUp);
                $(this).hide();
                $(this).siblings(".add-drink").hide();
                $(this).siblings(".reset-timer").fadeIn(350);
            });

        // End Stop Timer Function
    });
    // End Timer Function
});
