#include "mqtt.h"

extern const string SERVER_ADDRESS("mqtt://mqtt.chayns.io:1883");
extern const string CLIENT_ID("99825-09414-o3LhwJr7");
const string PWD("It2lVpoXgyd8hdNqUS24");
const string TOPIC("test-louis-dev");

class callback : public virtual mqtt::callback {
    void message_arrived(mqtt::const_message_ptr msg) override {
        std::cout << "Message received:" << msg->get_payload_str() << std::endl;
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

