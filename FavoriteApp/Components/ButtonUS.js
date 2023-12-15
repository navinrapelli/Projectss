import { Text,View,StyleSheet,Pressable } from "react-native";
import {Ionicons} from '@expo/vector-icons';
import { GlobalStyle } from "../Util/Colors";
function ButtonUS({icon,name,onPress,fill}){

    const buttonStyleee=[ButtonStyle.main]
     fill?buttonStyleee.push(ButtonStyle.buttonFill):"";
    return(
        <Pressable onPress={onPress}>
        <View style={buttonStyleee}>
            
             <Ionicons name={icon} color="white" size={25}/>
             <Text style={ButtonStyle.text}>{name}</Text>
             
        </View>
        </Pressable>

    )
}

export default ButtonUS;


const ButtonStyle= StyleSheet.create({
    main:{
             flexDirection:"row",
             padding:10,
             margin:2,
             borderWidth:2,
             borderColor:'white',
             alignItems:"center",
             justifyContent:"center"
             
    },
    text:{
        margin:2,
       fontWeight:"bold",
       color:"white"
    },
    button2:{
        borderWidth:2,
        borderColor:"white"
    },
    buttonFill:{
        
        backgroundColor:GlobalStyle.colors.orge100
    }
})