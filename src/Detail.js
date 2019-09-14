//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity , ScrollView, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Communications from 'react-native-communications';
import moment from 'moment';
// import { TouchableOpacity } from 'react-native-gesture-handler';

// create a component
class Detail extends Component {
    render() {
        const phone = <Icon style={{paddingRight:5}} name="phone" size={20} color="black" />;
        const map = <Icon style={{paddingRight:5}} name="map-marker" size={20} color="black" />;
        const participate = <Icon style={{paddingRight:5}} name="user-plus" size={20} color="black" />;
        console.log(this.props.navigation.state.params)
        const params = this.props.navigation.state.params

        // if(!this.props.navigation.state.params){
        //  <Text>Please Select Event </Text>
        // }else{
            return (
                <View style={styles.container}>
                  
                   <View style={{height:250, width:'100%', alignSelf:'center' }} >
                       <Image source={{uri:params.image}} resizeMode="contain" style={{borderRadius:12, flex:1,alignSelf:'stretch', width:'100%', height:'100%', }} />
                   </View>
                   <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:8, alignItems:'baseline'}} >
                        <View style={{flexDirection:'row', alignItems:'baseline' }} >
                                <Text style={{fontSize:16, fontWeight:'bold'}} >Type: </Text>
                                <Text  >{params.genre}</Text>
                        </View>
                        <Text style={{fontSize:16, fontWeight:'bold'}} >{moment(new Date(params.date)).calendar()}</Text>
                  </View>
               
                 <View style={{flexDirection:"row" , justifyContent: "flex-start", marginTop:15, elevation:5 }}>
                        <View style={{marginRight:20, }} >
                                <TouchableOpacity style={{elevation:9, flexDirection:'row',padding:12,borderRadius:6, backgroundColor:"#86dfe5"}}  onPress={() =>this.props.navigation.navigate('Map',{...params})} >
                                    {map}
                                    <Text style={{color:'black',fontSize:19}} >Map</Text>
                                </TouchableOpacity>
                        </View>

                        <View style={{marginRight:20}}>
                                {
                                    params.contact !== null &&  
                                    <TouchableOpacity style={{elevation:9, flexDirection:'row', padding:12,borderRadius:6, backgroundColor:"#86dfe5"}}  onPress={() => Communications.phonecall(params.contact, true)} >
                                        {phone}
                                    <Text style={{color:'black', fontSize:19}} >Call</Text>
                                    </TouchableOpacity>
                                }

                        </View>

                        <View>
                           {
                               params.form !== null &&                  
                                   <TouchableOpacity style={{elevation:9, flexDirection:'row', padding:12,borderRadius:6, backgroundColor:"#86dfe5"}}  onPress={() => Linking.openURL(params.form)} >
                                    {participate}
                                    <Text style={{color:'black',fontSize:19 }} >Participate</Text>
                                  </TouchableOpacity> 
                           }
                         </View>
                 </View>

                 <View style={{marginVertical:10}} >
                      <Text style={{fontSize:24, fontWeight:'bold'}} >{params.eventName}</Text>
                </View>

                 <ScrollView style={{marginTop:5, elevation:6}}  showsHorizontalScrollIndicator={false} >
                        <View style={{marginTop:5}} > 
                                    
                                    <Text style={{lineHeight:23, fontSize:20}} >{params.eventDetail}  </Text>
                        </View>
                 </ScrollView>
              
               </View>
   
            );
        // 


       
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:8,
        margin:10
       
        
    },
});

//make this component available to the app
export default Detail;
