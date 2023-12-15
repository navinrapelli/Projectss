
export class Place{

    constructor(name,placeLoc,placeUri){
        this.id= Math.floor(Math.random()*100).toString();
        this.name=name,
        this.placeLoc=placeLoc,
        this.placeUri=placeUri
    }
}


export const PlaceData=[];