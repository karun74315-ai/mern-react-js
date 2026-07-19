import React from 'react'
import { Bookmark } from 'lucide-react'
import Card from './components/Card'

const App = () => {
  const jobs = [
    {
      brandLogo: 'https://logo.clearbit.com/google.com',
      company: 'Google',
      datePosted: '5 days ago',
      post: 'Frontend Developer',
      tag1: 'Full Time',
      tag2: 'Senior Level',
      pay: 45,
      location: 'Mumbai, India',
    },
    {
      brandLogo: 'https://logo.clearbit.com/microsoft.com',
      company: 'Microsoft',
      datePosted: '10 days ago',
      post: 'React Developer',
      tag1: 'Part Time',
      tag2: 'Junior Level',
      pay: 30,
      location: 'Bengaluru, India',
    },
    {
      brandLogo: 'https://logo.clearbit.com/amazon.com',
      company: 'Amazon',
      datePosted: '2 weeks ago',
      post: 'UI Engineer',
      tag1: 'Full Time',
      tag2: 'Mid Level',
      pay: 38,
      location: 'Hyderabad, India',
    },
    {
      brandLogo: 'https://logo.clearbit.com/netflix.com',
      company: 'Netflix',
      datePosted: '3 weeks ago',
      post: 'Product Designer',
      tag1: 'Contract',
      tag2: 'Senior Level',
      pay: 42,
      location: 'Delhi, India',
    },
    {
      brandLogo: 'https://logo.clearbit.com/spotify.com',
      company: 'Spotify',
      datePosted: '1 week ago',
      post: 'Backend Developer',
      tag1: 'Full Time',
      tag2: 'Mid Level',
      pay: 35,
      location: 'Pune, India',
    },
    {
      brandLogo: 'https://logo.clearbit.com/meta.com',
      company: 'Meta',
      datePosted: '6 days ago',
      post: 'Mobile App Developer',
      tag1: 'Full Time',
      tag2: 'Junior Level',
      pay: 32,
      location: 'Chennai, India',
    },
    {
      brandLogo: 'https://logo.clearbit.com/airbnb.com',
      company: 'Airbnb',
      datePosted: '4 weeks ago',
      post: 'Data Analyst',
      tag1: 'Part Time',
      tag2: 'Mid Level',
      pay: 28,
      location: 'Kolkata, India',
    },
    {
      brandLogo: 'https://logo.clearbit.com/uber.com',
      company: 'Uber',
      datePosted: '8 days ago',
      post: 'DevOps Engineer',
      tag1: 'Full Time',
      tag2: 'Senior Level',
      pay: 40,
      location: 'Ahmedabad, India',
    },
    {
      brandLogo: 'https://logo.clearbit.com/stripe.com',
      company: 'Stripe',
      datePosted: '2 days ago',
      post: 'QA Engineer',
      tag1: 'Full Time',
      tag2: 'Junior Level',
      pay: 27,
      location: 'Noida, India',
    },
    {
      brandLogo: 'https://logo.clearbit.com/github.com',
      company: 'GitHub',
      datePosted: '9 days ago',
      post: 'Full Stack Developer',
      tag1: 'Remote',
      tag2: 'Mid Level',
      pay: 33,
      location: 'Remote, India',
    },
  ]

  return (
    <div className="Parent">
      {jobs.map(function(elem){
        return <Card brandLogo = {elem.brandLogo}
        company = {elem.company}  post = {elem.post} datePosted = {elem.datePosted}
        tag1 = {elem.tag1} tag2 = {elem.tag2} pay = {elem.pay} location = {elem.location}   />
      })}
    </div>
  )
}

export default App
