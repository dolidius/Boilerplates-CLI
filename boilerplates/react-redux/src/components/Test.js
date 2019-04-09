import React, { Component } from 'react';

import { connect } from 'react-redux';
import { changeText } from '../actions/fetchText';

class Test extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.changeText}>Change Text!</button>
                {this.props.test.text}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    test: state.test
});

export default connect(mapStateToProps, { changeText })(Test);