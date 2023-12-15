import { View,Image,StyleSheet,Text } from "react-native";
import ButtonUS from "../Components/ButtonUS";
import { GlobalStyle } from "../Util/Colors";
import  {launchCameraAsync} from 'expo-image-picker';
import { useState } from "react";
function ImagePicker({onSubmit}){

    const[imputImage,setImage]=useState();

    async function getImageHandler(){
        const image=await launchCameraAsync({
            allowsEditing:true,
            aspect:[16,9],
            quality:0.5
        });
        setImage(image.assets[0].uri);
        onSubmit(image.assets[0].uri);
        console.log(image.assets[0].uri);
       }
    return(
      <View style={ImagePickerStyle.main}>
         <View style={ImagePickerStyle.imageStle}>
            {!imputImage && (<Text style={[{backgroundColor:GlobalStyle.colors.lightorange},ImagePickerStyle.imageStle]}>No Image Was Added Yet?</Text>)}
            <Image style={ImagePickerStyle.imagee} source={{uri:imputImage}}/>
           
        </View>
        <View style={ImagePickerStyle.buttonn}>
            <ButtonUS icon="camera" name="Capture" onPress={getImageHandler} />
        </View> 
      </View>

    )
}


export default ImagePicker;

const ImagePickerStyle=StyleSheet.create({
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