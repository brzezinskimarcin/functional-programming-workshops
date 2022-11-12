from math import floor
import json

user = {
  'name': 'MarcinB',
  'games': [
    { 'name': 'Counter-Strike', 'playtime': 20280 },
    { 'name': 'Fall Guys', 'playtime': 12660 },
    { 'name': 'Overcooked! 2', 'playtime': 8580 },
  ]
}

#region Example 1 - showHoursPlayedTotal

#endregion





#region Example 2 - showHoursPlayed
def toHours(totalMinutes):
  hours = floor(totalMinutes / 60)
  minutes = totalMinutes % 60
  return f'{hours} hour(s) and {minutes} minute(s)'

#endregion





#region Example 3 - Fixed

#endregion
