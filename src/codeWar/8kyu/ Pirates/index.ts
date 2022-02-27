type Cannons = {"Mike": string, "Joe": string, "Johnson": string, "Peter": string}

export const cannonsReadyPrimary = (gunners: Cannons) => {
  const arr = Object.values(gunners);
  if (arr.includes("nay")) {
    return "Shiver me timbers!";
  } else {
    return "Fire!";
  }
};

// 別解
export const cannonsReadySecondary = (gunners: Cannons) => {
  return Object.values(gunners).some(m => m === "nay") ? "Shiver me timbers!" : "Fire!";
};
