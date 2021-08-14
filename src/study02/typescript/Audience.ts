// 관람객
import { Bag } from "./Bag";

export class Audience {
  private bag: Bag;

  public Audience(bag: Bag) {
    this.bag = bag;
  }

  public getBag() {
    return this.bag;
  }
}