import { areas } from "../data";
import ntpcLogo from "../assets/logo.png";
import googleMapsLogo from "../assets/google-maps.jpeg";

function MapView({
    area,
    destination,
    onBack,
    theme,
    setTheme
})  
{
  const currentArea = areas[area];

  const {
    map: defaultMapImage,
    routeImages,
    displayNames,
    googleMapsLinks,
    departments,
  } = currentArea;
  
  // Use the specific route image if it exists and is not empty, otherwise fallback to the default map
  const displayImage = (routeImages && routeImages[destination]) ? routeImages[destination] : defaultMapImage;

  return (
    <div className={`map-page ${theme}`}>
      <button className="back-btn" onClick={onBack}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Back to Home
      </button>

      <div className="header">
        <div className="logo-container">
          <button
            className="theme-toggle"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <img src={ntpcLogo} alt="NTPC Logo" className="ntpc-logo" />
        </div>
        <h1 className="navigation-title">NTPC Simhadri Navigation</h1>
       
        {displayNames[destination] && (
          <p style={{ color: '#112ed6', fontSize: '1.2rem', marginBottom: '10px' }}>
            Routing to: <strong>{displayNames[destination]}</strong>
          </p>
        )}
        <button
          className="maps-btn"
          onClick={() => window.open(googleMapsLinks[destination], "_blank")}
        >
          <img src={googleMapsLogo} alt="Google Maps" className="maps-icon" />
          Open in Google Maps
        </button>
      </div>

      <div className="map-wrapper">
        <img src={displayImage} alt={`Map for ${displayNames[destination]}`} className="map-image" />
      </div>
      
      {departments[destination] && (
        <div className="departments-section">
          <h2>Departments at this location</h2>
          
          {/* If it's a flat array (no floors) */}
          {Array.isArray(departments[destination]) && departments[destination].length > 0 && (
            <ul className="department-list">
              {departments[destination].map((dept, index) => (
                <li key={index} style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                  {dept}
                </li>
              ))}
            </ul>
          )}

          {/* If it's an object with floors (e.g. { "Ground Floor": ["Dept A"], "First Floor": ["Dept B"] }) */}
          {!Array.isArray(departments[destination]) && Object.keys(departments[destination]).length > 0 && (
            <div className="floors-container">
              {Object.entries(departments[destination]).map(([floorName, floorDepts], floorIndex) => (
                <div key={floorIndex} className="floor-block" style={{ marginTop: '15px' }}>
                  <h3 style={{ color: '#38bdf8', fontSize: '1.1rem', marginBottom: '8px' }}>{floorName}</h3>
                  <ul className="department-list">
                    {floorDepts.map((dept, deptIndex) => (
                      <li key={deptIndex} style={{ animationDelay: `${0.4 + (floorIndex * 0.2) + (deptIndex * 0.1)}s` }}>
                        {dept}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default MapView;