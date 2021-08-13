// 초대장
class Invitation {
  private when: Date;
}

// 티켓
class Ticket {
  private fee: number;

  getFee() {
    return this.fee;
  }
}

// 관람객이 소지품을 보관할 가방
class Bag {
  private amount: number;
  private invitation: Invitation | null = null;
  private ticket: Ticket | null = null;

  constructor(
    invitation: Invitation | null = null,
    amount: number = 0,
    ticket: Ticket | null = null
  ) {
    this.invitation = invitation;
    this.amount = amount;
    this.ticket = ticket;
  }

  static AmountInstance(amount: number) {
    return new Bag(null, amount);
  }

  static InvitationAndAmountInstance(invitation: Invitation, amount: number) {
    return new Bag(invitation, amount);
  }

  hasInvitation() {
    return this.invitation !== null;
  }

  hasTicket() {
    return this.ticket !== null;
  }

  setTicket(ticket: Ticket) {
    this.ticket = ticket;
  }

  minusAmount(amount: number) {
    this.amount -= amount;
  }

  plusAmount(amount: number) {
    this.amount += amount;
  }
}
