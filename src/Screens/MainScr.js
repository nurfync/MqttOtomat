import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';


import Card from '../Components/Card';
import Imgs from '../StylingConstant/Imgs';
import Metrics from '../StylingConstant/Metrics';
import { Data } from './Data';

const numcolumn = 3;

const MainScr = props => {
    const [filterData, setData] = useState([]);


    const RenderItem = ({ item }) => {
        return (
            <Card cerez={item}
            SetList={(list) => SetList(list)}
            ></Card>
        )
    }

    const SetList = (list) => {
        setData(list);
    }


    useEffect(() => {


    }, [filterData]);

    return (
        <ScrollView>
            <View style={styles.container}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                    <View>
                        <FlatList
                            data={Data}
                            renderItem={RenderItem}
                            //keyExtractor={(item, index) => index}
                            numColumns={numcolumn}
                            keyExtractor={item => item.id.toString()}
                            nestedScrollEnabled
                        />
                    </View>
                    <View style={styles.fiyatlar}>
                        <Text>{filterData}</Text>
                    </View>
                </View>

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
                <View style={styles.footer}>
                    <View>
                        {/* <Text>politeknik...</Text> */}
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
            </View>

        </ScrollView>
    );
};

export default MainScr;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
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
    image: {
        width: Metrics.width * 0.06,
        height: Metrics.width * 0.06,
    },
    imagebutton: {
        width: Metrics.width * 0.06,
        height: Metrics.width * 0.06,
    },
    textpkt: {
        fontSize: Metrics.width * 0.03,
        paddingLeft: Metrics.width * 0.01,
        color: 'black'
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
    fiyatlar: {
        height: Metrics.width * 0.95,
        marginTop: Metrics.width * 0.005,
        flex: 1,
        // width: Metrics.width * 0.1,
        alignItems: 'center'
    }
});
