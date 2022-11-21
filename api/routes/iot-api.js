import { excuteQuery } from "../db.js";

async function RoutesIoT(route, options) {
  route.get("/api/iot/ptkp", async (req, res) => {
    try {
      let data = await excuteQuery("SELECT * FROM ptkp_sensor ORDER BY id DESC", []);
      return res.code(200).send(data);
    } catch (err) {
      return res.code(500).send(err);
    }
  });

  route.get("/api/iot/ptkp/last", async (req, res) => {
    try {
      let data = await excuteQuery("SELECT * FROM ptkp_sensor ORDER BY id DESC LIMIT 1", []);
      return res.code(200).send({
        ph: data[0].ph,
        tss: data[0].tss,
        debit:data[0].debit,
        cod: data[0].cod,
        bod: data[0].bod
      });
    } catch (err) {
      return res.code(500).send(err);
    }
  });
}

export default RoutesIoT;
