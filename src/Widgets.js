import React from 'react'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import './Widgets.css'

function Widgets() {

    const articles = (heading,sub) => {
        return (
        <div className="widgets_article">
            <div className="widgets_articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{sub}</p>
            </div>
        </div>
        )
    }

  return (
    <div className='widgets'>
        <div className="widgets_header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>
        {articles('Covid-19','High alert!!!')}
        {articles('Space-X','Space-X launch day')}
        {articles('Crypto','Bitcoin crash')}
        {articles('React','Redux toolkit')}
        {articles('AI and its future','OpenAI Chat-GPT')}
        {articles('Threads','Twitter rival by Meta')}
    </div>
  )
}

export default Widgets