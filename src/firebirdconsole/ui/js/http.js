'use strict';

/***********************************************
 * Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/fetch
 * Response : https://developer.mozilla.org/en-US/docs/Web/API/Response
 * 
 * These API wraps basic crud operations
 * - The return JSON object when succeeded
 * - The throw exception (of type Response) when failed
 * - Avoid using http method PATCH -- some proxy may ban it, use a HTTP header 
 *   X-Use-Method to escapte it, and patch_request_middleware.py will convert it to 
 *   PATCH method when reaching Django View.
 * - Use X-Use-Method to customer method as well (HTTP method only have GET, PUT, 
 *   PATCH, POST, DELETE).
 ***********************************************/
 
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

export async function api_post(url, csrf_token, payload={}) {
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

export async function api_put(url, csrf_token, payload={}) {
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

export async function api_patch(url, csrf_token, payload={}) {
    const res = await fetch(
        url,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'X-Use-Method': 'PATCH',
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

export async function api_custom(method, url, csrf_token, payload={}) {
    const res = await fetch(
        url,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'X-Use-Method': method,
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
