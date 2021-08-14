// 매표소
import { Ticket } from "./Ticket";

export class TicketOffice {
  private amount: number;
  private tickets: Array<Ticket> = [];

  constructor(amount: number = 0, ...tickets: Ticket[]) {
    this.amount = amount;
    this.tickets.push(...tickets);
  }

  public getTicket() {
    return this.tickets.shift();
  }

  public minusAmount(amount: number) {
    this.amount -= amount;
  }

  public plusAmount(amount: number) {
    this.amount += amount;
  }
}