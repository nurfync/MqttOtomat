import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import Metrics from '../StylingConstant/Metrics';
import Imgs from '../StylingConstant/Imgs';

const Footer = props => {
    return (
        <View style={styles.footer}>
            <View>
                <Text style={styles.color}>{props.name}</Text>
            </View>
            <View style={{ flexDirection: 'row', }}>
                <View style={styles.imgcont}>
                    <Image
                        style={styles.imagebutton}
                        source={Imgs.ayarla}
                    />
                </View>
                <View style={styles.imgcont}>
                    <Image
                        style={styles.imagebutton}
                        source={Imgs.ayarla}
                    />
                </View>
                <View style={styles.imgcont}>
                    <Image
                        style={styles.imagebutton}
                        source={Imgs.paper}
                    />
                </View>
                <View style={styles.imgcont}>
                    <Image
                        style={styles.imagebutton}
                        source={Imgs.dlte}
                    />
                </View>
                <View style={styles.imgcont}>
                    <Image
                        style={styles.imagebutton}
                        source={Imgs.exit}
                    />
                </View>
            </View>
        </View>
    );
};

export default Footer;

const styles = StyleSheet.create({
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
    footer: {
        //  marginTop: Metrics.width * 0.08,
        height: Metrics.width * 0.11,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: Metrics.width * 0.01,
        backgroundColor: '#E8E8E8',
    },
    imagebutton: {
        width: Metrics.width * 0.06,
        height: Metrics.width * 0.06,
    },
    text: {
        color: 'black'
    }
});