import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import BigMacbook from '../../img/shutterstock_1362710882.png';
import AppleOnDesk from '../../img/shutterstock_-2@2x.png';

const Macbook = () => {
	return (
		<Fragment>
			<section className="container-macbook1">
				<div className="macbook1__group1">
					<Fade left>
						<h1>Macbook Pro</h1>
						<h2>
							More power.<br />More pro
						</h2>
					</Fade>

					<div className="macbook-specs-container">
						<Fade right>
							<div className="macbook-group1__first">
								<p>8-core</p> <span>Intel processor</span>
							</div>
							<div className="macbook-group1__second">
								<p>32GB</p> <span>Memory</span>
							</div>
						</Fade>
					</div>
				</div>
				<img className="big-macbook-img" src={BigMacbook} alt="" />
			</section>
			<section className="container-macbook2">
				<Fade>
					<p>Buy Now &#62;</p>
				</Fade>

				<Fade bottom>
					<img src={AppleOnDesk} alt="" />
				</Fade>
				<Fade bottom>
					<div className="subscribeform">
						<h2>Subscribe Now</h2>
						<div className="form-group">
							<input type="text" placeholder="Enter the email address" />
							<button>Subscribe</button>
						</div>
					</div>
				</Fade>
			</section>
		</Fragment>
	);
};

export default Macbook;
