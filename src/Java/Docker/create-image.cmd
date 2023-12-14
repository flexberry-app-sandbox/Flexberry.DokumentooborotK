docker build --no-cache -f SQL\Dockerfile.PostgreSql -t dokumentooborotk-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t dokumentooborotk-java/app ../../..
