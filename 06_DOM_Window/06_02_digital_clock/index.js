const digitalClock = setInterval(() => {
  const dt = new Date();
  console.log(`${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}`);
}, 1000);

// clearInterval(digitalClock)
