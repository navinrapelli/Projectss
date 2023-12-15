import { View,Text,StyleSheet,TextInput,Image,ScrollView } from "react-native";
import { useState } from "react";
import ButtonUS from "../Components/ButtonUS";
import { GlobalStyle } from "../Util/Colors";
import ImagePicker from "../Components/ImagePicker";
import LocationPicker from "../Components/LocationPicker";
import { Place } from "../Util/Place";
import { PlaceData } from "../Util/Place";
import { addPlace } from "../redux/SliceFav";
import { deletePlace } from "../redux/SliceFav";
import { useSelector,useDispatch } from "react-redux";
function ManageScreen({navigation}){

    const dispatch=useDispatch();
    const dataPlace=useSelector((state)=>state.storeState);
    console.log(dataPlace);

    const placeObj=new Place();
    const[favtitle,setFevtitle]=useState("");
    const [inputUri,setInputUri]=useState("");
    function inpuHanlder(enterText){
           setFevtitle(enterText);
    }
    

    function getImgeUri(uri){
        if(uri!=undefined){
            setInputUri(uri);
        }
        
    }

    function saveHandler(){
           
           placeObj.name=favtitle;
           placeObj.placeUri=inputUri
           placeObj.placeLoc="thi"


    console.log(PlaceData);
      dispatch(addPlace({...placeObj}));
    navigation.navigate("FavoriteList",{...PlaceData});

    }
       

    function cancelHandler(){
        navigation.goBack();
        setInputUri("");
    }
    return(
        <ScrollView style={ManageStyle.main}>
         <View>   
        <View>
            
            <Text style={ManageStyle.text}>Title</Text>
            <TextInput style={ManageStyle.inputBox} onChangeText={inpuHanlder} value={favtitle}/>

        </View>
        <ImagePicker onSubmit={getImgeUri} />
        <LocationPicker/> 

        <View style={ManageStyle.buttonn}>
            <ButtonUS fill={true} name="Save" onPress={saveHandler} />
            <ButtonUS fill={true} name="Cancel" onPress={cancelHandler} />

        </View>
        </View>
        </ScrollView>

    )
}


export default ManageScreen;

const ManageStyle=StyleSheet.create({
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