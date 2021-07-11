
//import { types } from "mobx-state-tree"
import { observable, flow } from 'mobx'



const scenario = observable({
    start : {
        onEvent: function(userInput){
            console.log("start event", userInput)
            scenario.modelStore.score = userInput
        },
        next: "question1",
    },
    question1: {
        onEvent: function(userInput, context){
            console.log("question 1 event")
        },
        next: "question2"
    },
    question2: {
        onEvent: function(userInput, context){
            console.log("question 2 event")
        },
        next: "start"
    },
    modelStore:{
        name: null,
        email: null,
    },
    states:{
        save: "READY",
    },
})


const self = observable({
    state: "start",
    scenario:scenario,
    start(){
        self.setState("start")
       
    },
    setState(newState){
        self.state = newState
        console.log("!!!",self.scenario.modelStore.score)
    },
    onEvent(event){
        self.scenario[self.state].onEvent(event.target.value, self.scenario.context )
        self.goNext()
    },
    goNext(){
        self.setState(self.scenario[self.state].next)
    }
})

export default self