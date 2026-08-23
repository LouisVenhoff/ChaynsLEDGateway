cmake_minimum_required(VERSION 3.5)

project(mqtt-radio-gateway LANGUAGES CXX)

include(FetchContent)

FetchContent_Declare(
    cpr
    GIT_REPOSITORY https://github.com/libcpr/cpr.git
    GIT_TAG 1.11.2
)

FetchContent_Declare(
    nlohmann_json
    GIT_REPOSITORY https://github.com/nlohmann/json.git
    GIT_TAG v3.12.0
)

FetchContent_Declare(
    paho_mqtt_cpp
    GIT_REPOSITORY https://github.com/eclipse-paho/paho.mqtt.cpp.git
    GIT_TAG v1.5.2
    GIT_SUBMODULES_RECURSE TRUE
)

# Build the bundled Paho C library from source instead of requiring it preinstalled.
set(PAHO_WITH_MQTT_C ON CACHE BOOL "" FORCE)
set(PAHO_BUILD_SHARED ON CACHE BOOL "" FORCE)
set(PAHO_BUILD_STATIC OFF CACHE BOOL "" FORCE)

FetchContent_MakeAvailable(cpr)
FetchContent_MakeAvailable(nlohmann_json)
FetchContent_MakeAvailable(paho_mqtt_cpp)

add_executable(mqtt-radio-gateway ./src/main.cpp ./src/mqtt.cpp)

target_link_libraries(mqtt-radio-gateway PRIVATE cpr::cpr)
target_link_libraries(mqtt-radio-gateway PRIVATE nlohmann_json::nlohmann_json)
target_link_libraries(mqtt-radio-gateway PRIVATE PahoMqttCpp::paho-mqttpp3)