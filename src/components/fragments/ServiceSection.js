import React from 'react';
import '../css/style.css';
import { IoBriefcaseOutline, IoHomeOutline, IoKeyOutline } from 'react-icons/io5';


const ServiceSection = () => {
  return (
    <section className="section service" aria-label="service">
      <div className="container">

        <h2 className="h2 section-title">How It Works</h2>

        <p className="section-text">
          A great platform to buy, sell and rent your properties without any agent or commissions.
        </p>

        <ul className="service-list">

          <li>
            <div className="service-card">

              <div className="card-icon">
                <IoHomeOutline/>
              </div>

              <h3 className="h3 card-title">Evaluate Property</h3>

              <p className="card-text">
                If the distribution of letters and 'words' is random, the reader will not be distracted from making.
              </p>

            </div>
          </li>

          <li>
            <div className="service-card">

              <div className="card-icon">
                <IoBriefcaseOutline/>
              </div>

              <h3 className="h3 card-title">Meeting with Agent</h3>

              <p className="card-text">
                If the distribution of letters and 'words' is random, the reader will not be distracted from making.
              </p>

            </div>
          </li>

          <li>
            <div className="service-card">

              <div className="card-icon">
                <IoKeyOutline/>
              </div>

              <h3 className="h3 card-title">Close the Deal</h3>

              <p className="card-text">
                If the distribution of letters and 'words' is random, the reader will not be distracted from making.
              </p>

            </div>
          </li>

        </ul>

      </div>
    </section>
  );
};

export default ServiceSection;
