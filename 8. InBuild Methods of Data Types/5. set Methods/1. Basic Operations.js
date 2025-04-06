/*
1. Basic Operations :
---------------------

1. add() – Add a Unique Value to the Set :                     set.add(value);
--------------------------------------------

        a. Adds a new value to the Set (only if it’s not already present).
        b. Returns the updated Set object.
        c. Duplicates are automatically ignored.

        let mySet = new Set();
        mySet.add(10);
        mySet.add(20);
        mySet.add(10); // Duplicate, will be ignored

        console.log(mySet); // Set(2) {10, 20}


/*
2. delete() – Remove a Specific Value :                        set.delete(value);
-----------------------------------------

        a. Removes the specified value from the Set.
        b. Returns true if the value existed and was removed.
        c. Returns false if the value was not found.

        let set2 = new Set(["apple", "banana", "cherry"]);
        let result = set2.delete("banana");

        console.log(set2);  // Set(2) {"apple", "cherry"}
        console.log(result); // true


/*
3. has() – Check if a Value Exists :                          set.has(value);
----------------------------------------

        a. Checks if the specified value exists in the Set.
        b. Returns true or false.

        let set3 = new Set([1, 2, 3]);
        console.log(set3.has(2)); // true
        console.log(set3.has(5)); // false


/*
4. clear() – Remove All Values from Set :                     set.clear();
------------------------------------------

        a. Empties the Set (removes all values).
        b. The Set becomes empty (size = 0).

        let set4 = new Set(["a", "b", "c"]);
        set4.clear();

        console.log(set4); // Set(0) {}


/*
5. size – Get the Number of Elements :                        set.size;
---------------------------------------

        a. Returns the total number of unique elements in the Set.
        b. It’s a property, not a method (no parentheses).

        let set5 = new Set([10, 20, 30, 30]);
        console.log(set5.size); // 3  (duplicates are not counted)


/*
==================================Real World================================

❓ Q1: How can you store unique tags in a blog post?
*/
let tags = new Set();
tags.add("JavaScript");
tags.add("WebDev");
tags.add("JavaScript"); // duplicate
console.log(tags); // Set(2) {"JavaScript", "WebDev"}

/*
❓ Q2: How can you check if a user has already voted in a poll?
*/
let votedUsers = new Set(["user1", "user2"]);
if (votedUsers.has("user3")) {
    console.log("Already voted");
} else {
    votedUsers.add("user3");
    console.log("Vote counted");
}

/*
❓ Q3: How can you reset all session IDs on logout?
*/
let sessionIDs = new Set(["abc123", "def456"]);
sessionIDs.clear();
console.log(sessionIDs); // Set(0) {}

/*
❓ Q4: How can you track unique product views?
*/
let productViews = new Set();
productViews.add("ProductA");
productViews.add("ProductB");
productViews.add("ProductA"); // duplicate
console.log(productViews.size); // 2
