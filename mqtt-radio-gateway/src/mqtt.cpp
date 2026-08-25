#include "mqtt.h"

const string SERVER_ADDRESS("mqtt://mqtt.chayns.io:1883");
const string CLIENT_ID("99825-09414-o3LhwJr7");
const string PWD("It2lVpoXgyd8hdNqUS24");
const string TOPIC("test-louis-dev");

class callback : public virtual mqtt::callback {
    void message_arrived(mqtt::const_message_ptr msg) override {
        std::cout << "Message received:" << msg->get_payload_str() << std::endl;
    }
};


int connectToBroker(mqtt::async_client* mqtt_client){
    mqtt::async_client client(SERVER_ADDRESS, CLIENT_ID);

    callback cb;

    client.set_callback(cb);

    mqtt::connect_options conOpts;

    conOpts.set_keep_alive_interval(20);
    conOpts.set_clean_session(true);
    conOpts.set_user_name(CLIENT_ID);
    conOpts.set_password(PWD);

    try{
        client.connect(conOpts) -> wait();

        mqtt_client = &client;

        cout << "Connected to EMQX broker" << endl;
        return 0;
    }
    catch(const mqtt::exception& exc){
        cout << "Connection failed!" << exc.what() << endl;
        return -1;
    }

    return 0;
}

int subscribeTopic(mqtt::async_client* mqtt_client){
    
    try{
        mqtt_client->subscribe(TOPIC, 1)->wait();
    }
    catch(mqtt::exception& exc){
        cout << "Connection failed!" << exc.what() << endl;
        return -1;
    }

    std::cout << "Subscribed to" << TOPIC << std::endl;
}

