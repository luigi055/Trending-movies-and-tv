const formatDate = (date: string | number | Date) =>
  new Date(date).toLocaleDateString("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default formatDate;
