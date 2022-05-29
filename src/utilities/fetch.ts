export function fetchIcon(icon: string) {
  return `${import.meta.env.MODE === "development" ? "/" : "/Myphz/"}icons/${icon}.svg`
}

export function fetchImage(image: string) {
  return `${import.meta.env.MODE === "development" ? "/" : "/Myphz/"}images/${image}.png`
}