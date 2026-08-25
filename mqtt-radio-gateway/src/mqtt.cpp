#include "mqtt.h"

const string SERVER_ADDRESS("tcp://localhost:1883");
const string CLIENT_ID("test_subscriber");
const string TOPIC("test_topic");

// class callback : public virtual mqtt::callback {
//     void message_arrived(mqtt::const_message_ptr msg) override {
//         std::cout << "Message received:" << msg->get_payload_str() << std::endl;
//     }
// };



int connectToBroker(mqtt::async_client* mqtt_client){
    mqtt::async_client client(SERVER_ADDRESS, CLIENT_ID);

    //callback cb;

    mqtt::connect_options conOpts;

    conOpts.set_keep_alive_interval(20);
    conOpts.set_clean_session(true);

    try{
        client.connect(conOpts) -> wait();

        mqtt_client = &client;

        cout << "Connected to EMQX broker" << endl;
        return 0;
    }
    catch(const mqtt::exception& exc){
        cout << "Connection failed!" << exc.what() << endl;
        return 1;
    }

    return 0;
}


void sendMessage(){
    cout << "Hello from MQTT Test";
}

int subscribeToBroker(){
    
}