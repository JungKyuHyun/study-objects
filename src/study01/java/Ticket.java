package study01.java;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

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

  public Bag(long amount) {
    this(null, amount);
  }

  public Bag(Invitation invitation, long amount) {
    this.invitation = invitation;
    this.amount = amount;
  }

  public boolean hasInvitation() {
    return this.invitation != null;
  }

  public boolean hasTicket() {
    return this.ticket != null;
  }

  public void setTicket(Ticket ticket) {
    this.ticket = ticket;
  }

  public void minusAmount(Long number) {
    this.amount -= amount;
  }

  public void plusAmount(Long number) {
    this.amount += amount;
  }
}

// 관람객
class Audience {
  private Bag bag;

  public Audience(Bag bag) {
    this.bag = bag;
  }

  public Bag getBag() {
    return bag;
  }
}

// 매표소
class TicketOffice {
  private Long amount;
  private List<Ticket> tickets = new ArrayList<>();

  public TicketOffice(Long amount, Ticket...tickets) {
    this.amount = amount;
    this.tickets.addAll(Arrays.asList(tickets));
  }

  public Ticket getTicket() {
    return tickets.remove(0);
  }

  public void minusAmount(Long amount) {
    this.amount -= amount;
  }

  public void plusAmount(Long amount) {
    this.amount += amount;
  }
}

// 판매원
class TicketSeller {
  private TicketOffice ticketOffice;

  public TicketSeller(TicketOffice ticketOffice) {
    this.ticketOffice = ticketOffice;
  }

  public TicketOffice getTicketOffice() {
    return ticketOffice;
  }
}

// 소극장
class Theater {
  private TicketSeller ticketSeller;

  public Theater(TicketSeller ticketSeller){
    this.ticketSeller = ticketSeller;
  }

  public void enter(Audience audience) {
    if(audience.getBag().hasInvitation()) {
      Ticket ticket = ticketSeller.getTicketOffice().getTicket();
      audience.getBag().setTicket(ticket);
    } else {
      Ticket ticket = ticketSeller.getTicketOffice().getTicket();
      audience.getBag().minusAmount(ticket.getFee());
      ticketSeller.getTicketOffice().plusAmount(ticket.getFee());
      audience.getBag().setTicket(ticket);
    }
  }
}