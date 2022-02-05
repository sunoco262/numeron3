
// import Link from 'next/link'
import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
    state = {
        posts: []
    };

    componentDidMount() {
        this.getPosts();
    }

    getPosts() {
        axios
            .get('http://localhost:8000/api/v1/')
            .then(res => {
                this.setState({ posts: res.data });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                {this.state.posts.map(item => (
                     <div key={item.id}>
                        <h1>{item.title}</h1>
                        <p>{item.date}</p>
                     </div>
                ))}
            </div>
        );
    }
}

export default App;
