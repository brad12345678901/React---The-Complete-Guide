export async function getMeals() {
  const res = await fetch("http://localhost:3000/meals");
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch all meals!");
  }
  return data;
}

export async function addMealOrder(signal, payload) {
  try {
    const res = await fetch("http://localhost:3000/orders", {
      method: "POST",
      signal: signal,
      body: JSON.stringify({ order: payload }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error("Failed to test!");
    }
    return { data: data, success: true };
  } catch (err) {
    return { error: err.message || "Something gone wrong", success: false };
  }
}

export async function testFunction(signal) {
  try {
    const res = await fetch("http://localhost:3000/test", {
      signal: signal,
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error("Failed to test!");
    }
    return { data: data, success: true };
  } catch (err) {
    return { error: err.message || "Something gone wrong", success: false };
  }
}
