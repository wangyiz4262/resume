import {createStore} from 'redux';

const languageReducer = (state, action) => {
        switch (action.type) {
        case 'CHINESE':
            return 'cn';
        default:
            return 'en';
        }
    }
    , languageStore = createStore(languageReducer);

export {languageStore};