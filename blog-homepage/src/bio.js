import React from 'react';
import PropTypes from 'prop-types';

function Bio({ authorInfo }) {
    //  console.log({ ...authorInfo });
    return (
        <div >
            <img className={authorInfo.isMediumMember ? "member" : null} src={authorInfo.image} style={{ borderRadius: '50%', width: '10%' }} alt="author" />
            <span > {authorInfo.name}  </span>
        </div>
    )
}

Bio.propTypes = {
    authorInfo: PropTypes.object.isRequired
}

export default Bio;