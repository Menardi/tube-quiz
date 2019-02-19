const STATIONS = {
  "BET":{
    name: "Bethnal Green",
    code: "BET",
    domId: "s-910gbthnlgr_label_x0a__1_",
    passengers: 16.27
  },
  "CAM":{
    name: "Cambridge Heath",
    code: "CAM",
    domId: "s-910gcamhth_label_2_"
  },
  "LON":{
    name: "London Fields",
    code: "LON",
    domId: "s-910glonflds_label_2_"
  },
  "REC":{
    name: "Rectory Road",
    code: "REC",
    domId: "s-910grctryrd_label_x0a__2_"
  },
  "WOO":{
    name: "Wood Street",
    code: "WOO",
    domId: "s-910gwdst_label_1_"
  },
  "BRU":{
    name: "Bruce Grove",
    code: "BRU",
    domId: "s-910gbrucgrv_label_1_"
  },
  "WHI":{
    name: "White Hart Lane",
    code: "WHI",
    domId: "s-910gwhhrtla_label_2_"
  },
  "SIL":{
    name: "Silver Street",
    code: "SIL",
    domId: "s-910gsivrst_label_1_"
  },
  "SOU":{
    name: "Southbury",
    code: "SOU",
    domId: "s-910gsbury_label_1_"
  },
  "TUR":{
    name: "Turkey Street",
    code: "TUR",
    domId: "s-910gturkyst_label_1_"
  },
  "THE":{
    name: "Theobalds Grove",
    code: "THE",
    domId: "s-910gthbldsg_label_1_"
  },
  "ENF":{
    name: "Enfield Town",
    code: "ENF",
    domId: "s-910genfldtn_label_1_"
  },
  "STA":{
    name: "Stamford Hill",
    code: "STA",
    domId: "s-910gstmfdhl_label_1_"
  },
  "BUS":{
    name: "Bush Hill Park",
    code: "BUS",
    domId: "s-910gbhillpk_label_1_"
  },
  "HIG":{
    name: "Highams Park",
    code: "HIG",
    domId: "s-910ghghmspk_x0a__label_1_"
  },
  "CHI":{
    name: "Chingford",
    code: "CHI",
    domId: "s-910gchingfd_label_1_"
  },
  "CLA":{
    name: "Clapton",
    code: "CLA",
    domId: "s-910gclapton_label_1_"
  },
  "STJ":{
    name: "St. James Street",
    code: "STJ",
    domId: "s-910gstjmsst_x0a__label_2_"
  },
  "STO":{
    name: "Stoke Newington",
    code: "STO",
    domId: "s-910gstknwng_label_1_"
  },
  "HAC":{
    name: "Hackney Downs",
    code: "HAC",
    domId: "s-910ghaknynm_label_2_"
  },
  "EDM":{
    name: "Edmonton Green",
    code: "EDM",
    domId: "s-910gedmngrn_label_1_"
  },
  "CHE":{
    name: "Cheshunt",
    code: "CHE",
    domId: "s-910gcheshnt_label_x0a__2_"
  },
  "ILF":{
    name: "Ilford",
    code: "ILF",
    domId: "s-910gilford_label"
  },
  "GOO":{
    name: "Goodmayes",
    code: "GOO",
    domId: "s-910ggodmays_label"
  },
  "CHA":{
    name: "Chadwell Heath",
    code: "CHA",
    domId: "s-910gchdwlht_label"
  },
  "ROM":{
    name: "Romford",
    code: "ROM",
    domId: "s-910gromford_label"
  },
  "GID":{
    name: "Gidea Park",
    code: "GID",
    domId: "s-910ggideapk_label"
  },
  "HAR":{
    name: "Harold Wood",
    code: "HAR",
    domId: "s-910ghrldwod_label"
  },
  "SHE":{
    name: "Shenfield",
    code: "SHE",
    domId: "s-910gshenfld_label_2_"
  },
  "BRE":{
    name: "Brentwood",
    code: "BRE",
    domId: "s-910gbrtwood_label"
  },
  "SEV":{
    name: "Seven Kings",
    code: "SEV",
    domId: "s-910gsvnkngs_label"
  },
  "EME":{
    name: "Emerson Park",
    code: "EME",
    domId: "s-910gemrspkh_label"
  },
  "MAR":{
    name: "Maryland",
    code: "MAR",
    domId: "s-910gmryland_label"
  },
  "MAN":{
    name: "Manor Park",
    code: "MAN",
    domId: "s-910gmanrpk_label"
  },
  "FOR":{
    name: "Forest Gate",
    code: "FOR",
    domId: "s-910gfrstgt_label"
  },
  "CHO":{
    name: "Chorleywood",
    code: "CHO",
    domId: "s-940gzzlucyd_label_1_",
    passengers: 1.07
  },
  "RIC":{
    name: "Rickmansworth",
    code: "RIC",
    domId: "s-940gzzlurkw_label_1_",
    passengers: 2.46
  },
  "CHM":{
    name: "Chesham",
    code: "CHM",
    domId: "s-940gzzlucsm_label_1_",
    passengers: 1.07
  },
  "AME":{
    name: "Amersham",
    code: "AME",
    domId: "s-940gzzluams_label_1_",
    passengers: 2.36
  },
  "CAL":{
    name: "Chalfont & Latimer",
    code: "CAL",
    domId: "s-940gzzlucal_label_1_",
    passengers: 1.49
  },
  "MOO":{
    name: "Moor Park",
    code: "MOO",
    domId: "s-940gzzlumpk_label_2_",
    passengers: 0.91
  },
  "WAT":{
    name: "Watford",
    code: "WAT",
    domId: "s-940gzzluwaf_label_2_",
    passengers: 1.84
  },
  "CRO":{
    name: "Croxley",
    code: "CRO",
    domId: "s-940gzzlucxy_label_2_",
    passengers: 1.08
  },
  "NOR":{
    name: "Northwood",
    code: "NOR",
    domId: "s-940gzzlunow_label_2_",
    passengers: 2.49
  },
  "NOH":{
    name: "Northwood Hills",
    code: "NOH",
    domId: "s-940gzzlunwh_label_2_",
    passengers: 1.91
  },
  "PIN":{
    name: "Pinner",
    code: "PIN",
    domId: "s-940gzzlupnr_label_2_",
    passengers: 3.2
  },
  "NHA":{
    name: "North Harrow",
    code: "NHA",
    domId: "s-940gzzlunha_label_2_",
    passengers: 1.97
  },
  "NOP":{
    name: "Northwick Park",
    code: "NOP",
    domId: "s-940gzzlunkp_label_1_",
    passengers: 4.65
  },
  "WES":{
    name: "West Harrow",
    code: "WES",
    domId: "s-940gzzluwhw_label_1_",
    passengers: 1.49
  },
  "ICK":{
    name: "Ickenham",
    code: "ICK",
    domId: "s-940gzzluick_label_1_",
    passengers: 1.17
  },
  "UXB":{
    name: "Uxbridge",
    code: "UXB",
    domId: "s-940gzzluuxb_label_1_",
    passengers: 8.45
  },
  "HIL":{
    name: "Hillingdon",
    code: "HIL",
    domId: "s-940gzzluhgd_label_2_",
    passengers: 1.77
  },
  "RUI":{
    name: "Ruislip",
    code: "RUI",
    domId: "s-940gzzlursp_label_2_",
    passengers: 1.95
  },
  "RUM":{
    name: "Ruislip Manor",
    code: "RUM",
    domId: "s-940gzzlursm_label_1_",
    passengers: 1.99
  },
  "EAS":{
    name: "Eastcote",
    code: "EAS",
    domId: "s-940gzzlueae_label_1_",
    passengers: 2.94
  },
  "HAO":{
    name: "Harrow-on-the-Hill",
    code: "HAO",
    domId: "s-940gzzluhoh_label_1_",
    passengers: 10.67
  },
  "PRE":{
    name: "Preston Road",
    code: "PRE",
    domId: "s-940gzzluprd_label_1_",
    passengers: 3.31
  },
  "WEM":{
    name: "Wembley Park",
    code: "WEM",
    domId: "s-940gzzluwyp_label_1_",
    passengers: 15.1
  },
  "STE":{
    name: "Stanmore",
    code: "STE",
    domId: "s-940gzzlustm_label_2_",
    passengers: 4.04
  },
  "CAN":{
    name: "Canons Park",
    code: "CAN",
    domId: "s-940gzzlucpk_label_2_",
    passengers: 2.93
  },
  "QUE":{
    name: "Queensbury",
    code: "QUE",
    domId: "s-940gzzluqby_label_1_",
    passengers: 4.68
  },
  "KIN":{
    name: "Kingsbury",
    code: "KIN",
    domId: "s-940gzzlukby_label_2_",
    passengers: 5.12
  },
  "NEA":{
    name: "Neasden",
    code: "NEA",
    domId: "s-940gzzlundn_label_1_",
    passengers: 3.75
  },
  "DOL":{
    name: "Dollis Hill",
    code: "DOL",
    domId: "s-940gzzludoh_label_1_",
    passengers: 4.18
  },
  "WIL":{
    name: "Willesden Green",
    code: "WIL",
    domId: "s-940gzzluwig_label_1_",
    passengers: 8.97
  },
  "KIL":{
    name: "Kilburn",
    code: "KIL",
    domId: "s-940gzzlukbn_label_2_",
    passengers: 8.58
  },
  "BAK":{
    name: "Baker Street",
    code: "BAK",
    domId: "s-940gzzlubst_label_1_",
    passengers: 29.75
  },
  "ALD":{
    name: "Aldgate",
    code: "ALD",
    domId: "s-940gzzluald_label_1_",
    passengers: 8.01
  },
  "BAR":{
    name: "Barbican",
    code: "BAR",
    domId: "s-940gzzlubbn_label_2_",
    passengers: 11.97
  },
  "GRE":{
    name: "Great Portland Street",
    code: "GRE",
    domId: "s-940gzzlugps_label_2_",
    passengers: 8.66
  },
  "FAR":{
    name: "Farringdon",
    code: "FAR",
    domId: "s-940gzzlufcn_label_2_",
    passengers: 15.87
  },
  "LIV":{
    name: "Liverpool Street",
    code: "LIV",
    domId: "s-940gzzlulvt_label_1_",
    passengers: 71.61
  },
  "MOE":{
    name: "Moorgate",
    code: "MOE",
    domId: "s-940gzzlumgt_label_2_",
    passengers: 27.57
  },
  "KCS":{
    name: "King's Cross St. Pancras",
    code: "KCS",
    domId: "s-940gzzluksx_label_1_",
    passengers: 95.03
  },
  "EUS":{
    name: "Euston Square",
    code: "EUS",
    domId: "s-940gzzluesq_label_2_",
    passengers: 14.4
  },
  "MAH":{
    name: "Mansion House",
    code: "MAH",
    domId: "s-940gzzlumsh_label_1_",
    passengers: 6.14
  },
  "MON":{
    name: "Monument",
    code: "MON",
    domId: "s-940gzzlummt_label_2_"
  },
  "SOK":{
    name: "South Kensington",
    code: "SOK",
    domId: "s-940gzzlusks_label_1_",
    passengers: 33.6
  },
  "SLO":{
    name: "Sloane Square",
    code: "SLO",
    domId: "s-940gzzlussq_label_2_",
    passengers: 17.15
  },
  "CAS":{
    name: "Cannon Street",
    code: "CAS",
    domId: "s-940gzzlucst_label_2_",
    passengers: 8.98
  },
  "WER":{
    name: "Westminster",
    code: "WER",
    domId: "s-940gzzluwsm_label_1_",
    passengers: 28.38
  },
  "GLO":{
    name: "Gloucester Road",
    code: "GLO",
    domId: "s-940gzzlugtr_label_2_",
    passengers: 13.98
  },
  "SJP":{
    name: "St. James's Park",
    code: "SJP",
    domId: "s-940gzzlusjp_label_1_",
    passengers: 14.93
  },
  "TEM":{
    name: "Temple",
    code: "TEM",
    domId: "s-940gzzlutmp_label_1_",
    passengers: 8.22
  },
  "EMB":{
    name: "Embankment",
    code: "EMB",
    domId: "s-940gzzluemb_label_2_",
    passengers: 26.84
  },
  "BLA":{
    name: "Blackfriars",
    code: "BLA",
    domId: "s-940gzzlubkf_label_2_",
    passengers: 15.45
  },
  "BAY":{
    name: "Bayswater",
    code: "BAY",
    domId: "s-940gzzlubwt_label_2_",
    passengers: 4.76
  },
  "HSK":{
    name: "High Street Kensington",
    code: "HSK",
    domId: "s-940gzzluhsk_label_2_",
    passengers: 13.1
  },
  "NOT":{
    name: "Notting Hill Gate",
    code: "NOT",
    domId: "s-940gzzlunhg_label_2_",
    passengers: 17.18
  },
  "PAD":{
    name: "Paddington",
    code: "PAD",
    domId: "s-940gzzlupac_940gzzlupah_label_1_",
    passengers: 49.48
  },
  "EDG":{
    name: "Edgware Road",
    code: "EDG",
    domId: "s-940gzzluerc_label_2_",
    passengers: 5.01
  },
  "WHS":{
    name: "Watford High Street",
    code: "WHS",
    domId: "s-910gwatfdhs_label_2_"
  },
  "CAR":{
    name: "Carpenders Park",
    code: "CAR",
    domId: "s-910gcrpndpk_label_2_"
  },
  "HAT":{
    name: "Hatch End",
    code: "HAT",
    domId: "s-910ghtchend_label_2_"
  },
  "KEN":{
    name: "Kenton",
    code: "KEN",
    domId: "s-940gzzluken_label_2_",
    passengers: 2.08
  },
  "HEA":{
    name: "Headstone Lane",
    code: "HEA",
    domId: "s-910ghedstnl_label_2_"
  },
  "HAW":{
    name: "Harrow & Wealdstone",
    code: "HAW",
    domId: "s-940gzzluhaw_label_2_",
    passengers: 4.96
  },
  "BUY":{
    name: "Bushey",
    code: "BUY",
    domId: "s-910gbushey_label_2_"
  },
  "WAJ":{
    name: "Watford Junction",
    code: "WAJ",
    domId: "s-910gwatfdj_label_1_"
  },
  "NOW":{
    name: "North Wembley",
    code: "NOW",
    domId: "s-940gzzlunwy_label_2_",
    passengers: 1.79
  },
  "SKE":{
    name: "South Kenton",
    code: "SKE",
    domId: "s-940gzzluskt_label_1_",
    passengers: 1.17
  },
  "KEG":{
    name: "Kensal Green",
    code: "KEG",
    domId: "s-940gzzluksl_label_2_",
    passengers: 2.72
  },
  "QUP":{
    name: "Queen's Park",
    code: "QUP",
    domId: "s-940gzzluqps_label_2_",
    passengers: 5.64
  },
  "STP":{
    name: "Stonebridge Park",
    code: "STP",
    domId: "s-940gzzlusgp_label_1_",
    passengers: 2.53
  },
  "HAN":{
    name: "Harlesden",
    code: "HAN",
    domId: "s-940gzzluhsn_label_1_",
    passengers: 3.1
  },
  "WIJ":{
    name: "Willesden Junction",
    code: "WIJ",
    domId: "s-940gzzluwjn_label_1_",
    passengers: 4.73
  },
  "WEC":{
    name: "Wembley Central",
    code: "WEC",
    domId: "s-940gzzluwyc_label_1_",
    passengers: 5.77
  },
  "KIP":{
    name: "Kilburn Park",
    code: "KIP",
    domId: "s-940gzzlukpk_label_1_",
    passengers: 3.43
  },
  "MAE":{
    name: "Marylebone",
    code: "MAE",
    domId: "s-940gzzlumyb_label_2_",
    passengers: 12.95
  },
  "WAR":{
    name: "Warwick Avenue",
    code: "WAR",
    domId: "s-940gzzluwka_label_1_",
    passengers: 4.51
  },
  "MAI":{
    name: "Maida Vale",
    code: "MAI",
    domId: "s-940gzzlumvl_label_2_",
    passengers: 3.41
  },
  "EDR":{
    name: "Edgware Road",
    code: "EDR",
    domId: "s-940gzzluerb_label_2_"
  },
  "LAM":{
    name: "Lambeth North",
    code: "LAM",
    domId: "s-940gzzlulbn_label_1_"
  },
  "ELE":{
    name: "Elephant & Castle",
    code: "ELE",
    domId: "s-940gzzlueac_label_1_",
    passengers: 23.3
  },
  "REG":{
    name: "Regent's Park",
    code: "REG",
    domId: "s-940gzzlurgp_label",
    passengers: 3.35
  },
  "OXF":{
    name: "Oxford Circus",
    code: "OXF",
    domId: "s-940gzzluoxc_label",
    passengers: 83.26
  },
  "PIC":{
    name: "Piccadilly Circus",
    code: "PIC",
    domId: "s-940gzzlupcc_label",
    passengers: 41.29
  },
  "CHC":{
    name: "Charing Cross",
    code: "CHC",
    domId: "s-940gzzluchx_label",
    passengers: 8.13
  },
  "EUN":{
    name: "Euston",
    code: "EUN",
    domId: "s-940gzzlueus_label_2_",
    passengers: 43.1
  },
  "PER":{
    name: "Perivale",
    code: "PER",
    domId: "s-940gzzlupvl_label_1_",
    passengers: 2.46
  },
  "HAL":{
    name: "Hanger Lane",
    code: "HAL",
    domId: "s-940gzzluhgr_label_2_",
    passengers: 4.1
  },
  "RUG":{
    name: "Ruislip Gardens",
    code: "RUG",
    domId: "s-940gzzlursg_label_1_",
    passengers: 1.07
  },
  "SOR":{
    name: "South Ruislip",
    code: "SOR",
    domId: "s-940gzzlusrp_label_1_",
    passengers: 1.76
  },
  "GRD":{
    name: "Greenford",
    code: "GRD",
    domId: "s-940gzzlugfd_label_1_",
    passengers: 4.81
  },
  "NLT":{
    name: "Northolt",
    code: "NLT",
    domId: "s-940gzzlunht_label_1_",
    passengers: 5.16
  },
  "WRU":{
    name: "West Ruislip",
    code: "WRU",
    domId: "s-940gzzluwrp_label_2_",
    passengers: 1.67
  },
  "EAL":{
    name: "Ealing Broadway",
    code: "EAL",
    domId: "s-940gzzlueby_label_2_",
    passengers: 18.6
  },
  "WEA":{
    name: "West Acton",
    code: "WEA",
    domId: "s-940gzzluwta_label_1_",
    passengers: 1.82
  },
  "BON":{
    name: "Bond Street",
    code: "BON",
    domId: "s-940gzzlubnd_label_1_",
    passengers: 39.53
  },
  "NOA":{
    name: "North Acton",
    code: "NOA",
    domId: "s-940gzzlunan_label_2_",
    passengers: 6.53
  },
  "QUY":{
    name: "Queensway",
    code: "QUY",
    domId: "s-940gzzluqwy_label_1_",
    passengers: 8.71
  },
  "MAA":{
    name: "Marble Arch",
    code: "MAA",
    domId: "s-940gzzlumba_label_2_",
    passengers: 14.11
  },
  "EAA":{
    name: "East Acton",
    code: "EAA",
    domId: "s-940gzzluean_label_2_",
    passengers: 4.12
  },
  "LAN":{
    name: "Lancaster Gate",
    code: "LAN",
    domId: "s-940gzzlulgt_label_2_",
    passengers: 7.06
  },
  "WHC":{
    name: "White City",
    code: "WHC",
    domId: "s-940gzzluwcy_label_1_",
    passengers: 8.95
  },
  "SHB":{
    name: "Shepherd's Bush",
    code: "SHB",
    domId: "s-940gzzlusbc_label_1_",
    passengers: 22.85
  },
  "TOT":{
    name: "Tottenham Court Road",
    code: "TOT",
    domId: "s-940gzzlutcr_label_1_",
    passengers: 39.35
  },
  "BEG":{
    name: "Bethnal Green",
    code: "BEG",
    domId: "s-940gzzlublg_label_2_"
  },
  "MIL":{
    name: "Mile End",
    code: "MIL",
    domId: "s-940gzzlumed_label",
    passengers: 15.75
  },
  "HOL":{
    name: "Holborn",
    code: "HOL",
    domId: "s-940gzzluhbn_label",
    passengers: 33.96
  },
  "SPA":{
    name: "St. Paul's",
    code: "SPA",
    domId: "s-940gzzluspu_label_1_",
    passengers: 18.42
  },
  "BAN":{
    name: "Bank",
    code: "BAN",
    domId: "s-940gzzlubnk_label",
    passengers: 64.26
  },
  "CHL":{
    name: "Chancery Lane",
    code: "CHL",
    domId: "s-940gzzluchl_label_1_",
    passengers: 18.19
  },
  "LEY":{
    name: "Leytonstone",
    code: "LEY",
    domId: "s-940gzzlulys_label_1_",
    passengers: 11.3
  },
  "LEN":{
    name: "Leyton",
    code: "LEN",
    domId: "s-940gzzlulyn_label_2_",
    passengers: 14.33
  },
  "RED":{
    name: "Redbridge",
    code: "RED",
    domId: "s-940gzzlurbg_label_2_",
    passengers: 3.05
  },
  "GAN":{
    name: "Gants Hill",
    code: "GAN",
    domId: "s-940gzzlugth_label_1_",
    passengers: 7.14
  },
  "WAN":{
    name: "Wanstead",
    code: "WAN",
    domId: "s-940gzzluwsd_label_2_",
    passengers: 2.96
  },
  "STR":{
    name: "Stratford",
    code: "STR",
    domId: "s-940gzzlustd_label_2_",
    passengers: 67.05
  },
  "WOD":{
    name: "Woodford",
    code: "WOD",
    domId: "s-940gzzluwof_label_2_",
    passengers: 5.69
  },
  "SOW":{
    name: "South Woodford",
    code: "SOW",
    domId: "s-940gzzluswf_label_1_",
    passengers: 5.25
  },
  "SNA":{
    name: "Snaresbrook",
    code: "SNA",
    domId: "s-940gzzlusnb_label_1_",
    passengers: 2.69
  },
  "HAI":{
    name: "Hainault",
    code: "HAI",
    domId: "s-940gzzluhlt_label_1_",
    passengers: 3.74
  },
  "FAI":{
    name: "Fairlop",
    code: "FAI",
    domId: "s-940gzzluflp_label_2_",
    passengers: 1.2
  },
  "BAE":{
    name: "Barkingside",
    code: "BAE",
    domId: "s-940gzzlubke_label_2_",
    passengers: 1.63
  },
  "NEW":{
    name: "Newbury Park",
    code: "NEW",
    domId: "s-940gzzlunbp_label_1_",
    passengers: 5.43
  },
  "ROD":{
    name: "Roding Valley",
    code: "ROD",
    domId: "s-940gzzlurvy_label_1_",
    passengers: 0.37
  },
  "GRA":{
    name: "Grange Hill",
    code: "GRA",
    domId: "s-940gzzluggh_label_2_",
    passengers: 0.66
  },
  "CLL":{
    name: "Chigwell",
    code: "CLL",
    domId: "s-940gzzlucwl_label_1_",
    passengers: 0.53
  },
  "THB":{
    name: "Theydon Bois",
    code: "THB",
    domId: "s-940gzzluthb_label_1_",
    passengers: 0.85
  },
  "EPP":{
    name: "Epping",
    code: "EPP",
    domId: "s-940gzzluepg_label_1_",
    passengers: 3.77
  },
  "DEB":{
    name: "Debden",
    code: "DEB",
    domId: "s-940gzzludbn_label_2_",
    passengers: 2.47
  },
  "LOU":{
    name: "Loughton",
    code: "LOU",
    domId: "s-940gzzlulgn_label_1_",
    passengers: 3.45
  },
  "BUC":{
    name: "Buckhurst Hill",
    code: "BUC",
    domId: "s-940gzzlubkh_label_2_",
    passengers: 2.19
  },
  "SBM":{
    name: "Shepherd's Bush Market",
    code: "SBM",
    domId: "s-940gzzlusbm_label_1_",
    passengers: 3.57
  },
  "GOL":{
    name: "Goldhawk Road",
    code: "GOL",
    domId: "s-940gzzlughk_label_2_",
    passengers: 2.12
  },
  "LAT":{
    name: "Latimer Road",
    code: "LAT",
    domId: "s-940gzzlulrd_label_2_",
    passengers: 2.63
  },
  "LAD":{
    name: "Ladbroke Grove",
    code: "LAD",
    domId: "s-940gzzlulad_label_1_",
    passengers: 5.8
  },
  "ROY":{
    name: "Royal Oak",
    code: "ROY",
    domId: "s-940gzzluryo_label_1_",
    passengers: 2.55
  },
  "WEP":{
    name: "Westbourne Park",
    code: "WEP",
    domId: "s-940gzzluwsp_label_2_",
    passengers: 3.98
  },
  "WOL":{
    name: "Wood Lane",
    code: "WOL",
    domId: "s-940gzzluwla_label_2_",
    passengers: 3.68
  },
  "HAM":{
    name: "Hammersmith",
    code: "HAM",
    domId: "s-940gzzluhsc_940gzzluhsd_label_2_",
    passengers: 39.99
  },
  "BOW":{
    name: "Bow Road",
    code: "BOW",
    domId: "s-940gzzlubwr_label_2_",
    passengers: 5.65
  },
  "WEH":{
    name: "West Ham",
    code: "WEH",
    domId: "s-940gzzluwhm_label_2_",
    passengers: 3.46
  },
  "WHL":{
    name: "Whitechapel",
    code: "WHL",
    domId: "s-940gzzluwpl_label_2_",
    passengers: 14.37
  },
  "ALE":{
    name: "Aldgate East",
    code: "ALE",
    domId: "s-940gzzluade_label_1_",
    passengers: 13.43
  },
  "STG":{
    name: "Stepney Green",
    code: "STG",
    domId: "s-940gzzlusgn_label",
    passengers: 6.41
  },
  "BRO":{
    name: "Bromley-by-Bow",
    code: "BRO",
    domId: "s-940gzzlubbb_label",
    passengers: 3.79
  },
  "EAH":{
    name: "East Ham",
    code: "EAH",
    domId: "s-940gzzluehm_label_1_",
    passengers: 14.75
  },
  "PLA":{
    name: "Plaistow",
    code: "PLA",
    domId: "s-940gzzluplw_label_2_",
    passengers: 5.49
  },
  "UPT":{
    name: "Upton Park",
    code: "UPT",
    domId: "s-940gzzluupk_label_2_",
    passengers: 10.14
  },
  "BAG":{
    name: "Barking",
    code: "BAG",
    domId: "s-940gzzlubkg_label_1_",
    passengers: 15.86
  },
  "ELM":{
    name: "Elm Park",
    code: "ELM",
    domId: "s-940gzzluepk_label_1_",
    passengers: 3.1
  },
  "DAG":{
    name: "Dagenham East",
    code: "DAG",
    domId: "s-940gzzludge_label_2_",
    passengers: 2.98
  },
  "DAH":{
    name: "Dagenham Heathway",
    code: "DAH",
    domId: "s-940gzzludgy_label_2_",
    passengers: 6.04
  },
  "BEC":{
    name: "Becontree",
    code: "BEC",
    domId: "s-940gzzlubec_label_1_",
    passengers: 3.55
  },
  "UPN":{
    name: "Upney",
    code: "UPN",
    domId: "s-940gzzluupy_label_2_",
    passengers: 2.72
  },
  "UPM":{
    name: "Upminster Bridge",
    code: "UPM",
    domId: "s-940gzzluupb_label_2_",
    passengers: 1.16
  },
  "HOR":{
    name: "Hornchurch",
    code: "HOR",
    domId: "s-940gzzluhch_label_2_",
    passengers: 2.11
  },
  "UPR":{
    name: "Upminster",
    code: "UPR",
    domId: "s-940gzzluupm_label_4_",
    passengers: 5.34
  },
  "FUL":{
    name: "Fulham Broadway",
    code: "FUL",
    domId: "s-940gzzlufby_label_2_",
    passengers: 10.15
  },
  "PAR":{
    name: "Parsons Green",
    code: "PAR",
    domId: "s-940gzzlupsg_label_2_",
    passengers: 6.75
  },
  "PUT":{
    name: "Putney Bridge",
    code: "PUT",
    domId: "s-940gzzlupyb_label_1_",
    passengers: 5.42
  },
  "EAP":{
    name: "East Putney",
    code: "EAP",
    domId: "s-940gzzluepy_label_1_",
    passengers: 6.37
  },
  "SOS":{
    name: "Southfields",
    code: "SOS",
    domId: "s-940gzzlusfs_label_2_",
    passengers: 6.28
  },
  "WIM":{
    name: "Wimbledon Park",
    code: "WIM",
    domId: "s-940gzzluwip_label_1_",
    passengers: 1.89
  },
  "WEB":{
    name: "West Brompton",
    code: "WEB",
    domId: "s-940gzzluwbn_label_2_",
    passengers: 6.1
  },
  "WIN":{
    name: "Wimbledon",
    code: "WIN",
    domId: "s-940gzzluwim_label_2_",
    passengers: 13.4
  },
  "EAR":{
    name: "Earl's Court",
    code: "EAR",
    domId: "s-940gzzluect_label_1_",
    passengers: 20
  },
  "CHP":{
    name: "Chiswick Park",
    code: "CHP",
    domId: "s-940gzzlucwp_label_1_",
    passengers: 2.29
  },
  "TUG":{
    name: "Turnham Green",
    code: "TUG",
    domId: "s-940gzzlutng_label_2_",
    passengers: 5.65
  },
  "STB":{
    name: "Stamford Brook",
    code: "STB",
    domId: "s-940gzzlusfb_label_2_",
    passengers: 2.7
  },
  "RAV":{
    name: "Ravenscourt Park",
    code: "RAV",
    domId: "s-940gzzlurvp_label_2_",
    passengers: 3.18
  },
  "WEK":{
    name: "West Kensington",
    code: "WEK",
    domId: "s-940gzzluwkn_label",
    passengers: 5.06
  },
  "BAC":{
    name: "Barons Court",
    code: "BAC",
    domId: "s-940gzzlubsc",
    passengers: 7.21
  },
  "EAC":{
    name: "Ealing Common",
    code: "EAC",
    domId: "s-940gzzluecm_label",
    passengers: 3.18
  },
  "GUN":{
    name: "Gunnersbury",
    code: "GUN",
    domId: "s-940gzzlugby_label",
    passengers: 5.78
  },
  "KEW":{
    name: "Kew Gardens",
    code: "KEW",
    domId: "s-940gzzlukwg_label",
    passengers: 4.18
  },
  "RID":{
    name: "Richmond",
    code: "RID",
    domId: "s-940gzzlurmd_label",
    passengers: 8.11
  },
  "EMI":{
    name: "Emirates Royal Docks",
    code: "EMI",
    domId: "s-9400zzalrdk_label_1_"
  },
  "EGP":{
    name: "Emirates Greenwich Peninsula",
    code: "EGP",
    domId: "s-9400zzalgwp_label_2_"
  },
  "CAW":{
    name: "Canary Wharf",
    code: "CAW",
    domId: "s-940gzzlucyf_label_2_",
    passengers: 54.79
  },
  "CWA":{
    name: "Canada Water",
    code: "CWA",
    domId: "s-940gzzlucwr_label_1_",
    passengers: 14.44
  },
  "GRP":{
    name: "Green Park",
    code: "GRP",
    domId: "s-940gzzlugpk_label_2_",
    passengers: 41.24
  },
  "LOB":{
    name: "London Bridge",
    code: "LOB",
    domId: "s-940gzzlulnb_label_1_",
    passengers: 70.74
  },
  "BER":{
    name: "Bermondsey",
    code: "BER",
    domId: "s-940gzzlubmy_label_1_",
    passengers: 11.07
  },
  "SRK":{
    name: "Southwark",
    code: "SRK",
    domId: "s-940gzzluswk_label_2_",
    passengers: 17.86
  },
  "WAO":{
    name: "Waterloo",
    code: "WAO",
    domId: "s-940gzzluwlo_label_2_",
    passengers: 100.36
  },
  "NOG":{
    name: "North Greenwich",
    code: "NOG",
    domId: "s-940gzzlungw_label_1_",
    passengers: 26.45
  },
  "MHE":{
    name: "Mill Hill East",
    code: "MHE",
    domId: "s-940gzzlumhl_label_2_",
    passengers: 1.34
  },
  "HIB":{
    name: "High Barnet",
    code: "HIB",
    domId: "s-940gzzluhbt_label_2_",
    passengers: 3.65
  },
  "TAW":{
    name: "Totteridge & Whetstone",
    code: "TAW",
    domId: "s-940gzzlutaw_label_2_",
    passengers: 2.23
  },
  "WOP":{
    name: "Woodside Park",
    code: "WOP",
    domId: "s-940gzzluwop_label_1_",
    passengers: 2.87
  },
  "WEF":{
    name: "West Finchley",
    code: "WEF",
    domId: "s-940gzzluwfn_label_2_",
    passengers: 1.67
  },
  "FIN":{
    name: "Finchley Central",
    code: "FIN",
    domId: "s-940gzzlufyc_label_1_",
    passengers: 6.95
  },
  "EAF":{
    name: "East Finchley",
    code: "EAF",
    domId: "s-940gzzluefy_label_2_",
    passengers: 7.47
  },
  "HIE":{
    name: "Highgate",
    code: "HIE",
    domId: "s-940gzzluhgt_label_2_",
    passengers: 5.77
  },
  "ARC":{
    name: "Archway",
    code: "ARC",
    domId: "s-940gzzluacy_label_1_",
    passengers: 9.94
  },
  "KET":{
    name: "Kentish Town",
    code: "KET",
    domId: "s-940gzzluksh_label_2_",
    passengers: 8.36
  },
  "TUF":{
    name: "Tufnell Park",
    code: "TUF",
    domId: "s-940gzzlutfp_label",
    passengers: 3.71
  },
  "EDE":{
    name: "Edgware",
    code: "EDE",
    domId: "s-940gzzluegw_label",
    passengers: 5.19
  },
  "BUR":{
    name: "Burnt Oak",
    code: "BUR",
    domId: "s-940gzzlubtk_label",
    passengers: 4.52
  },
  "COL":{
    name: "Colindale",
    code: "COL",
    domId: "s-940gzzlucnd_label",
    passengers: 6.23
  },
  "HEN":{
    name: "Hendon Central",
    code: "HEN",
    domId: "s-940gzzluhcl_label",
    passengers: 8.13
  },
  "BRC":{
    name: "Brent Cross",
    code: "BRC",
    domId: "s-940gzzlubtx_label",
    passengers: 2.49
  },
  "GOG":{
    name: "Golders Green",
    code: "GOG",
    domId: "s-940gzzluggn_label",
    passengers: 8.51
  },
  "HAD":{
    name: "Hampstead",
    code: "HAD",
    domId: "s-940gzzluhtd_label",
    passengers: 4.64
  },
  "BEL":{
    name: "Belsize Park",
    code: "BEL",
    domId: "s-940gzzlubzp_label",
    passengers: 6.48
  },
  "CHF":{
    name: "Chalk Farm",
    code: "CHF",
    domId: "s-940gzzlucfm_label",
    passengers: 5.61
  },
  "CAT":{
    name: "Camden Town",
    code: "CAT",
    domId: "s-940gzzluctn_label",
    passengers: 22.88
  },
  "MOR":{
    name: "Mornington Crescent",
    code: "MOR",
    domId: "s-940gzzlumtc_label_2_",
    passengers: 5.04
  },
  "GOS":{
    name: "Goodge Street",
    code: "GOS",
    domId: "s-940gzzlugdg_label_1_",
    passengers: 8.46
  },
  "WAS":{
    name: "Warren Street",
    code: "WAS",
    domId: "s-940gzzluwrr_label_2_",
    passengers: 20.35
  },
  "LEI":{
    name: "Leicester Square",
    code: "LEI",
    domId: "s-940gzzlulsq_label_2_",
    passengers: 37.84
  },
  "BOR":{
    name: "Borough",
    code: "BOR",
    domId: "s-940gzzlubor_label_1_",
    passengers: 5.87
  },
  "ANG":{
    name: "Angel",
    code: "ANG",
    domId: "s-940gzzluagl_label_2_",
    passengers: 20.1
  },
  "OLD":{
    name: "Old Street",
    code: "OLD",
    domId: "s-940gzzluods_label_1_",
    passengers: 25.97
  },
  "KON":{
    name: "Kennington",
    code: "KON",
    domId: "s-940gzzlukng_label_1_",
    passengers: 5.59
  },
  "CLN":{
    name: "Clapham North",
    code: "CLN",
    domId: "s-940gzzlucpn_label_2_",
    passengers: 6.9
  },
  "CHS":{
    name: "Clapham High Street",
    code: "CHS",
    domId: "s-910gclphhs_label_1_"
  },
  "OVA":{
    name: "Oval",
    code: "OVA",
    domId: "s-940gzzluovl_label_2_",
    passengers: 6.45
  },
  "CLC":{
    name: "Clapham Common",
    code: "CLC",
    domId: "s-940gzzlucpc_label_1_",
    passengers: 10.04
  },
  "CLS":{
    name: "Clapham South",
    code: "CLS",
    domId: "s-940gzzlucps_label_1_",
    passengers: 8.8
  },
  "TOO":{
    name: "Tooting Bec",
    code: "TOO",
    domId: "s-940gzzlutbc_label_2_",
    passengers: 7.92
  },
  "TOB":{
    name: "Tooting Broadway",
    code: "TOB",
    domId: "s-940gzzlutby_label_2_",
    passengers: 15.92
  },
  "COW":{
    name: "Colliers Wood",
    code: "COW",
    domId: "s-940gzzlucsd_label_1_",
    passengers: 6.72
  },
  "SWI":{
    name: "South Wimbledon",
    code: "SWI",
    domId: "s-940gzzluswn_label_1_",
    passengers: 4.76
  },
  "MEN":{
    name: "Morden",
    code: "MEN",
    domId: "s-940gzzlumdn_label_2_",
    passengers: 10.06
  },
  "BAL":{
    name: "Balham",
    code: "BAL",
    domId: "s-940gzzlublm_label_1_",
    passengers: 14.64
  },
  "RAY":{
    name: "Rayners Lane",
    code: "RAY",
    domId: "s-940gzzluryl_label_1_",
    passengers: 4.46
  },
  "SOH":{
    name: "South Harrow",
    code: "SOH",
    domId: "s-940gzzlushh_label_1_",
    passengers: 2.48
  },
  "SUD":{
    name: "Sudbury Hill",
    code: "SUD",
    domId: "s-940gzzlusuh_label_2_",
    passengers: 1.98
  },
  "SUT":{
    name: "Sudbury Town",
    code: "SUT",
    domId: "s-940gzzlusut_label_1_",
    passengers: 2
  },
  "ALP":{
    name: "Alperton",
    code: "ALP",
    domId: "s-940gzzlualp_label_2_",
    passengers: 3.17
  },
  "PRO":{
    name: "Park Royal",
    code: "PRO",
    domId: "s-940gzzlupkr_label_1_",
    passengers: 2.02
  },
  "NOE":{
    name: "North Ealing",
    code: "NOE",
    domId: "s-940gzzlunen_label_1_",
    passengers: 0.91
  },
  "HT4":{
    name: "Heathrow Terminal 4",
    code: "HT4",
    domId: "s-940gzzluhr4_label_1_",
    passengers: 2.28
  },
  "HT5":{
    name: "Heathrow Terminal 5",
    code: "HT5",
    domId: "s-940gzzluhr5_label_2_",
    passengers: 4.45
  },
  "NOS":{
    name: "Northfields",
    code: "NOS",
    domId: "s-940gzzlunfd_label",
    passengers: 3.91
  },
  "BOS":{
    name: "Boston Manor",
    code: "BOS",
    domId: "s-940gzzlubos_label",
    passengers: 2.32
  },
  "SOE":{
    name: "South Ealing",
    code: "SOE",
    domId: "s-940gzzlusea_label",
    passengers: 3.62
  },
  "OST":{
    name: "Osterley",
    code: "OST",
    domId: "s-940gzzluosy_label",
    passengers: 2.32
  },
  "HOU":{
    name: "Hounslow Central",
    code: "HOU",
    domId: "s-940gzzluhwc_label_1_",
    passengers: 3.83
  },
  "HOE":{
    name: "Hounslow East",
    code: "HOE",
    domId: "s-940gzzluhwe_label",
    passengers: 3.87
  },
  "HOW":{
    name: "Hounslow West",
    code: "HOW",
    domId: "s-940gzzluhwt_label",
    passengers: 3.55
  },
  "HCR":{
    name: "Hatton Cross",
    code: "HCR",
    domId: "s-940gzzluhnx_label_2_",
    passengers: 3.25
  },
  "HTE":{
    name: "Heathrow Terminals 2 & 3",
    code: "HTE",
    domId: "s-940gzzluhrc_label_2_",
    passengers: 7.73
  },
  "RUS":{
    name: "Russell Square",
    code: "RUS",
    domId: "s-940gzzlursq_label_1_",
    passengers: 12.35
  },
  "HYD":{
    name: "Hyde Park Corner",
    code: "HYD",
    domId: "s-940gzzluhpc_label_1_",
    passengers: 6.31
  },
  "KNI":{
    name: "Knightsbridge",
    code: "KNI",
    domId: "s-940gzzluknb_label_1_",
    passengers: 19.09
  },
  "COV":{
    name: "Covent Garden",
    code: "COV",
    domId: "s-940gzzlucgn_label",
    passengers: 17.19
  },
  "OAK":{
    name: "Oakwood",
    code: "OAK",
    domId: "s-910genfcoak_label_2_",
    passengers: 2.88
  },
  "COC":{
    name: "Cockfosters",
    code: "COC",
    domId: "s-940gzzlucks_label_2_",
    passengers: 2.04
  },
  "ATE":{
    name: "Southgate",
    code: "ATE",
    domId: "s-940gzzlusgt_label_1_",
    passengers: 5.65
  },
  "ARN":{
    name: "Arnos Grove",
    code: "ARN",
    domId: "s-940gzzluasg_label_1_",
    passengers: 4.65
  },
  "BOU":{
    name: "Bounds Green",
    code: "BOU",
    domId: "s-940gzzlubds_label_2_",
    passengers: 6.62
  },
  "WOG":{
    name: "Wood Green",
    code: "WOG",
    domId: "s-940gzzluwog_label_2_",
    passengers: 13.2
  },
  "TUL":{
    name: "Turnpike Lane",
    code: "TUL",
    domId: "s-940gzzlutpn_label_2_",
    passengers: 10.86
  },
  "MHO":{
    name: "Manor House",
    code: "MHO",
    domId: "s-940gzzlumrh_label_1_",
    passengers: 9.12
  },
  "ARS":{
    name: "Arsenal",
    code: "ARS",
    domId: "s-940gzzluasl_label_2_",
    passengers: 3.01
  },
  "HRO":{
    name: "Holloway Road",
    code: "HRO",
    domId: "s-940gzzluhwy_label_2_",
    passengers: 6.72
  },
  "BLR":{
    name: "Blackhorse Road",
    code: "BLR",
    domId: "s-910gblchsrd_label",
    passengers: 8.45
  },
  "HIN":{
    name: "Highbury & Islington",
    code: "HIN",
    domId: "s-940gzzluhai_label",
    passengers: 20.22
  },
  "FIP":{
    name: "Finsbury Park",
    code: "FIP",
    domId: "s-940gzzlufpk_label",
    passengers: 32.74
  },
  "SES":{
    name: "Seven Sisters",
    code: "SES",
    domId: "s-940gzzlusvs_label_2_",
    passengers: 18.61
  },
  "TOH":{
    name: "Tottenham Hale",
    code: "TOH",
    domId: "s-940gzzlutmh_label",
    passengers: 13.21
  },
  "WAL":{
    name: "Walthamstow Central",
    code: "WAL",
    domId: "s-940gzzluwwl_label_1_",
    passengers: 22.77
  },
  "PIM":{
    name: "Pimlico",
    code: "PIM",
    domId: "s-940gzzlupco_label_2_",
    passengers: 11.49
  },
  "VAU":{
    name: "Vauxhall",
    code: "VAU",
    domId: "s-940gzzluvxl_label_1_",
    passengers: 32.23
  },
  "STL":{
    name: "Stockwell",
    code: "STL",
    domId: "s-940gzzluskw_label",
    passengers: 11.42
  },
  "BRI":{
    name: "Brixton",
    code: "BRI",
    domId: "s-940gzzlubxn_label",
    passengers: 33.46
  },
  "WSI":{
    name: "West Silvertown",
    code: "WSI",
    domId: "s-940gzzdlwsv_label_1_"
  },
  "PON":{
    name: "Pontoon Dock",
    code: "PON",
    domId: "s-940gzzdlpdk_label_1_"
  },
  "KGV":{
    name: "King George V",
    code: "KGV",
    domId: "s-940gzzdlkgv_label_1_"
  },
  "CUS":{
    name: "Custom House",
    code: "CUS",
    domId: "s-940gzzdlcus_label_2_"
  },
  "PRI":{
    name: "Prince Regent",
    code: "PRI",
    domId: "s-940gzzdlpre_label_2_"
  },
  "ROA":{
    name: "Royal Albert",
    code: "ROA",
    domId: "s-940gzzdlral_label_2_"
  },
  "BEP":{
    name: "Beckton Park",
    code: "BEP",
    domId: "s-940gzzdlbpk_label_2_"
  },
  "CYP":{
    name: "Cyprus",
    code: "CYP",
    domId: "s-940gzzdlcyp_label_2_"
  },
  "GAL":{
    name: "Gallions Reach",
    code: "GAL",
    domId: "s-940gzzdlgal_label_2_"
  },
  "BEN":{
    name: "Beckton",
    code: "BEN",
    domId: "s-940gzzdlbec_label_2_"
  },
  "WEY":{
    name: "Westferry",
    code: "WEY",
    domId: "s-940gzzdlwfe_label_2_"
  },
  "BLL":{
    name: "Blackwall",
    code: "BLL",
    domId: "s-940gzzdlbla_label_1_"
  },
  "ROV":{
    name: "Royal Victoria",
    code: "ROV",
    domId: "s-940gzzdlrvc_label_1_"
  },
  "BOC":{
    name: "Bow Church",
    code: "BOC",
    domId: "s-940gzzdlbow_label_2_"
  },
  "ISL":{
    name: "Island Gardens",
    code: "ISL",
    domId: "s-940gzzdlisl_label_2_"
  },
  "DEP":{
    name: "Deptford Bridge",
    code: "DEP",
    domId: "s-940gzzdldep_label_2_"
  },
  "SOQ":{
    name: "South Quay",
    code: "SOQ",
    domId: "s-940gzzdlsoq_label_2_"
  },
  "CRR":{
    name: "Crossharbour",
    code: "CRR",
    domId: "s-940gzzdlcla_label_2_"
  },
  "MUD":{
    name: "Mudchute",
    code: "MUD",
    domId: "s-940gzzdlmud_label_2_"
  },
  "HER":{
    name: "Heron Quays",
    code: "HER",
    domId: "s-940gzzdlheq_label_2_"
  },
  "WIQ":{
    name: "West India Quay",
    code: "WIQ",
    domId: "s-940gzzdlwiq_label_1_"
  },
  "ELV":{
    name: "Elverson Road",
    code: "ELV",
    domId: "s-940gzzdlelv_label_2_"
  },
  "DEV":{
    name: "Devons Road",
    code: "DEV",
    domId: "s-940gzzdldev_label_2_"
  },
  "LAP":{
    name: "Langdon Park",
    code: "LAP",
    domId: "s-940gzzdlldp_label_2_"
  },
  "ALL":{
    name: "All Saints",
    code: "ALL",
    domId: "s-940gzzdlall_label_1_"
  },
  "CTO":{
    name: "Canning Town",
    code: "CTO",
    domId: "s-940gzzlubxn_label_2_",
    passengers: 11.91
  },
  "POP":{
    name: "Poplar",
    code: "POP",
    domId: "s-940gzzdlpop_label_2_"
  },
  "PUD":{
    name: "Pudding Mill Lane",
    code: "PUD",
    domId: "s-940gzzdlpud_label_2_"
  },
  "EAI":{
    name: "East India",
    code: "EAI",
    domId: "s-940gzzdlein_label_1_"
  },
  "LCA":{
    name: "London City Airport",
    code: "LCA",
    domId: "s-940gzzdllca_label_1_"
  },
  "LIM":{
    name: "Limehouse",
    code: "LIM",
    domId: "s-940gzzdllim_label_1_"
  },
  "WOA":{
    name: "Woolwich Arsenal",
    code: "WOA",
    domId: "s-940gzzdlwla_label_1_"
  },
  "CUT":{
    name: "Cutty Sark",
    code: "CUT",
    domId: "s-940gzzdlcut_label_1_"
  },
  "GRH":{
    name: "Greenwich",
    code: "GRH",
    domId: "s-940gzzdlgre_label_1_"
  },
  "LEW":{
    name: "Lewisham",
    code: "LEW",
    domId: "s-940gzzdllew_label_1_"
  },
  "TOW":{
    name: "Tower Gateway",
    code: "TOW",
    domId: "s-940gzzdltwg_label_2_"
  },
  "STI":{
    name: "Stratford International",
    code: "STI",
    domId: "s-940gzzdlsit_label_2_"
  },
  "THF":{
    name: "Tower Hill",
    code: "THF",
    domId: "s-940gzzlutwh_label_1_",
    passengers: 21.83
  },
  "SHS":{
    name: "Stratford High Street",
    code: "SHS",
    domId: "s-940gzzdlshs_label_1_"
  },
  "ABB":{
    name: "Abbey Road",
    code: "ABB",
    domId: "s-940gzzdlabr_label_1_"
  },
  "SLA":{
    name: "Star Lane",
    code: "SLA",
    domId: "s-940gzzdlstl_label_2_"
  },
  "ACT":{
    name: "Acton Central",
    code: "ACT",
    domId: "s-910gactnctl_label"
  },
  "SOA":{
    name: "South Acton",
    code: "SOA",
    domId: "s-910gsacton_label"
  },
  "KEO":{
    name: "Kensington (Olympia)",
    code: "KEO",
    domId: "s-940gzzlukoy_label",
    passengers: 2.05
  },
  "KHR":{
    name: "Kilburn High Road",
    code: "KHR",
    domId: "s-910gklbrnhr_label_3_"
  },
  "SHA":{
    name: "South Hampstead",
    code: "SHA",
    domId: "s-910gshmpstd_label_1_"
  },
  "KER":{
    name: "Kensal Rise",
    code: "KER",
    domId: "s-910gkenr_label_1_"
  },
  "BRP":{
    name: "Brondesbury Park",
    code: "BRP",
    domId: "s-910gbrbypk_label_2_"
  },
  "HAH":{
    name: "Hampstead Heath",
    code: "HAH",
    domId: "s-910ghmpstdh_label_2_"
  },
  "FRA":{
    name: "Finchley Road & Frognal",
    code: "FRA",
    domId: "s-910gfnchlyr_label_2_"
  },
  "BRY":{
    name: "Brondesbury",
    code: "BRY",
    domId: "s-910gbrby_label_2_"
  },
  "GOA":{
    name: "Gospel Oak",
    code: "GOA",
    domId: "s-910ggosplok_label_1_"
  },
  "KTW":{
    name: "Kentish Town West",
    code: "KTW",
    domId: "s-910gkntshtw_label_2_"
  },
  "CAD":{
    name: "Camden Road",
    code: "CAD",
    domId: "s-910gcmdnrd_label_1_"
  },
  "DAL":{
    name: "Dalston Kingsland",
    code: "DAL",
    domId: "s-910gdalskld_label_2_"
  },
  "HCE":{
    name: "Hackney Central",
    code: "HCE",
    domId: "s-910ghacknyc_label_1_"
  },
  "CRA":{
    name: "Caledonian Road & Barnsbury",
    code: "CRA",
    domId: "s-910gcldnnrb_label_1_"
  },
  "HWI":{
    name: "Hackney Wick",
    code: "HWI",
    domId: "s-910ghacknyw_label_1_"
  },
  "HOM":{
    name: "Homerton",
    code: "HOM",
    domId: "s-910ghomrton_label_2_"
  },
  "CAY":{
    name: "Canonbury",
    code: "CAY",
    domId: "s-910gcnnb_label_2_"
  },
  "NOJ":{
    name: "Norwood Junction",
    code: "NOJ",
    domId: "s-910gnorwdj_label_2_"
  },
  "FOH":{
    name: "Forest Hill",
    code: "FOH",
    domId: "s-910gforesth_label_1_"
  },
  "ANE":{
    name: "Anerley",
    code: "ANE",
    domId: "s-910ganerley_label_1_"
  },
  "PEN":{
    name: "Penge West",
    code: "PEN",
    domId: "s-910gpenew_label_2_"
  },
  "HON":{
    name: "Honor Oak Park",
    code: "HON",
    domId: "s-910ghonropk_label_2_"
  },
  "BEY":{
    name: "Brockley",
    code: "BEY",
    domId: "s-910gbrockly_label_2_"
  },
  "WCR":{
    name: "West Croydon",
    code: "WCR",
    domId: "s-910gwcroydon_label_2_"
  },
  "WAP":{
    name: "Wapping",
    code: "WAP",
    domId: "s-910gwapping_label_2_"
  },
  "NCG":{
    name: "New Cross Gate",
    code: "NCG",
    domId: "s-910gnewxgte_label_2_"
  },
  "SYD":{
    name: "Sydenham",
    code: "SYD",
    domId: "s-910gsydenhm_label_1_"
  },
  "NEC":{
    name: "New Cross",
    code: "NEC",
    domId: "s-910gnwcrell_label_2_"
  },
  "CRY":{
    name: "Crystal Palace",
    code: "CRY",
    domId: "s-910gcrystlp_label_2_"
  },
  "SUR":{
    name: "Surrey Quays",
    code: "SUR",
    domId: "s-910gsurreyq_label_2_"
  },
  "ROT":{
    name: "Rotherhithe",
    code: "ROT",
    domId: "s-910grtherhi_label_2_"
  },
  "SHL":{
    name: "Shadwell",
    code: "SHL",
    domId: "s-940gzzdlsha_label_1_"
  },
  "QRP":{
    name: "Queens Road Peckham",
    code: "QRP",
    domId: "s-910gpckhmqd_label_1_"
  },
  "PEC":{
    name: "Peckham Rye",
    code: "PEC",
    domId: "s-910gpckhmry_label_1_"
  },
  "DEN":{
    name: "Denmark Hill",
    code: "DEN",
    domId: "s-910gdenmrkh_label_2_"
  },
  "WRO":{
    name: "Wandsworth Road",
    code: "WRO",
    domId: "s-910gwndswrd_label_2_"
  },
  "IMP":{
    name: "Imperial Wharf",
    code: "IMP",
    domId: "s-910gcseah_label_1_"
  },
  "WPA":{
    name: "Wanstead Park",
    code: "WPA",
    domId: "s-910gwnstdpk_label_2_"
  },
  "LHR":{
    name: "Leytonstone High Road",
    code: "LHR",
    domId: "s-910glytnshr_label_1_"
  },
  "LMR":{
    name: "Leyton Midland Road",
    code: "LMR",
    domId: "s-910gleytnmr_label_2_"
  },
  "WQR":{
    name: "Walthamstow Queen's Road",
    code: "WQR",
    domId: "s-910gwlthqrd_label_1_"
  },
  "WOK":{
    name: "Woodgrange Park",
    code: "WOK",
    domId: "s-910gwdgrnpk_label_2_"
  },
  "ATO":{
    name: "Acton Town",
    code: "ATO",
    domId: "s-940gzzluact_label",
    passengers: 6.27
  },
  "HGL":{
    name: "Harringay Green Lanes",
    code: "HGL",
    domId: "s-910ghrgygl_label_2_"
  },
  "SOT":{
    name: "South Tottenham",
    code: "SOT",
    domId: "s-910gstotnhm_label_2_"
  },
  "UPP":{
    name: "Upper Holloway",
    code: "UPP",
    domId: "s-910guprhlwy_label_1_"
  },
  "CRH":{
    name: "Crouch Hill",
    code: "CRH",
    domId: "s-910gcrouchh_label_1_"
  },
  "SHO":{
    name: "Shoreditch High Street",
    code: "SHO",
    domId: "s-910gshrdhst_label_2_"
  },
  "DAJ":{
    name: "Dalston Junction",
    code: "DAJ",
    domId: "s-910gdals_label"
  },
  "HAG":{
    name: "Haggerston",
    code: "HAG",
    domId: "s-910ghaggers_label_2_"
  },
  "HOX":{
    name: "Hoxton",
    code: "HOX",
    domId: "s-910ghoxton_label_2_"
  },
  "CLJ":{
    name: "Clapham Junction",
    code: "CLJ",
    domId: "s-910gclphmjw_label"
  },
  "HOP":{
    name: "Holland Park",
    code: "HOP",
    domId: "s-940gzzluhpk_label",
    passengers: 3.23
  },
  "OAD":{
    name: "Caledonian Road",
    code: "OAD",
    domId: "s-940gzzlucar_label",
    passengers: 5.73
  },
  "VIC":{
    name: "Victoria",
    code: "VIC",
    domId: "s-940gzzluvic_label",
    passengers: 83.5
  },
  "HRI":{
    name: "Harrington Road",
    code: "HRI",
    domId: "s-940gzzcrhar_label"
  },
  "ARE":{
    name: "Arena",
    code: "ARE",
    domId: "s-940gzzcrara_label"
  },
  "DUN":{
    name: "Dundonald Road",
    code: "DUN",
    domId: "s-940gzzcrddr_label_1_"
  },
  "MER":{
    name: "Merton Park",
    code: "MER",
    domId: "s-940gzzcrmtp_label"
  },
  "WOE":{
    name: "Woodside",
    code: "WOE",
    domId: "s-940gzzcrwod_label"
  },
  "BLE":{
    name: "Blackhorse Lane",
    code: "BLE",
    domId: "s-940gzzcrbla_label"
  },
  "ADD":{
    name: "Addiscombe",
    code: "ADD",
    domId: "s-940gzzcradd_label"
  },
  "AVE":{
    name: "Avenue Road",
    code: "AVE",
    domId: "s-940gzzcrave_label"
  },
  "SAN":{
    name: "Sandilands",
    code: "SAN",
    domId: "s-940gzzcrsan_label"
  },
  "KHD":{
    name: "King Henry's Drive",
    code: "KHD",
    domId: "s-940gzzcrkgh_label"
  },
  "NAD":{
    name: "New Addington",
    code: "NAD",
    domId: "s-940gzzcrnwa_label"
  },
  "FIE":{
    name: "Fieldway",
    code: "FIE",
    domId: "s-940gzzcrfld_label"
  },
  "ADV":{
    name: "Addington Village",
    code: "ADV",
    domId: "s-940gzzcradv_label"
  },
  "GHI":{
    name: "Gravel Hill",
    code: "GHI",
    domId: "s-940gzzcrgra_label"
  },
  "COO":{
    name: "Coombe Lane",
    code: "COO",
    domId: "s-940gzzcrcoo_label"
  },
  "LLO":{
    name: "Lloyd Park",
    code: "LLO",
    domId: "s-940gzzcrloy_label"
  },
  "WEL":{
    name: "Wellesley Road",
    code: "WEL",
    domId: "s-940gzzcrwel_label"
  },
  "REE":{
    name: "Reeves Corner",
    code: "REE",
    domId: "s-940gzzcrrvc_label"
  },
  "MIT":{
    name: "Mitcham",
    code: "MIT",
    domId: "s-940gzzcrmch_label"
  },
  "BED":{
    name: "Beddington Lane",
    code: "BED",
    domId: "s-940gzzcrbed_x0a__label"
  },
  "AMP":{
    name: "Ampere Way",
    code: "AMP",
    domId: "s-940gzzcramp_label"
  },
  "WAK":{
    name: "Wandle Park",
    code: "WAK",
    domId: "s-940gzzcrwan_label"
  },
  "CEN":{
    name: "Centrale",
    code: "CEN",
    domId: "s-940gzzcrctr_label"
  },
  "CHU":{
    name: "Church Street",
    code: "CHU",
    domId: "s-940gzzcrchr_label"
  },
  "BEW":{
    name: "Belgrave Walk",
    code: "BEW",
    domId: "s-940gzzcrbgv_label"
  },
  "PHI":{
    name: "Phipps Bridge",
    code: "PHI",
    domId: "s-940gzzcrphi_label"
  },
  "MRO":{
    name: "Morden Road",
    code: "MRO",
    domId: "s-940gzzcrmdn_label"
  },
  "THL":{
    name: "Therapia Lane",
    code: "THL",
    domId: "s-940gzzcrtpa_label"
  },
  "WAD":{
    name: "Waddon Marsh",
    code: "WAD",
    domId: "s-940gzzcrwad_label"
  },
  "GEO":{
    name: "George Street",
    code: "GEO",
    domId: "s-940gzzcrcen_label"
  },
  "LEB":{
    name: "Lebanon Road",
    code: "LEB",
    domId: "s-940gzzcrleb_label"
  },
  "BAD":{
    name: "Beckenham Road",
    code: "BAD",
    domId: "s-940gzzcrbrd_label"
  },
  "MIJ":{
    name: "Mitcham Junction",
    code: "MIJ",
    domId: "s-910gzzcrmjt-label"
  },
  "ECR":{
    name: "East Croydon",
    code: "ECR",
    domId: "s-940gzzcrecr_label"
  },
  "EEN":{
    name: "Elmers End",
    code: "EEN",
    domId: "s-940gzzcrelm-label"
  },
  "BIR":{
    name: "Birkbeck",
    code: "BIR",
    domId: "s-940gzzcrbir-label"
  },
  "BEJ":{
    name: "Beckenham Junction",
    code: "BEJ",
    domId: "s-940gzzcrbek_label"
  },
  "SWC":{
    name: "Swiss Cottage",
    code: "SWC",
    domId: "s-940gzzluswc_label_2_",
    passengers: 7.58
  },
  "FIR":{
    name: "Finchley Road",
    code: "FIR",
    domId: "s-940gzzlufyr_label_2_",
    passengers: 10
  },
  "WHA":{
    name: "West Hampstead",
    code: "WHA",
    domId: "s-940gzzluwhp_label_1_",
    passengers: 11.04
  },
  "SJW":{
    name: "St. John's Wood",
    code: "SJW",
    domId: "s-940gzzlusjw_label_1_",
    passengers: 7.79
  }
}

export { STATIONS };