import { } from "react-router-dom";

export default function App() {
  return (
    <>  
      <svg width="240" height="240" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="modernGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FF416C"/>
      <stop offset="100%" stop-color="#FF4B2B"/>
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-opacity="0.25"/>
    </filter>
  </defs>

  <rect width="512" height="512" rx="120" fill="url(#modernGrad)"/>

  <path d="M256 120c-66 0-120 54-120 120 
           0 90 120 200 120 200s120-110 120-200
           c0-66-54-120-120-120z"
        fill="#ffffff"
        filter="url(#shadow)"/>

  <g fill="#FF4B2B">
    <rect x="246" y="190" width="20" height="120" rx="10"/>
    <rect x="226" y="180" width="10" height="40" rx="5"/>
    <rect x="246" y="180" width="10" height="40" rx="5"/>
    <rect x="266" y="180" width="10" height="40" rx="5"/>
  </g>

  <text x="256" y="470" text-anchor="middle"
        font-family="Poppins, Arial, sans-serif"
        font-size="48"
        font-weight="600"
        fill="#ffffff"
        letter-spacing="2">
        QuickBite
  </text>
</svg>
    </>
  )
}
