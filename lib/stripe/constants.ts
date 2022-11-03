export const getPlanFromUsageLimit = (usageLimit: number) => {
  return PRO_TIERS.find((tier) => tier.quota === usageLimit)?.name || "Free";
};

export const PRO_TIERS = [
  {
    name: "Pro 10K",
    quota: 10000,
    price: {
      monthly: {
        amount: 9,
        priceIds: {
          test: "price_1LwXmuADnYKBkDPx234PZXkC",
          production: "price_1M02S6ADnYKBkDPxrnhnCCfA",
        },
      },
      yearly: {
        amount: 90,
        priceIds: {
          test: "price_1LwXmuADnYKBkDPx661PONOn",
          production: "price_1LwXgIADnYKBkDPxz7QU3ISq",
        },
      },
    },
  },
  {
    name: "Pro 25K",
    quota: 25000,
    price: {
      monthly: {
        amount: 19,
        priceIds: {
          test: "price_1LwXmMADnYKBkDPxPnWGwEZR",
          production: "price_1LwXhGADnYKBkDPxPtmmu9tV",
        },
      },
      yearly: {
        amount: 190,
        priceIds: {
          test: "price_1LwXmMADnYKBkDPxEWvDyPjd",
          production: "price_1M02Q6ADnYKBkDPxzCpVCjXw",
        },
      },
    },
  },
  {
    name: "Pro 50K",
    quota: 50000,
    price: {
      monthly: {
        amount: 29,
        priceIds: {
          test: "price_1LwXljADnYKBkDPxvWuc0Zkq",
          production: "price_1LwXi6ADnYKBkDPxiNtqBrlT",
        },
      },
      yearly: {
        amount: 290,
        priceIds: {
          test: "price_1LwXljADnYKBkDPxQebnAnFw",
          production: "price_1LwXi6ADnYKBkDPxlj82CeAA",
        },
      },
    },
  },
  {
    name: "Pro 100K",
    quota: 100000,
    price: {
      monthly: {
        amount: 49,
        priceIds: {
          test: "price_1LwXl4ADnYKBkDPx8gHFBbqw",
          production: "price_1LwXiqADnYKBkDPx259iseGI",
        },
      },
      yearly: {
        amount: 490,
        priceIds: {
          test: "price_1LwXl4ADnYKBkDPxWNKKmv7u",
          production: "price_1LwXiqADnYKBkDPxT2NkZqOt",
        },
      },
    },
  },
  {
    name: "Pro 500K",
    quota: 500000,
    price: {
      monthly: {
        amount: 79,
        priceIds: {
          test: "price_1LwXkMADnYKBkDPxaXvVRrOC",
          production: "price_1LwXjbADnYKBkDPx7Y4QiaIm",
        },
      },
      yearly: {
        amount: 790,
        priceIds: {
          test: "price_1LwXkMADnYKBkDPxwlAR2ZId",
          production: "price_1LwXjbADnYKBkDPxnvkyiO5D",
        },
      },
    },
  },
  {
    name: "Pro 1M",
    quota: 1000000,
    price: {
      monthly: {
        amount: 99,
        priceIds: {
          test: "price_1LwXetADnYKBkDPxqbOce8vh",
          production: "price_1LwXdEADnYKBkDPxkpTAxvsC",
        },
      },
      yearly: {
        amount: 990,
        priceIds: {
          test: "price_1LwXetADnYKBkDPxUuxfKHYb",
          production: "price_1M02QvADnYKBkDPx8dNt2ArC",
        },
      },
    },
  },
];