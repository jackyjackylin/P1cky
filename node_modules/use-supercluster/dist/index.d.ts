import Supercluster from "supercluster";
import { BBox, GeoJsonProperties } from "geojson";
export interface UseSuperclusterArgument<P, C> {
    points: Array<Supercluster.PointFeature<P>>;
    bounds?: BBox;
    zoom: number;
    options?: Supercluster.Options<P, C>;
}
declare const useSupercluster: <P extends GeoJsonProperties = Supercluster.AnyProps, C extends GeoJsonProperties = Supercluster.AnyProps>({ points, bounds, zoom, options }: UseSuperclusterArgument<P, C>) => {
    clusters: (Supercluster.PointFeature<P> | Supercluster.PointFeature<Supercluster.ClusterProperties & C>)[];
    supercluster: Supercluster<P, C> | undefined;
};
export default useSupercluster;
