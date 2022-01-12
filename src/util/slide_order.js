export default function slideOrder(slideImages, order) {
  const chageImg = slideImages.filter((img) => {
    if (img.order === order) {
      return img;
    }
  });
  return chageImg;
}
