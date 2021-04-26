import queryString from 'query-string'

export function get(path, queryParams) {
    const API_BASE_URL = 'https://young-thicket-97536.herokuapp.com/https://api.yelp.com/v3';
    const BEARER_TOKEN = process.env.REACT_APP_API_KEY;
    const query = queryString.stringify(queryParams);

    return fetch(`${API_BASE_URL}${path}?${query}`, {
        headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
        }
    });
}