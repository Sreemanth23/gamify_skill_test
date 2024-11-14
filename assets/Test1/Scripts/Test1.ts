import { _decorator, Component, director, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("Test1")
export class Test1 extends Component {
  radius: number = 200;
  angle: number = 0;
  speed: number = 0.02;
  rotationOn: boolean = false;

  click() {
    this.rotationOn = true;
  }
  update(dt) {
    if (this.rotationOn) {
      this.angle += this.speed;
      if (this.angle >= 360) this.angle = 0;
      const x = this.radius * Math.cos(this.angle);
      const y = this.radius * Math.sin(this.angle);
      this.node.setPosition(x, y, 0);
    }
  }
  backButton() {
    director.loadScene("Main");
  }
}
