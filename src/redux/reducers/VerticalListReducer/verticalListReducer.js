import {actions} from '../../actions/actions';

let cardNo = 11;
let listNo = 2;
const defaultState = [
  {
    title: "Design",
    id: `list-0`,
    cards: [
      {
        id: `card-0`,
        text: "Ideas"
      },
      {
        id: `card-1`,
        text: "Kick off meeting"
      }
    ],
  },
  {
    title: "Todo",
    id: `list-1`,
    cards: [
      {
        id: `card-2`,
        text: "Meeting"
      },
      {
        id: `card-3`,
        text: "SCRUM"
      },
      {
        id: `card-4`,
        text: "Coffee"
      },
      {
        id: `card-5`,
        text: "food"
      },
      {
        id: `card-6`,
        text: "chill"
      },
      {
        id: `card-7`,
        text: "travel"
      },
      {
        id: `card-8`,
        text: "bug fix"
      },
      {
        id: `card-9`,
        text: "repeat"
      },
      {
        id: `card-10`,
        text: ":)"
      }
    ],
  }
]

const verticalListReducer = (state=defaultState,action) => {
  switch(action.type) {
    case actions.ADD_VERTICAL_LIST:
      const temp = {
        title: action.payload.title,
        cards: [],
        id: `list-${listNo}`
      }
      listNo += 1;
      return [...state,temp];

    case actions.DELETE_CARD:
        console.log(action.payload);
        const tempState1 = [];

        state.forEach(ele => {
          if(ele.id !== action.payload.listID) {
            tempState1.push(ele);
          } else {
            let x = [];
            ele.cards.forEach(e => {
              if(e.id !== action.payload.cardID) {
                x.push(e);
              }
            })
            tempState1.push({...ele,cards:x});
          }
        })
        return tempState1;
    case actions.EDIT_CARD:
      const tempState = state.map(ele => {
        if(ele.id === action.payload.listID) {
          let tempData = ele.cards.map(card => {
            if(card.id === action.payload.cardID) {
              return ({...card,text: action.payload.text});
            } else {
              return card;
            }
          })
          return {...ele, cards: tempData};
        }
        else {
          return ele;
        }
      });
      return tempState;
    case actions.DELETE_LIST:
    console.log("here");
      let newArr = [];
      let removeIndex = state.forEach(ele => {
        if(ele.id !== action.payload.id) {
          newArr.push(ele);
        }
      })
      return newArr;
    case actions.ADD_HORIZONTAL_CARD:
      // console.log(action.payload.id);
      const newState = state.map(ele => {
        if(ele.id === action.payload.id) {
          return {
            ...ele,
            cards: [...ele.cards,{id: `card-${cardNo}`, text: action.payload.title}],
          }
        }
        else {
          return ele
        }
      })
      cardNo+=1;
      console.log(newState);
      return newState;
    case actions.DRAG_SUCCESS:
    {
      const temp1 = [...state];
      const {
        droppableIDS,
        droppableIDE,
        droppableIndexS,
        droppableIndexE
      } = action.payload;

      console.log(droppableIDS,
      droppableIDE,
      droppableIndexS,
      droppableIndexE);

      if(droppableIDS === droppableIDE) {
        const list = state.find(list => droppableIDS === list.id);
        const card = list.cards.splice(droppableIndexS,1);
        list.cards.splice(droppableIndexE,0, ...card);
      }

      if(droppableIDS !== droppableIDE) {
        const list = state.find(ele => droppableIDS === ele.id);
        const card = list.cards.splice(droppableIndexS,1);
        const dest = state.find(ele => droppableIDE === ele.id);
        dest.cards.splice(droppableIndexE,0,...card);
      }

      return temp1;
    }
    default:
      return state;
  }
}


export default verticalListReducer;
