import React from 'react';
import Icon from '@material-ui/core/Icon';
import {StyledDiv,StyledTextarea,StyledCard,StyledIcon,StyledDiv1} from './StyledAddButton';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';

import {addVerticalList,addHorizontalCard} from '../../redux/actions/dispatchActions';

class AddButton extends React.Component {

  state = {
    form: false,
    text: ''
  }

  openForm = () => {
    this.setState({form: true});
  }

  closeForm = (event) => {
    this.setState({form:  false})
  }

  handleChange = (event) => {
    this.setState({text:event.target.value})
  }

  returnButton = () => {
    const {list} = this.props;
    const text = list ? "Add List" : "Add card";
    return (
      <StyledDiv list={this.props.list} onClick={this.openForm}>
        <Icon>add</Icon>
        <p>{text}</p>
      </StyledDiv>
    )
  }

  handleAddVerticalList = () => {
    const {verticalList} = this.props;
    const {text} = this.state;
    if(text) {
      this.setState({text: ''});
      verticalList(text);
    }
    return ;
  }

  handleAddHorizontalCard = () => {
    const {horizontalCard,id} = this.props;
    const {text} = this.state;
    console.log(id);
    if(text) {
      this.setState({text: ''});
      horizontalCard(id,text);
    }
    return ;
  }

  renderForm = () => {
    const {list} = this.props;
    const placeholder = list ? "Enter list title" : "Enter Card title";
    const buttonTitle = list ? "Add List" : "Add Card";

    return (
      <div>
        <StyledCard>
          <StyledTextarea
            placeholder={placeholder}
            autoFocus
            value={this.state.text}
            onChange={this.handleChange}
          />
        </StyledCard>
        <StyledDiv1>
          <Button onMouseDown={list ? this.handleAddVerticalList : this.handleAddHorizontalCard} variant="outlined" >{buttonTitle}{" "}</Button>
          <StyledIcon onClick={this.closeForm}>close</StyledIcon>
        </StyledDiv1>
      </div>
    );
  }

  render() {
    return this.state.form ? this.renderForm() : this.returnButton();
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    verticalList: (title) => dispatch(addVerticalList(title)),
    horizontalCard: (id,title) => dispatch(addHorizontalCard(id,title))
  }
}

export default connect(null,mapDispatchToProps)(AddButton);
