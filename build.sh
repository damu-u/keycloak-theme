#!/bin/bash

cd /home/damu/idea/theme/build_keycloak

docker rm keycloak-testing-container || true

docker build . -t keycloak/theme

docker run \
   -p 8080:8080 \
   --name keycloak-testing-container \
   -e KEYCLOAK_USER=admin \
   -e KEYCLOAK_PASSWORD=admin \
   -e JAVA_OPTS=-Dkeycloak.profile=preview \
   -v /home/damu/idea/theme/build_keycloak/src/main/resources/theme/theme:/opt/jboss/keycloak/themes/theme:rw \
   -it theme/keycloak-hot-reload:latest
