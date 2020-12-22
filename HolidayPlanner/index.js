const activities = [
  {
    id: 1,
    description: "skiing",
    duration: 60,
    price: 50,
  },
  {
    id: 2,
    description: "cooking nice meals",
    duration: 120,
    price: 100,
  },
  {
    id: 3,
    description: "Swimming in the ocean",
    duration: 120,
    price: 120,
  },
  {
    id: 4,
    description: "Picking up precious stones",
    duration: 180,
    price: 180,
  },
  {
    id: 5,
    description: "swimming with dolphins",
    duration: 240,
    price: 250,
  },
  {
    id: 6,
    description: "24hour pass go kart",
    duration: 240,
    price: 300,
  },
  {
    id: 7,
    description: "Driving a Ferrari",
    duration: 180,
    price: 200,
  },
];

const bestPlan = (days, budget, timeForActivities) => {
  // Offer to client
  let offer = [];

  // Define how many minutes are available for the entire holiday that can be used for activites
  const timeAvailable = days * (timeForActivities * 60);

  console.log("Time for activities: " + timeAvailable + " minutes. With a budget of " + budget);

  // Excluding activities with price over the budget
  const arrayFiltered = activities.filter((activity) => {
    return activity.price < budget;
  });

  console.log("Activities within the budget:", arrayFiltered);

  // Sorting array from lower to higher duration
  arrayFiltered.sort((a, b) => {
    if (a.duration === b.duration) {
      // Sorting from lower to higher price if 2 ore mor activities have same duration
      return a.price - b.price;
    }
    return a.duration > b.duration ? 1 : -1;
  });

  console.log("Sorting list by duration:", arrayFiltered);

  let totalPrice = 0;
  let totalActDuration = 0;

  // Looping though the filtered array, add activities to offer
  for (let activity of arrayFiltered) {
    totalPrice += activity.price;
    totalActDuration += activity.duration;
    if (totalPrice > budget || totalActDuration > timeAvailable) {
      console.log("Budget required: " + (totalPrice - activity.price));
      console.log("Total activities time: " + (totalActDuration - activity.duration));
      console.log("Final Results details: ", offer);
      return;
    }
    offer.push(activity.description);
  }
};

// Declaring Group budget and available days
const days = 2;
const budget = 400;
const timeForActivities = 4; // In hours per days

bestPlan(days, budget, timeForActivities);
