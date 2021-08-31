import Head from 'next/head'

export const FooterPortfolio = () => {

    return (
        <footer>
            <div className="contact-links">
                <a href="https://www.facebook.com/nevadostephania" target="_blank" className="btn contact-details">Facebook</a>
                <a href="https://github.com/stephanianevado" target="_blank" class="btn contact-details">GitHub</a>
                <a href="https://codepen.io/stephanianevado" target="_blank" className="btn contact-details">Codepen</a>
                <a href="https://www.instagram.com/stephanianevado/" target="_blank" className="btn contact-details">Instagram</a>
                <a href="https://twitter.com/nutrinevado" target="_blank" className="btn contact-details">Twitter</a>
                <a href="mailto:stephania.arantxa@gmail.com" className="btn contact-details">Send a mail</a>
            </div>
            {/*<style>{'
                footer {
                    width: 100%;
                    height: 100px;
                    border-top: 1px solid #eaeaea;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                footer a {
                    display: flex;
                justify-content: center;
                align-items: center;
                }
            '}</style>*/}
        </footer>
    )
}

