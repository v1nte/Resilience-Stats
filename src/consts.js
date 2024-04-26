  export const columns = [
    {
      name: "Nombre",
      selector: row => row.name,
      sortable: true
    },
    {
      name: "HLTV Rating",
      selector: row => row.hltv,
      sortable: true
    },
    {
      name: "Kills",
      selector: row => row.kills,
      sortable: true,
    },
    {
      name: "Muertes",
      selector: row => row.deaths,
      sortable: true
    },
    {
      name: "Diff",
      selector: row => row.diff,
      sortable: true
    },
    {
      name: "Assists",
      selector: row => row.assists,
      sortable: true
    },
    {
      name: "ADR" ,
      selector: row => row.adr,
      sortable: true
    },
    {
      name: "K/D",
      selector: row => row.KD,
      sortable: true
    },
    {
      name: "1K",
      selector: row => row.oneK,
      sortable: true
    },
    {
      name: "2K",
      selector: row => row.twoK,
      sortable: true
    },
    {
      name: "3K",
      selector: row => row.threeK,
      sortable: true
    },
    {
      name: "4K",
      selector: row => row.fourK,
      sortable: true
    },
    {
      name: "5K",
      selector: row => row.fiveK,
      sortable: true
    },
    {
      name: "Partidos",
      selector: row => row.matches,
      sortable: true
    }
  ]
