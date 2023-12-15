import { View,Text,Pressable,StyleSheet,Image } from "react-native";
import { GlobalStyle } from "../Util/Colors";

function ImageComp({name,placeLoc,placeUri}){

    console.log(name);
    return(
        <Pressable>
            <View style={ImageCompStyle.mian}>
                <Image style={ImageCompStyle.imagee} source={{uri:placeUri}}/>
                 <View>
                    <Text style={ImageCompStyle.texttt}>Place Name: {name}</Text>
                    <Text style={ImageCompStyle.texttt}>Location: {placeLoc}</Text>
                 </View>
            </View>
        </Pressable>

    )
}


export default ImageComp;


const ImageCompStyle=StyleSheet.create({
mian:{
    margin:5,
    height:100,
   backgroundColor:GlobalStyle.colors.lightorange,
   flexDirection:"row",
   justifyContent:"space-between",
   borderRadius:6
},
imageStyle:{
    height:250,
},
texttt:{
    fontWeight:"bold",
    color:"black",
    padding:8,
},
imagee:{
    width:"60%",
    height:"100%"
}
})