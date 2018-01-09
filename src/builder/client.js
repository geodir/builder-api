/**
 * @author kenyo.utopika@gmail.com
 * @param {*} _options 
 * @param {*} Vue 
 */
export const BuilderClient = function (_options, Vue){

    this.options = _options;

    this.token = 'you MUST provide an user Private Token or Personal Access Token';

    this.urlApi = 'http://builder.geodir.co/builder.api';
    //this.urlApi = 'http://192.168.1.117:8777/builder.api';

    if ( typeof this.options !== 'undefined') {
        if (typeof this.options.token !== 'undefined') {
            this.token = this.options.token;
        }
    }

    /**
     * Set new tcken
     * @param {String} newToken Token
     */
    this.setToken = (newToken) => {
        if (typeof newToken === 'undefined' || newToken == null || newToken === '') {
            console.error('[vue-builder-api] You MUST provide a non empty Private Token or Personal Access Token')
            return
        }
        this.token = newToken;
    };

/**
 * List of teams
 * @param {(Array|requestCallback)} var_result The Vue.js defined data to fill in with results from Builder API, or a callback function fed with full response
 */
    this.builderTeams = (var_result) => {
        this._callGetService ('/services/teams', {},var_result);
    };

/**
 * List of layers by Team
 * @param {String} team team name 
 * @param {(Array|requestCallback)} var_result  The Vue.js defined data to fill in with results from Builder API, or a callback function fed with full response
 */
    this.builderLayersByTeam = (team, var_result) => {
        this._callGetService ('/services/' + team + '/layers-team', {} ,var_result);
    };

    /**
     * List of maps by Team
     * @param {String} team team name 
     * @param {(Array|requestCallback)} var_result The Vue.js defined data to fill in with results from Builder API, or a callback function fed with full response
     */
    this.builderMapsbyTeam = (team, var_result) =>{
        this._callGetService ('/services/' + team + '/maps-team', {} ,var_result);
    };

/**
 * List of Geodirlayers by Map
 * @param {String} map Map name 
 * @param {(Array|requestCallback)} var_result  The Vue.js defined data to fill in with results from Builder API, or a callback function fed with full response
 */
    this.builderLayersByMap = (map, var_result) => {
        this._callGetService ('/services/' + map + '/layers-map', {},var_result);   
    };

    /**
     * Issue a GET request on 'https://builder.geodir.co/builder.api' with params and a variable to fill in
     * @param {String} uri The Builder API to consume
     * @param {Object} params A paramters object
     * @param {(Array|requestCallback)} fillIn The Vue.js defined data to fill in with results from Builder API, or a callback function fed with full response
     * @param {errorCallback} errorCb errorCb A callback function in case of error (response is passed to callback)
     */
    this._callGetService = (uri, params, fillIn, errorCb) => {
        if (this._verifyFillIn(fillIn) !== true) {
            return
        }
        uri = uri.replace(/^\/?/, '/');
        Vue.http.get(
            this.urlApi + uri,
            {
                headers : {
                    'Content-type': 'application/json; charset=utf-8',
                    'Authorization': 'Bearer ' + this.token
                },
                params: params
            }
        ).then(response => {
            if(typeof fillIn === 'function'){
                fillIn(response);
            }else{
                Vue.set(fillIn[0], fillIn[1], response.body);
            }
        }).catch(error => {
            if (typeof errorCb === 'function') {
                errorCb(error);
            }else{
                console.error('[vue-builder-api] GET ' + uri + ' failed: "' + error + '" on ' + this.urlApi + ' (using token "' + this.token + '")');
            }
        });
    };

    this._verifyFillIn = (fillIn) => {
        if (typeof fillIn !== 'function') {
            if (!(fillIn instanceof Array) || fillIn.length < 2) {
                console.error('[vue-builder-api] You MUST define the Vue data you want to fill as a two values array');
                return false;
            }

            if (Array.isArray(fillIn[0]) || typeof fillIn[0] !== 'object') {
                console.error('[vue-builder-api] Your Vue data to fill MUST be an object (ie `{}`)')
                return false
            }    
        }
        return true;
    }
}

export default { BuilderClient };