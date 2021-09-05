import styled from "styled-components";
import {pink, white} from "./colors";
import contact from "../pages/contact";

const Div = styled.div`
    .contact-left {
        position: fixed;
        width: 40px;
        bottom: 0px;
        left: 40px;
        right: auto;
        padding: 10px 10px;
        margin: 10px;
        z-index: 10;
        orientation: left;
        writing-mode: vertical-rl;
        
    }
    
    .contact-right {
        position: fixed;
        width: 40px;
        bottom: 0px;
        right: 40px;
        left: auto;
        padding: 10px 10px;
        margin: 10px;
        z-index: 10;
        orientation: right;
        writing-mode: vertical-lr;
    }
    
    a {
        color: ${white};
        margin: 20px auto;
        padding: 10px;
        letter-spacing: 0.2em;
        font-family: Poppins, sans-serif;
        font-size: 0.85rem;
    }

    a:hover{
        color: ${pink};
    }
`

const Img = styled.img`
    vertical-align: middle;
    
    .svg:hover{
        fill: #F64C72;
    }
`

export const FooterPortfolio = () => {

    return (
        <footer>
            <Div className="contact-links">
                <div className="contact-left">
                    <a href="mailto:stephania.arantxa@gmail.com" className="btn contact-details">stephania.arantxa@gmail.com</a>
                </div>
                <div className="contact-right">
                    <a href="https://github.com/stephanianevado" target="_blank" className="btn contact-details">
                        <Img className="svg" src="/logogithub.svg" alt="logo svg github"/>
                    </a>
                    <a href="https://www.linkedin.com/in/stephanianevado/" target="_blank" className="btn contact-details">
                        <Img src="/logolinkedin.svg" alt="logo svg linkedin"/>
                    </a>
                    <a href="https://www.instagram.com/stephanianevado/" target="_blank" className="btn contact-details">
                        <Img src="/logoinstagram.svg" alt="logo svg instagram"/>
                    </a>
                    <a href="https://www.facebook.com/nevadostephania" target="_blank" className="btn contact-details">
                        <Img src="/logofacebook.svg" alt="logo svg facebook"/>
                    </a>
                    <a href="https://twitter.com/nutrinevado" target="_blank" className="btn contact-details">
                        <Img src="/logotwitter.svg" alt="logo svg twitter"/>
                    </a>
                    <a href="https://codepen.io/stephanianevado" target="_blank" className="btn contact-details">
                        <Img src="/logocodepen.svg" alt="logo svg codepen"/>
                    </a>
                </div>

            </Div>
        </footer>
    )
}

