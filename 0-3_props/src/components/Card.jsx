const Card = (props) => {
  return (
    <div>
         <div className="card">
      <img src = "https://plus.unsplash.com/premium_photo-1742455147775-4f5f6c09011b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDkwfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"></img>
    <h1>{props.user} {props.age}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>
    <button>Read More</button>
   </div>
      
    </div>
  )
}

export default Card
