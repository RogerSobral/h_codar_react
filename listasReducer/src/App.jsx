import { useReducer } from "react"
import { ListNames } from "./components/ListNames"
import { RegisterNames } from "./components/RegisterNames"
import { SearchName } from "./components/SearchName"

const namesListCurrent=[
  {name:"Rogério"},
  {name:"Carlos"},
  {name:"Maria"}
]

const initialValue={
  list:namesListCurrent,
  searchName:"",
  t_fieldName:""
}

export const ACTIONS={
  LISTNAMES:"ListaName",
  SEARCHNAME:"SearName",
  T_FIELDNAME:"T_fiedName"
}

const reducer=((state,action)=>{
  switch(action.type){
    case ACTIONS.LISTNAMES:
     return {...state, list:[...state.list, action.payload]};
    case ACTIONS.SEARCHNAME:
      return { ...state, searchName: action.payload };
    case ACTIONS.T_FIELDNAME:
      return {...state,t_fieldName:action.payload}
    default:
      return state;
  }

})

function App() {

  const [state,dispatch]=useReducer(reducer,initialValue)

  return (
    <>
    <div>
      <RegisterNames text_field={state.t_fieldName} dispatch={dispatch} />
      <SearchName searchName={state.searchName} dispatch={dispatch} list={state.list} />
      <ListNames state={state.list}/>
    </div>
    </>
  )
}

export default App
