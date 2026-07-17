export async function getMeals() {
  const res = await fetch("http://localhost:3000/meals");
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch all meals!");
  }
  return data;
}

export async function addMealOrder(formData){
  //implement add order meal here
  //function to checkout
}