import { Component } from "react";
import { connect } from "react-redux";

@connect((state) => state.user)
class UserPage extends Component {
  render() {
    console.log(this.props.userInfo);
    return (
      <>
        <h1>User Page</h1>
        <div>{this.props.userInfo?.name}</div>
      </>
    );
  }
}
export default UserPage;
