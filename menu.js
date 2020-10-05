let menuToDisplay;
let menuIsCenter = false;

function menuToCenter() {
    const menuPopBtn = $('.menuPopBtn')
    const menuAside = $('.foodMenusAside')

    menuPopBtn.animate({right: '55%'}, 500)
    menuAside.animate({right: 0}, 500)

    menuIsCenter = true
}

function menuToOffScreen() {
    const menuPopBtn = $('.menuPopBtn')
    const menuAside = $('.foodMenusAside')

    menuPopBtn.animate({right: "-5%"}, 500)
    menuAside.animate({right: '-60vw'}, 500)

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

        // probably won't need to scroll since window auto scrolls with collapse
        // $('body, html').animate({scrollTop: 0}, 5000, function() {
        //     console.log('at top')
        // })

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