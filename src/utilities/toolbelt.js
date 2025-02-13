// Format for movie Release Date
function formatReleaseDate(date) {
  const dateObj = new Date(date);
  return dateObj.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

// Format and get color for movie rating
function formatRating(rating) {
  return {
    value: Math.round(rating * 10),
    color: getRatingColor(rating),
  };
}

// Changes the color of the rating based on the value
function getRatingColor(rating) {
  if (rating >= 8) return "rgb(19, 252, 3)";
  if (rating >= 5) return "yellow";
  return "red";
}

// Format for movie run time
function formatRuntime(movieRuntime) {
  let hours = Math.floor(movieRuntime / 60);
  let minutes = Math.floor(movieRuntime % 60);

  if (hours) {
    return `${hours}h ${minutes}m`;
  } else {
    return `${minutes}m`;
  }
}

// Add the CSS styles as a className
function getRatingStyles() {
  return `
    .rating-border {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        font-family: var(--body-font);
        font-weight: bold;
        border: 5px solid;
        margin-right: 10px;
        color: white;
    }`;
}

// Truncate long text with ellipsis
function getShortDescription(description, maxLength = 150) {
  return description.length > maxLength
    ? description.substring(0, maxLength) + "..."
    : description;
}

export {
  formatReleaseDate,
  formatRating,
  formatRuntime,
  getRatingStyles,
  getShortDescription, // Add this to exports
};
