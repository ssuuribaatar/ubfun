module.exports = function(){
    return {
        SetRouting: function(router){
            router.get('/latest-football-news', this.News);
        },
        
        News: function(req, res){
            res.render('news/footballnews', {title: 'Ubfun - Latest News', user: req.user});
        }
    }
}