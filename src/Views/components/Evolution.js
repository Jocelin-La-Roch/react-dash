import React, { PureComponent } from 'react'

class Evolution extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="col-md-6 col-xl-4">
                <div className="card daily-sales">
                    <div className="card-block">
                        <h6 className="mb-4">{this.props.title}</h6>
                        <div className="row d-flex align-items-center">
                            <div className="col-9">
                                <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className={"feather icon-arrow-up f-30 m-r-10 " + this.props.color}></i>{this.props.number}</h3>
                            </div>

                            <div className="col-3 text-right">
                                <p className="m-b-0">{this.props.evolution}%</p>
                            </div>
                        </div>
                        <div className="progress m-t-30" style={{height: "7px"}}>
                            <div className={"progress-bar "+ this.props.theme} role="progressbar" style={{width: this.props.evolution+"%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Evolution