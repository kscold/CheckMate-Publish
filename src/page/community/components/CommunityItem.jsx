
import React from "react";
import PropTypes from "prop-types";

const CommunityItem = ({ group }) => (
  <div className="community-group-item">
    <div className="community-group-icon">
      <img src={group.image} alt={group.name} />
    </div>
    <div className="community-group-details">
      <div className="community-group-name">{group.name}</div>
      <div className="community-group-notice">{group.notice}</div>
    </div>
    <div className="community-group-info">
      <div className="community-group-time">{group.time}</div>
      {group.badge && <div className="community-group-badge">{group.badge}</div>}
    </div>
  </div>
);


CommunityItem.propTypes = {
  group: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    notice: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    badge: PropTypes.string,
  }).isRequired,
};


export default CommunityItem;

