# Edge Stackdriver Agent

A simple lightweight agent to log from Apigee Edge to Stackdriver Logging. 

## How to run

## Local
* Clone the project and CD to  `edge-stackdriver-agent`
* Build the docker image - `docker build . -t edge-sd-agent`
* Run it with args mentioned below - `docker run -it --env-file env.list`

## Pull from docker registry
* Do ``docker pull siriscac/syslog-ng``
* Run it with args mentioned below - `docker run -it siriscac/syslog-ng --env-file env.list`


### Args

```
GSRV_TYPE=<type in servicekey json>
GSRV_PROJECT_ID=<project_id in servicekey json>
GSRV_PRIVATE_KEY_ID=<private_key_id in servicekey json>
GSRV_PRIVATE_KEY=<private_key in servicekey json>
GSRV_CLIENT_EMAIL=<client_email in servicekey json>
GSRV_CLEINT_ID=<client_id in servicekey json>
GSRV_AUTH_URI=<auth_uri in servicekey json>
GSRV_TOKEN_URI=<token_uri in servicekey json>
GSRV_AUTH_PROVIDER_CERT_URL=<auth_provider_x509_cert_url in servicekey json>
GSRV_CLIENT_CERT_URL=<auth_provider_x509_cert_url in servicekey json>
```

### Note

When running on GCP, make sure to open the ports tcp:601 and udp:541 for 0.0.0.0/0 on firewall.


# License

```
Copyright 2017 Apigee Corporation

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
