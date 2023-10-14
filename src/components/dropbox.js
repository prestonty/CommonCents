import axios from "axios";
import React, { Component } from "react";

class Dropbox extends Component {
    state = {
        selectedFile: null,
    };

    fileSelectedHandler = (event) => {
        this.setState({
            selectedFile: event.target.files[0],
        });
    };

    render() {
        return (
            <div>
                <h1>WHATS UP</h1>
                <input type="file" onChange={this.fileSelectedHandler}></input>
                <button>Upload Image</button>
            </div>
        );
    }
}

export default Dropbox;

// fileUploadHandler = () => {
//     axios.post("");
//     // sends the data to firebase
//     // sets up an end point to send data to the cloud storage
// };
