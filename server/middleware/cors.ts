export default eventHandler((event) => {
  const didHandleCors = handleCors(event, {
    origin: "*",
    preflight: {
      statusCode: 204,
    },
    methods: "*",
  });

  console.log("didHandleCors", didHandleCors);

  if (didHandleCors) {
    return;
  }
  
});
