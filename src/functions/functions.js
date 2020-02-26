export const compareTimeToNow = UTCDateString => {
  const dateOfPost = Date.parse(UTCDateString);
  const timeDifference = Date.now() - dateOfPost;

  const hoursDifference = Math.floor(timeDifference / 1000 / 60 / 60);
  const daysDifference = Math.floor(hoursDifference / 24);
  const yearsDifference = Math.floor(daysDifference / 365);

  if (hoursDifference < 1) {
    return "very recently";
  } else if (hoursDifference < 24) {
    return `${hoursDifference} hour${hoursDifference === 1 ? "" : "s"} ago`;
  } else if (daysDifference < 365) {
    return `${daysDifference} day${daysDifference === 1 ? "" : "s"} ago`;
  } else {
    return `${yearsDifference} year${yearsDifference === 1 ? "" : "s"} ago`;
  }
};
