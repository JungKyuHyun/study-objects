// 소극장
import { TicketSeller } from "./TicketSeller";
import { Audience } from "./Audience";

export class Theater {
  private ticketSeller: TicketSeller;

  constructor(ticketSeller: TicketSeller) {
    this.ticketSeller = ticketSeller;
  }

  enter(audience: Audience) {
    this.ticketSeller.sellTo(audience)
  }
}