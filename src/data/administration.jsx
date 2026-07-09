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
    admin1: ["Department 1", "Department 2", "Department 3"],
    admin2: ["Department 1", "Department 2"],
    Documentation: ["FES","FCS"],
    it: ["IT", "Communications"],
    parking1: [],
    parking2: []
  }
};