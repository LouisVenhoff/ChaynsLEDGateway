#include <iostream>
#include <csignal>
#include <unistd.h>
#include "mqtt.h"

bool running = true;


void signalHandler(int){
    std::cout << "Closing application!" << std::endl;

    running = false;
}


int main() {
    std::cout << "ChaynsLEDGateway MQTT to 433MHZ Radio Gateway";

    mqtt::async_client mqtt_cl(SERVER_ADDRESS, CLIENT_ID);

    int result = connectToBroker(mqtt_cl);

    subscribeTopic(mqtt_cl);

    std::signal(SIGTERM, signalHandler);

    pause();

    return 0;
}