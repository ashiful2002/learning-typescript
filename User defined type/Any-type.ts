let nasimName: any;
nasimName = "he is nasim";
nasimName = 123;
nasimName = false;
nasimName = {
  name: "nasim",
  age: 33,
  isRegisterd: true,
  languages: ["english", "bangal", "spanish"],
  travelled: [
    {
      county: "bangaldesh",
      times: "2022 - 2023",
      places: ["cox-bazar", "saint martin", "rangamati"],
    },
    {
      county: "turkey",
      times: "2023 - 2023",
      places: ["capital city", "bab el mandeb", "bos fo ras "],
    },
    {
      county: "us",
      times: "2024 - 2024",
      places: ["washington DC", "miami", "los angeles "],
    },
  ],
};

console.log(nasimName.travelled[2].places[2]);
