export function generateColor(text) {
  switch (text) {
    case "Productivity & Library":
      return "#009688";
    case "Library Admin":
      return "#8bc34a";
    case "Dynamics":
      return "#9c27b0";
    case "Integrations":
      return "#673ab7";
    case "Platform":
      return "#3f51b5";
    case "Email Signature":
      return "#2196f3";
    case "Social":
      return "#ffc107";
    default: return "#000"
  }

}