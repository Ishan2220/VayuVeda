export const getAQIStatus = (aqi) => {
  if (aqi <= 50) return 'Good';
  if (aqi <= 100) return 'Moderate';
  if (aqi <= 150) return 'Unhealthy for Sensitive Groups';
  if (aqi <= 200) return 'Unhealthy';
  if (aqi <= 300) return 'Very Unhealthy';
  return 'Hazardous';
};

export const getAQIColor = (aqi) => {
  if (aqi <= 50) return '#00e400';
  if (aqi <= 100) return '#ffff00';
  if (aqi <= 150) return '#ff7e00';
  if (aqi <= 200) return '#ff0000';
  if (aqi <= 300) return '#8f3f97';
  return '#7e0023';
};

export const getHealthTips = (aqi) => {
  if (aqi <= 50) {
    return {
      general: "Air quality is satisfactory. Perfect time for outdoor activities!",
      sensitive: "Enjoy your outdoor activities without restrictions.",
      actions: [
        "Great time for morning walks and jogging",
        "Open windows for fresh air circulation",
        "Perfect weather for outdoor sports"
      ]
    };
  }
  
  if (aqi <= 100) {
    return {
      general: "Air quality is acceptable for most people.",
      sensitive: "Consider reducing prolonged outdoor exertion if you're unusually sensitive.",
      actions: [
        "Moderate outdoor activities are fine",
        "Keep windows open during cleaner hours",
        "Consider air purifiers if sensitive"
      ]
    };
  }
  
  if (aqi <= 150) {
    return {
      general: "Reduce prolonged or heavy outdoor exertion.",
      sensitive: "Avoid prolonged outdoor activities. Children and elderly should stay indoors.",
      actions: [
        "Limit outdoor exercise duration",
        "Wear N95 masks when going outside",
        "Use air purifiers indoors",
        "Keep windows closed during peak pollution hours"
      ]
    };
  }
  
  if (aqi <= 200) {
    return {
      general: "Everyone should avoid prolonged outdoor exertion.",
      sensitive: "Stay indoors and avoid any outdoor activities.",
      actions: [
        "Stay indoors as much as possible",
        "Use N95 or better masks when outside",
        "Run air purifiers continuously",
        "Avoid outdoor exercise completely"
      ]
    };
  }
  
  if (aqi <= 300) {
    return {
      general: "Avoid all outdoor activities. Health warnings in effect.",
      sensitive: "Remain indoors and keep activity levels low.",
      actions: [
        "Emergency measures - stay indoors",
        "Use high-quality air purifiers",
        "Avoid any outdoor exposure",
        "Consider relocating temporarily if possible"
      ]
    };
  }
  
  return {
    general: "Emergency conditions. Everyone should avoid all outdoor exposure.",
    sensitive: "Health alert: serious health effects for everyone.",
    actions: [
      "Emergency alert - do not go outside",
      "Seal all windows and doors",
      "Use multiple air purifiers",
      "Consider emergency relocation"
    ]
  };
};
