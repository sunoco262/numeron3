
// import Link from 'next/link'
import React, { Component } from 'react';
import axios from 'axios';
import Link from 'next/link'

class App extends Component {
    state = {
        posts: []
    };

    componentDidMount() {
        this.getPosts();
    }

    getPosts() {
        axios

            .get('http://localhost:8000/getRooms')

            .then(res => {
                console.log(res.data.room)
                this.setState({ posts: res.data.room });
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
                        <h1>ルーム{item.id}</h1>
                        <p>{item.num}人</p>
                     </div>
                ))}
                <Link href="sample/wait"><a>部屋作成</a></Link>
            </div>
        );
    }
}

export default App;
