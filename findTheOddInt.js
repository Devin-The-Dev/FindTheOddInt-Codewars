function findOdd(A) {
    //  Collect number and it's repetitions
    //  There's only 1 integer that appears an odd number of times
    let unique = [...new Set(A)];
    console.log(unique);
    for (i = 0; i < unique.length; i++) {
        var count = 0;
        for (j = 0; j < A.length; j++) {
            console.log("" + unique[i] + "" + ":" + "" + A[j]) + "";
            if (unique[i] == A[j]) {
                count++;
                console.log("Current count: " + count);
            }
        }
        console.log("Final count for " + unique[i] + ": " + count);
        if (count % 2 !== 0) {
            console.log("ANSWER: " + unique[i]);
            return unique[i];
        }
    }
}