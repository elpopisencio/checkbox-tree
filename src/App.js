import React, { useState } from 'react';
import Tree from './components/Tree';
import treeImg from './tree.svg';

const TREE = {
	tree: {
		one: {
			one_one: true,
			one_two: false,
		},
		two: true,
		three: {
			three_one: {
				three_one_one: true,
				three_one_two: false,
			},
		},
	},
};

const App = () => {
	const [tree, setTree] = useState(TREE);
	return (
		<div className="container">
			<div className="hero">
				<div className="hero-body">
					<h1 className="title is-1">Checkbox Tree</h1>
					<h2 className="subtitle is-4">
						<div className="level">
							<div className="level-left">Made with React.</div>
							<div className="level-right">
								<a
									style={{ color: 'inherit' }}
									href="https://elpopisencio.github.io"
								>
									<span class="icon is-large">
										<i class="fa fa-home"></i>
									</span>
								</a>
								<a
									style={{ color: 'inherit' }}
									href="https://github.com/elpopisencio/checkbox-tree"
								>
									<span class="icon is-large">
										<i class="fab fa-github"></i>
									</span>
								</a>
							</div>
						</div>
					</h2>
				</div>
			</div>
			<img className="project-image" src={treeImg} alt="" />
			<section className="section">
				<h3 className="title">Description</h3>
				<p className="subtitle">
					In this project I made a checkbox tree with React.
				</p>
			</section>
			<Tree tree={tree} onClick={setTree} />
		</div>
	);
};

export default App;
