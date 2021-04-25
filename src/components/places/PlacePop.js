
import PlaceOne from "../../components/places/PlaceOne";
function PlacePop({showPop,setShowPop,item}) {
    if(showPop&& item){
        let tempList = [item]
        return (
            <section className="card-area text-center padding-bottom-100px popup-window">
                <PlaceOne places={tempList} setShowPop={setShowPop} showPop={true} className="container popup-window-content"/>  
            </section>
        );
    }

    else
        return <section></section>
}

export default PlacePop;