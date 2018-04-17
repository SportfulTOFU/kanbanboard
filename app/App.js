// import React from 'react';
// import {
// 	render
// } from 'react-dom';
// import {
// 	Router,
// 	Route,
// 	browserHistory
// } from 'react-router'
// import createHistory from 'history/lib/createBrowserHistory'
// import KanbanBoard from './KanbanBoard'
// import KanbanBoardContainer from './KanbanBoardContainer'
// import EditCard from './EditCard'
// import NewCard from './NewCard'

// let cardsList = [{
// 	id: 1,
// 	title: "read the book",
// 	description: "i should read the **whole** book",
// 	color: '#BD8D31',
// 	status: "in-progress",
// 	tasks: []

// }, {
// 	id: 2,
// 	title: "write some code",
// 	description: "code along with samples in here",
// 	color: '#3A7E28',
// 	status: "todo",
// 	tasks: [{
// 		id: 1,
// 		name: "contactList Example",
// 		done: true
// 	}, {
// 		id: 2,
// 		name: "kanban example",
// 		done: false
// 	}, {
// 		id: 3,
// 		name: "my own example",
// 		done: false
// 	}]
// }];


// const routes = (
// 	<Router history={browserHistory}>
// 	<Route  component={KanbanBoardContainer}>
// 	<Route path="/" component={KanbanBoard}>
// 	<Route path="new" component={NewCard}/>\
// 	<Route path="edit/:card_id" component={EditCard}/>
// 	</Route>
// 	</Route>
// 	</Router>
// );
// render(routes, document.getElementById('root'));
// "history": "^3.1.0",
// "react-history": "^3.2.0",
// "react-router": "^3.0.5",

import React from 'react';
import {
	render
} from 'react-dom';
import {
	Router,
	Route
} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import KanbanBoardContainer from './KanbanBoardContainer';
import KanbanBoard from './KanbanBoard';
import EditCard from './EditCard';
import NewCard from './NewCard';

render((
	<Router history={createBrowserHistory()}>
    <Route component={KanbanBoardContainer}>
      <Route path="/" component={KanbanBoard}>
        <Route path="new" component={NewCard} />
        <Route path="edit/:card_id" component={EditCard} />
      </Route>
    </Route>
  </Router>
), document.getElementById('root'));