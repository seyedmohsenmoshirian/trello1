import "./App.css"
import logo from"./assets/icons/svg/logo.svg"
import Board from './assets/icons/Board.png';
import googlelogo from"./assets/icons/svg/googlelogo.svg"
import logo2 from"./assets/icons/svg/logo2.svg"
import logo3 from"./assets/icons/svg/logo3.svg"
import logo4 from"./assets/icons/svg/logo4.svg"
import Capfture from './assets/icons/Capfture.png';
import AXS from './assets/icons/AXS.png';
import AXSdovom from './assets/icons/AXSdovom.png';
import y from './assets/icons/y.png';
import ebay from"./assets/icons/svg/ebay.svg"

function App(){
return(
    <main className="container">
        <header className="header">
            <nav className="navbar">
            <img src={logo} alt="Trello logo" className="Trello_Logo"/>
            <div className="nav_bottoms">
                <a href="/Login" className="login_buttom">Log in</a>
                <a href="/signup" className="signup_bottom">Sign up</a>

            </div>
            </nav>
            
        </header>
        <section className="hero_box">
                <h1 className="hero_box_tittle">Trello helps teams move work forward.</h1>
                <h3 className="hero_box_discription">Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique—accomplish it all with Trello.</h3>
                
                    

                    
                <div className="hero_box_signup_button_container">
                <div className="hero_box_email_input">
                <input placeholder="Email" className="email_input" /></div>
                <button className="hero_box_signup_button">Sign up—it’s free!</button>
                </div>
        </section>
        <section className="one">
        <h2 className="two">It’s more than work. It’s a way of working together.</h2>
        
        
        <h3 className="three">Start with a Trello board, lists, and cards. Customize and expand with more features as your teamwork grows. Manage projects, organize tasks, and build team spirit—all in one place.</h3>
        <div className="four"> 
        <button className="five">Start doing →</button>
        </div>
        </section>
        <div>
        <img className="aksvasat" src={Board}/></div>
            <div className="zireaks">
            <p>Join over 1,000,000 teams worldwide that are using Trello to get more done.</p>
            </div>
    <div className="arm">
    <img src={googlelogo} alt="google logo" className="google_logo"/>
    <img src={logo2} alt="google logo" className="logo2"/>
    <img src={logo3} alt="google logo" className="logo3"/>
    <img src={logo4} alt="google logo" className="logo4"/>
    </div>


    
    <div className="zireaks_one">
        <div className="zireaks_two"><b>Features to help your team succeed</b></div>
        <div className="hhh">Powering a productive team means using a powerful tool (and plenty of snacks). From meetings and projects to events and goal setting, Trello’s intuitive features give any team the ability to quickly set up and customize workflows for just about anything.</div>
        <div className="aksecopy">
    <img className="jjj" src={Capfture}/>
</div>







<p className="zireaksdovom">CHOOSE A VIEW</p>
<p className="zireaksdovomm">The board is just the beginning</p>
<p className="zireaksdovommm">Lists and cards are the building blocks of organizing work on a Trello board. Grow from there with task assignments, timelines, productivity metrics, calendars, and more.</p>
<p className="zireaksdovommmm">+  Learn more</p>
<div className="AXS">
    <img className="AXSone"  src={AXS}/>
    </div>
    <p className="zireaksdovomone">DIVE INTO THE DETAILS</p>
<p className="zireaksdovommone">Cards contain everything you need</p>
<p className="zireaksdovommmone">Trello cards are your portal to more organized work—where every single part of your task can be managed, tracked, and shared with teammates. Open any card to uncover an ecosystem of checklists, due dates, attachments, conversations, and more.</p>
<p className="zireaksdovommmmone">+  Learn more</p>



<div className="AXS">
    <img className="AXStwo"  src={AXSdovom}/>
    </div>
    <p className="zireaksdovomtwo">MEET YOUR NEW BUTLER</p>
<p className="zireaksdovommtwo">No-code automation</p>
<p className="zireaksdovommmtwo">Let the robots do the work—so your team can focus on work that matters. With Trello’s built-in automation, Butler, reduce the number of tedious tasks (and clicks) on your project board by harnessing the power of automation across your entire team.</p>
<p className="zireaksdovommmmtwo">+  Learn more</p>
    
    
    
    
    
    
    
    <div className="AXS">
    <img className="AXSsevomm"  src={y}/>
    </div>
    <p className="zireaksdovomsevom">POWER-UPS</p>
<p className="zireaksdovommsevom">Integrate top work tools</p>
<p className="zireaksdovommmsevom">Easily connect the apps your team already uses into your Trello workflow, or add a Power-Up that helps fine-tune one specific need. With hundreds of Power-Ups available, your team’s workflow wishes are covered.</p>
<p className="zireaksdovommmmsevom">+  Learn more</p>




<hr className="ggg"/>
<div className="zxc">See our pricing</div>
<div className="zxcone">Whether you’re a team of 2 or 2,000, there’s a Trello tailor-made for your organization.</div>
<button className="zxcdovomm">Trello pricing</button>


<div className="zxc3">Take a Trello tour</div>
<div className="zxcone1">Explore the world of boards and beyond in Trello. Dive deeper into our most popular features.</div>
<button className="zxcdovomoo">Tour Trello</button>
<hr className="gggg"/>


    <div className="poi">
    <img src={ebay} alt="google logo" className="ebay"/>
<div className="uio">Everyone loves it; it has democratized our finance function. In some ways Trello shattered hierarchy and brought us together.</div>
<div className="uioo">BHARATH SUNDAR Finance, eBay</div>
<hr className="ff"/>
<button className="tyu">&#8592;</button>
<button className="tyuone"></button>
<button className="tyutwo"></button>
<button className="tyuthree"></button>
<button className="tyuonee">&#8594;</button>
    </div>

<div className="asdo">
    <div className="asd">Sign up and get started with Trello today. A world of productive teamwork awaits!</div>
    <button className="mju">Sign up</button>

</div>



<div className="fty"></div>
</div>

</main>
)
}

export default App;