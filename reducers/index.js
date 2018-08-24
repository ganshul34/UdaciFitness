import { RECIEVE_ENTRIES ,ADD_ENTRY } from '../actions'

function enteries ( state = {},enteries)
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
    }
    
}

export default enteries