Git pull:

Build:
/var/apps/test# docker build -f BlazorApp1/Server/Dockerfile -t dhrtom/dockertest .
docker tag dockertest dhrtom/dockertest
docker push dhrtom/dockertest

Certificaat:
https://medium.com/@pentacent/nginx-and-lets-encrypt-with-docker-in-less-than-5-minutes-b4b8a60d3a71

Eenmalig moet dit nog draaien om een certificaat aan te maken:
chmod +x init-letsencrypt.sh
sudo ./init-letsencrypt.sh


push:
https://github.com/dotnet-presentations/blazor-workshop/blob/master/docs/09-progressive-web-app.md#displaying-notifications