async function createUser() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Daniel",
        email: "daniel@test.com",
      }),
    }
  );

  const data = await res.json();
  return data;
}

const newUser = await createUser();
console.log(newUser);
