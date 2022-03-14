FROM jboss/keycloak:16.1.0

USER root

WORKDIR /

ADD configuration /opt/jboss/keycloak/standalone/configuration/

COPY build_keycloak/target/*.jar /opt/jboss/keycloak/standalone/deployments/theme.jar

ENTRYPOINT [ "/opt/jboss/tools/docker-entrypoint.sh" ]
