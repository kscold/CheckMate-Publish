import React, { useEffect, useState } from 'react';
import { ReactComponent as GroupRoutinePlus } from '../../../assets/main/GroupRoutinePlus.svg';
import { ReactComponent as Check } from '../../../assets/main/Check.svg';
import { ReactComponent as NotCheck } from '../../../assets/main/NotCheck.svg';

const MainGroupRoutine = ({
  groupName,
  routineData,
  setRoutineData,
  newRoutineInput,
  setNewRoutineInput,
}) => {
  const [openRoutineInput, setOpenRoutineInput] = useState(false);

  useEffect(() => {
    console.log('선택된 그룹 데이터', routineData);
  }, [routineData]);

  const updateRoutineItem = (eventIndex, value) => {
    const updatedRoutines = routineData.map((event, index) =>
      index === eventIndex ? { ...event, title: value } : event
    );
    setRoutineData(updatedRoutines);
  };

  const toggleRoutineSuccess = (eventIndex) => {
    const updatedRoutines = routineData.map((event, index) =>
      index === eventIndex ? { ...event, success: !event.success } : event
    );
    setRoutineData(updatedRoutines);
  };

  const onChangeRoutineInput = (e) => {
    e.preventDefault();
    if (newRoutineInput.trim() === '') return;

    const updatedRoutines = [
      ...routineData,
      { title: newRoutineInput, success: false },
    ];
    setRoutineData(updatedRoutines);
    setNewRoutineInput('');
    setOpenRoutineInput(false);
  };

  const addRoutineItem = () => {
    setOpenRoutineInput(true);
  };

  if (!Array.isArray(routineData)) {
    routineData = [];
  }

  return (
    <div className="main-page-detail-group-routine-content-container">
      <div className="main-page-detail-group-routine-content-title-container">
        <div className="main-page-detail-group-routine-content-title">
          {groupName}
          <GroupRoutinePlus onClick={addRoutineItem} />
        </div>
      </div>
      <div className="main-page-detail-group-routine-content-item-container">
        {routineData.map((event, eventIndex) => (
          <div
            key={eventIndex}
            className="main-page-detail-group-routine-content-item-input-container"
          >
            <input
              className="main-page-detail-group-routine-content-item-input"
              type="text"
              value={event.title}
              onChange={(e) => updateRoutineItem(eventIndex, e.target.value)}
            />
            <div
              className="main-page-detail-group-routine-content-item-button"
              style={{ width: '25px' }}
              onClick={() => toggleRoutineSuccess(eventIndex)}
            >
              {event.success ? <Check /> : <NotCheck />}
            </div>
          </div>
        ))}

        {openRoutineInput && (
          <form
            className="main-page-detail-group-routine-item-create-input-container"
            onSubmit={onChangeRoutineInput}
          >
            <input
              className="main-page-detail-group-routine-item-create-input"
              type="text"
              value={newRoutineInput}
              onChange={(e) => setNewRoutineInput(e.target.value)}
              placeholder={`목표를 적어보세요. ${routineData.length}/15`}
            />
          </form>
        )}
      </div>
    </div>
  );
};

export default MainGroupRoutine;
