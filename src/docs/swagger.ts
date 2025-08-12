import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    version: "v.0.0.1",
    title: "Dokumentasi API Ticket",
    description: "Dokumentasi API Ticket",
  },

  servers: [
    {
      url: "http://localhost:3000/api",
      description: "Local Server",
    },
    {
      url: "https://back-end-ticket.vercel.app/api",
      description: "Deploy Server",
    },
  ],

  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },

    schemas: {
      LoginRequest: {
        identifier: "atillasilva",
        password: "1234",
      },
    },
  },
};

const outputFile = "./swagger_output.json";

const endpointsFile = ["../routes/api.ts"];

swaggerAutogen({ open: "3.0.0" })(outputFile, endpointsFile, doc);
