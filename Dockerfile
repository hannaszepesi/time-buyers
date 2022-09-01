FROM openjdk:11
LABEL maintainer="timebuyers"
ARG JAR_FILE=backend/target/el-proyecte-grande-sprint-2-java-takacsberni-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
