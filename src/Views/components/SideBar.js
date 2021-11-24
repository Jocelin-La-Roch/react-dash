import React, { PureComponent } from 'react'

class SideBar extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <nav class="pcoded-navbar">
                <div class="navbar-wrapper">
                    <div class="navbar-brand header-logo">
                        <a href="index.html" class="b-brand">
                            <div class="b-bg">
                                <i class="feather icon-trending-up"></i>
                            </div>
                            <span class="b-title">Datta Able</span>
                        </a>
                        <a class="mobile-menu" id="mobile-collapse" href="javascript:"><span></span></a>
                    </div>
                    <div class="navbar-content scroll-div">
                        <ul class="nav pcoded-inner-navbar">
                            <li class="nav-item pcoded-menu-caption">
                                <label>Dashboard</label>
                            </li>
                            <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" className="nav-item">
                                <a href="index.html" className="nav-link ">
                                    <span className="pcoded-micon"><i className="feather icon-home"></i></span><
                                    span className="pcoded-mtext">Grille</span>
                                </a>
                            </li>
                            <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" class="nav-item active">
                                <a href="index.html" class="nav-link ">
                                    <span class="pcoded-micon"><i class="feather icon-home"></i></span>
                                    <span class="pcoded-mtext">Table</span>
                                </a>
                            </li>
                            <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" className="nav-item">
                                <a href="index.html" className="nav-link ">
                                    <span className="pcoded-micon"><i className="feather icon-home"></i></span><
                                    span className="pcoded-mtext">Employés</span>
                                </a>
                            </li>
                            <li class="nav-item pcoded-menu-caption">
                                <label>Creation</label>
                            </li>
                            <li data-username="form elements advance componant validation masking wizard picker select" class="nav-item">
                                <a href="form_elements.html" class="nav-link ">
                                    <span class="pcoded-micon"><i class="feather icon-file-text"></i>
                                    </span><span class="pcoded-mtext">Ajouter une tâche</span>
                                </a>
                            </li>
                            <li data-username="Table bootstrap datatable footable" class="nav-item">
                                <a href="tbl_bootstrap.html" class="nav-link ">
                                    <span class="pcoded-micon"><i class="feather icon-server"></i></span>
                                    <span class="pcoded-mtext">Ajouter un employé</span>
                                </a>
                            </li>
                            <li class="nav-item pcoded-menu-caption">
                                <label>User</label>
                            </li>
                            <li data-username="Disabled Menu" class="nav-item disabled">
                                <a href="javascript:" class="nav-link"><span class="pcoded-micon"><i class="feather icon-power"></i></span>
                                    <span class="pcoded-mtext">Deconnexion</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default SideBar