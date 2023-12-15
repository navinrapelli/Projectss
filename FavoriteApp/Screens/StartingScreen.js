import { View,Text ,StyleSheet,FlatList} from "react-native";
import ButtonUS from "../Components/ButtonUS";
import ImageComp from "../Components/ImageComp";
import { PlaceData } from "../Util/Place";
import { useSelector,useDispatch } from "react-redux";
function StartingScreen({route,navigation}){
      if(route!==undefined){
        console.log(route.params);
      }

      const dispatch=useDispatch();
    const dataPlace=useSelector((state)=>state.storeState);

    console.log(dataPlace);

    function renderItem(itemData){
        return <ImageComp {...itemData.item}/>
    }
   
    return(
     
        <View style={StarStyle.main}>
            
            <FlatList data={dataPlace} renderItem={renderItem} keyExtractor={(item)=>item.id}/>
        </View>

    )
}


export default StartingScreen;


const StarStyle=StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:"black",
        color:'white'
    }
})