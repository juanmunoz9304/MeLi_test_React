import React, { useEffect } from 'react'

interface IBreadcrumbs {
    items : string[];
}

export const BreadcrumbsCompo : React.FC<IBreadcrumbs> = ({
    items
}) => {
  
  return (
    <div className='breadcrumbs-container'>
        {
            items && items.map((item, index) => (
                <React.Fragment key={index}>
                  <p>{item}</p>
                  {index < items.length - 1 && <span> {'>'} </span>}
                </React.Fragment>
              ))
        }
    </div>
  )
}
