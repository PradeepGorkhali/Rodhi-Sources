import React from 'react'
import './style.css'

function index() {
  return (
    <div>
      <nav class="nav-bar">
	<div class="container">
		<input type="checkbox" id="drop-down-cbox"/>
		<label for="drop-down-cbox">
			<span></span>
			<span></span>
			<span></span>
		</label>


     <img src='https://res.cloudinary.com/tuddrom-nepal/image/upload/v1659946342/rodhi_logo-04_lirwev.png' alt='' className='logo'/>
       

		<ul class="main-nav small-caps">
			<li><a href="#">Home</a></li>
			<li><a href="#">Products</a></li>
            <li><a href="#">Machine</a></li>
            <li><a href="#">Our Services</a></li>
			<li><span>About Us</span>
				<ul>
					<li><a href="#">Team</a></li>
					<li><a href="">Words of CEO</a></li>
					<li><a href="#">Gallery</a></li>
				</ul>
			</li>
			<li><a href="#">Contact</a></li>
		</ul>
		
	</div>
</nav>
    </div>
  )
}

export default index
