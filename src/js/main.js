// // activate any img hovers based on the hover-src attribute
// $("img[data-hover-src]").closest("a").hover(
//     function () {
//         var image = $(this).find("img[data-hover-src]");
//         if (image.data("originalSrc") === undefined) {
//             image.data("originalSrc", image.attr("src"));
//         }
//         image.attr("src", image.data("hoverSrc"));
//     }, function () {
//         var image = $(this).find("img[data-hover-src]");
//         image.attr("src", image.data("originalSrc") + "&SafariFix");
//     }
// );