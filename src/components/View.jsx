import React, { useState } from 'react'
import NavBar from './NavBar'

const View = () => {
  const [data, changedata] = useState(
    [


      { "name": "aju", "admissionno": 8688, "rollno": 1 },
      { "name": "akash", "admissionno": 86388, "rollno": 2 },
      { "name": "anii", "admissionno": 888, "rollno": 3 }, 

    ]
  )





  return (
    <div>
      <NavBar />

      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
          <div className="row g-3">
            


            {

              data.map(

                (value, index) => {

                  return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                  <div class="card">
                    <img src="data:image/jpeg;base64,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" class="card-img-top" alt="..."></img>
                    <div class="card-body">
                      <h5 class="card-title">{ value.name}</h5>
                      <p class="card-text">{value.admissionno}</p>
                      <a href="#" class="btn btn-primary">buy now </a>
                    </div>
                  </div>
    
    
                </div>
                }
              )
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default View