import "./about.css";

export default function About() {
	return (
		<>
			<div className="about-container">
				<h2>About this</h2>

				<div className="about-description">
					<p>
						This is, of course, a simple exercise with the objective of
						practicing the latest concept from <strong>The Odin Project</strong>
						. We are using React Router with some routines to fetch, manage and
						organice an Online Store data with some simple UI.
					</p>

					<p>
						Please note that no actual POST request is being made from this
						application, so no real transaction is being made, nor we are
						collecting any data from you
					</p>
				</div>

				<div className="about-link">
					<p>
						This was made with ❤️ for{" "}
						<a href="https://theodinproject.com">The Odin Project</a>, find it
						on{" "}
						<a href="https://github.com/Andrefe91/react_project_shopping_cart">
							Github
						</a>
					</p>
				</div>
			</div>
		</>
	);
}
