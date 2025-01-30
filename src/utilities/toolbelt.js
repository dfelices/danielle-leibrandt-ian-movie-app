function formatReleaseDate (date){
    const dateObj = new Date(date)
    return dateObj.toLocaleString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    })
}


