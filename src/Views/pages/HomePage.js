import React from 'react';
import Container from '../components/Container';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

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
                <SideBar />
                <NavBar />
                <Container />
            </body>
        )
    }
}

export default HomePage;