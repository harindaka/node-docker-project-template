node-docker-project-template
============================

A simple nodejs project template based on a docker alpine linux image. Includes a Dockerfile and helper scripts to build, run and manage the image / container. Resulting Docker image size is a mere 50+ MB.

How to set it up
----------------

1. Clone this repo to your workstation using Git.
2. Change the name of the project in the included package.json file. The included docker-* helper scripts use this to name the image and container. (Make sure you do not include spaces in the project name)
3. Open terminal (bash) in Linux or Mac and navigate to the project folder which you cloned. Windows users may use other available methods to run bash. i.e. Ubuntu subsystem in Windows 10.
4. Make sure you have installed Docker and Docker CLI works.
5. Make sure that you do not have spaces in your project folder name as this will be used as a prefix for resulting images and containers as mentioned below. Optionally you may run the command `./docker -n {project-name}` to set the project name to a custom string (with no spaces).
5. Run the command `./docker build && ./docker run` to build the docker image and run the included simple express app inside a docker container.
6. Launch a web browser and enter the url http://localhost:3000 to access the running express application.
7. You may use the commands `./docker images` and `./docker containers` to find the created image and running container respectively. They will be named `{project-name}-image` and `{project-name}-container`.
8. Open the index.js and start coding. 

In a production environment, you may use the command `./docker run-daemon` script to run your application as a service with the docker restart policy set to `always`. This will ensure that your application will automatically restart if it crashes or when the system boots.

Additional Notes
----------------
Run the command `./docker -h` to see a list of similar commands at your disposal. i.e. You may use `./docker -p {project-path}` to use the same scripts to manage a docker project in a different path. This can be reset via `./docker reset`. You may need to use the `sudo` prefix when calling the scripts depending on whether or not your username is added to the docker group. Hope this helps...

License
-------
MIT


