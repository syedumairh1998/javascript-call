const person  = {
    name:"Syed Umair Hussain",
    callMyName: function(nameArg){
        return nameArg
    }
}

const person2 = {
    name:"Syed Ammar Hussain"
}

console.log(person.callMyName.call(person2,'Shahzar Khan'))
