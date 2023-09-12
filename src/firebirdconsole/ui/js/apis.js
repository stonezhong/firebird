import {api_get, api_post, api_delete, api_custom} from "/http";

export async function list_pipelines(console_uri_base) {
    return api_get(`${console_uri_base}/ui/apis/pipelines`);
}

export async function get_pipeline(console_uri_base, pipeline_id) {
    return api_get(`${console_uri_base}/ui/apis/pipelines/${pipeline_id}`);
}

export async function start_pipeline(console_uri_base, pipeline_id, csrf_token) {
    return api_custom('start', `${console_uri_base}/ui/apis/pipelines/${pipeline_id}`, csrf_token);
}

export async function stop_pipeline(console_uri_base, pipeline_id, csrf_token) {
    return api_custom('stop', `${console_uri_base}/ui/apis/pipelines/${pipeline_id}`, csrf_token);
}
