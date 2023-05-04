def launch_executor(docker_client, docker_host_name:str, docker_container_name:str, pipeline_id:str, worker_count:int):
    try:
        r = docker_client.containers.run(
            "streaming-image", 
            name=docker_container_name, 
            hostname=docker_container_name, 
            network = "streaming",
            detach = True,
            auto_remove = True,
            command=[
                "python", "-u",
                "/usr/local/lib/python3.11/site-packages/firebird/cmd_tools/executor.py",
                "-pid", pipeline_id,
                "-dhn", docker_host_name,
                "-dcn", docker_container_name
            ]
        )
    finally:
        docker_client.close()
