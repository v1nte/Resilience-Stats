
import { useState, useEffect } from 'react'
import DataTable from "react-data-table-component"
import { columns, } from "../consts.js"
import stats from "../stats.json"


export default function BigTable() {
  const [data, setData] = useState([])

  useEffect(() => {
    const formatedData = stats.map(player => {
      return {
        "name": player.player.name,
        "id": player.player.steamid,
        "hltv": (player.average_stats.hltvRating2).toFixed(3),
        "kills": player.sums_stats.killCount,
        "deaths": player.sums_stats.deathCount,
        "assists": player.sums_stats.assistCount,
        "KD": (player.sums_stats.killCount/player.sums_stats.deathCount).toFixed(2),
        "oneK": player.sums_stats.oneKillCount,
        "twoK": player.sums_stats.twoKillCount,
        "threeK": player.sums_stats.threeKillCount,
        "fourK": player.sums_stats.fourKillCount,
        "fiveK": player.sums_stats.fiveKillCount,
        "matches": player.matches.killCount.length
      }
    })

    setData(formatedData)

  }, [])

  return (
    <DataTable
      columns={columns}
      data={data}
      pagination
      striped
      // theme='dark'
    />
  )

}

