FROM jboss/keycloak:16.1.0

USER root

WORKDIR /

ADD configuration /opt/jboss/keycloak/standalone/configuration/

ENTRYPOINT [ "/opt/jboss/tools/docker-entrypoint.sh" ]
