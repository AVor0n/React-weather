class Converter {
  static degreeToDirection(deg: number) {
    if (deg >= 0 && deg < 22.5) return "северный";
    if (deg >= 22.5 && deg < 67.5) return "северо-восточный";
    if (deg >= 67.5 && deg < 112.5) return "восточный";
    if (deg >= 112.5 && deg < 157.5) return "юго-восточный";
    if (deg >= 157.5 && deg < 202.5) return "южный";
    if (deg >= 202.5 && deg < 247.5) return "юго-западный";
    if (deg >= 247.5 && deg < 292.5) return "западный";
    if (deg >= 292.5 && deg < 337.5) return "северо-западный";
    return "С";
  }
  static windSpeedToStrength(speed: number) {
    if (speed < 0.3) return "штиль";
    if (speed < 1.6) return "тихий";
    if (speed < 3.4) return "легкий";
    if (speed < 5.5) return "слабый";
    if (speed < 8.0) return "умеренный";
    if (speed < 10.8) return "свежий";
    if (speed < 13.9) return "сильный";
    if (speed < 17.2) return "крепкий";
    if (speed < 20.8) return "очень крепкий";
    if (speed < 24.5) return "шторм";
    if (speed < 28.5) return "сильный шторм";
    if (speed < 32.7) return "жестокий шторм";
    return "ураган";
  }
  static hPaToMmHg(hPa: number) {
    return hPa * 0.7501;
  }

  static pressureToGrade(pressure: number) {
    if (pressure <= 740) return "пониженное";
    if (pressure <= 780) return "нормальное";
    return "повышенное";
  }
}

export default Converter;
