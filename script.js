<script>
var a = 1;                    // Declare the starting value for a.
for (var a; a <= 100; a++) {  // Use for or while loop.
  if (a % 15 == 0) {          // Use the modulo function, which uses the remainder of divided numbers. 
                              // Also, the 15 should be logged first, otherwise will invoke the least common multiplier
    console.log("fizzbuzz")   // 
  } else if (a % 5 == 0) {    // This demonstrates that the math is working correctly.
    console.log("buzz")       //
  } else if (a % 3 == 0) {    // 
    console.log("fizz")       //
  }                           //
  else {                      // 
    console.log(a);           // Log the number if there is no replacement. 
  }
}
</script>