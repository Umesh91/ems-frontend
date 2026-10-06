import React from 'react';

class HeaderComponent extends React.Component {
  render() {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://www.ems.com/" className="navbar-brand">EMS</a></div>  
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a href="https://www.ems.com/" className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="https://www.ems.com/employees" className="nav-link">Employees</a>
                            </li>
                            <li className="nav-item">
                                <a href="https://www.ems.com/contact" className="nav-link">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );
  }
}
export default HeaderComponent;