import {api_get, api_post, api_delete} from "/http";

export async function list_pipelines() {
    return api_get("/ui/apis/pipelines");
}

export async function get_pipeline(pipeline_id) {
    return api_get(`/ui/apis/pipelines/${pipeline_id}`);
}

export async function start_pipeline(pipeline_id) {
    return api_post(`/ui/apis/pipelines/${pipeline_id}/run`);
}

export async function stop_pipeline(pipeline_id) {
    return api_delete(`/ui/apis/pipelines/${pipeline_id}/run`);
}
