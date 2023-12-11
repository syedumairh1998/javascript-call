const person  = {
    name:"Syed Umair Hussain",
    callMyName: function(){
        return this.name
    }
}

const person2 = {
    name:"Syed Ammar Hussain"
}

console.log(person.callMyName.call(person2))
