/*
5. Joining & Conversion Methods :
--------------------------------
    a. join(), toString(), toLocaleString()
*/


/*
1. join() – Convert Array to String with a Separator :            array.join(separator);
-----------------------------------------------------

        a. Joins all array elements into a **single string**.
        b. `separator` is optional (default: **comma `,`**).
        c. Returns a **new string** (does not modify the original array). */

        let words = ["Hello", "World", "JavaScript"];
        let sentence = words.join(" "); 

        console.log(sentence); // "Hello World JavaScript"
        console.log(words);    // ["Hello", "World", "JavaScript"] (unchanged)

        let numbers = [1, 2, 3, 4, 5];
        console.log(numbers.join("-")); // "1-2-3-4-5"


/*
2. toString() – Convert Array to a Comma-Separated String :        array.toString();
-------------------------------------------------------

        a. Converts an array to a **comma-separated string**.
        b. Works similar to `join()`, but always uses a **comma `,`** as a separator.
        c. Returns a **new string** (does not modify the original array). */

        let colors = ["Red", "Green", "Blue"];
        let colorString = colors.toString();

        console.log(colorString); // "Red,Green,Blue"
        console.log(colors);      // ["Red", "Green", "Blue"] (unchanged)

        let mixedArray = [10, "Hello", true, null];
        console.log(mixedArray.toString()); // "10,Hello,true,"


/*
3. toLocaleString() – Convert Array Elements to a Locale-Specific String :  array.toLocaleString(locales, options);
--------------------------------------------------------------

        a. Converts array elements to a **localized string** (useful for formatting numbers, dates, currencies, etc.).
        b. Uses **default locale** unless `locales` is provided.
        c. Returns a **new string** (does not modify the original array). */

        let amounts = [1000, 2000, 3000];
        console.log(amounts.toLocaleString("en-US"));  // "1,000,2,000,3,000" (formatted for US)
        console.log(amounts.toLocaleString("de-DE"));  // "1.000,2.000,3.000" (formatted for Germany)

        let dates = [new Date(2025, 3, 15), new Date(2025, 4, 20)];
        console.log(dates.toLocaleString("en-US")); // "4/15/2025, 12:00:00 AM, 5/20/2025, 12:00:00 AM"

