import React from 'react';
import Container from '../components/Container';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

class HomePage extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <body>
                <div class="loader-bg">
                    <div class="loader-track">
                        <div class="loader-fill"></div>
                    </div>
                </div>
                <NavBar />
                <Header />
                <Container />
            </body>
        )
    }
}

export default HomePage;