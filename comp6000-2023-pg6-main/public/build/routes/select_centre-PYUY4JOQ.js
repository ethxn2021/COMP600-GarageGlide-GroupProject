import {
  createHotContext
} from "/build/_shared/chunk-4KLX3EKH.js";
import "/build/_shared/chunk-JR22VO6P.js";
import "/build/_shared/chunk-PZDJHGND.js";

// app/routes/select_centre.tsx
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\select_centre.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\select_centre.tsx"
  );
  import.meta.hot.lastModified = "1706366171045.2087";
}
function SelectCentre() {
  function initMap() {
    const bounds = new google.maps.LatLngBounds();
    const markersArray = [];
    const map = new google.maps.Map(document.getElementById("map"), {
      center: {
        lat: 55.53,
        lng: 9.4
      },
      zoom: 10
    });
    const geocoder = new google.maps.Geocoder();
    const service = new google.maps.DistanceMatrixService();
    const origin1 = {
      lat: 55.93,
      lng: -3.118
    };
    const origin2 = "Greenwich, England";
    const destinationA = "Stockholm, Sweden";
    const destinationB = {
      lat: 50.087,
      lng: 14.421
    };
    const request = {
      origins: [origin1, origin2],
      destinations: [destinationA, destinationB],
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false
    };
    document.getElementById("request").innerText = JSON.stringify(request, null, 2);
    service.getDistanceMatrix(request).then((response) => {
      document.getElementById("response").innerText = JSON.stringify(response, null, 2);
      const originList = response.originAddresses;
      const destinationList = response.destinationAddresses;
      deleteMarkers(markersArray);
      const showGeocodedAddressOnMap = (asDestination) => {
        const handler = ({
          results
        }) => {
          map.fitBounds(bounds.extend(results[0].geometry.location));
          markersArray.push(new google.maps.Marker({
            map,
            position: results[0].geometry.location,
            label: asDestination ? "D" : "O"
          }));
        };
        return handler;
      };
      for (let i = 0; i < originList.length; i++) {
        const results = response.rows[i].elements;
        geocoder.geocode({
          address: originList[i]
        }).then(showGeocodedAddressOnMap(false));
        for (let j = 0; j < results.length; j++) {
          geocoder.geocode({
            address: destinationList[j]
          }).then(showGeocodedAddressOnMap(true));
        }
      }
    });
  }
  function deleteMarkers(markersArray) {
    for (let i = 0; i < markersArray.length; i++) {
      markersArray[i].setMap(null);
    }
    markersArray = [];
  }
}
_c = SelectCentre;
var _c;
$RefreshReg$(_c, "SelectCentre");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SelectCentre as default
};
//# sourceMappingURL=/build/routes/select_centre-PYUY4JOQ.js.map
