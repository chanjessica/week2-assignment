import React from 'react';
import Bio from './bio.js'
import bookmark from './logo.svg';
import PropTypes from 'prop-types';

function Articles({ uData, styleClass }) {
    const getLink = (ref) => {
        return (e) => {
            e.preventDefault();
            alert(ref);
        }
    }

    return (
        uData.map((x, i) =>
            <div key={i} className={styleClass}>
                <div className="box-row">
                    <div className="box-cell">
                        <div>
                            <img onClick={getLink(x.link)} src={x.image} className="text-wrap imgSize2" alt="Title" />
                        </div>
                        <div className="top"  >
                            <p style={{ fontSize: '10px' }}>{x.hasAudioAvailable ? 'Audio available' : null}
                                <strong style={{ fontSize: '2em', textAlign: "right" }}>{x.memberPreview ? '*' : null}</strong>
                            </p>
                            <h4 onClick={getLink(x.link)}> {x.title} </h4>
                            {/* <h4><a href={x.link}> {x.title}</a> </h4> */}
                            <p onClick={getLink(x.link)}> {x.description} </p>
                        </div>
                        <div className="bottom">
                            <Bio authorInfo={x.author} />
                            <p style={{ fontSize: '10px' }}>   {(String(new Date(x.postedDate)).slice(4, 10))}  - {x.minutesToRead} min read
                            <img src={bookmark} className="imgBk" alt="bookmk" />
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        )
    );
}

Articles.propTypes = {
    uData: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        author: PropTypes.shape({
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            isMediumMember: PropTypes.bool.isRequired
        }).isRequired,
        postedDate: PropTypes.string.isRequired,
        minutesToRead: PropTypes.number.isRequired,
    })).isRequired,
    styleClass: PropTypes.string.isRequired
}

export default Articles;