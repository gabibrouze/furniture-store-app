import React from 'react';

import './homepage.styles.scss';

const Hompage = () => {
	return (
		<div className='homepage'>
			<div className='directory-menu'>
				<div className='menu-item'>
					<div className='content'>
						<h1 className='title'>BEDROOM</h1>
						<span className='subtitle'>SHOP NOW</span>
					</div>
				</div>
				<div className='menu-item'>
					<div className='content'>
						<h1 className='title'>LIVING ROOM</h1>
						<span className='subtitle'>SHOP NOW</span>
					</div>
				</div>
				<div className='menu-item'>
					<div className='content'>
						<h1 className='title'>DINING ROOM</h1>
						<span className='subtitle'>SHOP NOW</span>
					</div>
				</div>
				<div className='menu-item'>
					<div className='content'>
						<h1 className='title'>OUTDOOR LIVING</h1>
						<span className='subtitle'>SHOP NOW</span>
					</div>
				</div>
				<div className='menu-item'>
					<div className='content'>
						<h1 className='title'>ELECTRONICS AND APPLIANCES</h1>
						<span className='subtitle'>SHOP NOW</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hompage;
