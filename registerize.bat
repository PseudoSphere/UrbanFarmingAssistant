set version=1.0.0

docker build -t ufa:%version% .

docker tag ufa:%version% dockerimages.azurecr.io/ufa

docker push dockerimages.azurecr.io/ufa