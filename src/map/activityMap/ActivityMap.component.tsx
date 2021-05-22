import React, { FunctionComponent, useEffect } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Activity } from "../../activity/Activity.domain";

type ActivityMapProps = {
  activities: Activity[];
  selectedActivity: string | null;
};

type State = {
  lat: number;
  lng: number;
  zoom: number;
};

const CENTER_POINT: [number, number] = [-1.946582, 30.062354];
const INITIAL_ZOOM = 9;

const popupRefs: any = {};

const createPopupRefs = (activities: Activity[]) => {
  for (const activity of activities) {
    popupRefs[activity.id] = React.createRef();
  }
};

const ActivityMap: FunctionComponent<ActivityMapProps> = (props: ActivityMapProps) => {
  const { activities, selectedActivity } = props;

  // Refs
  createPopupRefs(activities);
  let mapRef: any;

  const activitySelected: Activity | undefined = activities.find(
    (activity: Activity) => activity.id === selectedActivity
  );

  useEffect(() => {
    if (activitySelected) {
      popupRefs[activitySelected.id]?.current?.leafletElement.openPopup();
    }
  });

  return (
    <Map
      center={CENTER_POINT}
      zoom={INITIAL_ZOOM}
      style={{ width: "100%", height: "100%", position: "absolute", zIndex: -1 }}
      zoomControl={false}
      ref={ref => (mapRef = ref)}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {activities.map(({ id, title, location: { coordinate } }: Activity) => (
        <Marker key={id} position={coordinate.toLatLng()} ref={popupRefs[id]}>
          <Popup>{title}</Popup>
        </Marker>
      ))}
    </Map>
  );
};

export default ActivityMap;
