import "./App.css";
import UpdateCard from "./components/UpdateCard";

export type ProfileCard = {
    image:string;
    heading1:string;
    heading2:string;
    discription:string;
    end_line:string;
}

function App() {

  const card1:ProfileCard ={
    image: "https://images.unsplash.com/photo-1761839259488-2bdeeae794f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
    heading1:"Team Celebrations",
    heading2:"On the 25th",
    discription: "Lorem Ipsum is simply dummy printing",
    end_line:"Read More >"
  }

  const card2:ProfileCard ={
    image: "https://images.unsplash.com/photo-1763241287143-047ab2696b1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D",
    heading1:"Data Security",
    heading2:"Policies",
    discription: "Lorem Ipsum is simply dummy  printing ",
    end_line:"More Info >"
  }

  const card3:ProfileCard ={
    image: "https://images.unsplash.com/photo-1761839258239-2be2146f1605?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D",
    heading1:"Team Gathering",
    heading2:"COLLAB",
    discription: "Lorem Ipsum is simply dummy printing   ",
    end_line:"JOIN Now >"
  }
  return (
    <>
      {/* Apply the background here */}
      <div className="h-screen flex justify-around items-center">
        <UpdateCard image = {card1.image} heading1={card1.heading1} heading2={card1.heading2} discription={card1.discription} end_line={card1.end_line}/>
        <UpdateCard image = {card2.image} heading1={card2.heading1} heading2={card2.heading2} discription={card2.discription} end_line={card2.end_line} />
        <UpdateCard image = {card3.image} heading1={card3.heading1} heading2={card3.heading2} discription={card3.discription} end_line={card3.end_line}/>
      </div>
    </>
  );
}

export default App;
