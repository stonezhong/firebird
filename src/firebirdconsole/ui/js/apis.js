import {api_get} from "/http";

export async function list_pipelines() {
    return api_get("/ui/apis/pipelines");
}

export async function get_pipeline(pipeline_id) {
    return api_get(`/ui/apis/pipelines/${pipeline_id}`);
}
