
export const findIp = async (): Promise<{latitude: number, longitude: number}> => {
  const response = await fetch("http://ip-api.com/json");
  if (!response.ok) {
    throw new Error("Failed to fetch IP address");
  }
  const data = await response.json();
  if (!data) {
    throw new Error("Invalid IP address");
  }
  return { latitude: data.lat, longitude: data.lon };
};

export default async function getPosition(): Promise<{
  latitude: number;
  longitude: number;
}> {
    try {
      return findIp();
    } catch (error) {
      return { latitude: 0, longitude: 0 };
    }
}

