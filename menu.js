let menuToDisplay;
let menuIsCenter = false;

function menuToCenter() {
    const menuPopBtn = $('.menuPopBtn')
    const menuAside = $('.foodMenusAside')

    menuPopBtn.animate({right: '55%'})
    menuAside.animate({right: 0})

    menuIsCenter = true
}

function menuToOffScreen() {
    const menuPopBtn = $('.menuPopBtn')
    const menuAside = $('.foodMenusAside')

    menuPopBtn.animate({right: "-5%"})
    menuAside.animate({right: '-60vw'})

    menuIsCenter = false
}

$('.btn').on('click', function () {
    const btnClicked = $(this)
    const allMenuOptionsDiv = $('#allMenuOptionsDiv')
    const isExpanded = allMenuOptionsDiv.attr('data-menuExpanded')

    // only change menu options display if the clicked btn has the data-menu attribute
    if (btnClicked.attr('data-menu')) {

        if ($(window).width() <= 900) {
            menuToOffScreen()
        }

        $(window).scrollTop(0)

        menuToDisplay = btnClicked.attr('data-menu')

        if (isExpanded == 'true') {
            allMenuOptionsDiv.collapse('hide')
        } else {
            allMenuOptionsDiv.attr('data-menuExpanded', 'true')
            $('.menuOptions').css('display', 'none')
            $(menuToDisplay).css('display', 'block')
            allMenuOptionsDiv.collapse('show')
        }
    }
})

$('#allMenuOptionsDiv').on('hidden.bs.collapse', function () {
    // run collapse('show') now that the div is hidden
    $('.menuOptions').css('display', 'none')
    $(menuToDisplay).css('display', 'block')
    $('#allMenuOptionsDiv').collapse('show')
})

$('.menuPopBtn').on('click', function() {
    if (menuIsCenter) {
        menuToOffScreen()
    } else {
        menuToCenter()
    }
})