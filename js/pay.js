// JavaScript to toggle between sections
function showOtherPaymentOptions() {
  document.getElementById("card-payment-section").classList.add("hidden");
  document.getElementById("other-payment-section").classList.remove("hidden");
}

function showCardPayment() {
  document.getElementById("other-payment-section").classList.add("hidden");
  document.getElementById("card-payment-section").classList.remove("hidden");
}
