const LEVELS = {
  popularity: {
    id: 'popularity',
    name: 'Stations by Popularity',
    stations: ["WAO","KCS","VIC","OXF","LIV","LOB","STR","BAN","CAW","PAD","EUN","PIC","GRP","HAM","BON","TOT","LEI","HOL","SOK","BRI","FIP","VAU","BAK","WER","MOE","EMB","NOG","OLD","ELE","CAT","SHB","WAL","THF","WAS","HIN","ANG","EAR","KNI","SES","EAL","SPA","CHL","SRK","COV","NOT","SLO","BET","TOB","FAR","BAG","MIL","BLA","WEM","SJP","EAH","BAL","CWA","EUS","WHL","LEN","MAA","GLO","ALE","WIN","TOH","WOG","HSK","MAE","RUS","BAR","CTO","PIM","STL","LEY","BER","WHA","TUL","HAO","FUL","UPT","MEN","CLC","FIR","ARC","MHO","CAS","WIL","WHC","CLS","QUY","GRE","KIL","GOG","GOS","BLR","UXB","KET","TEM","HEN","CHC","RID","ALD","TOO","SJW","HTE","SWC","EAF","BAC","GAN","LAN","EDG","FIN","CLN","PAR","HRO","COW","BOU","NOA","BEL","OVA","STG","EAP","HYD","SOS","ATO","COL","MAH","WEB","DAH","BOR","LAD","GUN","WEC","HIE","OAD","WOD","TUG","ATE","BOW","QUP","CHF","KON","PLA","NEW","PUT","UPR","SOW","EDE","NLT","KIN","WEK","MOR","EDG","HAW","GRD","SWI","BAY","WIJ","QUE","NOP","ARN","HAD","BUR","WAR","RAY","HT5","DOL","KEW","EAA","HAL","STE","WEP","NOS","HOE","HOU","BRO","EPP","NEA","HAI","TUF","WOL","HIB","SOE","SBM","BEC","HOW","WEH","LOU","KIP","MAI","REG","PRE","HCR","HOP","PIN","RAV","EAC","ALP","HAN","ELM","RED","ARS","DAG","WAN","EAS","CAN","OAK","WOP","KEG","UPN","STB","SNA","LAT","ROY","STP","BRC","NOR","SOH","DEB","PER","RIC","AME","BOS","OST","CHP","HT4","TAW","BUC","GOL","HOR","KEN","KEO","COC","PRO","SUT","RUM","SUD","NHA","RUI","NOH","WIM","WAT","WEA","NOW","HIL","SOR","WRU","WEF","BAE","WES","CAL","MHE","FAI","SKE","ICK","UPM","CRO","RUG","CHO","CHM","MOO","NOE","THB","GRA","CLL","ROD"],
  },
  bakerloo: {
    id: 'bakerloo',
    name: 'Bakerloo Line',
    colors: {
      primary: '#AB4800',
      secondary: '#FFF'
    },
    stations: ["QUP", "HAW", "WIJ", "OXF", "MAE", "MAI", "BAK", "CHC", "KIP", "NOW", "SKE", "STP", "KEG", "REG", "KEN", "PIC", "LAM", "WAO", "EMB", "EDG", "HAN", "WEC", "WAR", "ELE", "PAD"]
  },
  central: {
    id: 'central',
    name: 'Central Line',
    colors: {
      primary: '#F10',
      secondary: '#FFF'
    },
    stations: ["BEG", "GRA", "RUG", "LEN", "OXF", "NEW", "LEY", "BON", "WEA", "HOL", "SHB", "DEB", "QUY", "TOT", "NOT", "CLL", "HAL", "WOD", "MAA", "EAA", "EPP", "GAN", "CHL", "NOA", "STR", "EAL", "BAN", "ROD", "BAE", "WAN", "HOP", "LIV", "SOW", "WRU", "GRD", "SOR", "SNA", "RED", "BUC", "PER", "THB", "LAN", "LOU", "HAI", "NLT", "SPA", "WHC", "MIL", "FAI"]
  },
  circle: {
    id: 'circle',
    name: 'Circle Line',
    colors: {
      primary: '#FFD600',
      secondary: '#000'
    },
    stations: ["CAS", "EMB", "ALD", "SJP", "EDG", "SLO", "WER", "ROY", "LAD", "HSK", "TEM", "KCS", "BLA", "PAD", "THF", "BAY", "MOE", "WEP", "SBM", "HAM", "LIV", "BAK", "MON", "WOL", "BAR", "GRE", "FAR", "GOL", "EUS", "VIC", "NOT", "SOK", "PAD", "GLO", "MAH", "LAT"]
  },
  district: {
    id: 'district',
    name: 'District Line',
    colors: {
      primary: '#0C6826',
      secondary: '#FFF'
    },
    stations: ["PUT", "DAG", "PAR", "MON", "NOT", "MAH", "EAH", "MIL", "WEK", "KEO", "EAC", "PAD", "THF", "BAY", "SJP", "BAC", "WHL", "UPR", "KEW", "UPN", "BLA", "WER", "UPT", "SLO", "TUG", "WIN", "ATO", "SOK", "VIC", "HSK", "SOS", "EAP", "RAV", "EMB", "GLO", "TEM", "EAL", "CHP", "BOW", "STB", "ALE", "HOR", "GUN", "DAH", "WEH", "WIM", "BRO", "WEB", "STG", "ELM", "EAR", "RID", "EDG", "BAG", "BEC", "CAS", "HAM", "FUL", "PLA", "UPM"]
  },
  hammersmith: {
    id: 'hammersmith',
    name: 'Hammersmith & City Line',
    colors: {
      primary: '#F76897',
      secondary: '#000'
    },
    stations: ["GRE", "LAD", "SBM", "WHL", "STG", "HAM", "WEP", "ALE", "BAK", "BOW", "MIL", "MOE", "GOL", "BRO", "FAR", "EAH", "LIV", "EDG", "WEH", "EUS", "PAD", "WOL", "BAR", "PLA", "ROY", "UPT", "KCS", "LAT", "BAG"]
  },
  jubilee: {
    id: 'jubilee',
    name: 'Jubilee Line',
    colors: {
      primary: '#85898A',
      secondary: '#FFF'
    },
    stations: ["SWC", "DOL", "KIN", "WEH", "CAW", "BAK", "BER", "CWA", "SRK", "STE", "LOB", "NEA", "WER", "BON", "QUE", "CAN", "WIL", "KIL", "SJW", "GRP", "WAO", "WEM", "STR", "WHA", "CTO", "NOG", "FIR"]
  },
  metropolitan: {
    id: 'metropolitan',
    name: 'Metropolitan Line',
    colors: {
      primary: '#89014C',
      secondary: '#FFF'
    },
    stations: ["CAL", "CRO", "HIL", "WES", "MOE", "LIV", "CHO", "AME", "ICK", "ALD", "NHA", "RAY", "EUS", "FAR", "FIR", "BAR", "NOH", "UXB", "WEM", "RIC", "EAS", "RUM", "HAO", "MOO", "RUI", "KCS", "WAT", "GRE", "BAK", "CHM", "PIN", "NOR", "NOP", "PRE"]
  },
  northern: {
    id: 'northern',
    name: 'Northern Line',
    colors: {
      primary: '#000',
      secondary: '#FFF'
    },
    stations: ["BAL", "KCS", "BAN", "BRC", "COW", "HIB", "HIE", "TOO", "COL", "ELE", "EDE", "FIN", "LEI", "MOE", "CHF", "CHC", "KON", "TAW", "BUR", "CLS", "EUN", "TUF", "GOS", "GOG", "BOR", "EMB", "KET", "CLC", "ARC", "LOB", "ANG", "MOR", "MHE", "HEN", "TOB", "TOT", "SWI", "MEN", "OLD", "HAD", "STL", "WEF", "CAT", "EAF", "WAS", "WOP", "WAO", "OVA", "CLN", "BEL"]
  },
  piccadilly: {
    id: 'piccadilly',
    name: 'Piccadilly Line',
    colors: {
      primary: '#10137E',
      secondary: '#FFF'
    },
    stations: ["ATE", "TUG", "ALP", "SOE", "RUM", "ATO", "PRO", "KCS", "OAK", "WOG", "EAC", "GLO", "EAS", "SOK", "FIP", "RUI", "SOH", "HTE", "NOE", "BOS", "RUS", "MHO", "HT5", "EAR", "ARS", "HAM", "BAC", "COV", "SUT", "BOU", "TUL", "OST", "HOL", "HIL", "HT4", "COC", "OAD", "ICK", "SUD", "PIC", "HRO", "KNI", "HYD", "UXB", "HOU", "GRP", "NOS", "RAY", "HOE", "ARN", "HCR", "LEI", "HOW"]
  },
  victoria: {
    id: 'victoria',
    name: 'Victoria Line',
    colors: {
      primary: '#2B8DBF',
      secondary: '#FFF'
    },
    stations: ["WAL", "EUN", "VAU", "BRI", "STL", "GRP", "FIP", "BLR", "HIN", "KCS", "TOH", "VIC", "PIM", "SES", "OXF", "WAS"]
  },
  waterloo: {
    id: 'waterloo',
    name: 'Waterloo & City Line',
    colors: {
      primary: '#76D0BD',
      secondary: '#000'
    },
    stations: ["WAO", "BAN"]
  },
  dlr: {
    id: 'dlr',
    name: 'DLR',
    colors: {
      primary: '#00AFAD',
      secondary: '#000'
    },
    stations: ["DEP", "BAN", "ROV", "CYP", "WEY", "BLL", "ABB", "WSI", "ISL", "BEP", "LEW", "WOA", "WEH", "BEN", "PON", "ROA", "PRI", "LAP", "EAI", "CUS", "TOW", "GAL", "SLA", "LIM", "CTO", "POP", "SHS", "CAW", "DEV", "MUD", "KGV", "BOC", "SOQ", "ELV", "SHL", "PUD", "CUT", "ALL", "STR", "HER", "WIQ", "GRH", "CRR", "LCA", "STI"]
  }
}

export { LEVELS }