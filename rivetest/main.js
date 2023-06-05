
Rive({
    locateFile: (file) => 'https://unpkg.com/rive-canvas@latest/' + file,
    src: "https://cdn.rive.app/animations/vehicles.riv",
    // Or the path to a local Rive asset
    // src: './example.riv',
    canvas: document.getElementById("canvas"),
    autoplay: true
});
