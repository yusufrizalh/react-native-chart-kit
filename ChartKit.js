import React, { Component } from 'react';
import { StyleSheet, ScrollView, SafeAreaView, 
    View, StatusBar, 
    Text, Dimensions } from 'react-native'; 

import {
    Header, Colors,
} from 'react-native/Libraries/NewAppScreen';

import BarCharts from './mycharts/BarChart';
import BezierLineChart from './mycharts/BezierLineChart';
import ContribGraphChart from './mycharts/ContribGraphChart';
import LineCharts from './mycharts/LineChart';
import PieCharts from './mycharts/PieChart';
import ProgressCharts from './mycharts/ProgressChart';
import StackedBarCharts from './mycharts/StackedBarChart';

export default class ChartKit extends Component {
    render() {
        return(
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    {/* <Header />  */}
                    <ScrollView style={styles.scrollView} contentInsetAdjustmentBehavior="automatic">
                        <View style={styles.body}>
                            <BarCharts /> 
                            <BezierLineChart />
                            <ContribGraphChart />
                            <LineCharts />
                            <PieCharts />
                            <ProgressCharts />
                            <StackedBarCharts />
                            <View style={{marginVertical: 200}}></View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </>
        );
    }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});