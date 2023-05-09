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

export async function api_post(url, csrfToken, payload) {
    const res = await fetch(
        url,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken,
            },
            body: JSON.stringify(payload),
        }
    );
    if (res.status >= 200 && res.status < 300) {
        return res.json();
    }
    throw res;
}

export async function api_delete(url, csrfToken) {
    const res = await fetch(
        url,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken,
            },
        }
    );
    if (res.status >= 200 && res.status < 300) {
        return ;
    }
    throw res;
}

export async function api_patch(url, csrfToken, payload) {
    const res = await fetch(
        url,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'X-UNICORN-Use-Method': 'PATCH',
                'X-CSRFToken': csrfToken,
            },
            body: JSON.stringify(payload),
        }
    );
    if (res.status >= 200 && res.status < 300) {
        return res.json();
    }
    throw res;
}
