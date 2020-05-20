import {actions} from './actions';

export const addVerticalList = (title) => {
  return {
    type: actions.ADD_VERTICAL_LIST,
    payload:{
      title: title
    }
  }
}

export const deleteCard = (id) => {
  return {
    type: actions.DELETE_LIST,
    payload: {
      id: id
    }
  }
}

export const addHorizontalCard = (id,title) => {
  return {
    type: actions.ADD_HORIZONTAL_CARD,
    payload: {
      title: title,
      id: id
    }
  }
}

export const reArr = (
  droppableIDS,
  droppableIDE,
  droppableIndexS,
  droppableIndexE,
  draggableId
) => {
  return {
    type: actions.DRAG_SUCCESS,
    payload: {
      droppableIDS,
      droppableIDE,
      droppableIndexS,
      droppableIndexE,
      draggableId
    }
  }
}

export const editCard = (listID,cardID,text) => {
  return {
    type: actions.EDIT_CARD,
    payload: {
      listID,
      cardID,
      text
    }
  }
}
