// Declaring necessary constants
const post_integral =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

const char_preview = 20;

const preview_maker = (post, preview_characters) => {
  // Cutting the string and get raw preview
  let raw_preview = post.slice(0, preview_characters);
  console.log("Raw Preview: " + raw_preview);
  // Getting the last character of the preview
  let last_char = raw_preview.slice(-1);

  // If last char ends with a white space
  if (last_char.endsWith(" ")) {
    console.log("Formatted Preview: " + raw_preview.trim() + "...");
  } else {
    // Go back until find a white space
    for (let i = raw_preview.length - 1; i >= 0; i--) {
      console.log(raw_preview[i]);

      if (raw_preview[i] === " ") {
        console.log(raw_preview.slice(0, i).trim() + "...");
        return;
      }
    }
  }
};

// Calling the function and passing defined constants
preview_maker(post_integral, char_preview);
