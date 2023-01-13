module.exports = {
  apps: [
    {
      name: "nextpublic",
      script: "npm",
      args: "start",
      //   instances: 4,
      autorestart: true,
      watch: true,
      //   max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: 3002,
      },
      env_production: {
        NODE_ENV: "production",
        BASE_URL: "https://nodepublic.emfi.uk",
      },
      error_file: "logs/err.log",
      out_file: "logs/out.log",
      log_date_format: "YYYY-MM-DD HH:mm Z",
    },
  ],
};
