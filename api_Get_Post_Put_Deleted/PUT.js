async function updateUser(id) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Daniel Updated",
      }),
    }
  );

  const data = await res.json();
  return data;
}

const updated = await updateUser(1);
console.log(updated);
