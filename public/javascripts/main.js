// toggle visibility for destinations
$(`#newDestinationButton`).on("click", function () {
  $(`#newDestination`).hasClass("show") ? $(`#newDestination`).removeClass("show") : $(`#newDestination`).addClass("show");
});
$(`#newTicketButton`).on("click", function () {
  $(`#newTicket`).hasClass("show") ? $(`#newTicket`).removeClass("show") : $(`#newTicket`).addClass("show");
});