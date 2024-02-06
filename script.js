const axios = require("axios");

let data = JSON.stringify({
  variables: {
    context: {
      siteId: 9001001,
      locale: "en_US",
      eapid: 1,
      currency: "USD",
      device: {
        type: "DESKTOP",
      },
      identity: {
        duaid: "65cbd87c-ebb5-ab83-a4c1-812db78bb787",
        expUserId: "-1",
        tuid: "-1",
        authState: "ANONYMOUS",
      },
      privacyTrackingState: "CAN_TRACK",
      debugContext: {
        abacusOverrides: [],
      },
    },
    criteria: {
      primary: {
        dateRange: {
          checkInDate: {
            day: 1,
            month: 3,
            year: 2024,
          },
          checkOutDate: {
            day: 5,
            month: 3,
            year: 2024,
          },
        },
        destination: {
          regionName: "73 W Monroe St, Chicago, IL 60603, USA",
          regionId: null,
          coordinates: null,
          pinnedPropertyId: null,
          propertyIds: null,
          mapBounds: null,
        },
        rooms: [
          {
            adults: 2,
            children: [],
          },
        ],
      },
      secondary: {
        counts: [
          {
            id: "resultsStartingIndex",
            value: 150,
          },
          {
            id: "resultsSize",
            value: 50,
          },
        ],
        booleans: [],
        selections: [
          {
            id: "sort",
            value: "RECOMMENDED",
          },
          {
            id: "privacyTrackingState",
            value: "CAN_TRACK",
          },
          {
            id: "useRewards",
            value: "SHOP_WITHOUT_POINTS",
          },
          {
            id: "searchId",
            value: "d1342ebe-2e4c-4c8d-8838-a3967204a6f2",
          },
        ],
        ranges: [],
      },
    },
    destination: {
      regionName: null,
      regionId: null,
      coordinates: null,
      pinnedPropertyId: null,
      propertyIds: null,
      mapBounds: null,
    },
    shoppingContext: {
      multiItem: null,
    },
    returnPropertyType: false,
    includeDynamicMap: true,
  },
  operationName: "LodgingPwaPropertySearch",
  extensions: {
    persistedQuery: {
      sha256Hash:
        "e4ffcd90dd44f01455f9ddd89228915a177f9ec674f0df0db442ea1b20f551c3",
      version: 1,
    },
  },
});

let config = {
  method: "POST",
  maxBodyLength: Infinity,
  url: "https://www.vrbo.com/graphql",
  headers: {
    authority: "www.vrbo.com",
    accept: "*/*",
    "accept-language": "en-GB,en-US;q=0.9,en;q=0.8,no;q=0.7,de;q=0.6",
    "cache-control": "no-cache",
    "client-info": "shopping-pwa,unknown,unknown",
    "content-type": "application/json",
    origin: "https://www.vrbo.com",
    pragma: "no-cache",
    referer:
      "https://www.vrbo.com/search?adults=2&amenities=&children=&d1=2023-12-27&d2=2023-12-28&destination=73%20W%20Monroe%20St%2C%20Chicago%2C%20IL%2060603%2C%20USA&endDate=2024-03-05&latLong=&mapBounds=&pwaDialog=&regionId&semdtl=&sort=RECOMMENDED&startDate=2024-03-01&theme=&userIntent=",
    "sec-ch-ua":
      '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"macOS"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "x-enable-apq": "true",
    "x-page-id": "page.Hotel-Search,H,20",
    Cookie:
      "DUAID=4db28c66-5933-13d6-0561-5a95950c67c3; HMS=f6f1d65b-41d3-444b-88c5-7cc734305080; MC1=GUID=4db28c66593313d605615a95950c67c3; ak_bmsc=3992761C6329F0B6AC96EA7C6B9BFB89~000000000000000000000000000000~YAAQTwHARa6Hl2CNAQAA9cidfBZlUEYCB/mGp5lPOi05964p4+ZauC73Q9zy+r2Ca+XPDQSsU9DfKJ8MMIteV5KPZ4KzIIsOm0nC220VoJq9+yylR5Vhkyg97t3vqIp8//l2DL56F6yApVZBhbrF+K5NkQLoaF6hVzN7FXo4r0GDF6RXYnan7zcgxGGnF9n/oKnoMX95cwRKzWntBrnNJnyGICpzP/Izj99PxX+7aBGY7ssNU42/CRimuPbt8Q3+H2w7WIWu7XZGws3jOuNs2w+e6PXk0lu9879+0vNIRghua5Ea/Pa7TVvLB162bh6pt+kGFUPc5FAL63CpybICcOTLyQpgmXiWEEYi2m08PbkWBPMy5DvEhw==; bm_sv=5D800D904E63E182BF5D64D4A95CAD1C~YAAQRgHAReTNp1SNAQAA5Ni1fBYf6aUo77W0kWYUQrTYkJT0XznoJFGPcLKpvc75bPE3YmPuH25NZGeatzgYT1yqHMg6DXZUrBXhN0OiUyvpQwMR7ptMBhIrVwgg95h5JpEzwJgR4Q3J04xmNGjaXSAL8rtUvL6sD1I91e5J9T8Q5PMKLZFv+rfKg/lixYTutQwHWUGmYJnS4EtVJntRoU9vbvGKl5Bm5l2tR4ndMgumgwwn/EPiQ8wqLcNvag==~1; cesc=%7B%22marketingClick%22%3A%5B%22false%22%2C1707194308813%5D%2C%22hitNumber%22%3A%5B%222%22%2C1707194308813%5D%2C%22visitNumber%22%3A%5B%221%22%2C1707192731867%5D%2C%22entryPage%22%3A%5B%22page.Hotel-Search%22%2C1707194308813%5D%7D; hav=4db28c66-5933-13d6-0561-5a95950c67c3; ha-device-id=4db28c66-5933-13d6-0561-5a95950c67c3; has=108fafee-cc0d-4151-7f3c-58a79ec8c8f6; hav=4db28c66-5933-13d6-0561-5a95950c67c3",
  },
  data: data,
};

axios
  .request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
