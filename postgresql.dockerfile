FROM postgres:latest
COPY init.sql /docker-entrypoint-initdb.d/init.sql
ENV POSTGRES_PASSWORD=postgres
ENV POSTGRES_DB=postgres
USER postgres

