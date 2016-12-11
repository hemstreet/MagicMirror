import requestify from 'requestify';

export default class Request {
    get() {
        return this.makeRequest({url, data, action: 'get'});
    }
    post(url, data) {
        return this.makeRequest({url, data, action: 'post'});
    }
    makeRequest(options) {
        return new Promise((resolve, reject) => {

            let params = (options.action == 'post') ? (options.url) : (options.url, options.data);

            requestify[options.action](params)
                .then(function(response) {
                    // Get the response body (JSON parsed or jQuery object for XMLs)
                    resolve(response.getBody());
                }).error((err) => {
                reject(err);
            });
        })
    }
};