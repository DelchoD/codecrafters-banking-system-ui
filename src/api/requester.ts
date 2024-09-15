import { RequestOptions } from "../types/RequestOptions";


function requester(method: string, url: string, data: any = ''): Promise<any> {

    let options: RequestOptions = {};

    if(method == 'GET' && data) {

        const params = new URLSearchParams(data);
        url += `?${params.toString()}`;
    }

    if (method == 'POST' || method == 'PUT') {

        options.headers = {
            'content-type': 'application/json'
        };

        if (data) {
            options.body = JSON.stringify(data);
        }
    }


    return fetch(url, options)
        .then(res => res.json());
}


const get = requester.bind(null, 'GET');
const post = requester.bind(null, 'POST');
const put = requester.bind(null, 'PUT');
const del = requester.bind(null, 'DELETE');


export default {
    get,
    post,
    put,
    del
}