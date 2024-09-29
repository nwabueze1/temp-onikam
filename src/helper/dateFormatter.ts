export const dateFormatter = (dateStr: string) => {
  const date = new Date(dateStr);
  const formattedDate = date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  return formattedDate;
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString).toDateString();
  const time = formatTime(dateString);
  const dateArr = date.split(' ');
  dateArr.shift();
  dateArr[1] = dateArr[1] + ',';
  return `${dateArr.join(' ')}; ${time}`;
};

export const formatTime = (dateString: string) => {
  const time = new Date(dateString);
  const hour = time.getHours();
  const minute = time.getMinutes();
  let temp = String(hour % 12);
  if (temp === '0') {
    temp = '12';
  }
  temp += (minute < 10 ? ':0' : ':') + minute;
  temp += hour >= 12 ? 'pm' : 'am';
  return temp;
}