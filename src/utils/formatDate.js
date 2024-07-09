export default function formatDate(unixTimestamp) {
  const date = new Date(unixTimestamp); // Convert UNIX timestamp to milliseconds
  const now = new Date();

  const isToday = (date, now) => {
    return (
      date.getDate() === now.getDate() &&
      date.getMonth() === now.getMonth() &&
      date.getFullYear() === now.getFullYear()
    );
  };

  const isYesterday = (date, now) => {
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);
    return (
      date.getDate() === yesterday.getDate() &&
      date.getMonth() === yesterday.getMonth() &&
      date.getFullYear() === yesterday.getFullYear()
    );
  };

  const isWithinLast7Days = (date, now) => {
    const weekAgo = new Date(now);
    weekAgo.setDate(now.getDate() - 7);
    return date > weekAgo && date < now;
  };

  if (isToday(date, now)) {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  } else if (isYesterday(date, now)) {
    return "Yesterday";
  } else if (isWithinLast7Days(date, now)) {
    return date.toLocaleDateString([], { weekday: "long" });
  } else {
    return date.toLocaleDateString("en-US");
  }
}
