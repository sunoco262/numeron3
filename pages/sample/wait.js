
// import Link from 'next/link'
import React, { Component } from 'react';
import axios from 'axios';
import Link from 'next/link'

class App extends Component {
    
    render() {
        return (
            <div>
               
                <Link href="game"><a>ゲーム開始</a></Link>
                <p>？人が待機しています</p>
                <p>ルーム？</p>
            </div>
        );
    }
}

export default App;
