async function RoutesIndex(route, options) {
  route.get("/", async (req, res) => {
    return {
      hello: "World",
    };
  });

  route.post("/", async (req, res) => {
    return req.body.name;
  });

  route.put("/:id", async (req, res) => {
    return req.params.id;
  });
}

export default RoutesIndex;
