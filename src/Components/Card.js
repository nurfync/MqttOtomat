import React, { useEffect } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import MQTTConnection from '../MQTTConnection'
import Metrics from '../StylingConstant/Metrics';

import { Buffer } from 'buffer';
global.Buffer = Buffer;

export default function Card(props) {

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
        <TouchableOpacity style={[styles.container, { borderColor: props.cerez.color }]}
            onPress={() => {
                this.mqttConnect.send('politeknik', props.cerez.title)
                props.SetList(props.cerez.list)
            }}>
            <View style={[styles.top, { backgroundColor: props.cerez.color }]}>
                <Text style={styles.text}>{props.cerez.title}</Text>

            </View>
            <View style={styles.middle}>

                <View style={styles.imageContainer} >
                    <Image
                        style={styles.image}
                        source={props.cerez.img}
                    />
                </View>
            </View>
            <View style={[styles.bottom, { backgroundColor: props.cerez.color }]}>
                <Text style={styles.text}>Fiyat {props.cerez.fiyat} TL</Text>
            </View>
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        margin: 2,
        borderWidth: 2,
        width: Metrics.width * 0.27,

    },
    top: {
        height: Metrics.width * 0.05,
        justifyContent: 'center'
    },
    middle: {
        // backgroundColor: 'black'
        height: Metrics.width * 0.20
    },
    bottom: {
        height: Metrics.width * 0.05,
        justifyContent: 'center'
    },

    imageContainer: {
    },
    image: {
        width: Metrics.width * 0.26,
        height: Metrics.width * 0.2,
        resizeMode: 'stretch',
    },
    text: {
        color: 'white',
        fontSize: Metrics.width * 0.032
    }
});
