import axios from 'axios'
import config from './config'
const api_key = '83e7d2a7f8848dbfef73503fa4427c0a5457c622975260ab89290877f6a17cc8'

export {
    api_key
}

export const callApi = (call) => {

    let defaultHeaders = {
        // "Authorization": "9oeUG4w8p}1eU9i"
        "Content-Type": "application/json"
    }

    let {
        endpoint,
        method = 'GET',
        params = {},
        data = {},
        headers = {},
        showJSON = false,
    } = call

    let url = config.url + endpoint

    // Merge headers info
    headers = Object.assign(
        {},
        defaultHeaders,
        headers
    );

    console.debug('[CALL API URL]', url);
    console.debug(
        '[CALL API COMPLETE]',
        {
            headers,
            method,
            url,
            params,
            data
        }
    );

    if (showJSON) {
        console.log('[CALL API JSON DATA]', JSON.stringify(data))
    }

    return axios({
        headers,
        method,
        url,
        params,
        data
    });

}
