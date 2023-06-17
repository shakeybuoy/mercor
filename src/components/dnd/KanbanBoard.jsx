import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import mockData from "../../utils/data";
import Card from "./Card";

const KanbanBoard = () => {
  const [data, setData] = useState(mockData);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColIndex = data.findIndex((e) => e.id === source.droppableId);
      const destinationColIndex = data.findIndex(
        (e) => e.id === destination.droppableId
      );

      const sourceCol = data[sourceColIndex];
      const destinationCol = data[destinationColIndex];

      const sourceTask = [...sourceCol.tasks];
      const destinationTask = [...destinationCol.tasks];

      const [removed] = sourceTask.splice(source.index, 1);
      destinationTask.splice(destination.index, 0, removed);

      data[sourceColIndex].tasks = sourceTask;
      data[destinationColIndex].tasks = destinationTask;

      setData(data);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex w-full gap-5 text-left">
        {data.map((section) => (
          <Droppable key={section.id} droppableId={section.id}>
            {(provided) => (
              <div
                {...provided.droppableProps}
                className="bg-[#F5F5F5] w-full p-5 rounded-2xl md:min-w-[400px] min-w-[300px]"
                ref={provided.innerRef}
              >
                <div className="text-base flex justify-between font-medium text-[#0D062D]">
                  <div className="flex gap-2 items-center">
                    <div
                      className={`w-2 aspect-square rounded-full bg-[${section.theme}] `}
                    ></div>
                    {section.title}
                  </div>
                </div>
                <div
                  className={`w-full bg-[${section.theme}] h-[2px] my-3`}
                ></div>
                <div className={`py-3 space-y-3`}>
                  {section.tasks.map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            ...provided.draggableProps.style,
                            rotate: snapshot.isDragging ? "3deg" : "0deg",
                          }}
                        >
                          <Card props={task} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;
