export const NavBar = () => {
    return (
        <nav id="navbar" className="nav">
            <div id="logo" className="logo fade-enter-done" tabindex="-1">
                <a href="#">
                    <img src="/logo.svg" alt="logo SVG portfolio" />
                </a>
            </div>
            <ul className="nav-list">
                <li>
                    <a href="/about">About me</a>
                </li>
                <li>
                    <a href="/myskills">My skills</a>
                </li>
                <li>
                    <a href="/work">Work</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
            <div className="resume">
                <a className="resume-button" href="#" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
        
        {/*<style jsx>{`
            ul {
                list-style: none;
            }

            .nav {
                display: flex;
                justify-content: flex-end;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                color: #2c3a57;
                background-color: #dce6ee;
            {'}'}

            .nav-list{
                display: flex;
                margin-right: 4rem;
            {'}'}

            @media (max-width: 28.75em) {
                .nav {
                    justify-content: center;
                {'}'}
                .nav-list {
                    margin: 0 1rem;
                {'}'}
            {'}'}

            .nav-list a{
                display: block;
                padding: 0.5rem;
            {'}'}

            .nav-list a:hover {
                background: #002c59;
            {'}'}

            #logo {
                opacity: 1;
                animation: fade 10s linear;
                display: flex;
                top: 1%;
                left: 1%;
                position: fixed;
                height: 10%;
            {'}'}

            @keyframes fade {
                0%,100% { opacity: 0 }
                50% { opacity: 1 {'}'}
            {'}'}

            .resume-button {
                color: 003AB9;
                background-color: transparent;
                border: 1px solid var(--green);
                border-radius: var(--border-radius);
                padding: 0.75rem 1rem;
                font-family: var(--font-mono);
                line-height: 1;
                text-decoration: none;
                cursor: pointer;
                transition: var(--transition);
                margin-left: 15px;
                font-size: var(--fz-xs);
            }
        `}</style> */}
        </nav>
    )
}