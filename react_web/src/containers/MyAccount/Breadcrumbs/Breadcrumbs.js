import React from 'react';
import {Link} from 'react-router-dom'

const Breadcrumbs = ({ breadcrumbs }) => {
    const brLinks = breadcrumbs.map((breadcrumb, index) => {
      return (
        <span key={index}>
          
          {breadcrumb.link ? (<Link to={breadcrumb.link}>{breadcrumb.text}</Link>) : breadcrumb.text}
        </span>
      )
    });
    return (
      <div >
        
          <Link to="/">Home</Link>
      
        {brLinks}
      </div>
    );
  };
  export default Breadcrumbs;