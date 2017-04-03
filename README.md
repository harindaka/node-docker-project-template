node-docker-project-template
============================

A simple nodejs project template based on a docker alpine linux image. Includes a Dockerfile and helper scripts to manage the image and container. Image size will be around 50+ MB.

How to set it up
----------------

**Step 1:** Clone this repo to your PC using Git.
**Step 2:** Change the name of the project in the included package.json file. The included docker-* helper scripts use this to name the image and container. (Make sure you do not include spaces in the project name)
**Step 3:** Open terminal (bash) in Linux or Mac and navigate to the project folder which you cloned. Windows users may use other available methods to run bash. i.e. Ubuntu subsystem in Windows 10.
**Step 4:** Make sure you have installed Docker and Docker CLI works.
**Step 5:** Run the command "./docker-build && ./docker-run" to build the docker image and run the included simple express app inside a docker container.
**Step 6:** Run the command "./docker-inspect-connectivity" to find the ip and port which is exposed by the container. Launch a web browser and enter the url http://{ip}:{port} to access the running express application.
**Step 7:** You may use the commands "./docker-list-images" and "./docker-list-containers" to find the created image and running container respectively. They will be named "{project-name}-image and {project-name}-container".
**Step 8:** Open the index.js and start coding. 

In a production environment, you may use the command "./docker-run-daemon" script to run your application as a service with the docker restart policy set to "always". This will ensure that your application will automatically restart if it crashes or when the system boots.

Other helper scripts are self explanatory. Hope this helps...

License
-------
MIT


