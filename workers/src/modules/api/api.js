import ENDPOINTS from "./endpoints";

const BASE_URL = 'https://5f7998dbe402340016f9321f.mockapi.io/providers';

class Api {
    constructor(baseUrl, endpoints) {
        this.baseUrl = baseUrl;
        this.endpoints = endpoints;
    }


    generateRequest(endpoint, data) {
        const {method, uri} = this.endpoints[endpoint];

        return fetch('${this.baseUrl}${uri}', {method, body: data});
    }

    async fetch(endpoint, data) {
        const response = await this.generateRequest(endpoint, data);


        return response.json();
    }
}


export default new Api(BASE_URL, ENDPOINTS)