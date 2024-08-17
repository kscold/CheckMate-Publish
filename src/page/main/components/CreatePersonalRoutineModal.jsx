import React from 'react';
import { ReactComponent as DeleteIcon } from '../../../assets/main/DeleteIcon.svg';

const CreatePersonalRoutineModal = ({
  isOpen,
  onClose,
  routine,
  onChangeRoutine,
  onSave,
  onDelete,
}) => {
  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    onChangeRoutine({ ...routine, [name]: value });
  };

  const toggleDaySelection = (day) => {
    const updatedDays = routine.recurringDays.some((d) => d.day === day)
      ? routine.recurringDays.filter((d) => d.day !== day)
      : [...routine.recurringDays, { day, success: false }];
    onChangeRoutine({ ...routine, recurringDays: updatedDays });
  };

  return (
    <div
      className="main-create-personal-routine-modal-overlay"
      onClick={onClose}
    >
      <div
        className="main-create-personal-routine-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-close-button-container">
          <div className="modal-close-button" onClick={onClose} />
        </div>
        <div className="modal-body">
          <div className="modal-section">
            <div className="modal-section-routine-title">루틴명</div>
            <div className="modal-input-group">
              <input
                type="text"
                name="time"
                placeholder="0:00"
                value={routine.time}
                onChange={handleChange}
              />
              <input
                type="text"
                name="title"
                placeholder="목표를 적어보세요"
                value={routine.title}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="modal-section">
            <div className="modal-section-routine-day">
              실천 요일 <span>최소 2일 선택</span>
            </div>
            <div className="modal-days-container">
              {['월', '화', '수', '목', '금', '토', '일'].map((day) => (
                <div
                  key={day}
                  className={`modal-day-item ${
                    routine.recurringDays.some((d) => d.day === day)
                      ? 'selected'
                      : ''
                  }`}
                  onClick={() => toggleDaySelection(day)}
                >
                  {day}
                </div>
              ))}
            </div>
          </div>
          <div className="modal-section-alert">
            <div className="modal-section-alert-title">알림 설정</div>
            <label className="switch">
              <input
                type="checkbox"
                name="notification"
                checked={routine.notification || false}
                onChange={(e) =>
                  onChangeRoutine({
                    ...routine,
                    notification: e.target.checked,
                  })
                }
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
        <hr />
        <div className="modal-footer">
          <div className="modal-footer-button-container">
            <button className="modal-delete-button" onClick={onDelete}>
              <DeleteIcon />
              삭제하기
            </button>
            <button className="modal-save-button" onClick={onSave}>
              수정하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePersonalRoutineModal;
