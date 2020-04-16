import React, { Component } from 'react';

class ForYou extends Component {
    constructor(props) {
        super(props);
        this.state = { sectionTitle: "For You" }
    }

    render() {

        return (
            this.props.uData.map((x, i) =>
                <div key={i} className="box-two">
                    <div className="box-row">
                        <div className="box-cell">
                            <img src={x.image} className="text-wrap imgSize" alt="logo" />
                            <div className="top">
                                <h4> {x.title} </h4>
                                <p> {x.description} </p>
                            </div>
                            <div className="bottom">
                                <img src={x.author.image} style={{ borderRadius: '50%', width: '11%' }} alt="author" />
                                <span> {x.author.name} <br />
                                    {(String(new Date(x.postedDate)).slice(4, 10))}  - {x.minutesToRead} read
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )

        );
    }
}

export default ForYou;