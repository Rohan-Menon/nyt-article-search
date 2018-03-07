var ApiKey = "4eff477c6d9d41318aa5b82e07d830c4";



function testFunction() {
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=4eff477c6d9d41318aa5b82e07d830c4";
    $.ajax({
        url: url,
        method: 'GET',
    }).done(function (result) {
        console.log(result);
    }).fail(function (err) {
        throw err;
    });
}

testFunction();

function startSearch(term, recordNum, startYear = '', endYear = '') {
    // Create new div that holds article info
    // append new div to #article-view
}