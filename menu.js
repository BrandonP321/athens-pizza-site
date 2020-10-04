let menuToDisplay;

$('.btn').on('click', function () {
    const btnClicked = $(this)
    const allMenuOptionsDiv = $('#allMenuOptionsDiv')
    const isExpanded = allMenuOptionsDiv.attr('data-menuExpanded')
    console.log('isExpanded: ' + isExpanded)

    // only change menu options display if the clicked btn has the data-menu attribute
    if (btnClicked.attr('data-menu')) {
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
    console.log('hidden')
    // run collapse('show') now that the div is hidden
    $('.menuOptions').css('display', 'none')
    $(menuToDisplay).css('display', 'block')
    $('#allMenuOptionsDiv').collapse('show')
})

$('#allMenuOptionsDiv').on('shown.bs.collapse', function() {
    console.log('shown')
})
