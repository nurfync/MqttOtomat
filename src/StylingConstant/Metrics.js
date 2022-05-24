import { Dimensions, Platform, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');
const statusbarHeight = StatusBar.currentHeight;

const Metrics = {
    width,
    height,
   statusbarHeight,
};

export default Metrics;