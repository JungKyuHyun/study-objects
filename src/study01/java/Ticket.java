package study01.java;
import java.time.LocalDateTime;

// 초대장
class Invitation {
  private LocalDateTime when;
}

// 티켓
class Ticket {
  private long fee;

  public Long getFee() {
    return fee;
  }
}

// 관람객이 소지품을 보관할 가방
class Bag {
  private long amount;
  private Invitation invitation;
  private Ticket ticket;

  Bag(long amount) {
    this(null, amount);
  }

  Bag(Invitation invitation, long amount) {
    this.invitation = invitation;
    this.amount = amount;
  }

  boolean hasInvitation() {
    return this.invitation != null;
  }

  boolean hasTicket() {
    return this.ticket != null;
  }

  void setTicket(Ticket ticket) {
    this.ticket = ticket;
  }

  void minusAmount(Long number) {
    this.amount -= amount;
  }

  void plusAmount(Long number) {
    this.amount += amount;
  }
}