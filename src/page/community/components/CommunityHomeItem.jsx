import React from "react";
import PropTypes from "prop-types";

const CommunityHomeItem = ({ group }) => (
  <div className="community-home-group-item">
    <div className="community-home-group-icon">
      <img src={group.image} alt={group.name} />
    </div>
    <div className="community-home-group-details">
      <div className="community-home-group-name">{group.name}</div>
      <div className="community-home-group-notice"></div>
    </div>
    <div className="community-home-group-info"></div>
  </div>
);

CommunityHomeItem.propTypes = {
  group: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    notice: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default CommunityHomeItem;
