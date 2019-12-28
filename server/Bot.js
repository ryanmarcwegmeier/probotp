
var robot = require('robotjs')

class Bot {
    constructor(){
        this.robot = robot
    }

    getPosition(){
        return this.robot.getMousePos()
    }
}

module.exports = Bot;