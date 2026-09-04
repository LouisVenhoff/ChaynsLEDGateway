#include "mqtt.h"

using json = nlohmann::json;


extern const string SERVER_ADDRESS("mqtt://mqtt.chayns.io:1883");
extern const string CLIENT_ID("99825-09414-vQWMKzXq");
const string PWD("r2VjIYeNnBXmtPT3qp2x");
const string TOPIC("chayns-led");

class callback : public virtual mqtt::callback {
    void message_arrived(mqtt::const_message_ptr msg) override {
        //std::cout << "Message received:" << msg->get_payload_str() << std::endl;

        json data = json::parse(msg->get_payload_str());

        std::cout << data["address"] << std::endl;
        
        string addressString = data["address"];
        u_int8_t address = stoi(addressString);
        
        bool enabled = data["enabled"];



        auto colorArray = data["color"];
        u_int8_t animation = data["animation"];
        int brightness = static_cast<int>(data["brightness"]);


        cmd command;
        command.address = address;
        command.enabled = enabled;
        command.colorR = colorArray[0].get<uint8_t>();
        command.colorG = colorArray[1].get<uint8_t>();
        command.colorB = colorArray[2].get<uint8_t>();
        command.animation = animation;
        command.brightness = brightness;

        generateProtocolBytes(command);
    }
};


int connectToBroker(mqtt::async_client& mqtt_client){
    static callback cb;

    mqtt_client.set_callback(cb);

    mqtt::connect_options conOpts;

    conOpts.set_keep_alive_interval(20);
    conOpts.set_clean_session(true);
    conOpts.set_user_name(CLIENT_ID);
    conOpts.set_password(PWD);

    try{
        mqtt_client.connect(conOpts) -> wait();

        cout << "Connected to EMQX broker" << endl;
        return 0;
    }
    catch(const mqtt::exception& exc){
        cout << "Connection failed!" << exc.what() << endl;
        return -1;
    }
}

int subscribeTopic(mqtt::async_client& mqtt_client){

    try{
        mqtt_client.subscribe(TOPIC, 1)->wait();
    }
    catch(mqtt::exception& exc){
        cout << "Connection failed!" << exc.what() << endl;
        return -1;
    }

    std::cout << "Subscribed to" << TOPIC << std::endl;
    return 0;
}

