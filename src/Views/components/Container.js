import React, { PureComponent } from 'react'
import Evolution from './Evolution';
import TasksTable from "./TasksTable";

class Container extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="pcoded-main-container">
                <div className="pcoded-wrapper">
                    <div className="pcoded-content">
                        <div className="pcoded-inner-content">

                            <div className="main-body">
                                <div className="page-wrapper">
                                    
                                    <div className="row">
                                        
                                        <Evolution title="A faire" evolution={67} number={45} theme="progress-c-theme" color="text-c-green"/>
                                        <Evolution title="En cours" evolution={67} number={45} theme="progress-c-theme2" color="text-c-purple"/>
                                        <Evolution title="Finies" evolution={67} number={45} theme="progress-c-theme3" color="text-c-red"/>

                                        <TasksTable />
        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        );
    }
}

export default Container