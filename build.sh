cd frontend/timebuyers_app/
npm run build
cd ../..
cp -r frontend/timebuyers_app/build/ backend/src/main/resources/static
cd backend
mvn clean package
cd ..
#export PSQL_USERNAME=berni
#export PSQL_DB_NAME=timebuyers
#export PSQL_PASSWORD=Karmapa108
#java -jar backend/target/el-proyecte-grande-sprint-2-java-takacsberni-0.0.1-SNAPSHOT.jar
#docker build -t springio/timebuyers -f spring.dockerfile .
