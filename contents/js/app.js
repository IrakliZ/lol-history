$( "#history" ).on( "click", function( event ) {
    $("#list").empty()
    match_history.load()
})

$( "#summoner" ).on( "click", function( event ) {
    $("#list").empty()
    summoner.load()
})


