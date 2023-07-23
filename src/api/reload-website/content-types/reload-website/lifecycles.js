const axios = require("axios");
require("dotenv").config();

module.exports = {
  async afterUpdate(event) {
    try {
      const api = process.env.RELOAD_API;
      const triggerToken = process.env.TRIGGER_TOKEN;
      await axios.post(
        api,
        {
          ref: "main",
        },
        {
          headers: {
            Accept: "application/vnd.github+json",
            Authorization: `Bearer ${triggerToken}`,
            "X-GitHub-Api-Version": "2022-11-28",
            "Content-Type": "application/vnd.github+json",
          },
        }
      );
    } catch (e) {
      console.log("webhook =>", e);
    }
  },
};
