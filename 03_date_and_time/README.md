## 03 Date & Time

### 03.01 Basics - Create date with Date() class [Medium]

- 4 ways to create date object
  - `new Date()`: current date and time along with local tz
  - `new Date(year, month, day, hours, minutes, seconds, milliseconds)`: more preferrable way to deal with dates
  - `new Date(milliseconds)`: milliseconds from 01 Jan 1970
  - `new Date("year-month-dayTH:M:SECZ")` Note: if T and Z are not given then value might vary from browser to browser (T: Time, Z: zone)
    - ISO 8601 Extended date format: `YYYY-MM-DDTHH:mm:ss.sssZ`
- two tz: Local time zone ex: GMT+0800, UTC (Universal Time Coordinated)
- Qn:

1. Explain various formats of ISO standard followed by JavaScript

- `YYYY-MM-DDTHH:mm:ss.sssZ`

### 03.02 Date methods [Medium]

- `getFullYear()`: returns YYYY
- `getMonth()`: returns month idx
- `getDate()`
- `getDay()`
- **UTC Methods**: `getUTCYear()`, `getUTCMonth()` etc
- `setFullYear(YYYY)`
- `setMonth(M)`, `setDate(D)`, `setDay(D)`
- `Date.parse(dateString)` returns milliseconds or `new Date(dateString)`
- Qns:
  1. Get Character month ?
  2. Find the date before 50 days of the given date.
  3. What will be the output if you add 35 as date in Date() constructor.

### 03.03 Time Methods [Medium]

- static method: `Date.now()`: returns milliseconds since 01 Jan 1970 UTC
- new Date() methods:
  - `.getTime()`, `getHours`, `getMinutes` etc
  - `.setTime(milliseconds)`
- Qns:

1. Calculate the date difference in days ?

- `((dt5.getTime()-dt6.getTime())/1000)/3600`

2. How can you change hours or minutes in time ?

- `setHours()`, `setMinutes()`
