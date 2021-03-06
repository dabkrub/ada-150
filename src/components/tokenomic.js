import React from 'react'
import chart from '../images/chart.png'
import chart2 from '../images/chart2.png'
import chartMobile from '../images/chart-mobile.png'

function tokenomic(props) {
    return (
      <div className='tokenomics' ref={props.TokenomicsRef}>
        <h2>ADA $150</h2>
        <h1>TOKENOMICS</h1>
        <div className='tokenomics-line'></div>
        <div className='tokenomics-flex'>
          <div className='tokenomics-box'>
            <h2>Supply</h2>
            <h2>
              <span> 1,000,000,000</span>
            </h2>
            <h2>
              TOKENS
            </h2>
            <img src={chart} id='chart' />
            <img src={chartMobile} id='chart-mobile' />
          </div>
          <div className='tokenomics-box'>
            <h2>
              Transaction Fee<span> 20%</span>
            </h2>
            <img src={chart2} id='chart2' />
          </div>
        </div>
      </div>
    )
}

export default tokenomic
