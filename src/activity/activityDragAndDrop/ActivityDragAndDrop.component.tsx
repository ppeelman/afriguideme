// EXTERNAL
import React from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
//
// INTERNAL
import { Activity } from "../Activity.domain";
import colors from "../../styling/color.styling";
import DraggableActivity from "./DraggableActivity.component";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import { changePlanOrder } from "../../planning/Planning.store";
import { getPlanIdForActivity } from "../../planning/Planning.store.helper";
import { RootState } from "../../store";

export const GRID = "1rem";

const getListStyle = (isDraggingOver: boolean) => ({
  background: isDraggingOver ? colors.PRIMARY_LIGHT : colors.PRIMARY,
  padding: GRID,
  width: "100%"
});

type Props = {
  match: any;
  location: any;
  history: any;
  activities: Activity[];
  singleDayHeight: number;
  onSelectActivity: (activityId: string) => void;
};

const ActivityDragAndDrop = ({ activities: items, singleDayHeight, onSelectActivity }: Props) => {
  const dispatch = useDispatch();

  const planning = useSelector(({ planning }: RootState) => planning);

  const reorder = (list: Activity[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    const planId: string | undefined = getPlanIdForActivity(removed.id, planning);

    console.log("planId: ", planId);
    console.log("endIndex: ", endIndex);

    // Dispatch a Redux action
    dispatch(changePlanOrder(planId, endIndex));

    return result;
  };

  const _onDragEnd = (result: DropResult) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    reorder(items, result.source.index, result.destination.index);
  };

  return (
    <DragDropContext onDragEnd={_onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div {...provided.droppableProps} ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
            {items.map((item, index) => (
              <DraggableActivity
                key={item.id}
                activity={item}
                order={index}
                singleDayHeight={singleDayHeight}
                onSelectActivity={onSelectActivity}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default withRouter(ActivityDragAndDrop);
