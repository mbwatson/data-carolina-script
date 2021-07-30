import events from "../../api/events.js";

var findEventByKeyword = function (keyword, callback) {
    if (!events[keyword])
        return callback(new Error('No events'));
    return callback(null, events[keyword]);
};

events.get('/v1/events/:data', function (request, response, next) {
    var keyword = request.params.keyword;
    findEventByKeyword(keyword, function (error, event) {
        if (error) return next(error);
        return response.render('data', event);
    });
});

export default function () {
    findEventByKeyword('data', callback);
}