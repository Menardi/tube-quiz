// This file contains some utility functions that can be useful when generating new packs
// or doing some other manipulation of stations and lines.

class Util {

  findStationByName(name) {
    if(name.length === 3) return stations[name]; // it's the code

    const keys = Object.keys(stations);

    for(let i=0; i<keys.length; i++) {
      const station = stations[keys[i]];
      if(station.name === name.trim()) return station;
    }

    console.log(`No match for ${name}`);
  }

  createLine() {
    const txt = ``;
    const data = txt.split('\n');
    return this.shuffle(data.map(st => this.findStationByName(st).code));
  }

  shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
  }

  assignPassengers() {
    for(let i=0; i<passengerData.length; i++) {
      const match = this.findStationByName(passengerData[i].station);

      if(match) {
        match.passengers = passengerData[i].passengers;
      }
    }
  }

  createArrayOfStationsByPopularity() {
    return passengerData.map(station => {
      const match = this.findStationByName(station.name);

      if(match) {
        return match.code;
      }
    });
  }

}

var passengerData = [{station: "Waterloo", passengers: 100.36},
{station: "King's Cross St. Pancras", passengers: 95.03},
{station: "Victoria", passengers: 83.50},
{station: "Oxford Circus", passengers: 83.26},
{station: "Liverpool Street", passengers: 71.61},
{station: "London Bridge", passengers: 70.74},
{station: "Stratford", passengers: 67.05},
{station: "Bank", passengers: 64.26},
{station: "Canary Wharf", passengers: 54.79},
{station: "Paddington", passengers: 49.48},
{station: "Euston", passengers: 43.10},
{station: "Piccadilly Circus", passengers: 41.29},
{station: "Green Park", passengers: 41.24},
{station: "Hammersmith", passengers: 39.99},
{station: "Bond Street", passengers: 39.53},
{station: "Tottenham Court Road", passengers: 39.35},
{station: "Leicester Square", passengers: 37.84},
{station: "Holborn", passengers: 33.96},
{station: "South Kensington", passengers: 33.60},
{station: "Brixton", passengers: 33.46},
{station: "Finsbury Park", passengers: 32.74},
{station: "Vauxhall", passengers: 32.23},
{station: "Baker Street", passengers: 29.75},
{station: "Westminster", passengers: 28.38},
{station: "Moorgate", passengers: 27.57},
{station: "Embankment", passengers: 26.84},
{station: "North Greenwich", passengers: 26.45},
{station: "Old Street", passengers: 25.97},
{station: "Elephant & Castle", passengers: 23.30},
{station: "Camden Town", passengers: 22.88},
{station: "Shepherd's Bush", passengers: 22.85},
{station: "Walthamstow Central", passengers: 22.77},
{station: "Tower Hill", passengers: 21.83},
{station: "Warren Street", passengers: 20.35},
{station: "Highbury & Islington", passengers: 20.22},
{station: "Angel", passengers: 20.10},
{station: "Earl's Court", passengers: 20.00},
{station: "Knightsbridge", passengers: 19.09},
{station: "Seven Sisters", passengers: 18.61},
{station: "Ealing Broadway", passengers: 18.60},
{station: "St. Paul's", passengers: 18.42},
{station: "Chancery Lane", passengers: 18.19},
{station: "Southwark", passengers: 17.86},
{station: "Covent Garden", passengers: 17.19},
{station: "Notting Hill Gate", passengers: 17.18},
{station: "Sloane Square", passengers: 17.15},
{station: "Bethnal Green", passengers: 16.27},
{station: "Tooting Broadway", passengers: 15.92},
{station: "Farringdon", passengers: 15.87},
{station: "Barking", passengers: 15.86},
{station: "Mile End", passengers: 15.75},
{station: "Blackfriars", passengers: 15.45},
{station: "Wembley Park", passengers: 15.10},
{station: "St. James's Park", passengers: 14.93},
{station: "East Ham", passengers: 14.75},
{station: "Balham", passengers: 14.64},
{station: "Canada Water", passengers: 14.44},
{station: "Euston Square", passengers: 14.40},
{station: "Whitechapel", passengers: 14.37},
{station: "Leyton", passengers: 14.33},
{station: "Marble Arch", passengers: 14.11},
{station: "Gloucester Road", passengers: 13.98},
{station: "Aldgate East", passengers: 13.43},
{station: "Wimbledon", passengers: 13.40},
{station: "Tottenham Hale", passengers: 13.21},
{station: "Wood Green", passengers: 13.20},
{station: "High Street Kensington", passengers: 13.10},
{station: "Marylebone", passengers: 12.95},
{station: "Russell Square", passengers: 12.35},
{station: "Barbican", passengers: 11.97},
{station: "Canning Town", passengers: 11.91},
{station: "Pimlico", passengers: 11.49},
{station: "Stockwell", passengers: 11.42},
{station: "Leytonstone", passengers: 11.30},
{station: "Bermondsey", passengers: 11.07},
{station: "West Hampstead", passengers: 11.04},
{station: "Turnpike Lane", passengers: 10.86},
{station: "Harrow-on-the-Hill", passengers: 10.67},
{station: "Fulham Broadway", passengers: 10.15},
{station: "Upton Park", passengers: 10.14},
{station: "Morden", passengers: 10.06},
{station: "Clapham Common", passengers: 10.04},
{station: "Finchley Road", passengers: 10.00},
{station: "Archway", passengers: 9.94},
{station: "Manor House", passengers: 9.12},
{station: "Cannon Street", passengers: 8.98},
{station: "Willesden Green", passengers: 8.97},
{station: "White City", passengers: 8.95},
{station: "Clapham South", passengers: 8.80},
{station: "Queensway", passengers: 8.71},
{station: "Great Portland Street", passengers: 8.66},
{station: "Kilburn", passengers: 8.58},
{station: "Golders Green", passengers: 8.51},
{station: "Goodge Street", passengers: 8.46},
{station: "Blackhorse Road", passengers: 8.45},
{station: "Uxbridge", passengers: 8.45},
{station: "Kentish Town", passengers: 8.36},
{station: "Temple", passengers: 8.22},
{station: "Hendon Central", passengers: 8.13},
{station: "Charing Cross", passengers: 8.13},
{station: "Richmond", passengers: 8.11},
{station: "Aldgate", passengers: 8.01},
{station: "Tooting Bec", passengers: 7.92},
{station: "St. John's Wood", passengers: 7.79},
{station: "Heathrow Terminals 2 & 3", passengers: 7.73},
{station: "Swiss Cottage", passengers: 7.58},
{station: "East Finchley", passengers: 7.47},
{station: "Barons Court", passengers: 7.21},
{station: "Gants Hill", passengers: 7.14},
{station: "Lancaster Gate", passengers: 7.06},
{station: "Edgware Road", passengers: 6.96, domId: "EDG"},
{station: "Finchley Central", passengers: 6.95},
{station: "Clapham North", passengers: 6.90},
{station: "Parsons Green", passengers: 6.75},
{station: "Holloway Road", passengers: 6.72},
{station: "Colliers Wood", passengers: 6.72},
{station: "Bounds Green", passengers: 6.62},
{station: "North Acton", passengers: 6.53},
{station: "Belsize Park", passengers: 6.48},
{station: "Oval", passengers: 6.45},
{station: "Stepney Green", passengers: 6.41},
{station: "East Putney", passengers: 6.37},
{station: "Hyde Park Corner", passengers: 6.31},
{station: "Southfields", passengers: 6.28},
{station: "Acton Town", passengers: 6.27},
{station: "Colindale", passengers: 6.23},
{station: "Mansion House", passengers: 6.14},
{station: "West Brompton", passengers: 6.10},
{station: "Dagenham Heathway", passengers: 6.04},
{station: "Borough", passengers: 5.87},
{station: "Ladbroke Grove", passengers: 5.80},
{station: "Gunnersbury", passengers: 5.78},
{station: "Wembley Central", passengers: 5.77},
{station: "Highgate", passengers: 5.77},
{station: "Caledonian Road", passengers: 5.73},
{station: "Woodford", passengers: 5.69},
{station: "Turnham Green", passengers: 5.65},
{station: "Southgate", passengers: 5.65},
{station: "Bow Road", passengers: 5.65},
{station: "Queen's Park", passengers: 5.64},
{station: "Chalk Farm", passengers: 5.61},
{station: "Kennington", passengers: 5.59},
{station: "Plaistow", passengers: 5.49},
{station: "Newbury Park", passengers: 5.43},
{station: "Putney Bridge", passengers: 5.42},
{station: "Upminster", passengers: 5.34},
{station: "South Woodford", passengers: 5.25},
{station: "Edgware", passengers: 5.19},
{station: "Northolt", passengers: 5.16},
{station: "Kingsbury", passengers: 5.12},
{station: "West Kensington", passengers: 5.06},
{station: "Mornington Crescent", passengers: 5.04},
{station: "Edgware Road", passengers: 5.01, code: "EDR"},
{station: "Harrow & Wealdstone", passengers: 4.96},
{station: "Greenford", passengers: 4.81},
{station: "South Wimbledon", passengers: 4.76},
{station: "Bayswater", passengers: 4.76},
{station: "Willesden Junction", passengers: 4.73},
{station: "Queensbury", passengers: 4.68},
{station: "Northwick Park", passengers: 4.65},
{station: "Arnos Grove", passengers: 4.65},
{station: "Hampstead", passengers: 4.64},
{station: "Burnt Oak", passengers: 4.52},
{station: "Warwick Avenue", passengers: 4.51},
{station: "Rayners Lane", passengers: 4.46},
{station: "Heathrow Terminal 5", passengers: 4.45},
{station: "Dollis Hill", passengers: 4.18},
{station: "Kew Gardens", passengers: 4.18},
{station: "East Acton", passengers: 4.12},
{station: "Hanger Lane", passengers: 4.10},
{station: "Stanmore", passengers: 4.04},
{station: "Westbourne Park", passengers: 3.98},
{station: "Northfields", passengers: 3.91},
{station: "Hounslow East", passengers: 3.87},
{station: "Hounslow Central", passengers: 3.83},
{station: "Bromley-by-Bow", passengers: 3.79},
{station: "Epping", passengers: 3.77},
{station: "Neasden", passengers: 3.75},
{station: "Hainault", passengers: 3.74},
{station: "Tufnell Park", passengers: 3.71},
{station: "Wood Lane", passengers: 3.68},
{station: "High Barnet", passengers: 3.65},
{station: "South Ealing", passengers: 3.62},
{station: "Shepherd's Bush Market", passengers: 3.57},
{station: "Becontree", passengers: 3.55},
{station: "Hounslow West", passengers: 3.55},
{station: "West Ham", passengers: 3.46},
{station: "Loughton", passengers: 3.45},
{station: "Kilburn Park", passengers: 3.43},
{station: "Maida Vale", passengers: 3.41},
{station: "Regent's Park", passengers: 3.35},
{station: "Preston Road", passengers: 3.31},
{station: "Hatton Cross", passengers: 3.25},
{station: "Holland Park", passengers: 3.23},
{station: "Pinner", passengers: 3.20},
{station: "Ravenscourt Park", passengers: 3.18},
{station: "Ealing Common", passengers: 3.18},
{station: "Alperton", passengers: 3.17},
{station: "Harlesden", passengers: 3.10},
{station: "Elm Park", passengers: 3.10},
{station: "Redbridge", passengers: 3.05},
{station: "Arsenal", passengers: 3.01},
{station: "Dagenham East", passengers: 2.98},
{station: "Wanstead", passengers: 2.96},
{station: "Eastcote", passengers: 2.94},
{station: "Canons Park", passengers: 2.93},
{station: "Oakwood", passengers: 2.88},
{station: "Woodside Park", passengers: 2.87},
{station: "Kensal Green", passengers: 2.72},
{station: "Upney", passengers: 2.72},
{station: "Stamford Brook", passengers: 2.70},
{station: "Snaresbrook", passengers: 2.69},
{station: "Latimer Road", passengers: 2.63},
{station: "Royal Oak", passengers: 2.55},
{station: "Stonebridge Park", passengers: 2.53},
{station: "Brent Cross", passengers: 2.49},
{station: "Northwood", passengers: 2.49},
{station: "South Harrow", passengers: 2.48},
{station: "Debden", passengers: 2.47},
{station: "Perivale", passengers: 2.46},
{station: "Rickmansworth", passengers: 2.46},
{station: "Amersham", passengers: 2.36},
{station: "Boston Manor", passengers: 2.32},
{station: "Osterley", passengers: 2.32},
{station: "Chiswick Park", passengers: 2.29},
{station: "Heathrow Terminal 4", passengers: 2.28},
{station: "Totteridge & Whetstone", passengers: 2.23},
{station: "Buckhurst Hill", passengers: 2.19},
{station: "Goldhawk Road", passengers: 2.12},
{station: "Hornchurch", passengers: 2.11},
{station: "Kenton", passengers: 2.08},
{station: "Kensington (Olympia)", passengers: 2.05},
{station: "Cockfosters", passengers: 2.04},
{station: "Park Royal", passengers: 2.02},
{station: "Sudbury Town", passengers: 2.00},
{station: "Ruislip Manor", passengers: 1.99},
{station: "Sudbury Hill", passengers: 1.98},
{station: "North Harrow", passengers: 1.97},
{station: "Ruislip", passengers: 1.95},
{station: "Northwood Hills", passengers: 1.91},
{station: "Wimbledon Park", passengers: 1.89},
{station: "Watford", passengers: 1.84},
{station: "West Acton", passengers: 1.82},
{station: "North Wembley", passengers: 1.79},
{station: "Hillingdon", passengers: 1.77},
{station: "South Ruislip", passengers: 1.76},
{station: "West Ruislip", passengers: 1.67},
{station: "West Finchley", passengers: 1.67},
{station: "Barkingside", passengers: 1.63},
{station: "West Harrow", passengers: 1.49},
{station: "Chalfont & Latimer", passengers: 1.49},
{station: "Mill Hill East", passengers: 1.34},
{station: "Fairlop", passengers: 1.20},
{station: "South Kenton", passengers: 1.17},
{station: "Ickenham", passengers: 1.17},
{station: "Upminster Bridge", passengers: 1.16},
{station: "Croxley", passengers: 1.08},
{station: "Ruislip Gardens", passengers: 1.07},
{station: "Chorleywood", passengers: 1.07},
{station: "Chesham", passengers: 1.07},
{station: "Moor Park", passengers: 0.91},
{station: "North Ealing", passengers: 0.91},
{station: "Theydon Bois", passengers: 0.85},
{station: "Grange Hill", passengers: 0.66},
{station: "Chigwell", passengers: 0.53},
{station: "Roding Valley", passengers: 0.37}
];