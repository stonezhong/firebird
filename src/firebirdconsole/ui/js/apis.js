import {api_get, api_delete} from "/http";

export async function list_pipelines() {
    return api_get("/ui/apis/pipelines");
}

export async function get_pipeline(pipeline_id) {
    return api_get(`/ui/apis/pipelines/${pipeline_id}`);
}

export async function stop_executor(pipeline_id, executor_id, csrf_token) {
    return api_delete(`/ui/apis/pipelines/${pipeline_id}/executors/${executor_id}`, csrf_token);
}
