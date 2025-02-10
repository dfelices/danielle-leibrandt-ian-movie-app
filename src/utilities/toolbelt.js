
// Format for movie Release Date
function formatReleaseDate(date) {
    const dateObj = new Date(date)
    return dateObj.toLocaleString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
}

// Format for movie Rating
function formatRating(rating){
    return rating.toFixed(1);
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

export { formatReleaseDate, formatRating, formatRuntime };


