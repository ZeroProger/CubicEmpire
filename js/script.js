var newsDescriptionArray = document.querySelectorAll(".news-description");

for (var description of newsDescriptionArray) {
    $clamp(description, {clamp: 3});
}