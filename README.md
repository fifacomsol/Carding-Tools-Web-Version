## Credit Card Tools

A sleek, web-based application for generating, checking, and validating credit card numbers and BINs (Bank Identification Numbers). Built with HTML, CSS, and JavaScript, this tool provides a user-friendly interface with responsive design for both PC and mobile devices.

## Features

### BIN Checker

**Purpose**: Look up details about a BIN (first 6 digits of a credit card number).

**Functionality**:
- Supports multiple BINs (separated by spaces, commas, or new lines).
- Displays information such as Brand, Type, Category, Issuer, and Country.
- Handles errors gracefully if the BIN database is unavailable.
- Provides options to copy results to clipboard or download as a text file.
- Import BINs from a .txt or .csv file.

**Output**: Detailed BIN information in a card-style layout.

### Card Generator

**Purpose**: Generate random credit card numbers based on a given BIN.

**Functionality**:

#### Single BIN Generator
- Input a BIN (first 6 digits) and specify the quantity (1 to 100).
- Generates cards with random numbers, expiry dates (MM|YY), and CVV.
- Uses the Luhn algorithm to ensure valid card numbers.

#### Multiple BIN Generator
- Input multiple BINs (one per line) and specify cards per BIN (1 to 50).
- Generates cards for each BIN with the same format as above.
- Provides a "Copy All" button to copy generated cards to the clipboard.

**Output**: A list of generated cards in a textarea.

### Card Checker

**Purpose**: Validate credit card numbers for authenticity.

**Functionality**:
- Accepts cards in the format XXXXXXXXXXXXXXXX|MM|YY|CVV (one per line).
- Validates cards using the Luhn algorithm and format checks.
- Groups results into three sections:
  - **Live Cards**: Cards that pass the Luhn check.
  - **Dead Cards**: Cards that fail the Luhn check but have a valid format.
  - **Unknown Cards**: Cards with invalid formats (e.g., missing fields).
- Displays detailed information for each card:
  - Card Number (formatted with spaces every 4 digits)
  - Expiry Date
  - CVV
  - Status (Live, Dead, or Unknown)
  - Message (e.g., "Valid (Luhn)", "Invalid (Luhn)", or "Invalid format")
- Responsive layout:
  - On PC: Live and Dead sections side by side, Unknown below.
  - On mobile: All sections stacked vertically.
- Import cards from a .txt or .csv file.

**Output**: Grouped results in a card-style layout with color-coded statuses (green for Live, red for Dead/Unknown).

### BIN Generator

**Purpose**: Generate random BINs for testing purposes.

**Functionality**:
- Select a card type (Visa, MasterCard, Amex, Discover).
- Specify the quantity (1 to 100).
- Generates random 6-digit BINs based on the selected card type’s prefix.
- Provides options to copy BINs to clipboard or download as a text file.

**Output**: A list of generated BINs in a textarea.

## Additional Features

- **Responsive Design**: Optimized for both PC and mobile devices with smooth animations and transitions.
- **Loading Spinners**: Visual feedback during processing (e.g., checking BINs, generating cards).
- **Clear Buttons**: Reset inputs and results for each tool.
- **Caching**: Card Checker caches results to ensure consistency for repeated checks.
- **Error Handling**: Graceful handling of invalid inputs and missing data.
- **Styling**: Modern UI with gradient backgrounds, glow effects, and hover animations.

## How to Use

### General Navigation
- The main screen displays four tool buttons: **BIN Checker**, **Card Generator**, **Card Checker**, and **BIN Generator**.
- Click on a tool button to access its screen.
- Use the **Back to Main** button on each tool screen to return to the main screen.

### Using the BIN Checker
1. Navigate to the **BIN Checker** screen.
2. Enter one or more BINs (first 6 digits of a card number) in the textarea. Separate multiple BINs with spaces, commas, or new lines.
   - Example: 424242 400000 401200
3. Click **Check BIN** to process.
   - Alternatively, click **Import from File** to upload a .txt or .csv file containing BINs.
4. View the results, which include details like Brand, Type, Category, Issuer, and Country.
5. Use the **Copy All** button to copy results to the clipboard or **Download Results** to save as a text file.
6. Click **Clear** to reset the input and results.

### Using the Card Generator

#### Single BIN Generator
1. Navigate to the **Card Generator** screen.
2. Enter a BIN (first 6 digits) in the "BIN" field.
   - Example: 423456
3. Specify the number of cards to generate (1 to 100) in the "Quantity" field.
4. Click **Generate Cards**.
5. View the generated cards in the textarea, formatted as XXXXXXXXXXXXXXXX|MM|YY|CVV.
6. Click **Copy All** to copy the generated cards to the clipboard.
7. Click **Clear** to reset the input and results.

#### Multiple BIN Generator
1. Scroll to the "Multiple Card Generator" section on the **Card Generator** screen.
2. Enter multiple BINs (one per line) in the "Multiple BINs" textarea.
   - Example:
     ```
     423456
     512345
     ```
3. Specify the number of cards per BIN (1 to 50) in the "Cards per BIN" field.
4. Click **Generate Cards**.
5. View the generated cards in the textarea.
6. Click **Copy All** to copy the generated cards.
7. Click **Clear** to reset.

### Using the Card Checker
1. Navigate to the **Card Checker** screen.
2. Enter one or more cards in the textarea, one per line, in the format XXXXXXXXXXXXXXXX|MM|YY|CVV.
   - Example:
     ```
     4532015112830366|12|25|123
     4532015112830367|12|25|123
     123456|12|25
     ```
3. Click **Check Cards** to validate.
   - Alternatively, click **Import from File** to upload a .txt or .csv file containing cards.
4. View the results grouped into three sections:
   - **Live Cards**: Valid cards (pass Luhn check).
   - **Dead Cards**: Invalid cards (fail Luhn check but valid format).
   - **Unknown Cards**: Cards with invalid formats.
5. Each card result shows the Card Number, Expiry, CVV, Status, and Message.
6. Click **Clear** to reset the input and results.

### Using the BIN Generator
1. Navigate to the **BIN Generator** screen.
2. Select a card type (Visa, MasterCard, Amex, or Discover) from the dropdown.
3. Specify the number of BINs to generate (1 to 100) in the "Quantity" field.
4. Click **Generate BINs**.
5. View the generated BINs in the textarea.
6. Click **Copy All** to copy the BINs to the clipboard or **Download Results** to save as a text file.
7. Click **Clear** to reset.

## Notes
- This tool is for educational and testing purposes only. Do not use generated cards for illegal activities.
- The BIN Checker requires a bin-list-data.csv file in the root directory to function properly.
- The application includes animations and loading spinners to enhance the user experience.

## Credits
- **Made by Walter**
- Join the community on Discord: discord.gg/rgWcEw5G8a
