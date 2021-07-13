
//import { types } from "mobx-state-tree"
import { observable, flow } from 'mobx'
import Question from '../components/Question'

const createContext = (pageMap, startPageId) => {
    const self = observable({
        activePage: pageMap[startPageId],
        valueStore: {
            email: null,
            firstName: null,
            lastName: null,
            street: null,
            state: null,
        },
        savedState: "READY",
        submit(){
            self.savedState = "VALUE_SAVED"
            console.log("submit!", self.valueStore)
            self.activePage = pageMap["PageTwo"]
        },
        updateValueStore(id, value){
            if(self.valueStore[id] !== value){
                self.valueStore[id] = value,
                self.savedState = "VALUE_CHANGED"
            }
        },
    })
    return self
}

export default createContext;
