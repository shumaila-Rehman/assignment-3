import Image from "next/image";
import profile from "../../Image/profile.jpg"
import Header from "..//Components/header"
import Footer from "@/Components/footer"


    export default function Home() {
      return(
        <div>
          <Header/>
          <Footer/>
          
          
       
          <div className="home-container">
            <div className="child-container">
            
            HI 
            <br/>
            <h2>My Name is <span className="pinkcolor">Shumaila  Rehman</span></h2>
            <p>I am Next.js Developer</p>

          </div>
          <div className="child-container">
          
          <Image  className="profile-img"  src ={profile} alt ="profile" />
          </div>
          </div>
          </div>
        

        
      )
    };
 
           

