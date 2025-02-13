module.exports = [
    "strapi::cors",
    {
      name: "strapi::cors",
      config: {
        enabled: true,
        headers: "*",
        origin: ["http://localhost:5173", "https://your-frontend.com"], // Adjust as needed
      },
    },
  ];
  