import React from 'react'
import {Bookmark, User} from 'lucide-react'
import Card from './components/Card'

const App = () => {

  const jobOpenings = [
    {
      "brand_logo": "https://t3.ftcdn.net/jpg/03/88/07/84/360_F_388078454_mKtbdXYF9cyQovCCTsjqI0gbfu7gCcSp.jpg",
      "company_name": "Google",
      "date_posted": "2 days ago",
      "post": "Software Engineer",
      "tag1": "Full Time",
      "tag2": "Junior Level",
      "pay": "$45/hr",
      "location": "Bangalore, India"
    },
    {
      "brand_logo": "https://thumbs.dreamstime.com/b/amazon-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-ai-amazon-logo-editorial-illustrative-208329107.jpg",
      "company_name": "Amazon",
      "date_posted": "5 days ago",
      "post": "Backend Developer",
      "tag1": "Full Time",
      "tag2": "Senior Level",
      "pay": "$60/hr",
      "location": "Hyderabad, India"
    },
    {
      "brand_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ3pHIqQecJfV9eDO0alJx1Q_Ohe-92WYAXg&s",
      "company_name": "Meta",
      "date_posted": "1 week ago",
      "post": "Frontend Engineer",
      "tag1": "Part Time",
      "tag2": "Junior Level",
      "pay": "$40/hr",
      "location": "Mumbai, India"
    },
    {
      "brand_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBA5U88jLaKHSI5Mg_grZ6BX-KTmICy-cCQg&s",
      "company_name": "Apple",
      "date_posted": "3 days ago",
      "post": "iOS Developer",
      "tag1": "Full Time",
      "tag2": "Senior Level",
      "pay": "$70/hr",
      "location": "Delhi, India"
    },
    {
      "brand_logo": "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940",
      "company_name": "Netflix",
      "date_posted": "6 days ago",
      "post": "Data Engineer",
      "tag1": "Full Time",
      "tag2": "Senior Level",
      "pay": "$80/hr",
      "location": "Remote, India"
    },
    {
      "brand_logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/500px-Microsoft_logo.svg.png",
      "company_name": "Microsoft",
      "date_posted": "4 days ago",
      "post": "Cloud Engineer",
      "tag1": "Full Time",
      "tag2": "Junior Level",
      "pay": "$50/hr",
      "location": "Noida, India"
    },
    {
      "brand_logo": "https://t3.ftcdn.net/jpg/03/88/07/84/360_F_388078454_mKtbdXYF9cyQovCCTsjqI0gbfu7gCcSp.jpg",
      "company_name": "Google",
      "date_posted": "1 day ago",
      "post": "ML Engineer",
      "tag1": "Full Time",
      "tag2": "Senior Level",
      "pay": "$75/hr",
      "location": "Pune, India"
    },
    {
      "brand_logo": "https://thumbs.dreamstime.com/b/amazon-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-ai-amazon-logo-editorial-illustrative-208329107.jpg",
      "company_name": "Amazon",
      "date_posted": "2 weeks ago",
      "post": "DevOps Engineer",
      "tag1": "Part Time",
      "tag2": "Junior Level",
      "pay": "$35/hr",
      "location": "Chennai, India"
    },
    {
      "brand_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ3pHIqQecJfV9eDO0alJx1Q_Ohe-92WYAXg&s",
      "company_name": "Meta",
      "date_posted": "3 days ago",
      "post": "Product Designer",
      "tag1": "Full Time",
      "tag2": "Senior Level",
      "pay": "$65/hr",
      "location": "Gurgaon, India"
    },
    {
      "brand_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBA5U88jLaKHSI5Mg_grZ6BX-KTmICy-cCQg&s",
      "company_name": "Apple",
      "date_posted": "1 week ago",
      "post": "QA Engineer",
      "tag1": "Full Time",
      "tag2": "Junior Level",
      "pay": "$42/hr",
      "location": "Hyderabad, India"
    }
  ]

  
  return (
    <div className='parents'>
      {jobOpenings.map(function(elem){
       return <Card company={elem.company_name} post={elem.post} pay={elem.pay} logo={elem.brand_logo} date_posted={elem.date_posted} location= {elem.location}tag1={elem.tag1} tag2={elem.tag2}/>  
      })}
      </div>
   
  )
}

export default App
