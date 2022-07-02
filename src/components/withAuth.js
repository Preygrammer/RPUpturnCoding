import React from "react";
import { connect } from "react-redux";
import { checkCurrentUserAuth } from "../actions/index";
import { NOT_AUTHENTICATED, AUTH_CHECK_USER } from "../constants/actionTypes";
import Login from "./Login";

// I use class based component for this because
// if FC it throws an error on Component Index
function withAuth(WrappedComponent) {
  class Wrapper extends React.Component {
    componentDidMount() {
      const currentUser = localStorage.getItem("currentUser");
      if (!currentUser) {
        console.log("Did mount");
        this.props.checkCurrentUserAuth();
      } else {
        this.props.checkIfAuthChecked();
      }
    }

    render() {
      if (!this.props.authChecked) {
        return <h2>Loading Indicator</h2>;
      } else if (!this.props.loggedIn && this.props.protected) {
        return (
          <>
            <Login />
            <p>You need to login to view this page.</p>
          </>
        );
      } else {
        return <WrappedComponent {...this.props} />;
      }
    }
  }

  const mapStateToProps = ({
    authorization: { authChecked, loggedIn, currentUser },
  }) => {
    return { authChecked, loggedIn, currentUser };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      checkCurrentUserAuth: () => dispatch(checkCurrentUserAuth()),
      checkIfAuthChecked: () => dispatch({ type: AUTH_CHECK_USER }),
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(Wrapper);
}

export default withAuth;
