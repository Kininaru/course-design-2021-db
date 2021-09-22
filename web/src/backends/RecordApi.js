let records = {
  "kininaru server": [41, 35, 20, 59, 50, 29],
  "baidu server": [10, 12, 18, 26, 37, 19],
  "Google server": [300, 279, 378, 601, 459, 390]
}

export function getRecords(id) {
  return records[id];
}
