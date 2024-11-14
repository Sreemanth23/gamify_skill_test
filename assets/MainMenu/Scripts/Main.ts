import { _decorator, Component, director, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Main')
export class Main extends Component {
    test1Click(){
        director.loadScene("Test1")
    }
    test2Click(){
        director.loadScene("Test2")
    }
}


