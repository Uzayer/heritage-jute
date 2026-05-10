'use client'
import DottedMap from 'dotted-map'

// Heritage Jute export destinations + origin (Dhaka/Chittagong)
const pins = [
    // Origin
    { lat: 23.8103, lng: 90.4125 }, // Dhaka, Bangladesh
    { lat: 22.3569, lng: 91.7832 }, // Chittagong (export port)
    // Europe
    { lat: 48.8534, lng: 2.3488 },  // Paris
    { lat: 51.5074, lng: -0.1278 }, // London
    { lat: 52.52, lng: 13.405 },    // Berlin
    { lat: 41.9028, lng: 12.4964 }, // Rome
    { lat: 40.4168, lng: -3.7038 }, // Madrid
    { lat: 41.3851, lng: 2.1734 },  // Barcelona
    { lat: 52.3676, lng: 4.9041 },  // Amsterdam
    { lat: 48.2082, lng: 16.3738 }, // Vienna
    { lat: 50.0755, lng: 14.4378 }, // Prague
    { lat: 47.4979, lng: 19.0402 }, // Budapest
    { lat: 59.3293, lng: 18.0686 }, // Stockholm
    { lat: 60.1695, lng: 24.9354 }, // Helsinki
    { lat: 46.2044, lng: 6.1432 },  // Geneva
    { lat: 53.3498, lng: -6.2603 }, // Dublin
    { lat: 55.9533, lng: -3.1883 }, // Edinburgh
    { lat: 50.4501, lng: 30.5234 }, // Kyiv
    // Middle East
    { lat: 25.276987, lng: 55.296249 }, // Dubai
    { lat: 30.0444, lng: 31.2357 },     // Cairo
    { lat: 24.6877, lng: 46.7219 },     // Riyadh
    // Asia
    { lat: 39.9042, lng: 116.4074 }, // Beijing
    { lat: 31.2304, lng: 121.4737 }, // Shanghai
    { lat: 35.6895, lng: 139.6917 }, // Tokyo
    { lat: 37.5665, lng: 126.978 },  // Seoul
    { lat: 1.3521, lng: 103.8198 },  // Singapore
    { lat: 13.7563, lng: 100.5018 }, // Bangkok
    { lat: 21.0285, lng: 105.8542 }, // Hanoi
    { lat: 14.5995, lng: 120.9842 }, // Manila
    { lat: 28.6139, lng: 77.209 },   // New Delhi
    { lat: 19.076, lng: 72.8777 },   // Mumbai
    // Australia & Oceania
    { lat: -33.8688, lng: 151.2093 }, // Sydney
    { lat: -37.8136, lng: 144.9631 }, // Melbourne
    // Americas
    { lat: 40.73061, lng: -73.935242 }, // New York
    { lat: 34.0522, lng: -118.2437 },   // Los Angeles
    { lat: 43.65107, lng: -79.347015 }, // Toronto
    { lat: -23.55052, lng: -46.633308 },// São Paulo
    { lat: -34.6037, lng: -58.3816 },   // Buenos Aires
    { lat: 19.4326, lng: -99.1332 },    // Mexico City
    // Africa
    { lat: -4.4419, lng: 15.2663 },  // Kinshasa
    { lat: -26.2041, lng: 28.0473 }, // Johannesburg
    { lat: 5.3600, lng: -4.0083 },   // Abidjan
]

export const Map = () => {
    const map = new DottedMap({ height: 55, grid: 'diagonal' })

    pins.forEach((pin) => {
        map.addPin({
            ...pin,
            svgOptions: { color: '#d97706', radius: 0.2 },
        })
    })

    const svgMap = map.getSVG({
        radius: 0.15,
        color: 'oklch(37% 0.013 285.805)',
        shape: 'circle',
        backgroundColor: 'transparent',
    })

    return (
        <img
            src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
            alt="World map showing Heritage Jute export destinations"
            className="dark:invert"
        />
    )
}
