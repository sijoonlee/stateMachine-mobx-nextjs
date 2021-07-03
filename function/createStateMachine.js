
//import { types } from "mobx-state-tree"
import { observable, flow } from 'mobx'



const scenario = {
    start : {
        onEvent: function(userInput, context){
            console.log("start event")
            if(userInput == "perfect") {context.score = 100}
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
    context : {
        score: 0,
        pass: false,
        justStart: true,
    }
}


// Define a couple models
const self = observable({
    state: "start",
    scenario:scenario,
    start(){
        self.setState("start")
    },
    setState(newState){
        self.state = newState
    },
    onEvent(event){
        self.scenario[self.state].onEvent(event.value, self.scenario.context )
        self.goNext()
    },
    goNext(){
        self.setState(self.scenario[self.state].next)
    }
})

export default self