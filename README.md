# Curvi built with the Rasa Framework

## 🏥 Introduction 
This is an open source starter pack for developers to show how to automate full conversations in education / professional sector.
It supports the following user goals:
- Help user to build a resume easy and fast.
- After resume is done, its connected to a API which generates the resume. So, user can easily download as pdf.

## 💾 How to install and setup Curvi

### Deploy over GCP Compute Engine:
- Create the VM instance of Ubuntu over Compute Engine
- When the instance is created login to the VM using SSH
- Run the below command and clone Docker app hosted on Github:
    - > sudo apt-get update
 
#### Install Docker
- > curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add 
- > sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
- > sudo apt-get update
- >  apt-cache policy docker-ce
- > sudo apt-get install -y docker-ce
- > sudo systemctl status docker
     
#### Install [Docker-Compose](https://www.digitalocean.com/community/tutorials/how-to-install-docker-compose-on-ubuntu-16-04)
- > sudo curl -L https://github.com/docker/compose/releases/download/1.18.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
- > sudo chmod +x /usr/local/bin/docker-compose
- > docker-compose --version

#### Clone Docker App
- > git clone https://github.com/MarcosAllysson/gcloud_docker_curvi_rasa_python
- > cd gcloud_docker_curvi_rasa_python

#### Build the Docker app and run the services:
- > docker-compose up --build

- Check whether the services are up and running using below command:
- > docker ps -a

- When you see all services up and running, open ip address of the machine in your browser and test your assistant :D


## 👩‍💻 Overview of the files
`data/stories.yml` - contains stories for Rasa Core
`data/nlu.yml` - contains example NLU training data
`data/rules.yml` - contains rules that is executed once is triggered
`actions/actions.py` - contains custom action/api code
`domain.yml` - the domain file for Core
`config.yml` - the config file
`credentials.yml` - contains credentials for the use with Telegram
`endpoints.yml` - contains url for endpoint


## Resume of Curvi
So, now is pretty easy and fast to anyone who would like to make a resume. It takes some minutes and you'll be able to 
apply for as many jobs as you want.