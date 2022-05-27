import React, { useState, useEffect } from 'react';
import {
    Text, View, FlatList, StyleSheet, TouchableOpacity,
    ScrollView
} from 'react-native';
// import { ScrollView } from 'react-native-virtualized-view';


import Card from '../Components/Card';
import Footer from '../Components/Footer';
import Middle from '../Components/Middle';
import Prices from '../Components/Prices';
import Metrics from '../StylingConstant/Metrics';
import { Data } from './Data';

const numcolumn = 3;

const MainScr = props => {
    const [filterData, setData] = useState([]);
    const [name, setName] = useState('politeknik...');


    const RenderItem = ({ item }) => {
        return (
            <Card cerez={item}
                SetList={(list) => SetList(list)}
                SetName={(namec)=>setName(namec)}
            ></Card>
        )
    }

    const SetList = (list) => {
        setData(list);
    }


    return (
        <ScrollView style={styles.container}>

            <View style={styles.topper}>

                <View>
                    <FlatList
                        data={Data}
                        renderItem={RenderItem}
                        numColumns={numcolumn}
                        keyExtractor={item => item.id.toString()}
                        nestedScrollEnabled
                    />
                </View>

                <Prices
                    filterData={filterData}
                    indexdegeri={name}
                ></Prices>
            </View>
            <Middle></Middle>
            <Footer
                name={name}
            ></Footer>
        </ScrollView>

    );
};

export default MainScr;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topper: {
        flexDirection: 'row',
        justifyContent: 'space-between' 
    },

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
        alignSelf: 'center'

    },
    fiyattxt: {
        fontSize: Metrics.width * 0.03,
        color: 'black'
    }
});
