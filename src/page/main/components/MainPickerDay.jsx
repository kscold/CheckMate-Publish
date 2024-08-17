const MainPickerDay = ({
  day,
  weekday,
  selectedDay,
  onClickSelectedDay,
  completionPercentage,
  hasTodos,
}) => {
  const isActive = selectedDay === weekday
  const hasCompletion = hasTodos && completionPercentage > 0
  const backgroundStyle = isActive
    ? `conic-gradient(#ffffff ${completionPercentage}%, #3c3c3c ${completionPercentage}% 100%)`
    : hasCompletion
    ? `conic-gradient(#3c3c3c ${completionPercentage}%, #8c8c8c ${completionPercentage}% 100%)`
    : "#8c8c8c"

  return (
    <div onClick={() => onClickSelectedDay(weekday)}>
      <div
        key={day}
        className={`main-page-calendar-days-item-container ${
          isActive ? "active" : ""
        }`}
      >
        <div
          className={`main-page-calendar-days-item-weekday ${
            isActive ? "active" : ""
          }`}
        >
          {weekday}
        </div>
        <div className="main-page-calendar-days-item-day">
          <div
            className={`main-page-calendar-days-item-circle ${
              isActive ? "active" : ""
            }`}
            style={{ background: backgroundStyle }}
          >
            {day}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPickerDay
