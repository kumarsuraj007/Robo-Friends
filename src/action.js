import {CHANGE_SEARCHFIELD} from './constant'

export default setSearchField = (text) => (
    {
        type: CHANGE_SEARCHFIELD,
        payload: text,
    }
)