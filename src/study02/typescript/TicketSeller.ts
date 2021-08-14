// 판매원
import { TicketOffice } from "./TicketOffice";
import { Audience } from "./Audience";

export class TicketSeller {
  private ticketOffice: TicketOffice;

  constructor(ticketOffice: TicketOffice) {
    this.ticketOffice = ticketOffice;
  }

  public sellTo(audience: Audience) {
    if (audience.getBag().hasInvitation()) {
      const ticket = this.ticketOffice.getTicket();
      ticket !== undefined && audience.getBag().setTicket(ticket);
    } else {
      const ticket = this.ticketOffice.getTicket();
      if (ticket !== undefined) {
        audience.getBag().minusAmount(ticket.getFee());
        this.ticketOffice.plusAmount(ticket.getFee());
        audience.getBag().setTicket(ticket);
      }
    }
  }
}