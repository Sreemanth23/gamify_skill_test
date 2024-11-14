import { _decorator, Button, Color, Component, director, instantiate, Label, macro, Node, Prefab, Sprite } from "cc";
const { ccclass, property } = _decorator;

@ccclass("Test2")
export class Test2 extends Component {
  @property(Prefab)
  cell: Prefab = null;

  @property(Button)
  startButton: Button = null;

  count: number = 0;

  start() {
    for (let i = 0; i < 21; i++) {
      this.creatingCells();
    }
  }

  getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return new Color(r, g, b);
  }

  creatingCells() {
    this.count += 1;
    let cell = instantiate(this.cell);
    cell.parent = this.node;
    cell.children[0].getComponent(Label).string = this.count.toString();
    cell.getComponent(Sprite).color = this.getRandomColor();
  }

  buttonOn() {
    this.startButton.interactable = false;
    this.schedule(
      () => {
        let removedCell = this.node.children[0];
        removedCell.active = false;
        removedCell.parent = null;
        this.scheduleOnce(() => {
          this.count += 1;
          removedCell.parent = this.node;
          removedCell.children[0].getComponent(Label).string = this.count.toString();
          removedCell.active = true;
        }, 1);
      },0.5,macro.REPEAT_FOREVER,0.5);
    
  }
  backButton() {
    director.loadScene("Main");
  }
}
