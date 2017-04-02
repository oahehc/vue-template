import _ from 'lodash';
/** consle log for development stage ONLY
 */
const log = (DEV_MODE) ? console.log.bind(window.console) : (() => '');
export {
    log,
};
/** parse json, if fail then return defaultValue
 * @param {string} string
 * @param {any} defaultValue
 * @returns {object} json
 */
export function jsonParse(string, defaultValue = {}) {
    let json = _.attempt(JSON.parse, string);
    if (_.isError(json)) {
        log('JSON parse fail');
        json = defaultValue;
    }
    return json;
}
