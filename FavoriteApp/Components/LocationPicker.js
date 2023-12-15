import { View,Image,StyleSheet,Text ,Alert} from "react-native";
import ButtonUS from "../Components/ButtonUS";
import { GlobalStyle } from "../Util/Colors";
import {getCurrentPositionAsync,useForegroundPermissions,PermissionStatus} from 'expo-location'
function LocationPicker(){

 const [locationPersmission,requestPermission]=useForegroundPermissions();

      async function verifylocation(){
      
        if(locationPersmission.status===PermissionStatus.UNDETERMINED){
        const persmissionResponse  =await requestPermission();

          return persmissionResponse.granted;
        }

        if(locationPersmission.status===PermissionStatus.DENIED){

            Alert.alert(
                'Insufficient Acess',
                'you need to grant camera permissioin to use this app'
                  
            )

            return false;
            
        }

      }
    async function locationhandler(){

        const locPermission= await verifylocation();

        if(!locPermission){
            return;
        }
      const location= await getCurrentPositionAsync();
      console.log(location);
    }
    
    return(
      <View style={LocationPickerStyle.main}>
         <View style={LocationPickerStyle.imageStle}>
            <Text style={[{backgroundColor:GlobalStyle.colors.lightorange},LocationPickerStyle.imageStle]}>No Image Was Added Yet?</Text>
            
           
        </View>
        <View style={LocationPickerStyle.buttonn}>
            <ButtonUS icon="location" name="Locate User" onPress={locationhandler}  />
            <ButtonUS icon="map" name="Select Location" />
        </View> 
      </View>

    )
}


export default LocationPicker;

const LocationPickerStyle=StyleSheet.create({
    main:{

        backgroundColor:"black",
        color:'white',
    },
    text:{
        color:"white",
        fontWeight:"bold",
        marginHorizontal:15,
        marginTop:10,
        marginBottom:5

    },
    inputBox:{
        backgroundColor:GlobalStyle.colors.lightorange,
        padding:10,
        marginHorizontal:15,
        fontWeight:"bold",
        fontSize:17
    },
    imageStle:{
        marginTop:10,
        width:"100%",
        height:250,
        marginBottom:5,
        
    },
    buttonn:{
        marginTop:10,
        flexDirection:"row",
        justifyContent:"space-between",
        marginHorizontal:15
    },
    fillText:{
        alignItems:"center",
        justifyContent:"center"
    },
    imagee:{
        width:"100%",
        height:"100%"
    }
})