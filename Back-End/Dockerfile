FROM  amazoncorreto:17-alpine-jdk // de que imagen partimos
MAINTAINER LMP //quien es el dueño
COPY target/lmp-0.0.1-SNAPSHOT.jar  lmp-app.jar  // va a copiar el empaquetado a github
ENTRYPOINT ["java","-jar","/lmp-app.jar"]      // es la instruccion que se va a ejecutar primero
