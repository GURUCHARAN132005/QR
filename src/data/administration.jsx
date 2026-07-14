import Documentation from "../assets/Administration/documentation.jpg";
import IT from "../assets/Administration/ITBlock.jpg";
import Parking1 from "../assets/Administration/p1.jpg";
import Parking2 from "../assets/Administration/p2.jpg";
import Samanvay from "../assets/Administration/samanvay.jpg";
import Saavyas from "../assets/Administration/saavyas.jpg";
import mapImage from "../assets/Administration/admin-campus.jpg";

export const administrationData = {
  map: mapImage,

  routeImages: {
    admin1: Samanvay,
    admin2: Saavyas, 
    Documentation: Documentation,
    it: IT,
    parking1: Parking1,
    parking2: Parking2
  },


  displayNames: {
    admin1: "Samanvay",
    admin2: "Saavyas",
    Documentation: "Documentation",
    it: "IT & Communications",
    parking1: "Parking 1",
    parking2: "Parking 2"
  },

  googleMapsLinks: {
    admin1: "https://maps.app.goo.gl/ET39rTrLQ4ucsDDa7",
    admin2: "https://maps.app.goo.gl/VkijMFdoELqpQE4o7",
    Documentation: "https://maps.app.goo.gl/9sd4m5LiLLoPBay18",
    it: "https://maps.app.goo.gl/eDtMxhgdPuyAfqBZA",
    parking1: "https://maps.app.goo.gl/5r3w1qjrFVjMHC668",
    parking2: "https://maps.app.goo.gl/gEkSHRahBy1sNRYy5"
  },

  departments: {
    admin1: {"Ground Floor": [
    "CISF Office (Left)",
    "DC CISF Waiting Area",
    "DC CISF",
    "CISF Office (Center)",
    "Store Room",
    "ICH Canteen Dining Area",
    "ICH Canteen Kitchen Area",
    "AC Plant",
    "LT Switchgear Room"
  ],

  "First Floor": [
    "Digitization Hall-2",
    "Site C&M Hall",
    "Vacant",
    "Digitization Hall-1",
    "UFSC-VPD",
    "EMG Hall",
    "AGM (EMG)",
    "Pantry",
    "AHU Room (Upper)",
    "AHU Room (Lower)"
  ],

  "Second Floor": [
    "Finance Hall-1",
    "GM (FIN.)",
    "NGEL Site Office",
    "AGM (FIN.)",
    "Finance Conference Hall",
    "ICH Pantry",
    "AHU Room (Upper)",
    "AHU Room (Lower)"
  ],

  "Third Floor": [
    "HR Hall-1",
    "HR Hall-2",
    "HR Hall-3",
    "AGM (HR)",
    "GM (TS)",
    "Vacant",
    "AGM (Vigilance)",
    "AHU Room (Upper)",
    "AHU Room (Lower)"
  ],

  "Fourth Floor": [
    "HOP Section",
    "HOP Section Waiting Area",
    "AGM (TS)",
    "P&S Hall",
    "HOP Office",
    "HOP Conference Hall",
    "Red Site Office",
    "ICH Pantry",
    "AHU Room (Upper)",
    "AHU Room (Lower)"
  ]},
      
    Documentation: ["FES","FCS"],
    it: ["IT", "Communications","Canteen"]

  }
};