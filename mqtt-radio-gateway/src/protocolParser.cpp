#include "protocolParser.h"

using json = nlohmann::json;


class mqttCallback : public virtual mqtt::callback {
    void message_arrived(mqtt::const_message_ptr msg) override {
        //std::cout << "Message received:" << msg->get_payload_str() << std::endl;

        json data = json::parse(msg->get_payload_str());

        std::cout << data["address"] << std::endl;
        
        string address = data["address"];
        // bool enabled = data["enabled"];
        // array<u_int8_t, 3> color = data["color"];
        // u_int8_t animation = data["animation"];
        // u_int8_t brightness = data["brightness"];

        std::cout << address << std::endl;
        // std::cout << enabled << std::endl;
        // std::cout << color[0] << std::endl;
        // std::cout << animation << std::endl;
        // std::cout << brightness << std::endl;
    }
};