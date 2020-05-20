import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import {StyledCard,StyledTextarea} from './StyledHorizontalList';
import {Draggable} from "react-beautiful-dnd";
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import {editCard,deleteCard} from '../../redux/actions/dispatchActions';
import {connect} from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';

class HorizontalList extends React.Component {
  state = {
    text: '',
    clicked: false
  }

  onDeleteCard = (e) => {
    e.stopPropagation();
    this.props.deleteCard(this.props.listID,this.props.id);
  }

  onClicked = () => {
    console.log("open")
    this.setState({clicked: true, text: this.props.text})
  }

  onClickedCancell = (e) => {
    e.stopPropagation();
    this.setState({clicked: false})
  }

  onTextChange = (e) => {
    console.log(e.target.value)
    this.setState({text: e.target.value})
  }

  onEditDone = (e) => {
    e.stopPropagation();
    this.props.editCard(this.props.listID,this.props.id,this.state.text);
    this.setState({clicked: false})
  }

  render() {
    console.log(this.props.id);
    console.log(this.props.listID);
    return(
      <Draggable draggableId={String(this.props.id)} index = {this.props.index}>
      {provided => (
        <StyledCard onClick={this.onClicked} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
          <Card>
            <CardContent>
              <Typography gutterBottom>
                <React.Fragment>
                {
                  this.state.clicked ? (
                    <StyledTextarea  onChange = {this.onTextChange} value = {this.state.text} autoFocus>
                      {this.state.text}
                    </StyledTextarea>
                  ) : this.props.text
                }
                </React.Fragment>
              {
                this.state.clicked ? (
                  <React.Fragment>
                  <IconButton onMouseDown={this.onEditDone} size = "small" aria-label="Done">
                    <DoneIcon />
                  </IconButton>
                  <IconButton onMouseDown={this.onClickedCancell} size = "small" aria-label="Cancel">
                    <ClearIcon />
                  </IconButton>
                  <IconButton onMouseDown={this.onDeleteCard} aria-label="Delete" size = "small">
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                  </React.Fragment>
                ) : null
              }
              </Typography>
            </CardContent>
          </Card>
        </StyledCard>
      )}
      </Draggable>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editCard: (listID,cardID,text) => dispatch(editCard(listID,cardID,text)),
    deleteCard: (listID,cardID) => dispatch(deleteCard(listID,cardID))
  }
}

export default connect(null,mapDispatchToProps)(HorizontalList);
