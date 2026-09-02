#ifndef PROTOCOLPARSER_H
#define PROTOCOLPARSER_H

#include "mqtt.h"
#include <stdio.h>
#include <nlohmann/json.hpp>

int generateProtocolBytes(nlohmann::json data);

#endif