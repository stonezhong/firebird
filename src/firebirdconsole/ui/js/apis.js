import {api_get} from "/http";

export async function list_pipelines() {
    return api_get("/ui/apis/list_pipelines");
}
