const headerTemplate = document.createElement('template');

headerTemplate.innerHTML =
`
<style>
 * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
 
.topnav {
        position: absolute;
        background-color: white;
        overflow: hidden;
        left: 0;
        right: 0;
        top: 0;
        z-index: 1000;
        padding-top: 1rem;
        display: flex;
        justify-content: space-between;
        padding-left: 5%;
        padding-right: 5%;
        align-items: center;
    }

    .nav-container {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 40px;
        align-items: center;
    }

    .topnav a {
        position: relative;
        font-family: Nunito Sans;
        font-size: 30px;
        font-weight: 500;
        line-height: 40.92px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: #000000C7;
        text-decoration: none;
        margin: 5px;
        transition: color 0.3s ease-in-out;
    }

    .signup-button {
        display: flex;
        align-items: center;
        margin-left: auto;
    }

    .signup-button a {
        position: relative;
        font-family: Nunito Sans;
        font-size: 30px;
        font-weight: 500;
        line-height: 40.92px;
        padding: 10px 20px;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: #ffffff;
        text-decoration: none;
        background-color: #5C1C75;
        border-radius: 15px;
        margin: 5px;
        transition: background-color 0.3s ease-in-out;
    }

    .nav-container a:hover {
        color: #7d2699;
    }

    .signup-button a:hover {
        background-color: #7d2699;
    }
  
      </style>
<div class="topnav">
    <div class="nav-container">
        <a href="about.html">about us</a>
        <a href="committees.html">committees </a>
        <a href="events.html">events</a>
        <a href="portfolio.html">portfolio</a>
    </div>

    <a href="signup.html" class="mobile-signup">sign up</a>
</div>
`;

class Header extends HTMLElement
{
    constructor()
    {
      super();
    }
  
    connectedCallback()
    {
      const shadowRoot = this.attachShadow({ mode: 'closed' });
      shadowRoot.appendChild(headerTemplate.content);
    }
}
  
customElements.define('header-component', Header);
  