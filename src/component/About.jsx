import React from "react";
import Fade from "react-reveal/Fade";
import Dp from "../assets/dp.jpeg";
const About = () => {
	return (
		<div className='container-fluid'>
			{/* <Fade left big> */}

			<Fade left big>
				<div
					className=' col-sm-6 text-center '
					style={{
						float: "left",
						width: "50%",
					}}
				>
					<h1>Ayappa Krishnappa</h1>
					<img
						src={Dp}
						className='rounded-circle '
						alt='Cinque Terre'
						width='40%'
						height='40%'
						style={{ margin: "2%" }}
					></img>
					<h4 style={{ color: "#566573" }}>
						Masters in Computer Science
						<br />
						At University of North Carolina
					</h4>
				</div>
			</Fade>
			<div
				className='col-sm-6 align-items-xl-right'
				style={{
					float: "right",
					width: "50%",
					height: "100%",
					alignItems: "center",
				}}
			>
				<Fade right big>
					<h2 style={{ padding: "2%", backgroundColor: "white" }}>
						<span
							style={{
								color: "#903",
								float: "left",
								fontSize: "250%",
								lineheight: "90px",
								paddingRight: "8px",
								paddinLeft: "3px",
							}}
						>
							Hello,
						</span>
						I am currently persuing my Masters degree at UNCC charlotte and
						looking for full time job Software Engineer job for 2021. I am
						intrested to work as Software Developer , Web Developer , Mobile or
						Hybrid Application Developer or Date Science Engineer. I have worked
						of these tools and done some projects .<br />
						<br />
						&nbsp; &nbsp; &nbsp; &nbsp;With my year and half of industrial
						experience and strong understanding of Algorithems and Data
						Structures learned from my course curriculum and enthusiasm learn. I
						would be able to solve the real world problems or challenges that
						comes across me.
					</h2>
				</Fade>
			</div>
		</div>
	);
};

export default About;
