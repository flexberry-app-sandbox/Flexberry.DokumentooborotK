docker build --no-cache -f SQL\Dockerfile.PostgreSql -t dokumentooborotk/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t dokumentooborotk/app ../..
