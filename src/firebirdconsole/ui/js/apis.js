import {api_get, api_post, api_delete, api_custom} from "/http";

export async function list_pipelines() {
    return api_get("/ui/apis/pipelines");
}

export async function get_pipeline(pipeline_id) {
    return api_get(`/ui/apis/pipelines/${pipeline_id}`);
}

export async function start_pipeline(pipeline_id, csrf_token) {
    return api_custom("start", `/ui/apis/pipelines/${pipeline_id}`, csrf_token);
}

export async function stop_pipeline(pipeline_id, csrf_token) {
    return api_custom("stop", `/ui/apis/pipelines/${pipeline_id}`, csrf_token);
}
