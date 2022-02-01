function weatherIconAdapter(icon: string) {
  if (icon) {
    icon = String(icon).substring(0, 2);
    if (icon == "09" || icon == "11") return "rain";
    if (icon == "10" || icon == "13") return "rain-and-sun";
    if (icon == "04" || icon == "11") return "light-rain";
    if (icon == "1") return "sunny";
    if (icon == "03" || icon == "02") return "overcast";
  }
  return "overcast";
}

export default weatherIconAdapter;
