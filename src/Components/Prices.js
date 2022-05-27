import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import MQTTConnection from '../MQTTConnection'
import Metrics from '../StylingConstant/Metrics';

import { Buffer } from 'buffer';
global.Buffer = Buffer;

export default function Prices(props) {
    const [clicked, setClicked] = useState(new Array(props.filterData.Lengt).fill(false))

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

    onClick = (fiyat, index) => {
        this.mqttConnect.send('politeknik', fiyat.toString())

        let result = [...clicked];
        result = result.map(x => false); // reset previous click
        result[index] = true;
        setClicked(result);

    }
    onClick = (fiyat, index) => {

        let result = [...clicked];
        result = result.map(x => false); // reset previous click
        result[index] = true;
        setClicked(result);

    }
    useEffect(() => {
        onClick(0, 90);
    }, [props.indexdegeri]);

    return (
        <ScrollView style={styles.fiyatlar}
            showsVerticalScrollIndicator={false}
        >
            {props.filterData.map((fiyat, index) => (
                <TouchableOpacity style={[styles.fiyat, clicked[index] ? { backgroundColor: '#66ff00' } : { backgroundColor: 'yellow' }]} key={index}
                    onPress={() => {
                        onClick(fiyat, index)
                        this.mqttConnect.send('politeknik', fiyat.toString())
                    }
                    }>

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
        height: Metrics.width * 0.09,
        width: Metrics.width * 0.13,
        marginVertical: Metrics.width * 0.01,
        borderRadius: Metrics.width * 0.02,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'

    },
    fiyattxt: {
        fontSize: Metrics.width * 0.03,
        color: 'black'
    }
});
