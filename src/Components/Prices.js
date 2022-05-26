import React, { useEffect } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import MQTTConnection from '../MQTTConnection'
import Metrics from '../StylingConstant/Metrics';

import { Buffer } from 'buffer';
global.Buffer = Buffer;

export default function Prices(props) {

    useEffect(() => {
        this.mqttConnect = new MQTTConnection()
        this.mqttConnect.onMQTTConnect = this.onMQTTConnect
        this.mqttConnect.onMQTTLost = this.onMQTTLost
        this.mqttConnect.onMQTTMessageArrived = this.onMQTTMessageArrived
        this.mqttConnect.onMQTTMessageDelivered = this.onMQTTMessageDelivered

        this.mqttConnect.connect('broker.mqttdashboard.com', 8000) //mqtt ayarları

        onMQTTConnect = () => {
            // console.log('App onMQTTConnect')
            this.mqttConnect.subscribeChannel('politeknik')
        }

        onMQTTLost = () => {
            // console.log('App onMQTTLost')
        }

        onMQTTMessageArrived = (message) => {
            // console.log('App onMQTTMessageArrived: ', message);
             console.log('App onMQTTMessageArrived payloadString: ', message.payloadString);
        }

        onMQTTMessageDelivered = (message) => {
            // console.log('App onMQTTMessageDelivered: ', message);
        }

        return () => {
            this.mqttConnect.close()
        }

    }, [])

    return (
        <ScrollView style={styles.fiyatlar}
        showsVerticalScrollIndicator={false}
    >
        {props.filterData.map((fiyat, index) => (
            <TouchableOpacity style={styles.fiyat} key={index}
            onPress={() => {
                this.mqttConnect.send('politeknik', fiyat.toString())
            }}>

                <Text style={styles.fiyattxt}>
                    {fiyat}
                </Text>
            </TouchableOpacity>
        ))}
    </ScrollView>
    );

}

const styles = StyleSheet.create({
    
    fiyatlar: {
        height: Metrics.width * 0.95,
        marginTop: Metrics.width * 0.005,
        flex: 1,
        // width: Metrics.width * 0.1,
    },
    fiyat: {
        borderWidth: 1,
        backgroundColor: 'yellow',
        height: Metrics.width * 0.1,
        width: Metrics.width * 0.13,
        marginVertical: Metrics.width * 0.01,
        borderRadius: Metrics.width * 0.02,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center'

    },
    fiyattxt: {
        fontSize: Metrics.width * 0.03,
        color:'black'
    }
});
