import React from 'react';
import Bio from './bio.js'
import bookmark from './logo.svg';
import PropTypes from 'prop-types';

function Articles({ uData, styleClass }) {
    // const getLink = (ref) => {
    //     alert(ref)
    // }

    return (
        uData.map((x, i) =>
            <div key={i} className={styleClass}>
                <div className="box-row">
                    <div className="box-cell">
                        <div>
                            <img src={x.image} className="text-wrap imgSize2" alt="Title" />
                        </div>
                        <div className="top"  >
                            <p style={{ fontSize: '10px' }}>{x.hasAudioAvailable ? 'Audio available' : null}
                                <strong style={{ fontSize: '2em', textAlign: "right" }}>{x.memberPreview ? '*' : null}</strong>
                            </p>
                            {/* <h4 onClick={getLink(x.link)}> {x.title} </h4> */}
                            {/* <h4 onClick={() => console.log({ x.link })}> {x.title} </h4> */}
                            <h4><a href={x.link}> {x.title}</a> </h4>
                            <p> {x.description} </p>
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
    uData: PropTypes.array.isRequired,
    styleClass: PropTypes.string.isRequired
}

export default Articles;