import React, { Component , Fragment} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'reactstrap';
import {logout} from '../../actions/authActions';
import propTypes from 'prop-types';

export class Logout extends Component {

    static propTypes = {
        logout : propTypes.func.isRequired
    };

    render() {
        return (
            <div>
                <Fragment>
                    <NavLink onClick={this.props.logout} href='#'>
                        Logout
                    </NavLink>
                </Fragment>
                
            </div>
        )
    }
};

export default connect(null, {logout})  (Logout);
