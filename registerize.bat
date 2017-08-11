set version=0.0.7

docker build -t ufa:%version% .

docker tag ufa:%version% dockerimages.azurecr.io/ufa

docker push dockerimages.azurecr.io/ufa