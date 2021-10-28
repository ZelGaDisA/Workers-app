export const API_ACTIONS = {
    FETCH_START: 'FETCH_START_',
    DETCH_SUCCESS: 'FETCH_SUCCESS_',
    FETCH_FAILURE: 'FETCH_FAILURE_'
}


export const apiActions = {
    fetch: (endpoint, payload) => ({
        type: '${API_ACTIONS,FETCH_START}${endpoint.toUpperCAse()}',
        payload
    }),
    fetchSuccess: (endpoint, payload) => ({
        type: '${API_ACTIONS,FETCH_SUCCESS}${endpoint.toUpperCAse()}',
        payload
    }),
    fetchFailure: (endpoint, payload) => ({
        type: '${API_ACTIONS,FETCH_FAILURE}${endpoint.toUpperCAse()}',
        payload
    })
}