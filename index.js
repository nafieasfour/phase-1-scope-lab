var customerName = "bob";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}
function setBestCustomer() {
   bestCustomer = "not bob";
}
function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
    return bestCustomer;
}

const leastFavoriteCustomer = "Alice";

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "Bob"; 
}