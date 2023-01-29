import mapURL from "./images/map.jpg";

export default function pageLoad() {
  const contactDiv = document.createElement("div");
  // address div
  contactDiv.appendChild(createAddrDOM());
  // location
  contactDiv.appendChild(createLocationDOM());
  // opening
//   contactDiv.appendChild(createOpeningDOM());
  // Career Opportunities
//   contactDiv.appendChild(createOpportunityDOM());

  contactDiv.classList.add("contact");
  contactDiv.classList.add("main");
  return contactDiv;
}

function createOpportunityDOM() {
  const title = document.createElement("h3");
  title.textContent = "Career Opportunities:";
  const detail = document.createElement("p");
  detail.textContent =
    "For enquiries on job vacancies, reach us at hr at kaigarden.com.sg";

  const opportunityDiv = document.createElement("div");
  opportunityDiv.appendChild(title);
  opportunityDiv.appendChild(detail);
  return opportunityDiv;
}

function createOpeningDOM() {
  const openTitle = document.createElement("h3");
  openTitle.textContent = "Opening Hours:";

  const workdayTitle = document.createElement("h4");
  workdayTitle.textContent = "Mondays to Fridays: ";
  const workdayAM = document.createElement("p");
  workdayAM.textContent = "11.30am to 3.30pm (last order at 2.30pm)";
  const workdayPM = document.createElement("p");
  workdayPM.textContent = "6.00pm to 11.00pm (last order at 10.00pm)";

  const holidayTitle = document.createElement("h4");
  holidayTitle.textContent = "On Saturdays, Sundays and public holidays: ";
  const holidayAM = document.createElement("p");
  holidayAM.textContent = "11.00am to 4.00pm (last order 3.30pm)";
  const holidayPM = document.createElement("p");
  holidayPM.textContent = "6.00pm to 11.00pm (last order at 10.00pm)";

  const openDiv = document.createElement("div");
  openDiv.appendChild(openTitle);
  openDiv.appendChild(workdayTitle);
  openDiv.appendChild(workdayAM);
  openDiv.appendChild(workdayPM);
  openDiv.appendChild(holidayTitle);
  openDiv.appendChild(holidayAM);
  openDiv.appendChild(holidayPM);
  return openDiv;
}
function createLocationDOM() {
  const locationTitle = document.createElement("h3");
  locationTitle.textContent = "Location:";
  const locationImg = document.createElement("img");
  locationImg.src = mapURL;

  const byCar = document.createElement("h4");
  byCar.textContent = "Traveling by Car";
  const byCarDetail = document.createElement("p");
  byCarDetail.textContent =
    "Park at Marina Square B1 Red Zone and take lift to Level 3. Restaurant is on the right.";

  const byTrain = document.createElement("h4");
  byTrain.textContent = "Traveling by Train";
  const byTrainDetail = document.createElement("p");
  byTrainDetail.textContent =
    "The nearest MRT stations are Esplanade and City Hall Station.";

  const locationDiv = document.createElement("div");
  locationDiv.appendChild(locationTitle);
  locationDiv.appendChild(locationImg);
  locationDiv.appendChild(byCar);
  locationDiv.appendChild(byCarDetail);
  locationDiv.appendChild(byTrain);
  locationDiv.appendChild(byTrainDetail);
  return locationDiv;
}

function createAddrDOM() {
  const addrTitle = document.createElement("h3");
  addrTitle.textContent = "Address:";
  const addrDetail = document.createElement("p");
  addrDetail.textContent =
    "6 Raffles Boulevard, #03-128A/128B, Marina Square, Singapore 039594";
  const phoneTitle = document.createElement("h4");
  phoneTitle.textContent = "Marina Square Hotline: ";
  const phone = document.createElement("p");
  phone.textContent = "+65 6250 4826";

  const addrDiv = document.createElement("div");
  addrDiv.appendChild(addrTitle);
  addrDiv.appendChild(addrDetail);
  addrDiv.appendChild(phoneTitle);
  addrDiv.appendChild(phone);
  addrDiv.appendChild(createOpeningDOM())
  addrDiv.appendChild(createOpportunityDOM())
  return addrDiv;
}
