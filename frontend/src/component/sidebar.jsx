import React from 'react';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <a href="#" className="icon">
                <i className="fab fa-instagram" />
            </a>
            <a href="#" className="icon">
                <i className="fab fa-youtube" />
            </a>
            <a href="#" className="icon">
                <i className="fab fa-facebook-f" />
            </a>
            <div className="divider" />
            <div className="follow-text">Follow Us</div>
        </div>
    );
};

export default Sidebar;