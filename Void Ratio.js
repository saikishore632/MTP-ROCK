function calcBMI () {
    // (A) Get elements
    let bmi = null,
        
        weight = parseFloat(document.getElementById("bmi-weight").value),
        
        results = document.getElementById("bmi-results");
   
    // (B) Calculate BMI
    // Metric BMI = Mass (kg) / Height (m) square 
    
    bmi = (weight);
    bmi= bmi/(1-bmi);
        // Round off
     // Round off 2 decimal places
   
    // (C) Show Results
    bmi = Math.round(bmi * 100) / 100; // Round off 2 decimal places
    
      results.innerHTML = " Void Ratio is - " + bmi ;
     
      return false;
  }