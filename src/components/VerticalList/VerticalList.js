import React from 'react';
import {StyledDiv,StyledDivScroll,StyledDiv1,InnerDiv2} from './StyledVerticalList';
import HorizontalList from '../HorizontalList/HorizontalList';
import AddButton from '../AddButton/AddButton';
import {Droppable} from 'react-beautiful-dnd';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import {connect} from 'react-redux';
import {deleteCard} from '../../redux/actions/dispatchActions';

class VerticalList extends React.Component {

onDelete = () => {
  this.props.deleteList(this.props.id);
}

render() {
  return(
    <Droppable droppableId={String(this.props.id)}>
    {provided => (
      <StyledDiv {...provided.droppableProps}  ref = {provided.innerRef}>
      <StyledDiv1>
        <h2>{this.props.title}</h2>
        <InnerDiv2>
          <IconButton onMouseDown={this.onDelete} size = "small" aria-label="Cancel">
            <ClearIcon />
          </IconButton>
        </InnerDiv2>
      </StyledDiv1>
      <StyledDivScroll>
      {
        this.props.cards.map((ele,i) => <HorizontalList listID={this.props.id} index={i} id={ele.id} key={ele.id} text={ele.text}/>)
      }
      {provided.placeholder}
      </StyledDivScroll>
      <AddButton id={this.props.id}/>
      </StyledDiv>
    )}
    </Droppable>
  )
}
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteList: (id) => dispatch(deleteCard(id)),
  }
}

export default connect(null,mapDispatchToProps)(VerticalList);
