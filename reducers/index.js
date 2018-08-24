import { RECIEVE_ENTRIES ,ADD_ENTRY } from '../actions/index'
import AddEntry from '../components/AddEntry';

function enteries ( state = {},enteries)
{
    switch(actions.type) {
       case RECIEVE_ENTRIES:
       return{
            ...state,
            ...actions.enteries
       }
       case  ADD_ENTRY:
       return {
           ...state,
           ...action.entry

       }
    }
    
}