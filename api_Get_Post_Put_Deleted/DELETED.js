async function deleteUser(id) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    {
      method: "DELETE",
    }
  );

  return res.ok;
}

const success = await deleteUser(1);
console.log(success); // true / false
