import react from 'react';    
import Section_1 from './components/section-1/section-1';
import Section2 from './components/section2/section2';

const App = () => { 
  const user = [
    {
      img : 'https://plus.unsplash.com/premium_photo-1731355865761-69e8d539e328?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
      intro : '',
      tag : 'Satisfied'
    },
    {
      img : 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
      intro : '',
      tag : 'Underserved'
    },
    {img : 'https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro : '',
      tag : 'Underbanked'
    }
  ]
  return (
    <div>
      <Section_1 />
      <Section2 />
    </div>
  );
}

export default App;