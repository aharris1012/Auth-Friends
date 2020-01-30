import React from "react";
import { axiosWithAuth } from "./axiosWithAuth";
import AddFriend from "./AddFriends";

class FriendsList extends React.Component {
    state = {
      friends: [],
    };
  
    componentDidMount() {
      this.getData();
    }
  
    getData = () => {
      axiosWithAuth()
        .get("/api/friends/")
        .then(res => {
          console.log(res.data);
          this.setState({
            friends: res.data
          });
        })
        .catch(err => console.log(err));
    };
  
    render() {
      console.log(this.state, "rendering");
      return (
        <div>
            <AddFriend />
          {this.state.friends.map(item => (
            <div className="friends" key ={item.id}>
              <p>id: {item.id}</p>
              <p>Name: {item.name}</p>
              <p>Age: {item.age}</p>
              <p>Email: {item.email}</p>
            </div>
          ))}
        </div>
      );
    }
  }
  export default FriendsList;