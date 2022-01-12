export default function slideOrder(slideImages, order) {
  const chageImg = slideImages.filter((img) => img.order === order);
  return chageImg;
}
