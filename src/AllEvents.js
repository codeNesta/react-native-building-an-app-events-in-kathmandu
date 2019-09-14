//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableNativeFeedback} from 'react-native';
import moment from 'moment';
import data from '../db'

// create a component
class AllEvents extends Component {
    state ={
        data: data,
        bgColor:['#70a1ff','#7bed9f','#2ed573','#1e90ff','#ffa502','#ff6b81']
    }
    render() {

        randomNumber = Math.floor(Math.random() * 7)
        
        return (
             <View style={styles.container}> 
                    <FlatList   style={{width:'100%'}}
                               data={this.state.data}
                               keyExtractor={(item,index) => index.toString()} 
                               showsVerticalScrollIndicator={false}
                               renderItem= {({item}) => {
                                   return (
        <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Details', {...item})} >
                <View style={{marginVertical:20, marginHorizontal:15, borderRadius:15,  backgroundColor:'#ced6e0', elevation:15}} >
                            <View style={{padding:15,  backgroundColor:'#86dfe5',borderTopLeftRadius:15, borderTopRightRadius:15 }}  >
                                    <Text style={{ fontSize:24, fontWeight:'bold', }} >{item.eventName}</Text>
                                    <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:8, alignItems:'baseline'}} >
                                            <View style={{flexDirection:'row', alignItems:'baseline' }} >
                                                    <Text style={{fontSize:16, fontWeight:'bold'}} >Type: </Text>
                                                    <Text  >{item.genre}</Text>
                                            </View>
                                            <Text style={{fontSize:16, fontWeight:'bold'}} >{moment(new Date(item.date)).fromNow()} </Text>
                                    </View>
                            </View>
                            <View style={{ height:200, maxwidth:'100%', }} >
                                     <Image source={{uri:item.image}} resizeMode="cover" style={{ flex:1, alignSelf:'stretch', borderBottomLeftRadius:15, borderBottomRightRadius:15,   }} /> 
                            </View>
                </View>
        </TouchableNativeFeedback>
                                        
                                   )
                               }}
                                />
             </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
   container:{
       flex:1,
      backgroundColor:'#f1f2f6'
      
   }
});

//make this component available to the app
export default AllEvents;
