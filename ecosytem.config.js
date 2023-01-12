module.exports = [
  (module.exports = {
    apps: [
      {
        name: "nextapp",
        script: "npm",
        args: "start",
        env: {
          NODE_ENV: "production",
        },
      },
    ],
  }),
];
