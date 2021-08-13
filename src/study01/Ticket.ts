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

  /**
   * constructor 오버라이딩의 경우 타입을 오버라이딩하면서 내부에서 조건문으로 분기할 수 있으나, 둘 다 해본 결과 이 방법이 조금 더 읽기 좋은것 같아 분리
   */
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
