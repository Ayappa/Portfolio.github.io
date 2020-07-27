import React from "react";

const Work = () => {
	return (
		<div className='container'>
			<div
				class='card text-white  mb-3'
				style={{ marginTop: "2%", backgroundColor: "#566573" }}
			>
				<div class='card-header row col-sm-12'>
					<div className=' col-sm-6'>
						<h2>Fountain Finance</h2>
						<p>SAN FRANCISCO, California</p>
					</div>
					<div className=' col-sm-6 '>
						<div className='float-right '>
							<div className='text-center'>
								<h5>Internship</h5>
							</div>

							<p>June 2020 - September 2020</p>
						</div>
					</div>
				</div>
				<div class='card-body'>
					<h5 class='card-title'>Software Developer (Python)</h5>
					<p class='card-text'>
						Build dynamic stratiges using data set from yahoo finance and
						calculate sell or buy of stocks by calculating various index using
						tablib liberty , by using users input filters to buy or sell stocks.
						And Building Custom Stratiges to calculate sell or buy of stratiges
						using various index and dataset using python.
					</p>
				</div>
			</div>
			<div
				class='card text-white  mb-3'
				style={{ marginTop: "2%", backgroundColor: "#566573" }}
			>
				<div class='card-header row col-sm-12'>
					<div className=' col-sm-6'>
						<h2>Accenture</h2>
						<p>Bangalore, India</p>
					</div>
					<div className=' col-sm-6 '>
						<div className='float-right '>
							<div className='text-center'>
								<h5>Full Time</h5>
							</div>

							<p>August 2019 - December 2019</p>
						</div>
					</div>
				</div>
				<div class='card-body'>
					<h5 class='card-title'>
						{" "}
						Associate Software Engineer (Java, Spring, Sql)
					</h5>
					<p class='card-text'>
						Build web app usng spring, which include core concepts of Inversion
						of control , Dependencies Injection, Spring annotations, JDBC, XML
						configuration, filters, Spring JPA, Authentication and Authorization
						using JSON web tokens.
					</p>
				</div>
			</div>
			<div
				class='card text-white  mb-3'
				style={{
					marginTop: "2%",
					backgroundColor: "#566573",
				}}
			>
				<div class='card-header row col-sm-12'>
					<div className=' col-sm-6'>
						<h2>Sri Manjunatha Retailors</h2>
						<p>Bangalore, India</p>
					</div>
					<div className=' col-sm-6 '>
						<div className='float-right '>
							<div className='text-center'>
								<h5>Internship</h5>
							</div>

							<p>June 2017 - July 2018</p>
						</div>
					</div>
				</div>
				<div class='card-body'>
					<h5 class='card-title'>Software Developer (React, Node, Js)</h5>
					<p class='card-text'>
						Build web Apps for real estate, So customers can view properties,
						and contact the agents with messaging features. And Allow owners to
						post adds on the website . Front end was react using hooks to handle
						app level state , back end node as rest API, authentication and
						authorization using JSON web tokens . Firebase as data store for
						storing images and notification of messages.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Work;
