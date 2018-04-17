import React, {
	Component
} from 'react';
import {
	DragDropContext
} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import List from './List'
import {
	Link
} from 'react-router'

class KanbanBoard extends Component {
	render() {
		let cardModal = this.props.children && React.cloneElement(this.props.children, {
			cards: this.props.cards,
			cardCallbacks: this.props.cardCallbacks
		})

		return (
			<div className = "app">
			<Link to='/new' className="float-button">+</Link>
			<List id = 'todo' title = "TO DO" taskCallbacks={this.props.taskCallbacks}
			cardCallbacks = {this.props.cardCallbacks}
			 cards={this.props.cards.filter((card)=>card.status==="todo")}/>
			
			<List id = 'in-progress' title = "IN PROGRESS" taskCallbacks={this.props.taskCallbacks}
			cardCallbacks = {this.props.cardCallbacks}
			 cards={this.props.cards.filter((card)=>card.status=="in-progress")}/>
			<List id = 'done' title = "DONE" taskCallbacks={this.props.taskCallbacks}
			cardCallbacks = {this.props.cardCallbacks}
			 cards={this.props.cards.filter((card)=>card.status=="done")}/>
			 {cardModal}
			</div>
		);
	}
}
export default DragDropContext(HTML5Backend)(KanbanBoard);