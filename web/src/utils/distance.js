const EARTH_RADIUS = 6371; // Raio da terra em Km

export function getDistanceBetweenCoordinates(lat1, lon1, lat2, lon2) {
  const latRad1 = (lat1 * Math.PI) / 180;
  const latRad2 = (lat2 * Math.PI) / 180;
  const deltaLat = (lat2 - lat1) * Math.PI / 180;
  const deltaLon = (lon2 - lon1) * Math.PI / 180;

  const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) + Math.cos(latRad1) * Math.cos(latRad2) * Math.sin(deltaLon / 2) * Math.sin(deltaLat / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = EARTH_RADIUS * c;

  return distance;
}