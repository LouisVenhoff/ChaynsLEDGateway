#include <iostream>
#include "mqtt.h"

int main() {
    std::cout << "ChaynsLEDGateway MQTT to 433MHZ Radio Gateway";

    mqtt::async_client* mqtt_cl;

    int result = connectToBroker(mqtt_cl);

    std::cout << "Press Enter to exit..." << std::endl;
    std::cin.get();

    return 0;
}