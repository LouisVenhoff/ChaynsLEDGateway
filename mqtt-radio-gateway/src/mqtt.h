#ifndef MQTT_H
#define MQTT_H

#include <iostream>
#include <mqtt/async_client.h>

using namespace std;
//using namespace mqtt;

int connectToBroker(mqtt::async_client* mqtt_client);

void sendMessage();

#endif