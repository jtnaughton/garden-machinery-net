import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import landingPage from './images/landingPage.jpg'

function App() {
	return (
		<div>
			<nav class="navbar background">
				<ul class="nav-list">
				    <h4>Dave Naughton Mower Service</h4>
					<li><a href="#courses">Servicing and Repairs</a></li>
					<li><a href="#tutorials">Spare Parts</a></li>
					<li><a href="#jobs">Refurbished Lawn Mowers</a></li>
				</ul>

				<div class="rightNav">
					<input type="text" name="search" id="search" />
					<button class="btn btn-sm">Search</button>
				</div>
			</nav>

	<div class="box-main">
	<div style={{ backgroundImage: `url(${landingPage})` }}>
      Hello World
    </div>
		</div>			
			<footer className="footer">
				<p className="text-footer">
					Copyright ©-All rights are reserved
				</p>
			</footer>
		</div>
	)
}

export default App
