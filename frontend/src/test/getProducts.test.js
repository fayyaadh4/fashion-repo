//jest unit testing
//testing for success
test("testing successful api GET request using status code", async () => {
  const api_call = await fetch("http://localhost:8000/products");
  const res = await api_call;
  //console.log(res);
  expect(res.status).toBe(200);
});

//testing for error
test("testing unsuccessful fetch request due to incorrect API", async () => {
  const api_call = await fetch("http://localhost:8000/productss");
  const res = await api_call;
 // console.log(res);
  expect(res.status).toBe(404);
});
