import React from 'react';

export default class NewsArticle extends React.Component {
	render() {
		const article = this.props.article;
		const image = article.urlToImage || 'http://placekitten.com/g/400/300';

		return (
			<a href={article.url}>
				<article className="article card">
					<div className="card-image">
						<figure className="thumbnail image is-4by3">
							<img src={image} alt="" />
						</figure>
					</div>
					<div className="card-content">
						<div className="title is-5">
							<h2>{article.title}</h2>
						</div>
						<div className="description">
							<p>{article.description}</p>
						</div>
					</div>
				</article>
			</a>
		);
	}
}