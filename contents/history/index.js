var match_history = {

    searchBySummoner: function(summonerName) {

        summonerName.replace(" ", "%20")

        $.get("https://ancient-refuge-8495.herokuapp.com/match_history/" + summonerName, function(data) {
            console.log(data)
            if (data.matches){

                $.get("/lol-history/history/list.jade", function(template) {
                    var html = jade.render(template, {
                        data: data.matches
                    })

                    $("#list").html(html)
                })

            }

        })

    },

    findTopTen: function(artistId) {

        $.get("https://api.spotify.com/v1/artists/" + artistId + "/top-tracks?country=US", function(data) {

            if (data.tracks){

                $.get("/lol-history/history/list.jade", function(template) {
                    var html = jade.render(template, {
                        data: data.tracks
                    })

                    $("#list").html(html)
                })

            }

        })
    },

    load: function() {

        $.get('/lol-history/history/ui.jade', function(template) {
            var html = jade.render(template);
            $("#searchdiv").html(html);
        })
    }
}
