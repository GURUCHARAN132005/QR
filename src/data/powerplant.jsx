import ICH from "../assets/Plant/ICH.jpg";
import Sankalp1 from "../assets/Plant/Sankalp1.jpg";
import Sankalp2 from "../assets/Plant/Sankalp2.jpg";
import Switchyard from "../assets/Plant/SwitchYard.jpg";
import YokogawaStores from "../assets/Plant/YokogawaStores.jpg";
import mainPlantMap from "../assets/Plant/main-and-units.png";

export const powerPlantData = {

  map: mainPlantMap,

  routeImages: {
    unit1: Sankalp1, 
    unit2: Sankalp1,
    unit3: Sankalp1,
    unit4: Sankalp1,
    switchyard: Switchyard,
    sankalp1: Sankalp1,
    sankalp2: Sankalp2,
    chp: "",
    solar: "",
    safetypark: "",
    ich: ICH,
    YokogawaStores: YokogawaStores
  },

  displayNames: {
    unit1: "Unit 1",
    unit2: "Unit 2",
    unit3: "Unit 3",
    unit4: "Unit 4",
    switchyard: "Switch Yard",
    sankalp1: "Sankalp 1",
    sankalp2: "Sankalp 2",
    chp: "Coal Handling Plant",
    solar: "Solar Plant",
    maingate: "Main Gate",
    ich: "Indian Coffee House",
    YokogawaStores: "Yokogawa Stores",
     safetypark: "Safety Park",
  },

  googleMapsLinks: {
    unit1: "https://maps.app.goo.gl/2w3gjAGe19fLYUbM8",
    unit2: "https://maps.app.goo.gl/7Z2oEAUTAJKVH3Tk8",
    unit3: "https://maps.app.goo.gl/qjXtyFyNM2iuGGkx8",
    unit4: "https://maps.app.goo.gl/6ZsL3nmrXJaVBnAR9",
    switchyard: "https://maps.app.goo.gl/etRtFpyLTQnCPn3DA",
    sankalp1: "https://maps.app.goo.gl/k9MWP7k4ATM7E7Rr7",
    sankalp2: "https://maps.app.goo.gl/MDMtUXH5QHYK8hgp9",
    chp: "https://maps.app.goo.gl/P27jkTXSqSDvrxxU7",
    solar: "https://maps.app.goo.gl/qBCvqDiRuGRDqRhK6",
    ich: "https://maps.app.goo.gl/2ni4uBKWMEywQceX8",
    YokogawaStores: "https://maps.app.goo.gl/aniMuL7vH6cTvCGQA",
    safetypark: "https://maps.app.goo.gl/9HydP8L7yLm3sJ5H9"
  },

  departments: {
    switchyard: ["hidhf", "eid"],
    unit1: [ "Unit 1 Control Room"],
    unit2: [ "Unit 2 Control Room"],
    unit3: [ "Unit 3 Control Room"],
    unit4: [ "Unit 4 Control Room"],
    safetypark: ["Safety Park"],
    sankalp1: {
      
      "Ground Floor": ["ICH Canteen","MTP Conference Hall","MTP Hall","MM OffSite","IT Exchange","MTP Model Room",],
      "First Floor": ["Safety","FGD","Hashtag","GM Maintenance",],
      "Second Floor": ["C&I Department","Electrical Department","C&I Maintenance","TMD","BMD",],
      "Third Floor": ["C&I Hall 1","C&I Hall 2","BMD RF Room","Electrical Lab",],
      "Fourth Floor": ["HOP Visiting Office","GM ONM","Operation Department","EEMG"]
    },
    sankalp2: {
      "Ground Floor": ["Medical Department", ],
      "First Floor": ["BE and chemical"],
      "Third Floor": ["Civil", "IT", "RLI training hall"]
    },
    chp: [],
    solar: [],
    maingate: [],
    ich: ["Canteen"],
    YokogawaStores: []
  }
};