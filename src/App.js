import React from 'react';
import VerticalList from './components/VerticalList/VerticalList';
import {connect} from "react-redux";
import {StyledDiv} from "./StyledApp";
import AddButton from './components/AddButton/AddButton';
import {DragDropContext} from 'react-beautiful-dnd';
import {reArr} from './redux/actions/dispatchActions';
import './App.css';

class App extends React.Component {

  onDragEnd = (res) => {
    const {destination,source,draggableId} = res;

    if(!destination) {
      return ;
    }

    this.props.reArr(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
    )

  }

  render() {
    const {verticalListReducer} = this.props;
    return (
      <DragDropContext onDragEnd = {this.onDragEnd}>
        <h1>Welcome Board</h1>
        <StyledDiv>
        {verticalListReducer.map(ele => <VerticalList id={ele.id} key={ele.id} title={ele.title} cards={ele.cards}/>)}
        <AddButton list/>
        </StyledDiv>
      </DragDropContext>
    );
  }
}

const mapStateToProps = (state) => ({
  verticalListReducer: state.verticalListReducer
})

const mapDispatchToProps = (dispatch) => {
  return {
    reArr: (
      droppableIDS,
      droppableIDE,
      droppableIndexS,
      droppableIndexE
    ) => dispatch(reArr(
      droppableIDS,
      droppableIDE,
      droppableIndexS,
      droppableIndexE
    )),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
