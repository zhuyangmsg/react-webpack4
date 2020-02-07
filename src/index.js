import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
class App extends React.Component {
    render(){
        return <div>aaaaa</div>
    }
    componentDidMount(){
        this.getPersonApi();
        console.log("123");
    }
    getSelection(){
        console.log("456");
    }
    getPersonApi(){
        axios.post('http://localhost:8000/api/signin')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}
ReactDom.render(<App />,document.getElementById('app'));