import React from 'react';
import './calendar.css';

function Appointement() {
  return (
    <section className="Appointement">
      {/*       <div className="text">
        <div className="name">{this.props.name}</div>
        <span
          className="status"
          onClick={event => {
            const newStatus = !this.state.online;
            this.setState({ online: newStatus });
          }}
        >
          <div className={this.state.online ? 'status-online' : 'status-offline'} />
          <p className="status-text">{this.state.online ? 'Online' : 'Offline'}</p>
        </span>
      </div> */}
    </section>
  );
}

export default Appointement;
