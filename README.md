
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`

## Documentación 

npm run compodoc
./documentation run index.html to browser

## Extensions 

PrimeNg 
tailwindcss
primeicons

## Ejecutar imagen prod 

npm run buildGit

## Run imagen Local

docker build -t angular-nginx .
docker run --rm -it -p 8080:80 angular-nginx
http://localhost:8080/ 

## Otra Forma

ng build --prod --aot && docker image build -t registry.gitlab.com/moviiredsas/business-bu-receive-ripple-banks-movii:1.0.0 .
docker image ls
docker run -d -p 8080:80 registry.gitlab.com/moviiredsas/business-bu-receive-ripple-banks-movii:1.0.0
docker ps
http://localhost:8080/ 

## Dependencias 

npm i --save-dev @types/node
npm install -D tailwindcss
npx tailwindcss init

## Comandos Angular

https://codigoencasa.com/los-comandos-de-angular-mas-usados/
