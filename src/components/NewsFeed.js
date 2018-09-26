import React from 'react';
import md5 from 'js-md5';
import Ionicon from 'react-ionicons';
import NewsArticle from './NewsArticle';
import CardScroller from './CardScroller';

export default class NewsFeed extends React.Component {
	constructor(props) {
		super(props);
		this.cardScroller = new CardScroller(); // Sets up carousel functionality
	}

	render() { 
		const columns = this.props.articles.map((article, index) => {
			return (
				<div className="column is-one-fifth-widescreen is-one-quarter-desktop is-one-third-tablet" key={'article_'+md5(article.url)} ref={ref => this.cardScroller.cardRefs[index] = ref}>
					<NewsArticle article={article}/>
				</div>
			);
		});
		return (
			<div className="news-feed">
				<div className="arrow left" onClick={() => this.cardScroller.scrollLeft()}>
					<Ionicon icon="md-arrow-back" fontSize="35px" color="black"/>
				</div>
				<div className="news-feed-articles columns" id="news-feed-articles" ref={ref => this.cardScroller.containerRef = ref}>
					{columns}
				</div>
				<div className="arrow right" onClick={() => this.cardScroller.scrollRight()}>
					<Ionicon icon="md-arrow-forward" fontSize="35px" color="black"/>
				</div>
			</div>
		);
	}
}