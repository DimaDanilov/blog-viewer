import placeHolderImage1 from "assets/images/postsPlaceholders/post_placeholder_image_1.png";
import placeHolderImage2 from "assets/images/postsPlaceholders/post_placeholder_image_2.png";
import placeHolderImage3 from "assets/images/postsPlaceholders/post_placeholder_image_3.png";
import placeHolderImage4 from "assets/images/postsPlaceholders/post_placeholder_image_4.png";
import placeHolderImage5 from "assets/images/postsPlaceholders/post_placeholder_image_5.png";

// Temporary function for choosing img to show in post (because there is no img in api posts)
export const choosePostImage = (id: number): string => {
  switch (id % 5) {
    case 1:
      return placeHolderImage1;
    case 2:
      return placeHolderImage2;
    case 3:
      return placeHolderImage3;
    case 0:
      return placeHolderImage4;
    default:
      return placeHolderImage5;
  }
};
