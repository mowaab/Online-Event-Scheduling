import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import './Playground.css';
/* 
import { useNavigate, Link } from 'react-router-dom';


const navigate = useNavigate();
const goToProfile = () => {
    navigate('/profile'); 
  };
  */
const SetupPage = () => {
  return (
    <div>        
        <div id="header">

			<h1>Evently</h1>
			<div id="nav">
				<ul>
					<li><a href="">About</a></li>
					<li><a href="">Contact</a></li>
					<li><a href="">Services</a></li>
					<li><a href="">Profile</a></li>
				</ul>
			</div>
		</div>
		<div id="content">
			
            <div className="container1">
            <br/>
            <h2 className="header1">Select a Date</h2>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar />
                </LocalizationProvider>
			</div>
			<div class="article column1">
				<p>Column One</p>
			</div>
			<div class="article column2">
                <br />
                <img src="evently.png" height={"120"}/>
			</div>
			<div class="article column3">
				<p>Column Three</p>
			</div>
		</div>
		<div id="footer">
			<p>&copy; Copyright Evently 2024</p>
		</div>


        <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

      {/* Menu Bar */}
      <nav style={{ padding: '10px', backgroundColor: '#333', color: '#fff' }}>
        <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'space-around' }}>
          

          <li><img src="evently.png" width={""} height={"20"}/></li>
          <li><a style={{ color: '#fea' }}>Evently</a></li>
          <li></li>
          <li></li>
          <li></li>
          <li><a href="#profile" style={{ color: '#fff', textDecoration: 'none' }}>Profile</a></li>

        </ul>
      </nav>

        <div className="container1">
        <br/>
        <h2 className="header1">Select a Date</h2>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar />
      </LocalizationProvider>
        </div>
      

      <nav style={{ padding: '10px', backgroundColor: '#333', color: '#fff' }}>
        <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'space-around' }}>
          

          <li> <p>&copy; Copyright Evently 2024</p></li>
          <li> </li>

        </ul>
      </nav>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    


      {/* Setup Content 
      <header>
        <h1>Welcome to WordPress Setup</h1>
      </header>
      <section id="theme">
        <h2>Step 1: Choose Your Theme</h2>
        <p>Select a theme that suits your style or business.</p>
        <button>Choose Theme</button>
      </section>
      <section id="customize">
        <h2>Step 2: Customize Your Site</h2>
        <p>Update colors, fonts, and layouts to fit your brand.</p>
        <button>Customize</button>
      </section>
      <section id="domain">
        <h2>Step 3: Set Your Domain</h2>
        <p>Choose a unique domain or connect an existing one.</p>
        <button>Choose Domain</button>
      </section>
      <footer id="finish">
        <button>Finish Setup</button>
      </footer> */}
    </div>
  );
}

export default SetupPage;