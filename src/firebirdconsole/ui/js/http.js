'use strict';

import buildUrl from 'build-url';
import _ from "lodash";

export async function api_get(url, params={}) {
    const effective_url = _.isEmpty(params)?buildUrl(url):buildUrl(url, {queryParams: params});
    const res = await fetch(effective_url);
    if (res.status >= 200 && res.status < 300) {
        return res.json();
    }
    throw res;
}

export async function api_post(url, csrf_token, payload) {
    const res = await fetch(
        url,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrf_token,
            },
            body: JSON.stringify(payload),
        }
    );
    if (res.status >= 200 && res.status < 300) {
        return res.json();
    }
    throw res;
}

export async function api_put(url, csrf_token, payload) {
    const res = await fetch(
        url,
        {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrf_token,
            },
            body: JSON.stringify(payload),
        }
    );
    if (res.status >= 200 && res.status < 300) {
        return res.json();
    }
    throw res;
}

export async function api_delete(url, csrf_token) {
    const res = await fetch(
        url,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrf_token,
            },
        }
    );
    if (res.status >= 200 && res.status < 300) {
        return ;
    }
    throw res;
}

export async function api_patch(url, csrf_token, payload) {
    const res = await fetch(
        url,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'X-UNICORN-Use-Method': 'PATCH',
                'X-CSRFToken': csrf_token,
            },
            body: JSON.stringify(payload),
        }
    );
    if (res.status >= 200 && res.status < 300) {
        return res.json();
    }
    throw res;
}
