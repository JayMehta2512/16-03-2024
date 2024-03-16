// Body.js

import React from 'react';

import styled from 'styled-components';
import './Body.css'
import Product from './Product';
import Reviews from './Review';

const Body = () => {
  return (
    <div>
   <>
   <img className="profile-photo" src={require("./image/body.png")} alt={"Carlie Anglemire"}/>
   </>
   <h2 className='heading' style={{ background: 'lightblue' }}>Water Jugs</h2>

      <Product/>
      <h2 className='heading'>Features Provided by WaterOnWay Service</h2>
      <Wrapper>
        <div>
          <div >
            <div >
              <div>
                <h3>To Overcome The Time Flexibility</h3>
              </div>
            </div>
            <div >
              <div >
                <h3>We could get Routine water supply By use of subscription</h3>
              </div>
              <div >
                <h3>Give stability To the delivering Profuct</h3>
              </div>
            </div>
            <div >
              <div>
                <h3> Get review for our Upcoming customers</h3>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      <br></br>
      <div className="main-content-container">
     <section className="orders-section">
        <h2>Why Choose WaterOnWay</h2>
        <p>
        WaterOnWay offers a reliable and convenient solution to your water delivery needs. With our easy-to-use web application,
         you can schedule deliveries online and have peace of mind knowing that your water supply is taken care of. Our service is eco-friendly,
         and our water jugs and bottles are made from high-quality, food-grade materials.
        </p>
        
      </section>
      </div>
      <Wrapper1>
      <section className="about-section">
        <h2>About WaterOnWay</h2>
        <p>
          WaterOnWay is an innovative project aimed at providing a convenient and reliable water supply service to individuals and businesses. The platform offers the seamless delivery of water jugs directly to the user's location on a daily basis.
        </p>
        <p> With the ease of online booking, customers can conveniently schedule their water deliveries, ensuring a consistent and hassle-free supply of clean and fresh water.</p>
      </section>
      </Wrapper1>
      <br></br>
      <h2 className='heading'>Reviews</h2>
      <Reviews/>
    </div>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  max-width: auto;
  margin: 0 auto;
  padding: 40px;
  background-color: #8bbdf2;

  .grid {
    gap: 4.8rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Adjust as needed */
  }
  
  .services-1,
  .services-2,
  .services-3 {
    width: auto;
    height: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: lightsteelblue;
    text-align: center;
    border-radius: 2rem;
  }
  
  .services-2 {
    gap: 4rem;
    background-color: transparent;
    box-shadow: none;
  }
  
  .services-2 .services-column-2 {
    background-color: lightsteelblue;
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
  }
  
  /* Media query for smaller screens */
  @media screen and (max-width: 768px) {
    .grid {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Adjust as needed */
    }
  
    .services-1,
    .services-2,
    .services-3 {
      height: 12rem; /* Adjust as needed */
    }
  }
  

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  h3 {
    margin-top: 1.4rem;
    font-size: 2rem;
  }

  .icon {
    width: 8rem;
    height: 8rem;
    padding: 2rem;
    border-radius: 50%;
    background-color: #fff;
    color: #5138ee;
  }

  .grid-three-column {
    grid-template-columns: repeat(3, 1fr);
`;
const Wrapper1 = styled.section`
  padding: 9rem 0;
  max-width: auto;
  margin: 0 auto;
  padding: 40px;
  background-color: #8bbdf2;

  .grid {
    gap: 4.8rem;
  }

  .services-1,
  .services-2,
  .services-3 {
    width: auto;
    height: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #007bff;
    text-align: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 2px 0px;
  }

  .services-2 {
    gap: 4rem;
    background-color: transparent;
    box-shadow: none;
  }

  .services-2 .services-column-2 {
    background-color: #007bff;
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 2px 0px;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  h3 {
    margin-top: 1.4rem;
    font-size: 2rem;
  }

  .icon {
    width: 8rem;
    height: 8rem;
    padding: 2rem;
    border-radius: 50%;
    background-color: #fff;
    color: #5138ee;
  }

  .grid-three-column {
    grid-template-columns: repeat(3, 1fr);
`;

export default Body;
