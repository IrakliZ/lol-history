var summoner = {

    searchByTrack: function(trackName) {

        trackName.replace(" ", "%20")

        $.get("https://api.spotify.com/v1/search?q=" + trackName + "&type=track", function(data) {

            if (data.tracks.items){

                $.get("/lol-history/summoner/list.jade", function(template) {
                    var html = jade.render(template, {
                        data: data.tracks.items
                    })

                    $("#list").html(html)
                })

            }

        })

    },

    findTopTen: function(artistId) {

        $.get("https://api.spotify.com/v1/artists/" + artistId + "/top-tracks?country=US", function(data) {

            if (data.tracks){

                $.get("/lol-history/summoner/list.jade", function(template) {
                    var html = jade.render(template, {
                        data: data.tracks
                    })

                    $("#list").html(html)
                })

            }

        })
    },

    load: function() {

        $.get('/lol-history/summoner/ui.jade', function(template) {
            var html = jade.render(template);
            $("#searchdiv").html(html);
        })
    }
}
