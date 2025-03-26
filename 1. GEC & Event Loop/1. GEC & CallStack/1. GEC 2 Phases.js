/*
🌍 Global Execution Context (GEC) in JavaScript :
-------------------------------------------------
    a. The Global Execution Context (GEC) is the default execution environment where JavaScript code runs. 
    b. It is created when a JavaScript script starts execution and contains everything needed to execute the code.

       
🔹 How the Global Execution Context Works :  
------------------------------------------
    a. Suppose we run our JS code It will create a GEC.
    b. Make note only one GEC will be created for per script and it will be destroyed when execution ends.
       But Every Functions create their own execution contexts(EC), but their EC will be inside main GEC (Nested).
    c. It contains two main parts:
            A. Memory Creation Phase (Creation Phase)
            B. Execution Phase
*/


/*
A. Memory Creation Phase (Creation Phase) :
------------------------------------------
       The JavaScript engine allocates memory for variables and functions.
       a. Variables are initialized with undefined.
       b. Functions are stored in memory as a reference.

B. Execution Phase:
------------------
       Suppose you are having 100 lines of code Now see, Every line of code will be executed one by one in GEC.
       i).  Suppose Console.log() come -> a. It will be pushed to GEC
                                          b. It will execute show output
                                          c. Than it will be removed from GEC.

       ii). Now FUnction call come -----> a. It will be pushed to GEC + It will create another EC inside GEC. + It can have another calling function that will also create EC.
                                                    |
                                                    |
                                             GEC----|            |------->EC
                                                    |----> EC--> |
                                                    |            |------->EC                           
                                          b. It will execute show output
                                          c. Than it will be removed from GEC.
    
GEC = Global Execution Context, EC = Execution Context
*/
