const user = {
  name: 'MarcinB',
  games: [
    { name: 'Counter-Strike', playtime: 20280 },
    { name: 'Fall Guys', playtime: 12660 },
    { name: 'Overcooked! 2', playtime: 8580 },
  ],
};

// #region Example 1 - calculateTotalHoursPlayed

// #endregion





// #region Example 2 - showHoursPlayed
function toHours(totalMinutes) {
  const hours = totalMinutes / 60;
  const minutes = totalMinutes % 60;
  return `${hours} hour(s) and ${minutes} minute(s)`;
}

// #endregion





// #region Example 3 - Fixed

// #endregion
