
import PlaceOne from "../../components/places/PlaceOne";
function PlacePop({showPop,toggleShowPop,itemList,itemId,nextItemId}) {
    if(showPop&& itemList){
        return (
            <section className="card-area text-center popup-window">
                <PlaceOne places={itemList.slice(itemId,itemId+1)} nextItemId={nextItemId}  toggleShowPop={toggleShowPop} showPop={true} className="container popup-window-content"/>  
            </section>
            
        );
    }

    else
        return <section></section>
}

export default PlacePop;