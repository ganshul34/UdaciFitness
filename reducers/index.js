import { RECIEVE_ENTRIES ,ADD_ENTRY } from '../actions'

function enteries ( state = {},action)
{
    switch(action.type) {
       case RECIEVE_ENTRIES:
       return{
            ...state,
            ...action.entries
       }
       case  ADD_ENTRY:
       return {
           ...state,
           ...action.entry

       }
       default: 
           return state
       
    }
    
}

export default enteries