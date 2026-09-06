sudo docker build -t mqtt-radio-gateway .
sudo docker run --device=/dev/ttyS0:/dev/ttyS0 mqtt-radio-gateway