export async function getVans() {
  const res = await fetch("/api/vans");
  //  create a random chance of an error
  if (!res.ok) {
    throw {
      message: "Failed to fetch all vans.",
      statusText: res.statusText,
      status: res.status
    };
  }
  const data = await res.json();
  return data.vans;
}
