// EXTERNAL
import React, { FunctionComponent } from "react";
//
// INTERNAL
import { Activity } from "../Activity.domain";
import ActivityDetailCard from "../activityCard/horizontalActivityCard/HorizontalActivityCard.component";
import { Draggable } from "react-beautiful-dnd";
import { GRID } from "./ActivityDragAndDrop.component";

type Props = {
  activity: Activity;
  order: number;
  singleDayHeight: number;
  onSelectActivity: (activityId: string) => void;
};

const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: GRID,

  // change background colour if dragging
  background: isDragging ? "transparent" : "transparent",

  // styles we need to apply on draggables
  ...draggableStyle
});

const DraggableActivity: FunctionComponent<Props> = (props: Props) => {
  const { activity, order, singleDayHeight, onSelectActivity } = props;

  return (
    <Draggable key={activity.id} draggableId={activity.id} index={order}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
        >
          <ActivityDetailCard
            order={order + 1}
            activity={activity}
            height={singleDayHeight}
            onSelectActivity={onSelectActivity}
          />
        </div>
      )}
    </Draggable>
  );
};

export default DraggableActivity;
