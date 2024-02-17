import './AboutUs.css'
import IMG_5698 from "../images/IMG_5698.jpg"
export default function AboutUs(){
    return(
        <div className = "aboutUs">
            <div className = "aboutUsHeading">
            <h1>About Us</h1>
            </div>
            <div className = "items">
                <img src = {IMG_5698} className = "image"></img>
                <div className = "description">
                    <h2>Our Story</h2>
                    <p>Nestled in the vibrant heart of Harwin, Houston, our small business stands as a testament to our teams mission to offer top-notch phone-related services. Founded with a deep commitment to quality and customer satisfaction, we specialize in providing an array of services that cater to all your mobile needs. From a wide selection of the latest smartphones and bespoke accessories designed to enhance your device, to expert repair services that breathe new life into your phone, our store is your go-to destination. Our dedicated team, guided by Javed and Sohail's vision, is committed to delivering personalized service, ensuring that every visit leaves you with a solution perfectly tailored to your requirements. Join us in our cozy corner of Houston and experience the difference passion and quality can make in your mobile world.</p>
                </div>
            </div>
        </div>
    );
}