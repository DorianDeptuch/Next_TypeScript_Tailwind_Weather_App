export function metersToMiles(visibilityInMeters: number): string {
  const visibilityInMiles = visibilityInMeters * 0.000621371; // Conversion from meters to miles
  return `${visibilityInMiles.toFixed(2)}mi`; // Round to 2 decimal places and add 'mi' unit
}
