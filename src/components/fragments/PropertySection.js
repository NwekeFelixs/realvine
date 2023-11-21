import React from 'react';
import '../css/style.css';

import propertyImg1 from '../images/property-1.jpg';
import propertyImg2 from '../images/property-2.jpg';
import propertyImg3 from '../images/property-3.jpg';
import propertyImg4 from '../images/property-4.jpg';
import propertyImg5 from '../images/property-5.jpg';
import propertyImg6 from '../images/property-6.jpg';
import { IoBedOutline, IoCubeOutline, IoHeart, IoManOutline, IoStar } from 'react-icons/io5';

const PropertySection = () => {
  const properties = [
    {
      id: 1,
      imageUrl: propertyImg1,
      address: "10765 Hillshire Ave, Baton Rouge, LA 70810, USA",
      size: "8000sqf",
      beds: 4,
      baths: 4,
      price: "$5000",
      rating: 5.0,
      reviews: 30
    },
    {
      id: 2,
      imageUrl: propertyImg2,
      address: "59345 STONEWALL DR, Plaquemine, LA 70764, USA",
      size: "8000sqf",
      beds: 4,
      baths: 4,
      price: "$5000",
      rating: 5.0,
      reviews: 30
    },
    {
      id: 3,
      imageUrl: propertyImg3,
      address: "3723 SANDBAR DR, Addis, LA 70710, USA",
      size: "8000sqf",
      beds: 4,
      baths: 4,
      price: "$5000",
      rating: 5.0,
      reviews: 30
    },
    {
      id: 4,
      imageUrl: propertyImg4,
      address: "LOT 21 ROYAL OAK DR, Prairieville, LA 70769, USA",
      size: "8000sqf",
      beds: 4,
      baths: 4,
      price: "$5000",
      rating: 5.0,
      reviews: 30
    },
    {
      id: 5,
      imageUrl: propertyImg5,
      address: "710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, USA",
      size: "8000sqf",
      beds: 4,
      baths: 4,
      price: "$5000",
      rating: 5.0,
      reviews: 30
    },
    {
      id: 6,
      imageUrl: propertyImg6,
      address: "5133 MCLAIN WAY, Baton Rouge, LA 70809, USA",
      size: "8000sqf",
      beds: 4,
      baths: 4,
      price: "$5000",
      rating: 5.0,
      reviews: 30
    }
  ];

  return (
    <section className="section property" aria-label="property">
      <div className="container">

        <h2 className="h2 section-title">Featured Properties</h2>

        <p className="section-text">
          A great platform to buy, sell, and rent your properties without any agent or commissions.
        </p>

        <ul className="property-list">
          {properties.map(property => (
            <li key={property.id}>
              <div className="property-card">
                <figure className="card-banner img-holder" style={{ '--width': 800, '--height': 533 }}>
                  <img src={property.imageUrl} width="800" height="533" loading="lazy" alt={property.address} className="img-cover" />
                </figure>

                <button className="card-action-btn" aria-label="add to favourite">
                  <IoHeart aria-hidden="true"/>
                </button>

                <div className="card-content">
                  <h3 className="h3">
                    <a href="#" className="card-title">{property.address}</a>
                  </h3>

                  <ul className="card-list">
                    <li className="card-item">
                      <div className="item-icon">
                        <IoCubeOutline/>
                      </div>
                      <span className="item-text">{property.size}</span>
                    </li>
                    <li className="card-item">
                      <div className="item-icon">
                        <IoBedOutline/>
                      </div>
                      <span className="item-text">{property.beds} Beds</span>
                    </li>
                    <li className="card-item">
                      <div className="item-icon">
                        <IoManOutline/>
                      </div>
                      <span className="item-text">{property.baths} Baths</span>
                    </li>
                  </ul>

                  <div className="card-meta">
                    <div>
                      <span className="meta-title">Price</span>
                      <span className="meta-text">{property.price}</span>
                    </div>
                    <div>
                      <span className="meta-title">Rating</span>
                      <span className="meta-text">
                        <div className="rating-wrapper">
                          {Array.from({ length: Math.floor(property.rating) }, (_, index) => (
                            <IoStar key={index} />
                          ))}
                        </div>
                        <span>{property.rating}({property.reviews})</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
};

export default PropertySection;
