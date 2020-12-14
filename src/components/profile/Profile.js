import React, { Component } from 'react'
import PropTypes from 'prop-types';
export class Profile extends Component {
    render() {
        return (
            <div>
                <img src={this.props.children} alt='' style={{ height: '300px', width: '400px' }} />
                <h1>{this.props.name} </h1>
                <h3>{this.props.profission}</h3>
                <p>{this.props.bio}</p>
                {this.props.handleName(this.props.name)}
            </div>
        )
    }
}

Profile.propTypes = {
    name: PropTypes.string,
    profission: PropTypes.string,
    bio: PropTypes.string,
    
};

Profile.defaultProps = {
    name: "Rana Faraj",
    profission: "Guitarest",
    bio: "19 yo, half alien half cat",
    img: './ranz.jpg'

}