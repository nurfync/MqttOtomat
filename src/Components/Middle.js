import React from 'react';
import { Text,View,StyleSheet,TouchableOpacity,Image } from 'react-native';
import Metrics from '../StylingConstant/Metrics';
import Imgs from '../StylingConstant/Imgs';

const Middle = props => {
    return (
        <View>
              <View style={styles.line}>
                    <TouchableOpacity style={styles.readybutton}>
                        <Text style={styles.text}>HAZIR KARIŞIM LİSTESİ</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.middleBox}>
                    <View style={styles.leftBox}>

                    </View>
                    <View style={styles.midBox}>
                        <View style={styles.insideBox}>
                            <Image
                                style={styles.image}
                                source={Imgs.plus}
                            />
                            <Text style={styles.textpkt}>Paket ekle</Text>
                        </View>
                    </View>
                    <View style={styles.rightBox}>

                    </View>
                </View>

                <View style={styles.line1}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Image
                            style={styles.image}
                            source={Imgs.money}
                        />
                        <Text style={styles.text}>ALIŞVERİŞİ TAMAMLA</Text>

                    </View>
                </View>
        </View>
    );
};

export default Middle;

const styles = StyleSheet.create({
    line: {
        backgroundColor: '#66ff00',
        height: Metrics.height * 0.07,
        flexDirection: 'column',
        borderColor: 'black',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        justifyContent: 'center',
        marginTop: Metrics.width * 0.025
    },
    line1: {
        backgroundColor: '#66ff00',
        height: Metrics.height * 0.07,
        flexDirection: 'column',
        borderColor: 'black',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        justifyContent: 'center',
    },
    text: {
        color: 'blue',
        alignSelf: 'center',
        fontWeight: '400'
    },

    middleBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: Metrics.width * 0.26,
        backgroundColor: 'lightgrey',
        paddingVertical: Metrics.width * 0.01
    },
    leftBox: {
        height: '100%',
        flex: 1,
        backgroundColor: 'white',
        borderWidth: Metrics.width * 0.01,
        margin: 2,
        borderColor: 'black',
        borderRadius: Metrics.width * 0.01

    },
    midBox: {
        height: '100%',
        flex: 1,
        backgroundColor: 'white',
        borderWidth: 1,
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center'


    },
    rightBox: {
        height: '100%',
        flex: 1,
        backgroundColor: 'white',
        borderWidth: 1,
        margin: 2


    },
    insideBox: {
        height: '90%',
        width: '95%',
        backgroundColor: 'lightgrey',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'

    },
    readybutton: {
        borderWidth: 1,
        borderTopColor: 'white',
        borderLeftColor: 'white',
        padding: Metrics.width * 0.01,
        marginHorizontal: Metrics.width * 0.02,

    },
    imgcont: {
        backgroundColor: 'grey',
        borderWidth: 1,
        borderTopColor: 'white',
        borderLeftColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: Metrics.width * 0.02,
        paddingVertical: 2,

    },
    image: {
        width: Metrics.width * 0.06,
        height: Metrics.width * 0.06,
    },

    textpkt: {
        fontSize: Metrics.width * 0.03,
        paddingLeft: Metrics.width * 0.01,
        color: 'black'
    },
});
